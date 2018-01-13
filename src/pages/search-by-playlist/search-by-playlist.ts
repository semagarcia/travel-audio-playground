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

  items: any = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchByPlaylistPage');
  }

  expandItem(item){
    this.items.map((listItem) => {
      if(item == listItem){
          listItem.expanded = !listItem.expanded;
      } else {
          listItem.expanded = false;
      }
      return listItem;
    });
  }

  addSongs() {
    console.log('Adding songs...');
    this.navCtrl.pop();
  }

  goBack() {
    this.navCtrl.pop();
  }

}
