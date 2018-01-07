import { Component, OnInit } from '@angular/core';
import { BlogData } from './../../../model/blog.model';
import { BlogDetailComponent } from './../../blog-detail/blog-detail.component';
import { ShareBlogDataService } from './../../../services/share-blog-data.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent {
  blogDetail;
  blogs: BlogData[] = [
    {
    title: 'rajini kanth',
    imagePath: 'http://ste.india.com/sites/default/files/styles/zm_350x200/public/2017/06/29/606130-rajinikanth-newest.jpg?itok=1urYDzXC',
    description: 'body'
  },
  {
    title: 'mahesh',
    imagePath: 'http://www.princemahesh.com/new/wp-content/gallery/athidi/mahesh-babu-athidi36.jpg',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    title: 'rakul',
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1DUe0FpmJZ6YBQTFGurSeda6bfNyYPHmes3gdJM1WW-D4yFTiA',
    description: 'body'
  },
  {
    title: 'Modi ',
    imagePath: 'http://www.newscrab.com/wp-content/uploads/2017/03/MODI-1.jpg',
    description: 'body'
  },
  {
    title: 'surabhi',
    imagePath: 'https://images.desimartini.com/media/uploads/surabhi_tamil.jpg',
    description: 'body'
  }

];



constructor(private _shareBlogData: ShareBlogDataService ) {
    // localStorage.getItem('blog');

  }

  sendBlog(data) {
    this._shareBlogData.setValue(data);
  }
}
