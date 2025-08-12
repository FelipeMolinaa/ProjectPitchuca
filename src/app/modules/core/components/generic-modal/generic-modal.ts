import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { GenericButton } from '@components/generic-button/generic-button';

export interface DialogData {
  title: string;
  message: string;
  cancelText?: string;
  confirmText?: string;
}

@Component({
  selector: 'app-modal',
  imports: [MatDialogModule, GenericButton],
  templateUrl: './generic-modal.html',
  styleUrl: './generic-modal.scss'
})
export class GenericModal {
  constructor(
    private dialogRef: MatDialogRef<GenericModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onConfirm() {
    this.dialogRef.close(true);
  }
}
