import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPage } from './modal';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { SocialSharing } from '@ionic-native/social-sharing';
@NgModule({
  declarations: [
    ModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPage),
    NgxQRCodeModule
  ],
  providers:[SocialSharing]
})
export class ModalPageModule {}
