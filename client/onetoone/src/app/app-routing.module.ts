import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./modules/components/admin/admin/admin.component";
import { PerformanceComponent } from "./modules/components/performance/performance/performance.component";
import { HomeComponent } from "./modules/components/home/home/home.component";
import { GoalComponent } from "./modules/components/goals/goal/goal.component";
import { OnetooneComponent } from "./modules/components/onetoone/onetoone/onetoone.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "onetoone", component: OnetooneComponent },
  { path: "performance", component: PerformanceComponent },
  { path: "goals", component: GoalComponent },
  { path: "admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  HomeComponent,
  OnetooneComponent,
  PerformanceComponent,
  GoalComponent,
  AdminComponent
];
