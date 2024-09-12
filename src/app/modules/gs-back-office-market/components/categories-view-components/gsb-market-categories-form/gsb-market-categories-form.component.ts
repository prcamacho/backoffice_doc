import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'gsb-market-categories-form',
  templateUrl: './gsb-market-categories-form.component.html',
  styleUrls: ['./gsb-market-categories-form.component.scss'],
})
export class GsbMarketCategoriesFormComponent {
  isEditMode = false;
  category = { name: '', description: '', image: null };

  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.snapshot.paramMap.get('id')) {
      this.isEditMode = true;
    }
  }

  goToCategories() {
    this.router.navigate(['/marketplace-admin/categories']);
  }

  onSubmit() {}

}
