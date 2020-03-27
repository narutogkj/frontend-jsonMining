import { Component, OnInit } from "@angular/core";
import { ChartType, ChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import * as pluginDataLabels from "chart.js";
import { InputvalueService } from "../services/inputvalue.service";
@Component({
  selector: "app-pieui",
  templateUrl: "./pieui.component.html",
  styleUrls: ["./pieui.component.css"]
})
export class PieuiComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: "top"
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        }
      }
    }
  };
  private value: any;
  private jsondata: any;

  public pieChartLabels: Label[];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];

  constructor(private _inputvalue: InputvalueService) {
    if (this._inputvalue.getValue()) {
      this.value = this._inputvalue.getValue();
    }
  }

  ngOnInit() {
    this.jsondata = this._inputvalue.getData(this.value);

    this.pieChartLabels = this._inputvalue.getLabel(this.value);
    for (let i = 0; i < this.jsondata.length; i++) {
      this.pieChartData.push(this.jsondata[i]);
    }
    console.log(this.pieChartData);
  }
  // events
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
