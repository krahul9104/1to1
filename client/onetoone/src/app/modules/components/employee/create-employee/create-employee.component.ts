import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { EmployeeAPIService } from "../../../../core/http/employee-api.service";
import { IEmployee } from "../../../../core/interfaces/employee.service";

@Component({
  selector: "create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.scss"]
})
export class CreateEmployeeComponent implements OnInit {
  public isLoadingResults = false;
  public dataSource: IEmployee[];
  public displayedColumns: string[] = ["firstName", "lastName", "email"];
  constructor(private empAPI: EmployeeAPIService) {}

  form = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    startDate: new FormControl("", Validators.required),
    managerId: new FormControl("", Validators.required),
    orgId: new FormControl("", Validators.required),
    roleId: new FormControl("", Validators.required),
    designationId: new FormControl("1", Validators.required),
    departmentId: new FormControl("", Validators.required),
    teamTypeId: new FormControl("", Validators.required)
  });

  departments = [
    { value: "1", viewValue: "Sales" },
    { value: "2", viewValue: "HR" },
    { value: "3", viewValue: "Marketing" },
    { value: "4", viewValue: "Product" }
  ];

  teamType = [
    { value: "1", viewValue: "Dev" },
    { value: "2", viewValue: "QA" },
    { value: "3", viewValue: "BSA" }
  ];

  orgs = [{ value: "5d90aa185ff61128b9b172cd", viewValue: "OnetoOne" }];

  managers = [
    { value: "1", viewValue: "RK" },
    { value: "2", viewValue: "AKM" }
  ];

  roles = [
    { value: "1", viewValue: "Developer" },
    { value: "2", viewValue: "Manager" },
    { value: "3", viewValue: "Sr Manager" },
    { value: "3", viewValue: "Director" }
  ];

  designations = [
    { value: "1", viewValue: "Dev" },
    { value: "2", viewValue: "QA" },
    { value: "3", viewValue: "BSA" }
  ];

  ngOnInit() {
    //console.log(JSON.stringify(this.empAPI.getEmployee()));
    this.empAPI.getEmployee().subscribe(data => {
      console.log("data" + JSON.stringify(data));
      this.isLoadingResults = true;
      this.dataSource = data["employees"];
    });
  }

  intiFormGroup() {
    this.form.setValue({
      firstName: "",
      lastName: "",
      email: "",
      startDate: "",
      managerId: "",
      orgId: "",
      roleId: "",
      designationId: "1",
      departmentId: "",
      teamTypeId: ""
    });
  }

  onSubmit() {
    console.log("form data values" + JSON.stringify(this.form.value));
    this.empAPI.createEmployee(this.form.value).subscribe(
      data => {
        console.log("data save" + data);
        this.onClear();
      },
      error => {
        console.log("error while processing data " + error);
      }
    );
  }

  onClear() {
    this.form.reset();
    //this.intiFormGroup();
  }
}
