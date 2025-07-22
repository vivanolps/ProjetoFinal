import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CursoComponent } from './pages/curso/curso.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PoliticaPrivacidadeComponent } from '../app/politica-privacidade/politica-privacidade.component';
import { LoginComponent } from './pages/login/login.component';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CursoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'politica', component: PoliticaPrivacidadeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'aluno',
    component: AlunoComponent,
    canActivate: [authGuard],
  },
];