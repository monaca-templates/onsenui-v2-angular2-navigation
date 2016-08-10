import {Component, Inject, forwardRef} from '@angular/core';
import {ONS_DIRECTIVES, OnsNavigator} from 'angular2-onsenui';

@Component({
  selector: 'ons-page',
  directives: [ONS_DIRECTIVES],
  template: require('./page.html'),
  styles: [require('./page.css')]
})
export class Page {
  constructor(@Inject(forwardRef(() => OnsNavigator)) private navi : OnsNavigator) {
  }

  push() {
    this.navi.element.pushPage(Page);
  }
}


