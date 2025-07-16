// src/app/pages/aluno/aluno.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe CommonModule se for usar ngIf, ngFor etc.
import { RouterModule } from '@angular/router'; // Importe RouterModule para routerLink

@Component({
  selector: 'app-aluno',
  standalone: true, // Adicionar standalone: true
  imports: [CommonModule, RouterModule], // Adicionar módulos necessários
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.scss' // Mudar para styleUrl no singular
})
export class AlunoComponent implements OnInit {
  nomeAluno: string = '';
  cursos: string[] = [];

  ngOnInit(): void {
    this.nomeAluno = 'Maria Estética';
    this.cursos = ['Estética Facial', 'Estética Corporal', 'Empreendedorismo'];
  }
}