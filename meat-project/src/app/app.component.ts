import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eu = {name: 'fulano', isJedi: 'true', temple:"BATATA"}
  fulano = {name: 'fulanoPa', isJedi: 'true'}
  ze = {name: 'Batman', isJedi: 'false'}
}
