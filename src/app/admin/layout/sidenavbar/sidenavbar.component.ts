import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-sidenavbar',
  imports: [RouterLink,RouterLinkActive,MatIconModule],
  standalone: true,
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.scss'
})
export class SidenavbarComponent {

}
