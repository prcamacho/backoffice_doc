import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GsbStoreDashboardComponent } from './views/gsb-store-dashboard/gsb-store-dashboard.component';
import { GsbStoreStoreComponent } from './views/gsb-store-store/gsb-store-store.component';
import { GsbStoreClientsComponent } from './views/gsb-store-clients/gsb-store-clients.component';
import { GsbStorePurchasesComponent } from './views/gsb-store-purchases/gsb-store-purchases.component';
import { GsbStoreBannersComponent } from './views/gsb-store-banners/gsb-store-banners.component';

const routes: Routes = [
  {
    path: 'store-admin/dashboard',
    component: GsbStoreDashboardComponent,
  },
  {
    path: 'store-admin/store',
    component: GsbStoreStoreComponent,
  },
  {
    path: 'store-admin/clients',
    component: GsbStoreClientsComponent,
  },
  {
    path: 'store-admin/purchases',
    component: GsbStorePurchasesComponent,
  },
  {
    path: 'store-admin/banners',
    component: GsbStoreBannersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreAdminRoutingModule {}
