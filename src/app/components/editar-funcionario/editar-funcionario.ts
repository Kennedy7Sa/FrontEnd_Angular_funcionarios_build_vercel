import { Component, inject, OnInit } from '@angular/core';
import { FormFuncionario } from "../../form-funcionario/form-funcionario";
import { FuncionarioService } from '../../services/funcionario-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioModel } from '../../../models/FuncionarioModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-funcionario',
  imports: [FormFuncionario,CommonModule],
  templateUrl: './editar-funcionario.html',
  styleUrl: './editar-funcionario.css'
})
export class EditarFuncionario implements OnInit {
btnAcao = "Editar";
btnTitulo = "Editar Funcionario!";

funcionarioService = inject(FuncionarioService); //pra pegar os endpoints da api
route = inject(ActivatedRoute); //pra pegar o id vindo da url da home
router = inject(Router); //navegar pela url que eu passar e ser direcionado

//a variavel funcionario tbm sera usada para preencher o formulario de edição não esqueça de colocar o if para validar que esta chegando dados .
funcionario! : FuncionarioModel; //variavel que vai armazenar os dados 

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  
  this.funcionarioService.BuscarFuncionarioPorId(id).subscribe((data)=>{
    
    this.funcionario = data.dados;
  });
}
editarFuncionario(funcionario:FuncionarioModel){

  this.funcionarioService.EditarFuncionario(funcionario).subscribe((data)=> {
   
    this.router.navigate(['/'])
  });
}

}
