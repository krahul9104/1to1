import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
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
import { CreateEmployeeComponent } from "./modules/components/employee/create-employee/create-employee.component";
import { EmployeeService } from "./core/validation/employee.service";
import { EmployeeAPIService } from "./core/http/employee-api.service";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftPlaneComponent,
    RightPlaneComponent,
    UpcomingEventsComponent,
    PastEventsComponent,
    StatsComponent,
    CreateEmployeeComponent
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
