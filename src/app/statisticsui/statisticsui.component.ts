import { Component, OnInit } from "@angular/core";
import { InputvalueService } from "../services/inputvalue.service";

import {
  MatBottomSheet,
  MatBottomSheetRef
} from "@angular/material/bottom-sheet";
import { BootomSheetComponent } from "../bootom-sheet/bootom-sheet.component";
import statistiken from "statistiken";
import * as ss from "simple-statistics";
@Component({
  selector: "app-statisticsui",
  templateUrl: "./statisticsui.component.html",
  styleUrls: ["./statisticsui.component.css"]
})
export class StatisticsuiComponent implements OnInit {
  private value: any;
  public jsondata: any;
  public result = [];
  public Mean: any;
  public Mode: any;
  public Median: any;
  public Variance: any;
  public StandardDeviation: any;
  public SampleKurtosis: any;
  public Min: any;
  public Max: any;
  public Sum: any;
  public Product: any;
  public HarmonicMean: any;
  public GeometricMean: any;
  public RootMeanSquare: any;

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
    //Convert string to integer(array elements)
    for (var i = 0; i < this.jsondata[0].length; i++)
      this.result.push(+this.jsondata[0][i]);
    try {
      this.Mean = ss.mean(this.result).toFixed(2);
      this.Mode = ss.mode(this.result).toFixed(2);
      this.Median = ss.median(this.result).toFixed(2);
      this.Variance = ss.variance(this.result).toFixed(2);
      this.StandardDeviation = ss.standardDeviation(this.result).toFixed(2);
      this.Min = ss.min(this.result).toFixed(2);
      this.Max = ss.max(this.result).toFixed(2);
      this.Sum = ss.sum(this.result).toFixed(2);
      this.Product = ss.product(this.result).toFixed(2);
      this.HarmonicMean = ss.harmonicMean(this.result).toFixed(2);
      this.GeometricMean = ss.geometricMean(this.result).toFixed(2);
      this.RootMeanSquare = ss.rootMeanSquare(this.result).toFixed(2);
    } catch (error) {
      console.log("An error accoured");
    }
  }
}
