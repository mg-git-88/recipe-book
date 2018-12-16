import { Component } from '@angular/core';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  menu: string;

  onReceivingMenuItem(event) {
    console.log(event);
    this.menu = event;
  }
}
