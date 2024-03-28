import { Component } from '@angular/core';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-error-blog',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './error-blog.component.html',
  styleUrl: './error-blog.component.scss'
})
export class ErrorBlogComponent {
  errorOptions: AnimationOptions = {
    path: '/assets/lottie/error.json',
  };
}
