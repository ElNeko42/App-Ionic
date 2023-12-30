import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  token="d2323asd21";
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  login(){
    console.log("login");
    localStorage.setItem("token",this.token);
    this.router.navigate(['/home']);
  }
}
