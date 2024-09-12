import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'gsb-store-main-menu',
  templateUrl: './gsb-store-main-menu.component.html',
  styleUrls: ['./gsb-store-main-menu.component.scss'],
})
export class GsbStoreMainMenuComponent implements OnInit {
  openMenu = false;
  openMainMenu = true;
  windowSize!: number;
  activeMenuItem: string = 'dashboard';

  constructor(private render2: Renderer2, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveMenuItem(event.urlAfterRedirects);
      }
    });
  }
  ngOnInit(): void {
    this.screenSize();
  }

  showMenu() {
    this.openMenu = !this.openMenu;
  }
  showMainMenu() {
    this.openMainMenu = !this.openMainMenu;
    console.log(this.openMainMenu);
  }
  screenSize() {
    this.windowSize = screen.width;
    if (this.windowSize < 1100) {
      this.openMainMenu = false;
    }
  }
  setActiveMenuItem(menuItem: string) {
    this.activeMenuItem = menuItem;
  }

  navigateTo(route: string) {
    this.router.navigate([`store-admin/${route}`]);
  }

  updateActiveMenuItem(url: string) {
    if (url.includes('store-admin/dashboard')) {
      this.activeMenuItem = 'dashboard';
    } else if (url.includes('store-admin/store')) {
      this.activeMenuItem = 'store';
    } else if (url.includes('store-admin/product-managment')) {
      this.activeMenuItem = 'product-managment';
    } else if (url.includes('store-admin/clients')) {
      this.activeMenuItem = 'clients';
    } else if (url.includes('store-admin/purchases')) {
      this.activeMenuItem = 'purchases';
    } else if (url.includes('store-admin/banners')) {
      this.activeMenuItem = 'banners';
    }
  }
}
