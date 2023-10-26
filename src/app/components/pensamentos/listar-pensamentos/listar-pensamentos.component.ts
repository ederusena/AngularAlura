import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'I love Vue',
      autoria: 'Ederu',
      modelo: 'modelo1',
    },
    {
      conteudo: 'I love React',
      autoria: 'Ederu',
      modelo: 'modelo3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
