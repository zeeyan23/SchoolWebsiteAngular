import { ReporturlService } from './../reporturl.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-duestudents',
  templateUrl: './duestudents.component.html',
  styleUrls: ['./duestudents.component.css']
})
export class DuestudentsComponent implements OnInit {
  dues: { _id: number; name: string; register_number: string; fathers_name: string; class: string; section: string; total_paid: string; total_due: string; last_paid_date: string; } []
  


  constructor(private reposervices:ReporturlService) { }

  ngOnInit(): void {
    this.dues = this.reposervices.Due;
    console.log('Due students:',this.dues)
  }
  

}
