import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHskillComponent } from './listar-hskill.component';

describe('ListarHskillComponent', () => {
  let component: ListarHskillComponent;
  let fixture: ComponentFixture<ListarHskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarHskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
