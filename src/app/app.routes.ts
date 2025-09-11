// Tip: Import Routes type from Angular router - defines the structure for route objects
import { Routes } from '@angular/router';

// Tip: Import RegisterComponent - handles user registration functionality
import { RegisterComponent } from './register/register.component';

// Tip: Import AddDeliveryComponent - allows users to create new delivery requests
import { AddDeliveryComponent } from './components/add-delivery/add-delivery.component';

// Tip: Import ListDeliveryComponent - displays all delivery records in a list view
import { ListDeliveryComponent } from './components/list-delivery/list-delivery.component';

// Tip: Import LoginComponent - manages user authentication and login process
import { LoginComponent } from './login/login.component';

// Tip: Export the routes array - this is used by Angular's router to configure navigation
export const routes: Routes = [
    // Tip: Default route - redirects empty path to login page for initial access control
    {path: '', redirectTo: 'login', pathMatch: 'full'},

    // Tip: Login route - displays login form for user authentication
    {path:'login', component: LoginComponent},

    // Tip: Register route - shows registration form for new user signups
    {path:'register', component: RegisterComponent},

    // Tip: List delivery route - renders the delivery list component to view all deliveries
    {path:'list', component: ListDeliveryComponent},

    // Tip: Add delivery route - loads the form component for creating new delivery entries
    {path:'add-delivery', component: AddDeliveryComponent}
];
