import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  
  private intervalUpdate: any = null;//controla el intervalo
  public chart: any = null;//guarda el objeto de ChartJS

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.intervalUpdate = setInterval(function(){
     this.showData();
    }.bind(this), 500);
  }

  //Para detener el inteervalo: 
  private ngOnDestroy(): void {
    clearInterval(this.intervalUpdate);
  }

  private showData(): void {
    this.chart = new Chart('realtime', {
      type: 'line',
      data: {
       labels: [],
       datasets: [
         {
        label: 'Data',
        fill: false,
        data: [],
        backgroundColor: '#168ede',
        borderColor: '#168ede'
         }
       ]
        },
        options: {
       tooltips: {
        enabled: false
       },
       legend: {
        display: true,
        position: 'bottom',
        labels: {
         fontColor: 'white'
        }
       },
       scales: {
         yAxes: [{
          ticks: {
           fontColor: "white"
          }
         }],
         xAxes: [{
        ticks: {
         fontColor: "white",
         beginAtZero: true
        }
         }]
       }
        }
     });

     this.getFromAPI().subscribe(response => {
      if(response.error === false) {
        let chartTime: any = new Date();
        chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes()) + ':' + ((chartTime.getSeconds() < 10) ? '0' + chartTime.getSeconds() : chartTime.getSeconds());
        if(this.chart.data.labels.length > 15) {
          this.chart.data.labels.shift();
          this.chart.data.datasets[0].data.shift();
      }
        this.chart.data.labels.push(chartTime);
        this.chart.data.datasets[0].data.push(response.data);
        this.chart.update();
       } else {
        console.error("ERROR: The response had an error, retrying");
       }
   
    }, error => {
     console.error("ERROR: Unexpected response");
    });
  }
   
  /**
  * Get the data from the API
  * @function getFromAPI
  * @return {Observable<any>}
  */
  private getFromAPI(): Observable<any>{
    return this.http.get(
       'http://localhost:3000',
       { responseType: 'json' },
    );
  }
}


