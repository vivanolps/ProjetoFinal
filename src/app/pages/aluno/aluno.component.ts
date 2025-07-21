// src/app/aluno/aluno.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.services';


interface Curso {
  id: number;
  nome: string;
  progresso: number;
  ultimaAula: string;
  completo: boolean;
}

interface Recurso {
  nome: string;
  icone: string;
  link: string; // Manteremos o link como um identificador
}

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.scss'
})
export class AlunoComponent implements OnInit {
  nomeAluno: string = '';
  cursos: Curso[] = [];
  recursos: Recurso[] = [];
  mostrarNotificacoes: boolean = false;
  recursoAtivo: string | null = null; 
  emailSuporte: string = 'suporte@evelynestetica.com'; 

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.nomeAluno = 'Maria !';

    this.cursos = [
      { id: 1, nome: 'Estética Facial', progresso: 75, ultimaAula: 'Introdução aos Peelings', completo: false },
      { id: 2, nome: 'Estética Corporal', progresso: 100, ultimaAula: 'Massagem Modeladora', completo: true },
      { id: 3, nome: 'Empreendedorismo', progresso: 30, ultimaAula: 'Planejamento de Negócios', completo: false },
      { id: 4, nome: 'Limpeza de Pele Profissional', progresso: 50, ultimaAula: 'Extração de Cravos', completo: false }
    ];

    this.recursos = [
      { nome: 'Apostilas', icone: 'bi bi-file-earmark-text', link: 'apostilas' },
      { nome: 'Webinars', icone: 'bi bi-camera-video', link: 'webinars' },
      { nome: 'Fórum', icone: 'bi bi-chat-dots', link: 'forum' },
      { nome: 'Suporte', icone: 'bi bi-life-preserver', link: 'suporte' }
    ];
    
    this.recursoAtivo = 'apostilas'; 
  }

  temCursosIncompletos(): boolean {
    return this.cursos.some(curso => !curso.completo);
  }

  cursosIncompletosCount(): number {
    return this.cursos.filter(curso => !curso.completo).length;
  }

  cursosIncompletosLista(): Curso[] {
    return this.cursos.filter(curso => !curso.completo);
  }

  toggleNotificacoes(): void {
    this.mostrarNotificacoes = !this.mostrarNotificacoes;
  }

  irParaDetalheCurso(curso: Curso): void {
    console.log(`Simulando continuar curso: ${curso.nome}`);
    if (!curso.completo && curso.progresso < 100) {
      curso.progresso = Math.min(100, curso.progresso + 10);
      if (curso.progresso === 100) {
        curso.completo = true;
        curso.ultimaAula = 'Curso Concluído!';
        alert(`Parabéns! Você concluiu o curso de ${curso.nome}!`);
      } else {
        alert(`Você continuou o curso de ${curso.nome}. Progresso atual: ${curso.progresso}%`);
      }
    }
  }

  ativarRecurso(link: string): void {
    this.recursoAtivo = link;
    console.log(`Recurso ativo: ${this.recursoAtivo}`);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}