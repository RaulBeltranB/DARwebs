import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
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
  styles: [`
    .sidenav {
      width: 250px;
      height: 100vh;
      background: #1976d2;
      color: white;
      padding: 1rem;
    }
    h1 {
      text-align: center;
      margin-bottom: 2rem;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin: 1rem 0;
    }
    a {
      color: white;
      text-decoration: none;
      padding: 0.5rem;
      display: block;
      border-radius: 4px;
    }
    a:hover, .active {
      background: rgba(255,255,255,0.1);
    }
  `]
})
export class SidenavComponent {}