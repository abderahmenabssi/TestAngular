import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehiculeIngAbderahmenComponent } from './add-vehicule-ing-abderahmen.component';

describe('AddVehiculeIngComponent', () => {
  let component: AddVehiculeIngAbderahmenComponent;
  let fixture: ComponentFixture<AddVehiculeIngAbderahmenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVehiculeIngAbderahmenComponent]
    });
    fixture = TestBed.createComponent(AddVehiculeIngAbderahmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
