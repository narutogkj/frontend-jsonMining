import { Component, OnInit } from "@angular/core";
import { InputvalueService } from "../services/inputvalue.service";
import * as $ from "jquery";
@Component({
  selector: "app-graphui",
  templateUrl: "./graphui.component.html",
  styleUrls: ["./graphui.component.css"]
})
export class GraphuiComponent implements OnInit {
  value: any = {
    default: true
  };
  constructor(private _inputValue: InputvalueService) {}

  ngOnInit() {
    console.log(this._inputValue.getValue());
  }
}
