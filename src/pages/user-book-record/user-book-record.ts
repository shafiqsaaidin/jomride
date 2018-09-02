import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-user-book-record',
  templateUrl: 'user-book-record.html',
})
export class UserBookRecordPage {
  record$: Observable<any>;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afDb: AngularFireDatabase,
    private afAuth: AngularFireAuth) {
      this.afAuth.auth.onAuthStateChanged(user => {
        if (user) {
          this.record$ = this.afDb.list('/booking', ref => ref.orderByChild('userId').equalTo(this.afAuth.auth.currentUser.uid)).snapshotChanges();
        } else {
          this.navCtrl.setRoot('SignInPage');
        }
      });
  }


}
