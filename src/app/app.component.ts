import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ManageQueuePage } from '../pages/manage-queue/manage-queue';
import { PlayerPage } from '../pages/player/player';
import { PlayMusicPage } from '../pages/play-music/play-music';
import { PlayVideoPage } from '../pages/play-video/play-video';

@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
  ) {
    this.initializeApp();
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Manage queue', component: ManageQueuePage },
      { title: 'Player', component: PlayerPage },
      { title: 'Play music', component: PlayMusicPage },
      { title: 'Play video', component: PlayVideoPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
