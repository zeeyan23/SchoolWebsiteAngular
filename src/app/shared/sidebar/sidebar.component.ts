import { Component, AfterViewInit, OnInit } from '@angular/core';
import { InstituteurlService } from 'src/app/institute/instituteurl.service';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: any[];
  instiiii: any;
  instituteName: any;
  img: any;
  isLoggedIn: boolean;
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private instiserve : InstituteurlService
  ) {}

  // End open close
  ngOnInit() {

    if(localStorage.getItem('user')){
      this.isLoggedIn = true;
    } else {
      // this.isLoggedIn = false;
      this.router.navigate(['/authentication/login']);
    }
    this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);

    this.getInstitutionDetails();
  }


  getInstitutionDetails(){
    this.instiserve.getInstitutionDetails().subscribe((res: any) =>{
      console.log(res);
      this.instiiii = res;
       
    this.instituteName = this.instiiii[0]["instituteName"];
    this.img = this.instiiii[0]["instituteLogo"];
    console.log('hey',this.instituteName);
    });
    
  }

  onLogout(){
    window.localStorage.clear();
    this.router.navigate(['/authentication/login']);
  }
}
