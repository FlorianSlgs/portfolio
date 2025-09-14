import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModalComponent } from '../../shared/project-modal/project-modal';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './section2.html',
  styleUrl: './section2.css'
})
export class Section2 {
  selectedProject = signal<Project | null>(null);
  currentSlide = signal(0);
  
  // Expose Array constructor pour l'utiliser dans le template
  Array = Array;
  
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Digital Graphic Apps',
      subtitle: 'Under One, Umbrella',
      category: 'Website Design',
      tags: ['Web Design', 'App Design'],
      image: '/api/placeholder/400/300',
      description: 'Une application complète de design graphique qui unifie plusieurs outils sous une seule interface utilisateur moderne et intuitive.',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'Figma'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 2,
      title: "Today's Cryptocurrency",
      subtitle: 'Price Dashboard',
      category: 'Website Design',
      tags: ['Web Design', 'App Design'],
      image: '/api/placeholder/400/300',
      description: 'Dashboard moderne pour suivre les prix des cryptomonnaies en temps réel avec des graphiques interactifs et des alertes personnalisées.',
      technologies: ['React', 'Node.js', 'WebSocket', 'Chart.js'],
      liveUrl: 'https://crypto-dashboard.com',
      githubUrl: 'https://github.com/crypto-dashboard'
    },
    {
      id: 3,
      title: 'Project Management',
      subtitle: 'Task Organization',
      category: 'Website Design',
      tags: ['Web Design', 'App Design'],
      image: '/api/placeholder/400/300',
      description: 'Plateforme de gestion de projets avec interface sombre moderne, permettant une organisation efficace des tâches et une collaboration en équipe.',
      technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
      liveUrl: 'https://project-manager.com',
      githubUrl: 'https://github.com/project-manager'
    }
  ]);

  // Computed pour la navigation carousel
  totalSlides = computed(() => Math.ceil(this.projects().length / 3));
  visibleProjects = computed(() => {
    const start = this.currentSlide() * 3;
    return this.projects().slice(start, start + 3);
  });

  openModal(project: Project) {
    this.selectedProject.set(project);
  }

  closeModal() {
    this.selectedProject.set(null);
  }

  nextSlide() {
    const current = this.currentSlide();
    const total = this.totalSlides();
    this.currentSlide.set(current >= total - 1 ? 0 : current + 1);
  }

  prevSlide() {
    const current = this.currentSlide();
    const total = this.totalSlides();
    this.currentSlide.set(current <= 0 ? total - 1 : current - 1);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}