import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatSliderModule,
  MatDialogModule,
  MatTabsModule,
  MatButtonModule,
  MatDividerModule
} from "@angular/material";
import { DialogComponent } from "./dialog/dialog.component";
import { apicallService } from "./services/apicall.service";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { InputvalueService } from "./services/inputvalue.service";
import { GraphuiComponent } from "./graphui/graphui.component";
import { TableuiComponent } from "./tableui/tableui.component";
import { RawjsonComponent } from './rawjson/rawjson.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    HomeComponent,
    GraphuiComponent,
    TableuiComponent,
    RawjsonComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [apicallService, InputvalueService],
  bootstrap: [AppComponent]
})
export class AppModule {}
