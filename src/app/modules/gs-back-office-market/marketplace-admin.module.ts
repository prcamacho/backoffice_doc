import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceAdminRoutingModule } from './marketplace-admin-routing.module';
import { GsbMarketDashboardComponent } from './views/gsb-market-dashboard/gsb-market-dashboard.component';
import { GsbMarketMarketplaceComponent } from './views/gsb-market-marketplace/gsb-market-marketplace.component';
import { GsbMarketCategoriesComponent } from './views/gsb-market-categories/gsb-market-categories.component';
import { GsbMarketClientsComponent } from './views/gsb-market-clients/gsb-market-clients.component';
import { GsbMarketPurchasesComponent } from './views/gsb-market-purchases/gsb-market-purchases.component';
import { GsbMarketStatsComponent } from './views/gsb-market-stats/gsb-market-stats.component';
import { GsbMarketBannersComponent } from './views/gsb-market-banners/gsb-market-banners.component';
import { RouterModule } from '@angular/router';
import { GsbMarketLayoutMarketComponent } from './views/gsb-market-layout/gsb-market-layout.component';
import { GsbMarketHeaderComponent } from './components/gsb-market-header/gsb-market-header.component';
import { GsbMarketMainMenuComponent } from './components/gsb-market-main-menu/gsb-market-main-menu.component';
import { GsbMarketStoresComponent } from './views/gsb-market-stores/gsb-market-stores.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GsbMarketplaceInfoComponent } from './components/marketplace-view-components/gsb-marketplace-info/gsb-marketplace-info.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GsbMarketMapComponent } from './components/marketplace-view-components/gsb-market-map/gsb-market-map.component';
import { GsbMarketFooterComponent } from './components/gsb-market-footer/gsb-market-footer.component';
import { GsbMarketStoresDeleteModalComponent } from './components/stores-view-components/gsb-market-stores-delete-modal/gsb-market-stores-delete-modal.component';
import { GsbMarketStoresFilterComponent } from './components/stores-view-components/gsb-market-stores-filter/gsb-market-stores-filter.component';
import { GsbMarketStoresTableComponent } from './components/stores-view-components/gsb-market-stores-table/gsb-market-stores-table.component';
import { GsbMarketStoresFormComponent } from './components/stores-view-components/gsb-market-stores-form/gsb-market-stores-form.component';
import { GsbMarketStoresInfoComponent } from './components/stores-view-components/gsb-market-stores-info/gsb-market-stores-info.component';
import { GsbMarketCategoriesFormComponent } from './components/categories-view-components/gsb-market-categories-form/gsb-market-categories-form.component';
import { GsbMarketCategoriesDeleteModalComponent } from './components/categories-view-components/gsb-market-categories-delete-modal/gsb-market-categories-delete-modal.component';
import { GsbMarketCategoriesDeleteErrorModalComponent } from './components/categories-view-components/gsb-market-categories-delete-error-modal/gsb-market-categories-delete-error-modal.component';

@NgModule({
  declarations: [
    GsbMarketDashboardComponent,
    GsbMarketMarketplaceComponent,
    GsbMarketCategoriesComponent,
    GsbMarketClientsComponent,
    GsbMarketPurchasesComponent,
    GsbMarketStatsComponent,
    GsbMarketBannersComponent,
    GsbMarketLayoutMarketComponent,
    GsbMarketHeaderComponent,
    GsbMarketMainMenuComponent,
    GsbMarketStoresComponent,
    GsbMarketplaceInfoComponent,
    GsbMarketMapComponent,
    GsbMarketFooterComponent,
    GsbMarketStoresComponent,
    GsbMarketStoresDeleteModalComponent,
    GsbMarketStoresFilterComponent,
    GsbMarketStoresTableComponent,
    GsbMarketStoresFormComponent,
    GsbMarketStoresInfoComponent,
    GsbMarketCategoriesFormComponent,
    GsbMarketCategoriesDeleteModalComponent,
    GsbMarketCategoriesDeleteErrorModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MarketplaceAdminRoutingModule,
    RouterModule,
    TranslateModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [TranslateService],
})
export class MarketplaceAdminModule {}
