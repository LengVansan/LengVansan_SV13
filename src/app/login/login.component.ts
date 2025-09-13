import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Tip: Component decorator defining metadata for the login component
@Component({
  selector: 'app-login',  // Custom HTML tag to use this component
  imports: [RouterModule, FormsModule, CommonModule],  // Tip: Modules imported for routing, forms, and common directives
  standalone: true,  // Standalone component, no need for module declaration
  templateUrl: './login.component.html',  // Path to the HTML template
  styleUrls: ['./login.component.css']  //  Path to the CSS styles
})
export class LoginComponent {
  //Property bound to username input field using two-way data binding
  username: string = '';
  // Property bound to password input field using two-way data binding
  password: string = '';

  // Constructor injecting Router service for programmatic navigation
  constructor(private router: Router) {}

  // Event handler triggered when the login form is submitted
  onSubmit() {
    console.log('Login button clicked');  //  Log for debugging purposes
    console.log('Login attempt:', {  //  Log the entered credentials
      username: this.username,
      password: this.password
    });

    // Tip: Check if the form is valid
    if (this.username && this.password) {
      console.log('Credentials entered, routerLink will navigate to add-delivery');  // Success message
    } else {
      console.log('Please enter both username and password');  // Error message for empty fields
    }
  }

  // Event handler for the "Forgot password?" link to navigate to register page
  goToRegister(event: Event) {
    event.preventDefault();  // Prevent default link behavior to avoid page reload
    this.router.navigate(['/register']);  // Navigate to the registration page
  }
}
