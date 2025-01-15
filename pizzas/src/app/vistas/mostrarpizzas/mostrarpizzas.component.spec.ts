import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarpizzasComponent } from './mostrarpizzas.component';

describe('MostrarpizzasComponent', () => {
  let component: MostrarpizzasComponent;
  let fixture: ComponentFixture<MostrarpizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarpizzasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarpizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
