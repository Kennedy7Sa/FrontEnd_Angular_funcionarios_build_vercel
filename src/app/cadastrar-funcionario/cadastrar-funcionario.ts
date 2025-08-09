import { Component, inject, OnInit } from '@angular/core';
import { FuncionarioService } from '../services/funcionario-service';
import { FuncionarioModel } from '../../models/FuncionarioModel';
import { Router, RouterModule } from '@angular/router';
import { FormFuncionario } from "../form-funcionario/form-funcionario";

@Component({
  selector: 'app-cadastrar-funcionario',
  imports: [FormFuncionario,RouterModule],
  templateUrl: './cadastrar-funcionario.html',
  styleUrl: './cadastrar-funcionario.css'
})
export class CadastrarFuncionario  {
private funcionarioService = inject(FuncionarioService);
private router = inject(Router)
btnAcao = "Cadastrar";
btnTitulo = "Cadastrar Funcionario!";


  
    createFuncionario(funcionario:FuncionarioModel) {
      this.funcionarioService.CreateFuncionario(funcionario).subscribe((data)=>{
        
        this.router.navigate(['/'])
      })

    
    

  }
}
