import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gsb-market-categories',
  templateUrl: './gsb-market-categories.component.html',
  styleUrls: ['./gsb-market-categories.component.scss'],
})
export class GsbMarketCategoriesComponent {
  categories = [
    {
      id: 1,
      name: 'Tecnología',
      icon: 'icon-url',
      stores: 100,
      description: 'Categoría de tecnología...',
    },
    {
      id: 2,
      name: 'Ropa',
      icon: 'icon-url',
      stores: 100,
      description: 'Categoría de ropa...',
    },
  ];

  currentPage = 1;
  pageSize = 10;
  noCategories = false;
  dropdownStates: { [key: number]: boolean } = {};

  toggleDropdown(categoryId: number): void {
    // Cierra otros menús abiertos (opcional)
    for (const key in this.dropdownStates) {
      if (Number(key) !== categoryId) {
        this.dropdownStates[key] = false;
      }
    }
    // Alterna el menú actual
    this.dropdownStates[categoryId] = !this.dropdownStates[categoryId];
  }

  isDropdownOpen(categoryId: number): boolean {
    return this.dropdownStates[categoryId] || false;
  }
  constructor(private router: Router) {}

  getPaginatedCategories() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.categories.slice(start, end);
  }

  getStartIndex() {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  getEndIndex() {
    return Math.min(this.currentPage * this.pageSize, this.categories.length);
  }

  hasNextPage() {
    return this.currentPage * this.pageSize < this.categories.length;
  }

  hasPreviousPage() {
    return this.currentPage > 1;
  }

  nextPage() {
    if (this.hasNextPage()) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.hasPreviousPage()) {
      this.currentPage--;
    }
  }

  getPages() {
    const totalPages = Math.ceil(this.categories.length / this.pageSize);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  editCategory(id: number) {
    this.router.navigate(['/marketplace-admin/categories', id, 'edit']);
  }

  navigateBack() {
    this.router.navigate(['/marketplace-admin/categories']);
  }

  deleteCategory(id: number) {}
}
