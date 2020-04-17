import { Component, OnInit } from "@angular/core";

import * as ss from "simple-statistics";
import { InputvalueService } from "../services/inputvalue.service";
@Component({
  selector: "app-dispersion",
  templateUrl: "./dispersion.component.html",
  styleUrls: ["./dispersion.component.css"],
})
export class DispersionComponent implements OnInit {
  private value: any;
  public jsondata: any;
  public result = [];
  public resultArray = [];
  public VarianceRow = [];
  public StandardDeviationRow = [];
  public InterquartileRangeRow = [];
  public ctColValues;
  constructor(private _inputValue: InputvalueService) {
    if (this._inputValue.getValue()) {
      this.value = this._inputValue.getValue();
    }
    this.jsondata = this._inputValue.getData(this.value);
    //Convert string to integer(array elements)
    for (var i = 0; i < this.jsondata.length; i++) {
      for (var j = 0; j < this.jsondata[i].length; j++) {
        this.result.push(+this.jsondata[i][j]);
      }
      this.resultArray.push(this.result);
      this.result = [];
    }

    try {
      for (var i = 0; i < this.jsondata.length; i++) {
        this.VarianceRow[i] = ss.variance(this.resultArray[i]).toFixed(2);
        this.StandardDeviationRow[i] = ss
          .standardDeviation(this.resultArray[i])
          .toFixed(2);
        this.InterquartileRangeRow[i] = ss
          .interquartileRange(this.resultArray[i])
          .toFixed(2);
      }
    } catch (error) {
      console.log("An error accoured");
    }
  }

  ngOnInit() {
    this.ctColValues = this.centralTendencyColValues(this.resultArray);
    this.createCTTabel(
      this._inputValue.getLabel(this.value),
      this._inputValue.getData(this.value),
      this._inputValue.isJsonArray(this.value)
    );
  }

  public centralTendencyColValues(resultArray) {
    let j = 0;
    let tempArrayCT = [];
    const varianceValue = [];
    const standardDeviationValue = [];
    const interquartileRangeValue = [];
    for (let x = 0; x < resultArray[0].length; x++) {
      for (let i = 0; i < resultArray.length; i++) {
        tempArrayCT.push(resultArray[i][x]);
      }
      varianceValue.push(ss.variance(tempArrayCT).toFixed(2));
      standardDeviationValue.push(ss.standardDeviation(tempArrayCT).toFixed(2));
      interquartileRangeValue.push(
        ss.interquartileRange(tempArrayCT).toFixed(2)
      );
      tempArrayCT = [];
    }
    return { varianceValue, standardDeviationValue, interquartileRangeValue };
  }

  public createCTTabel(label, data, isJsonArray: boolean) {
    let table = "";
    const rows = data.length;
    const cols = label.length;
    function isMultiDArray(data) {
      if (data[0] === undefined) {
        return false;
      } else {
        return data[0].constructor === Array;
      }
    }
    table += `<table class="table  table-sm table-bordered">
    <thead class="thead-dark"><tr>`;

    if (!isMultiDArray(data)) {
      if (!isJsonArray) {
        //////////////////////////////////////////////
        table += `<th scope="col">Object</th>`;
        for (let i = 0; i < cols; i++) {
          table += `<th scope="col">${label[i]}</th>`;
        }
      }
      table += "<tr>";
      for (let i = 0; i < rows; i++) {
        table += "<td>" + data[i] + "</td>";
      }
      table += "</tr>";
    } else {
      table += `<th scope="col">Object</th>`;
      for (let i = 0; i < cols; i++) {
        table += `<th scope="col">${label[i]}</th>`;
      }
      table += `<th scope="col" class="bg-danger">Variance</th>`;
      table += `<th scope="col" class="bg-danger">Standard Deviation</th>`;
      table += `<th scope="col" class="bg-danger">Interquartile Range</th>`;
      table += `</tr>
    </thead>
    <tbody>`;

      for (let i = 0; i < rows; i++) {
        table += "<tr>";
        table += `<td> ... </td>`;
        for (let c = 0; c < cols; c++) {
          table += "<td>" + data[i][c] + "</td>";
        }
        table += `<td>${this.VarianceRow[i]}</td>`;
        table += `<td>${this.StandardDeviationRow[i]}</td>`;
        table += `<td>${this.InterquartileRangeRow[i]}</td>`;
        table += "</tr>";
      }
      table += `<tr><td class="bg-danger text-white">Variance</td>`;
      for (let c = 0; c < cols; c++) {
        table += `<td>${this.ctColValues.varianceValue[c]}</td>`;
      }
      table += "</tr>";
      table += `<tr><td class="bg-danger text-white">Standard Deviation</td>`;
      for (let c = 0; c < cols; c++) {
        table += `<td>${this.ctColValues.standardDeviationValue[c]}</td>`;
      }
      table += "</tr>";
      table += `<tr><td class="bg-danger text-white">Interquartile Range</td>`;
      for (let c = 0; c < cols; c++) {
        table += `<td>${this.ctColValues.interquartileRangeValue[c]}</td>`;
      }
      table += "</tr>";
    }

    document.getElementById("td").innerHTML = `${table}`;
  }
}
