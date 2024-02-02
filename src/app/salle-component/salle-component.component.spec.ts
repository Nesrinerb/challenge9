import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleComponentComponent } from './salle-component.component';

describe('SalleComponentComponent', () => {
  let component: SalleComponentComponent;
  let fixture: ComponentFixture<SalleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
