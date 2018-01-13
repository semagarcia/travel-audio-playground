import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from './../../components/components.module';
import { SearchByPlaylistPage } from './search-by-playlist';

@NgModule({
  declarations: [
    SearchByPlaylistPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SearchByPlaylistPage),
  ],
})
export class SearchByPlaylistPageModule {}
