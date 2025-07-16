// src/app/pages/home/home.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para ngIf, ngFor se for usar no futuro
import { RouterLink } from '@angular/router'; // Importar RouterLink para os botões

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink], // Adicionar RouterLink
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Nenhuma lógica complexa é necessária para esta página no momento.
}