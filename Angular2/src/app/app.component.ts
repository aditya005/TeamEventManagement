import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
    <li style="display:inline"><a routerLink="/">Home</a></li>
    <li style="display:inline"><a routerLink="/about">About</a></li>
  </ul><br/>
     <about></about>
  <router-outlet>
  <a routerLink="/">UserHome</a>
<a routerLink="/about">UserAbout</a>
  </router-outlet>`,
//  template: `<div>Hello, My name is {{Name}} </div>
// <div>
//   <input [value] = "Name" (input) = "Name = $event.target.value">
  
//</div>
//<ul>  
//  <li *ngFor="let user of users">
//    {{ user.name }} is {{ user.age }} years old.
//  </li>
//<ul>`,
})
export class AppComponent {
    Name = 'Somu';
    public users = [
        { name: 'Jilles', age: 21 },
        { name: 'Todd', age: 24 },
        { name: 'Lisa', age: 18 }
    ];
}
