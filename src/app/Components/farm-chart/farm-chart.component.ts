import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-farm-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './farm-chart.component.html',
  styleUrls: ['./farm-chart.component.css']
})
export class FarmChartComponent implements OnInit {
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 0,
        max: 100
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  
  public barChartType: ChartType = 'bar';
  
  public barChartData: ChartConfiguration['data'] = {
    labels: ['Farm A', 'Farm B', 'Farm C', 'Farm D', 'Farm E'],
    datasets: [
      { data: [65, 59, 80, 81, 56], label: 'Humidity (%)' },
      { data: [28, 48, 40, 19, 86], label: 'Temperature (°C)' },
      { data: [60, 75, 50, 80, 90], label: 'Connected Valves (%)' },
      { data: [40, 55, 35, 70, 50], label: 'Water Needed (L/m²)' }
    ]
  };

  ngOnInit(): void {
    // The chart will be initialized with the static data defined above
  }
}