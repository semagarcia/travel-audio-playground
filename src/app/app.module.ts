import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// AppComponent
import { MyApp } from './app.component';

// Pages
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { PlayerPage } from '../pages/player/player';
import { PlayMusicPage } from '../pages/play-music/play-music';
import { PlayVideoPage } from '../pages/play-video/play-video';

import { LoginPageModule } from '../pages/login/login.module';

// Native
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Providers
import { SpotifyWebProvider } from '../providers/spotify-web-api/spotify-web';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlayerPage,
    PlayMusicPage,
    PlayVideoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlayerPage,
    PlayMusicPage,
    PlayVideoPage
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    SpotifyWebProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
