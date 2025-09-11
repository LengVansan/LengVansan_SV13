// Tip: Import Component decorator from Angular core to define the component metadata
import { Component } from '@angular/core';
// Tip: Import RouterModule for routing directives and Router service for navigation
import { RouterModule, Router } from '@angular/router';
// Tip: Import FormsModule to enable template-driven forms in the component
import { FormsModule } from '@angular/forms';

// Tip: Component decorator that configures the component with selector, imports, standalone status, template, and styles
@Component({
  selector: 'app-register',  // Tip: Custom HTML tag used to include this component in templates
  imports: [RouterModule],  // Tip: Modules imported for use in this standalone component
  standalone: true,  // Tip: Indicates this is a standalone component, no need for NgModule
  templateUrl: './register.component.html',  // Tip: Path to the HTML template file
  styleUrl: './register.component.css',  // Tip: Path to the CSS styles file
})
// Tip: Class that defines the component's logic and properties
export class RegisterComponent {
  // Tip: Constructor that injects the Router service for programmatic navigation
  constructor(private router: Router) {}

  // Tip: Event handler triggered when the registration form is submitted
  onRegister() {
    console.log('Register button clicked');  // Tip: Log for debugging the button click
    console.log('Navigating to add-delivery');  // Tip: Log the navigation intent
    // Tip: Navigate to the add-delivery page after successful registration
    this.router.navigate(['/add-delivery']);
    console.log('Credentials entered, navigating to add-delivery');  // Tip: Additional log for navigation
    // Tip: Ensure navigation to add-delivery page is completed
    this.router.navigate(['/add-delivery']);
  }

  // Tip: Method to handle navigation to the login page
  goToLogin() {
    // Tip: Navigate to the login page using the Router service
    this.router.navigate(['/login']);
  }
}
