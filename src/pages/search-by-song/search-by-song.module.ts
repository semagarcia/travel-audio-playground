import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBySongPage } from './search-by-song';

@NgModule({
  declarations: [
    SearchBySongPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchBySongPage),
  ],
})
export class SearchBySongPageModule {}
