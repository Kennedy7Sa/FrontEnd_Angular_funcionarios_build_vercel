import { Component, inject, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario-service';
import { FuncionarioModel } from '../../../models/FuncionarioModel';
import { ActivatedRoute, RouterModule,  } from '@angular/router';
import { materialImports } from '../../material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-funcionarios',
  imports: [materialImports,CommonModule,RouterModule],
  templateUrl: './detalhes-funcionarios.html',
  styleUrl: './detalhes-funcionarios.css'
})
export class DetalhesFuncionarios implements OnInit{

  funcionario! : FuncionarioModel;
private funcionarioService = inject(FuncionarioService)
private route = inject(ActivatedRoute)


  ngOnInit(): void {
    //pegando o id com o route vindo de ActivatedRoute
const id = Number(this.route.snapshot.paramMap.get('id'));


    this.funcionarioService.BuscarFuncionarioPorId(id).subscribe((data)=>{
      this.funcionario = data.dados;
    });
      
  }
}
