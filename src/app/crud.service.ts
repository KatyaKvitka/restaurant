import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) {}

  create_NewItem(record) {
    return this.firestore.collection('Students').add(record);
  }

  read_Items() {
    return this.firestore.collection('Students').snapshotChanges();
  }

  update_Item(recordID,record){
    this.firestore.doc('Students/' + recordID).update(record);
  }

  delete_Item(record_id) {
    this.firestore.doc('Students/' + record_id).delete();
  }
}
