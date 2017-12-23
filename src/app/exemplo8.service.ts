import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Postagem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable()
export class Exemplo8Service {

  constructor(private httpClient: HttpClient) { }

  static URL = 'https://jsonplaceholder.typicode.com';

  public getFromAPI() {
    return this.httpClient.get<Postagem[]>(Exemplo8Service.URL + '/posts');
  }

}
