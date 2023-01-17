import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { StudenturlService } from 'src/app/shared/services/studenturl.service';
import { ExpenseurlService } from 'src/app/expense/expenseurl.service';
import { InstituteurlService } from 'src/app/institute/instituteurl.service';
@Component({
    selector: 'app-info-card',
    templateUrl: './info-card.component.html'
})
export class InfocardComponent implements AfterViewInit, OnInit {
    allcountdata: any;
    studentcount: any;
    staffcount: any;
    classcount: any;
    bookcount: any;
    vehiclecount: any;
    students: any;
    feedta: any;
    res: any;
    sortedList: any;
    totalfees: any;
    totalfee: any;
    totalpaidfee: any;
    totalduefee: any;
    expenses: any;
    totalexpense: any;
    constructor(private countserve :InstituteurlService, private studserve :StudenturlService, private expense:ExpenseurlService) { }

    public lineChartData: Array<any> = [
        { data: [12, 19, 3, 5, 2, 3], label: 'Balance $' }
    ];
    public lineChartLabels: Array<any> = [
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017'
    ];
    public lineChartOptions: any = {
        responsive: true,
        elements: {
            point: {
                radius: 2
            }
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        display: false
                    }
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        display: false
                    }
                }
            ]
        }
    };
    public lineChartColors: Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: '#4dc8ff',
            pointBackgroundColor: '#4dc8ff',
            pointBorderColor: '#4dc8ff',
            pointHoverBackgroundColor: '#4dc8ff',
            pointHoverBorderColor: '#4dc8ff'
        }
    ];
    public lineChartLegend = false;
    public lineChartType = 'line';

    ngOnInit(){
        this.getInstitutionDetails();
        this.getStudentDetails();
        this.getexpenseDetails();
    }

    ngAfterViewInit() {
        (<any>('#ravenue')).sparkline([6, 10, 9, 11, 9, 10, 12], {
            type: 'bar',
            height: '55',
            barWidth: '4',
            width: '100%',
            resize: true,
            barSpacing: '8',
            barColor: '#2961ff'
        });

        const chart = c3.generate({
            bindto: '#foo',
            data: {
                columns: [['data', 91.4]],
                type: 'gauge'
            },
            gauge: {
                label: {
                    format: function (value, ratio) {
                        return value;
                    },
                    show: false
                },
                min: 0,
                max: 100,
                units: ' %',
                width: 15
            },
            legend: {
                hide: true
            },
            size: {
                height: 80
            },
            color: {
                pattern: ['#7e74fb']
            }
        });
    }

    getInstitutionDetails() {
        this.countserve.getallcountDetails().subscribe((res: any) => {
          console.log(res);
          this.allcountdata = res;

          this.studentcount= this.allcountdata['total_StudentCount'];
          this.staffcount = this.allcountdata['total_StaffCount'];
          this.classcount = this.allcountdata['total_StudentclassCount'];
          this.bookcount = this.allcountdata['total_BookCount'];
          this.vehiclecount = this.allcountdata['total_VehicleCount']
    
         
        });
        console.log("reeeeeeeeeee", this.allcountdata);
      }

     


      public getStudentDetails(){
        this.studserve.getStudentDetails().subscribe((res: any) =>{
            console.log(res);
            this.students = res;
            var totalfee =  this.students.reduce((sum, item) => sum + item.total_fee, 0);
             this.totalfees =totalfee;
             console.log(this.totalfees);

             var totalpaid =  this.students.reduce((sum, item) => sum + item.paid_fee, 0);
             this.totalpaidfee = totalpaid;
             console.log(this.totalpaidfee);

             var totaldue =  this.totalfees-this.totalpaidfee
             this.totalduefee =totaldue
             console.log(this.totalduefee);
         console.log('reeeeeeeeeee',this.students);
            });
          }

          getexpenseDetails(){
            this.expense.getExpenseDetails().subscribe((res: any) =>{
                  console.log(res);
                  this.expenses = res;
                  var totalexp =  this.expenses.reduce((sum, item) => sum + item.amount, 0);
                  this.totalexpense = totalexp;
                   console.log(this.totalexpense);
                  console.log('reeeeeeeeeee',this.expenses);
        
                });
               
                
              }


}
