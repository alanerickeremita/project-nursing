import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatIconButton
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  @ViewChild('mensagemCard') mensagemCardRef!: ElementRef;

  feedbackForm: FormGroup;
  mostrarMensagem = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.feedbackForm = this.fb.group({
      texto: ['']
    });
  }

  enviarFeedback() {
    const feedback = this.feedbackForm.value;
    this.http.post('http://localhost:3000/sugestoes', feedback).subscribe(() => {
      this.feedbackForm.reset();
      this.mostrarMensagem = true;

      // Espera a view atualizar, depois foca o card
      setTimeout(() => {
        this.mensagemCardRef?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // opcional: this.mensagemCardRef?.nativeElement.focus();
      });
    });
  }

  fecharMensagem() {
    this.mostrarMensagem = false;
  }
}
