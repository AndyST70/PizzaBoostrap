import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarclienteComponent } from './agregarcliente.component';

describe('AgregarclienteComponent', () => {
  let component: AgregarclienteComponent;
  let fixture: ComponentFixture<AgregarclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarclienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
