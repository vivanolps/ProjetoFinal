// src/app/cadastro/cadastro.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf, *ngFor
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // IMPORTE ESTES
import { RouterLink } from '@angular/router'; // Para o link da política de privacidade

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // Adicione ReactiveFormsModule aqui
    RouterLink // Para o link da política de privacidade
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup; // Declaração do FormGroup

  // Injetar FormBuilder no construtor
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/)]], // Exemplo com regex para (XX) XXXXX-XXXX
      lgpdConsent: [false, Validators.requiredTrue] // Valida que o checkbox deve ser true
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      console.log('Formulário de cadastro válido!', this.cadastroForm.value);
      alert('Cadastro de interesse enviado com sucesso!'); // Feedback visual
      this.cadastroForm.reset(); // Reseta os campos do formulário
      // Opcional: garantir que o checkbox seja desmarcado ao resetar
      this.cadastroForm.get('lgpdConsent')?.setValue(false);

    } else {
      console.log('Formulário de cadastro inválido.');
      this.cadastroForm.markAllAsTouched();
    }
  }

  get f() { return this.cadastroForm.controls; }
}