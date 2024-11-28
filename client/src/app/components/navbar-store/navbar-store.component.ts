import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Users } from '../../models/users_model';
import { UsersServices } from '../../services/users.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-store',
  templateUrl: './navbar-store.component.html',
  styleUrls: ['./navbar-store.component.scss'],
  providers: [ UsersServices ]
})
export class NavbarStoreComponent implements OnInit {

  public identity;
  public token;
  public users: Users;
  statusnavBar: boolean = false;

  constructor(
    private usersservices:UsersServices,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
  }

  ngOnInit(): void {
  
    AOS.init({
      once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
    //once: false // "false" --> Animaciones repetidas al hacer scroll.
   });
   
  }

  
  navbar() {
    this.statusnavBar = !this.statusnavBar;
  }

  logout() {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.removeItem('cart_items');
    localStorage.clear();

    this.identity = null;
    this.identity = null;

    this.router
    this.router.navigate(['/learning']);
    location.reload();
  }

}
