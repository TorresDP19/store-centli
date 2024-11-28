import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Title } from "@angular/platform-browser";

import { GLOBAL } from "../../../services/GLOBAL";
import { UsersServices } from "../../../services/users.services";
import { ProductsServices } from "../../../services/products.services";
import { Products } from "../../../models/products_model";
import { CartServices } from '../../../services/cart.services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ ProductsServices, UsersServices ]
})
export class ProductComponent implements OnInit {

  public products:Products;
  public identity;
  public token;
  public url: string;
  public alertMessage;

  constructor(
    private Title: Title,
    private productsservices: ProductsServices,
    private usersservices:UsersServices,
    private route: ActivatedRoute,
    private router: Router,
    public cartServices: CartServices
  ) { 
    this.Title.setTitle("Product - Centli");
    this.products = new Products ('','','','','','','');
    this.url = GLOBAL.url;
  }

  
  MyProducts = [];

  addToCart(product) {
    if(!this.cartServices.productsInCart(product)) {
      product.qtyTotal = 1;
      this.cartServices.addToCart(product);
      this.MyProducts = [...this.cartServices.getProducts()];
      alert("El producto se añadió con éxito a tu carrito 😃");
    }
  }

  ngOnInit(): void {
    this.getProductAlone();
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
    this.cartServices.loadCart();
    this.MyProducts = this.cartServices.getProducts();
  }

  login() {
    this.router.navigate(['/learning']);
  }

  getProductAlone() {
    this.route.params.forEach((params: Params) => {

      let id = params['id'];

      this.productsservices.getProduct(id).subscribe(
        response => {
          if(response.id) {
            alert("El producto que buscas no existe.");
          }
          else {
            this.products = response.product;    
          }
        },
        error => {
          console.log(error);
        }
      )

    });
  }

  public confirm;

  onCancelProduct() {
    this.confirm = null;
    document.querySelector(".FirstSection").scrollIntoView({behavior: "smooth"});
  }

  onDeleteConfirm(id) {
    this.confirm = id;
  }


  onDeleteProduct(id) {
    this.productsservices.deleteProduct(this.token, id).subscribe(
      response => {
        if(!response.productsRemoved) {
          alert("Se encontraron problemas en el servidor.");
        } 
        else if(response.productsRemoved) {
          alert("El producto se eliminó con éxito.");
          this.router.navigate(['/store']);
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  public update;

  onUpdateConfirm(id) {
    this.update = id;
  }

  onUpdateCancel() {
    this.update = null;
    document.querySelector(".FirstSection").scrollIntoView({behavior: "smooth"});
  }

  onUpdateProduct(id) {
    this.productsservices.updateProduct(this.token, id, this.products).subscribe(
      response => {
        if(!response.INFO_PRODUCT) {
          alert("Se encontraron problemas en el servidor.");
        } else {
          if(!this.filesToUpload) {
            this.products = response.INFO_PRODUCT;
            this.router.navigate(['/store']);
            alert("El producto se modificó con éxito.");
          } else {
            this.makeFileRequest(this.url + '/add-image/' + response.INFO_PRODUCT._id, [], this.filesToUpload),
            (result: any) => {
              this.products.image = result.image;
              this.alertMessage = 'Producto modificado con exito...';
              alert("El producto fue modificado con exito.");
              this.products = response.INFO_PRODUCT;
              this.router.navigate(['/store']);
            }
          }
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  public filesToUpload: Array<File>;

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;    
    console.log(this.filesToUpload);
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    
    var token = this.token;

    return new Promise(function(resolve, reject){
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      for(var i = 0; i < files.length; i++) {
        formData.append('image', files[i], files[i].name);
      }

      xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
          if(xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);

    });

  }

}