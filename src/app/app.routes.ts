import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GoalComponent } from './pages/goal/goal.component';
import { TipsComponent } from './pages/tips/tips.component';
import { StudyComponent } from './pages/study/study.component';
import { CasesComponent } from './pages/cases/cases.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'objetivo', component: GoalComponent },
  { path: 'cursos', component: StudyComponent },
  { path: 'dicas', component: TipsComponent },
  { path: 'casos', component: CasesComponent },
  { path: '**', redirectTo: '' }
];
