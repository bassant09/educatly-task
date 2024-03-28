import { Component, Input } from '@angular/core';
import { IBlog } from '../../../../core/models/blog.model';
import { UserBlogComponent } from '../user-blog/user-blog.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [UserBlogComponent, RouterModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  @Input() blog!: IBlog;
  placeholderImage = 'assets/images/placeHolder.png';
  mainImageLoaded = false;
  navigateToLink() {
    window.open(this.blog.url, '_blank');
  }
}
