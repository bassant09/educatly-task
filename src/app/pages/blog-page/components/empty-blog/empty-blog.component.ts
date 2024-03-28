import { Component, EventEmitter, Output } from '@angular/core';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-empty-blog',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './empty-blog.component.html',
  styleUrl: './empty-blog.component.scss',
})
export class EmptyBlogComponent {
  @Output() tryAgain = new EventEmitter<any>();
  emptyOptions: AnimationOptions = {
    path: '/assets/lottie/empty.json',
  };
}
