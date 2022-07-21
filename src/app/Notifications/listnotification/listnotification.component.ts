import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listnotification',
  templateUrl: './listnotification.component.html',
  styleUrls: ['./listnotification.component.css']
})
export class ListnotificationComponent implements OnInit {
  isDean: boolean;
  isStaff: boolean;
  isParent: boolean;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('group') == 'admin' || localStorage.getItem('group') == 'staff' ||localStorage.getItem('group') == 'parents' ) {
      this.isDean = true;
      this.isStaff = true;
      this.isParent =true;
   }
   else{
    this.isDean = false;
    this.isStaff = false;
    this.isParent =true;
   }
  }

}
