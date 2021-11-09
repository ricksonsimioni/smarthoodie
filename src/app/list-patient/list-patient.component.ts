import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient.model';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})

export class ListPatientComponent implements OnInit {
  Patients: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getPatientList().subscribe(res => {
      this.Patients = res.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Patient;
      })
    });    
  }

  removePatient = patient => this.patientService.deletePatient(patient);
}
