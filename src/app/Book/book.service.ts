import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  } 

//   Books=[
//     {
//       accession_number:'34432',
//       barcode_id:'254tiui',
//       title:'The Cat in the Hat',
//       author:'Seuss',
//       subject:'GK',
//       publisher:'Penguin Random House LL',
//       edition:'5Th',
//       year:'2019'
//    },
//    {
//     accession_number:'43552',
//     barcode_id:'227tiui',
//     title:'what is mathematics',
//     author:'Richard Courant, Herbert Robbins',
//     subject:'Mathematics',
//     publisher:'Oxford University Press',
//     edition:'2nd',
//     year:'1941'
//  },
//  {
//   accession_number:'37862',
//   barcode_id:'294tiui',
//   title:'How To Solve It',
//   author:'George Pólya',
//   subject:'Maths',
//   publisher:'Penguin Random House LL',
//   edition:'6Th',
//   year:'1945'
// },
// {
//   accession_number:'76546',
//   barcode_id:'267tiui',
//   title:'On the Origin of Species',
//   author:'Charles Darwin',
//   subject:'Sceince',
//   publisher:'reatise',
//   edition:'4Th',
//   year:'1859'
// },
// {
//   accession_number:'87677',
//   barcode_id:'768tiui',
//   title:'The Freedom',
//   author:'ahska',
//   subject:'Social',
//   publisher:'Penguin Random House LL',
//   edition:'7Th',
//   year:'1950'
// },

//   ]

//   Pendingbooks=[

//     {
//       accession_number:'34432',
//       title:'The Cat in the Hat',
//       author:'Seuss',
//       subject:'GK',
//        issued_to:'Kavya',
//        issued_date:'12/03/2021',
//        end_date:'20/03/2021'
//    },
//    {
//     accession_number:'43552',
//     title:'what is mathematics',
//     author:'Richard Courant, Herbert Robbins',
//     subject:'Mathematics',
//     issued_to:'aswitha',
//     issued_date:'18/03/2021',
//     end_date:'26/03/2021'
//  },
//  {
//   accession_number:'37862',
//   title:'How To Solve It',
//   author:'George Pólya',
//   subject:'Maths',
//   issued_to:'shaila',
//   issued_date:'15/03/2021',
//   end_date:'23/03/2021'
// },
// {
//   accession_number:'76546',
//   title:'On the Origin of Species',
//   author:'Charles Darwin',
//   subject:'Sceince',
//   issued_to:'Rashmi',
//   issued_date:'20/03/2021',
//   end_date:'28/03/2021'
// },
// {
//   accession_number:'87677',
//   title:'The Freedom',
//   author:'ahska',
//   subject:'Social',
//   issued_to:'nidisha',
//   issued_date:'15/03/2021',
//   end_date:'23/03/2021'
// },
   
//   ]

  Regbook(data:any){
    const url = `${this.mainURL}/Book/`;
    return this.http.post(url, data);
  }

  Regaddmorebook(data:any){
    const url = `${this.mainURL}/AddmoreBook_list/`;
    return this.http.post(url, data);
  }

  Updatebook(formData: any, Id: any){
    const url = `${this.mainURL}/Book/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  getbookDetails(){
    const url = `${this.mainURL}/Book/`;
    return this.http.get(url);
  }

  getaddmorebookDetails(){
    const url = `${this.mainURL}/AddmoreBook_list/`;
    return this.http.get(url);
  }
}
