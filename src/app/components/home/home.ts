import { Component, inject, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario-service';
import { FuncionarioModel } from '../../../models/FuncionarioModel';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirFuncModal } from '../excluir-func-modal/excluir-func-modal';
import { materialImports } from '../../material';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, materialImports],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  funcionarios = new MatTableDataSource<FuncionarioModel>();
  procurarFuncionario: FuncionarioModel[] = [];
  colunas = ['Nome','Setor','Turno','Ações','Excluir'];

  private funcionarioService = inject(FuncionarioService);
  private dialog = inject(MatDialog);

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe((data) => {
      this.funcionarios.data = data.dados;
      this.procurarFuncionario = data.dados;
      this.funcionarios.sort = this.sort;
    });
  }

  OpenDialog(id: number) {
    console.log('id passado para o modal ', id);
    this.dialog.open(ExcluirFuncModal, {
      width: '450px',
      height: '450px',
      data: { id }
    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    const filtered = this.procurarFuncionario.filter(f =>
      f.nome.toLowerCase().includes(value)
    );
    this.funcionarios.data = filtered;
  }
}
