import { Component, OnInit, OnDestroy, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FarmService } from '../../Service/farm.service';
import { FarmCardComponent } from '../farm-card/farm-card.component';
import { CommonModule } from '@angular/common';
import { catchError, finalize, takeUntil } from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { FarmChartComponent } from '../farm-chart/farm-chart.component';
import { WeatherStatusComponent } from '../weather-status/weather-status.component';

declare var bootstrap: any;

interface Farm {
  id: number;
  name: string;
  humidity: number;
  temperature: number;
  connectedValves: number;
  totalValves: number;
  weatherStatus: string;
  location: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FarmCardComponent, CommonModule, RouterModule , FarmChartComponent , WeatherStatusComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  farms: Farm[] = [];
  chunkedFarms: Farm[][] = [];
  loading = false;
  error: string | null = null;
  private destroy$ = new Subject<void>();
  private carousel: any;
  private isBrowser: boolean;

  constructor(
    private farmService: FarmService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.loadFarms();
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initCarousel();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initCarousel(): void {
    if (this.isBrowser) {
      setTimeout(() => {
        const carouselElement = document.getElementById('farmCarousel');
        if (carouselElement) {
          this.carousel = new bootstrap.Carousel(carouselElement, {
            interval: 2000,
            wrap: true
          });

          const nextButton = document.querySelector('[data-bs-slide="next"]');
          const prevButton = document.querySelector('[data-bs-slide="prev"]');

          if (nextButton) {
            nextButton.addEventListener('click', () => this.carousel.next());
          }
          if (prevButton) {
            prevButton.addEventListener('click', () => this.carousel.prev());
          }
        }
      }, 0);
    }
  }

  private loadFarms(): void {
    this.loading = true;
    this.error = null;

    this.farmService.getFarms().pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        console.error('Error fetching farms:', error);
        this.error = 'Failed to load farms. Please try again later.';
        return of([]);
      }),
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: (data: Farm[]) => {
        this.farms = data;
        this.chunkFarms();
        if (this.isBrowser) {
          this.initCarousel();
        }
      },
      error: (error) => {
        console.error('Subscription error:', error);
        this.error = 'An unexpected error occurred.';
      }
    });
  }

  private chunkFarms(): void {
    const chunkSize = 3;
    this.chunkedFarms = [];
    for (let i = 0; i < this.farms.length; i += chunkSize) {
      this.chunkedFarms.push(this.farms.slice(i, i + chunkSize));
    }
  }

  retryLoad(): void {
    if (this.error) {
      this.loadFarms();
    }
  }

  trackByFarmId(index: number, farm: Farm): number {
    return farm.id;
  }

  get hasNoFarms(): boolean {
    return !this.loading && !this.error && this.farms.length === 0;
  }

  get farmCount(): number {
    return this.farms.length;
  }
}