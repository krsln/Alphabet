import {Component, ViewEncapsulation} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout-root',
  imports: [
    RouterLink, RouterLinkActive, RouterOutlet
  ],
  templateUrl: './layout-root.html',
  styleUrl: './layout-root.scss',
  encapsulation: ViewEncapsulation.None
})
export class LayoutRoot {
  toggle = false;
}
