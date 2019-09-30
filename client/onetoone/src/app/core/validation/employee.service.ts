import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    startDate: new FormControl('', Validators.required),
    managerId: new FormControl('', Validators.required),
    orgId: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required)
  });

  intiFormGroup() {
    this.form.setValue({
      firstName: '',
      lastName: '',
      email: '',
      startDate: '',
      managerId: '',
      orgId: '',
      role: '',
      designation: ''
    });
  }
}
