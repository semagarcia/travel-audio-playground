import { Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IonicPage, NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import * as SpotifyWebApi from 'spotify-web-api-js';

import { HomePage } from './../home/home';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  authorizationEndpoint = 'https://accounts.spotify.com/authorize';
  accessTokenEndpoint = 'https://accounts.spotify.com/api/token';
  clientSecret = '5750e8ddc39d436c850f52044de4ed23';

  clientId = 'client_id=6b3a91e7004d487d87461915b758bc86';
  responseType = 'response_type=code';
  redirectUri = 'redirect_uri=http://localhost:8100';
  scope = 'scope=user-read-private%20user-read-email%20playlist-read-private';
  state = 'state=asuiohfq2i3fwg';
  showDialog = 'show_dialog=true';

  // More scopes: https://developer.spotify.com/web-api/using-scopes/

  constructor(private iab: InAppBrowser, private httpSrv: HttpClient, private navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter() {
    const searchUrl = window.location.search || '';
    const queryParams = new URLSearchParams((searchUrl[0] === '?') ? searchUrl.slice(1) : searchUrl);
    if(queryParams.get('code') && queryParams.get('state')) {
      console.log('Code: ', queryParams.get('code'));
      console.log('Document: ', window);

      this.httpSrv.post('http://localhost:3000/login/token', {
        'grant_type': 'authorization_code',
        'code': queryParams.get('code'),
        'redirect_uri': 'http://localhost:8100/'
      }).subscribe(
        (a) => {
          console.log('auth OK', a);

          // Una vez obtenido el access token
          const SpotifyApi = new SpotifyWebApi();
          console.log('Spotify: ', SpotifyWebApi);
          console.log('Access token: ', SpotifyApi.getAccessToken());
          SpotifyApi.setAccessToken(a['access_token']);
          SpotifyApi.getMe()
            .then(me => console.log('Me: ', me))
            .catch(e => console.log('Error: ', e));
          SpotifyApi.getUserPlaylists()
            .then(p => console.log('Playlists: ', p))
            .catch(e => console.log('Error: ', e));
        },
        (e) => {
          console.log('auth error: ', e);
        }
      );

      //this.navCtrl.setRoot(HomePage);
      /*let base64 = 'NmIzYTkxZTcwMDRkNDg3ZDg3NDYxOTE1Yjc1OGJjODY6NTc1MGU4ZGRjMzlkNDM2Yzg1MGY1MjA0NGRlNGVkMjM=';
      let headers = new HttpHeaders()
        .set('Authorization', `Basic ${base64}`)
        .set('Access-Control-Allow-Origin', 'http://localhost:8100')
        //.set('Accept', 'application/json');
      this.httpSrv.post(this.accessTokenEndpoint, {
        'grant_type': 'authorization_code',
        'code': queryParams.get('code'),
        'redirect_uri': 'http://localhost:8100/'
      }, { headers }).subscribe(
        (a) => { console.log('auth OK', a); },
        (e) => { console.log('auth error: ', e); }
      );*/
    } else if(queryParams.get('error') && queryParams.get('state')) {
      console.log('Login error');
    } else {
      console.log('Login access... starting auth flow');
    }

    // http://localhost:8100/?code=AQD4Q-Rt9JzFGrccAM6aRWNjEloQ58FPqp69IOW3POv6N4srU2oFqZCHeThrCb0lHYv2_-StW9olFs7tpbYBbC_nVlkyNmLVE8znJ1vBjfcQHO5ov8CQrSAdrQzZNQX55iPCOyIEfJQ-7spTS4yMNUXjcSlo48dGtwisT-Cej_TbJ3Uj31EXWvJ_QEFJrepyO4mDZNetbMgPom2G2xFVBGHrXxoNUzu1UFdiCFf0bw&state=asuiohfq2i3fwg
  }

  login() {
    const authUrl = this.authorizationEndpoint + '?' + this.clientId
                    + '&' + this.responseType
                    //+ '&' + 'response_type=token'
                    + '&' + this.redirectUri
                    + '&' + this.scope
                    + '&' + this.state
                    + '&' + this.showDialog;
    let browser = this.iab.create(authUrl, '_self');
  }

  login2() {
    /*this.httpSrv.get('http://localhost:3000/login/auth').subscribe(
      (a) => { console.log('auth OK', a); },
      (e) => { console.log('auth error: ', e); }
    );*/
  }

  reset() {
    this.navCtrl.setRoot(LoginPage);
  }

}
