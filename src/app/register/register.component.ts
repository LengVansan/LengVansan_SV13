import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',  // Custom HTML tag used to include this component in templates
  imports: [RouterModule, FormsModule],  // Modules imported for use in this standalone component
  standalone: true,  // Indicates this is a standalone component, no need for NgModule
  templateUrl: './register.component.html',  // Path to the HTML template file
  styleUrl: './register.component.css',  //  Path to the CSS styles file
})
//  Class that defines the component's logic and properties
export class RegisterComponent {
  //Constructor that injects the Router service for programmatic navigation
  constructor(private router: Router) {}

  // Event handler triggered when the registration form is submitted
  onRegister() {
    console.log('Register button clicked');  // Tip: Log for debugging the button click
    alert('Register Successfully');
    this.router.navigate(['/dashboard']);
  }

  // Method to handle navigation to the login page
  goToLogin() {
    // Navigate to the login page using the Router service
    this.router.navigate(['/login']);
  }
}
