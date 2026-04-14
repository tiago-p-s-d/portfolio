import { Component, inject } from '@angular/core';
import { Typewriter } from '../../services/typewriter/typewriter'; // Ajuste o caminho
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private typingService = inject(Typewriter);

  private phrases = [
    'Hi, I am Tiago.',
    'Hola, soy Tiago.',
    'Hallo, ich bin Tiago.',
    'Bonjour, je suis Tiago.',
    'Ciao, sono Tiago.',
  ];

  iam$ = this.typingService.getTypewriterEffect(this.phrases);
}