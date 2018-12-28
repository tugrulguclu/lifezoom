import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
import { UsersAreaPage } from '../';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, email: string, password: string ,dob: string,pinCode:string,credit:string,realName:string
  ,realSurName:string,gender:string,regDate:string,LastSignedIn:string,LastSignInLocation:string} = {
	 username: 'tugrul45',
        email: 'tugrul45.guclu@gmail.com',
        password: 'tugrul',
        dob: '1979-10-20T00:00:00',
        pinCode: '0',
        credit: '0',
        realName: null,
        realSurName: null,
        gender: null,
        regDate: null,
        LastSignedIn: null,
        LastSignInLocation: null
	
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(UsersAreaPage);
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
