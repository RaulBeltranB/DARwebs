import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SidenavComponent], 
  template: `
    <div class="app-container">
      <app-sidenav></app-sidenav>
      <main class="content">
        <router-outlet></router-outlet> 
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      height: 100vh;
    }
    .content {
      flex: 1;
      padding: 2rem;
      overflow-y: auto;
    }
  `]
})
export class AppComponent {}
