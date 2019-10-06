import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RuralHouseWeb';

  public isUserLogged = false;

  // EVENT EMITTERS

  onLoginEventFired() {
    console.log('Login fired!');
  }

  onRegisterEventFired(eventArgs){
    console.log('Register fired!');
  }

}
