import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CursoComponent } from './pages/curso/curso.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'aluno', component: AlunoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' } // rota coringa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
