import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopbridge';
  itemsList = [
    {	
      id : 1,
      name : "Apple",
      description : "stable product ",
      price : 65555,
    },
    {
      id : 2,
      name : "Samsung",
      description : "user friendly",
      price : 35000,
    },
    {
      id : 3,
      name : "OnePlus",
      description : "simple customized ",
      price : 45000,
    },
    {
      id : 4,
      name : "Google pixel",
      description : "robust",
      price : 55555,
    },
    ];
  
    constructor() {
    }
}


