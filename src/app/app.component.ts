import { Component } from '@angular/core';

// Use firebase
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
// Rxjs
import { Observable } from 'rxjs';

interface Order {
  cofeeOrder:[],
  completed:boolean,
  customerName:string,
  orderNumber:string,
  timeStamp:Date
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  order$: Observable<any>;

  constructor(firestore: Firestore) {
    const col = collection(firestore,"coffeeOrders")
    this.order$ = collectionData(col);
  }
}
