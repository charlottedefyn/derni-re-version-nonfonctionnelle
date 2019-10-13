import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilBackendComponent } from './accueil-backend.component';

describe('AccueilBackendComponent', () => {
  let component: AccueilBackendComponent;
  let fixture: ComponentFixture<AccueilBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
