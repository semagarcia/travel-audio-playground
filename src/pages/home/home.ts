import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Spotify } from 'ng2-cordova-oauth/provider/spotify';
import { OauthBrowser } from 'ng2-cordova-oauth/platform/browser';
import { OauthCordova } from 'ng2-cordova-oauth/platform/cordova';


@IonicPage({
  name: 'home'
})
@Component({
  templateUrl: 'home.html',
})
export class HomePage {

  res: string;
  authUrl: string;
  authEndpoint = 'https://accounts.spotify.com/authorize';

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private httpSrv: HttpClient,
      private oauthCordova: OauthCordova,
      private oauthBrowser: OauthBrowser,
      //private platformSrv: Platform,
      private iab: InAppBrowser
  ) {
    // %23 = #
    // %2F = /
    // %3A = :
    this.authUrl = `${this.authEndpoint}?client_id=6b3a91e7004d487d87461915b758bc86&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8100&scope=user-read-private%20user-read-email&show_dialog=true&state=54321`;
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter!! ', this.navParams.data);
    console.log('>> ionViewDidEnter: ', document.URL);
  }

  auth() {
    console.log('>> ', this.authUrl);
    let browser = this.iab.create(this.authUrl, '_self');
    console.log('>> ', browser);
    //browser.on('loadstart').subscribe((evt) => console.log('start! ', evt));
    //browser.on('loadstop').subscribe((evt) => console.log('stop!', evt));
    //browser.on('loaderror').subscribe((evt) => console.log('error! ', evt));
    //browser.show();

    //window.location.href = this.authUrl;

    /*this.httpSrv.get(this.authUrl).subscribe(
      (s) => console.log('success: ', s),
      (e) => console.log('error: ', e)
    );*/

    const spotifyProvider: Spotify = new Spotify({
      clientId: '6b3a91e7004d487d87461915b758bc86',
      redirectUri: 'localhost:8100/',
      responseType: 'code',
      appScope: ['user-read-private', 'user-read-email']
    });

    //this.platformSrv.ready().then(() => {
      /*console.log('isAndroid: ', this.platformSrv.is('android'));
      console.log('isCordova: ', this.platformSrv.is('cordova'));
      console.log('isCore: ', this.platformSrv.is('core'));
      console.log('isMobile: ', this.platformSrv.is('mobile'));
      console.log('isMWeb: ', this.platformSrv.is('mobileweb'));
      console.log('isTablet: ', this.platformSrv.is('tablet'));

      this.res = `${this.platformSrv.is('android')} | ${this.platformSrv.is('cordova')} |
        ${this.platformSrv.is('core')} | ${this.platformSrv.is('mobile')} |
        ${this.platformSrv.is('mobileweb')} | ${this.platformSrv.is('tablet')}`;

      this.res = this.res + '#\n#' + this.platformSrv.platforms().join(',');*/

      /*if(this.platformSrv.is('core')) {
        console.log('I am a web: ', this.oauthBrowser);
        this.oauthBrowser.logInVia(spotifyProvider)
          .then(s => console.log('success: ', s))
          .catch(e => console.log('error: ', e));
      } else if(this.platformSrv.is('mobile')) {
        console.log('I am a mobile: ', this.oauthCordova);
        this.oauthCordova.logInVia(spotifyProvider)
          .then(s => console.log('success: ', s))
          .catch(e => console.log('error: ', e));
      } else {
        console.log('ERRORRRRRR');
      }*/
    //});


    /*this.oauth.logInVia(spotifyProvider)
      .then(s => console.log('success: ', s))
      .catch(e => console.log('error: ', e));*/
  }

}
