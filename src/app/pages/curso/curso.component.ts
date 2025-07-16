// src/app/pages/curso/curso.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; // Para o routerLink do botão

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule, RouterLink], // Adicionar RouterLink
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.scss'
})
export class CursoComponent {
  // Por enquanto, nenhuma lógica complexa é necessária aqui..
}