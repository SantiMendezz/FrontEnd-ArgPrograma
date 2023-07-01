import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSskillComponent } from './registrar-sskill.component';

describe('RegistrarSskillComponent', () => {
  let component: RegistrarSskillComponent;
  let fixture: ComponentFixture<RegistrarSskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarSskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarSskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
