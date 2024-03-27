import { Component, OnInit } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { IBlog } from '../../../../core/models/blog.model';
import { CommonModule } from '@angular/common';
import { BlogsService } from '../../../../core/services/blogs.service';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { tap, throwError } from 'rxjs';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule,BlogCardComponent,LottieComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent implements OnInit{
  blogs:IBlog[]=[]
  isError:boolean=false
  isLoading:boolean=false
 pageIndex:number=1;
  errorOptions: AnimationOptions = {
    path: '/assets/lottie/error.json',
  };
  emptyOptions: AnimationOptions = {
    path: '/assets/lottie/empty.json',
  };
  constructor(private _articles:BlogsService){}
  ngOnInit(): void {
   this.getAllArticles(this.pageIndex)
  }
  getAllArticles(pageIndex:number){
    this.isError=false
    this.isLoading=true 
    this._articles.getArticales(this.pageIndex).subscribe(
      {
        next: (articles) => {
         this.isLoading=false
          this.blogs.push(...articles)
          //this.blogs=[]
        },
        error: (error) => {
         this.isLoading=false
           this.isError=true
        }
      }
    )
  }
   increasePageIndex(){
    this.pageIndex++;
    this.getAllArticles(this.pageIndex)
   }
}
