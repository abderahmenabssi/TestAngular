import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAbderahmenComponent } from './test-abderahmen.component';

describe('TestAbderahmenComponent', () => {
  let component: TestAbderahmenComponent;
  let fixture: ComponentFixture<TestAbderahmenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestAbderahmenComponent]
    });
    fixture = TestBed.createComponent(TestAbderahmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
