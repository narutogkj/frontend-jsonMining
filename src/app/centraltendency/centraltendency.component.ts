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
  public Mean: any;
  public Mode: any;
  public Median: any;
  constructor(private _inputValue: InputvalueService) {
    if (this._inputValue.getValue()) {
      this.value = this._inputValue.getValue();
    }
    this.jsondata = this._inputValue.getData(this.value);
    //Convert string to integer(array elements)
    for (var i = 0; i < this.jsondata[0].length; i++)
      this.result.push(+this.jsondata[0][i]);
    try {
      this.Mean = ss.mean(this.result).toFixed(2);
      this.Mode = ss.mode(this.result).toFixed(2);
      this.Median = ss.median(this.result).toFixed(2);
    } catch (error) {
      console.log("An error accoured");
    }
  }

  ngOnInit() {
    this.createCTTabel(
      this._inputValue.getLabel(this.value),
      this._inputValue.getData(this.value),
      this._inputValue.isJsonArray(this.value)
    );
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
      table += `<th scope="col">Mean</th>`;
      table += `<th scope="col">Median</th>`;
      table += `<th scope="col">Mode</th>`;
      table += `</tr>
      </thead>
      <tbody>`;

      for (let i = 0; i < rows; i++) {
        table += "<tr>";
        table += `<td> ... </td>`;
        for (let c = 0; c < cols; c++) {
          table += "<td>" + data[i][c] + "</td>";
        }
        table += `<td>${this.Mean}</td>`;
        table += `<td>${this.Median}</td>`;
        table += `<td>${this.Mode}</td>`;
        table += "</tr>";
      }
      table += `<tr><td>Mean</td>`;
      for (let c = 0; c < cols; c++) {
        table += `<td>1</td>`;
      }
      table += "</tr>";
      table += `<tr><td>Median</td>`;
      for (let c = 0; c < cols; c++) {
        table += `<td>1</td>`;
      }
      table += "</tr>";
      table += `<tr><td>Mode</td>`;
      for (let c = 0; c < cols; c++) {
        table += `<td>1</td>`;
      }
      table += "</tr>";
    }

    document.getElementById("td").innerHTML = `${table}`;
  }
}
