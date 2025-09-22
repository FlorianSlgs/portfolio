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
      title: 'Tableau de bord communication',
      subtitle: 'Angular, Express(Node.js), PostGreSQL',
      category: "Création d'application web",
      tags: ['Frontend', 'Backend', 'Base de données'],
      image: 'plan_com.webp',
      description: 'Projet formation Ilaria : Application de tableau de bord conçue pour les équipes de communication, offrant une gestion fluide et interactive de leurs plans de communication.',
      technologies: ['Angular', 'Express(node.js)', 'PostGreSQL', 'GSAP', 'Tailwind', 'TypeScript', 'CSS3', 'HTML5'],
      liveUrl: 'https://plancom.duckdns.org',
      githubUrl: 'https://github.com/FlorianSlgs/plan-com#'
    },
    {
      id: 2,
      title: "Quiz multijoueur en temps réel",
      subtitle: "Projet université : Next.js, React, Express(Node.js), WebSocket, MongoDB",
      category: "Création d'application web",
      tags: ['SEO', 'Frontend', 'Backend', 'Base de données'],
      image: 'quiz.webp',
      description: '#1 Google sur "quiz mutlijoueur" : jeu de quiz en ligne où plusieurs joueurs peuvent s’affronter en direct avec un classement instantané.',
      technologies: ['React', 'Next.js', 'Express(Node.js)', 'WebSocket', 'MongoDB', 'TypeScript', 'CSS3', 'HTML5'],
      liveUrl: 'https://quiz-multijoueur.fr/',
      githubUrl: 'https://github.com/FlorianSlgs/Jeux_site'
    },
    {
      id: 3,
      title: 'Application de sensibilisation aux risques',
      subtitle: 'Projet DDTM 34 : Angular, Tailwind, Typescript, CSS3, HTML5',
      category: "Création d'application web",
      tags: ['Frontend', 'Design'],
      image: 'risques.webp',
      description: 'Application de sensibilisation du grand public aux risques naturels.',
      technologies: ['Angular', 'Tailwind', 'Typescript', 'CSS3', 'HTML5'],
      liveUrl: 'https://presentation-risques-xluf.onrender.com/home',
      githubUrl: 'https://github.com/FlorianSlgs/presentation-risques'
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