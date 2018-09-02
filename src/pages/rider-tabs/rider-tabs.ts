import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rider-tabs',
  templateUrl: 'rider-tabs.html',
})
export class RiderTabsPage {
  tab1 = "RiderHomePage";
  tab2 = "RiderRecordPage";
  tab3 = "RiderProfilePage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
