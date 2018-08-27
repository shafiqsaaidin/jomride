import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../../models/user.model';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
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
      buttons: ['OK']
    }).present();
  }

  signUp(user: User) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        // check data
        // console.log(data);
        this.alert('Register complete');
        this.navCtrl.setRoot('SignInPage');

      })
      .catch(error => {
        // check for error
        // console.log(error);
        this.alert(error.message);
      })
  }

}
