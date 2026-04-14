import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Light {
  x: number;
  y: number;
  size: number;
}

@Component({
  selector: 'app-bg-lights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bg-lights.html',
  styleUrl: './bg-lights.scss'
})
export class BgLights implements OnInit {
  lights: Light[] = [];

  ngOnInit() {
    this.triggerAnimation();
    // Aumentamos a frequência: agora cria uma luz a cada 2 segundos (2000ms)
    setInterval(() => this.triggerAnimation(), 2000); 
  }

  triggerAnimation() {
    const light: Light = {
      x: Math.random() * 100,
      y: Math.random() * 100,
      // Diminuímos o tamanho: agora variam entre 50px e 150px
      size: 50 + Math.random() * 100, 
    };

    this.lights.push(light);

    // Tempo de vida da luz na tela (mantive proporcional à frequência)
    setTimeout(() => {
      this.lights = this.lights.filter(l => l !== light);
    }, 6000);
  }
}