import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FarmCardComponent } from './Components/farm-card/farm-card.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { WeatherStatusComponent } from './Components/weather-status/weather-status.component';
import { HeaderComponent } from './Components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, CalendarComponent, 
    DashboardComponent, FarmCardComponent, 
    SidebarComponent, WeatherStatusComponent, HeaderComponent,
    NgClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

}




