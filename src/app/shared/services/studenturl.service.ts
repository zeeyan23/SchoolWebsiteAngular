import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Studentdata} from '../../Student/studentdata';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudenturlService {
  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  }
  
//   public Savestudent(studentdata) {  
//     console.log("Regno : " + studentdata.reg_number);  
//     console.log("student name : " + studentdata.student_name);  
//     console.log(studentdata);  
//     this.Students.push(studentdata)
//  }  

//  public Savestudentexcel(excelstudentdata) {  
//   console.log("DOB : " + excelstudentdata.dob);  
//   console.log("Academic year : " + excelstudentdata.academic_year);  
//   console.log(excelstudentdata);  
//   this.Students.push(excelstudentdata)
// } 

//   Students=[{
     
//     Dob: "2021-10-30",
//     academic_year: "2021",
//     admission_fee: true,
//     alter_num: "+918978909878",
//     anniversary_date: "2021-10-15",
//     city: "banglore",
//     class_name: "first",
//     contact_num: "+918978909878",
//     country: "India",
//     date_of_admission: "2021-10-30",
//     email_address: "dummy12@gmail.com",
//     father_dob: "2021-10-08",
//     father_name: "fad",
//     fileSource: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAA",
//     food_fee: true,
//     gender: "female",
//     hostel_fee: true,
//     misc_fee: "karnataka",
//     mother_dob: "2021-10-30",
//     mother_name: "eed",
//     pincode: "576008",
//     reg_number: "001",
//     section: "A",
//     state: "karnataka",
//     student_address: "vv puram",
//     student_name: "kavya",
//     student_photo: "../assets/images/student1.jpg",
//     transport_fee: true,
//     tuition_fee: true,
//     total_fee:32455,
//     paid_fee:30000,
//     category:"2A"

  
//    },

//    {
//     Dob: "2014-01-14",
//     academic_year: "2021",
//     admission_fee: true,
//     alter_num: "+918873763637",
//     anniversary_date: "2021-10-15",
//     city: "banglore",
//     class_name: "first",
//     contact_num: "+918978909878",
//     country: "India",
//     date_of_admission: "2021-10-30",
//     email_address: "dummy12@gmail.com",
//     father_dob: "2021-10-08",
//     father_name: "fad",
//     fileSource: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAA",
//     food_fee: true,
//     gender: "",
//     hostel_fee: true,
//     misc_fee: "karnataka",
//     mother_dob: "2021-10-30",
//     mother_name: "eed",
//     pincode: "576008",
//     reg_number: "002",
//     section: "B",
//     state: "karnataka",
//     student_address: "vv puram",
//     student_name: "ashwitha",
//     student_photo: "../assets/images/student2.jpg",
//     transport_fee: true,
//     tuition_fee: true,
//     total_fee:32400,
//     paid_fee:32400,
//     category:"C-1"

//    },
//    {
//     Dob: "1997-02-15",
//     academic_year: "2021",
//     admission_fee: true,
//     alter_num: "+918978909878",
//     anniversary_date: "2021-10-15",
//     city: "banglore",
//     class_name: "second",
//     contact_num: "+918978909878",
//     country: "India",
//     date_of_admission: "2021-10-30",
//     email_address: "dummy12@gmail.com",
//     father_dob: "2021-10-08",
//     father_name: "fad",
//     fileSource: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAA",
//     food_fee: true,
//     gender: "male",
//     hostel_fee: true,
//     misc_fee: "karnataka",
//     mother_dob: "2021-10-30",
//     mother_name: "eed",
//     pincode: "576008",
//     reg_number: "003",
//     section: "A",
//     state: "karnataka",
//     student_address: "vv puram",
//     student_name: "Prashanth",
//     student_photo: "../assets/images/student3.jpg",
//     transport_fee: true,
//     tuition_fee: true,
//     total_fee:32000,
//     paid_fee:30000,
//     category:"ST"

//    },
//    {
//     Dob: "1996-03-16",
//     academic_year: "2021",
//     admission_fee: true,
//     alter_num: "+918978909878",
//     anniversary_date: "2021-10-15",
//     city: "banglore",
//     class_name: "second",
//     contact_num: "+918978909878",
//     country: "India",
//     date_of_admission: "2021-10-30",
//     email_address: "dummy12@gmail.com",
//     father_dob: "2021-10-08",
//     father_name: "fad",
//     fileSource: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAA",
//     food_fee: true,
//     gender: "female",
//     hostel_fee: true,
//     misc_fee: "karnataka",
//     mother_dob: "2021-10-30",
//     mother_name: "eed",
//     pincode: "576008",
//     reg_number: "004",
//     section: "B",
//     state: "karnataka",
//     student_address: "vv puram",
//     student_name: "Rashmi",
//     student_photo: "../assets/images/student4.jpg",
//     transport_fee: true,
//     tuition_fee: true,
//     total_fee:30000,
//     paid_fee:30000,
//     category:"SC"
//  },
//  {
//   Dob: "1996-03-16",
//   academic_year: "2021",
//   admission_fee: true,
//   alter_num: "+918978909878",
//   anniversary_date: "2021-10-15",
//   city: "banglore",
//   class_name: "third",
//   contact_num: "+918978909878",
//   country: "India",
//   date_of_admission: "2021-10-30",
//   email_address: "dummy12@gmail.com",
//   father_dob: "2021-10-08",
//   father_name: "fad",
//   fileSource: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAA",
//   food_fee: true,
//   gender: "female",
//   hostel_fee: true,
//   misc_fee: "karnataka",
//   mother_dob: "2021-10-30",
//   mother_name: "eed",
//   pincode: "576008",
//   reg_number: "004",
//   section: "A",
//   state: "karnataka",
//   student_address: "vv puram",
//   student_name: "Nidisha",
//   student_photo: "../assets/images/student5.jpg",
//   transport_fee: true,
//   tuition_fee: true,
//   total_fee:30000,
//   paid_fee:30000,
//   category:"SC"
// }
   
//   ]
  // getStudentdata(){
  //   return this.http.get<Studentdata[]>('')
  // }

  // createStudent(student:Studentdata){
  //   console.log('sssssssss',student)
  //   return this.http.post('', student)
  // }



  
  Regstudent(data:any){
    const url = `${this.mainURL}/Student/`;
    return this.http.post(url, data);
  }

  Exportstudent(data:any){
    const url = `${this.mainURL}/Studentexport/`;
    return this.http.post(url, data);
  }

  Addmorestudent(data:any){
    const url = `${this.mainURL}/AddmoreStudent_list/`;
    return this.http.post(url, data);
  }

  getaddmoreStudentDetails(){
    const url = `${this.mainURL}/AddmoreStudent_list/`;
    return this.http.get(url);
  }


  Updatestudent(formData: any, Id: any){
    const url = `${this.mainURL}/Student/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  getStudentDetails(){
    const url = `${this.mainURL}/Student/`;
    return this.http.get(url);
  }

  deleteStudent(Id :any){
    const url = `${this.mainURL}/Student/${Id}/`;
    return this.http.delete(url);
  }

  getUserByEmail(email_address :string){
    const url = `${this.mainURL}/Student/${email_address}/`;
    return this.http.get(url);

  }

  getStudent(){
    const url = `${this.mainURL}/Student/`;
    return this.http.get(url).pipe(
      map((Student:any[]) =>{
        const newUsers=[];
        for(let user of Student){
          const email_address = user.email_address;
          newUsers.push({email_address :email_address});
        }
        return newUsers;
      }),
      tap (users => console.log(users))
    );
  }

 
}
