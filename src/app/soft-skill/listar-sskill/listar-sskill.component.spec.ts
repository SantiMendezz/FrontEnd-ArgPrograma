import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSskillComponent } from './listar-sskill.component';

describe('ListarSskillComponent', () => {
  let component: ListarSskillComponent;
  let fixture: ComponentFixture<ListarSskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
