import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FuncionarioModel } from '../../models/FuncionarioModel';
import {MatSelectModule} from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import { materialImports } from '../material';

@Component({
  selector: 'app-form-funcionario',
  imports: [FormsModule,ReactiveFormsModule,RouterModule,materialImports],
  templateUrl: './form-funcionario.html',
  styleUrl: './form-funcionario.css'
})
export class FormFuncionario implements OnInit {
  @Output() onSubmit = new EventEmitter<FuncionarioModel>();//mandar informção pra fora  
  @Input() dadosFuncionario:FuncionarioModel | null=null //sera usado na tag [dadosFuncionario] pra preencher os dados do formulario de edição
  @Input() btnAcao! : string;
  @Input() btnTitulo! : string;

formularioFuncionario! : FormGroup //formulario preenchido que vem html preenchido 

ngOnInit(): void {
  this.formularioFuncionario = new FormGroup({
    id: new FormControl(this.dadosFuncionario?this.dadosFuncionario.id:0),
    nome: new FormControl(this.dadosFuncionario?.nome),
    setor: new FormControl(this.dadosFuncionario?.setor),
    turno : new FormControl(this.dadosFuncionario?.turno)


  });



    
}
submit(){
 
 this.onSubmit.emit(this.formularioFuncionario.value);
}

}
