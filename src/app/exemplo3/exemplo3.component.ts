import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exemplo3',
  templateUrl: './exemplo3.component.html',
  styleUrls: ['./exemplo3.component.scss']
})
export class Exemplo3Component implements OnInit {

  public id: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log("id => ", this.id)
  }

  goTo2() {
    this.router.navigate(['exemplo2'])
  }

}
