import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-sidernav',
  templateUrl: './sidernav.component.html',
  styleUrls: ['./sidernav.component.css']
})
export class SidernavComponent implements OnInit {
  public currentTime: Date = new Date();
  constructor() {
    window.setInterval(() => this.currentTime = new Date()
    , 1000);
   }

  ngOnInit() {
  }

}
