import { Injectable } from "@angular/core";
import { NavController } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";

import { User } from "../../models/user";
import { Profile } from "../../models/profile";


@Injectable()
export class UserService {
  
  userRef = this.db.list<User>('user');
  profile = {} as Profile;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    public navCtrl: NavController) {

    }

  getUser() {
    return this.userRef;
  }

  createUserProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.db.object(`profile/${auth.uid}`).set(this.profile)
        .then(() => this.navCtrl.setRoot('UserProfilePage'));
    })
  }

  updateUserProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.db.object(`profile/${auth.uid}`).update(this.profile)
        .then(() => this.navCtrl.setRoot('UserProfilePage'));
    })
  }
}