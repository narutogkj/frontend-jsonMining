import { Component, OnInit } from "@angular/core";

import * as ss from "simple-statistics";
import { InputvalueService } from "../services/inputvalue.service";
@Component({
  selector: "app-descriptive",
  templateUrl: "./descriptive.component.html",
  styleUrls: ["./descriptive.component.css"],
})
export class DescriptiveComponent implements OnInit {
  private value: any;
  public jsondata: any;
  public result = [];
  public resultArray = [];
  public MinRow = [];
  public MaxRow = [];
  public ProductRow = [];
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
        this.MinRow[i] = ss.min(this.resultArray[i]).toFixed(2);
        this.MaxRow[i] = ss.max(this.resultArray[i]).toFixed(2);
        this.ProductRow[i] = ss.product(this.resultArray[i]).toFixed(2);
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
    const minValue = [];
    const maxValue = [];
    const productValue = [];
    for (let x = 0; x < resultArray[0].length; x++) {
      for (let i = 0; i < resultArray.length; i++) {
        tempArrayCT.push(resultArray[i][x]);
      }
      minValue.push(ss.min(tempArrayCT).toFixed(2));
      maxValue.push(ss.max(tempArrayCT).toFixed(2));
      productValue.push(ss.product(tempArrayCT).toFixed(2));
      tempArrayCT = [];
    }
    return { minValue, maxValue, productValue };
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
      table += `<th scope="col" class="bg-danger">Min</th>`;
      table += `<th scope="col" class="bg-danger">Max</th>`;
      table += `<th scope="col" class="bg-danger">Product</th>`;
      table += `</tr>
    </thead>
    <tbody>`;

      for (let i = 0; i < rows; i++) {
        table += "<tr>";
        table += `<td> ... </td>`;
        for (let c = 0; c < cols; c++) {
          table += "<td>" + data[i][c] + "</td>";
        }
        table += `<td>${this.MinRow[i]}</td>`;
        table += `<td>${this.MaxRow[i]}</td>`;
        table += `<td>${this.ProductRow[i]}</td>`;
        table += "</tr>";
      }
      table += `<tr><td class="bg-danger text-white">Min</td>`;
      for (let c = 0; c < cols; c++) {
        table += `<td>${this.ctColValues.minValue[c]}</td>`;
      }
      table += "</tr>";
      table += `<tr><td class="bg-danger text-white">Max</td>`;
      for (let c = 0; c < cols; c++) {
        table += `<td>${this.ctColValues.maxValue[c]}</td>`;
      }
      table += "</tr>";
      table += `<tr><td class="bg-danger text-white">Product</td>`;
      for (let c = 0; c < cols; c++) {
        table += `<td>${this.ctColValues.productValue[c]}</td>`;
      }
      table += "</tr>";
    }

    document.getElementById("td").innerHTML = `${table}`;
  }
}
