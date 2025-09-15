import { Component, HostListener, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button';
import { ButtonAnchorComponent } from '../../shared/button-anchor/button-anchor';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, ButtonAnchorComponent, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit, OnDestroy, AfterViewInit {
  isScrolled = false;
  isMenuOpen = false; // Nouvel état pour le menu mobile
  private scrollThreshold = 50;
  private destroy$ = new Subject<void>();
  
  // État des liens actifs
  activeSection = 'accueil'; // Section active par défaut

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Ne s'exécute que côté client
    if (typeof window === 'undefined') return;
    
    this.isScrolled = window.pageYOffset > this.scrollThreshold;
    this.updateActiveSection();
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    // Ferme le menu mobile si on passe en desktop
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      this.isMenuOpen = false;
    }
  }

  ngOnInit() {
    // Ne fait rien côté serveur
  }

  ngAfterViewInit() {
    // S'exécute après que la vue soit initialisée côté client
    if (typeof window !== 'undefined') {
      setTimeout(() => this.observeSections(), 100);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Nouvelle méthode pour toggle le menu mobile
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Ferme le menu mobile après un clic sur un lien
  private closeMenuAfterClick() {
    this.isMenuOpen = false;
  }

  private observeSections() {
    // Sortir immédiatement si pas côté client
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const sections = document.querySelectorAll('[id^="section-"]');
    
    if (sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id.replace('section-', '');
          this.activeSection = sectionId;
        }
      });
    }, {
      rootMargin: '-20% 0px -80% 0px'
    });

    sections.forEach(section => observer.observe(section));
  }

  private updateActiveSection() {
    // Sortir immédiatement si pas côté client
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const sections = document.querySelectorAll('[id^="section-"]');
    const scrollPosition = window.pageYOffset + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i] as HTMLElement;
      if (section.offsetTop <= scrollPosition) {
        const sectionId = section.id.replace('section-', '');
        this.activeSection = sectionId;
        break;
      }
    }
  }

  private scrollToSection(sectionId: string) {
    // Sortir immédiatement si pas côté client
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      const headerHeight = 80; // Hauteur approximative de votre header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      this.activeSection = sectionId;
    }
  }

  handleLogoClick() {
    this.scrollToSection('accueil');
    this.closeMenuAfterClick();
  }

  handleButtonClick() {
    this.scrollToSection('contact');
    this.closeMenuAfterClick();
  }

  handleHomeClick() {
    this.scrollToSection('accueil');
    this.closeMenuAfterClick();
  }

  handleProjectsClick() {
    this.scrollToSection('projets');
    this.closeMenuAfterClick();
  }

  handleServicesClick() {
    this.scrollToSection('services');
    this.closeMenuAfterClick();
  }

  // Méthode pour vérifier si un lien est actif
  isLinkActive(section: string): boolean {
    return this.activeSection === section;
  }
}