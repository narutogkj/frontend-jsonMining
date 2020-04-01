import { Component, OnInit } from "@angular/core";

import { InputvalueService } from "../services/inputvalue.service";
import { BootomSheetComponent } from "../bootom-sheet/bootom-sheet.component";
import { MatBottomSheet } from "@angular/material";
@Component({
  selector: "app-treeui",
  templateUrl: "./treeui.component.html",
  styleUrls: ["./treeui.component.css"]
})
export class TreeuiComponent implements OnInit {
  private value: any;
  constructor(
    private _inputvalue: InputvalueService,
    private _bottomSheet: MatBottomSheet
  ) {
    if (this._inputvalue.getValue()) {
      this.value = this._inputvalue.getValue();
    }
  }
  openBottomSheet(): void {
    this._bottomSheet.open(BootomSheetComponent);
  }
  ngOnInit() {}
}
