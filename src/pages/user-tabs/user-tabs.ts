import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { UserHomePage } from '../user-home/user-home';
// import { UserProfilePage } from '../user-profile/user-profile';
 
@IonicPage()
@Component({
  selector: 'page-user-tabs',
  templateUrl: 'user-tabs.html',
})
export class UserTabsPage {
  tab1 = "UserHomePage";
  tab2 = "UserProfilePage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
