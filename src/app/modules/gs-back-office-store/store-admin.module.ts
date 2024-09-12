import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreAdminRoutingModule } from './store-admin-routing.module';
import { GsbStoreDashboardComponent } from './views/gsb-store-dashboard/gsb-store-dashboard.component';
import { GsbStoreHeaderComponent } from './components/gsb-store-header/gsb-store-header.component';

import { GsbStoreMainMenuComponent } from './components/gsb-store-main-menu/gsb-store-main-menu.component';


import { NgxPaginationModule } from 'ngx-pagination';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GsbStoreStoreComponent } from './views/gsb-store-store/gsb-store-store.component';

import { GsbStoreProductManagmentComponent } from './views/gsb-store-product-managment/gsb-store-product-managment.component';
import { GsbStoreClientsComponent } from './views/gsb-store-clients/gsb-store-clients.component';
import { GsbStorePurchasesComponent } from './views/gsb-store-purchases/gsb-store-purchases.component';
import { GsbStoreBannersComponent } from './views/gsb-store-banners/gsb-store-banners.component';
import { RouterModule } from '@angular/router';
import { GsbStoreLayoutComponent } from './views/gsb-store-layout/gsb-store-layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { GsbStoreBannerComponent } from './components/dashboard-view-components/gsb-store-banner/gsb-store-banner.component';
import { GsbStoreBannerActivitySummaryComponent } from './components/dashboard-view-components/gsb-store-banner-activity-summary/gsb-store-banner-activity-summary.component';
import { GsbStoreMostViewedProductsComponent } from './components/dashboard-view-components/gsb-store-most-viewed-products/gsb-store-most-viewed-products.component';
import { GsbStoreCategoriesMostViewedComponent } from './components/dashboard-view-components/gsb-store-categories-most-viewed/gsb-store-categories-most-viewed.component';
import { GsbStoreCardsCategoriesMostViewedComponent } from './components/dashboard-view-components/gsb-store-cards-categories-most-viewed/gsb-store-cards-categories-most-viewed.component';

@NgModule({
  declarations: [
    GsbStoreLayoutComponent,
    GsbStoreDashboardComponent,
    GsbStoreHeaderComponent,
    GsbStoreBannerComponent,
    GsbStoreMainMenuComponent,
    GsbStoreBannerActivitySummaryComponent,
    GsbStoreMostViewedProductsComponent,
    GsbStoreCategoriesMostViewedComponent,
    GsbStoreStoreComponent,
    GsbStoreCardsCategoriesMostViewedComponent,
    GsbStoreProductManagmentComponent,
    GsbStoreClientsComponent,
    GsbStorePurchasesComponent,
    GsbStoreBannersComponent,
  ],
  imports: [
    CommonModule,
    StoreAdminRoutingModule,
    NgxPaginationModule,
    NgxChartsModule,
    RouterModule,
    TranslateModule,
  ],
  exports: [],
})
export class StoreAdminModule {}
