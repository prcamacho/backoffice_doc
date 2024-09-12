import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'gsb-store-header',
  templateUrl: './gsb-store-header.component.html',
  styleUrls: ['./gsb-store-header.component.scss']
})
export class GsbStoreHeaderComponent {

  constructor(private translateService: TranslateService){}

}
