import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para funcionalidades básicas

@Component({
  selector: 'app-about-me',
  standalone: true, // Se estiver usando Angular 17+
  imports: [CommonModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  texts = [
    {
      title: "Real-World Solutions",
      content: "Building internal applications at Dore Refrigerantes focused on solving real business needs and improving daily workflows.",
      icon: "</>",
    },
    {
      title: "Full Stack Development",
      content: "Currently developing anti-fraud platforms at Provider Global with AI integration and scalable architecture.",
      icon: "💡",
    },
    {
      title: "Continuous Learning",
      content: "Always seeking to improve skills, explore new technologies, and deliver better solutions through constant learning.",
      icon: "👥",
    },
    {
      title: "AI Integration",
      content: "Working with modern technologies such as AI-powered assistants to enhance decision-making and automate processes.",
      icon: "⚡",
    }
  ];
}