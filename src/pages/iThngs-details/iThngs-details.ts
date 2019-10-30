import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-iThngs-details',
  templateUrl: 'iThngs-details.html',
})
export class iThngsDetailsPage {
  data: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('data');
  }
}