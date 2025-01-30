import {  Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption {
  label: string;
  subLabel: string;
  router: string;
  icon: string;

}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {
  menuOptions: MenuOption[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs populares',
      router: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line'
    },

    {
      label: 'Buscardor',
      subLabel: 'Buscar gifs',
      router: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass'
    }
  ];

}
