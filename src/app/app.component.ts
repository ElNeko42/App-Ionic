import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'customers', url: '/customers', icon: 'person' },
    {title:"Cities" ,url:'/cities',icon:'globe'},
    {title:"Login" ,url:'/login',icon:'log-in'},

  ];

  constructor() { }
}
