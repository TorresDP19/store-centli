// src/app/components/tutorial/tutorial.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  contenedores = ['Cont_1', 'Cont_2', 'Cont_3', 'Cont_4', 'Cont_5', 'Cont_6', 'Cont_7', 'Cont_8', 'Cont_9', 'Cont_10', 'Cont_11'];
  indiceActual = 0;

  constructor() { }

  ngOnInit(): void {
    this.mostrarCont(this.indiceActual);
  }

  mostrarCont(indice: number): void {
    this.indiceActual = indice;
  }

  cambiarCont(direccion: number): void {
    this.indiceActual = (this.indiceActual + direccion + this.contenedores.length) % this.contenedores.length;
  }

  obtenerTitulo(indice: number): string {
    const titulos = [
      'Cómo puede registrarse e ingresar el cliente a la aplicación web o móvil',
      'Cómo iniciar sesión con nuestra cuenta creada en Centli!',
      'Cómo puedo acceder al carrito de compras y realizar una compra',
      'Qué tiene que hacer para obtener una factura',
      'Cómo puedo saber sobre los métodos de pago',
      '¿Cómo puedo saber las tarifas y lugares para envío?',
      '¿Cómo puede conocer los datos de la empresa?',
      'Cómo puede acceder para conocer las políticas de privacidad, cancelación y devolución',
      'Cómo puede acceder a las redes sociales de la empresa',
      'Cómo puedo saber si hay promociones o descuentos',
      '¿Cómo puedo contactar a la empresa para resolver mis dudas?'
    ];
    return titulos[indice] || '';
  }
}
