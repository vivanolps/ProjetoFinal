// src/app/aluno/aluno.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; 
import { AuthService } from '../../services/auth.services'; 


interface Curso {
  nome: string;
  progresso: number;
  ultimaAula: string;
  completo: boolean;
}

interface Recurso {
  nome: string;
  icone: string;
  link: string;
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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.nomeAluno = 'Maria !';

    this.cursos = [
      { nome: 'Estética Facial', progresso: 75, ultimaAula: 'Introdução aos Peelings', completo: false },
      { nome: 'Estética Corporal', progresso: 100, ultimaAula: 'Massagem Modeladora', completo: true },
      { nome: 'Empreendedorismo', progresso: 30, ultimaAula: 'Unha em gel', completo: false },
      { nome: 'Limpeza de Pele Profissional', progresso: 50, ultimaAula: 'Extração de Cravos', completo: false }
    ];

    this.recursos = [
      { nome: 'Apostilas', icone: 'bi bi-file-earmark-text', link: 'apostilas' },
      { nome: 'Webinars', icone: 'bi bi-camera-video', link: 'webinars' },
      { nome: 'Fórum', icone: 'bi bi-chat-dots', link: 'forum' },
      { nome: 'Suporte', icone: 'bi bi-life-preserver', link: 'suporte' }
    ];
  }

  temCursosIncompletos(): boolean {
    return this.cursos.some(curso => !curso.completo);
  }

  cursosIncompletosCount(): number {
    return this.cursos.filter(curso => !curso.completo).length;
  }

  // Meu metodo de logout
  logout(): void {
    this.authService.logout(); 
    this.router.navigate(['/login']); 
  }
}