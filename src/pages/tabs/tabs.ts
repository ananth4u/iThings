import { Component } from '@angular/core';

import { iThngsPage } from '../iThngs/iThngs';
import { ProfilePage } from '../profile/profile';
import { AddPage } from '../add/add';
import { SearchPage } from '../search/search';
import { NotifyPage } from '../notify/notify';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = iThngsPage;
  tab2Root = SearchPage;
  tab3Root = AddPage;
  tab4Root = NotifyPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
