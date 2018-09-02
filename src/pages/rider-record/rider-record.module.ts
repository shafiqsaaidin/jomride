import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderRecordPage } from './rider-record';

@NgModule({
  declarations: [
    RiderRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderRecordPage),
  ],
})
export class RiderRecordPageModule {}
