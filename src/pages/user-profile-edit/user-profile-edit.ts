import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from "../../models/user.model";
import { UserService } from '../../services/user/user.service';
import { ToastService } from '../../services/toast/toast.service';


@IonicPage()
@Component({
  selector: 'page-user-profile-edit',
  templateUrl: 'user-profile-edit.html',
})
export class UserProfileEditPage {
  user: User = {
    name: '',
    email: '',
    password: '',
    phone: undefined,
    gander: '',
    id: '',
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private usrSrv: UserService,
    private toast: ToastService) {
  }

  addUser(user: User) {
    this.usrSrv.addUser(user)
      .then(ref => {
        this.toast.show(`${user.name} added!`);
      })
  }
}
