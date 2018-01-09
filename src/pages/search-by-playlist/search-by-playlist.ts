import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'manage/search-by-playlist'
})
@Component({
  selector: 'page-search-by-playlist',
  templateUrl: 'search-by-playlist.html',
})
export class SearchByPlaylistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchByPlaylistPage');
  }

}
