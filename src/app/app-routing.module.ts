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
import { StatisticsuiComponent } from "./statisticsui/statisticsui.component";
import { CentraltendencyComponent } from "./centraltendency/centraltendency.component";
import { DispersionComponent } from "./dispersion/dispersion.component";
import { DescriptiveComponent } from "./descriptive/descriptive.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "table", component: TableuiComponent },
  { path: "pie", component: PieuiComponent },
  { path: "radar", component: RadaruiComponent },
  { path: "bar", component: BaruiComponent },
  { path: "line", component: LineuiComponent },
  { path: "doughnut", component: DoughnutuiComponent },
  { path: "tree", component: TreeuiComponent },
  { path: "statistics", component: StatisticsuiComponent },
  { path: "centraltendency", component: CentraltendencyComponent },
  { path: "descriptive", component: DescriptiveComponent },
  { path: "dispersion", component: DispersionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
