import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IBlog } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  apiUrl = environment.apiUrl;
  constructor(private _http: HttpClient) {}
  getArticales(pageIndex:number): Observable<IBlog[]> {
    return this._http.get<IBlog[]>(this.apiUrl + 'articles',{
      params:{
        page:pageIndex
      }
    });
  }
}
