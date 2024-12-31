import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  @Input() isSidebarCollapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  addNewFarm() {
    console.log('Add new farm clicked');
  }

  exportData() {
    console.log('Export data clicked');
  }

  showNotifications() {
    console.log('Notifications clicked');
  }
}