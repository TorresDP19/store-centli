function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function _src_app_pages_home_homeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/pages/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var HomeRoutingModule = /*#__PURE__*/_createClass(function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    });

    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function _src_app_pages_home_homeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../node_modules/aos/dist/aos.js */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var _c0 = function _c0() {
      return ["/learning"];
    };

    var _c1 = function _c1() {
      return ["/store"];
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(title) {
        _classCallCheck(this, HomeComponent);

        this.title = title;
        this.title.setTitle('Centli | Totopos de la comunidad: ¡Invierte en sabor local!');
      }

      return _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
            //once: false // "false" --> Animaciones repetidas al hacer scroll.

          });
        }
      }]);
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 150,
      vars: 4,
      consts: [[1, "Home"], [1, "FirstSection"], ["src", "../../../assets/LogoN.png", "alt", "Logo", "data-aos", "fade-down"], ["width", "75%"], ["data-aos", "fade-down"], [1, "TwoSection"], [1, "all-TS", "d-lg-flex", "justify-content-lg-around"], [1, "d-lg-flex", "justify-content-lg-around"], ["placeholder", "Ingresa tu correo electr\xF3nico", "data-aos", "fade-down", "required", "", 1, "form-control"], ["type", "submit", "data-aos", "fade-down", 1, "btn", "waves-effect", "waves-ripple"], ["width", "100%"], [1, "ThirdSection", "d-lg-flex"], [1, "all-THS"], [1, "img-lg"], ["src", "../../../assets/test1.svg", "alt", "Background1", "data-aos", "flip-right"], [1, "img-sm"], ["src", "../../../assets/test2.jpg", "alt", "Background2", "data-aos", "flip-left"], ["src", "../../../assets/test3.jpg", "data-aos", "flip-left"], [1, "FourSection"], [1, "info-course", "d-lg-flex"], [1, "image"], ["src", "../../../assets/testing1.jpg", "alt", "Background 4", "data-aos", "fade-down"], [1, "text"], [1, "visible-sm"], ["width", "45%", "data-aos", "fade-down"], [1, "info-course", "d-lg-flex", "justify-content-lg-start"], ["src", "../../../assets/testin2.jpg", "alt", "Background 5", "data-aos", "fade-down"], ["routerLinkActive", "router-link-active", "data-aos", "fade-down", 1, "btn", "btn-courses", "waves-effect", "waves-ripple", 3, "routerLink"], [1, "FiveSection"], ["width", "85%"], [2, "width", "100%", "height", "100%"], [2, "text-align", "center", "vertical-align", "middle"], ["src", "../../../assets/products/images.png", "alt", "Background 8"], ["data-aos", "fade-down", 1, "product-info", "d-lg-flex", "justify-content-around"], ["src", "../../../assets/products/po3.png", "alt", "Background 8"], ["src", "../../../assets/products/poo2.png", "alt", "Background 7"], ["src", "../../../assets/products/poo4.png", "alt", "Background 6"], [1, "SixSection"], ["data-aos", "fade-dowm"], ["id", "carouselProducts", "data-ride", "carousel", "data-aos", "fade-down", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "cards-products", "d-lg-flex", "justify-content-lg-center"], ["onclick", "window.location.href='https://www.gob.mx/agricultura/articulos/palomitas-de-maiz-una-botana-sana-100-mexicana#:~:text=Surgidas%20de%20las%20primeras%20mazorcas,ubicadas%20en%20el%20estado%20de';", 1, "card", 2, "cursor", "pointer"], ["src", "../../../assets/products/number1.jpg", "alt", "Background10", 1, "card-img-top"], [1, "card-body"], ["onclick", "window.location.href='https://www.infobae.com/mexico/2024/01/26/cual-es-el-origen-de-las-gorditas-de-chicharron-antojito-predilecto-de-mexico/';", 1, "card", 2, "cursor", "pointer"], ["src", "../../../assets/products/number 2.jpg", "alt", "Background10", 1, "card-img-top"], ["onclick", "window.location.href='https://www.gob.mx/agricultura/articulos/tamales-una-historia-de-sabor';", 1, "card", 2, "cursor", "pointer"], ["src", "../../../assets/products/number6.jpg", "alt", "Background10", 1, "card-img-top"], [1, "carousel-item"], ["onclick", "window.location.href='https://www.mexicodesconocido.com.mx/no-son-esquites-ni-elote-en-vaso-conoce-la-historia-de-esta-delicia.html';", 1, "card", 2, "cursor", "pointer"], ["src", "../../../assets/products/testo3.png", "alt", "Background15", 1, "card-img-top"], ["onclick", "window.location.href='https://www.gob.mx/agricultura/es/articulos/elotes-aqui-esquites-alla-un-elotero-te-saludara#:~:text=Los%20elotes%20y%20esquites%20son,la%20%C3%A9poca%20de%20la%20Conquista.';", 1, "card", 2, "cursor", "pointer"], ["src", "../../../assets/products/number4.jpeg", "alt", "Background16", 1, "card-img-top"], ["onclick", "window.location.href='https://www.gob.mx/agricultura/articulos/no-lo-pienses-mas-y-comeme-las-tostadas#:~:text=Como%20mencionamos%20arriba%2C%20las%20tostadas,com%C3%ADan%20con%20frijoles%20y%20chile.';", 1, "card", 2, "cursor", "pointer"], ["src", "../../../assets/products/testo2.png", "alt", "Background8", 1, "card-img-top"], ["href", "#carouselProducts", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselProducts", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "SevenSection"], [1, "contact", "d-md-flex", "justify-content-lg-center"], ["placeholder", "Ingresa tu correo electronico", "data-aos", "fade-dowm", 1, "form-control"], ["type", "submit", "data-aos", "flip-right", 1, "btn"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Centli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xA1El sabor de M\xE9xico en cada bocado!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Somos tu mejor opci\xF3n para los momentos m\xE1s crujientes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Subscr\xEDbete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Curso online de");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Tortillas a Mano ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Ense\xF1ar las t\xE9cnicas tradicionales para elaborar tortillas a mano, desde la preparaci\xF3n de la masa hasta el estirado y cocido. Asi mismo Los participantes aprender\xE1n a valorar el proceso artesanal y a crear tortillas m\xE1s sabrosas y saludables. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Curso online de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Cocina Mexicana con Ma\xEDz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "hr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Explorar diferentes recetas mexicanas que tienen al ma\xEDz como ingrediente principal, como tamales, pozole, esquites, etc. al igual Los participantes descubrir\xE1n la versatilidad del ma\xEDz en la cocina y podr\xE1n replicar las recetas en casa. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Cargar m\xE1s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Productos al 40% de Descuento por el Buen Fin!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Totopos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "De $1500 a 900$ -- 15 BOLSAS DE TOTOPOS!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Su versatilidad los hace perfectos para botanas, guarniciones y hasta para preparar platillos como los chilaquiles. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Tortillas de Ma\xEDz -- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "660.00$ a $ $396.00 -- 30 KILOS DE TORTILLAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Su sabor aut\xE9ntico y textura suave las hacen indispensables en cualquier cocina. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Nieve de Ma\xEDz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "150$ a 40$ el litro de nieve de maiz!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Es una opci\xF3n deliciosa y diferente para disfrutar en cualquier ocasi\xF3n. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Ver m\xE1s productos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h3", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Descubre los Or\xEDgenes de lo que ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Consumes dia a dia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Palomitas de Maiz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Chicharrones de ma\xEDz ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Tamales ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Elotes en vaso ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Esquites ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Tostadas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h3", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Asesorate con nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " \xA1Reciba atenci\xF3n personalizada, novedades de nuestros cat\xE1logos, productos exclusivos y ofertas especiales directamente en su correo! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Subscr\xEDbete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
      styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.Home[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%] {\n  background: #D9F2EE;\n  padding-bottom: 3em;\n}\n\n.Home[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 4em 0 0.9em 0;\n  display: block;\n  margin: auto;\n  width: 20%;\n}\n\n.Home[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 0.2em;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 3.6em;\n  color: #0E6152;\n}\n\n.Home[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  text-align: center;\n  text-transform: uppercase;\n  color: #FF395B;\n}\n\n.Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%] {\n  padding-top: 2.5em;\n  padding-bottom: 2em;\n}\n\n.Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 30%;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.2em;\n  color: black;\n  position: relative;\n  top: 8px;\n}\n\n.Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 45%;\n  border-radius: 5px;\n  border: 2px solid #c9d3dd;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n}\n\n.Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  text-align: center;\n}\n\n.Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  text-align: center;\n}\n\n.Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #FFC107;\n  color: black;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  transition: 380ms;\n  text-transform: uppercase;\n  font-size: 0.85em;\n  font-weight: 600;\n}\n\n.Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transition: 380ms ease-in;\n  box-shadow: 0px 13px 24px -7px #29323d;\n}\n\n.Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%] {\n  background-color: #0E6152;\n  padding-top: 2em;\n}\n\n.Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-lg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  display: block;\n  margin: 1.3em auto;\n  width: 95%;\n  max-width: 845px;\n}\n\n.Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-sm[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n  display: block;\n  margin: 1.3em auto;\n  border-radius: 5px;\n  width: 60%;\n}\n\n.Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%] {\n  background: #FFC107;\n  padding-top: 5em;\n  padding-bottom: 2.5em;\n}\n\n.Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%] {\n  padding-top: 2em;\n}\n\n.Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  width: 70%;\n  border-radius: 10px;\n  box-shadow: 0px 13px 24px -7px #a09b9b;\n}\n\n.Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-top: 1.2em;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  font-size: 1.5em;\n  color: #0E6253;\n}\n\n.Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: initial;\n}\n\n.Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 0.5em;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 0.95em;\n  text-align: justify;\n  color: black;\n}\n\n.Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   a.btn-courses[_ngcontent-%COMP%] {\n  background: #0E6253;\n  padding: 10px 10px;\n  border: 1px solid #0E6253;\n  text-transform: uppercase;\n  width: 15%;\n  display: block;\n  margin: 2em auto;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  transition: 380ms ease-in;\n  color: white;\n}\n\n.Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   a.btn-courses[_ngcontent-%COMP%]:hover {\n  background: #0E6253;\n  color: #fff;\n  transition: 380ms ease-in;\n  box-shadow: 0px 13px 24px -7px #0E6253;\n}\n\n.Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-top: 1em;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: black;\n  text-align: center;\n}\n\n.Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n  background: #FFC107;\n  width: 65%;\n  margin: 3em auto;\n  border-radius: 10px;\n  box-shadow: 0px 13px 24px -7px #f2f0f0;\n}\n\n.Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 85%;\n}\n\n.Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-top: 0.85em;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 600;\n  color: #0E6253;\n  font-size: 1.5em;\n}\n\n.Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  color: black;\n  font-size: 1.15em;\n  padding-top: 0.5em;\n}\n\n.Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 0.5em;\n  text-align: justify;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  color: black;\n}\n\n.Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   a.btn-courses[_ngcontent-%COMP%] {\n  padding: 8px;\n  background-color: #0E6152;\n  border: 1px solid #0E6253;\n  text-transform: uppercase;\n  width: 20%;\n  display: block;\n  margin: 2em auto;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  transition: 380ms ease-in;\n  color: white;\n}\n\n.Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   a.btn-courses[_ngcontent-%COMP%]:hover {\n  background: #0E6253;\n  color: #FFC107;\n  transition: 380ms ease-in;\n  box-shadow: 0px 13px 24px -7px #29323d;\n}\n\n.Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%] {\n  background-color: #D9F2EE;\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%51260E' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\") !important;\n}\n\n.Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%51260E' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\") !important;\n}\n\n.Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 3em;\n  padding-bottom: 2em;\n  color: black;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .cards-products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 3em;\n  box-shadow: 0px 13px 24px -7px #c4c4c4;\n  width: 20%;\n  margin: 40px;\n}\n\n.Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .cards-products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 240px;\n  width: 100%;\n}\n\n.Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .cards-products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  text-align: center;\n  color: #0E6152;\n  padding-top: 1em;\n  padding-bottom: 1.5em;\n  text-transform: uppercase;\n}\n\n.Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%] {\n  margin-top: 4em;\n  background-color: #0E6152;\n}\n\n.Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-top: 2.5em;\n  font-family: \"Montserrat\", sans-serif;\n  text-align: center;\n  font-weight: 500;\n  color: white;\n}\n\n.Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 0.8em;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  text-align: center;\n  color: white;\n  width: 50%;\n  margin: auto;\n}\n\n.Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  padding-top: 2em;\n  padding-bottom: 4em;\n}\n\n.Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  width: 25%;\n  border-radius: 5px;\n  border: 2px solid #c9d3dd;\n  font-family: \"Poppins\", sans-serif;\n  text-align: left;\n}\n\n.Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  text-align: left;\n}\n\n.Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  text-align: left;\n}\n\n.Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 2em;\n  background: #FFC107;\n  color: black;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  transition: 380ms;\n  text-transform: uppercase;\n  font-size: 0.85em;\n  font-weight: 600;\n}\n\n.Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transition: 380ms ease-in;\n  box-shadow: 0px 13px 24px -7px #29323d;\n}\n\n@media screen and (min-width: 0px) and (max-width: 425px) {\n  .Home[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  .Home[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2em;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 90%;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin: 2em auto 2em auto;\n    width: 90%;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-lg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-sm[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%] {\n    padding-top: 4em;\n    padding-bottom: 4em;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 65%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   a.btn-courses[_ngcontent-%COMP%] {\n    width: 50% !important;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    padding-bottom: 2em;\n    width: 100%;\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   a.btn-courses[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .cards-products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 70%;\n    margin: 2.5em auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 85%;\n    margin: auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    margin: 1.4em auto;\n  }\n}\n\n@media screen and (min-width: 426px) and (max-width: 600px) {\n  .Home[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  .Home[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2em;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 90%;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin: 2em auto 2em auto;\n    width: 70%;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-lg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-sm[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%] {\n    padding-top: 4em;\n    padding-bottom: 4em;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 65%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   a.btn-courses[_ngcontent-%COMP%] {\n    width: 50% !important;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    padding-bottom: 2em;\n    width: 100%;\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   a.btn-courses[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .cards-products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 70%;\n    margin: 2.5em auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 85%;\n    margin: auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 85%;\n    margin: auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    margin: 1.4em auto;\n  }\n}\n\n@media screen and (min-width: 601px) and (max-width: 767px) {\n  .Home[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  .Home[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2em;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 90%;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin: 2em auto 2em auto;\n    width: 50%;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-lg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-sm[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%] {\n    padding-top: 4em;\n    padding-bottom: 4em;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    width: 75%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 65%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 75%;\n    margin: 0.5em auto;\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   a.btn-courses[_ngcontent-%COMP%] {\n    width: 30% !important;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n    width: 55%;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    padding-bottom: 2em;\n    width: 100%;\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   a.btn-courses[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n  .Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .cards-products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: 2.5em auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 85%;\n    margin: auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    margin: 1.6em auto;\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 991px) {\n  .Home[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  .Home[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2em;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 90%;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .TwoSection[_ngcontent-%COMP%]   .all-TS[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin: 2em auto 2em auto;\n    width: 40%;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-lg[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    width: 90%;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-sm[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .ThirdSection[_ngcontent-%COMP%]   .all-THS[_ngcontent-%COMP%]   .img-sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%] {\n    padding-top: 4em;\n    padding-bottom: 4em;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    width: 60%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 65%;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   .info-course[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 70%;\n    margin: 0.5em auto;\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FourSection[_ngcontent-%COMP%]   a.btn-courses[_ngcontent-%COMP%] {\n    width: 25% !important;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    padding-bottom: 2em;\n    width: 100%;\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .FiveSection[_ngcontent-%COMP%]   a.btn-courses[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n  .Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SixSection[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .cards-products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 30%;\n    margin: 2.5em auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 85%;\n    margin: auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 40%;\n    margin: auto;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    text-align: center;\n  }\n  .Home[_ngcontent-%COMP%]   .SevenSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    margin: 1.6em auto;\n  }\n}\n\n@media screen and (min-width: 992px) and (max-width: 1306px) {\n  .FourSection[_ngcontent-%COMP%]   a.btn-courses[_ngcontent-%COMP%] {\n    width: 25% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fd2F2ZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ0E7RUFDSSxhQUFBO0FDcENKOztBRHVDQTtFQUNJLGlIQUFBO0FDcENKOztBRHVDQTtFQUNJLDZDQUFBO0FDcENKOztBRHVDQTtFQUNJLGdDQUFBO0FDcENKOztBRHFDSTtFQUNJLGdDQUFBO0FDbkNSOztBRHVDQTtFQUNJLGVBQUE7QUNwQ0o7O0FDcEJBOzs7Ozs7O0VBQUE7O0FBVUM7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRHFCSjs7QUNuQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QURvQk47O0FDaEJJO0VBQ0UsMkNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDZEk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURnQk47O0FDYkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QURlTjs7QUNYRTtFQUNFLDJCQUFBO0FEY0o7O0FDWEU7RUFDRSx3QkFBQTtFQUNBLDJFQUFBO0FEY0o7O0FDWEU7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FEY0o7O0FDWkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRGNOOztBQ1ZFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBRGFKOztBQ1ZFO0VBQ0UsY0FBQTtBRGFKOztBQ1ZFLG9DQUFBOztBQUNBO0VBQ0UsV0FBQTtBRGFKOztBRTFISTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7QUY2SFI7O0FFNUhRO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUY4SFo7O0FFNUhRO0VBQ0ksa0JBQUE7RUFDQSxxQ0hUQztFR1VELGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRjhIWjs7QUU1SFE7RUFDSSxjQUFBO0VBQ0EscUNIbEJDO0VHbUJELGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUY4SFo7O0FFM0hJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBRjZIUjs7QUU1SFE7RUFDSSxVQUFBO0VBQ0Esa0NINUJGO0VHNkJFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBRjhIWjs7QUU1SFE7RUFDSSxVQUFBO0FGOEhaOztBRTdIWTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NIeENOO0VHeUNNLGtCQUFBO0FGK0hoQjs7QUU5SGdCO0VBQ0ksa0JBQUE7QUZnSXBCOztBRWpJZ0I7RUFDSSxrQkFBQTtBRmdJcEI7O0FFN0hZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0dINUNIO0VHNkNHLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FGK0hoQjs7QUU5SGdCO0VBQ0kseUJBQUE7RUFDQSxzQ0FBQTtBRmdJcEI7O0FFM0hJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBRjZIUjs7QUU1SFE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUY4SFo7O0FFNUhnQjtFQUNJLDZDSC9ETDtFR2dFSyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBRjhIcEI7O0FFM0hZO0VBQ0ksVUFBQTtBRjZIaEI7O0FFNUhnQjtFQUNJLDZDSDFFTDtFRzJFSyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUY4SHBCOztBRXpISTtFQUVJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBRjBIUjs7QUV6SFE7RUFDSSxnQkFBQTtBRjJIWjs7QUUxSFk7RUFDSSxVQUFBO0FGNEhoQjs7QUUzSGdCO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBRjZIcEI7O0FFMUhZO0VBQ0ksVUFBQTtBRjRIaEI7O0FFM0hnQjtFQUNJLGtCQUFBO0VBQ0Esa0NIOUdWO0VHK0dVLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FGNkhwQjs7QUUzSGdCO0VBQ0ksZUFBQTtBRjZIcEI7O0FFM0hnQjtFQUNJLGtCQUFBO0VBQ0Esa0NIeEhWO0VHeUhVLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FGNkhwQjs7QUV6SFE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0h2SUY7RUd3SUUsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUYySFo7O0FFMUhZO0VBQ0ksbUJBQUE7RUFDQSxXSHhIUjtFR3lIUSx5QkFBQTtFQUNBLHNDQUFBO0FGNEhoQjs7QUV2SFE7RUFDSSxnQkFBQTtFQUNBLHFDSHhKQztFR3lKRCxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FGeUhaOztBRXZIUTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBRnlIWjs7QUV4SFk7RUFDSSxVQUFBO0FGMEhoQjs7QUV6SGdCO0VBQ0ksVUFBQTtBRjJIcEI7O0FFeEhZO0VBQ0ksV0FBQTtBRjBIaEI7O0FFekhnQjtFQUNJLG1CQUFBO0VBQ0EscUNIOUtQO0VHK0tPLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUYySHBCOztBRXpIZ0I7RUFDSSxrQ0huTFY7RUdvTFUsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUYySHBCOztBRXpIZ0I7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NIM0xWO0VHNExVLGdCQUFBO0VBQ0EsWUFBQTtBRjJIcEI7O0FFdkhRO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0h6TUY7RUcwTUUsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUZ5SFo7O0FFeEhZO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBRjBIaEI7O0FFdEhJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FGd0hSOztBRXZIUTtFQUNJLDROQUFBO0FGeUhaOztBRXZIUTtFQUNJLDROQUFBO0FGeUhaOztBRXZIUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0h0T0M7RUd1T0QsZ0JBQUE7RUFDQSx5QkFBQTtBRnlIWjs7QUV4SFk7RUFDSSxnQkFBQTtBRjBIaEI7O0FFckhnQjtFQUNJLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRnVIcEI7O0FFdEhvQjtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUZ3SHhCOztBRXRIb0I7RUFDSSxrQ0h4UGQ7RUd5UGMsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUZ3SHhCOztBRWxISTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBRm9IUjs7QUVuSFE7RUFDSSxrQkFBQTtFQUNBLHFDSDNRQztFRzRRRCxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRnFIWjs7QUVuSFE7RUFDSSxrQkFBQTtFQUNBLGtDSGhSRjtFR2lSRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FGcUhaOztBRW5IUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUZxSFo7O0FFcEhZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtDSC9STjtFR2dTTSxnQkFBQTtBRnNIaEI7O0FFckhnQjtFQUNJLGdCQUFBO0FGdUhwQjs7QUV4SGdCO0VBQ0ksZ0JBQUE7QUZ1SHBCOztBRXBIWTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0dIcFNIO0VHcVNHLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FGc0hoQjs7QUVySGdCO0VBQ0kseUJBQUE7RUFDQSxzQ0FBQTtBRnVIcEI7O0FFaEhBO0VBR1k7SUFDSSxVQUFBO0VGaUhkO0VFL0dVO0lBQ0ksZ0JBQUE7RUZpSGQ7RUU3R1U7SUFDSSxrQkFBQTtFRitHZDtFRTlHYztJQUNJLFlBQUE7SUFDQSxVQUFBO0VGZ0hsQjtFRTlHYztJQUNJLFdBQUE7RUZnSGxCO0VFL0drQjtJQUNJLHlCQUFBO0lBQ0EsVUFBQTtFRmlIdEI7RUU1R007SUFDSSxjQUFBO0VGOEdWO0VFN0dVO0lBQ0ksY0FBQTtFRitHZDtFRTlHYztJQUNJLFdBQUE7RUZnSGxCO0VFOUdjO0lBQ0ksV0FBQTtFRmdIbEI7RUUvR2tCO0lBQ0ksVUFBQTtFRmlIdEI7RUUzR1U7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VGNkdkO0VFNUdjO0lBQ0ksV0FBQTtFRjhHbEI7RUU1R2M7SUFDSSxXQUFBO0VGOEdsQjtFRTdHa0I7SUFDSSxrQkFBQTtFRitHdEI7RUU5R3NCO0lBQ0ksY0FBQTtFRmdIMUI7RUU3R2tCO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUYrR3RCO0VFN0drQjtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUYrR3RCO0VFM0dVO0lBQ0kscUJBQUE7RUY2R2Q7RUV6R1U7SUFDSSxVQUFBO0VGMkdkO0VFMUdjO0lBQ0ksV0FBQTtFRjRHbEI7RUUzR2tCO0lBQ0ksV0FBQTtFRjZHdEI7RUUxR2M7SUFDSSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFRjRHbEI7RUUzR2tCO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFRjZHdEI7RUV6R1U7SUFDSSxVQUFBO0VGMkdkO0VFdkdVO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUZ5R2Q7RUVyR2tCO0lBQ0ksVUFBQTtJQUNBLGtCQUFBO0VGdUd0QjtFRWpHVTtJQUNJLFVBQUE7RUZtR2Q7RUVoR2M7SUFDSSxVQUFBO0lBQ0EsWUFBQTtFRmtHbEI7RUVoR2M7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7RUZrR2xCO0FBQ0Y7O0FFNUZBO0VBR1k7SUFDSSxVQUFBO0VGNEZkO0VFMUZVO0lBQ0ksZ0JBQUE7RUY0RmQ7RUV4RlU7SUFDSSxrQkFBQTtFRjBGZDtFRXpGYztJQUNJLFlBQUE7SUFDQSxVQUFBO0VGMkZsQjtFRXpGYztJQUNJLFdBQUE7RUYyRmxCO0VFMUZrQjtJQUNJLHlCQUFBO0lBQ0EsVUFBQTtFRjRGdEI7RUV2Rk07SUFDSSxjQUFBO0VGeUZWO0VFeEZVO0lBQ0ksY0FBQTtFRjBGZDtFRXpGYztJQUNJLFdBQUE7RUYyRmxCO0VFekZjO0lBQ0ksV0FBQTtFRjJGbEI7RUUxRmtCO0lBQ0ksVUFBQTtFRjRGdEI7RUV0RlU7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VGd0ZkO0VFdkZjO0lBQ0ksV0FBQTtFRnlGbEI7RUV2RmM7SUFDSSxXQUFBO0VGeUZsQjtFRXhGa0I7SUFDSSxrQkFBQTtFRjBGdEI7RUV6RnNCO0lBQ0ksY0FBQTtFRjJGMUI7RUV4RmtCO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUYwRnRCO0VFeEZrQjtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUYwRnRCO0VFdEZVO0lBQ0kscUJBQUE7RUZ3RmQ7RUVwRlU7SUFDSSxVQUFBO0VGc0ZkO0VFckZjO0lBQ0ksV0FBQTtFRnVGbEI7RUV0RmtCO0lBQ0ksV0FBQTtFRndGdEI7RUVyRmM7SUFDSSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFRnVGbEI7RUV0RmtCO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFRndGdEI7RUVwRlU7SUFDSSxVQUFBO0VGc0ZkO0VFbEZVO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUZvRmQ7RUVoRmtCO0lBQ0ksVUFBQTtJQUNBLGtCQUFBO0VGa0Z0QjtFRTVFVTtJQUNJLFVBQUE7SUFDQSxZQUFBO0VGOEVkO0VFNUVVO0lBQ0ksVUFBQTtFRjhFZDtFRTNFYztJQUNJLFVBQUE7SUFDQSxZQUFBO0VGNkVsQjtFRTNFYztJQUNJLGNBQUE7SUFDQSxrQkFBQTtFRjZFbEI7QUFDRjs7QUV2RUE7RUFHWTtJQUNJLFVBQUE7RUZ1RWQ7RUVyRVU7SUFDSSxnQkFBQTtFRnVFZDtFRW5FVTtJQUNJLGtCQUFBO0VGcUVkO0VFcEVjO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUZzRWxCO0VFcEVjO0lBQ0ksV0FBQTtFRnNFbEI7RUVyRWtCO0lBQ0kseUJBQUE7SUFDQSxVQUFBO0VGdUV0QjtFRWxFTTtJQUNJLGNBQUE7RUZvRVY7RUVuRVU7SUFDSSxjQUFBO0VGcUVkO0VFcEVjO0lBQ0ksV0FBQTtFRnNFbEI7RUVwRWM7SUFDSSxXQUFBO0VGc0VsQjtFRXJFa0I7SUFDSSxVQUFBO0VGdUV0QjtFRWpFVTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7RUZtRWQ7RUVsRWM7SUFDSSxjQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUZvRWxCO0VFbEVjO0lBQ0ksV0FBQTtFRm9FbEI7RUVuRWtCO0lBQ0ksa0JBQUE7RUZxRXRCO0VFcEVzQjtJQUNJLGNBQUE7RUZzRTFCO0VFbkVrQjtJQUNJLFlBQUE7SUFDQSxVQUFBO0VGcUV0QjtFRW5Fa0I7SUFDSSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFRnFFdEI7RUVqRVU7SUFDSSxxQkFBQTtFRm1FZDtFRS9EVTtJQUNJLFVBQUE7RUZpRWQ7RUVoRWM7SUFDSSxXQUFBO0VGa0VsQjtFRWpFa0I7SUFDSSxXQUFBO0VGbUV0QjtFRWhFYztJQUNJLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VGa0VsQjtFRWpFa0I7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VGbUV0QjtFRS9EVTtJQUNJLFVBQUE7RUZpRWQ7RUU3RFU7SUFDSSxVQUFBO0lBQ0EsWUFBQTtFRitEZDtFRTNEa0I7SUFDSSxVQUFBO0lBQ0Esa0JBQUE7RUY2RHRCO0VFdkRVO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUZ5RGQ7RUV2RFU7SUFDSSxVQUFBO0VGeURkO0VFdERjO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUZ3RGxCO0VFdkRrQjtJQUNJLGtCQUFBO0VGeUR0QjtFRTFEa0I7SUFDSSxrQkFBQTtFRnlEdEI7RUV0RGM7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7RUZ3RGxCO0FBQ0Y7O0FFbERBO0VBR1k7SUFDSSxVQUFBO0VGa0RkO0VFaERVO0lBQ0ksZ0JBQUE7RUZrRGQ7RUU5Q1U7SUFDSSxrQkFBQTtFRmdEZDtFRS9DYztJQUNJLFlBQUE7SUFDQSxVQUFBO0VGaURsQjtFRS9DYztJQUNJLFdBQUE7RUZpRGxCO0VFaERrQjtJQUNJLHlCQUFBO0lBQ0EsVUFBQTtFRmtEdEI7RUU3Q007SUFDSSxjQUFBO0VGK0NWO0VFOUNVO0lBQ0ksY0FBQTtFRmdEZDtFRS9DYztJQUNJLGNBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFRmlEbEI7RUUvQ2M7SUFDSSxXQUFBO0VGaURsQjtFRWhEa0I7SUFDSSxVQUFBO0VGa0R0QjtFRTVDVTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7RUY4Q2Q7RUU3Q2M7SUFDSSxjQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUYrQ2xCO0VFN0NjO0lBQ0ksV0FBQTtFRitDbEI7RUU5Q2tCO0lBQ0ksa0JBQUE7RUZnRHRCO0VFL0NzQjtJQUNJLGNBQUE7RUZpRDFCO0VFOUNrQjtJQUNJLFlBQUE7SUFDQSxVQUFBO0VGZ0R0QjtFRTlDa0I7SUFDSSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFRmdEdEI7RUU1Q1U7SUFDSSxxQkFBQTtFRjhDZDtFRTFDVTtJQUNJLFVBQUE7RUY0Q2Q7RUUzQ2M7SUFDSSxXQUFBO0VGNkNsQjtFRTVDa0I7SUFDSSxXQUFBO0VGOEN0QjtFRTNDYztJQUNJLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VGNkNsQjtFRTVDa0I7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VGOEN0QjtFRTFDVTtJQUNJLFVBQUE7RUY0Q2Q7RUV4Q1U7SUFDSSxVQUFBO0lBQ0EsWUFBQTtFRjBDZDtFRXRDa0I7SUFDSSxVQUFBO0lBQ0Esa0JBQUE7RUZ3Q3RCO0VFbENVO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUZvQ2Q7RUVsQ1U7SUFDSSxVQUFBO0VGb0NkO0VFakNjO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUZtQ2xCO0VFbENrQjtJQUNJLGtCQUFBO0VGb0N0QjtFRXJDa0I7SUFDSSxrQkFBQTtFRm9DdEI7RUVqQ2M7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7RUZtQ2xCO0FBQ0Y7O0FFN0JBO0VBRVE7SUFDSSxxQkFBQTtFRjhCVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiRiYXItd2lkdGg6IDI1cHg7XHJcbiRiYXItaGVpZ2h0OiAzLjFweDtcclxuJGJhci1zcGFjaW5nOiA3cHg7XHJcblxyXG4kTW9udHNlcnJhdDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kTXVsaXNoOiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJFBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbiRib3JkZXItaW5wdXQ6ICNjOWQzZGQ7XHJcblxyXG4kc2hhZG93LW5hdjogMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiRzaGFkb3ctYnRuOiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiRzaGFkb3ctc21hbGw6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuJHNoYWRvdy1jb250YWluZXItc21hbGw6IDAgMTBweCAyMHB4IDAgcmdiKDAgMCAwIC8gNSUpO1xyXG4kc2hhZG93LWNvbnRhaW5lcjogMCAycHggMXB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMCAxcHggMXB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggM3B4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuJHNoYWRvdy1uYXYtc21hbGw6IDAgMnB4IDMwcHggMCByZ2IoMjA3IDIwNyAyMDcgLyA1MCUpO1xyXG5cclxuJHByaW1hcnktY29sb3I6ICMwRTYxNTI7XHJcbiRncmV5LTgwMDogIzQyNDI0MjtcclxuJGdyZXktNzAwOiAjMjkzMjNkO1xyXG4kZ3JleS02MDA6ICM3OThkYTM7XHJcbiRncmV5LTUwMDogIzBFNjE1MjtcclxuJGdyZXktNDAwOiAjOWZhZmMxO1xyXG4kZ3JleS0zMDA6ICMzMzMzMzM7XHJcbiRncmV5LTIwMDogIzRkNGQ0ZDtcclxuJGdyZXktMTAwOiAjNjY2NjY2O1xyXG4kcGluay1maXJzdDogI2UxZDlkNTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kd2hpdGUtMjogI2VkZjBmNDtcclxuXHJcbiRibGFjay04MDA6ICMwMDA7XHJcbiRibGFjay03MDA6ICMxNDE0MTQ7XHJcbiRibGFjay02MDA6ICMxYjFiMWI7XHJcbiRibGFjay01MDA6ICMwRTYxNTI7XHJcblxyXG5cclxuLnZpc2libGUtc20ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNoYWRvdy1uYXYge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuXHJcbi5zaGFkb3ctc21hbGwge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4udGV4dC1ub25lIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLnZpc2libGUtc20ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hhZG93LW5hdiB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uc2hhZG93LXNtYWxsIHtcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udGV4dC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG4udGV4dC1ub25lOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiFcbiAqIFdhdmVzIHYwLjYuMFxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi53YXZlcy1lZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbn1cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1saWdodCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy15ZWxsb3cgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1vcmFuZ2UgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPWJ1dHRvbl0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1yZXNldF0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYm9yZGVyOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0IGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi53YXZlcy1ub3RyYW5zaXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcbn1cblxuLndhdmVzLWlucHV0LXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi53YXZlcy1pbnB1dC13cmFwcGVyIC53YXZlcy1idXR0b24taW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBsaW5lLWhlaWdodDogMi41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xufVxuXG4ud2F2ZXMtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogRmlyZWZveCBCdWc6IGxpbmsgbm90IHRyaWdnZXJlZCAqL1xuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgei1pbmRleDogLTE7XG59XG5cbi5Ib21lIC5GaXJzdFNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjRDlGMkVFO1xuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xufVxuLkhvbWUgLkZpcnN0U2VjdGlvbiBpbWcge1xuICBwYWRkaW5nOiA0ZW0gMCAwLjllbSAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMjAlO1xufVxuLkhvbWUgLkZpcnN0U2VjdGlvbiBoMSB7XG4gIHBhZGRpbmctdG9wOiAwLjJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMy42ZW07XG4gIGNvbG9yOiAjMEU2MTUyO1xufVxuLkhvbWUgLkZpcnN0U2VjdGlvbiBoNCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNGRjM5NUI7XG59XG4uSG9tZSAuVHdvU2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAyLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcbn1cbi5Ib21lIC5Ud29TZWN0aW9uIGgyIHtcbiAgd2lkdGg6IDMwJTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG59XG4uSG9tZSAuVHdvU2VjdGlvbiBmb3JtIHtcbiAgd2lkdGg6IDYwJTtcbn1cbi5Ib21lIC5Ud29TZWN0aW9uIGZvcm0gaW5wdXQge1xuICB3aWR0aDogNDUlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjOWQzZGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLkhvbWUgLlR3b1NlY3Rpb24gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uSG9tZSAuVHdvU2VjdGlvbiBmb3JtIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNGRkMxMDc7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB0cmFuc2l0aW9uOiAzODBtcztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uSG9tZSAuVHdvU2VjdGlvbiBmb3JtIGJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zaXRpb246IDM4MG1zIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjMjkzMjNkO1xufVxuLkhvbWUgLlRoaXJkU2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTYxNTI7XG4gIHBhZGRpbmctdG9wOiAyZW07XG59XG4uSG9tZSAuVGhpcmRTZWN0aW9uIC5hbGwtVEhTIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uSG9tZSAuVGhpcmRTZWN0aW9uIC5hbGwtVEhTIC5pbWctbGcgaW1nIHtcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEuM2VtIGF1dG87XG4gIHdpZHRoOiA5NSU7XG4gIG1heC13aWR0aDogODQ1cHg7XG59XG4uSG9tZSAuVGhpcmRTZWN0aW9uIC5hbGwtVEhTIC5pbWctc20ge1xuICB3aWR0aDogNDAlO1xufVxuLkhvbWUgLlRoaXJkU2VjdGlvbiAuYWxsLVRIUyAuaW1nLXNtIGltZyB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMS4zZW0gYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNjAlO1xufVxuLkhvbWUgLkZvdXJTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI0ZGQzEwNztcbiAgcGFkZGluZy10b3A6IDVlbTtcbiAgcGFkZGluZy1ib3R0b206IDIuNWVtO1xufVxuLkhvbWUgLkZvdXJTZWN0aW9uIC5pbmZvLWNvdXJzZSB7XG4gIHBhZGRpbmctdG9wOiAyZW07XG59XG4uSG9tZSAuRm91clNlY3Rpb24gLmluZm8tY291cnNlIC5pbWFnZSB7XG4gIHdpZHRoOiAzMCU7XG59XG4uSG9tZSAuRm91clNlY3Rpb24gLmluZm8tY291cnNlIC5pbWFnZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggI2EwOWI5Yjtcbn1cbi5Ib21lIC5Gb3VyU2VjdGlvbiAuaW5mby1jb3Vyc2UgLnRleHQge1xuICB3aWR0aDogNjAlO1xufVxuLkhvbWUgLkZvdXJTZWN0aW9uIC5pbmZvLWNvdXJzZSAudGV4dCBoMyB7XG4gIHBhZGRpbmctdG9wOiAxLjJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzBFNjI1Mztcbn1cbi5Ib21lIC5Gb3VyU2VjdGlvbiAuaW5mby1jb3Vyc2UgLnRleHQgaHIge1xuICBtYXJnaW46IGluaXRpYWw7XG59XG4uSG9tZSAuRm91clNlY3Rpb24gLmluZm8tY291cnNlIC50ZXh0IHAge1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5Ib21lIC5Gb3VyU2VjdGlvbiBhLmJ0bi1jb3Vyc2VzIHtcbiAgYmFja2dyb3VuZDogIzBFNjI1MztcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMEU2MjUzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogMTUlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiAzODBtcyBlYXNlLWluO1xuICBjb2xvcjogd2hpdGU7XG59XG4uSG9tZSAuRm91clNlY3Rpb24gYS5idG4tY291cnNlczpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwRTYyNTM7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAzODBtcyBlYXNlLWluO1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzBFNjI1Mztcbn1cbi5Ib21lIC5GaXZlU2VjdGlvbiBoMiB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uSG9tZSAuRml2ZVNlY3Rpb24gLnByb2R1Y3QtaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNGRkMxMDc7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogM2VtIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjZjJmMGYwO1xufVxuLkhvbWUgLkZpdmVTZWN0aW9uIC5wcm9kdWN0LWluZm8gLmltYWdlIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5Ib21lIC5GaXZlU2VjdGlvbiAucHJvZHVjdC1pbmZvIC5pbWFnZSBpbWcge1xuICB3aWR0aDogODUlO1xufVxuLkhvbWUgLkZpdmVTZWN0aW9uIC5wcm9kdWN0LWluZm8gLnRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5Ib21lIC5GaXZlU2VjdGlvbiAucHJvZHVjdC1pbmZvIC50ZXh0IGgzIHtcbiAgcGFkZGluZy10b3A6IDAuODVlbTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzBFNjI1MztcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5Ib21lIC5GaXZlU2VjdGlvbiAucHJvZHVjdC1pbmZvIC50ZXh0IGg0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG59XG4uSG9tZSAuRml2ZVNlY3Rpb24gLnByb2R1Y3QtaW5mbyAudGV4dCBwIHtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5Ib21lIC5GaXZlU2VjdGlvbiBhLmJ0bi1jb3Vyc2VzIHtcbiAgcGFkZGluZzogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEU2MTUyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMEU2MjUzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogMjAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiAzODBtcyBlYXNlLWluO1xuICBjb2xvcjogd2hpdGU7XG59XG4uSG9tZSAuRml2ZVNlY3Rpb24gYS5idG4tY291cnNlczpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwRTYyNTM7XG4gIGNvbG9yOiAjRkZDMTA3O1xuICB0cmFuc2l0aW9uOiAzODBtcyBlYXNlLWluO1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzI5MzIzZDtcbn1cbi5Ib21lIC5TaXhTZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q5RjJFRTtcbiAgcGFkZGluZy10b3A6IDVlbTtcbiAgcGFkZGluZy1ib3R0b206IDVlbTtcbn1cbi5Ib21lIC5TaXhTZWN0aW9uIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nJTUxMjYwRScgdmlld0JveD0nMCAwIDggOCclM0UlM0NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cbi5Ib21lIC5TaXhTZWN0aW9uIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nJTUxMjYwRScgdmlld0JveD0nMCAwIDggOCclM0UlM0NwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjUgMi41IDIuNS0yLjUgMi41IDEuNSAxLjUgNC00LTQtNHonLyUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcbn1cbi5Ib21lIC5TaXhTZWN0aW9uIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogM2VtO1xuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5Ib21lIC5TaXhTZWN0aW9uIGgzIHNwYW4ge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLkhvbWUgLlNpeFNlY3Rpb24gLmNhcm91c2VsLWl0ZW0gLmNhcmRzLXByb2R1Y3RzIC5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggI2M0YzRjNDtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiA0MHB4O1xufVxuLkhvbWUgLlNpeFNlY3Rpb24gLmNhcm91c2VsLWl0ZW0gLmNhcmRzLXByb2R1Y3RzIC5jYXJkIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMjQwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLkhvbWUgLlNpeFNlY3Rpb24gLmNhcm91c2VsLWl0ZW0gLmNhcmRzLXByb2R1Y3RzIC5jYXJkIC5jYXJkLWJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwRTYxNTI7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5Ib21lIC5TZXZlblNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA0ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTYxNTI7XG59XG4uSG9tZSAuU2V2ZW5TZWN0aW9uIGgzIHtcbiAgcGFkZGluZy10b3A6IDIuNWVtO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLkhvbWUgLlNldmVuU2VjdGlvbiBwIHtcbiAgcGFkZGluZy10b3A6IDAuOGVtO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG59XG4uSG9tZSAuU2V2ZW5TZWN0aW9uIC5jb250YWN0IHtcbiAgcGFkZGluZy10b3A6IDJlbTtcbiAgcGFkZGluZy1ib3R0b206IDRlbTtcbn1cbi5Ib21lIC5TZXZlblNlY3Rpb24gLmNvbnRhY3QgaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAyNSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2M5ZDNkZDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLkhvbWUgLlNldmVuU2VjdGlvbiAuY29udGFjdCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLkhvbWUgLlNldmVuU2VjdGlvbiAuY29udGFjdCBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogMmVtO1xuICBiYWNrZ3JvdW5kOiAjRkZDMTA3O1xuICBjb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgdHJhbnNpdGlvbjogMzgwbXM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLkhvbWUgLlNldmVuU2VjdGlvbiAuY29udGFjdCBidXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiAzODBtcyBlYXNlLWluO1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzI5MzIzZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLkhvbWUgLkZpcnN0U2VjdGlvbiBpbWcge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLkhvbWUgLkZpcnN0U2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiAyLjJlbTtcbiAgfVxuICAuSG9tZSAuVHdvU2VjdGlvbiAuYWxsLVRTIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLkhvbWUgLlR3b1NlY3Rpb24gLmFsbC1UUyBoMiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLkhvbWUgLlR3b1NlY3Rpb24gLmFsbC1UUyBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuSG9tZSAuVHdvU2VjdGlvbiAuYWxsLVRTIGZvcm0gaW5wdXQge1xuICAgIG1hcmdpbjogMmVtIGF1dG8gMmVtIGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuSG9tZSAuVGhpcmRTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuSG9tZSAuVGhpcmRTZWN0aW9uIC5hbGwtVEhTIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuSG9tZSAuVGhpcmRTZWN0aW9uIC5hbGwtVEhTIC5pbWctbGcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5Ib21lIC5UaGlyZFNlY3Rpb24gLmFsbC1USFMgLmltZy1zbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLkhvbWUgLlRoaXJkU2VjdGlvbiAuYWxsLVRIUyAuaW1nLXNtIGltZyB7XG4gICAgd2lkdGg6IDg1JTtcbiAgfVxuICAuSG9tZSAuRm91clNlY3Rpb24gLmluZm8tY291cnNlIHtcbiAgICBwYWRkaW5nLXRvcDogNGVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA0ZW07XG4gIH1cbiAgLkhvbWUgLkZvdXJTZWN0aW9uIC5pbmZvLWNvdXJzZSAuaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5Ib21lIC5Gb3VyU2VjdGlvbiAuaW5mby1jb3Vyc2UgLnRleHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5Ib21lIC5Gb3VyU2VjdGlvbiAuaW5mby1jb3Vyc2UgLnRleHQgaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuSG9tZSAuRm91clNlY3Rpb24gLmluZm8tY291cnNlIC50ZXh0IGgzIC52aXNpYmxlLXNtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuSG9tZSAuRm91clNlY3Rpb24gLmluZm8tY291cnNlIC50ZXh0IGhyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuICAuSG9tZSAuRm91clNlY3Rpb24gLmluZm8tY291cnNlIC50ZXh0IHAge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuSG9tZSAuRm91clNlY3Rpb24gYS5idG4tY291cnNlcyB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5Ib21lIC5GaXZlU2VjdGlvbiAucHJvZHVjdC1pbmZvIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5Ib21lIC5GaXZlU2VjdGlvbiAucHJvZHVjdC1pbmZvIC5pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLkhvbWUgLkZpdmVTZWN0aW9uIC5wcm9kdWN0LWluZm8gLmltYWdlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLkhvbWUgLkZpdmVTZWN0aW9uIC5wcm9kdWN0LWluZm8gLnRleHQge1xuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5Ib21lIC5GaXZlU2VjdGlvbiAucHJvZHVjdC1pbmZvIC50ZXh0IHAge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuSG9tZSAuRml2ZVNlY3Rpb24gYS5idG4tY291cnNlcyB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICAuSG9tZSAuU2l4U2VjdGlvbiBoMyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLkhvbWUgLlNpeFNlY3Rpb24gLmNhcm91c2VsLWl0ZW0gLmNhcmRzLXByb2R1Y3RzIC5jYXJkIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMi41ZW0gYXV0bztcbiAgfVxuICAuSG9tZSAuU2V2ZW5TZWN0aW9uIHAge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLkhvbWUgLlNldmVuU2VjdGlvbiAuY29udGFjdCBpbnB1dCB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLkhvbWUgLlNldmVuU2VjdGlvbiAuY29udGFjdCBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMS40ZW0gYXV0bztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuSG9tZSAuRmlyc3RTZWN0aW9uIGltZyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAuSG9tZSAuRmlyc3RTZWN0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDIuMmVtO1xuICB9XG4gIC5Ib21lIC5Ud29TZWN0aW9uIC5hbGwtVFMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuSG9tZSAuVHdvU2VjdGlvbiAuYWxsLVRTIGgyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuSG9tZSAuVHdvU2VjdGlvbiAuYWxsLVRTIGZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5Ib21lIC5Ud29TZWN0aW9uIC5hbGwtVFMgZm9ybSBpbnB1dCB7XG4gICAgbWFyZ2luOiAyZW0gYXV0byAyZW0gYXV0bztcbiAgICB3aWR0aDogNzAlO1xuICB9XG4gIC5Ib21lIC5UaGlyZFNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5Ib21lIC5UaGlyZFNlY3Rpb24gLmFsbC1USFMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5Ib21lIC5UaGlyZFNlY3Rpb24gLmFsbC1USFMgLmltZy1sZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLkhvbWUgLlRoaXJkU2VjdGlvbiAuYWxsLVRIUyAuaW1nLXNtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuSG9tZSAuVGhpcmRTZWN0aW9uIC5hbGwtVEhTIC5pbWctc20gaW1nIHtcbiAgICB3aWR0aDogODUlO1xuICB9XG4gIC5Ib21lIC5Gb3VyU2VjdGlvbiAuaW5mby1jb3Vyc2Uge1xuICAgIHBhZGRpbmctdG9wOiA0ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDRlbTtcbiAgfVxuICAuSG9tZSAuRm91clNlY3Rpb24gLmluZm8tY291cnNlIC5pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLkhvbWUgLkZvdXJTZWN0aW9uIC5pbmZvLWNvdXJzZSAudGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLkhvbWUgLkZvdXJTZWN0aW9uIC5pbmZvLWNvdXJzZSAudGV4dCBoMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5Ib21lIC5Gb3VyU2VjdGlvbiAuaW5mby1jb3Vyc2UgLnRleHQgaDMgLnZpc2libGUtc20ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5Ib21lIC5Gb3VyU2VjdGlvbiAuaW5mby1jb3Vyc2UgLnRleHQgaHIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNjUlO1xuICB9XG4gIC5Ib21lIC5Gb3VyU2VjdGlvbiAuaW5mby1jb3Vyc2UgLnRleHQgcCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5Ib21lIC5Gb3VyU2VjdGlvbiBhLmJ0bi1jb3Vyc2VzIHtcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkhvbWUgLkZpdmVTZWN0aW9uIC5wcm9kdWN0LWluZm8ge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLkhvbWUgLkZpdmVTZWN0aW9uIC5wcm9kdWN0LWluZm8gLmltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuSG9tZSAuRml2ZVNlY3Rpb24gLnByb2R1Y3QtaW5mbyAuaW1hZ2UgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuSG9tZSAuRml2ZVNlY3Rpb24gLnByb2R1Y3QtaW5mbyAudGV4dCB7XG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLkhvbWUgLkZpdmVTZWN0aW9uIC5wcm9kdWN0LWluZm8gLnRleHQgcCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5Ib21lIC5GaXZlU2VjdGlvbiBhLmJ0bi1jb3Vyc2VzIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG4gIC5Ib21lIC5TaXhTZWN0aW9uIGgzIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAuSG9tZSAuU2l4U2VjdGlvbiAuY2Fyb3VzZWwtaXRlbSAuY2FyZHMtcHJvZHVjdHMgLmNhcmQge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiAyLjVlbSBhdXRvO1xuICB9XG4gIC5Ib21lIC5TZXZlblNlY3Rpb24gaDMge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5Ib21lIC5TZXZlblNlY3Rpb24gcCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuSG9tZSAuU2V2ZW5TZWN0aW9uIC5jb250YWN0IGlucHV0IHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAuSG9tZSAuU2V2ZW5TZWN0aW9uIC5jb250YWN0IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxLjRlbSBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5Ib21lIC5GaXJzdFNlY3Rpb24gaW1nIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIC5Ib21lIC5GaXJzdFNlY3Rpb24gaDEge1xuICAgIGZvbnQtc2l6ZTogMi4yZW07XG4gIH1cbiAgLkhvbWUgLlR3b1NlY3Rpb24gLmFsbC1UUyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5Ib21lIC5Ud29TZWN0aW9uIC5hbGwtVFMgaDIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5Ib21lIC5Ud29TZWN0aW9uIC5hbGwtVFMgZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLkhvbWUgLlR3b1NlY3Rpb24gLmFsbC1UUyBmb3JtIGlucHV0IHtcbiAgICBtYXJnaW46IDJlbSBhdXRvIDJlbSBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLkhvbWUgLlRoaXJkU2VjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLkhvbWUgLlRoaXJkU2VjdGlvbiAuYWxsLVRIUyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLkhvbWUgLlRoaXJkU2VjdGlvbiAuYWxsLVRIUyAuaW1nLWxnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuSG9tZSAuVGhpcmRTZWN0aW9uIC5hbGwtVEhTIC5pbWctc20ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5Ib21lIC5UaGlyZFNlY3Rpb24gLmFsbC1USFMgLmltZy1zbSBpbWcge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLkhvbWUgLkZvdXJTZWN0aW9uIC5pbmZvLWNvdXJzZSB7XG4gICAgcGFkZGluZy10b3A6IDRlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNGVtO1xuICB9XG4gIC5Ib21lIC5Gb3VyU2VjdGlvbiAuaW5mby1jb3Vyc2UgLmltYWdlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICAuSG9tZSAuRm91clNlY3Rpb24gLmluZm8tY291cnNlIC50ZXh0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuSG9tZSAuRm91clNlY3Rpb24gLmluZm8tY291cnNlIC50ZXh0IGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLkhvbWUgLkZvdXJTZWN0aW9uIC5pbmZvLWNvdXJzZSAudGV4dCBoMyAudmlzaWJsZS1zbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLkhvbWUgLkZvdXJTZWN0aW9uIC5pbmZvLWNvdXJzZSAudGV4dCBociB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA2NSU7XG4gIH1cbiAgLkhvbWUgLkZvdXJTZWN0aW9uIC5pbmZvLWNvdXJzZSAudGV4dCBwIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMC41ZW0gYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLkhvbWUgLkZvdXJTZWN0aW9uIGEuYnRuLWNvdXJzZXMge1xuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbiAgfVxuICAuSG9tZSAuRml2ZVNlY3Rpb24gLnByb2R1Y3QtaW5mbyB7XG4gICAgd2lkdGg6IDU1JTtcbiAgfVxuICAuSG9tZSAuRml2ZVNlY3Rpb24gLnByb2R1Y3QtaW5mbyAuaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5Ib21lIC5GaXZlU2VjdGlvbiAucHJvZHVjdC1pbmZvIC5pbWFnZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5Ib21lIC5GaXZlU2VjdGlvbiAucHJvZHVjdC1pbmZvIC50ZXh0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuSG9tZSAuRml2ZVNlY3Rpb24gLnByb2R1Y3QtaW5mbyAudGV4dCBwIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLkhvbWUgLkZpdmVTZWN0aW9uIGEuYnRuLWNvdXJzZXMge1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbiAgLkhvbWUgLlNpeFNlY3Rpb24gaDMge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5Ib21lIC5TaXhTZWN0aW9uIC5jYXJvdXNlbC1pdGVtIC5jYXJkcy1wcm9kdWN0cyAuY2FyZCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDIuNWVtIGF1dG87XG4gIH1cbiAgLkhvbWUgLlNldmVuU2VjdGlvbiBoMyB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLkhvbWUgLlNldmVuU2VjdGlvbiBwIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5Ib21lIC5TZXZlblNlY3Rpb24gLmNvbnRhY3QgaW5wdXQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5Ib21lIC5TZXZlblNlY3Rpb24gLmNvbnRhY3QgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLkhvbWUgLlNldmVuU2VjdGlvbiAuY29udGFjdCBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMS42ZW0gYXV0bztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuSG9tZSAuRmlyc3RTZWN0aW9uIGltZyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAuSG9tZSAuRmlyc3RTZWN0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDIuMmVtO1xuICB9XG4gIC5Ib21lIC5Ud29TZWN0aW9uIC5hbGwtVFMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuSG9tZSAuVHdvU2VjdGlvbiAuYWxsLVRTIGgyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuSG9tZSAuVHdvU2VjdGlvbiAuYWxsLVRTIGZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5Ib21lIC5Ud29TZWN0aW9uIC5hbGwtVFMgZm9ybSBpbnB1dCB7XG4gICAgbWFyZ2luOiAyZW0gYXV0byAyZW0gYXV0bztcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIC5Ib21lIC5UaGlyZFNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5Ib21lIC5UaGlyZFNlY3Rpb24gLmFsbC1USFMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5Ib21lIC5UaGlyZFNlY3Rpb24gLmFsbC1USFMgLmltZy1sZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLkhvbWUgLlRoaXJkU2VjdGlvbiAuYWxsLVRIUyAuaW1nLXNtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuSG9tZSAuVGhpcmRTZWN0aW9uIC5hbGwtVEhTIC5pbWctc20gaW1nIHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG4gIC5Ib21lIC5Gb3VyU2VjdGlvbiAuaW5mby1jb3Vyc2Uge1xuICAgIHBhZGRpbmctdG9wOiA0ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDRlbTtcbiAgfVxuICAuSG9tZSAuRm91clNlY3Rpb24gLmluZm8tY291cnNlIC5pbWFnZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbiAgLkhvbWUgLkZvdXJTZWN0aW9uIC5pbmZvLWNvdXJzZSAudGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLkhvbWUgLkZvdXJTZWN0aW9uIC5pbmZvLWNvdXJzZSAudGV4dCBoMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5Ib21lIC5Gb3VyU2VjdGlvbiAuaW5mby1jb3Vyc2UgLnRleHQgaDMgLnZpc2libGUtc20ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5Ib21lIC5Gb3VyU2VjdGlvbiAuaW5mby1jb3Vyc2UgLnRleHQgaHIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNjUlO1xuICB9XG4gIC5Ib21lIC5Gb3VyU2VjdGlvbiAuaW5mby1jb3Vyc2UgLnRleHQgcCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDAuNWVtIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5Ib21lIC5Gb3VyU2VjdGlvbiBhLmJ0bi1jb3Vyc2VzIHtcbiAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkhvbWUgLkZpdmVTZWN0aW9uIC5wcm9kdWN0LWluZm8ge1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbiAgLkhvbWUgLkZpdmVTZWN0aW9uIC5wcm9kdWN0LWluZm8gLmltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuSG9tZSAuRml2ZVNlY3Rpb24gLnByb2R1Y3QtaW5mbyAuaW1hZ2UgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuSG9tZSAuRml2ZVNlY3Rpb24gLnByb2R1Y3QtaW5mbyAudGV4dCB7XG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLkhvbWUgLkZpdmVTZWN0aW9uIC5wcm9kdWN0LWluZm8gLnRleHQgcCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5Ib21lIC5GaXZlU2VjdGlvbiBhLmJ0bi1jb3Vyc2VzIHtcbiAgICB3aWR0aDogMzUlO1xuICB9XG4gIC5Ib21lIC5TaXhTZWN0aW9uIGgzIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAuSG9tZSAuU2l4U2VjdGlvbiAuY2Fyb3VzZWwtaXRlbSAuY2FyZHMtcHJvZHVjdHMgLmNhcmQge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luOiAyLjVlbSBhdXRvO1xuICB9XG4gIC5Ib21lIC5TZXZlblNlY3Rpb24gaDMge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5Ib21lIC5TZXZlblNlY3Rpb24gcCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuSG9tZSAuU2V2ZW5TZWN0aW9uIC5jb250YWN0IGlucHV0IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAuSG9tZSAuU2V2ZW5TZWN0aW9uIC5jb250YWN0IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5Ib21lIC5TZXZlblNlY3Rpb24gLmNvbnRhY3QgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEuNmVtIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTMwNnB4KSB7XG4gIC5Gb3VyU2VjdGlvbiBhLmJ0bi1jb3Vyc2VzIHtcbiAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCJcclxuLyohXHJcbiAqIFdhdmVzIHYwLjYuMFxyXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcblxyXG4gLndhdmVzLWVmZmVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgICAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gIFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gV2F2ZXMgQ29sb3JzXHJcbiAgICAmLndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43MCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTdHlsZSBpbnB1dCBidXR0b24gYnVnLlxyXG4gICAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInJlc2V0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtbm90cmFuc2l0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmUgI3tcIiFpbXBvcnRhbnRcIn07XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgXHJcbiAgICAud2F2ZXMtYnV0dG9uLWlucHV0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXHJcbiAgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH0iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvX2luZGV4LnNjc3MnO1xyXG5cclxuLkhvbWUge1xyXG4gICAgLkZpcnN0U2VjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Q5RjJFRTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM2VtO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQuMGVtIDAgLjllbSAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuMmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzLjZlbTtcclxuICAgICAgICAgICAgY29sb3I6ICMwRTYxNTI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGMzk1QjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuVHdvU2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIuNWVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyLWlucHV0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGQzEwNztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctYnRuO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzgwbXM7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuODVlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzODBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAkZ3JleS03MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuVGhpcmRTZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwRTYxNTI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgICAgICAuYWxsLVRIUyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAuaW1nLWxnIHtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1zbWFsbDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxLjNlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4NDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1nLXNtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctc21hbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxLjNlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLkZvdXJTZWN0aW9uIHtcclxuICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZDMTA3O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1ZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIuNWVtO1xyXG4gICAgICAgIC5pbmZvLWNvdXJzZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCByZ2IoMTYwLCAxNTUsIDE1NSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMS4yZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzBFNjI1MztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGhyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOTVlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhLmJ0bi1jb3Vyc2VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBFNjI1MztcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMEU2MjUzO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAyZW0gYXV0bztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzODBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEU2MjUzO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDM4MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzBFNjI1MztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5GaXZlU2VjdGlvbiB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdC1pbmZvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGQzEwNztcclxuICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgICAgbWFyZ2luOiAzZW0gYXV0bztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4IHJnYigyNDIsIDI0MCwgMjQwKTtcclxuICAgICAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogLjg1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRNb250c2VycmF0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzBFNjI1MztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IC41ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhLmJ0bi1jb3Vyc2VzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEU2MTUyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMEU2MjUzO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAyZW0gYXV0bztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzODBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEU2MjUzO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkMxMDc7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzODBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICMyOTMyM2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuU2l4U2VjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRDlGMkVFOztcclxuICAgICAgICBwYWRkaW5nLXRvcDogNWVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1ZW07XHJcbiAgICAgICAgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclNTEyNjBFJyB2aWV3Qm94PScwIDAgOCA4JyUzRSUzQ3BhdGggZD0nTTUuMjUgMGwtNCA0IDQgNCAxLjUtMS41LTIuNS0yLjUgMi41LTIuNS0xLjUtMS41eicvJTNFJTNDL3N2ZyUzRVwiKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyU1MTI2MEUnIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBkPSdNMi43NSAwbC0xLjUgMS41IDIuNSAyLjUtMi41IDIuNSAxLjUgMS41IDQtNC00LTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogM2VtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkTW9udHNlcnJhdDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICAgICAgLmNhcmRzLXByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICNjNGM0YzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwRTYxNTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuU2V2ZW5TZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMEU2MTUyO1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIuNWVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IC44ZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNGVtO1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlci1pbnB1dDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJlbTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkMxMDc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93LWJ0bjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDM4MG1zO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzgwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggJGdyZXktNzAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgLkhvbWUge1xyXG4gICAgICAgIC5GaXJzdFNlY3Rpb24ge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5Ud29TZWN0aW9uIHtcclxuICAgICAgICAgICAgLmFsbC1UUyB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMmVtIGF1dG8gMmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5UaGlyZFNlY3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgLmFsbC1USFMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAuaW1nLWxnIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWctc20ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5Gb3VyU2VjdGlvbiB7XHJcbiAgICAgICAgICAgIC5pbmZvLWNvdXJzZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNGVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRlbTtcclxuICAgICAgICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52aXNpYmxlLXNtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEuYnRuLWNvdXJzZXMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLkZpdmVTZWN0aW9uIHtcclxuICAgICAgICAgICAgLnByb2R1Y3QtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhLmJ0bi1jb3Vyc2VzIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLlNpeFNlY3Rpb24ge1xyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICAgICAgICAgIC5jYXJkcy1wcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIuNWVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5TZXZlblNlY3Rpb24ge1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhY3Qge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNGVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNnB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5Ib21lIHtcclxuICAgICAgICAuRmlyc3RTZWN0aW9uIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuVHdvU2VjdGlvbiB7XHJcbiAgICAgICAgICAgIC5hbGwtVFMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJlbSBhdXRvIDJlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuVGhpcmRTZWN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIC5hbGwtVEhTIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLmltZy1sZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1nLXNtIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuRm91clNlY3Rpb24ge1xyXG4gICAgICAgICAgICAuaW5mby1jb3Vyc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDRlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0ZW07XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAudmlzaWJsZS1zbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhLmJ0bi1jb3Vyc2VzIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5GaXZlU2VjdGlvbiB7XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWluZm8ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYS5idG4tY291cnNlcyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5TaXhTZWN0aW9uIHtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAuY2FyZHMtcHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLjVlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuU2V2ZW5TZWN0aW9uIHtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhY3Qge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNGVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5Ib21lIHtcclxuICAgICAgICAuRmlyc3RTZWN0aW9uIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuVHdvU2VjdGlvbiB7XHJcbiAgICAgICAgICAgIC5hbGwtVFMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJlbSBhdXRvIDJlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuVGhpcmRTZWN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIC5hbGwtVEhTIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLmltZy1sZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1nLXNtIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuRm91clNlY3Rpb24ge1xyXG4gICAgICAgICAgICAuaW5mby1jb3Vyc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDRlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0ZW07XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAudmlzaWJsZS1zbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEuYnRuLWNvdXJzZXMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLkZpdmVTZWN0aW9uIHtcclxuICAgICAgICAgICAgLnByb2R1Y3QtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgICAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhLmJ0bi1jb3Vyc2VzIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLlNpeFNlY3Rpb24ge1xyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICAgICAgICAgIC5jYXJkcy1wcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIuNWVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5TZXZlblNlY3Rpb24ge1xyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFjdCB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuSG9tZSB7XHJcbiAgICAgICAgLkZpcnN0U2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLlR3b1NlY3Rpb24ge1xyXG4gICAgICAgICAgICAuYWxsLVRTIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyZW0gYXV0byAyZW0gYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLlRoaXJkU2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAuYWxsLVRIUyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIC5pbWctbGcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltZy1zbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLkZvdXJTZWN0aW9uIHtcclxuICAgICAgICAgICAgLmluZm8tY291cnNlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0ZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNGVtO1xyXG4gICAgICAgICAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpc2libGUtc20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41ZW0gYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhLmJ0bi1jb3Vyc2VzIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNSUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5GaXZlU2VjdGlvbiB7XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWluZm8ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYS5idG4tY291cnNlcyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5TaXhTZWN0aW9uIHtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAuY2FyZHMtcHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLjVlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuU2V2ZW5TZWN0aW9uIHtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhY3Qge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxLjZlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IFxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMzA2cHgpIHtcclxuICAgIC5Gb3VyU2VjdGlvbiB7XHJcbiAgICAgICAgYS5idG4tY291cnNlcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSUhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomeModule */

  /***/
  function _src_app_pages_home_homeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var HomeModule = /*#__PURE__*/_createClass(function HomeModule() {
      _classCallCheck(this, HomeModule);
    });

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map