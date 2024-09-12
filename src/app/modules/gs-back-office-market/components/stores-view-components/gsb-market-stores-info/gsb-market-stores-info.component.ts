import { PageEvent } from '@angular/material/paginator';
import { Store } from '../../../Interfaces/gsb-market-stores.interface';
import { GsbMarketStoresDeleteModalComponent } from './../gsb-market-stores-delete-modal/gsb-market-stores-delete-modal.component';
import { GsbMarketStoresFormComponent } from './../gsb-market-stores-form/gsb-market-stores-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'gsb-market-stores-info',
  templateUrl: './gsb-market-stores-info.component.html',
  styleUrls: ['./gsb-market-stores-info.component.scss'],
})
export class GsbMarketStoresInfoComponent implements OnInit {
  stores: Store[] = [];
  isLoading = false;
  totalStores: number = 0;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.stores = this.loadStores();
  }
  paginate(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.stores = this.loadStores().slice(startIndex, endIndex);
  }
  loadStores(): Store[] {
    return [
      {
        id: 1,
        name: 'Tienda 1',
        category: 'Ropa',
        ownerEmail: 'tienda1@mail.com',
      },
      {
        id: 2,
        name: 'Tienda 2',
        category: 'Tecnología',
        ownerEmail: 'tienda2@mail.com',
      },
    ];
  }

  onCategorySelected(selectedCategory: string): void {
    if (selectedCategory) {
      this.stores = this.loadStores().filter(
        (store) => store.category === selectedCategory
      );
    } else {
      this.stores = this.loadStores();
    }
  }

  // openAddStoreForm(): void {
  //   const dialogRef = this.dialog.open(GsbMarketStoresFormComponent, {
  //     width: '500px',
  //     data: null,
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.stores.push(result);
  //     }
  //   });
  // }

  openEditStoreForm(store: Store): void {
    const dialogRef = this.dialog.open(GsbMarketStoresFormComponent, {
      width: '500px',
      data: store,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.stores.findIndex((s) => s.id === store.id);
        this.stores[index] = result;
      }
    });
  }

  confirmDeleteStore(store: Store): void {
    const dialogRef = this.dialog.open(GsbMarketStoresDeleteModalComponent, {
      width: '400px',
      data: { storeName: store.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.stores = this.stores.filter((s) => s.id !== store.id);
      }
    });
  }
}
