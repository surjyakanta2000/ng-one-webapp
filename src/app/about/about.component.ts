import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

}
