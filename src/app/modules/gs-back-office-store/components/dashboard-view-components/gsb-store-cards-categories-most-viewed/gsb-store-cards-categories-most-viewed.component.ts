import { Component } from '@angular/core';
import { GsbStoreMostViewProductsService } from '../../../services/gsb-store-most-view-products.service';

@Component({
  selector: 'gsb-store-cards-categories-most-viewed',
  templateUrl: './gsb-store-cards-categories-most-viewed.component.html',
  styleUrls: ['./gsb-store-cards-categories-most-viewed.component.scss'],
})
export class GsbStoreCardsCategoriesMostViewedComponent {
  dataProductsMostView: any = [];
  public page!: number;
  constructor(
    private mostViewProductsService: GsbStoreMostViewProductsService
  ) {}
  ngOnInit(): void {
    // this.dataMock = data
    this.getProductsMostViewCards();
  }

  getProductsMostViewCards() {
    this.mostViewProductsService.getsProductsMostView().subscribe((res) => {
      this.dataProductsMostView = res;
    });
  }
}
