import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { InstallationComponent } from './components/installation/installation.component';
import { FirstStepsComponent } from './components/first-steps/first-steps.component';
import { UsesComponent } from './components/uses/uses.component';
import { BestPracticesComponent } from './components/best-practices/best-practices.component';
import { ConclusionsComponent } from './components/conclusions/conclusions.component';

const routes: Routes = [
 // { path: '', redirectTo: '/introduction', pathMatch: 'full' },
 { path: '', component: IntroductionComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'installation', component: InstallationComponent },
  { path: 'first-steps', component: FirstStepsComponent },
  { path: 'uses', component: UsesComponent },
  { path: 'best-practices', component: BestPracticesComponent },
  { path: 'conclusions', component: ConclusionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }