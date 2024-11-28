import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CurrencyPipe } from "@angular/common";
import { GLOBAL } from '../../../services/GLOBAL';
import { UsersServices } from '../../../services/users.services';
import { ProductsServices } from "../../../services/products.services";
import { Products } from "../../../models/products_model";
import { CartServices } from '../../../services/cart.services';
import { Users } from 'src/app/models/users_model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [UsersServices, ProductsServices]
})
export class CartComponent implements OnInit {

  @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef>;
  @ViewChildren("subTotalWrap_existing") subTotalItems_existing: QueryList<ElementRef>;

  public identity;
  public token;
  public url: string;
  public users: Users;

  // Agregamos invoiceData para almacenar la información de la factura
  invoiceData = {
    rfc: '',
    razonSocial: '',
    direccionFiscal: '',
    emailFactura: '',
    deseaFactura: false
  };

  constructor(
    private Title: Title,
    private productsservices: ProductsServices,
    private usersservices: UsersServices,
    private route: ActivatedRoute,
    private router: Router,
    public cartServices: CartServices,
    private currencyPipe: CurrencyPipe
  ) {
    this.url = GLOBAL.url;
    this.Title.setTitle("Cart - Centli");
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
  }

  MyProducts = [];

  get total() {
    return this.MyProducts.reduce(
      (sum, x) => ({
        qtyTotal: 1,
        price: sum.price + x.qtyTotal * x.price
      }),
      { qtyTotal: 1, price: 0 }
    ).price;
  }

  public confirm;

  toDoPay(MyProducts) {
    var street = (<HTMLInputElement>document.querySelector('.street')).value;
    if (street != null) {
      alert("Tu pedido se realizó con éxito, los productos llegarán dentro de 3 a 5 días.");
      this.cartServices.clearCart(MyProducts);
      this.MyProducts = [...this.cartServices.getProducts()];
    } else {
      alert("Debes colocar a donde se va enviar tu producto.")
    }
  }

  // Función para manejar el cambio en el subtotal
  changeSubtotal(product, index) {
    const qty = product.qtyTotal;
    const amt = product.price;
    const subTotal = amt * qty;
    const subTotal_converted = this.currencyPipe.transform(subTotal, "MX");

    this.subTotalItems.toArray()[index].nativeElement.innerHTML = subTotal_converted;
    this.cartServices.saveCart();
  }

  // Función para eliminar un producto del carrito
  removeFromCart(product) {
    this.cartServices.removeProduct(product);
    this.MyProducts = this.cartServices.getProducts();
  }

  // Función para limpiar el carrito
  clearCart(MyProducts) {
    this.cartServices.clearCart(MyProducts);
    this.MyProducts = [...this.cartServices.getProducts()];
  }

  ngOnInit(): void {
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
    this.cartServices.loadCart();
    this.MyProducts = this.cartServices.getProducts();
  }

  // Método para enviar los datos de la factura
  submitInvoiceData() {
    if (this.invoiceData.deseaFactura) {
      // Validar que todos los campos de la factura estén completos
      if (this.invoiceData.rfc && this.invoiceData.razonSocial && this.invoiceData.direccionFiscal && this.invoiceData.emailFactura) {
        // Aquí iría la lógica para enviar los datos al servidor, por ejemplo
        console.log('Datos para la factura:', this.invoiceData);
        alert('Factura solicitada con éxito');
      } else {
        alert('Por favor, completa todos los campos requeridos para la factura');
      }
    } else {
      alert('No has solicitado factura');
    }
  }
}
