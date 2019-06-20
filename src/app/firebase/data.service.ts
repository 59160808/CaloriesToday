import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take,filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface DataPerson {
  id?: string;
  login_id?: string;
  Name?:string;
  Lastname?:string;
  No?:string;
  Age?:number;
  Gender?:string;
  Weight?:number;
  Height?:number;
  Stress?:number;
  Activity?:number;
  bee?:number;
  tee?:number;
  date_created?:string;
  created_at?:Date;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private datas:Observable<DataPerson[]>;
  private dataCollection: AngularFirestoreCollection<DataPerson>;
  constructor(private afs: AngularFirestore) { 
    this.dataCollection = this.afs.collection<DataPerson>('dataPerson');
    this.datas = this.dataCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  getAll(): Observable<DataPerson[]> {
    return this.datas;
  }
 
  get(id: string): Observable<DataPerson> {
    return this.dataCollection.doc<DataPerson>(id).valueChanges().pipe(
      take(1),
      map(data => {
        data.id = id;
        return data
      })
    );
  }

  getByDate(id: string,date:string): Observable<DataPerson[]> {
    let collection: AngularFirestoreCollection<DataPerson>=this.afs.collection<DataPerson>('dataPerson', ref => ref.where('login_id', '==',id).where('date_created', '==',date));
    return collection.snapshotChanges().pipe(
      map(actions => {
        
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getByUser(id: string): Observable<DataPerson[]> {
    let collection: AngularFirestoreCollection<DataPerson>=this.afs.collection<DataPerson>('dataPerson', ref => ref.where('login_id', '==',id));
    return collection.snapshotChanges().pipe(
      map(actions => {
        
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getByPerson(name: string,lastname: string): Observable<DataPerson[]> {
    let collection: AngularFirestoreCollection<DataPerson>=this.afs.collection<DataPerson>('dataPerson', ref => ref.where('Name', '==',name).where('Lastname', '==',lastname));
    return collection.snapshotChanges().pipe(
      map(actions => {
        
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

 
  add(dataPerson): Promise<DocumentReference> {
    return this.dataCollection.add(dataPerson);
  }
 
  update(dataPerson: DataPerson): Promise<void> {
    let tmp = dataPerson;
    
    return this.dataCollection.doc(dataPerson.id).update({
        bee:dataPerson.bee,
        tee:dataPerson.tee,
    });
  }
 
  delete(id: string): Promise<void> {
    return this.dataCollection.doc(id).delete();
  }
}
