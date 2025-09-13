import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AddDeliveryComponent } from './components/add-delivery/add-delivery.component';
import { ListDeliveryComponent } from './components/list-delivery/list-delivery.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Export the routes array - this is used by Angular's router to configure navigation
export const routes: Routes = [
    //  Default route - redirects empty path to login page for initial access control
    {path: '', redirectTo: 'login', pathMatch: 'full'},

    // Login route - displays login form for user authentication
    {path:'login', component: LoginComponent},

    //  Register route - shows registration form for new user signups
    {path:'register', component: RegisterComponent},

    //  List delivery route - renders the delivery list component to view all deliveries
    {path:'list', component: ListDeliveryComponent},

    // Add delivery route - loads the form component for creating new delivery entries
    {path:'add-delivery', component: AddDeliveryComponent},

    // Dashboard route - displays the main dashboard after registration
    {path:'dashboard', component: DashboardComponent}
];
