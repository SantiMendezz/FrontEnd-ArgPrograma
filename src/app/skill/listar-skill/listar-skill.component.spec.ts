import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSkillComponent } from './listar-skill.component';

describe('ListarSkillComponent', () => {
  let component: ListarSkillComponent;
  let fixture: ComponentFixture<ListarSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
