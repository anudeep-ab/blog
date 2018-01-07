import { Component, OnInit } from '@angular/core';
import { BlogData } from './../../model/blog.model';
import {FormGroup, FormControl} from '@angular/forms';
import { BlogService } from './../../services/blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {
  blogs: BlogData;
  blogForm;
  constructor(private _blogService: BlogService, private router: Router) { }
  ngOnInit() {
    this.blogForm = new FormGroup({
      title: new FormControl(''),
      imagePath: new FormControl(''),
      description: new FormControl('')
      })
  }
  onSubmit(user) {
    console.log(user);
    console.log(user.value.title);
    this.blogs = user.value;
    this._blogService.registerBlog(this.blogs).subscribe(data => {
      if (data === 'success')  {
        localStorage.setItem('blog', data);
       // this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/home']);

      } else {
       // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/page']);
      }
    });
  }

}
