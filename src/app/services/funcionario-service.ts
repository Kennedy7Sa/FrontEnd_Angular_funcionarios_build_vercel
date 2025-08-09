import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../models/ResponseModel';
import { FuncionarioModel } from '../../models/FuncionarioModel';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  
  private http = inject(HttpClient)
  private apiUrl = `${environment.apiUrl}funcionario`

GetFuncionarios():Observable<ResponseModel<FuncionarioModel[]>>{
    return this.http.get<ResponseModel<FuncionarioModel[]>>(this.apiUrl);
  }
BuscarFuncionarioPorId(id:number): Observable<ResponseModel<FuncionarioModel>>{
    return this.http.get<ResponseModel<FuncionarioModel>>(`${this.apiUrl}/${id}`);
  }

CreateFuncionario(funcionario:FuncionarioModel):Observable<ResponseModel<FuncionarioModel[]>>{
  return this.http.post<ResponseModel<FuncionarioModel[]>>(`${this.apiUrl}`,funcionario);
}


ExcluirFuncionario(id:number): Observable<ResponseModel<FuncionarioModel>>{
    return this.http.delete<ResponseModel<FuncionarioModel>>(`${this.apiUrl}/?id=${id}`);
  }
  
EditarFuncionario(funcionario:FuncionarioModel):Observable<ResponseModel<FuncionarioModel>>{
  return this.http.put<ResponseModel<FuncionarioModel>>(this.apiUrl,funcionario);
}


}
