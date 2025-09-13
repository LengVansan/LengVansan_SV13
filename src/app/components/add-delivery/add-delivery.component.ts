// Explain: This component handles the complete delivery booking process with form validation and data submission
import { Component } from '@angular/core'; // Core Angular component decorator
import { CommonModule } from '@angular/common'; // Common Angular directives (*ngIf, *ngFor)
import { FormsModule } from '@angular/forms'; // Template-driven forms with ngModel
import { RouterModule } from '@angular/router'; // Router module for routerLink directive
import { Router } from '@angular/router'; // Navigation service (available for future use)
import { DeliveryService } from '../../services/delivery.service'; // Custom service for delivery operations
import { ListDeliveryComponent } from '../list-delivery/list-delivery.component'; // Child component for delivery list

// Explain: Uses Angular 14+ standalone components for better tree-shaking and modularity
@Component({
  selector: 'app-add-delivery', // HTML tag to use this component
  standalone: true, // Standalone component (no NgModule required)
  imports: [CommonModule, FormsModule, RouterModule, ListDeliveryComponent], // Imported modules and components
  templateUrl: './add-delivery.component.html' // External HTML template file
})
export class AddDeliveryComponent {

  // Explain: These properties are bound using [(ngModel)] for automatic data synchronization
  name = ''; // Customer's full name for delivery records and communication
  phone = ''; // Contact number supporting Cambodian formats  0XXXXXXXXX)
  location = ''; // Google Maps URL for precise delivery destination
  item = ''; // Description of package contents for handling instructions
  deliveryDate = ''; // Scheduled delivery date using HTML5 date picker
  packageSize = ''; // Size category (small/medium/large) 
  notes = ''; // Additional delivery instructions or special requirements
  successMessage = ''; // Success feedback message after form submission
  showSuccess = false; // Flag to control success message visibility

  // Explain: These properties are bound to #templateReference variables in HTML for validation access
  locationInput: any; // Reference to location input for URL validation
  phoneInput: any; // Reference to phone input for pattern validation
  itemInput: any; // Reference to item input for required validation
  dateInput: any; // Reference to date input for required validation
  sizeInput: any; // Reference to size select for required validation
  notesInput: any; // Reference to notes textarea for required validation

  // Explain: Angular's dependency injection provides service instances automatically
  constructor(
    private deliveryService: DeliveryService, // Service for CRUD operations on delivery data
    private router: Router // Navigation service (available for future routing needs)
  ) {}

  // Method called when form is submitted
  add(): void {
    console.log('Add delivery button clicked');
    // Check if all required fields are filled
    if (this.name && this.phone && this.location && this.item && this.deliveryDate && this.packageSize && this.notes) {
      // Validate name format (letters English , khmer, and spaces only)
      if (!this.name.match(/^[a-zA-Z\u1780-\u17FF\s]+$/)) {
        alert('Name must contain only Khmer or English letters and spaces, no numbers.');
        return;
      }
      // Validate phone number format
      if (!this.phone.match(/^(0\d{8}|0\d{9})$/)) {
        alert('Phone must be in format 0XXXXXXXXX.');
        return;
      }
      // Validate location is a valid Maps link (Google or Bing)
      try {
        const url = new URL(this.location);
        // Check if URL contains valid map service domains
        if (!url.href.includes('google.com/maps') && !url.href.includes('goo.gl') && !url.href.includes('bing.com/maps')) {
          alert('Location must be a valid Google Maps link.');
          return;
        }
      } catch {
        alert('Location must be a valid URL.');
        return;
      }
      // Add the delivery using the delivery service
      this.deliveryService.add({
        id: 0, // ID will be assigned by the service
        name: this.name,
        phone: this.phone,
        location: this.location,
        item: this.item,
        deliveryDate: this.deliveryDate,
        packageSize: this.packageSize,
        notes: this.notes
      });
      // Show success message to user
      this.showSuccessMessage('Delivery added successfully!');
      // Clear the form inputs
      this.clearForm();
      // The list of deliveries will update automatically since it's part of the same component
    } else {
      // Alert user if required fields are missing
      alert('Please fill in all required fields.');
    }
  }
  // Show a success message (currently using alert)
  showSuccessMessage(message: string): void {
    alert(message);
  }
  // Reset all form fields to empty strings
  clearForm(): void {
    this.name = '';
    this.phone = '';
    this.location = '';
    this.item = '';
    this.deliveryDate = '';
    this.packageSize = '';
    this.notes = '';
  }
}
