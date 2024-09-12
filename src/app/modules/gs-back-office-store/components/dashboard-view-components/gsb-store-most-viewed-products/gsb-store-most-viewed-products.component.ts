import { Component, OnInit } from '@angular/core';
import { GsbStoreMostViewProductsService } from '../../../services/gsb-store-most-view-products.service';
@Component({
  selector: 'gsb-store-most-viewed-products',
  templateUrl: './gsb-store-most-viewed-products.component.html',
  styleUrls: ['./gsb-store-most-viewed-products.component.scss'],
})
export class GsbStoreMostViewedProductsComponent implements OnInit {
  dataProductsMostView: any = [];
  public page!: number;
  constructor(private GsbStoremostViewProductsService: GsbStoreMostViewProductsService) {}
  ngOnInit(): void {
    // this.dataMock = data
    this.getProductsMostView();
  }

  getProductsMostView() {
    this.GsbStoremostViewProductsService.getsProductsMostView().subscribe((res) => {
      this.dataProductsMostView = res;
    });
  }
}
