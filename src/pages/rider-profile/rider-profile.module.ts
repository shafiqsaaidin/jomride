import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderProfilePage } from './rider-profile';

@NgModule({
  declarations: [
    RiderProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(RiderProfilePage),
  ],
})
export class RiderProfilePageModule {}
