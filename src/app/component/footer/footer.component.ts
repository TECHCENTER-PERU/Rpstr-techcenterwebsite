import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


  // formulario: FormGroup;

  // constructor(private http: HttpClient) {
  //   this.formulario = new FormGroup({
  //     nombre: new FormControl('', [Validators.required]),
  //     apellidos: new FormControl('', [Validators.required]),
  //     correo: new FormControl('', [Validators.required, Validators.email]),
  //     telefono: new FormControl('', [Validators.required]),
  //     descripcion: new FormControl('', [Validators.required]),
  //   });
  // }

  // onSubmit() {
  //   if (this.formulario.valid) {
  //     const formData = this.formulario.value;

  //     this.sendEmail(formData).subscribe(
  //       response => {
  //         console.log('Correo enviado con éxito:', response);
  //         alert('Tu mensaje fue enviado con éxito');
  //         this.formulario.reset();
  //       },
  //       error => {
  //         console.error('Error al enviar correo:', error);
  //         alert('Hubo un error al enviar tu mensaje, intenta de nuevo más tarde');
  //       }
  //     );
  //   } else {
  //     alert('Por favor, completa todos los campos correctamente');
  //   }
  // }

    formulario: FormGroup;

  constructor(private http: HttpClient) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;

      // Transformar los datos a los campos requeridos por Azure Function
      const emailPayload = {
        name: formData.nombre,
        email: formData.correo,
        message: formData.descripcion
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
    } else {
      alert('Por favor, completa todos los campos correctamente');
    }
  }

  sendEmail(data: any): Observable<any> {
    const apiUrl = 'https://webtcformulario.azurewebsites.net/api/SendEmail?'; // Cambia esto a la URL de tu función de Azure
    return this.http.post(apiUrl, data);
  }
}