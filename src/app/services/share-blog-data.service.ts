import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShareBlogDataService {

private blogValue = new Subject<String>();
public myValue$ = this.blogValue.asObservable();
  constructor() { }
setValue(value) {
  this.blogValue.next(value);
}
}
