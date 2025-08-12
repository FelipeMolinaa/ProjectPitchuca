import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogData, GenericModal } from '@components/generic-modal/generic-modal';
import { Top } from "./components/top/top";
import { Main } from "./components/main/main";
import { Left } from "./components/left/left";
import { Right } from './components/right/right';

@Component({
  selector: 'app-game-page',
  imports: [Top, Main, Left, Right],
  templateUrl: './game-page.html',
  styleUrl: './game-page.scss'
})
export class GamePage implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
