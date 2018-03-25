import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import  {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import {GithubComponent } from './components/github.component';
import { AppRoutingModule, routingComponents } from './app.routing';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule, HttpModule,FormsModule ],
  declarations: [ AppComponent,GithubComponent, routingComponents ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }