import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Exemplo1Component } from './exemplo1/exemplo1.component';
import { Exemplo2Component } from './exemplo2/exemplo2.component';
import { Exemplo3Component } from './exemplo3/exemplo3.component';
import { Exemplo404Component } from './exemplo404/exemplo404.component';
import { Exemplo5Component } from './exemplo5/exemplo5.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Exemplo6Component } from './exemplo6/exemplo6.component';
import { Exemplo7Component } from './exemplo7/exemplo7.component';
import { Exemplo8Component } from './exemplo8/exemplo8.component';
import { Exemplo8Service } from './exemplo8.service';
import { PostsPipe } from './posts.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Exemplo1Component,
    Exemplo2Component,
    Exemplo3Component,
    Exemplo404Component,
    Exemplo5Component,
    Exemplo6Component,
    Exemplo7Component,
    Exemplo8Component,
    PostsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Exemplo8Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
