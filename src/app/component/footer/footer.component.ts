import { Component, NgZone } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  formulario: FormGroup;

  constructor(private http: HttpClient, private zone: NgZone) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      captchaToken: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;

      // Ejecutar reCAPTCHA v3 para la acción "submit"
      (window as any).grecaptcha.ready(() => {
        (window as any).grecaptcha.execute('6LfQdWQrAAAAANdBB6E0Jr2N5GZp7EAsIhRY9yC_', { action: 'submit' }).then((token: string) => {
          const emailPayload = {
            name: formData.nombre,
            lastname: formData.apellidos,
            email: formData.correo,
            phone: formData.telefono,
            message: formData.descripcion,
            captchaToken: token
          };

          this.sendEmail(emailPayload).subscribe(
            response => {
              console.log('📧 Correo enviado con éxito:', response);
              alert('Tu mensaje fue enviado con éxito');
              this.formulario.reset();
            },
            error => {
              console.error('❌ Error al enviar correo:', error);
              alert('Hubo un error al enviar tu mensaje, intenta de nuevo más tarde');
            }
          );
        });
      });
    } else {
      alert('Por favor, completa todos los campos correctamente');
    }
  }

  sendEmail(data: any): Observable<any> {
    const apiUrl = 'https://webtcformulario.azurewebsites.net/api/SendEmail?'; // Cambia a tu URL real
    return this.http.post(apiUrl, data);
  }
}
