// src/app/pages/cadastro/cadastro.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para ngIf, ngClass etc.
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; // Importar módulos de formulário reativo
import { RouterLink } from '@angular/router'; // Para o routerLink na política de privacidade

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink], // Adicionar ReactiveFormsModule e RouterLink
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit { // Implementar OnInit para inicializar o formulário
  cadastroForm!: FormGroup; // ! indica que será inicializado no ngOnInit

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', Validators.pattern(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/)), // Validação de telefone (exemplo básico)
      lgpdConsent: new FormControl(false, Validators.requiredTrue) // Validação para o checkbox de LGPD
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Formulário enviado com sucesso!', this.cadastroForm.value);
      // Aqui você enviaria os dados para um serviço/backend (simulado ou real)
      alert('Cadastro realizado com sucesso! Em breve entraremos em contato.');
      this.cadastroForm.reset(); // Limpa o formulário após o envio
      // Opcional: reiniciar o estado do checkbox
      this.cadastroForm.get('lgpdConsent')?.setValue(false);
    } else {
      console.log('Formulário inválido!');
      // Marcar todos os campos como "touched" para exibir mensagens de erro
      this.cadastroForm.markAllAsTouched();
      alert('Por favor, preencha todos os campos obrigatórios corretamente e aceite a política de privacidade.');
    }
  }
}