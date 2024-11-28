import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Title } from '@angular/platform-browser';


import { GLOBAL } from "../../../services/GLOBAL";
import { UsersServices } from "../../../services/users.services";
import { ProductsServices } from "../../../services/products.services";
import { Products } from "../../../models/products_model";


@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss'],
  providers: [ ProductsServices, UsersServices ]
})
export class NewproductComponent implements OnInit {

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
    private router: Router
  ) {
    this.url = GLOBAL.url;
    this.Title.setTitle('Añadir producto - Centli');
    this.products = new Products ('','','','','','','');
  }

  ngOnInit(): void {

    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();

  }

  public onSubmit(f:NgForm) {
    this.productsservices.addNewProduct(this.token, this.products).subscribe(
      response => {
        if(!response.INFO_PRODUCT) {
          this.alertMessage = 'Se encontrarón problemas en el servidor.'
        } else {
          if(!this.filesToUpload) {  
            this.alertMessage = 'Se añadió el producto, pero no se adjuntó imagen.'
          } else {
            this.makeFileRequest(this.url + '/add-image/' + response.INFO_PRODUCT._id, [] , this.filesToUpload).then(
              (result: any) =>{
                this.products.image = result.image;
                this.alertMessage = 'Producto creado con exito!';
                this.products = response.INFO_PRODUCT;        
              }
            );
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
