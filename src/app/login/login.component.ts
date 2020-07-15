import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from  '../models/User';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';	
  readonly apiURL : string;
  public rota: Router;
  profileForm = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });
  
  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'https://blog-memes.herokuapp.com';
    this.rota = r;
  }

  ngOnInit(): void {
  }

  login(user: User){
    this.http.post(`${this.apiURL}/login`, user)
      .subscribe(result => {
        window.localStorage.setItem('currentUser', JSON.stringify(result));
        this.r.navigate(['/home']);
      });
  }
  
  onSubmit() {
    this.login(this.profileForm.value);
  }

}
