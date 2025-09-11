import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Tip: Component decorator defining metadata for the login component
@Component({
  selector: 'app-login',  // Tip: Custom HTML tag to use this component
  imports: [RouterModule, FormsModule, CommonModule],  // Tip: Modules imported for routing, forms, and common directives
  standalone: true,  // Tip: Standalone component, no need for module declaration
  templateUrl: './login.component.html',  // Tip: Path to the HTML template
  styleUrls: ['./login.component.css']  // Tip: Path to the CSS styles
})
export class LoginComponent {
  // Tip: Property bound to username input field using two-way data binding
  username: string = '';
  // Tip: Property bound to password input field using two-way data binding
  password: string = '';

  // Tip: Constructor injecting Router service for programmatic navigation
  constructor(private router: Router) {}

  // Tip: Event handler triggered when the login form is submitted
  onSubmit() {
    console.log('Login button clicked');  // Tip: Log for debugging purposes
    console.log('Login attempt:', {  // Tip: Log the entered credentials
      username: this.username,
      password: this.password
    });

    // Tip: Check if the form is valid
    if (this.username && this.password) {
      console.log('Credentials entered, routerLink will navigate to add-delivery');  // Tip: Success message
    } else {
      console.log('Please enter both username and password');  // Tip: Error message for empty fields
    }
  }

  // Tip: Event handler for the "Forgot password?" link to navigate to register page
  goToRegister(event: Event) {
    event.preventDefault();  // Tip: Prevent default link behavior to avoid page reload
    this.router.navigate(['/register']);  // Tip: Navigate to the registration page
  }
}
