import { Component, OnInit, HostListener, OnDestroy } from '@angular/core'; // Importado HostListener e OnDestroy
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit, OnDestroy { // Implementado OnDestroy
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
      imagem: "assets/icons/skincare-icon.svg" // Se for SVG, certifique-se que o CSS de imagem o renderize
    }
  ];

  currentIndex = 0;
  autoPlay = true;
  private carouselInterval: any;
  itemsPerView: number = 3; // Variável para controlar quantos itens são exibidos por vez

  constructor() {
    this.updateItemsPerView(window.innerWidth); // Define o valor inicial baseado na largura da tela
  }

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() { // Limpa o intervalo ao destruir o componente
    this.pauseAutoPlay();
  }

  startAutoPlay() {
    this.pauseAutoPlay(); // Garante que não há múltiplos intervalos
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
    // Avança pelo número de itens por vista
    this.currentIndex = (this.currentIndex + this.itemsPerView) % this.cursos.length;
    // Se avançar demais e não houver cursos suficientes para preencher a última "página",
    // volta para o início ou ajusta para mostrar os últimos itens.
    if (this.currentIndex + this.itemsPerView > this.cursos.length && this.cursos.length > this.itemsPerView) {
        this.currentIndex = 0; // Volta para o início se não houver mais "páginas" completas
    }
    // Lógica alternativa: se quiser que ele pare no último item e não volte
    // this.currentIndex = Math.min(this.currentIndex + this.itemsPerView, this.cursos.length - this.itemsPerView);
    // if (this.currentIndex < 0) this.currentIndex = 0; // Previne ir para um índice negativo no início
  }

  prevCourse() {
    // Retrocede pelo número de itens por vista
    this.currentIndex = (this.currentIndex - this.itemsPerView + this.cursos.length) % this.cursos.length;
    // Ajuste para evitar índices negativos e garantir que sempre mostre a "página" anterior
    if (this.currentIndex < 0 || this.currentIndex + this.itemsPerView > this.cursos.length) {
        this.currentIndex = this.cursos.length - this.itemsPerView;
        if (this.currentIndex < 0) this.currentIndex = 0; // Caso haja menos itens que itemsPerView
    }
  }


  goToCourse(index: number) {
    // Quando clicar no dot, vai para o início daquele "bloco" de cards
    this.currentIndex = index;
    // Pausa o autoplay ao interagir manualmente
    this.pauseAutoPlay();
  }

  // Listener para atualizar itemsPerView quando a tela muda de tamanho
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateItemsPerView(event.target.innerWidth);
  }

  private updateItemsPerView(width: number) {
    if (width <= 768) { // Celulares
      this.itemsPerView = 1;
    } else if (width <= 992) { // Tablets
      this.itemsPerView = 2;
    } else { // Desktops
      this.itemsPerView = 3;
    }
    // Garante que o currentIndex seja um múltiplo de itemsPerView ou esteja dentro dos limites
    this.currentIndex = Math.floor(this.currentIndex / this.itemsPerView) * this.itemsPerView;
    if (this.currentIndex + this.itemsPerView > this.cursos.length && this.cursos.length > 0) {
      this.currentIndex = this.cursos.length - this.itemsPerView;
      if (this.currentIndex < 0) this.currentIndex = 0;
    }
  }
}