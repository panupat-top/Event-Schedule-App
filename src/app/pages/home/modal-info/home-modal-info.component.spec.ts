import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeModalInfoComponent } from './home-modal-info.component';

describe('HomeModalInfoComponent', () => {
  let component: HomeModalInfoComponent;
  let fixture: ComponentFixture<HomeModalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeModalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeModalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
