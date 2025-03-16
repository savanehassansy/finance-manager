import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule,Router, RouterLink } from '@angular/router';
import { SidenavbarComponent } from "./layout/sidenavbar/sidenavbar.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";

@Component({
  selector: 'app-admin',
  imports: [MatButtonModule, MatSidenavModule, RouterModule, SidenavbarComponent, NavbarComponent,],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
