import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateHotspotPage } from './create-hotspot';

@NgModule({
  declarations: [
    CreateHotspotPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateHotspotPage),
  ]
})
export class CreateHotspotPageModule {}
