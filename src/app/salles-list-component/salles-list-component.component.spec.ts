import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesListComponentComponent } from './salles-list-component.component';

describe('SallesListComponentComponent', () => {
  let component: SallesListComponentComponent;
  let fixture: ComponentFixture<SallesListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallesListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SallesListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
