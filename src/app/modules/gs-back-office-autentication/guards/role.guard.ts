import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userRole = this.getUserRole();
    console.log('User role:', userRole);

    if (!userRole) {
      this.router.navigate(['/login']);
      return false;
    }

    if (userRole === 'store-admin' && state.url.startsWith('/store-admin')) {
      return true;
    } else if (
      userRole === 'marketplace-admin' &&
      state.url.startsWith('/marketplace-admin')
    ) {
      return true;
    } else {
      this.redirectToRoleBasedRoute(userRole);
      return false;
    }
  }

  getUserRole(): string | null {
    return 'marketplace-admin';
  }

  private redirectToRoleBasedRoute(userRole: string): void {
    if (userRole === 'store-admin') {
      this.router.navigate(['/store-admin/dashboard']);
    } else if (userRole === 'marketplace-admin') {
      this.router.navigate(['/marketplace-admin/dashboard']);
    } else {
      this.router.navigate(['/access-denied']);
    }
  }
}
