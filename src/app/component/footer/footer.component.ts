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
  styleUrls: ['./footer.component.css']
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


}
