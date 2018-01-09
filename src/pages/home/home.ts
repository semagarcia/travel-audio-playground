import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  images = [1, 2, 3, 4, 5, 6, 7];

  //tasksRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.items = db.list('b').valueChanges();
  }

  ionViewDidLoad() {

  }

  ionViewDidEnter() {

  }

}
