import { Component, OnInit } from '@angular/core';
import { UsersServices } from "../../../services/users.services";
import { Users } from "../../../models/users_model";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgForm } from "@angular/forms";
import { GLOBAL } from '../../../services/GLOBAL';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [ UsersServices ]
})
export class SigninComponent implements OnInit {

  public url: string;
  public users: Users;
  public alertMessage: string;
  public termsAccepted: boolean = false; // Nueva propiedad para controlar los términos

  constructor(private route: ActivatedRoute, private router: Router, private usersServices: UsersServices) {
    this.url = GLOBAL.url;
    this.users = new Users ('','','','','','','','','','');
  }

  ngOnInit(): void {}

  public onSubmit(f: NgForm) {
    if (!this.termsAccepted) {  // Verificar si los términos fueron aceptados
      this.alertMessage = 'Por favor, acepta los términos y condiciones.';
      return;
    }

    this.usersServices.newAccount(this.users).subscribe(
      response => {
        if (!response.INFO_ACCOUNT) {
          this.alertMessage = 'Se encontraron problemas en el servidor.';
        } else {
          this.alertMessage = 'Cuenta creada con éxito, ahora ya puedes iniciar sesión.';
          this.users = response.INFO_ACCOUNT;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
