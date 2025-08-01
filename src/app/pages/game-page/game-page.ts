import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { GenericButton } from '@components/generic-button/generic-button';

@Component({
  selector: 'app-game-page',
  imports: [GenericButton],
  templateUrl: './game-page.html',
  styleUrl: './game-page.scss'
})
export class GamePage {

}
