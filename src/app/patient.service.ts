import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Patient } from '../app/patient.model';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(private angularFirestore: AngularFirestore) {}

  getPatientDoc(id) {
    return this.angularFirestore
    .collection('patient-collection')
    .doc(id)
    .valueChanges()
  }

  getPatientList() { 
    return this.angularFirestore
    .collection("patient-collection")
    .snapshotChanges();
  }

  createPatient(patient: Patient) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection("patient-collection")
        .add(patient)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deletePatient(patient) {
    return this.angularFirestore
      .collection("patient-collection")
      .doc(patient.id)
      .delete();
  }
  
  updatePatient(patient: Patient, id) {
    return this.angularFirestore
      .collection("patient-collection")
      .doc(id)
      .update({
        name: patient.name,
        age: patient.age,
        city: patient.city
      });
  }
}