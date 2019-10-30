import { Component } from '@angular/core';
import {ModalController, NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  qrData = null;
  qrData1 = null;
  qrData2 = null;
  qrData3 = null;
  qrData4 = null;
  qrData5 = null;
  qrData6 = null;
  createdCode = null;
  scannedCode = null;
 
  constructor(public modalCtrl: ModalController,private barcodeScanner: BarcodeScanner) { }  
  openModal(){
    const myData = this.qrData + ',' + this.qrData1+ ',' + this.qrData2+ ',' + this.qrData3+ ',' +this.qrData4+ ',' + this.qrData5+ ',' + this.qrData6;

    const myModal = this.modalCtrl.create('ModalPage',{data:myData});
    
    myModal.present();
  }
}
