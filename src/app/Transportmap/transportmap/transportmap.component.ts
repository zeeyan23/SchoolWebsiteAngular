import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{TransportmapService} from './../transportmap.service';


@Component({
  selector: 'app-transportmap',
  templateUrl: './transportmap.component.html',
  styleUrls: ['./transportmap.component.css']
})
export class TransportmapComponent implements OnInit {
  public iconUrl = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';
  public iconUrl1 = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
  public iconUrl2 = 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
  public iconUrl3 = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
  an = 'BOUNCE';
zoom: number;
latitude = '';
longitude = '';
public twowhl: any;
public offtwowhl: any;
public fourwhl: any;
public offfourwhl: any;
previous: any;
  isDean: boolean;
  isStaff: boolean;
  isParent: boolean;
constructor(private httpClient: HttpClient ,private mapserve :TransportmapService) {}

 ngOnInit() {
  this.twowhl = this.mapserve.Onlinedriver;

  // setInterval(()=>{
  //   console.log("position of driver calling")
  //   const resp1 = this.httpClient.get('http://172.105.56.231:2390/api/driver-position/two-whl')
  //   resp1.subscribe((data: any) => {
  //     console.log(data);
  //   this.twowhl = data;
  // })
  // const resp2 = this.httpClient.get('http://172.105.56.231:2390/api/driver-position/offtwo-whl')
  //   resp2.subscribe((data: any) => {
  //     console.log(data);
  //   this.offtwowhl = data;
  // })
  // },60000)

  
// const resp3 = this.httpClient.get('http://172.105.56.231:2390/api/driver-position/four-whl')
//   resp3.subscribe((data: any) => {
//     console.log(data);
//   this.fourwhl = data;
//   })
//   const resp4 = this.httpClient.get('http://172.105.56.231:2390/api/driver-position/offfour-whl')
//   resp4.subscribe((data: any) => {
//     console.log(data);
//   this.offfourwhl = data;
//   })

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
 refresh() {
  window.location.reload();
}

clickedMarker(infowindow) {
  if (this.previous) {
      this.previous.close();
  }
  this.previous = infowindow;
}
}
