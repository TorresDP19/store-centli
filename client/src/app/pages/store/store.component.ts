import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UsersServices } from '../../services/users.services';
import { ProductsServices } from '../../services/products.services';
import { Users } from '../../models/users_model';
import { Products} from '../../models/products_model';
import { GLOBAL } from '../../services/GLOBAL';
import * as $ from "jquery";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [ ProductsServices, UsersServices ]
})
export class StoreComponent implements OnInit {

  public identity;
  public token;
  public users: Users;
  public products: Products[];
  public searchTerm: string;
  public url: string;
  public next_page;
  public prev_page;

  constructor(
    private Title: Title,
    private usersservices:UsersServices,
    private productsservices: ProductsServices,
    private route: ActivatedRoute,
    private router: Router
    
  ) {
    this.Title.setTitle('Tienda - Centli');
    this.next_page = 1;
    this.prev_page = 1;  
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();

    this.getProducts();

  }

  getProducts() {
    this.route.params.forEach((params: Params) => {

      let page = + params['page'];
      if(!page){
        page = 1;
      } else {
        
        this.next_page = page + 1;
        this.prev_page = page - 1;

        if(this.prev_page == 0) {
          this.prev_page = 1;
        }
      }

      this.productsservices.getProducts(page).subscribe(
        response => {
          if(response.page) {
            this.router.navigate(['/']);
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

}
