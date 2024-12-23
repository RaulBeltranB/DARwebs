import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
    standalone: true,
  template: `
    <nav class="sidenav">
      <h1>Tutorial Angular</h1>
      <ul>
        <li><a routerLink="/introduction" routerLinkActive="active">1. Justificación</a></li>
        <li><a routerLink="/installation" routerLinkActive="active">2. Instalación</a></li>
        <li><a routerLink="/first-steps" routerLinkActive="active">3. Primeros Pasos</a></li>
        <li><a routerLink="/uses" routerLinkActive="active">4. Usos</a></li>
        <li><a routerLink="/best-practices" routerLinkActive="active">5. Buenas Prácticas</a></li>
        <li><a routerLink="/conclusions" routerLinkActive="active">6. Conclusiones</a></li>
      </ul>
    </nav>
  `,
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {}