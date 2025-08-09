# Projeto desenvolvido com Web api .Net no BackEnd e Angular no FrontEnd

Este projeto foi gerado com o Angular CLI versão 20.1.4.

## Servidor de Desenvolvimento

Para iniciar o servidor local de desenvolvimento, execute o seguinte comando:

```bash
ng serve
```

Após o servidor iniciar, abra seu navegador e acesse http://localhost:4200/. A aplicação irá recarregar automaticamente sempre que você fizer alterações em qualquer arquivo do código-fonte.

## Geração de Código

O Angular CLI possui ferramentas poderosas para gerar código automaticamente (scaffolding). Para criar um novo componente, use o comando:

```bash
ng generate component component-name
```

Para ver a lista completa de esquemas disponíveis (como components, directives, ou pipes), execute:

```bash
ng generate --help
```

## Compilação (Build)

Para compilar o projeto para produção, execute:

```bash
ng build
```

Este comando irá compilar sua aplicação e armazenar os arquivos gerados na pasta dist/. Por padrão, a versão de produção otimiza o código para ter melhor performance e velocidade.

## Executando Testes Unitários

Para executar os testes unitários com o Karma, use o seguinte comando:

```bash
ng test
```

## Executando Testes End-to-End

Para os testes de ponta a ponta (e2e - end-to-end), execute:

```bash
ng e2e
```

O Angular CLI não vem com uma ferramenta de testes e2e por padrão. Você pode escolher a que melhor se adapta às suas necessidades.

## Recursos Adicionais

Para mais informações sobre o uso do Angular CLI, incluindo uma referência detalhada dos comandos, visite a página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Neste projeto foi usado a biblioteca Angular Material para estilização

Para instalar a biblioteca rode o codigo 

```bash
ng add @angular/material
```

O que esse comando faz?
O ng add não apenas instala o pacote, mas também executa um "esquema" (schematic) que configura automaticamente o seu projeto. Durante a execução, o CLI fará algumas perguntas interativas para configurar o Material de acordo com suas preferências:

Escolha de tema: Você poderá selecionar um dos temas pré-construídos (Indigo/Pink, Deep Purple/Amber, etc.) ou criar um tema personalizado.

Configuração de tipografia: O CLI perguntará se você quer configurar os estilos de tipografia globais do Material para sua aplicação.

Inclusão de animações: Ele também perguntará se você deseja incluir o módulo de animações do Angular, que é necessário para que alguns componentes do Material funcionem corretamente.

Ao final do processo, o comando irá:

Adicionar as dependências necessárias no seu package.json.

Incluir as fontes Roboto e os ícones do Material Design no seu index.html.

Configurar os estilos globais no seu styles.scss ou styles.css.

Isso torna a instalação muito mais rápida e fácil, garantindo que tudo esteja configurado da maneira correta desde o início.

> Os imports da biblioteca ficaram no arquivo material.ts para poder ser importado em qualquer componente e facilitar a organização do codigo.

## Injeções de dependencia usando o inject

É uma forma moderna e simplificada de injetar dependências no Angular, introduzida na versão 14 com a API de injeção de dependências inject().

> O que é Injeção de Dependência?

Injeção de dependência é um padrão de design no qual uma classe não cria suas próprias dependências (como serviços), mas as recebe de uma fonte externa. O Angular gerencia todo esse processo para você.

Basicamente, em vez do seu componente criar uma instância de FuncionarioService por conta própria, o Angular "injeta" uma instância do serviço quando o componente é criado.

> A diferença entre inject() e o método antigo (construtor)

Anteriormente, você precisava injetar o serviço no construtor da classe. O código se parecia com isto:

```bash

import { FuncionarioService } from '../../services/funcionario-service';

@Component({ ... })
export class MeuComponente {
  constructor(private funcionarioService: FuncionarioService) { }
}
```
Novo método(com inject()):
```bash
import { FuncionarioService } from '../../services/funcionario-service';
import { inject } from '@angular/core';

@Component({ ... })
export class MeuComponente {
  private funcionarioService = inject(FuncionarioService);
}
```

>Por que usar inject()?


A principal vantagem de usar inject() é que ele não precisa de um construtor, o que torna o código mais limpo e conciso, especialmente em componentes que não precisam de outra lógica no construtor. Ele funciona bem com componentes "standalone" e pode ser usado em qualquer lugar, não apenas no construtor.

## Depois de clonar o projeto do GitHub 
Rode o comando 

```bash
npm install 
```
Para que que todos os pacotes necessários seja incluidos no projeto 
