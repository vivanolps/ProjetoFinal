import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-suporte',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.scss']
})
export class SuporteComponent {
  suporteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.suporteForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.suporteForm.valid) {
      console.log('Formulário de suporte enviado:', this.suporteForm.value);
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      this.suporteForm.reset();
    } else {
      this.suporteForm.markAllAsTouched();
    }
  }
}