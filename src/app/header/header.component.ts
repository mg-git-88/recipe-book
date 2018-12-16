import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('menu') menuItem = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onMenuItemClick(event: string) {
    console.log(event);
    this.menuItem.emit(event);
  }
}
