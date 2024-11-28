import { Component, OnInit } from '@angular/core';
import * as AOS from '../../../../node_modules/aos/dist/aos.js';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle('Centli | Totopos de la comunidad: ¡Invierte en sabor local!')
  }

  ngOnInit(): void {
  
    AOS.init({
      once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
    //once: false // "false" --> Animaciones repetidas al hacer scroll.
   })

  }

}
