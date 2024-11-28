import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Users } from '../../models/users_model';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServices } from '../../services/users.services';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss'],
  providers: [ UsersServices ]
})

export class LearningComponent implements OnInit {

  public identity;
  public token;
  public errorMessage;
  public users: Users;

  constructor(
    private Title:Title,
    private usersservices:UsersServices,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.Title.setTitle('Iniciar sesión - Centli');
    this.users = new Users('','','','','ROLE_USER','','','','','');
  }

  ngOnInit(): void {
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
  }

  public onSubmit(f: NgForm) {
    
    console.log("---> Realizando petición HTTP al servidor...");

    this.usersservices.loginAccount(this.users).subscribe(
      response => {

        console.log("THIS USERS", this.users);
        

        let identity = response.INFO_ACCOUNT;
        this.identity = identity;

        console.log("---> Creando la identidad del usuario...");

        console.log(identity);
        

        if(!this.identity._id) {
          alert("Se encontrarón problemas para generar la IDENTIDAD del usuario");
          console.log("---> Hubo un problema al generar la identidad del usuario.");
        } else {
          localStorage.setItem('identity', JSON.stringify(identity));

          this.usersservices.loginAccount(this.users, 'true').subscribe(
            response => {

              let token = response.token;
              this.token = token;

              
              console.log("---> Token creado con exito.");

              if(this.token.length <= 0) {
                alert("Se encontrarón problemas para generar el TOKEN del usuario");
                console.log("---> Hubo un problema al generar el token del usuario.");
              } else {
                location.reload();
                this.router.navigate(['/inicio']);
                localStorage.setItem('token', token);
              }

            },
            error => {

              var errorMessage = <any>error;
      
              if(errorMessage != null) {
                  this.errorMessage = error.error.message;
                  console.log(error);
              } 
            }
          )

        }
        
        
      },
      error => {

        var errorMessage = <any>error;

        if(errorMessage != null) {
            this.errorMessage = error.error.message;
            console.log(error);
        } 
      }
    )
    
  }

}
