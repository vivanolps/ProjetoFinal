import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent {
  cursos = [
    {
      titulo: 'Limpeza de Pele Profissional',
      descricao: 'Domine técnicas para acne, oleosidade e rejuvenescimento com certificação internacional.',
      imagem: 'assets/cursos/limpeza-pele.jpg'
    },
    {
      titulo: 'Design de Sobrancelhas com Henna',
      descricao: 'Método perfeito para formatos que realçam o rosto + curso de henna inclusivo.',
      imagem: 'assets/cursos/sobrancelha-henna.jpg'
    },
    {
      titulo: 'Unhas de Gel do Básico ao Avançado',
      descricao: 'Alongamentos, reparos e nail art. Inclui módulo sobre durabilidade e saúde das unhas.',
      imagem: 'assets/cursos/unhas-gel.jpg'
    }
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.cursos.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.cursos.length) % this.cursos.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  isCurrentCourse(index: number): boolean {
    return index === this.currentIndex;
  }
}
