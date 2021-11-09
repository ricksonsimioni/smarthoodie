import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Hoodie } from '../app/hoodie.model';

@Injectable({
  providedIn: 'root'
})

export class HoodieService {

  constructor(private angularFirestore: AngularFirestore) {}

  getHoodieDoc(id) {
    return this.angularFirestore
    .collection('hoodie-collection')
    .doc(id)
    .valueChanges()
  }

  getHoodieList() { 
    return this.angularFirestore
    .collection("hoodie-collection")
    .snapshotChanges();
  }

  createHoodie(hoodie: Hoodie) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection("hoodie-collection")
        .add(hoodie)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deleteHoodie(hoodie) {
    return this.angularFirestore
      .collection("hoodie-collection")
      .doc(hoodie.id)
      .delete();
  }
  
  updateHoodie(hoodie: Hoodie, id) {
    return this.angularFirestore
      .collection("hoodie-collection")
      .doc(id)
      .update({
        hash: hoodie.hash,
        status: hoodie.status
      });
  }
}