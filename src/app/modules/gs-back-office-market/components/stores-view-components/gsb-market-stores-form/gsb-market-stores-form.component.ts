import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'gsb-market-stores-form',
  templateUrl: './gsb-market-stores-form.component.html',
  styleUrls: ['./gsb-market-stores-form.component.scss'],
})
export class GsbMarketStoresFormComponent implements OnInit {
  storeForm: FormGroup = this.fb.group({});
  isEditMode: boolean = false;
  store: any = {};
  categories: string[] = ['Ropa', 'Tecnología', 'Comida'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<GsbMarketStoresFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.isEditMode = !!this.data;
    this.store = this.data
      ? { ...this.data }
      : { name: '', category: '', ownerEmail: '' };

    this.storeForm = this.fb.group({
      name: [this.store.name, Validators.required],
      category: [this.store.category, Validators.required],
      ownerEmail: [
        this.store.ownerEmail,
        [Validators.required, Validators.email],
      ],
    });
  }

  saveStore(): void {
    if (this.storeForm.valid) {
      this.dialogRef.close(this.storeForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
