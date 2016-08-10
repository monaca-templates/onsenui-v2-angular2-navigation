import {Component, ViewChild} from '@angular/core';
import {ONS_DIRECTIVES, OnsSplitterContent, OnsSplitterSide} from 'angular2-onsenui';
import {Page} from './page';

@Component({
  selector: 'app',
  directives: [ONS_DIRECTIVES],
  template: require('./app.html'),
  styles: [require('./app.css')]
})
export class MyApp {
  page = Page;
}
