import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/gs-back-office-autentication/guards/role.guard';
import { GsbStoreLayoutComponent } from './modules/gs-back-office-store/views/gsb-store-layout/gsb-store-layout.component';
import { GsbMarketLayoutMarketComponent } from './modules/gs-back-office-market/views/gsb-market-layout/gsb-market-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'marketplace-admin',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadChildren: () =>
      import(
        './modules/gs-back-office-autentication/autentication.module'
      ).then((m) => m.AutenticationModule),
  },
  {
    path: 'store-admin',
    component: GsbStoreLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/gs-back-office-store/store-admin.module').then(
            (m) => m.StoreAdminModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./modules/gs-back-office-store/store-admin.module').then(
            (m) => m.StoreAdminModule
          ),
      },
      {
        path: 'store',
        loadChildren: () =>
          import('./modules/gs-back-office-store/store-admin.module').then(
            (m) => m.StoreAdminModule
          ),
      },
    ],
  },
  {
    path: 'marketplace-admin',
    component: GsbMarketLayoutMarketComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/gs-back-office-market/marketplace-admin.module').then(
        (m) => m.MarketplaceAdminModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
