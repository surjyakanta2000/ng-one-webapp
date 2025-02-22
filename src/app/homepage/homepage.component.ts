import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import * as AOS from 'aos';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-homepage',
  imports: [MatIconModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

}
