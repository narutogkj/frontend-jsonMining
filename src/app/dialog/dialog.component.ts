import { Component, EventEmitter, Output, Inject } from "@angular/core";
import { apicallService } from "../services/apicall.service";
import { InputvalueService } from "../services/inputvalue.service";
import { BehaviorSubject, Observable } from "rxjs";
import { MatDialogRef } from "@angular/material";
@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent {
  @Output() outputToParent = new EventEmitter<any>();
  result: Observable<any>; //BehaviorSubject<any> = new BehaviorSubject(null);
  uploadModel: any = null;
  selectedFile: File = null;

  constructor(
    private _apicallService: apicallService,
    private _inputValue: InputvalueService,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {}

  apiCallData(): any {
    const jsondata = JSON.parse(this.uploadModel);
    this._apicallService.postData(jsondata).subscribe(data => {
      this.result = data.data;
      this._inputValue.setValue(this.result);
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }
  apiCallFile() {
    const fd = new FormData();
    fd.append("file", this.selectedFile, this.selectedFile.name);
    this._apicallService.postFile(fd).subscribe(data => {
      this.result = data.data;
      this._inputValue.setValue(this.result);
    });
  }
}
