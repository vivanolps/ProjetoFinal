import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf, *ngFor
import { RouterModule } from '@angular/router'; // Para routerLink

// Definições de interfaces para tipagem (opcional, mas recomendado)
interface Curso {
  nome: string;
  progresso: number; // Porcentagem de 0 a 100
  ultimaAula: string;
  completo: boolean; // Para saber se o curso está completo ou incompleto
}

interface Recurso {
  nome: string;
  icone: string; // Classe do ícone (ex: 'bi-file-earmark-text', 'bi-link-45deg')
  link: string; // O link da rota para o recurso
}

@Component({
  selector: 'app-aluno',
  standalone: true, // Manter standalone
  imports: [CommonModule, RouterModule], // Importar módulos necessários
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.scss' // styleUrl é o correto (singular)
})
export class AlunoComponent implements OnInit {
  nomeAluno: string = '';
  cursos: Curso[] = []; // Agora é um array de objetos Curso
  recursos: Recurso[] = []; // Novo array para os recursos

  ngOnInit(): void {
    // Simulação de dados do aluno
    this.nomeAluno = 'Maria !';

    // Dados de cursos simulados
    this.cursos = [
      { nome: 'Estética Facial', progresso: 75, ultimaAula: 'Introdução aos Peelings', completo: false },
      { nome: 'Estética Corporal', progresso: 100, ultimaAula: 'Massagem Modeladora', completo: true },
      { nome: 'Empreendedorismo', progresso: 30, ultimaAula: 'Planejamento de Negócios', completo: false },
      { nome: 'Limpeza de Pele Profissional', progresso: 50, ultimaAula: 'Extração de Cravos', completo: false }
    ];

    // Dados de recursos simulados
    this.recursos = [
      { nome: 'Apostilas', icone: 'bi bi-file-earmark-text', link: 'apostilas' },
      { nome: 'Webinars', icone: 'bi bi-camera-video', link: 'webinars' },
      { nome: 'Fórum', icone: 'bi bi-chat-dots', link: 'forum' },
      { nome: 'Suporte', icone: 'bi bi-life-preserver', link: 'suporte' }
    ];
  }

  // Método para verificar se existem cursos incompletos
  temCursosIncompletos(): boolean {
    return this.cursos.some(curso => !curso.completo);
  }

  // Método para contar cursos incompletos
  cursosIncompletosCount(): number {
    return this.cursos.filter(curso => !curso.completo).length;
  }
}