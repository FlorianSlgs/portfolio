import { Component, HostListener } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button';
import { ButtonAnchorComponent } from '../../shared/button-anchor/button-anchor';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, ButtonAnchorComponent],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isScrolled = false;
  private scrollThreshold = 50;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > this.scrollThreshold;
  }

  handleButtonClick() {
    console.log('Bouton Contact cliqué !');
  }

  handleHomeClick() {
    console.log('Accueil cliqué !');
  }

  handleAboutClick() {
    console.log('À propos cliqué !');
  }

  handleServicesClick() {
    console.log('Services cliqué !');
  }
}