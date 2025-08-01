import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamePage } from './pages/game-page/game-page';

@Component({
  selector: 'app-root',
  imports: [GamePage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ProjetoPitchuca');
}
