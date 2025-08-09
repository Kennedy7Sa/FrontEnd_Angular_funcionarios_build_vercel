import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CadastrarFuncionario } from './cadastrar-funcionario/cadastrar-funcionario';
import { DetalhesFuncionarios } from './components/detalhes-funcionarios/detalhes-funcionarios';
import { EditarFuncionario } from './components/editar-funcionario/editar-funcionario';

export const routes: Routes = [
    {path: "",component: Home},
    {path: "cadastrarFuncionario",component: CadastrarFuncionario},
    {path : "buscarFuncionarioPorId/:id",component: DetalhesFuncionarios},
    {path: "editarFuncionario/:id",component:EditarFuncionario}
];
