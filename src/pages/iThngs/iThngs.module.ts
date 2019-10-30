import { NgModule } from '@angular/core';
import { iThngsPage } from './iThngs';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        iThngsPage
    ],
    imports: [
      IonicPageModule.forChild(iThngsPage)
    ],
    entryComponents: [
        iThngsPage
    ]
  })
  export class iThngsPageModule {}
  