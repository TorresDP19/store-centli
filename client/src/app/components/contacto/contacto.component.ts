import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  formSent: boolean = false; // Nueva propiedad para saber si el formulario se envió correctamente

  onSubmit(): void {
    if (this.contact.name && this.contact.email && this.contact.message) {
      // Simular el envío del formulario
      console.log('Formulario enviado:', this.contact);

      // Aquí puedes agregar tu lógica para enviar los datos (por ejemplo, usando un servicio HTTP)

      // Establecer formSent a true para mostrar el mensaje de éxito
      this.formSent = true;

      // Limpiar el formulario después de enviarlo (opcional)
      this.contact = { name: '', email: '', message: '' };
    } else {
      console.log('Formulario no válido');
    }
  }

  // Opcional: Si deseas ocultar el mensaje de éxito después de un tiempo
  resetFormStatus() {
    setTimeout(() => {
      this.formSent = false; // Restablecer el estado después de 5 segundos
    }, 5000); // 5 segundos
  }
}
