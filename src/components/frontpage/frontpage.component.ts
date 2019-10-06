import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  clicked = false;

  constructor() { }

  ngOnInit() {
  }

  switch() {
    this.clicked = !this.clicked;
  }

}
