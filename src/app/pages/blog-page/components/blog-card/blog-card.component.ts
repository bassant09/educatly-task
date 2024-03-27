import { Component, Input } from '@angular/core';
import { IBlog } from '../../../../core/models/blog.model';
import { UserBlogComponent } from '../user-blog/user-blog.component';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [UserBlogComponent],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
@Input() blog!:IBlog
placeholderImage = 'assets/images/placeHolder.png'; 
mainImageLoaded = false;

onImageLoad(event: Event) {
  this.mainImageLoaded = true;
  const imgElement = event.target as HTMLImageElement;
  imgElement.src = this.blog.social_image;
}
}
