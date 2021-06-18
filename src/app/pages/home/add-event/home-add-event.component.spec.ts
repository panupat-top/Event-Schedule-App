import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAddEventComponent } from './home-add-event.component';

describe('HomeAddEventComponent', () => {
  let component: HomeAddEventComponent;
  let fixture: ComponentFixture<HomeAddEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAddEventComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAddEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
