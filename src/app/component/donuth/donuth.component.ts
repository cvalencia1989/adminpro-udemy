import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-donuth',
  templateUrl: './donuth.component.html',
  styles: []
})
export class DonuthComponent implements OnInit {

  @Input() leyenda: string;

  @Input() public doughnutChartLabels: Label[] = [];
  @Input() public doughnutChartData: MultiDataSet = [];
  @Input() public doughnutChartType: ChartType;

  constructor() { }

  ngOnInit() {
  }

}
