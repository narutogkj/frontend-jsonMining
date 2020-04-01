import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartType, RadialChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import { InputvalueService } from "../services/inputvalue.service";
import {
  MatBottomSheet,
  MatBottomSheetRef
} from "@angular/material/bottom-sheet";
import { BootomSheetComponent } from "../bootom-sheet/bootom-sheet.component";
@Component({
  selector: "app-radarui",
  templateUrl: "./radarui.component.html",
  styleUrls: ["./radarui.component.css"]
})
export class RadaruiComponent implements OnInit {
  private value: any;
  private jsondata: any;
  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true
  };
  public radarChartLabels: Label[];
  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = "radar";

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
