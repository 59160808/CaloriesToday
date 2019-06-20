import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take,filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface User {
  id?: string;
  username?: string;
  password?: string;
  Name?:string;
  Lastname?:string;
  No?:string;
  Age?:number;
  Gender?:string;
}



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users:Observable<User[]>;
  private userCollection: AngularFirestoreCollection<User>;
  constructor(private afs: AngularFirestore) { 
    this.userCollection = this.afs.collection<User>('login');
    this.users = this.userCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  getAll(): Observable<User[]> {
    return this.users;
  }
 
  get(id: string): Observable<User> {
    return this.userCollection.doc<User>(id).valueChanges().pipe(
      take(1),
      map(user => {
        user.id = id;
        return user
      })
    );
  }

  check(user:User): Observable<User[]> {
    let collection: AngularFirestoreCollection<User>=this.afs.collection<User>('login', ref => ref.where('username', '==',user.username).where('password', '==', user.password));
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
 
  add(user): Promise<DocumentReference> {
    return this.userCollection.add(user);
  }
 
  update(user: User): Promise<void> {
    let tmp = user;
    
    return this.userCollection.doc(user.id).update({
        Name:user.Name,
        Lastname:user.Lastname,
        No:user.No,
        Age:user.Age,
        Gender:user.Gender
    });
  }
 
  delete(id: string): Promise<void> {
    return this.userCollection.doc(id).delete();
  }
}
