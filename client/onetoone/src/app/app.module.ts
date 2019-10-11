import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MaterialModulesModule } from "./_modules/material-modules/material-modules.module";
import { LeftPlaneComponent } from "./left-plane/left-plane.component";
import { RightPlaneComponent } from "./right-plane/right-plane.component";
import { UpcomingEventsComponent } from "./upcoming-events/upcoming-events.component";
import { PastEventsComponent } from "./past-events/past-events.component";
import { StatsComponent } from "./stats/stats.component";
import { GoalsService } from "./_services/goals.service";
import { CreateEmployeeComponent } from "./modules/components/admin/create-employee/create-employee.component";
import { EmployeeService } from "./core/validation/employee.service";
import { EmployeeAPIService } from "./core/http/employee-api.service";
import { HttpClientModule } from "@angular/common/http";
import { ManageOrganizationComponent } from "./modules/components/admin/manage-organization/manage-organization.component";
import { ManageDepartmentComponent } from "./modules/components/admin/manage-department/manage-department.component";
import { ManageDepartmentTypeComponent } from "./modules/components/admin/manage-department-type/manage-department-type.component";
import { ManageDesignationComponent } from "./modules/components/admin/manage-designation/manage-designation.component";
import { ManageEmployeeComponent } from "./modules/components/admin/manage-employee/manage-employee.component";
import { AdminComponent } from "./modules/components/admin/admin/admin.component";
import { PerformanceComponent } from "./modules/components/performance/performance/performance.component";
import { HomeComponent } from "./modules/components/home/home/home.component";
import { GoalComponent } from "./modules/components/goals/goal/goal.component";
import { OnetooneComponent } from "./modules/components/onetoone/onetoone/onetoone.component";
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    LeftPlaneComponent,
    RightPlaneComponent,
    UpcomingEventsComponent,
    PastEventsComponent,
    StatsComponent,
    CreateEmployeeComponent,
    ManageOrganizationComponent,
    ManageDepartmentComponent,
    ManageDepartmentTypeComponent,
    ManageDesignationComponent,
    ManageEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GoalsService, EmployeeService, EmployeeAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
