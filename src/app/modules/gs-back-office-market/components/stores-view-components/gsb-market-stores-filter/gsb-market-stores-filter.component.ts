import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'gsb-market-stores-filter',
  templateUrl: './gsb-market-stores-filter.component.html',
  styleUrls: ['./gsb-market-stores-filter.component.scss'],
})
export class GsbMarketStoresFilterComponent {
  @Output() filter = new EventEmitter<any>();
  @Input() hasStores: boolean = false; // Variable para controlar si hay tiendas disponibles
  filterForm: FormGroup;

  categories = ['Ropa', 'Tecnología', 'Comida']; // Mock de categorías

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      category: [''],
    });
  }

  onFilter(): void {
    const selectedCategory = this.filterForm.value.category;
    this.filter.emit(selectedCategory);
  }

  onAddStore(): void {
    // Lógica para abrir el formulario de agregar tienda
  }
}
