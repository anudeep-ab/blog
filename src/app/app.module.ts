import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BlogService } from './services/blog.service';
import { Http } from '@angular/http';
import {HttpModule} from '@angular/http';
import { ShareBlogDataService } from './services/share-blog-data.service';


import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogItemComponent } from './blog/blog-list/blog-item/blog-item.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewBlogComponent } from './blog/new-blog/new-blog.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewBlogComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogItemComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    NewBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BlogService, ShareBlogDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
