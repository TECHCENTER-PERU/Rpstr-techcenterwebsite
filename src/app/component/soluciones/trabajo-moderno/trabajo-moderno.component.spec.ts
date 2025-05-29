import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoModernoComponent } from './trabajo-moderno.component';

describe('TrabajoModernoComponent', () => {
  let component: TrabajoModernoComponent;
  let fixture: ComponentFixture<TrabajoModernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrabajoModernoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajoModernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
