import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  template: `
    <section class="tutorial-section">
      <h2>1. Justificación del Framework Angular</h2>
      
      <h3>1.1 Definición y Origen</h3>
      <p>Angular es un framework de desarrollo web de código abierto creado y mantenido por Google...</p>

      <h3>1.2 ¿Para qué sirve?</h3>
      <div class="card">
        <h4>Objetivos Principales</h4>
        <ul>
          <li>Desarrollo de aplicaciones web empresariales complejas</li>
          <li>Creación de interfaces de usuario dinámicas e interactivas</li>
          <li>Construcción de aplicaciones de una sola página (SPA)</li>
          <li>Desarrollo multiplataforma</li>
        </ul>
      </div>

      <div class="card">
        <h4>Características Distintivas</h4>
        <ul>
          <li>Arquitectura basada en componentes</li>
          <li>Sistema robusto de inyección de dependencias</li>
          <li>Binding de datos bidireccional</li>
          <li>Renderizado eficiente</li>
          <li>Soporte para programación reactiva</li>
        </ul>
      </div>
    </section>
  `,
    styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {}