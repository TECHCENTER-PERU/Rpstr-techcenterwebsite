import { Component, AfterViewInit, NgZone } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {
  captchaWidgetId!: number;
  formulario: FormGroup;

  constructor(private http: HttpClient, private zone: NgZone) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
    });

    // Expone la función de renderizado para que el archivo externo la pueda usar
    (window as any).recaptchaRenderCallback = () => {
      this.zone.run(() => {
        this.captchaWidgetId = (window as any).grecaptcha.render('recaptcha-element', {
          sitekey: '6LcLIWQrAAAAABb40Lz0V7owDZFFpLeDoxzU7EtK'
        });
      });
    };

    // Expone la zona de Angular para que el archivo externo pueda usarla
    (window as any).ngZoneRef = this.zone;
  }

  ngAfterViewInit() {
    // Nada que hacer aquí; la renderización ocurre vía callback externo
  }

  onSubmit() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;

      // Obtener token con el ID explícito del widget
      const captchaToken = (window as any).grecaptcha.getResponse(this.captchaWidgetId);

      if (!captchaToken) {
        alert('Por favor, verifica el reCAPTCHA antes de enviar.');
        return;
      }

      const emailPayload = {
        name: formData.nombre,
        lastname: formData.apellidos,
        email: formData.correo,
        phone: formData.telefono,
        message: formData.descripcion,
        captchaToken: captchaToken
      };

      this.sendEmail(emailPayload).subscribe(
        response => {
          console.log('📧 Correo enviado con éxito:', response);
          alert('Tu mensaje fue enviado con éxito');
          this.formulario.reset();
          (window as any).grecaptcha.reset(this.captchaWidgetId);
        },
        error => {
          console.error('❌ Error al enviar correo:', error);
          alert('Hubo un error al enviar tu mensaje, intenta de nuevo más tarde');
        }
      );
    } else {
      alert('Por favor, completa todos los campos correctamente');
    }
  }

  sendEmail(data: any): Observable<any> {
    const apiUrl = 'https://webtcformulario.azurewebsites.net/api/SendEmail?'; // Cambia a tu URL real
    return this.http.post(apiUrl, data);
  }
}
