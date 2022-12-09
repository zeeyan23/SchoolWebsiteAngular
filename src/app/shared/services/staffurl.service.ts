import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staffdata } from 'src/app/staff/staffdata';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StaffurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  } 

  Staff=[
    {
      age: "25",
designation: "Software Engineer",
dob: "03-10-1996",
doj: "12-06-2020",
email: "vijayalaxmi025@gmail.com",
father_name: "gsg",
fileSource: "data:image/png;base64,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",
gendar: "female",
mothers_name: "sgsg",
phone: "9743692704",
qualification: "BE",
reg_num: "001",
subject:"English",
yoe:'2',
staff_name: "Vijayalaxmi",
staff_photo: "../assets/images/staff1.jpg"

  },
  {
    age: "26",
designation: "teacher",
dob: "06-11-1995",
doj: "11-06-2019",
email: "ganesh083@gmail.com",
father_name: "gsg",
fileSource: "data:image/png;base64,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",
gendar: "male",
mothers_name: "sgsg",
phone: "9743697654",
qualification: "BA",
reg_num: "002",
subject:"maths",
yoe:'2',
staff_name: "Ganesh",
staff_photo: "../assets/images/staff2.jpg"

},

{
  age: "27",
designation: "Teacher",
dob: "13-12-1995",
doj: "17-06-2018",
email: "reshma@gmail.com",
father_name: "gsg",
fileSource: "data:image/png;base64,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",
gendar: "female",
mothers_name: "sgsg",
phone: "6543456787",
qualification: "BA",
reg_num: "003",
subject:"Kannada",
yoe:'2',
staff_name: "Reshma",
staff_photo: "../assets/images/staff3.jpg"

},

{
  age: "28",
designation: "Teacher",
dob: "17-10-1993",
doj: "12-06-2020",
email: "Jaya043@gmail.com",
father_name: "gsg",
fileSource: "data:image/png;base64,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",
gendar: "female",
mothers_name: "sgsg",
phone: "9743654345",
qualification: "BA",
reg_num: "004",
subject:"Social Science",
yoe:'2',
staff_name: "jayalaxmi",
staff_photo: "../assets/images/staff4.jpg"
}

  

]

Regstaff(data:any){
  const url = `${this.mainURL}/Staff/`;
  return this.http.post(url, data);
}

addmorestaff(data:any){
  const url = `${this.mainURL}/AddmoreStaff_list/`;
  return this.http.post(url, data);
}


Updatestaff(formData: any, Id: any){
  const url = `${this.mainURL}/Staff/${Id}/`;
  return this.http.patch(url, formData);
}

getStaffDetails(){
  const url = `${this.mainURL}/Staff/`;
  return this.http.get(url);
}

deleteStaff(Id :any){
  const url = `${this.mainURL}/Staff/${Id}/`;
  return this.http.delete(url);
}

}
