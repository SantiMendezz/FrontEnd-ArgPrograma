import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSskillComponent } from './editar-sskill.component';

describe('EditarSskillComponent', () => {
  let component: EditarSskillComponent;
  let fixture: ComponentFixture<EditarSskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
