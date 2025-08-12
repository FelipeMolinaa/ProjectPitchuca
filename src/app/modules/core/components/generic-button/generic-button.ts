import { NgClass } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

export type ButtonType = 'default' | 'success' | 'warning' | 'info' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'big';
@Component({
  selector: 'app-button',
  imports: [MatButtonModule, NgClass],
  templateUrl: './generic-button.html',
  styleUrl: './generic-button.scss'
})
export class GenericButton {
  @Input() type: ButtonType = 'default';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled = false;

  get btnBgColor(): string {
    switch (this.type) {
      case 'success': return 'bg-success-default';
      case 'danger': return 'bg-danger-default';
      case 'info': return 'bg-info-default';
      case 'warning': return 'bg-warning-default';
      case 'default': return 'bg-neutral-light text-neutral-dark'
      default: return '';
    }
  }

  get btnSize(): string {
    switch (this.size) {
      case 'big': return 'text-2xl px-8 py-4';
      case 'medium': return 'text-xl px-6 py-3';
      case 'small': return 'text-base px-4 py-2';
      default: return '';
    }
  }

  get btnTextColor(): string {
    switch (this.type) {
      case 'default': return '';
      default: return '';
    }
  }
}
