import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { SearchByPlaylistPage } from './../search-by-playlist/search-by-playlist';
import { SearchBySongPage } from './../search-by-song/search-by-song';

@IonicPage({
  name: 'manage-queue'
})
@Component({
  selector: 'page-manage-queue',
  templateUrl: 'manage-queue.html',
})
export class ManageQueuePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {

  }

  ionViewDidEnter() {

  }

  search(searchType: string) {
    if(searchType === 'playlist') {
      this.navCtrl.push(SearchByPlaylistPage, { animate: true });
    } else if(searchType === 'song') {
      this.navCtrl.push(SearchBySongPage, { animate: true });
    }
  }

}
