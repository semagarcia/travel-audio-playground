import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'manage/search-by-song'
})
@Component({
  selector: 'page-search-by-song',
  templateUrl: 'search-by-song.html',
})
export class SearchBySongPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBySongPage');
  }

}
