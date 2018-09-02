import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserBookRecordPage } from './user-book-record';

@NgModule({
  declarations: [
    UserBookRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(UserBookRecordPage),
  ],
})
export class UserBookRecordPageModule {}
