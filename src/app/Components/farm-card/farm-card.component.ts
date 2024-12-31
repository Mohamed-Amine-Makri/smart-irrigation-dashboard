import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-farm-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './farm-card.component.html',
  styleUrl: './farm-card.component.css'
})
export class FarmCardComponent {
  @Input() farm: any;
 


}