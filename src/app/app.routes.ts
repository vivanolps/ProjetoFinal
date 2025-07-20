import { Routes } from '@angular/router';

// Componentes das páginas principais
import { HomeComponent } from './pages/home/home.component';
import { CursoComponent } from './pages/curso/curso.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'; // se já existir

// Guard de autenticação
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'cadastro', component: CadastroComponent },

  // Página de login ANTES da área do aluno
  { path: 'login', component: LoginComponent },

  // Área protegida: só acessa se estiver autenticado
  { path: 'aluno', component: AlunoComponent, canActivate: [authGuard] },

  // (Opcional) Dashboard ou outras páginas futuras
  { path: 'dashboard', component: DashboardComponent },

  // Redirecionamento padrão
  { path: '**', redirectTo: '' }
];