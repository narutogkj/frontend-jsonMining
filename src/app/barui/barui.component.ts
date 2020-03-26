import { Component, OnInit } from "@angular/core";

import { ChartDataSets, ChartType, RadialChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import { InputvalueService } from "../services/inputvalue.service";
import * as pluginDataLabels from "chart.js";
@Component({
  selector: "app-barui",
  templateUrl: "./barui.component.html",
  styleUrls: ["./barui.component.css"]
})
export class BaruiComponent implements OnInit {
  private value: any;
  private jsondata: any;
  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true
  };
  public radarChartLabels: Label[];
  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  constructor(private _inputvalue: InputvalueService) {
    if (this._inputvalue.getValue()) {
      this.value = this._inputvalue.getValue();
    }
  }

  ngOnInit() {
    this.jsondata = this._inputvalue.getData(this.value);

    this.radarChartLabels = this._inputvalue.getLabel(this.value);
    for (let i = 0; i < this.jsondata.length; i++) {
      this.radarChartData.push({
        data: this.jsondata[i],
        label: `Object ${i}`
      });
    }
    console.log(this.radarChartData);
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
