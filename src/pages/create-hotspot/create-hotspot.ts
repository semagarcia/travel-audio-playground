import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';

@IonicPage()
@Component({
  selector: 'page-create-hotspot',
  templateUrl: 'create-hotspot.html',
})
export class CreateHotspotPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private hotspot: Hotspot) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateHotspotPage');
  }

  createHotSpot() {
    console.log('Tapping...');
    this.hotspot.scanWifi().then(w => console.log('Wifis: ', w));
    this.hotspot.createHotspot('IonicAP', 'WPA_PSK', '1234567890')
      .then(() => {
        console.log('hotspot created');
      })
      .catch(e => console.log('Error creating hotspot'));
  }

}
