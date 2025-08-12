import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-right-area-buttons',
  imports: [],
  templateUrl: './right-area-buttons.html',
  styleUrl: './right-area-buttons.scss'
})
export class RightAreaButtons {
  @Input() text: string = '';
  @Input() icon: string = 'default-icon';
  @Output() onClick = new EventEmitter<void>();

  handleClick(): void {
    this.onClick.emit();
  }
}
