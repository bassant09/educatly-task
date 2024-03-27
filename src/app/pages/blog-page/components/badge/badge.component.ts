import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
@Input() backGroudColor:string='#f3ebff'
@Input() textColor:string='#6941C6'
@Input() textContent:string='#6941C6'


}
