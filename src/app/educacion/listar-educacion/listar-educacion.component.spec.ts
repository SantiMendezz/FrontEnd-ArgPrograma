import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEducacionComponent } from './listar-educacion.component';

describe('ListarEducacionComponent', () => {
  let component: ListarEducacionComponent;
  let fixture: ComponentFixture<ListarEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
