import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  goToAddDelivery(): void {
    this.router.navigate(['/add-delivery']);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
