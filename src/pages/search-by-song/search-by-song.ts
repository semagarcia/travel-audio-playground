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

  searchCriteria: string;
  itemType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBySongPage');
  }

  onInput(event) {
    console.log('searchCriteria: ', this.searchCriteria);
    console.log('itemType: ', this.itemType);
  }

  onCancel(event) {
    console.log('onCancel event: ', event);
  }

}
