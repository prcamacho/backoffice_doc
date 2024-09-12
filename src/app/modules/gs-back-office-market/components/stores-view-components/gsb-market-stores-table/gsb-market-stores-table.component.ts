import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '../../../Interfaces/gsb-market-stores.interface';

@Component({
  selector: 'gsb-market-stores-table',
  templateUrl: './gsb-market-stores-table.component.html',
  styleUrls: ['./gsb-market-stores-table.component.scss'],
})
export class GsbMarketStoresTableComponent {
  @Input() stores: Store[] = [];
  @Output() editStore = new EventEmitter<Store>();
  @Output() deleteStore = new EventEmitter<Store>();

  sortDirection: 'asc' | 'desc' = 'asc';

  actionMenuOpen: { [key: number]: boolean } = {}; 
  onEdit(store: Store): void {
    this.editStore.emit(store);
  }

  onDelete(store: Store): void {
    this.deleteStore.emit(store);
  }

  sortBy(column: string): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.stores.sort((a, b) => {
      let valueA: string;
      let valueB: string;

      if (column === 'name') {
        valueA = a.name.toLowerCase();
        valueB = b.name.toLowerCase();
      } else if (column === 'category') {
        valueA = a.category.toLowerCase();
        valueB = b.category.toLowerCase();
      } else {
        return 0;
      }

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  toggleMenu(storeId: number): void {
    this.actionMenuOpen[storeId] = !this.actionMenuOpen[storeId];
  }
}
