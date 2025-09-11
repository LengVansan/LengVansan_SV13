// Tip: Import Injectable from Angular core for service decorator
import { Injectable } from '@angular/core';
// Tip: Import BehaviorSubject from RxJS for reactive data management
import { BehaviorSubject } from 'rxjs';
// Tip: Import Delivery interface for type safety
import { Delivery } from '../models/delivery.model';

// Tip: Injectable decorator with providedIn root for singleton service
@Injectable({ providedIn: 'root' })
// Tip: Class definition for DeliveryService
export class DeliveryService {
  // Tip: Private array to store deliveries
  private deliveries: Delivery[] = [];

  // Tip: BehaviorSubject for reactive updates to components
  private deliveriesSubject = new BehaviorSubject<Delivery[]>([]);
  // Tip: Observable for components to subscribe to changes
  deliveries$ = this.deliveriesSubject.asObservable();

  // Tip: Constructor to initialize the subject
  constructor() {
    // Tip: Initialize with empty array
    this.deliveriesSubject.next(this.deliveries);
  }

  // Tip: Method to get all deliveries
  getAll(): Delivery[] {
    return this.deliveries;
  }

  // Tip: Method to add a new delivery
  add(delivery: Delivery): void {
    delivery.id = Date.now();
    this.deliveries.push(delivery);
    this.deliveriesSubject.next([...this.deliveries]); // emit updated list
  }

  // Tip: Method to update an existing delivery
  update(updated: Delivery): void {
    const idx = this.deliveries.findIndex(d => d.id === updated.id);
    if (idx !== -1) {
      this.deliveries[idx] = updated;
      this.deliveriesSubject.next([...this.deliveries]);
    }
  }

  // Tip: Method to delete a delivery by id
  delete(id: number): void {
    this.deliveries = this.deliveries.filter(d => d.id !== id);
    this.deliveriesSubject.next([...this.deliveries]);
  }
}
