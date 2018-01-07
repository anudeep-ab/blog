import { Component, OnInit } from '@angular/core';
import { BlogData } from './../../model/blog.model';
import { ShareBlogDataService } from './../../services/share-blog-data.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog;
  constructor(private _shareBlogData: ShareBlogDataService) {
    this.blog = {};
    this._shareBlogData.myValue$.subscribe(val => this.blog = val);
}

  ngOnInit() {
  }
  onEdit() {

  }
  onDelete() {

  }
  showBlog(data) {
    this.blog = data;
    console.log(data);
  }
}
