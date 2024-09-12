import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'gsb-market-stores-delete-modal',
  templateUrl: './gsb-market-stores-delete-modal.component.html',
  styleUrls: ['./gsb-market-stores-delete-modal.component.scss'],
})
export class GsbMarketStoresDeleteModalComponent {
  constructor(
    public dialogRef: MatDialogRef<GsbMarketStoresDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onDelete(): void {
    this.dialogRef.close(true);
  }

  confirmDelete(): void {
    this.dialogRef.close(true); // Retorna un valor que indica que se confirma la eliminación
  }

  close(): void {
    this.dialogRef.close(false); // Retorna un valor falso para cancelar la eliminación
  }
}
