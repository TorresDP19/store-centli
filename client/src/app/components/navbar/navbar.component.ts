import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    (function () {
      $('.menu-wrapper').on('click', function () {
        $('.hamburger-menu').toggleClass('animate');
      });
    })();

  }

}