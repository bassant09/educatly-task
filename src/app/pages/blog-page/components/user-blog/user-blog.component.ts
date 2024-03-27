import { Component, Input } from '@angular/core';
import { IBlog } from '../../../../core/models/blog.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-blog.component.html',
  styleUrl: './user-blog.component.scss'
})
export class UserBlogComponent {
@Input() blogUser!:IBlog
}
