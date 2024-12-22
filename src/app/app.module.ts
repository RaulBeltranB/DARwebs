import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Importación de componentes standalone
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { InstallationComponent } from './components/installation/installation.component';
import { FirstStepsComponent } from './components/first-steps/first-steps.component';
import { UsesComponent } from './components/uses/uses.component';
import { BestPracticesComponent } from './components/best-practices/best-practices.component';
import { ConclusionsComponent } from './components/conclusions/conclusions.component';

@NgModule({
  declarations: [], // No necesitas declarar componentes standalone
  imports: [
    BrowserModule,          // Módulo base de Angular
    AppRoutingModule,       // Módulo de rutas
    AppComponent,           // Componente raíz standalone
    SidenavComponent,       // Barra lateral standalone
    IntroductionComponent,  // Sección 1 standalone
    InstallationComponent,  // Sección 2 standalone
    FirstStepsComponent,    // Sección 3 standalone
    UsesComponent,          // Sección 4 standalone
    BestPracticesComponent, // Sección 5 standalone
    ConclusionsComponent    // Sección 6 standalone
  ],
  providers: [],
  bootstrap: [AppComponent] // Componente raíz
})
export class AppModule {}
