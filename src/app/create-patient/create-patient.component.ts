import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})

export class CreatePatientComponent implements OnInit {
  public patientForm: FormGroup;

  constructor(
    public patientService: PatientService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.patientForm = this.formBuilder.group({
      name: [''],
      age: [''],
      city: ['']
    })      
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.patientService.createPatient(this.patientForm.value);
    this.router.navigate(['list-patients']); 
   };
}