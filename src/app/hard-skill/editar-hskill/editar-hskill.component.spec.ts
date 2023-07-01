import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHskillComponent } from './editar-hskill.component';

describe('EditarHskillComponent', () => {
  let component: EditarHskillComponent;
  let fixture: ComponentFixture<EditarHskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarHskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
