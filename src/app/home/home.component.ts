import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  menuItems?: Array<Menu>;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    const menu = this.menuService.getItems();

    this.menuItems = menu;
  }
}
