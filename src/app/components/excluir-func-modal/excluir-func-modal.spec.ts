import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirFuncModal } from './excluir-func-modal';

describe('ExcluirFuncModal', () => {
  let component: ExcluirFuncModal;
  let fixture: ComponentFixture<ExcluirFuncModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirFuncModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirFuncModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
