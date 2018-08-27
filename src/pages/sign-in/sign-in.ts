import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../../models/user.model';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  user: User = {
    email: '',
    password: '',
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private alertCtrl: AlertController) {
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['ok']
    }).present();
  }

  signIn(user: User) {
    this.afAuth.auth.onAuthStateChanged(x => {
      if (x) {
        this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(data => {
          this.navCtrl.setRoot('UserHomePage');
        })
        .catch(error => {
          this.alert(error.message);
        })
      } else {
        console.log('user not logged in to system');
      }
    });
  }
}
