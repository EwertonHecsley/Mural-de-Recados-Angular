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
      modelo: 'modelo2'
    },
    {
      conteudo: "Em uma noite estrelada, a lua brilhava no céu escuro. O vento sussurrava segredos nas árvores, enquanto o riacho murmurava canções antigas. No silêncio da noite, sonhos ganhavam vida, dançando entre as estrelas, criando um universo de possibilidades.",
      autoria: 'Ewerton',
      modelo: 'modelo1'
    },

  ];

}
