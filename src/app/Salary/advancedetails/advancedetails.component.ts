import { SalaryurlService } from './../salaryurl.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-advancedetails',
  templateUrl: './advancedetails.component.html',
  styleUrls: ['./advancedetails.component.css']
})
export class AdvancedetailsComponent implements OnInit {
  advances: { name: string; contact_number: string; designation: string; date: string; advance_amount: string; advance_amount_balance: string; remark: string; payment_mode: string; }[];

  constructor(private salservice:SalaryurlService) { }

  ngOnInit(): void {
    this.advances= this.salservice.Advance;
    console.log('advance details:',this.advances);
  }

}
