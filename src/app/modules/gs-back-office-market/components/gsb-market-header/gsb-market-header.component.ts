import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'gsb-market-header',
  templateUrl: './gsb-market-header.component.html',
  styleUrls: ['./gsb-market-header.component.scss'],
})
export class GsbMarketHeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();
  constructor(private translateService: TranslateService) {}

  toggleMenu(): void {
    this.menuToggle.emit();
  }
}
