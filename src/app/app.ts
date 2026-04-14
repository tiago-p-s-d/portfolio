import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { BgLights } from './components/bg-lights/bg-lights';
import { AboutMe } from './components/about-me/about-me';
import { ProfessionalJourney } from './components/professional-journey/professional-journey';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Header, Home, BgLights, AboutMe, ProfessionalJourney, Projects, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
