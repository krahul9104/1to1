import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validator,
  Validators,
  FormBuilder
} from "@angular/forms";
import { OrganizationService } from "../../../../core/services/organization.service";
import { DepartmentService } from "../../../../core/services/department.service";
import { DepartmentTypeService } from "../../../../core/services/department-type.service";
import { DesignationService } from "../../../../core/services/designation.service";
import { EmployeeService } from "../../../../core/services/employee.service";
import { IEmployee } from "../../../../core/interfaces/employee.service";
import { Ilov } from "../../../../core/interfaces/lov.service";

@Component({
  selector: "create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.scss"]
})
export class CreateEmployeeComponent implements OnInit {
  public employeeForm: FormGroup;
  public isLoadingResults = false;

  public orgsDS$: Ilov[];
  public departmentDS$: Ilov[];
  public departmentTypeDS$: Ilov[];
  public designationDS$: Ilov[];

  public employeeDS$: IEmployee[];
  public displayedColumns = [];

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private org: OrganizationService,
    private dept: DepartmentService,
    private deptType: DepartmentTypeService,
    private designation: DesignationService
  ) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      //_id: ["-1"],
      //number: ["-1"],
      active: ["true"],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      startDate: ["", Validators.required],
      orgId: ["", Validators.required],
      departmentId: ["", Validators.required],
      departmentTypeId: ["", Validators.required],
      designationId: ["", Validators.required],
      managerId: ["", Validators.required],
      roleId: ["123"]
    });

    this.displayedColumns = [
      "number",
      "active",
      "firstName",
      "lastName",
      "email",
      "startDate",
      "orgId",
      "departmentId",
      "departmentTypeId",
      "designationId"
    ];

    //get OrgList for select LOV
    this.populateOrganizationLov();
    this.populateEmployeeTable();
    this.onChanges();
  }

  onChanges(): void {
    //capture chnages in form group fields
    this.employeeForm.get("orgId").valueChanges.subscribe(val => {
      if (val != null && val != "") this.populateDepaermentLOV(val);
    });
    this.employeeForm.get("departmentId").valueChanges.subscribe(val => {
      if (val != null && val != "") this.populateDepaermentTypeLOV(val);
    });
    this.employeeForm.get("departmentTypeId").valueChanges.subscribe(val => {
      if (val != null && val != "") this.populateDesignationLOV(val);
    });
    this.employeeForm.get("designationId").valueChanges.subscribe(val => {
      //populate manage based on depart
    });
  }

  populateOrganizationLov() {
    this.org.getOrgIDName().subscribe(data => {
      this.orgsDS$ = data;
    });
  }

  populateDepaermentLOV(id: string) {
    this.dept.getDepartmentforOrg(id).subscribe(data => {
      this.departmentDS$ = data;
    });
  }

  populateDepaermentTypeLOV(id: string) {
    this.deptType.getDepartmentTypeforDept(id).subscribe(data => {
      this.departmentTypeDS$ = data;
    });
  }

  populateDesignationLOV(id: string) {
    this.designation.getDesignationforDeptType(id).subscribe(data => {
      this.designationDS$ = data;
    });
  }

  populateEmployeeTable() {
    this.employeeService.getAllEmployee().subscribe(data => {
      console.log("data" + JSON.stringify(data));
      this.isLoadingResults = true;
      this.employeeDS$ = data;
    });
  }

  intiFormGroup() {
    this.employeeForm.setValue({
      firstName: "",
      lastName: "",
      email: "",
      startDate: "",
      managerId: "",
      orgId: "",
      roleId: "",
      designationId: "1",
      departmentId: "",
      departmentTypeId: ""
    });
  }

  onSubmit() {
    console.log("form data values" + JSON.stringify(this.employeeForm.value));
    this.employeeService.createEmployee(this.employeeForm.value).subscribe(
      data => {
        console.log("data save" + JSON.stringify(data));
        //this.populateEmployeeTable();
        //this.onClear();
      },
      error => {
        console.log("error while processing data " + error);
      }
    );
  }

  onClear() {
    this.employeeForm.reset();
  }
}
