import { Component } from '@angular/core';
import { IonicPage,  NavParams,ViewController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  createdCode = null;
  urll=null;
  constructor(private navParams: NavParams,private view:ViewController,private barcodeScanner: BarcodeScanner,private socialSharing: SocialSharing) {
  }

  public buttonClicked: boolean = false; //Whatever you want to initialise it as

  public onButtonClick() {

      this.buttonClicked = !this.buttonClicked;
  }

  ionViewWillLoad() {
    
  const data=this.navParams.get('data');
  this.createdCode = data;
  console.log(data);
  }
  share(){
   
    this.socialSharing.share(this.createdCode,null,null,null).then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });
  }
  closeModal(){
    this.view.dismiss();
  }

  

}
