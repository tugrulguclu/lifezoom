import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersAreaPage } from './users-area';

@NgModule({
  declarations: [
    UsersAreaPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersAreaPage),
  ],
})
export class UsersAreaPageModule {}
