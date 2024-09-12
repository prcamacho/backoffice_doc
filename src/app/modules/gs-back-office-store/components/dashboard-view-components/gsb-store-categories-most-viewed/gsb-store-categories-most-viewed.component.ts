import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  Color,
  LegendPosition,
  ScaleType,
  ViewDimensions,
  calculateViewDimensions,
} from '@swimlane/ngx-charts';

import { GsbStoreCategoriesMostViewedService } from '../../../services/gsb-store-categories-most-viewed.service';
@Component({
  selector: 'gsb-store-categories-most-viewed',
  templateUrl: './gsb-store-categories-most-viewed.component.html',
  styleUrls: ['./gsb-store-categories-most-viewed.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GsbStoreCategoriesMostViewedComponent implements OnInit {
  dataCategoriesMostView!: any[];
  pieAdvancedChart!: any[];
  // view: any = {var: [700, 300]};
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = false;
  isDoughnut: boolean = true;
  legendPosition: any = {
    colors: 'green',
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    position: LegendPosition.Right,
    title: 'prueba',
    scaleType: ScaleType.Ordinal,
  };

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#82E1AB', '#5914A9', '#5E7AD5', '#F2D600', '#C340AF'],
  };
  view: any = {
    var: [0, 0],
  };

  constructor(
    private GsbStorecategoriesMostViewedService: GsbStoreCategoriesMostViewedService
  ) {
    //Object.assign(this, { pieAdvancedChart });
    //Object.assign(this, { pieAdvancedChart });
    this.dataCategoriesMostView = [
      {
        name: [],
        value: [],
      },
    ];
  }
  ngOnInit(): void {
    this.getCategoriesMostView();
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  getCategoriesMostView() {
    this.GsbStorecategoriesMostViewedService
      .getsCategoriesMostView()
      .subscribe((res) => {
        this.dataCategoriesMostView = res;
      });
  }
}
