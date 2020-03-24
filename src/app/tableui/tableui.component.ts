import { Component, OnInit } from "@angular/core";
import { InputvalueService } from "../services/inputvalue.service";
import { CreatetabelService } from "../services/createtabel.service";

@Component({
  selector: "app-tableui",
  templateUrl: "./tableui.component.html",
  styleUrls: ["./tableui.component.css"]
})
export class TableuiComponent implements OnInit {
  private value: any;
  constructor(
    private _inputValue: InputvalueService,
    private _createtabel: CreatetabelService
  ) {}

  ngOnInit() {
    if (this._inputValue.getValue()) {
      this.value = this._inputValue.getValue();
    }
    // console.log(this.value);
    // console.log(this._inputValue.getLabel(this.value));
    // console.log(this._inputValue.getData(this.value));
    this._createtabel.createTabel(
      this._inputValue.getLabel(this.value),
      this._inputValue.getData(this.value),
      this._inputValue.isJsonArray(this.value)
    );
  }
}
