import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { materialImports } from '../../material';
import { FuncionarioModel } from '../../../models/FuncionarioModel';
import { FuncionarioService } from '../../services/funcionario-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excluir-func-modal',
  imports: [CommonModule,materialImports],
  templateUrl: './excluir-func-modal.html',
  styleUrl: './excluir-func-modal.css'
})
export class ExcluirFuncModal implements OnInit {
inputData : any;
funcionario!: FuncionarioModel;
private funcionarioService = inject(FuncionarioService);
private ref = inject(MatDialogRef<ExcluirFuncModal>); //mexer com o modal tipo Close()
public data = inject(MAT_DIALOG_DATA);//aqui estou pegando os dados do modal 
ngOnInit(): void {
 console.log('Dados recebidos no modal:', this.data); // ← Isso precisa mostrar { id: algumValor } 
 console.log('id recebido ', this.data.id);
 
  this.inputData = this.data;
  this.funcionarioService.BuscarFuncionarioPorId(this.inputData.id).subscribe((data)=>{
    
    if(data.dados){
      this.funcionario=data.dados;
    }
    
  }); 
    
}
 Excluir(){
      this.funcionarioService.ExcluirFuncionario(this.inputData.id).subscribe((data)=>{
          this.ref.close(); //usando o metodo pra fechar o proprio modal
          window.location.reload(); //atualizando a pagina com a lista de funcionarios 
      });
  }
  Cancelar(){
    this.ref.close(); // usando o metodo close do modal para fechar sem excluir 
  }
}
