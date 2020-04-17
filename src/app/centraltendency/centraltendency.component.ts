import { Component, OnInit } from "@angular/core";

import * as ss from "simple-statistics";
import { InputvalueService } from "../services/inputvalue.service";
@Component({
  selector: "app-centraltendency",
  templateUrl: "./centraltendency.component.html",
  styleUrls: ["./centraltendency.component.css"],
})
export class CentraltendencyComponent implements OnInit {
  private value: any;
  public jsondata: any;
  public result = [];
  public resultArray = [];
  public MeanRow = [];
  public ModeRow = [];
  public MedianRow = [];
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
        this.MeanRow[i] = ss.mean(this.resultArray[i]).toFixed(2);
        this.ModeRow[i] = ss.mode(this.resultArray[i]).toFixed(2);
        this.MedianRow[i] = ss.median(this.resultArray[i]).toFixed(2);
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
    const meanValue = [];
    const modeValue = [];
    const medianValue = [];
    for (let x = 0; x < resultArray[0].length; x++) {
      for (let i = 0; i < resultArray.length; i++) {
        tempArrayCT.push(resultArray[i][x]);
      }
      meanValue.push(ss.mean(tempArrayCT).toFixed(2));
      modeValue.push(ss.mode(tempArrayCT).toFixed(2));
      medianValue.push(ss.median(tempArrayCT).toFixed(2));
      tempArrayCT = [];
    }
    return { meanValue, modeValue, medianValue };
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
      table += `<th scope="col" class="bg-danger">Mean</th>`;
      table += `<th scope="col" class="bg-danger">Median</th>`;
      table += `<th scope="col" class="bg-danger">Mode</th>`;
      table += `</tr>
      </thead>
      <tbody>`;

      for (let i = 0; i < rows; i++) {
        table += "<tr>";
        table += `<td> ... </td>`;
        for (let c = 0; c < cols; c++) {
          table += "<td>" + data[i][c] + "</td>";
        }
        table += `<td>${this.MeanRow[i]}</td>`;
        table += `<td>${this.MedianRow[i]}</td>`;
        table += `<td>${this.ModeRow[i]}</td>`;
        table += "</tr>";
      }
      table += `<tr><td class="bg-danger text-white">Mean</td>`;
      for (let c = 0; c < cols; c++) {
        table += `<td>${this.ctColValues.meanValue[c]}</td>`;
      }
      table += "</tr>";
      table += `<tr><td class="bg-danger text-white">Median</td>`;
      for (let c = 0; c < cols; c++) {
        table += `<td>${this.ctColValues.medianValue[c]}</td>`;
      }
      table += "</tr>";
      table += `<tr><td class="bg-danger text-white">Mode</td>`;
      for (let c = 0; c < cols; c++) {
        table += `<td>${this.ctColValues.modeValue[c]}</td>`;
      }
      table += "</tr>";
    }

    document.getElementById("td").innerHTML = `${table}`;
  }
}
