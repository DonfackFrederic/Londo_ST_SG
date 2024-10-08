import { Routes } from '@angular/router';
import { CandidaturesComponent } from './candidatures/candidatures.component';

export const routes: Routes = [
  {path: '', redirectTo:'/candidatures', pathMatch:'full' },
  {path: 'candidatures', component: CandidaturesComponent, title:'Candidature' }
];
