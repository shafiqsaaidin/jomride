import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


// import { User } from '../../models/user.model';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db: AngularFireDatabase) {
  }


}
