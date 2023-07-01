import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHskillComponent } from './registrar-hskill.component';

describe('RegistrarHskillComponent', () => {
  let component: RegistrarHskillComponent;
  let fixture: ComponentFixture<RegistrarHskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarHskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarHskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
