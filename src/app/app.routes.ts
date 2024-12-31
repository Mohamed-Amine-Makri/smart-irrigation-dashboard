import { DashboardComponent } from "./Components/dashboard/dashboard.component";
import { CalendarComponent } from './Components/calendar/calendar.component';
import { WeatherStatusComponent } from './Components/weather-status/weather-status.component';
import { Routes } from '@angular/router';
import { FarmCardComponent } from "./Components/farm-card/farm-card.component";

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calendar', component: CalendarComponent },
];