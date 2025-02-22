import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [MatIconModule,RouterLink,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
