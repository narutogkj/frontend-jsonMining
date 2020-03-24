import { Component, OnInit } from "@angular/core";

import { InputvalueService } from "../services/inputvalue.service";

@Component({
  selector: "app-rawjson",
  templateUrl: "./rawjson.component.html",
  styleUrls: ["./rawjson.component.css"]
})
export class RawjsonComponent implements OnInit {
  value: any;
  constructor(private _inputValue: InputvalueService) {}

  ngOnInit() {
    if (this._inputValue.getValue()) {
      this.value = this._inputValue.getValue();
    }
  }
}
