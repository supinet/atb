import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-exemplo6',
  templateUrl: './exemplo6.component.html',
  styleUrls: ['./exemplo6.component.scss']
})
export class Exemplo6Component implements OnInit {

  formulario: FormGroup;
  nome = new FormControl('', Validators.required);
  sobrenome = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  idioma_id = new FormControl('', Validators.required);

  public idiomas:string[] = ['Português', 'japonês', 'Alemão'];

  constructor(private builder: FormBuilder) {
    this.formulario = builder.group({
      'nome': this.nome,
      'sobrenome': this.sobrenome,
      'email': this.email,
      'idioma_id': this.idioma_id
    });
  }

  ngOnInit() {
  }

   enviar() {
    console.log(this.formulario);
    console.log(this.formulario.value.nome);
  }

   limpar() {
    this.formulario.reset();
  }

}
