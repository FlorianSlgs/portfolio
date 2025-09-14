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

  logos = [
    {
      alt: 'DDTM-préfecture',
      src: 'logo-pref-removebg.png',
      class: 'w-100 h-30 object-contain',
    },
    {
      alt: 'Mairie Montpellier',
      src: 'logo-mairie.png',
      class: 'w-30 h-30 object-contain',
    },
    {
      alt: 'La Graine 34',
      src: 'lagraine-removebg.png',
      class: 'w-30 h-30 object-contain',
    },
    {
      alt: 'Proprietes-privees',
      src: 'proprietes-removebg.png',
      class: 'w-30 h-30 object-contain',
    }
  ];
}
