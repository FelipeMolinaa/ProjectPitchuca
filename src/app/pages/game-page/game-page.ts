import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogData, GenericModal } from '@components/generic-modal/generic-modal';

@Component({
  selector: 'app-game-page',
  imports: [],
  templateUrl: './game-page.html',
  styleUrl: './game-page.scss'
})
export class GamePage implements OnInit {
  
  constructor(private dialog: MatDialog) {}
  
  ngOnInit(): void {
    this.openModal();
  }

  openModal() {
    const data: DialogData = {
      title: 'Dialog Title',
      message: 'This is a dialog message.',
      cancelText: 'Cancel',
      confirmText: 'Accept',
    };

    const ref = this.dialog.open(GenericModal, {
      data,
      panelClass: 'custom-dialog-panel',
      // tira o padding padrão do mat-dialog-container
      // e deixa o background transparente
    });

    ref.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        // usuário clicou em “Accept”
      } else {
        // clicou em “Cancel” ou fechou de outra forma
      }
    });
  }

}
