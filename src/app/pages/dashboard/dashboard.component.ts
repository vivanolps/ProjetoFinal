// src/app/pages/dashboard/dashboard.component.ts

import { Component, OnInit } from '@angular/core'; // Adicione OnInit
import { CommonModule } from '@angular/common'; // Para ngFor, ngIf
import { RouterLink } from '@angular/router'; // Para links internos do dashboard

interface DashboardCard {
  title: string;
  description: string;
  icon: string; // Ex: 'bi bi-person-fill', 'fa fa-book'
  routerLink: string;
  bgColorClass: string; // Nova propriedade para classes de fundo dinâmicas
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink], // Mantenha ou adicione
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  adminName: string = 'Administrador EstéticaPro';
  quickLinks: DashboardCard[] = [];

  ngOnInit(): void {
    // Simular dados do dashboard
    this.quickLinks = [
      {
        title: 'Gerenciar Alunos',
        description: 'Visualize e edite informações dos alunos.',
        icon: 'bi bi-people-fill', // Ícone de exemplo (se usar Bootstrap Icons ou Font Awesome)
        routerLink: '/aluno', // Supondo que 'aluno' é onde se gerencia
        bgColorClass: 'card-primary-bg-light' // Usar uma das classes que já temos
      },
      {
        title: 'Gerenciar Cursos',
        description: 'Adicione, edite ou remova módulos de curso.',
        icon: 'bi bi-book-fill',
        routerLink: '/curso', // Supondo que 'curso' tem uma parte de gerenciamento
        bgColorClass: 'card-accent-bg'
      },
      {
        title: 'Ver Inscrições',
        description: 'Acompanhe os novos cadastros de interesse.',
        icon: 'bi bi-file-earmark-person-fill',
        routerLink: '/cadastro', // Supondo que 'cadastro' possa ter uma lista
        bgColorClass: 'card-secondary-bg'
      },
      {
        title: 'Relatórios & Métricas',
        description: 'Acesse dados e estatísticas do seu negócio.',
        icon: 'bi bi-graph-up',
        routerLink: '/dashboard/reports', // Nova rota para relatórios
        bgColorClass: 'card-info-bg' // Nova classe, ou use uma existente
      }
    ];
  }

  // Você pode adicionar métodos aqui para buscar dados reais de um backend.
}