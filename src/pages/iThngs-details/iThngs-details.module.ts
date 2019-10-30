import { NgModule } from '@angular/core';
import { iThngsDetailsPage } from './iThngs-details';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        iThngsDetailsPage
    ],
    imports: [
      IonicPageModule.forChild(iThngsDetailsPage)
    ],
    entryComponents: [
        iThngsDetailsPage
    ]
  })
  export class iThngsDetailsPageModule {}
  