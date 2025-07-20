import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private autenticado = false;

  login(email: string, senha: string): boolean {
    // Usuário e senha fixos só para teste
    if (email === 'aluna@estetica.com' && senha === '123456') {
      this.autenticado = true;
      return true;
    }
    return false;
  }

  logout() {
    this.autenticado = false;
  }

  estaAutenticado(): boolean {
    return this.autenticado;
  }
}