import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionesEmpresarialesComponent } from './aplicaciones-empresariales.component';

describe('AplicacionesEmpresarialesComponent', () => {
  let component: AplicacionesEmpresarialesComponent;
  let fixture: ComponentFixture<AplicacionesEmpresarialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplicacionesEmpresarialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplicacionesEmpresarialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
