// src/app/app.routes.ts (Volte para como estava antes, sem as rotas filhas para apostilas, webinars, etc.)

import { Routes } from '@angular/router';

// Componentes das páginas principais
import { HomeComponent } from './pages/home/home.component';
import { CursoComponent } from './pages/curso/curso.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { SuporteComponent } from './pages/aluno/suporte/suporte.component';

// Guard de autenticação
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aluno', component: AlunoComponent, canActivate: [authGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'politica-privacidade', component: PoliticaPrivacidadeComponent },
  { path: 'aluno/suporte', component: SuporteComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];