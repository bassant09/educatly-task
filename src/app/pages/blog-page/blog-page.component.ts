import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BlogsComponent } from './components/blogs/blogs.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [HeaderComponent, BlogsComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss',
})
export class BlogPageComponent {}
