import { Injectable } from "@angular/core";
import { InputvalueService } from "./inputvalue.service";

@Injectable({
  providedIn: "root"
})
export class CreatetabelService {
  constructor(private _inputvalueService: InputvalueService) {}

  public createTabel(label, data, isJsonArray: boolean) {
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
    table += `<table class="table table-bordered">
      <thead class="thead-dark"><tr>`;

    if (!isMultiDArray(data)) {
      if (!isJsonArray) {
        //////////////////////////////////////////////
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
      for (let i = 0; i < cols; i++) {
        table += `<th scope="col">${label[i]}</th>`;
      }
      table += `</tr>
      </thead>
      <tbody>`;

      for (let i = 0; i < rows; i++) {
        table += "<tr>";
        for (let c = 0; c < cols; c++) {
          table += "<td>" + data[i][c] + "</td>";
        }
        table += "</tr>";
      }
    }

    document.getElementById("td").innerHTML = `${table}`;
  }
}
