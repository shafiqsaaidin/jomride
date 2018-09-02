import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { BookingService } from '../../services/booking/booking.service';
import { ToastService } from '../../services/toast/toast.service';

import { Booking } from '../../models/booking';

@IonicPage()
@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html',
})
export class UserHomePage {
  booking: Booking = {
    from: '',
    destination: '',
    price: '',
    type: '',
    userId: '',
    date: '',
    status: ''
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private bookSrv: BookingService,
    private afAuth: AngularFireAuth,
    private toast: ToastService) {

      this.afAuth.auth.onAuthStateChanged(user => {
        if (user) {
          this.booking = {
            userId: this.afAuth.auth.currentUser.uid,
            price: 'RM5',
            date: Date.now().toString(),
            status: 'pending'
          }
        } else {
          this.navCtrl.setRoot('SignInPage');
        }
      });
  }

  addBooking(booking: Booking) {
    this.bookSrv.addBooking(booking);
  }
}
