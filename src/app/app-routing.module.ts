import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GraphuiComponent } from "./graphui/graphui.component";
import { TableuiComponent } from "./tableui/tableui.component";
import { RadaruiComponent } from "./radarui/radarui.component";
import { BaruiComponent } from "./barui/barui.component";
import { LineuiComponent } from "./lineui/lineui.component";
import { DoughnutuiComponent } from "./doughnutui/doughnutui.component";
import { TreeuiComponent } from "./treeui/treeui.component";
import { PieuiComponent } from "./pieui/pieui.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "table", component: TableuiComponent },
  { path: "pie", component: PieuiComponent },
  { path: "radar", component: RadaruiComponent },
  { path: "bar", component: BaruiComponent },
  { path: "line", component: LineuiComponent },
  { path: "doughnutui", component: DoughnutuiComponent },
  { path: "treeui", component: TreeuiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
