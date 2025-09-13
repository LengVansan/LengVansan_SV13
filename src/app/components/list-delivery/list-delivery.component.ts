//Importing necessary Angular modules and services for component operation
import { Component, OnInit } from '@angular/core'; // Component decorator and lifecycle hook
import { CommonModule } from '@angular/common'; // Common directives like *ngIf, *ngFor
import { FormsModule } from '@angular/forms'; // Template-driven forms support
import { RouterModule } from '@angular/router'; // Router module for routerLink directive
import { Router } from '@angular/router'; // Navigation service for routing
import { DeliveryService } from '../../services/delivery.service'; // Service for delivery data operations
import { Delivery } from '../../models/delivery.model'; // Delivery data model interface

//Standalone component with selector, imported modules, and template URL
@Component({
  selector: 'app-list-delivery', // HTML tag for this component
  standalone: true, // Standalone component without NgModule
  imports: [CommonModule, FormsModule, RouterModule], // Imported modules for template usage
  templateUrl: './list-delivery.component.html' // External HTML template file
})

// Manages delivery list display, editing, and deletion
export class ListDeliveryComponent implements OnInit {
  // Populated from DeliveryService, used for rendering delivery cards
  deliveries: Delivery[] = [];
  // Explain: Null means no delivery is in edit mode
  editingId: number | null = null;
  // initialized with empty/default values, bound to edit form inputs
  editModel: Delivery = { id: 0, name: '', phone: '', location: '', item: '', deliveryDate: '', packageSize: '', notes: '' };
  // Provides access to delivery data operations and navigation
  constructor(
    private deliveryService: DeliveryService,
    private router: Router
  ) {}
  // Loads the initial list of deliveries
  ngOnInit(): void {
    this.refresh();
  }

  // Ensures UI reflects current delivery data
  refresh(): void {
    this.deliveries = this.deliveryService.getAll();
  }
  // Explain: Sets editingId and copies delivery data to editModel for editing
  edit(d: Delivery): void {
    this.editingId = d.id;
    this.editModel = {
      id: d.id,
      name: d.name,
      phone: d.phone,
      location: d.location,
      item: d.item || '',
      deliveryDate: d.deliveryDate || '',
      packageSize: d.packageSize || '',
      notes: d.notes || ''
    };
  }
  // Validates fields, calls service update, shows confirmation, cancels edit mode, refreshes list
  update(): void {
    // Validate required fields
    if (!this.editModel.name || !this.editModel.phone || !this.editModel.location || !this.editModel.item || !this.editModel.deliveryDate || !this.editModel.packageSize || !this.editModel.notes) {
      alert('Please fill in all required fields.');
      return;
    }
    // Validate name pattern
    if (!this.editModel.name.match(/^[a-zA-Z\u1780-\u17FF\s]+$/)) {
      alert('Name must contain only letters and spaces.');
      return;
    }
    // Validate phone pattern
    if (!this.editModel.phone.match(/^(0\d{8}|0\d{9})$/)) {
      alert('Phone must be a valid Cambodian number starting with 0 followed by 8 or 9 digits.');
      return;
    }
    // Validate location pattern
    try {
      const url = new URL(this.editModel.location);
      // Check if URL contains valid map service domains
      if (!url.href.includes('google.com/maps') && !url.href.includes('goo.gl') && !url.href.includes('bing.com/maps')) {
        alert('Location must be a valid Google Maps link.');
        return;
      }
    } catch (error) {
      alert('Location must be a valid URL.');
      return;
    }
    // If all validations pass, update
    this.deliveryService.update(this.editModel);
    window.alert('Updated Successfully!');
    this.cancelEdit();
    this.refresh();
  }
  // Explain: Resets editingId to null
  cancelEdit(): void {
    this.editingId = null;
  }
  // Calls service delete and refreshes list
  delete(id: number): void {
    this.deliveryService.delete(id);
    this.refresh();
  }
  // Shows confirmation dialog, deletes if confirmed
  confirmDelete(id: number): void {
    const confirmed = confirm('Do you want to delete this delivery?');
    if (confirmed) {
      this.delete(id);
    }
  }
}
