import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageQueuePage } from './manage-queue';

@NgModule({
  declarations: [
    ManageQueuePage,
  ],
  imports: [
    IonicPageModule.forChild(ManageQueuePage),
  ],
})
export class ManageQueuePageModule {}
