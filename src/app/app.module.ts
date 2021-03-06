import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

// AppComponent
import { MyApp } from './app.component';

// Pages
import { LoginPage } from './../pages/login/login';
import { HomePage } from './../pages/home/home';
import { PlayerPage } from './../pages/player/player';
import { PlayMusicPage } from './../pages/play-music/play-music';
import { PlayVideoPage } from './../pages/play-video/play-video';

// Page modules
import { LoginPageModule } from './../pages/login/login.module';
import { ManageQueuePageModule } from './../pages/manage-queue/manage-queue.module';
import { SearchByPlaylistPageModule } from './../pages/search-by-playlist/search-by-playlist.module';
import { SearchBySongPageModule } from './../pages/search-by-song/search-by-song.module';

// Native
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Providers
import { SpotifyWebProvider } from './../providers/spotify-web-api/spotify-web';

// Configuration
import { firebaseConfig } from './../config';

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
    ReactiveFormsModule,
    HttpClientModule,
    LoginPageModule,
    ManageQueuePageModule,
    SearchByPlaylistPageModule,
    SearchBySongPageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
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
