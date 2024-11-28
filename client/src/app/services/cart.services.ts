import { Injectable } from '@angular/core';
import { Products } from '../models/products_model';
import { ProductsServices } from '../services/products.services';

@Injectable({
    providedIn: 'root'
})

export class CartServices {

    constructor() {}

    products = [];

    addToCart(addedProduct) {
        this.products.push(addedProduct);
        this.saveCart();
    }

    saveCart(): void {
        localStorage.setItem('cart_items', JSON.stringify(this.products));
    }

    loadCart(): void {
        this.products = JSON.parse(localStorage.getItem("cart_items")) ?? [];
    }

    getProducts() {
        return this.products;
    }

    productsInCart(product): boolean {
        return this.products.findIndex(o => o.id === product._id) > -1;
    }

    removeProduct(product) {
        const index = this.products.findIndex(o => o.id === product.id);
    
        if (index > -1) {
          this.products.splice(index, 1);
          this.saveCart();
          alert("El producto que seleccionaste se eliminó con éxito 😊");
        }
    }

    clearCart(products) {
        if(localStorage.getItem("cart_items") === null) {
            alert("Tu carrito de compras se encuentra vació ☹");
        } else {
            this.products = [];
            localStorage.removeItem("cart_items")
            alert("Tu carrito de compras se limpió con éxito 😊");
        }
    }

}