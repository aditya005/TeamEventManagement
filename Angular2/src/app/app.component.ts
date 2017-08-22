import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<a routerLink="home">Home</a>
<a routerLink="forgotpassword">Forgot Password</a>
<router-outlet></router-outlet>
`,
})
export class AppComponent {
   
}
