import { Routes } from '@angular/router';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/blog-page/blog-page.component').then(m => m.BlogPageComponent) }
];
