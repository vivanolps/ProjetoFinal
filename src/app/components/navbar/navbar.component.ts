// src/app/components/navbar/navbar.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Importar RouterLink e RouterLinkActive

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], 
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
    isScrolled = false; //contrala o estado do scroll

    //monitora o evento scroll do acbecalho
    @HostListener ('window:scroll', [])
    onWindowScroll() {
      this.isScrolled = window.scrollY > 50;
    }

    ngOnInit() {
      this.onWindowScroll();
    }
}