// src/app/components/navbar/navbar.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], 
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
    isScrolled = false; 

   
    @HostListener ('window:scroll', [])
    onWindowScroll() {
      this.isScrolled = window.scrollY > 50;
    }

    ngOnInit() {
      this.onWindowScroll();
    }
}