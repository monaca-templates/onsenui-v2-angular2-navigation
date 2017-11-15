import {Component} from '@angular/core';
import {OnsNavigator} from 'ngx-onsenui';

@Component({
  selector: 'ons-page[page]',
  template: require('./page.html'),
  styles: [require('./page.css')]
})
export class Page {
  constructor(private navi : OnsNavigator) {
  }

  push() {
    this.navi.element.pushPage(Page);
  }
}


