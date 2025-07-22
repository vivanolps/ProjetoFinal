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
      descricao: "Aprenda as técnicas mais eficazes de limpeza de pele e inicie sua carreira na estética com segurança e profissionalismo. Neste curso, você será capacitado(a) para realizar atendimentos com excelência, entendendo a fundo os tipos de pele, os produtos indicados, protocolos de higienização e extração de impurezas, além de cuidados pré e pós-procedimento. Certificado incluso, com conteúdo atualizado e baseado em estudos confiáveis.",
      imagem: "assets/images/spar.jpeg",
      badge: "Mais Procurado!"
    },
    {
      titulo: "Design de Sobrancelhas com Henna",
      descricao: "Transforme olhares com técnicas profissionais de design de sobrancelhas e aplicação de henna. Neste curso completo, você aprenderá a modelar sobrancelhas com precisão, respeitando o formato do rosto, e a utilizar a henna de forma segura e duradoura para realçar a beleza natural de cada cliente. Certificado incluso, com conteúdo atualizado e baseado em estudos confiáveis.",
      imagem: "assets/images/sombrancelha.jpeg"
    },
    {
      titulo: "Massagem Relaxante com Pedras Quentes",
      descricao: "Aprenda uma das técnicas mais procuradas nos spas e centros de bem-estar! A massagem com pedras quentes combina o toque terapêutico da massagem relaxante com o poder do calor para aliviar tensões, melhorar a circulação e proporcionar equilíbrio físico e emocional. Certificado incluso, com conteúdo atualizado e baseado em estudos confiáveis.",
      imagem: "assets/images/massagem.jpeg",
      badge: "Novidade!"
    },
    {
      titulo: "Unhas de Gel do Básico ao Avançado",
      descricao: "Domine a técnica de unhas em gel desde os fundamentos até os acabamentos profissionais mais modernos. Este curso completo é ideal para quem está começando na área da beleza ou deseja se especializar, oferecendo serviços de alto padrão e com resultados duradouros. Certificado incluso, com conteúdo atualizado e baseado em estudos confiáveis.",
      imagem: "assets/images/unhas.jpeg"
    },
    {
      titulo: "Skincare Científico",
      descricao: "Entenda a ciência por trás dos cuidados com a pele e aprenda a montar rotinas de skincare personalizadas e eficazes. Neste curso, você vai além da estética, explorando ingredientes ativos, formulações e o funcionamento da pele com base em evidências científicas. Certificado incluso, com conteúdo atualizado e baseado em estudos confiáveis.",
      imagem: "assets/images/esteticacientifica.jpeg"
    }
  ];

  currentIndex = 0;
  autoPlay = true;
  private carouselInterval: any;
  

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