import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';

@Component({
  selector: 'gsb-market-layout',
  templateUrl: './gsb-market-layout.component.html',
  styleUrls: ['./gsb-market-layout.component.scss'],
})
export class GsbMarketLayoutMarketComponent {
  isMenuOpen = false;
  isSmallScreen = window.innerWidth < 1100;

  constructor(private router: Router) {}

  toggleMenu(): void {
    if (this.isSmallScreen) {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
  closeMenuOnNavigation(): void {
    if (this.isSmallScreen && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeMenuOnNavigation();
      }
    });
    window.addEventListener('resize', () => {
      this.isSmallScreen = window.innerWidth < 1100;
    });
  }
}
