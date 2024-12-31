import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmCardComponent } from './farm-card.component';

describe('FarmCardComponent', () => {
  let component: FarmCardComponent;
  let fixture: ComponentFixture<FarmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
