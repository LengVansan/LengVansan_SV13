import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddDeliveryComponent } from './components/add-delivery/add-delivery.component';
import { ListDeliveryComponent } from './components/list-delivery/list-delivery.component';
import { RegisterComponent } from './register/register.component';

// Tip: Root component of the Angular application
@Component({
  selector: 'app-root',  // Tip: Custom HTML tag to use this component in index.html
  standalone: true,  // Tip: This component is standalone and does not require NgModule
  imports: [RouterOutlet],  // Tip: Import RouterOutlet to enable routing in the template
  templateUrl: './app.component.html',  // Tip: Path to the HTML template file
  styleUrls: ['./app.component.css']  // Tip: Path to the CSS styles file
})
export class AppComponent {
  // Tip: Title property for the application, can be used in the template
  title = 'finalsv13';
}
