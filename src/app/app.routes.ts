import { Routes } from '@angular/router';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

export const routes: Routes = [
  {path: '', redirectTo:'/candidatures', pathMatch:'full' },
  {path: 'candidatures', component: CandidaturesComponent, title:'Candidature' },
  {path: 'formulaires', component: FormulaireComponent, title: 'formulaire'}
];
