import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarColorComponent } from './navbar-color.component';

describe('NavbarColorComponent', () => {
  let component: NavbarColorComponent;
  let fixture: ComponentFixture<NavbarColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
