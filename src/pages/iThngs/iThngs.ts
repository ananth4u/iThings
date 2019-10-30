import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
 
@IonicPage()  
@Component({
  selector: 'page-iThngs',
  templateUrl: 'iThngs.html'
})
export class iThngsPage {
  data: Observable<any>;
  
  scannedCode = null;
 
  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) { 
    this.data = this.apiProvider.getItems();
    console.log(this.data);
   
  }
 
  openDetails(data) {
    this.navCtrl.push('iThngsDetailsPage', {data: data});
    
  }
}
