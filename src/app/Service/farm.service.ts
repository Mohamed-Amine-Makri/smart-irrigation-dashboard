import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  private farms = [
    {
      id: 1,
      name: "Ferme Alpha",
      humidity: 45.5,
      temperature: 22.3,
      connectedValves: 3,
      totalValves: 5,
      weatherStatus: "Sunny",
      location: "36.8065, 10.1815"
    },
    {
      id: 2,
      name: "Ferme Beta",
      humidity: 30.0,
      temperature: 18.2,
      connectedValves: 2,
      totalValves: 2,
      weatherStatus: "Rainy",
      location: "35.8256, 10.6084"
    },
    {
      id: 3,
      name: "Ferme Gamma",
      humidity: 40.0,
      temperature: 21.0,
      connectedValves: 4,
      totalValves: 6,
      weatherStatus: "Cloudy",
      location: "37.2589, 10.7123"
    },
    {
      id: 4,
      name: "Ferme Delta",
      humidity: 50.5,
      temperature: 24.0,
      connectedValves: 3,
      totalValves: 5,
      weatherStatus: "Windy",
      location: "36.1234, 10.5789"
    },
    {
      id: 5,
      name: "Ferme Epsilon",
      humidity: 35.0,
      temperature: 19.5,
      connectedValves: 2,
      totalValves: 3,
      weatherStatus: "Sunny",
      location: "37.6578, 10.9832"
    },
    {
      id: 6,
      name: "Ferme Zeta",
      humidity: 45.0,
      temperature: 23.0,
      connectedValves: 5,
      totalValves: 7,
      weatherStatus: "Rainy",
      location: "36.9876, 10.3456"
    },
    {
      id: 7,
      name: "Ferme Eta",
      humidity: 42.5,
      temperature: 20.0,
      connectedValves: 4,
      totalValves: 5,
      weatherStatus: "Cloudy",
      location: "35.9367, 10.4689"
    },
    {
      id: 8,
      name: "Ferme Theta",
      humidity: 38.2,
      temperature: 22.5,
      connectedValves: 3,
      totalValves: 4,
      weatherStatus: "Windy",
      location: "37.2156, 10.7845"
    },
    {
      id: 9,
      name: "Ferme Iota",
      humidity: 33.3,
      temperature: 25.0,
      connectedValves: 6,
      totalValves: 8,
      weatherStatus: "Sunny",
      location: "36.6543, 10.1456"
    },
    {
      id: 10,
      name: "Ferme Kappa",
      humidity: 47.2,
      temperature: 21.5,
      connectedValves: 4,
      totalValves: 5,
      weatherStatus: "Rainy",
      location: "36.1357, 10.2768"
    },
    {
      id: 11,
      name: "Ferme Lambda",
      humidity: 41.0,
      temperature: 23.5,
      connectedValves: 5,
      totalValves: 6,
      weatherStatus: "Cloudy",
      location: "37.5492, 10.9513"
    },
    {
      id: 12,
      name: "Ferme Mu",
      humidity: 39.0,
      temperature: 22.0,
      connectedValves: 3,
      totalValves: 4,
      weatherStatus: "Windy",
      location: "35.8573, 10.3247"
    }
    
    ,
    // Add more farms here...
    {
      id: 13,
      name: "Ferme Omega",
      humidity: 42.0,
      temperature: 22.5,
      connectedValves: 4,
      totalValves: 5,
      weatherStatus: "Rainy",
      location: "36.6543, 10.1456"
    },
    // Add more farms here...
    {
      id: 14,
      name: "Ferme Pi",
      humidity: 38.5,
      temperature: 23.0,
      connectedValves: 5,
      totalValves: 6,
      weatherStatus: "Cloudy",
      location: "37.5492, 10.9513"
    },
    // Add more farms here...

    
  ];
  

  getFarms(): Observable<any[]> {
    return of(this.farms);
  }
}
