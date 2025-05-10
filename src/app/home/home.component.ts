import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { MenuComponent } from '../menu/menu.component';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private profileService: ProfileService) { }

  menuItems?: Array<Menu>;

  ngOnInit() {
    const menu = this.menuService.getItems();

    this.menuItems = menu;
  }

}
