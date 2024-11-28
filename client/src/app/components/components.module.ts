// src/app/components/components.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarLearningComponent } from './navbar-learning/navbar-learning.component';
import { FooterLearningComponent } from './footer-learning/footer-learning.component';
import { NavbarStoreComponent } from './navbar-store/navbar-store.component';
import { FooterStoreComponent } from './footer-store/footer-store.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavbarLearningComponent,
    FooterLearningComponent,
    NavbarStoreComponent,
    FooterStoreComponent,
    AboutusComponent,
    ContactoComponent,
    PromocionesComponent,
    PreguntasComponent,
    TutorialComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NavbarLearningComponent,
    FooterLearningComponent,
    NavbarStoreComponent,
    FooterStoreComponent,
    AboutusComponent,
    ContactoComponent,
    TutorialComponent  // Exporta TutorialComponent aquí
  ]
})
export class ComponentsModule { }
