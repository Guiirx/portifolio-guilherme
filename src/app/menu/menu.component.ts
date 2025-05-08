import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private menuService: MenuService) {}
}
