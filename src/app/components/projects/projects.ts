import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
  {
    title: "D-Infinity",
    date: "Dec 2025 - Present",
    description: "A tabletop RPG tool for Dungeon Masters to manage their campaigns through dynamic templates.",
    features: [
      "Custom template builder for character sheets",
      "Dynamic field definition by the DM",
      "Race Forge engine for lineage management"
    ],
    technologies: ["Angular 20", "Node 25", "TypeScript", "MySQL", "Knex"],
    github: "https://github.com/seu-usuario/d-infinity"
  },
  {
    title: "Cesta PAC Server",
    date: "Jan 2025 - Present",
    description: "Backend infrastructure for service management, focusing on relational integrity and secure data handling.",
    features: [
      "Optimized MySQL query performance",
      "Administrative permission filtering",
      "Automated migration handling"
    ],
    technologies: ["Node.js", "GitLab", "MySQL", "Relational DB"],
    github: "https://gitlab.com/edmonteiro/cesta-pac-server"
  }
];
}
