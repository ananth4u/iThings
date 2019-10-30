import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { SocialSharing } from '@ionic-native/social-sharing';

import { AddPage } from '../pages/add/add';
import { ProfilePage } from '../pages/profile/profile';
import { iThngsPage } from '../pages/iThngs/iThngs';
import { NotifyPage } from '../pages/notify/notify';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalPageModule } from '../pages/modal/modal.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';
import { iThngsDetailsPageModule } from '../pages/iThngs-details/iThngs-details.module';


@NgModule({
  declarations: [
    MyApp,
    AddPage,
    ProfilePage,
    iThngsPage,
    NotifyPage,
    SearchPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ModalPageModule,
    iThngsDetailsPageModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddPage,
    ProfilePage,
    iThngsPage,
    NotifyPage,
    SearchPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    ApiProvider
  ]
})
export class AppModule {}
