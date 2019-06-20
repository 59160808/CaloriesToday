import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take,filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface DataIntake {
  id?: string;
  login_id?: string;
  Name?:string;
  Lastname?:string;
  Protein?:number;
  Carbohydrate?:number;
  Fuite?:number;
  Veges?:number;
  Fat?:number;
  Totle?:number;
  date_created?:string;
  created_at?:Date;
}

@Injectable({
  providedIn: 'root'
})
export class IntakeService {

  private datas:Observable<DataIntake[]>;
  private dataCollection: AngularFirestoreCollection<DataIntake>;
  constructor(private afs: AngularFirestore) { 
    this.dataCollection = this.afs.collection<DataIntake>('dataIntake');
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

  getAll(): Observable<DataIntake[]> {
    return this.datas;
  }
 
  get(id: string): Observable<DataIntake> {
    return this.dataCollection.doc<DataIntake>(id).valueChanges().pipe(
      take(1),
      map(data => {
        data.id = id;
        return data
      })
    );
  }

  getByPerson(name: string,lastname: string,size:number): Observable<DataIntake[]> {
    let collection: AngularFirestoreCollection<DataIntake>=this.afs.collection<DataIntake>('dataIntake', ref => ref.where('Name', '==',name).where('Lastname', '==',lastname).limit(size));
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

  
 
  add(dataIntake): Promise<DocumentReference> {
    return this.dataCollection.add(dataIntake);
  }
 
  // update(DataIntake: DataIntake): Promise<void> {
  //   let tmp = DataIntake;
    
  //   return this.dataCollection.doc(DataIntake.id).update({
  //       bee:DataIntake.bee,
  //       tee:DataIntake.tee,
  //   });
  // }
 
  delete(id: string): Promise<void> {
    return this.dataCollection.doc(id).delete();
  }
}
