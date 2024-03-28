import { Component } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { SearchBoxComponent } from '../search-box/search-box.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BadgeComponent, SearchBoxComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
