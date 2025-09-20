import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button';

// Pas d'import statique de Typed.js pour éviter le chargement SSR

@Component({
  selector: 'app-section1',
  imports: [ButtonComponent],
  templateUrl: './section1.html',
  styleUrl: './section1.css'
})
export class Section1 implements AfterViewInit {
  
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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

  ngAfterViewInit() {
    // S'assurer que l'animation ne se lance QUE côté client
    if (isPlatformBrowser(this.platformId)) {
      // Import dynamique pour éviter le chargement côté serveur
      import('typed.js').then((TypedModule) => {
        const Typed = TypedModule.default;
        
        const options = {
          strings: ['Angular', 'TypeScript', 'SCSS', 'Animations', 'Open Source'],
          typeSpeed: 80,
          backSpeed: 40,
          backDelay: 1000,
          startDelay: 500,
          loop: true,
          showCursor: true,
          cursorChar: '|',
          smartBackspace: true
        };

        new Typed(this.typedElement.nativeElement, options);
      });
    }
  }
}