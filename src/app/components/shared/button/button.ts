// button.component.ts
import { Component, computed, input, output } from '@angular/core';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
})
export class ButtonComponent {
  // Signaux d'entrée avec valeurs par défaut
  type = input<'button' | 'submit' | 'reset'>('button');
  size = input<'sm' | 'md' | 'lg'>('md');
  variant = input<'primary' | 'secondary' | 'outline'>('primary');
  iconLeft = input<string>('');
  iconRight = input<string>('');
  fullWidth = input<boolean>(false);
  
  // Signal de sortie
  clicked = output<Event>();

  // Signal calculé pour les classes CSS
  buttonClasses = computed(() => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
    
    // Classes de taille
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'sm:px-6 px-4 sm:py-3 py-2 sm:text-base text-sm',
      lg: 'px-8 py-4 text-lg'
    };
    
    // Classes de variante
    const variantClasses = {
      primary: 'bg-blue-600 text-white border-blue-600 border-2 hover:border-white hover:bg-transparent hover:cursor-pointer',
      secondary: 'bg-transparent text-blue-500 border-2 border-blue-500 hover:bg-blue-50 hover:text-blue-600',
      outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 hover:border-white'
    };

    
    // Classes pour largeur complète
    const widthClasses = this.fullWidth() ? 'w-full' : '';
    
    return [
      baseClasses,
      sizeClasses[this.size()],
      variantClasses[this.variant()],
      widthClasses
    ].filter(Boolean).join(' ');
  });

  onClick(event: Event): void {
      this.clicked.emit(event);
  }
}