import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchByPlaylistPage } from './search-by-playlist';

@NgModule({
  declarations: [
    SearchByPlaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchByPlaylistPage),
  ],
})
export class SearchByPlaylistPageModule {}
