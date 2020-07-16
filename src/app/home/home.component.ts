import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent implements OnInit {
  title = 'home';	
  readonly apiURL : string;
  public rota: Router;
  public resumo: any;
  public obj: any;
  public aux: boolean;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'https://blog-memes.herokuapp.com';
    this.rota = r;
  }

  ngOnInit(): void {
    this.http.get(`${this.apiURL}/home`)
      .subscribe(result => {
        this.resumo = result;
        this.obj = [JSON.parse(window.localStorage.getItem('currentUser'))];

        if (this.obj != null) {
          this.aux = true;
        } else {
          this.aux = false;
        }
        console.log(this.aux)
        
        //window.localStorage.clear();
      });
  }

  deslogar() {
    window.localStorage.clear();
  }

}
