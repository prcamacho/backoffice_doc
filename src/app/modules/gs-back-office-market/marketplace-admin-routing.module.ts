import { GsbMarketMarketplaceComponent } from './views/gsb-market-marketplace/gsb-market-marketplace.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GsbMarketDashboardComponent } from './views/gsb-market-dashboard/gsb-market-dashboard.component';
import { GsbMarketClientsComponent } from './views/gsb-market-clients/gsb-market-clients.component';
import { GsbMarketPurchasesComponent } from './views/gsb-market-purchases/gsb-market-purchases.component';
import { GsbMarketBannersComponent } from './views/gsb-market-banners/gsb-market-banners.component';
import { GsbMarketStoresComponent } from './views/gsb-market-stores/gsb-market-stores.component';
import { GsbMarketCategoriesComponent } from './views/gsb-market-categories/gsb-market-categories.component';
import { GsbMarketStatsComponent } from './views/gsb-market-stats/gsb-market-stats.component';
import { GsbMarketCategoriesFormComponent } from './components/categories-view-components/gsb-market-categories-form/gsb-market-categories-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/marketplace-admin/marketplace',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: GsbMarketDashboardComponent,
  },
  {
    path: 'marketplace',
    component: GsbMarketMarketplaceComponent,
  },
  {
    path: 'stores',
    component: GsbMarketStoresComponent,
  },
  {
    path: 'categories',
    component: GsbMarketCategoriesComponent,
  },
  {
    path: 'categories/new',
    component: GsbMarketCategoriesFormComponent,
  },
  {
    path: 'clients',
    component: GsbMarketClientsComponent,
  },
  {
    path: 'purchases',
    component: GsbMarketPurchasesComponent,
  },
  {
    path: 'stats',
    component: GsbMarketStatsComponent,
  },
  {
    path: 'banners',
    component: GsbMarketBannersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketplaceAdminRoutingModule {}
