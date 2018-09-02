import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderTabsPage } from './rider-tabs';

@NgModule({
  declarations: [
    RiderTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderTabsPage),
  ],
})
export class RiderTabsPageModule {}
