import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

// import { UserHomePage } from '../user-home/user-home';
// import { UserProfilePage } from '../user-profile/user-profile';
 
@IonicPage()
@Component({
  selector: 'page-user-tabs',
  templateUrl: 'user-tabs.html',
})
export class UserTabsPage {
  tab1 = "UserHomePage";
  tab2 = "UserBookRecordPage";
  tab3 = "UserProfilePage";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth) {
      this.afAuth.auth.onAuthStateChanged(user => {
        if (user) {
          // do nothing
        } else {
          this.navCtrl.setRoot('SignInPage');
        }
      });
  }

}
