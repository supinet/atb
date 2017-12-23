import { Component, OnInit } from '@angular/core';

export class Pessoa {
  nome: string;
  sobrenome: string;
  email: string;
  idioma_id: number;
}

@Component({
  selector: 'app-exemplo5',
  templateUrl: './exemplo5.component.html',
  styleUrls: ['./exemplo5.component.scss']
})
export class Exemplo5Component implements OnInit {

  public pessoa: Pessoa;
  public idiomas = ['Português', 'japonês', 'Alemão']

  constructor() {
    this.pessoa = new Pessoa();
  }

  ngOnInit() {
  }

  public enviar() {
    console.log(this.pessoa);
  }

  public limpar() {
    this.pessoa = new Pessoa();
  }

}
