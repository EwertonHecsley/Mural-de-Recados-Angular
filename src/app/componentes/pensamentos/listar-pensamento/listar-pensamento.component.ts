import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: 'Aprendendo a desenvolver em Angular',
      autoria: 'Ewerton',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Aprendendo a desenvolver em Angular',
      autoria: 'Ewerton',
      modelo: 'modelo3'
    }
  ];

}
