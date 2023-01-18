import { Component, AfterViewInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
import * as c3 from 'c3';


declare var require: any;

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}
import { IncomeurlService } from 'src/app/income/incomeurl.service';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements AfterViewInit {

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;                  
  xAxisLabel = 'Year';
  showYAxisLabel = true;
  yAxisLabel = 'Total Income';
  currentDay: any;
  currentDate: any;
  temperature: any;
  description: any;
  location: string;


  colorScheme = {
    domain: ['#5AA454', '#5AA454', '#5AA454', '#5AA454', '#5AA454', '#5AA454']
  };
    shipId: any;
  
    view: any[] = [800, 400];
    single: { name: number; value: number; }[];
    constructor(private income :IncomeurlService) { }



    
  ngOnInit() {
    var currentDateTime = new Date()
    var month = currentDateTime.getMonth() == 0 ? 'January' :
                currentDateTime.getMonth() == 1 ? 'February' :
                currentDateTime.getMonth() == 2 ? 'March' :
                currentDateTime.getMonth() == 3 ? 'April' :
                currentDateTime.getMonth() == 4 ? 'May' :
                currentDateTime.getMonth() == 5 ? 'June' :
                currentDateTime.getMonth() == 6 ? 'July' :
                currentDateTime.getMonth() == 7 ? 'August' :
                currentDateTime.getMonth() == 8 ? 'September' :
                currentDateTime.getMonth() == 9 ? 'October' :
                currentDateTime.getMonth() == 10 ? 'November' :
                currentDateTime.getMonth() == 11 ? 'December': '';
    var day = currentDateTime.getDay() == 1 ? 'Monday' :
                currentDateTime.getDay() == 2 ? 'Tuesday' :
                currentDateTime.getDay() == 3 ? 'Wednesday' :
                currentDateTime.getDay() == 4 ? 'Thursday' :
                currentDateTime.getDay() == 5 ? 'Friday' :
                currentDateTime.getDay() == 6 ? 'Saturday' :
                currentDateTime.getDay() == 7 ? 'Sunday' : '';
                
    this.currentDate = month + ' ' + currentDateTime.getFullYear();
    this.currentDay = day;
    // weather
    this.getWeather()


    this.income.getConsumuriSiDataForShipById(this.shipId)
      .subscribe(data => {
        console.log(data);
        this.single = data.map(datum => ({ name: datum.year, value: datum.income }));
      });
  }

  getWeather(){
      let temperature = document.getElementById("temperature");
      let description = document.getElementById("description");
      let location = document.getElementById("location");
    try {
        
        let api = "https://api.openweathermap.org/data/2.5/weather";
        let apiKey = "ca6ab8e3479cbac859280d8590a85fef";

    location.innerHTML = "Locating...";

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      let url = api + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial";

      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          let temp = data.main.temp;
          location.innerHTML = data.name;
          temperature.innerHTML = temp + "° F";
          description.innerHTML = data.weather[data.weather.length - 1].main;
        //   cloud.innerHTML = data.clouds.all + "%";
        //   wind.innerHTML = data.wind.deg + "° ";
        //   windSpeed.innerHTML = data.wind.speed + " m/s";
        //   humidity.innerHTML = data.main.humidity + "%"
        //   pressure.innerHTML =  data.main.pressure + " hPa";
        });
    }

    function error() {
      // location.innerHTML = "Unable to retrieve your location";
      const latitude = 12.8700;
      const longitude = 74.8800;

      let url =
        api +
        "?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey +
        "&units=imperial";

      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          let temp = data.main.temp;
          location.innerHTML = data.name;
          temperature.innerHTML = temp + "° F";
          description.innerHTML = data.weather[data.weather.length - 1]['main'];
        });
    }
    }
    catch {
        location.innerHTML = '';
        temperature.innerHTML = '35° C'
        description.innerHTML = 'Clear and sunny'
    }
  }

  onSelect(event) {
    console.log(event);
  }

    // Barchart
    barChart: Chart = {
        type: 'Bar',
        data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [[50, 40, 30, 70, 50, 20, 30]]
        },
        options: {
            height: 290,
            chartPadding: {
                top: 15,
                left: -25
            },
            axisX: {
                showLabel: true,
                showGrid: false
            },
            axisY: {
                showLabel: false,
                showGrid: false
            },
            fullWidth: true
        }
    };

    // Line chart
    lineChart: Chart = {
        type: 'Line',
        data: {
            labels: ['1PM', '2PM', '3PM', '4PM', '5PM', '6PM'],
            series: [[2, 0, 5, 2, 5, 2]]
            // series: [[2, 1, 2, 7, 0, 3]]
        },
        options: {
            showArea: true,
            showPoint: false,

            chartPadding: {
                left: -35
            },
            axisX: {
                showLabel: true,
                showGrid: false
            },
            axisY: {
                showLabel: false,
                showGrid: true
            },
            fullWidth: true
        }
    };

    ngAfterViewInit() {
        const chart2 = c3.generate({
            bindto: '#product-sales',
            data: {
                columns: [
                    ['Iphone', 5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8],
                    ['Ipad', 1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3, 3, 12, 5, 6, 3]
                ],
                type: 'spline'
            },
            axis: {
                y: {
                    show: true,
                    tick: {
                        count: 0,
                        outer: false
                    }
                },
                x: {
                    show: true
                }
            },
            padding: {
                top: 40,
                right: 10,
                bottom: 40,
                left: 20
            },
            point: {
                r: 0
            },
            legend: {
                hide: false
            },
            color: {
                pattern: ['#ccc', '#4798e8']
            }
        });
    }
}
