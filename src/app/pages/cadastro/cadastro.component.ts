// src/app/cadastro/cadastro.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngIf, *ngFor
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    RouterLink 
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup; 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/)]], 
      lgpdConsent: [false, Validators.requiredTrue] 
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      console.log('Formulário de cadastro válido!', this.cadastroForm.value);
      alert('Cadastro de interesse enviado com sucesso!'); 
      this.cadastroForm.reset(); 
      this.cadastroForm.get('lgpdConsent')?.setValue(false);

    } else {
      console.log('Formulário de cadastro inválido.');
      this.cadastroForm.markAllAsTouched();
    }
  }

  get f() { return this.cadastroForm.controls; }
}