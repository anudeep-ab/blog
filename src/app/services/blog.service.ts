import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class BlogService {

  constructor(private http: Http) { }

  registerBlog(blog) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
   // let ep = this.prepEndpoint('banks/register');
    return this.http.post('http://localhost:8080/blog/save', blog, {headers: headers})
      .map(res => res.json())
  }


}
