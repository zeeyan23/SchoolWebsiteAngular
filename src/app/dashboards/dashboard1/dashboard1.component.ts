import { Component, AfterViewInit } from '@angular/core';

@Component({
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements AfterViewInit {
  isDean: boolean;
  constructor() {}

  ngAfterViewInit() {

    if(localStorage.getItem('group') == 'admin'){
      this.isDean = true;
    }
    else{
      this.isDean = false;
    }
    
  }
}
