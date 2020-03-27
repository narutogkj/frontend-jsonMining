import { Component, OnInit } from "@angular/core";
import { ChartType } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";
import { InputvalueService } from "../services/inputvalue.service";

@Component({
  selector: "app-doughnutui",
  templateUrl: "./doughnutui.component.html",
  styleUrls: ["./doughnutui.component.css"]
})
export class DoughnutuiComponent implements OnInit {
  private value: any;
  private jsondata: any;
  // Doughnut

  public doughnutChartLabels: Label[];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = "doughnut";

  constructor(private _inputvalue: InputvalueService) {
    if (this._inputvalue.getValue()) {
      this.value = this._inputvalue.getValue();
    }
  }

  ngOnInit() {
    this.jsondata = this._inputvalue.getData(this.value);

    this.doughnutChartLabels = this._inputvalue.getLabel(this.value);
    for (let i = 0; i < this.jsondata.length; i++) {
      this.doughnutChartData.push(this.jsondata[i]);
    }
    console.log(this.doughnutChartData);
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
