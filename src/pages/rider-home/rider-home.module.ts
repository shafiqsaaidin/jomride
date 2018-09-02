import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderHomePage } from './rider-home';

@NgModule({
  declarations: [
    RiderHomePage,
  ],
  imports: [
    IonicPageModule.forChild(RiderHomePage),
  ],
})
export class RiderHomePageModule {}
