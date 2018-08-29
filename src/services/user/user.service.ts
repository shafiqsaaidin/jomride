import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { take } from 'rxjs/operators';

import { User } from "../../models/user";
import { Profile } from "../../models/profile";
import { NavController } from "ionic-angular";


@Injectable()
export class UserService {
  
  userRef = this.db.list<User>('user');
  profile = {} as Profile;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController) {

    }

  getUser() {
    return this.userRef;
  }

}