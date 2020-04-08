import { Component, OnInit } from "@angular/core";
import { DialogComponent } from "../dialog/dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: "80%",
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnInit() {}
  apiCallFile() {
    this.openDialog();
  }
}
