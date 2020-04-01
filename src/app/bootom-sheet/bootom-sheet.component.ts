import { Component, OnInit } from "@angular/core";
import { InputvalueService } from "../services/inputvalue.service";

@Component({
  selector: "app-bootom-sheet",
  templateUrl: "./bootom-sheet.component.html",
  styleUrls: ["./bootom-sheet.component.css"]
})
export class BootomSheetComponent implements OnInit {
  value: any;
  constructor(private _inputValue: InputvalueService) {}

  ngOnInit() {
    if (this._inputValue.getValue()) {
      this.value = this._inputValue.getValue();
    }
  }
}
