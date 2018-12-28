import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';


/*
  Generated class for the FalTurleriProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FalTurleriProvider {
 _falTurleri: any;
  constructor(public api: Api) { }

/**
   * Send a GET request to our fal turleri endpoint
   */
  GetFalTurleri() {
	  console.log("GetFalTurleri IN");
	  
    let seq = this.api.get('GetFalTurleri').share();

		
		  

	
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
      console.log('success');

	  this._falTurleri = res;
	  console.log(this._falTurleri);
      } else {
		     console.log('GetFalTurleri ERR');
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
}
