import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button';

@Component({
  selector: 'app-section1',
  imports: [ButtonComponent],
  templateUrl: './section1.html',
  styleUrl: './section1.css'
})
export class Section1 {
  handleButtonClick() {
    console.log('Bouton Contact cliqué !');
  }
}
