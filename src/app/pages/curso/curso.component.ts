// src/app/pages/curso/curso.component.ts

import { Component, OnInit } from '@angular/core'; // Adicione OnInit
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.scss'
})
export class CursoComponent implements OnInit { // Implemente OnInit
  cursos = [
    {
      titulo: 'Estética Facial',
      descricao: 'Aprenda limpeza de pele, peelings e massagens faciais para rejuvenescimento e tratamento de diversas condições da pele.',
      imagem: 'assets/images/curso-facial.jpg' // Caminho completo para a imagem
    },
    {
      titulo: 'Estética Corporal',
      descricao: 'Técnicas de drenagem linfática, massagem modeladora e cuidados específicos, usando equipamentos de última geração.',
      imagem: 'assets/images/curso-corporal.jpg' // Caminho completo para a imagem
    },
    {
      titulo: 'Gestão & Empreendedorismo',
      descricao: 'Como abrir seu próprio negócio, marketing pessoal e fidelização de clientes, com foco em finanças e legislação.',
      imagem: 'assets/images/curso-empreendedorismo.jpg' // Caminho completo para a imagem
    }
  ];

  currentIndex = 0; // Começa no primeiro curso

  // Adicione um timer para o carrossel automático, se desejar
  // private carouselInterval: any;

  ngOnInit(): void {
    // Inicie o carrossel automático aqui, se desejar
    // this.startCarouselAutoPlay();
  }

  // startCarouselAutoPlay(): void {
  //   this.carouselInterval = setInterval(() => {
  //     this.nextCourse();
  //   }, 5000); // Muda a cada 5 segundos
  // }

  // ngOnDestroy(): void {
  //   // Limpe o timer ao sair da página para evitar vazamento de memória
  //   if (this.carouselInterval) {
  //     clearInterval(this.carouselInterval);
  //   }
  // }

  nextCourse() {
    this.currentIndex = (this.currentIndex + 1) % this.cursos.length;
  }

  prevCourse() {
    this.currentIndex = (this.currentIndex - 1 + this.cursos.length) % this.cursos.length;
  }
}