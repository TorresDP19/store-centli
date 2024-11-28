import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {
  invoiceData = {
    rfc: '',
    razonSocial: '',
    direccionFiscal: '',
    emailFactura: '',
    deseaFactura: false
  };
  submitInvoiceData() {
    if (this.invoiceData.deseaFactura) {
      // Genera el contenido de la factura con los datos
      const facturaHTML = `
        <h1>Factura</h1>
        <p><strong>RFC:</strong> ${this.invoiceData.rfc}</p>
        <p><strong>Razón Social:</strong> ${this.invoiceData.razonSocial}</p>
        <p><strong>Dirección Fiscal:</strong> ${this.invoiceData.direccionFiscal}</p>
        <p><strong>Correo Electrónico:</strong> ${this.invoiceData.emailFactura}</p>
      `;

      // Crear una nueva ventana para mostrar la factura
      const facturaWindow = window.open('', '_blank');
      facturaWindow.document.write(facturaHTML);
      facturaWindow.document.close();

      // Lanza la impresión en la nueva ventana
      facturaWindow.print();
    } else {
      alert("No has solicitado factura.");
    }
  }
}