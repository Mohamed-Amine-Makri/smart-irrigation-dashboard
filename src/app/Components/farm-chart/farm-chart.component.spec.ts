import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmChartComponent } from './farm-chart.component';

describe('FarmChartComponent', () => {
  let component: FarmChartComponent;
  let fixture: ComponentFixture<FarmChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
