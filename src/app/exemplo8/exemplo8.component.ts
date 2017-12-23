import { FormControl } from '@angular/Forms';
import { Exemplo8Service, Postagem } from './../exemplo8.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo8',
  templateUrl: './exemplo8.component.html',
  styleUrls: ['./exemplo8.component.scss']
})
export class Exemplo8Component implements OnInit {

  public postagens: Postagem;
  public posts: Postagem[];

  public busca = new FormControl();

  constructor(private service: Exemplo8Service) { }

  ngOnInit() {
    this.getFromAPI();
  }

  getFromAPI() {
    this.service.getFromAPI().subscribe(response => {
      this.posts = response;
      console.log(this.posts);
    },
    (err) => {
      console.log(err);
    });
  }

}
