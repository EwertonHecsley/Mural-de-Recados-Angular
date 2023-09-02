import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Exemplo de Pensamento',
    autoria: 'Exe. Autor',
    modelo: ''
  }

  constructor() { }

  ngOnInit(): void {

  }

  criarPensamento() {
    alert('Acorda menino')
  }

}
