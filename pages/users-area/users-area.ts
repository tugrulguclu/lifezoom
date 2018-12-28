import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers';
import { FalTurleriProvider } from '../../providers';
import { Observable } from 'rxjs/Observable';
import { MainPage } from '../';

/**
 * Generated class for the UsersAreaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users-area',
  templateUrl: 'users-area.html',
})
export class UsersAreaPage {


username: string = 'My PlaceHolder';
email: string = 'My PlaceHolder';
credit: number = 0; 
 requests: any=[];
 data: Object;
public items:any;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public user: User,
  public falTurleri: FalTurleriProvider) {
  }

  ionViewDidLoad() {

	
	  this.username = this.user._user.username;
  	  this.email = this.user._user.email;
	  this.credit = this.user._user.credit; 

    console.log('ionViewDidLoad UsersAreaPage');
	this.GetFalTurleri();
this.loadData();
  }
  
loadData()
{

}

    // Attempt to login in through our User service
  GetFalTurleri() {
    this.falTurleri.GetFalTurleri().subscribe((resp) => {
      
	  console.log(this.falTurleri._falTurleri);

this.items = this.falTurleri._falTurleri.falTuru;
console.log(this.items );

	 
	  //this.navCtrl.push(UsersAreaPage);
	  
    }, (err) => {
      this.navCtrl.push(MainPage);
      
    });
  }

  itemClick(itemid:number)
  {
    alert("Bu işlem için hesabınızdan " + itemid + " kredi alınacaktır ");
  }
}
