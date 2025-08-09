import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesFuncionarios } from './detalhes-funcionarios';

describe('DetalhesFuncionarios', () => {
  let component: DetalhesFuncionarios;
  let fixture: ComponentFixture<DetalhesFuncionarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesFuncionarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesFuncionarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
