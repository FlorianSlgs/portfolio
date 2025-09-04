import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button-anchor',
  standalone: true,
  templateUrl: './button-anchor.html',
})
export class ButtonAnchorComponent {
  // Signal de sortie pour les clics
  clicked = output<Event>();

  onClick(event: Event): void {
    this.clicked.emit(event);
  }
}