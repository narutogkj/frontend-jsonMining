import { Component, OnInit } from "@angular/core";

import { InputvalueService } from "../services/inputvalue.service";
@Component({
  selector: "app-treeui",
  templateUrl: "./treeui.component.html",
  styleUrls: ["./treeui.component.css"]
})
export class TreeuiComponent implements OnInit {
  private value: any;
  constructor(private _inputValue: InputvalueService) {}

  ngOnInit() {
    if (this._inputValue.getValue()) {
      this.value = this._inputValue.getValue();
    }
  }
}
