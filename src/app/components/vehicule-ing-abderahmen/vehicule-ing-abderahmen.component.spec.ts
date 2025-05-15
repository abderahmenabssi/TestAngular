import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeIngComponent } from './vehicule-ing-abderahmen.component';

describe('VehiculeIngComponent', () => {
  let component: VehiculeIngComponent;
  let fixture: ComponentFixture<VehiculeIngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculeIngComponent]
    });
    fixture = TestBed.createComponent(VehiculeIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
