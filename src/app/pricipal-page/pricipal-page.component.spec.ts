import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricipalPageComponent } from './pricipal-page.component';

describe('PricipalPageComponent', () => {
  let component: PricipalPageComponent;
  let fixture: ComponentFixture<PricipalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricipalPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricipalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
