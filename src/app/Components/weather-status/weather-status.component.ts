import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-status.component.html',
  styleUrls: ['./weather-status.component.css']
})
export class WeatherStatusComponent implements OnInit {
  weatherStatus: string = 'Sunny';
  temperature: number = 25;
  humidity: number = 60;
  windSpeed: number = 10;
  icon: string = 'fa-sun';

  ngOnInit() {

    this.getWeatherStatus();
  }

  private getWeatherStatus() {
    setTimeout(() => {
      this.weatherStatus = 'Partly Cloudy';
      this.temperature = 25;
      this.humidity = 65;
      this.windSpeed = 8;
      this.icon = 'fa-cloud-sun';
    }, 1000);
  }

  getWeatherIcon(): string {
    switch (this.weatherStatus.toLowerCase()) {
      case 'sunny': return 'fa-sun';
      case 'partly cloudy': return 'fa-cloud-sun';
      case 'cloudy': return 'fa-cloud';
      case 'rainy': return 'fa-cloud-rain';
      case 'stormy': return 'fa-bolt';
      case 'snowy': return 'fa-snowflake';
      default: return 'fa-question';
    }
  }
}