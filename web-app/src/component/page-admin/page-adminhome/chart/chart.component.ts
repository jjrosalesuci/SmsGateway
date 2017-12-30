import { Component, OnInit } from '@angular/core';
import { SmsCharthomeService } from '../../../../services/sms-charthome.service';
import { Chart } from 'chart.js';

@Component({
    selector: 'chart',
    templateUrl: './chart.html',
})
export class ChartComponent implements OnInit {
    chart = [];
    
    constructor(private smscharthome: SmsCharthomeService) { }

    ngOnInit() { 
        this.smscharthome.getSmsdata()
        .subscribe(res => {
            let cant = res['list'].map((res) => res.cant)
            let date = res['list'].map((res) => res.date)

            this.chart = new Chart('smschart',{
                type: 'line',
                data: {
                    labels: date,
                    datasets: [
                        {
                            data: cant,
                            label: 'Salientes',
                            backgroundColor: '#2E9AFE',
                            borderColor: '#2E9AFE',
                            pointHoverRadius: 10,
                            fill:false
                        }
                    ]
                },
                options: {
                    responsive:true,
                    title: {
                        display:true,
                        text: 'Mensajes'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    legend:{
                        display:false
                    },
                    scales:{
                        xAxes:[{
                            display: true,
                            scaleLabel: {
                                display: true
                            }
                        }],
                        yAxes:[{
                            display:true,
                            scaleLabel: {
                                display: true
                            }
                        }]
                    },
                }
            })
        })
    }
}