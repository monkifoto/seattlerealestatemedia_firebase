import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'seattle-real-estate-media_firebase';
  items$: Observable<any[]> | undefined;
  constructor( private store: AngularFirestore) {}

  items = this.store.collection('products').valueChanges({ idField: 'id' }) as Observable<any[]>;
}
