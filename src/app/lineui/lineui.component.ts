import { Component, OnInit } from "@angular/core";

import { ChartDataSets, ChartType, ChartOptions } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";
import { InputvalueService } from "../services/inputvalue.service";
import { BootomSheetComponent } from "../bootom-sheet/bootom-sheet.component";
import { MatBottomSheet } from "@angular/material";
@Component({
  selector: "app-lineui",
  templateUrl: "./lineui.component.html",
  styleUrls: ["./lineui.component.css"]
})
export class LineuiComponent implements OnInit {
  private value: any;
  private jsondata: any;
  // Radar
  public lineChartOptions: ChartOptions = {
    responsive: true
  };
  public lineChartLabels: Label[];
  public lineChartData: ChartDataSets[] = [];
  public lineChartType: ChartType = "line";

  constructor(
    private _inputvalue: InputvalueService,
    private _bottomSheet: MatBottomSheet
  ) {
    if (this._inputvalue.getValue()) {
      this.value = this._inputvalue.getValue();
    }
  }
  openBottomSheet(): void {
    this._bottomSheet.open(BootomSheetComponent);
  }

  ngOnInit() {
    this.jsondata = this._inputvalue.getData(this.value);

    this.lineChartLabels = this._inputvalue.getLabel(this.value);
    for (let i = 0; i < this.jsondata.length; i++) {
      this.lineChartData.push({
        data: this.jsondata[i],
        label: `Object ${i}`
      });
    }
    console.log(this.lineChartData);
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
