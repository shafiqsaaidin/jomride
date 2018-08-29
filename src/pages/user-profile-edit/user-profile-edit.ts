import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ToastService } from '../../services/toast/toast.service';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-user-profile-edit',
  templateUrl: 'user-profile-edit.html',
})
export class UserProfileEditPage {
  profile = {} as Profile;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private toast: ToastService) {
  }

  createProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.db.object(`profile/${auth.uid}`).set(this.profile)
        .then(() => this.navCtrl.setRoot('UserProfilePage'));
    })
  }
}
