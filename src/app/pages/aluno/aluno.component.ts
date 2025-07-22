import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  standalone: true,
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AlunoComponent {
  recursoAtivo = 'cursos';
  emailSuporte = 'suporte@meuestetica.com';
  suporteForm: FormGroup;
  formEnviado = false;

  constructor(private fb: FormBuilder) {
    this.suporteForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      assunto: ['', Validators.required],
      conteudo: ['', Validators.required],
    });
  }

  campoInvalido(campo: string): boolean {
    const controle = this.suporteForm.get(campo);
    return !!(controle && controle.touched && controle.invalid);
  }

  enviarFormularioSuporte() {
    if (this.suporteForm.invalid) {
      this.suporteForm.markAllAsTouched();
      return;
    }

    const dados = this.suporteForm.value;
    console.log('Dados enviados:', dados);

    this.formEnviado = true;
    this.suporteForm.reset();

    setTimeout(() => {
      this.formEnviado = false;
    }, 5000);
  }

  ativarRecurso(recurso: string) {
    this.recursoAtivo = recurso;
    this.formEnviado = false;
  }
}