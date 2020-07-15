import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontBlog';
  readonly apiURL : string;
  public rota: Router;
  public resumo: any;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'https://blog-memes.herokuapp.com';
    this.rota = r;
  }

  ngOnInit(): void {
    this.http.get(`${this.apiURL}/home`)
      .subscribe(result => {
        this.resumo = result;
        console.log(this.resumo);
      });
  }
}
