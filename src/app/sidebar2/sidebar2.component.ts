import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {
  constructor() { }

  ngOnInit() {
  	
  }
  
  name = 'Angular 4';
  private _opened: boolean = true;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

}
