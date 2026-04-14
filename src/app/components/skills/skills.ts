import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    {
      icon: '💻',
      title: 'Programming Languages',
      items: [
        { name: 'JavaScript', time: '3y+', desc: 'Full-stack, React, Vue.js' },
        { name: 'TypeScript', time: '4y+', desc: 'Angular, scalable apps' },
        { name: 'C#', time: '1y+', desc: 'OOP, systems, algorithms' },
        { name: 'Python', time: '2y+', desc: 'Automation, scripting' },
        { name: 'SQL', time: '2y+', desc: 'Database design, queries' }
      ]
    },
    {
      icon: '🌐',
      title: 'Web Technologies',
      items: [
        { name: 'Angular', time: '3y+', desc: 'SPAs, component architecture' },
        { name: 'Vue.js', time: '2y+', desc: 'PWAs, clean UI' },
        { name: 'React.js', time: '1y+', desc: 'Hooks, modern patterns' },
        { name: 'HTML/CSS', time: '4y+', desc: 'Responsive design' }
      ]
    },
    {
      icon: '☁️',
      title: 'Tools & Cloud',
      items: [
        { name: 'Git', time: '4y+', desc: 'Version control' },
        { name: 'Azure', time: '2y+', desc: 'CI/CD, Agile' },
        { name: 'Docker', time: '2y+', desc: 'Containerization' },
        { name: 'Linux', time: '2y+', desc: 'System usage' },
        { name: 'Postman', time: '3y+', desc: 'API testing' }
      ]
    },
    {
      icon: '🗄️',
      title: 'Databases',
      items: [
        { name: 'MySQL', time: '3y+', desc: 'Database management' },
        { name: 'PostgreSQL', time: '2y+', desc: 'Relational modeling' }
      ]
    },
    {
      icon: '🤖',
      title: 'AI & Innovation',
      items: [
        { name: 'AI Assistants', time: 'Current', desc: 'Automation & decision-making' },
        { name: 'Modern Solutions', time: 'Current', desc: 'Process optimization' }
      ]
    }
  ];


}
