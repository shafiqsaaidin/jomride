import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";

// services
import { ToastService } from '../toast/toast.service';

import { Booking } from '../../models/booking';

@Injectable()
export class BookingService {
  
  bookingRef = this.db.list<Booking>('booking');

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private toast: ToastService) {
  
    }

  addBooking(booking: Booking) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.bookingRef.push(booking).then(ref => {
          this.toast.show('Booking success');
        });
      } else {
        this.toast.show('user not login');
      }
    });
  }
}