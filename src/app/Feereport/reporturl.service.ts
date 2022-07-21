import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReporturlService {

  constructor() { }
  Paid = [
    {
      _id:1,
      name: 'Kavya',
      register_number: '501',
      class:'First',
      section:'A',
     admission_fee:'600',
      tution_fee:'900',
      misc_fee:'300',
      transport_fee:'30000',
      total_paid:'30000',
      total_due:'18000',
      status:'Pending',
      Due_date:'10-03-2021',
      Penalty:'560',
      paid_by:'cash',
      date_of_registration:'13-01-2021',
      updation_date:'13-02-2021'

      
      
    },
    {
      _id:2,
      name: 'Ashwitha',
      register_number: '502',
      class:'Second',
      section:'C',
     admission_fee:'600',
      tution_fee:'900',
      misc_fee:'300',
      transport_fee:'30000',
      total_paid:'48000',
      total_due:'0',
      status:'Paid',
      Due_date:'10-03-2021',
      Penalty:'0',
      paid_by:'cash',
      date_of_registration:'13-01-2021',
      updation_date:'13-01-2021'
      
    },
    {
      _id:3,
      name: 'Shaila',
      register_number: '503',
      class:'third',
      section:'A',
     admission_fee:'600',
      tution_fee:'900',
      misc_fee:'300',
      transport_fee:'30000',
      total_paid:'25000',
      total_due:'6800',
      status:'Pending',
      Due_date:'10-03-2021',
      Penalty:'580',
      paid_by:'cheque',
      date_of_registration:'13-01-2021',
      updation_date:'15-02-2021'
      
    },
    {
      _id:4,
      name: 'Rashmi',
      register_number: '504',
      class:'Fourth',
      section:'B',
     admission_fee:'600',
      tution_fee:'900',
      misc_fee:'300',
      transport_fee:'30000',
      total_paid:'31800',
      total_due:'18000',
      status:'Paid',
      Due_date:'10-03-2021',
      Penalty:'0',
      paid_by:'cash',
      date_of_registration:'13-01-2021',
      updation_date:'13-01-2021'
    },
    {
      _id:5,
      name: 'Prakash',
      register_number: '505',
      class:'Fifth',
      section:'B',
     admission_fee:'600',
      tution_fee:'900',
      misc_fee:'300',
      transport_fee:'35000',
      total_paid:'36800',
      total_due:'0',
      status:'Paid',
      Due_date:'10-03-2021',
      Penalty:'0',
      paid_by:'cash',
      date_of_registration:'13-01-2021',
      updation_date:'13-01-2021'
      
    },
    {
      _id:6,
      name: 'Nidhisha',
      register_number: '506',
      class:'Sixth',
      section:'C',
     admission_fee:'600',
      tution_fee:'900',
      misc_fee:'300',
      transport_fee:'30000',
      total_paid:'20000',
      total_due:'11800',
      status:'Pending',
      Due_date:'10-03-2021',
      Penalty:'700',
      paid_by:'cash',
      date_of_registration:'13-01-2021',
      updation_date:'18-02-2021'
      
    },
    {
      _id:7,
      name: 'Rahul',
      register_number: '507',
      class:'Seventh',
      section:'A',
     admission_fee:'600',
      tution_fee:'900',
      misc_fee:'300',
      transport_fee:'30000',
      total_paid:'30000',
      total_due:'18000',
      status:'Pending',
      Due_date:'10-03-2021',
      Penalty:'500',
      paid_by:'cash',
      date_of_registration:'13-01-2021',
      updation_date:'18-02-2021'
    },
    {
      _id:8,
      name: 'Keerthan',
      register_number: '508',
     class:'Eighth',
      section:'A',
     admission_fee:'600',
      tution_fee:'900',
      misc_fee:'300',
      transport_fee:'30000',
      total_paid:'31800',
      total_due:'0',
      status:'Paid',
      Due_date:'10-03-2021',
      Penalty:'0',
      paid_by:'cash',
      date_of_registration:'13-01-2021',
      updation_date:'13-01-2021'
    },
    {
      _id:9,
      name: 'Kavyashree',
      register_number: '509',
      class:'Nineth',
      section:'B',
     admission_fee:'600',
      tution_fee:'900',
      misc_fee:'300',
      transport_fee:'30000',
      total_paid:'30000',
      total_due:'18000',
      status:'Pending',
      Due_date:'10-03-2021',
      Penalty:'560',
      paid_by:'cash',
      date_of_registration:'13-01-2021',
      updation_date:'19-02-2021'
    },
    {
      _id:10,
      name: 'Ashwitha Rao',
      register_number: '510',
      class:'Tenth',
      section:'C',
     admission_fee:'600',
      tution_fee:'900',
      misc_fee:'300',
      transport_fee:'30000',
      total_paid:'31800',
      total_due:'0',
      status:'Paid',
      Due_date:'10-03-2021',
      Penalty:'0',
      paid_by:'cash',
      date_of_registration:'13-01-2021',
      updation_date:'13-01-2021'
    },

  ];

  Due = [
    {
      _id:1,
      name: 'Kavya',
      register_number: '501',
      fathers_name:'abc',
      class:'First',
      section:'A',
      total_paid:'50500',
     total_due:'6875',
     last_paid_date:'04-02-2021'
      
    },
    {
      _id:2,
      name: 'Ashwitha',
      register_number: '502',
      fathers_name:'def',
      class:'Second',
      section:'C',
      total_paid:'50500',
      total_due:'6875',
      last_paid_date:'04-02-2021'
      
    },
    {
      _id:3,
      name: 'Shaila',
      register_number: '503',
      fathers_name:'ghi',
      class:'third',
      section:'A',
      total_paid:'50500',
      total_due:'6875',
     last_paid_date:'04-02-2021'
      
    },
    {
      _id:4,
      name: 'Rashmi',
      register_number: '504',
      fathers_name:'jkl',
      class:'Fourth',
      section:'B',
      total_paid:'50500',
      total_due:'6875',
     last_paid_date:'04-02-2021'
      
    },
    {
      _id:5,
      name: 'Prakash',
      register_number: '505',
      fathers_name:'mno',
      class:'Fifth',
      section:'B',
     admission_fee:'600',
      tution_fee:'900',
      misc_fee:'300',
      transport_fee:'30000',
      total_paid:'50500',
      total_due:'6875',
      last_paid_date:'04-02-2021'
      
    },
    {
      _id:6,
      name: 'Nidhisha',
      register_number: '506',
      fathers_name:'pqr',
      class:'Sixth',
      section:'C',
      total_paid:'50500',
      total_due:'6875',
     last_paid_date:'04-02-2021'
      
    },
    {
      _id:7,
      name: 'Rahul',
      register_number: '507',
      fathers_name:'stu',
      class:'Seventh',
      section:'A',
      total_paid:'50500',
      total_due:'6875',
      last_paid_date:'04-02-2021'
    },
    {
      _id:8,
      name: 'Keerthan',
      register_number: '508',
      fathers_name:'vwx',
     class:'Eighth',
      section:'A',
     total_paid:'50500',
     total_due:'6875',
     last_paid_date:'04-02-2021'
    },
    {
      _id:9,
      name: 'Kavyashree',
      register_number: '509',
      fathers_name:'xyz',
      class:'Nineth',
      section:'B',
      total_paid:'50500',
      total_due:'6875',
      last_paid_date:'04-02-2021'
    },
    {
      _id:10,
      name: 'Ashwitha Rao',
      register_number: '510',
      fathers_name:'bca',
      class:'Tenth',
      section:'C',
      total_paid:'50500',
      total_due:'6875',
     last_paid_date:'04-02-2021'
      
    },

  ];
}
