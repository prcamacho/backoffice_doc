import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'gsb-market-main-menu',
  templateUrl: './gsb-market-main-menu.component.html',
  styleUrls: ['./gsb-market-main-menu.component.scss'],
})
export class GsbMarketMainMenuComponent implements OnInit, OnDestroy {
  @Input() isMenuOpen: boolean = true;
  @Output() menuClosed = new EventEmitter<void>();
  windowSize!: number;
  activeMenuItem: string = 'dashboard';
  resizeListener!: () => void;

  constructor(
    private translateService: TranslateService,
    private render2: Renderer2,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveMenuItem(event.urlAfterRedirects);
        if (this.windowSize < 1100) {
          this.closeMenu();
        }
      }
    });
  }

  ngOnInit(): void {
    this.screenSize();
    this.resizeListener = this.render2.listen('window', 'resize', () => {
      this.screenSize();
    });
  }

  ngOnDestroy(): void {
    if (this.resizeListener) {
      this.resizeListener();
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.menuClosed.emit();
  }

  screenSize() {
    const newSize = window.innerWidth;
    if (newSize !== this.windowSize) {
      this.windowSize = newSize;
      this.isMenuOpen = newSize >= 1100;
    }
  }

  setActiveMenuItem(menuItem: string) {
    this.activeMenuItem = menuItem;
  }

  navigateTo(route: string) {
    this.router.navigate([`marketplace-admin/${route}`]);
    if (this.windowSize < 1100) {
      this.closeMenu();
    }
  }

  updateActiveMenuItem(url: string) {
    if (url.includes('marketplace-admin/dashboard')) {
      this.activeMenuItem = 'dashboard';
    } else if (url.includes('marketplace-admin/stores')) {
      this.activeMenuItem = 'stores';
    } else if (url.includes('marketplace-admin/marketplace')) {
      this.activeMenuItem = 'marketplace';
    } else if (url.includes('marketplace-admin/product-managment')) {
      this.activeMenuItem = 'product-managment';
    } else if (url.includes('marketplace-admin/clients')) {
      this.activeMenuItem = 'clients';
    } else if (url.includes('marketplace-admin/purchases')) {
      this.activeMenuItem = 'purchases';
    } else if (url.includes('marketplace-admin/stats')) {
      this.activeMenuItem = 'stats';
    } else if (url.includes('marketplace-admin/banners')) {
      this.activeMenuItem = 'banners';
    }
  }
}
