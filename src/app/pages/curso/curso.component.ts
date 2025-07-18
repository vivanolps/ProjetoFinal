import { Component, OnInit, OnDestroy } from '@angular/core'; // Removido HostListener
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit, OnDestroy {
  cursos = [
    {
      titulo: "Limpeza de Pele Profissional",
      descricao: "Domine técnicas avançadas para acne, oleosidade e rejuvenescimento com certificação internacional.",
      imagem: "assets/images/spar.jpeg",
      badge: "Mais Procurado!"
    },
    {
      titulo: "Design de Sobrancelhas com Henna",
      descricao: "Aprenda o método perfeito para formatos que realçam o rosto + curso de henna inclusivo.",
      imagem: "assets/images/sombrancelha.jpeg"
    },
    {
      titulo: "Massagem Relaxante com Pedras Quentes",
      descricao: "Técnicas termais para alívio imediato de estresse e dores musculares (inclui kit básico).",
      imagem: "assets/images/massagem.jpeg",
      badge: "Novidade!"
    },
    {
      titulo: "Unhas de Gel do Básico ao Avançado",
      descricao: "Alongamentos, reparos e nail art. Inclui módulo sobre durabilidade e saúde das unhas.",
      imagem: "assets/images/unhas.jpeg"
    },
    {
      titulo: "Skincare Científico",
      descricao: "Rotinas personalizadas para cada tipo de pele: do anti-idade ao tratamento de melasma.",
      imagem: "assets/icons/skincare-icon.svg"
    }
  ];

  currentIndex = 0;
  autoPlay = true;
  private carouselInterval: any;
  // itemsPerView: number = 1; // Não é mais necessário controlar dinamicamente, pois sempre é 1

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.pauseAutoPlay();
  }

  startAutoPlay() {
    this.pauseAutoPlay();
    this.carouselInterval = setInterval(() => {
      this.nextCourse();
    }, 5000);
  }

  pauseAutoPlay() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  nextCourse() {
    this.currentIndex = (this.currentIndex + 1) % this.cursos.length; // Avança 1 por 1
  }

  prevCourse() {
    this.currentIndex = (this.currentIndex - 1 + this.cursos.length) % this.cursos.length; // Retrocede 1 por 1
  }

  goToCourse(index: number) {
    this.currentIndex = index;
    this.pauseAutoPlay();
  }

  // Removido o @HostListener e updateItemsPerView, pois o carrossel agora é sempre 1 item por vez.
}