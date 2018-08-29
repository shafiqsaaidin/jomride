import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

import { Profile } from '../../models/profile';

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  profileData: Observable<Profile>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase) {
      this.afAuth.authState.take(1).subscribe(data => {
        if (data && data.email && data.uid) {
          this.profileData = this.db.object(`profile/${data.uid}`).valueChanges();
        }
      })
  }




}
