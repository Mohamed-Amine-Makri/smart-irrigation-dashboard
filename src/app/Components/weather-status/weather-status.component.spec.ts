import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherStatusComponent } from './weather-status.component';

describe('WeatherStatusComponent', () => {
  let component: WeatherStatusComponent;
  let fixture: ComponentFixture<WeatherStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
