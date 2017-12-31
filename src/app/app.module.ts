import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateHotspotPage } from '../pages/create-hotspot/create-hotspot';
import { PlayerPage } from '../pages/player/player';
import { PlayMusicPage } from '../pages/play-music/play-music';
import { PlayVideoPage } from '../pages/play-video/play-video';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateHotspotPage,
    PlayerPage,
    PlayMusicPage,
    PlayVideoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateHotspotPage,
    PlayerPage,
    PlayMusicPage,
    PlayVideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
