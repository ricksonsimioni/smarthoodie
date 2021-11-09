import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})

export class EditPatientComponent implements OnInit {
  
  public editForm: FormGroup;
  patientRef: any

  constructor(
    public patientService: PatientService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      age: [''],
      city: ['']
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.patientService.getPatientDoc(id).subscribe(res => {
      this.patientRef = res;
      this.editForm = this.formBuilder.group({
        name: [this.patientRef.name],
        age: [this.patientRef.age],
        city: [this.patientRef.city]
      })      
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    
    this.patientService.updatePatient(this.editForm.value, id);
    this.router.navigate(['list-patients']);
  };

}