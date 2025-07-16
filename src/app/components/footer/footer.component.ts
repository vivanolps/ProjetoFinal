// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true, // Ou false, dependendo da sua configuração inicial
  imports: [], // Se não houver outros componentes ou módulos importados
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss' // Garanta que aponta para o SCSS
})
export class FooterComponent {
  // Nenhuma lógica necessária para um rodapé simples
}