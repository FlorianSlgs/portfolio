import { Component, signal, computed } from '@angular/core';

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
  imports: [ProjectModalComponent],
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
      title: 'Gestion de boites réutilisables',
      subtitle: 'Projet stage TEM3 : Angular, Express(Node.js), PostGreSQL',
      category: "Création d'application web",
      tags: ['Frontend', 'Backend', 'Base de données'],
      image: 'loopeat.webp',
      description: "Développement d'une application de gestion de consigne avec Angular et Express/PostgreSQL avec Jest pour garantir la qualité du code. Conception des maquettes UX/UI sous Illustrator.",
      technologies: ['Angular', 'Express(node.js)', 'PostGreSQL', 'Docker', 'TailwindCSS', 'TypeScript', 'Jest', 'Websocket / Webhook'],
      githubUrl: 'https://github.com/FlorianSlgs/loopeat'
    },
    {
      id: 2,
      title: 'Tableau de bord communication',
      subtitle: 'Projet formation Ilaria : Angular, Express(Node.js), PostGreSQL',
      category: "Création d'application web",
      tags: ['Frontend', 'Backend', 'Base de données'],
      image: 'plan_com.webp',
      description: 'Application de tableau de bord conçue pour les équipes de communication, offrant une gestion fluide et interactive de leurs plans de communication.',
      technologies: ['Angular', 'Express(node.js)', 'PostGreSQL', 'GSAP', 'Tailwind', 'TypeScript', 'CSS3', 'HTML5'],
      githubUrl: 'https://github.com/FlorianSlgs/plan-com#'
    },
    {
      id: 3,
      title: "Quiz multijoueur en temps réel",
      subtitle: "Projet universitaire : Next.js, React, Express(Node.js), WebSocket, MongoDB",
      category: "Création d'application web",
      tags: ['SEO', 'Frontend', 'Backend', 'Base de données'],
      image: 'quiz.webp',
      description: '#1 Google sur "quiz multijoueur" : jeu de quiz en ligne où plusieurs joueurs peuvent s’affronter en direct avec un classement instantané.',
      technologies: ['React', 'Next.js', 'Express(Node.js)', 'WebSocket', 'MongoDB', 'TypeScript', 'CSS3', 'HTML5'],
      liveUrl: 'https://quiz-multijoueur.fr/',
      githubUrl: 'https://github.com/FlorianSlgs/Jeux_site'
    },
    {
      id: 4,
      title: 'Application de sensibilisation aux risques',
      subtitle: 'Projet DDTM 34 : Angular, Tailwind, Typescript, CSS3, HTML5',
      category: "Création d'application web",
      tags: ['Frontend', 'Design'],
      image: 'risques.webp',
      description: 'Application de sensibilisation du grand public aux risques naturels.',
      technologies: ['Angular', 'Tailwind', 'Typescript', 'CSS3', 'HTML5'],
      liveUrl: 'https://presentation-risques-xluf.onrender.com/home',
      githubUrl: 'https://github.com/FlorianSlgs/presentation-risques'
    },
     {
     id: 5,
      title: 'Site de présentation de données territoriales',
      subtitle: 'Projet DDTM 34 : JavaScript, Bootstrap, CSS, HTML, R Shiny',
      category: "Création d'application web",
      tags: ['Frontend', 'Data Visualization'],
      image: 'App_ODD.webp',
      description: "Application développée en collaboration avec les développeurs backend R de la DDTM, permettant de visualiser les données territoriales sous forme de graphiques et de cartes interactives.",
      technologies: ['JavaScript', 'Bootstrap', 'CSS', 'HTML', 'R', 'R Shiny']
    },
     {
      id: 6,
      title: 'Application de commande de nourriture en vrac',
      subtitle: 'Projet universitaire : PHP, JavaScript, CSS, HTML, MySQL',
      category: "Création d'application web",
      tags: ['Frontend', 'Backend', 'Base de données'],
      image: 'Durablans.webp',
      description: 'Site de commande de nourriture en vrac. Gestion de base de données et interactions en JavaScript.',
      technologies: ['PHP', 'JavaScript', 'CSS', 'HTML', 'MySQL']
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
