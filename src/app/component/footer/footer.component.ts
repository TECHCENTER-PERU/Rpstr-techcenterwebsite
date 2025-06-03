import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface FormData {
  nombre: string;
  apellidos: string;
  correo: string;
  telefono: string;
  descripcion: string;
}


@Component({
  selector: 'app-footer',
  imports: [ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  // Crear el formulario reactivo
  formulario: FormGroup;

  constructor() {
    // Inicializar el formulario
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
    });
  }

  // Función para enviar los datos al Webhook
  sendDataToWebhook(data: FormData): void {
    fetch('https://prod-22.brazilsouth.logic.azure.com:443/workflows/8805143ea814475bb569639c06e8519a/triggers/manual/paths/invoke?api-version=2016-06-01', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log('Éxito:', data))
    .catch(error => console.error('Error:', error));
  }

  // Función para manejar el envío del formulario
  handleSubmit(): void {
    if (this.formulario.valid) {
      const formData: FormData = this.formulario.value;
      this.sendDataToWebhook(formData);
    } else {
      console.error('Formulario no válido');
    }
  }
}