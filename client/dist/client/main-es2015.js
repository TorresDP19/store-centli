(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contacto/contacto.component */ "./src/app/components/contacto/contacto.component.ts");
/* harmony import */ var _components_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tutorial/tutorial.component */ "./src/app/components/tutorial/tutorial.component.ts");


 // Importa AboutusComponent




const routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomeModule) },
    { path: 'learning', loadChildren: () => __webpack_require__.e(/*! import() | pages-learning-learning-module */ "pages-learning-learning-module").then(__webpack_require__.bind(null, /*! ./pages/learning/learning.module */ "./src/app/pages/learning/learning.module.ts")).then(m => m.LearningModule) },
    { path: 'store', loadChildren: () => __webpack_require__.e(/*! import() | pages-store-store-module */ "pages-store-store-module").then(__webpack_require__.bind(null, /*! ./pages/store/store.module */ "./src/app/pages/store/store.module.ts")).then(m => m.StoreModule) },
    { path: 'aboutus', component: _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutusComponent"] },
    { path: 'contacto', component: _components_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__["ContactoComponent"] },
    { path: 'tutorial', component: _components_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_4__["TutorialComponent"] },
    { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
// src/app/app.module.ts







 // Importa ComponentsModule

class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutusComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutusComponent.ɵfac = function AboutusComponent_Factory(t) { return new (t || AboutusComponent)(); };
AboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutusComponent, selectors: [["app-aboutus"]], decls: 133, vars: 0, consts: [[1, "privacy-policy"], [1, "navbar-brand"], ["src", "../../../assets/webv.png", "alt", "Logo", "width", "auto"], [1, "cancellation-policy"], [1, "return-policy"], ["src", "../../../assets/number2.jpg", "alt", "Logo", "width", "600px"], [1, "google-maps", 2, "width", "100%", "height", "400px", "margin-top", "20px"], ["src", "https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL_HERE", "width", "100%", "height", "100%", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"]], template: function AboutusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pol\u00EDtica de Privacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "En [CENTLI] valoramos tu privacidad y estamos comprometidos con la protecci\u00F3n de tus datos personales. Esta pol\u00EDtica de privacidad explica c\u00F3mo recopilamos, utilizamos y protegemos tu informaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1. Informaci\u00F3n que Recopilamos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Recopilamos informaci\u00F3n personal que nos proporcionas al interactuar con nuestros servicios. Esto puede incluir:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Direcci\u00F3n de correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Informaci\u00F3n de pago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Direcci\u00F3n IP y datos de navegaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "2. Uso de la Informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "La informaci\u00F3n que recopilamos se utiliza para:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Proveer y mejorar nuestros servicios.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Gestionar tu cuenta o realizar compras.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Enviarte actualizaciones, promociones o informaci\u00F3n relevante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Mejorar la experiencia del usuario en nuestro sitio web.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "3. Protecci\u00F3n de la Informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Tomamos medidas de seguridad razonables para proteger tus datos personales, incluidos m\u00E9todos de encriptaci\u00F3n y almacenamiento seguro. Sin embargo, ning\u00FAn sistema es completamente infalible, y no podemos garantizar la seguridad absoluta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "4. Compartir Informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "No vendemos ni compartimos tu informaci\u00F3n personal con terceros, excepto en los siguientes casos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cuando sea necesario para cumplir con la ley o una orden judicial.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Con proveedores de servicios que nos ayuden a operar nuestro sitio web y procesar pagos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "5. Tus Derechos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Tienes derecho a acceder, corregir o eliminar tu informaci\u00F3n personal. Si deseas ejercer estos derechos, puedes ponerte en contacto con nosotros a trav\u00E9s de [CENTLI.MXGMAIL.COM].");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "6. Cambios en la Pol\u00EDtica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Podemos actualizar esta pol\u00EDtica de privacidad en cualquier momento. Te notificaremos sobre cambios importantes en esta p\u00E1gina. Te recomendamos revisar esta p\u00E1gina peri\u00F3dicamente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "7. Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Si tienes alguna pregunta o inquietud acerca de nuestra pol\u00EDtica de privacidad, no dudes en contactarnos a [CENTLI.MXGMAIL.COM].");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Pol\u00EDtica de Cancelaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "En [CENTLI], queremos ofrecerte una experiencia de compra c\u00F3moda y segura. Si deseas cancelar un pedido, te pedimos que sigas las condiciones que se detallan a continuaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "1. Cancelaci\u00F3n de Pedidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Si deseas cancelar un pedido, puedes hacerlo dentro de las 24 horas posteriores a la compra. Pasado este plazo, no podremos garantizar la cancelaci\u00F3n, ya que el proceso de env\u00EDo podr\u00EDa haber comenzado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "2. Procedimiento de Cancelaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Para cancelar tu pedido, por favor cont\u00E1ctanos a trav\u00E9s de [correo de contacto] indicando tu n\u00FAmero de pedido y la solicitud de cancelaci\u00F3n. Nuestro equipo te proporcionar\u00E1 instrucciones adicionales si es necesario.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "3. Excepciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Algunas compras, como productos personalizados o bajo pedido, pueden no ser elegibles para cancelaci\u00F3n. En estos casos, te informaremos previamente antes de completar tu compra.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Pol\u00EDtica de Devoluci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "En [CENTLI], queremos asegurarnos de que est\u00E9s completamente satisfecho con tu compra. Si necesitas devolver un producto, por favor revisa las condiciones a continuaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "1. Plazo para Devoluciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Las devoluciones de productos son aceptadas dentro de los [n\u00FAmero de d\u00EDas, por ejemplo: 30 d\u00EDas] posteriores a la compra, siempre y cuando el producto est\u00E9 en su estado original, sin usar y con todos los empaques intactos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "2. Productos No Aceptados para Devoluci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "No se aceptan devoluciones en los siguientes casos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Productos personalizados o hechos a medida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Productos que han sido abiertos o usados, a menos que est\u00E9n defectuosos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Productos perecederos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "3. Procedimiento de Devoluci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Para realizar una devoluci\u00F3n, por favor contacta a nuestro servicio de atenci\u00F3n al cliente a trav\u00E9s de [CENTLIMXGMAIL.COM] dentro del plazo establecido. Te proporcionaremos instrucciones para el env\u00EDo del producto de vuelta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "4. Reembolso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Una vez que recibamos el producto devuelto y verifiquemos su condici\u00F3n, procesaremos el reembolso. El reembolso se realizar\u00E1 al mismo m\u00E9todo de pago utilizado para la compra. El tiempo para procesar el reembolso puede variar dependiendo del m\u00E9todo de pago.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "5. Gastos de Env\u00EDo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Los gastos de env\u00EDo de las devoluciones son responsabilidad del cliente, salvo que el producto est\u00E9 defectuoso o haya sido enviado por error.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "CONTACTANOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "1. Informaci\u00F3n que Recopilamos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Recopilamos informaci\u00F3n personal que nos proporcionas al interactuar con nuestros servicios. Esto puede incluir:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Nombre: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "CENTLI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Direcci\u00F3n de correo electr\u00F3nico:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "CENTLIGMAIL.COM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "5528151067");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "LI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Direccion donde nos encontramos: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Av. Primero de Mayo s/n, Cumbria, 54730 Cuautitl\u00E1n Izcalli, M\u00E9x.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "iframe", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".privacy-policy[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 20px auto;\n  font-family: Arial, sans-serif;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  color: #333;\n}\n\np[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #555;\n}\n\nul[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.cancellation-policy[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 20px auto;\n  font-family: Arial, sans-serif;\n}\n\n.return-policy[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 20px auto;\n  font-family: Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dHVzL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFib3V0dXNcXGFib3V0dXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ0VKOztBREFFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcml2YWN5LXBvbGljeSB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIGgxLCBoMiB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgfVxyXG4gIFxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxuICBcclxuICB1bCBsaSB7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gIH1cclxuICAuY2FuY2VsbGF0aW9uLXBvbGljeXtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLnJldHVybi1wb2xpY3l7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfSIsIi5wcml2YWN5LXBvbGljeSB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbmgxLCBoMiB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgY29sb3I6ICM1NTU7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbnVsIGxpIHtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmNhbmNlbGxhdGlvbi1wb2xpY3kge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4ucmV0dXJuLXBvbGljeSB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutus',
                templateUrl: './aboutus.component.html',
                styleUrls: ['./aboutus.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");
/* harmony import */ var _footer_learning_footer_learning_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer-learning/footer-learning.component */ "./src/app/components/footer-learning/footer-learning.component.ts");
/* harmony import */ var _navbar_store_navbar_store_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar-store/navbar-store.component */ "./src/app/components/navbar-store/navbar-store.component.ts");
/* harmony import */ var _footer_store_footer_store_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer-store/footer-store.component */ "./src/app/components/footer-store/footer-store.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/components/contacto/contacto.component.ts");
/* harmony import */ var _promociones_promociones_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./promociones/promociones.component */ "./src/app/components/promociones/promociones.component.ts");
/* harmony import */ var _preguntas_preguntas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./preguntas/preguntas.component */ "./src/app/components/preguntas/preguntas.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/components/tutorial/tutorial.component.ts");
// src/app/components/components.module.ts















class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_5__["NavbarLearningComponent"],
        _footer_learning_footer_learning_component__WEBPACK_IMPORTED_MODULE_6__["FooterLearningComponent"],
        _navbar_store_navbar_store_component__WEBPACK_IMPORTED_MODULE_7__["NavbarStoreComponent"],
        _footer_store_footer_store_component__WEBPACK_IMPORTED_MODULE_8__["FooterStoreComponent"],
        _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["AboutusComponent"],
        _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__["ContactoComponent"],
        _promociones_promociones_component__WEBPACK_IMPORTED_MODULE_11__["PromocionesComponent"],
        _preguntas_preguntas_component__WEBPACK_IMPORTED_MODULE_12__["PreguntasComponent"],
        _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__["TutorialComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_5__["NavbarLearningComponent"],
        _footer_learning_footer_learning_component__WEBPACK_IMPORTED_MODULE_6__["FooterLearningComponent"],
        _navbar_store_navbar_store_component__WEBPACK_IMPORTED_MODULE_7__["NavbarStoreComponent"],
        _footer_store_footer_store_component__WEBPACK_IMPORTED_MODULE_8__["FooterStoreComponent"],
        _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["AboutusComponent"],
        _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__["ContactoComponent"],
        _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__["TutorialComponent"] // Exporta TutorialComponent aquí
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_5__["NavbarLearningComponent"],
                    _footer_learning_footer_learning_component__WEBPACK_IMPORTED_MODULE_6__["FooterLearningComponent"],
                    _navbar_store_navbar_store_component__WEBPACK_IMPORTED_MODULE_7__["NavbarStoreComponent"],
                    _footer_store_footer_store_component__WEBPACK_IMPORTED_MODULE_8__["FooterStoreComponent"],
                    _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["AboutusComponent"],
                    _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__["ContactoComponent"],
                    _promociones_promociones_component__WEBPACK_IMPORTED_MODULE_11__["PromocionesComponent"],
                    _preguntas_preguntas_component__WEBPACK_IMPORTED_MODULE_12__["PreguntasComponent"],
                    _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__["TutorialComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                exports: [
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_5__["NavbarLearningComponent"],
                    _footer_learning_footer_learning_component__WEBPACK_IMPORTED_MODULE_6__["FooterLearningComponent"],
                    _navbar_store_navbar_store_component__WEBPACK_IMPORTED_MODULE_7__["NavbarStoreComponent"],
                    _footer_store_footer_store_component__WEBPACK_IMPORTED_MODULE_8__["FooterStoreComponent"],
                    _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["AboutusComponent"],
                    _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_10__["ContactoComponent"],
                    _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__["TutorialComponent"] // Exporta TutorialComponent aquí
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/contacto/contacto.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacto/contacto.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ContactoComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactoComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactoComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactoComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A1Formulario enviado con \u00E9xito! Nos pondremos en contacto contigo pronto. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactoComponent {
    constructor() {
        this.contact = {
            name: '',
            email: '',
            message: ''
        };
        this.formSent = false; // Nueva propiedad para saber si el formulario se envió correctamente
    }
    onSubmit() {
        if (this.contact.name && this.contact.email && this.contact.message) {
            // Simular el envío del formulario
            console.log('Formulario enviado:', this.contact);
            // Aquí puedes agregar tu lógica para enviar los datos (por ejemplo, usando un servicio HTTP)
            // Establecer formSent a true para mostrar el mensaje de éxito
            this.formSent = true;
            // Limpiar el formulario después de enviarlo (opcional)
            this.contact = { name: '', email: '', message: '' };
        }
        else {
            console.log('Formulario no válido');
        }
    }
    // Opcional: Si deseas ocultar el mensaje de éxito después de un tiempo
    resetFormStatus() {
        setTimeout(() => {
            this.formSent = false; // Restablecer el estado después de 5 segundos
        }, 5000); // 5 segundos
    }
}
ContactoComponent.ɵfac = function ContactoComponent_Factory(t) { return new (t || ContactoComponent)(); };
ContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactoComponent, selectors: [["app-contacto"]], decls: 28, vars: 8, consts: [[1, "contact-form"], [1, "navbar-brand"], ["src", "../../../assets/logo.png", "alt", "Logo", "width", "auto"], [3, "ngSubmit"], ["contactForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "error-message", 4, "ngIf"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "message"], ["id", "message", "name", "message", "rows", "4", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["message", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "alert alert-success mt-4", 4, "ngIf"], [1, "error-message"], [1, "alert", "alert-success", "mt-4"]], template: function ContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cont\u00E1ctanos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactoComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactoComponent_Template_input_ngModelChange_10_listener($event) { return ctx.contact.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ContactoComponent_div_12_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Correo electr\u00F3nico:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactoComponent_Template_input_ngModelChange_16_listener($event) { return ctx.contact.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContactoComponent_div_18_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Descripci\u00F3n del problema:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "textarea", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactoComponent_Template_textarea_ngModelChange_22_listener($event) { return ctx.contact.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ContactoComponent_div_24_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ContactoComponent_div_27_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSent);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"]], styles: [".contact-form[_ngcontent-%COMP%] {\n  max-width: 6000px;\n  margin: 0 auto;\n  padding: 100px;\n  background-color: #989de2;\n  border-radius: 10px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 90px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n}\n\n.alert[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #28a745;\n  color: white;\n  border-radius: 5px;\n  font-size: 16px;\n}\n\n.alert-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0by9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0b1xcY29udGFjdG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdFO0VBQ0UsbUJBQUE7QUNBSjs7QURHRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0U7RUFDRSx5QkFBQTtBQ0FKOztBREdFO0VBQ0UsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhY3QtZm9ybSB7XHJcbiAgICBtYXgtd2lkdGg6IDYwMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5ZGUyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLmFsZXJ0IHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1OyAgLy8gVmVyZGUgcGFyYSBlbCBtZW5zYWplIGRlIMOpeGl0b1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuYWxlcnQtc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1OyAgLy8gVmVyZGVcclxuICB9XHJcbiAgXHJcbiAgLm10LTQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgIiwiLmNvbnRhY3QtZm9ybSB7XG4gIG1heC13aWR0aDogNjAwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ODlkZTI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hbGVydCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5hbGVydC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbn1cblxuLm10LTQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacto',
                templateUrl: './contacto.component.html',
                styleUrls: ['./contacto.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer-learning/footer-learning.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/footer-learning/footer-learning.component.ts ***!
  \*************************************************************************/
/*! exports provided: FooterLearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterLearningComponent", function() { return FooterLearningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterLearningComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterLearningComponent.ɵfac = function FooterLearningComponent_Factory(t) { return new (t || FooterLearningComponent)(); };
FooterLearningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterLearningComponent, selectors: [["app-footer-learning"]], decls: 0, vars: 0, template: function FooterLearningComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyLWxlYXJuaW5nL2Zvb3Rlci1sZWFybmluZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterLearningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-learning',
                templateUrl: './footer-learning.component.html',
                styleUrls: ['./footer-learning.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/footer-store/footer-store.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/footer-store/footer-store.component.ts ***!
  \*******************************************************************/
/*! exports provided: FooterStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterStoreComponent", function() { return FooterStoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterStoreComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterStoreComponent.ɵfac = function FooterStoreComponent_Factory(t) { return new (t || FooterStoreComponent)(); };
FooterStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterStoreComponent, selectors: [["app-footer-store"]], decls: 0, vars: 0, template: function FooterStoreComponent_Template(rf, ctx) { }, styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXItc3RvcmUvQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci1zdG9yZS9mb290ZXItc3RvcmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyLXN0b3JlL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX193YXZlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDQTtFQUNJLGFBQUE7QUNwQ0o7O0FEdUNBO0VBQ0ksaUhBQUE7QUNwQ0o7O0FEdUNBO0VBQ0ksNkNBQUE7QUNwQ0o7O0FEdUNBO0VBQ0ksZ0NBQUE7QUNwQ0o7O0FEcUNJO0VBQ0ksZ0NBQUE7QUNuQ1I7O0FEdUNBO0VBQ0ksZUFBQTtBQ3BDSjs7QUNwQkE7Ozs7Ozs7RUFBQTs7QUFVQztFQUNHLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FEcUJKOztBQ25CSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBRG9CTjs7QUNoQkk7RUFDRSwyQ0FBQTtBRGtCTjs7QUNoQkk7RUFDRSx3Q0FBQTtBRGtCTjs7QUNoQkk7RUFDRSx5Q0FBQTtBRGtCTjs7QUNoQkk7RUFDRSx3Q0FBQTtBRGtCTjs7QUNoQkk7RUFDRSx5Q0FBQTtBRGtCTjs7QUNoQkk7RUFDRSx3Q0FBQTtBRGtCTjs7QUNoQkk7RUFDRSx3Q0FBQTtBRGtCTjs7QUNkSTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBRGdCTjs7QUNiSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBRGVOOztBQ1hFO0VBQ0UsMkJBQUE7QURjSjs7QUNYRTtFQUNFLHdCQUFBO0VBQ0EsMkVBQUE7QURjSjs7QUNYRTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QURjSjs7QUNaSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FEY047O0FDVkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FEYUo7O0FDVkU7RUFDRSxjQUFBO0FEYUo7O0FDVkUsb0NBQUE7O0FBQ0E7RUFDRSxXQUFBO0FEYUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci1zdG9yZS9mb290ZXItc3RvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJGJhci13aWR0aDogMjVweDtcclxuJGJhci1oZWlnaHQ6IDMuMXB4O1xyXG4kYmFyLXNwYWNpbmc6IDdweDtcclxuXHJcbiRNb250c2VycmF0OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRNdWxpc2g6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kUG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuJGJvcmRlci1pbnB1dDogI2M5ZDNkZDtcclxuXHJcbiRzaGFkb3ctbmF2OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1idG46IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1zbWFsbDogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kc2hhZG93LWNvbnRhaW5lci1zbWFsbDogMCAxMHB4IDIwcHggMCByZ2IoMCAwIDAgLyA1JSk7XHJcbiRzaGFkb3ctY29udGFpbmVyOiAwIDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDFweCAxcHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4kc2hhZG93LW5hdi1zbWFsbDogMCAycHggMzBweCAwIHJnYigyMDcgMjA3IDIwNyAvIDUwJSk7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzBFNjE1MjtcclxuJGdyZXktODAwOiAjNDI0MjQyO1xyXG4kZ3JleS03MDA6ICMyOTMyM2Q7XHJcbiRncmV5LTYwMDogIzc5OGRhMztcclxuJGdyZXktNTAwOiAjMEU2MTUyO1xyXG4kZ3JleS00MDA6ICM5ZmFmYzE7XHJcbiRncmV5LTMwMDogIzMzMzMzMztcclxuJGdyZXktMjAwOiAjNGQ0ZDRkO1xyXG4kZ3JleS0xMDA6ICM2NjY2NjY7XHJcbiRwaW5rLWZpcnN0OiAjZTFkOWQ1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS0yOiAjZWRmMGY0O1xyXG5cclxuJGJsYWNrLTgwMDogIzAwMDtcclxuJGJsYWNrLTcwMDogIzE0MTQxNDtcclxuJGJsYWNrLTYwMDogIzFiMWIxYjtcclxuJGJsYWNrLTUwMDogIzBFNjE1MjtcclxuXHJcblxyXG4udmlzaWJsZS1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2hhZG93LW5hdiB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLnNoYWRvdy1zbWFsbCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50ZXh0LW5vbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIudmlzaWJsZS1zbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGFkb3ctbmF2IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zaGFkb3ctc21hbGwge1xuICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50ZXh0LW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi50ZXh0LW5vbmU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIVxuICogV2F2ZXMgdjAuNi4wXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLndhdmVzLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9YnV0dG9uXSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXJlc2V0XSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3QgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLndhdmVzLW5vdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xufVxuXG4ud2F2ZXMtaW5wdXQtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLndhdmVzLWlucHV0LXdyYXBwZXIgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG59XG5cbi53YXZlcy1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICB6LWluZGV4OiAtMTtcbn0iLCJcclxuLyohXHJcbiAqIFdhdmVzIHYwLjYuMFxyXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcblxyXG4gLndhdmVzLWVmZmVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgICAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gIFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gV2F2ZXMgQ29sb3JzXHJcbiAgICAmLndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43MCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTdHlsZSBpbnB1dCBidXR0b24gYnVnLlxyXG4gICAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInJlc2V0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtbm90cmFuc2l0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmUgI3tcIiFpbXBvcnRhbnRcIn07XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgXHJcbiAgICAud2F2ZXMtYnV0dG9uLWlucHV0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXHJcbiAgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterStoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-store',
                templateUrl: './footer-store.component.html',
                styleUrls: ['./footer-store.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 32, vars: 0, consts: [[1, "footer", "d-lg-flex", "justify-content-lg-around"], ["data-aos", "fade-down", 1, "title"], ["data-aos", "fade-down", 1, "links", "d-lg-flex", "justify-content-lg-around"], ["href", "/contacto"], ["width", "85%", 1, "visible-sm"], ["href", "/aboutus"], [1, "icons"], ["data-aos", "fade-down", 1, "d-lg-flex", "justify-content-lg-center"], ["href", "https://www.facebook.com/profile.php?id=61568122421645"], ["src", "../../../assets/svg/Facebook.svg", "alt", "Icon1"], ["href", "https://www.instagram.com/centli862/"], ["src", "../../../assets/svg/instagram.svg", "alt", "Icon2"], ["href", "https://x.com/centli862"], ["src", "../../../assets/svg/twitter_squared.svg", "alt", "Icon3"], ["width", "100%"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Centli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Acerca de Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Aviso de privacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00A9TorresDP Derechos Reservados 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\nfooter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  padding-top: 2em;\n}\n\nfooter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\nfooter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5em;\n  margin: 20px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  color: #0E6152;\n}\n\nfooter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\nfooter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  list-style: none;\n}\n\nfooter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  font-family: \"Poppins\", sans-serif;\n  color: #424242;\n}\n\nfooter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0E6152;\n  text-decoration: none;\n}\n\nfooter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\nfooter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nfooter[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 100%;\n  max-width: 25px;\n}\n\nfooter[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 2em auto 1.5em auto;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  color: #9fafc1;\n  font-size: 0.85em;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n@media screen and (min-width: 0px) and (max-width: 425px) {\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    padding-top: 0.1em;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 40px !important;\n  }\n}\n\n@media screen and (min-width: 426px) and (max-width: 600px) {\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    padding-top: 0.1em;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 40px !important;\n  }\n}\n\n@media screen and (min-width: 601px) and (max-width: 767px) {\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    padding-top: 0.1em;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 40px !important;\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 991px) {\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    padding-top: 0.1em;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 40px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX193YXZlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ0E7RUFDSSxhQUFBO0FDcENKOztBRHVDQTtFQUNJLGlIQUFBO0FDcENKOztBRHVDQTtFQUNJLDZDQUFBO0FDcENKOztBRHVDQTtFQUNJLGdDQUFBO0FDcENKOztBRHFDSTtFQUNJLGdDQUFBO0FDbkNSOztBRHVDQTtFQUNJLGVBQUE7QUNwQ0o7O0FDcEJBOzs7Ozs7O0VBQUE7O0FBVUM7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRHFCSjs7QUNuQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QURvQk47O0FDaEJJO0VBQ0UsMkNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDZEk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURnQk47O0FDYkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QURlTjs7QUNYRTtFQUNFLDJCQUFBO0FEY0o7O0FDWEU7RUFDRSx3QkFBQTtFQUNBLDJFQUFBO0FEY0o7O0FDWEU7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FEY0o7O0FDWkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRGNOOztBQ1ZFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBRGFKOztBQ1ZFO0VBQ0UsY0FBQTtBRGFKOztBQ1ZFLG9DQUFBOztBQUNBO0VBQ0UsV0FBQTtBRGFKOztBRTFISTtFQUNJLGdCQUFBO0FGNkhSOztBRTVIUTtFQUNJLFVBQUE7QUY4SFo7O0FFN0hZO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0hKTjtFR0tNLGdCQUFBO0VBQ0EsY0hLQTtBQzBIaEI7O0FFNUhRO0VBQ0ksVUFBQTtBRjhIWjs7QUU3SFk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FGK0hoQjs7QUU5SGdCO0VBQ0ksaUJBQUE7RUFDQSxrQ0hoQlY7RUdpQlUsY0hMVDtBQ3FJWDs7QUUvSG9CO0VBQ0ksY0hSUjtFR1NRLHFCQUFBO0FGaUl4Qjs7QUU1SFE7RUFDSSxVQUFBO0FGOEhaOztBRTdIWTtFQUNJLGdCQUFBO0FGK0hoQjs7QUU3SG9CO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FGK0h4Qjs7QUV6SEk7RUFDSSwyQkFBQTtFQUNBLGtDSHpDRTtFRzBDRixnQkFBQTtFQUNBLGNIM0JHO0VHNEJILGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBRjJIUjs7QUV0SEE7RUFHWTtJQUNJLHNCQUFBO0VGdUhkO0VFckhVO0lBQ0ksa0JBQUE7RUZ1SGQ7RUV0SGM7SUFDSSxrQkFBQTtFRndIbEI7RUV0SGM7SUFDSSxjQUFBO0VGd0hsQjtFRXJIVTtJQUNJLGtCQUFBO0VGdUhkO0VFdEhjO0lBQ0ksVUFBQTtFRndIbEI7RUV2SGtCO0lBQ0ksMEJBQUE7RUZ5SHRCO0FBQ0Y7O0FFbEhBO0VBR1k7SUFDSSxzQkFBQTtFRmtIZDtFRWhIVTtJQUNJLGtCQUFBO0VGa0hkO0VFakhjO0lBQ0ksa0JBQUE7RUZtSGxCO0VFakhjO0lBQ0ksY0FBQTtFRm1IbEI7RUVoSFU7SUFDSSxrQkFBQTtFRmtIZDtFRWpIYztJQUNJLFVBQUE7RUZtSGxCO0VFbEhrQjtJQUNJLDBCQUFBO0VGb0h0QjtBQUNGOztBRTdHQTtFQUdZO0lBQ0ksc0JBQUE7RUY2R2Q7RUUzR1U7SUFDSSxrQkFBQTtFRjZHZDtFRTVHYztJQUNJLGtCQUFBO0VGOEdsQjtFRTVHYztJQUNJLGNBQUE7RUY4R2xCO0VFM0dVO0lBQ0ksa0JBQUE7RUY2R2Q7RUU1R2M7SUFDSSxVQUFBO0VGOEdsQjtFRTdHa0I7SUFDSSwwQkFBQTtFRitHdEI7QUFDRjs7QUV4R0E7RUFHWTtJQUNJLHNCQUFBO0VGd0dkO0VFdEdVO0lBQ0ksa0JBQUE7RUZ3R2Q7RUV2R2M7SUFDSSxrQkFBQTtFRnlHbEI7RUV2R2M7SUFDSSxjQUFBO0VGeUdsQjtFRXRHVTtJQUNJLGtCQUFBO0VGd0dkO0VFdkdjO0lBQ0ksVUFBQTtFRnlHbEI7RUV4R2tCO0lBQ0ksMEJBQUE7RUYwR3RCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJGJhci13aWR0aDogMjVweDtcclxuJGJhci1oZWlnaHQ6IDMuMXB4O1xyXG4kYmFyLXNwYWNpbmc6IDdweDtcclxuXHJcbiRNb250c2VycmF0OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRNdWxpc2g6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kUG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuJGJvcmRlci1pbnB1dDogI2M5ZDNkZDtcclxuXHJcbiRzaGFkb3ctbmF2OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1idG46IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1zbWFsbDogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kc2hhZG93LWNvbnRhaW5lci1zbWFsbDogMCAxMHB4IDIwcHggMCByZ2IoMCAwIDAgLyA1JSk7XHJcbiRzaGFkb3ctY29udGFpbmVyOiAwIDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDFweCAxcHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4kc2hhZG93LW5hdi1zbWFsbDogMCAycHggMzBweCAwIHJnYigyMDcgMjA3IDIwNyAvIDUwJSk7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzBFNjE1MjtcclxuJGdyZXktODAwOiAjNDI0MjQyO1xyXG4kZ3JleS03MDA6ICMyOTMyM2Q7XHJcbiRncmV5LTYwMDogIzc5OGRhMztcclxuJGdyZXktNTAwOiAjMEU2MTUyO1xyXG4kZ3JleS00MDA6ICM5ZmFmYzE7XHJcbiRncmV5LTMwMDogIzMzMzMzMztcclxuJGdyZXktMjAwOiAjNGQ0ZDRkO1xyXG4kZ3JleS0xMDA6ICM2NjY2NjY7XHJcbiRwaW5rLWZpcnN0OiAjZTFkOWQ1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS0yOiAjZWRmMGY0O1xyXG5cclxuJGJsYWNrLTgwMDogIzAwMDtcclxuJGJsYWNrLTcwMDogIzE0MTQxNDtcclxuJGJsYWNrLTYwMDogIzFiMWIxYjtcclxuJGJsYWNrLTUwMDogIzBFNjE1MjtcclxuXHJcblxyXG4udmlzaWJsZS1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2hhZG93LW5hdiB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLnNoYWRvdy1zbWFsbCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50ZXh0LW5vbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIudmlzaWJsZS1zbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGFkb3ctbmF2IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zaGFkb3ctc21hbGwge1xuICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50ZXh0LW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi50ZXh0LW5vbmU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIVxuICogV2F2ZXMgdjAuNi4wXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLndhdmVzLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9YnV0dG9uXSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXJlc2V0XSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3QgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLndhdmVzLW5vdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xufVxuXG4ud2F2ZXMtaW5wdXQtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLndhdmVzLWlucHV0LXdyYXBwZXIgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG59XG5cbi53YXZlcy1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICB6LWluZGV4OiAtMTtcbn1cblxuZm9vdGVyIC5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogMmVtO1xufVxuZm9vdGVyIC5mb290ZXIgLnRpdGxlIHtcbiAgd2lkdGg6IDMwJTtcbn1cbmZvb3RlciAuZm9vdGVyIC50aXRsZSBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMEU2MTUyO1xufVxuZm9vdGVyIC5mb290ZXIgLmxpbmtzIHtcbiAgd2lkdGg6IDQwJTtcbn1cbmZvb3RlciAuZm9vdGVyIC5saW5rcyBsaSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5mb290ZXIgLmZvb3RlciAubGlua3MgbGkgYSB7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNDI0MjQyO1xufVxuZm9vdGVyIC5mb290ZXIgLmxpbmtzIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzBFNjE1MjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuZm9vdGVyIC5mb290ZXIgLmljb25zIHtcbiAgd2lkdGg6IDMwJTtcbn1cbmZvb3RlciAuZm9vdGVyIC5pY29ucyBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5mb290ZXIgLmZvb3RlciAuaWNvbnMgbGkgYSBpbWcge1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDI1cHg7XG59XG5mb290ZXIgaDQge1xuICBtYXJnaW46IDJlbSBhdXRvIDEuNWVtIGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM5ZmFmYzE7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIGZvb3RlciAuZm9vdGVyIGRpdiB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICBmb290ZXIgLmZvb3RlciAubGlua3Mge1xuICAgIHBhZGRpbmctdG9wOiAwLjFlbTtcbiAgfVxuICBmb290ZXIgLmZvb3RlciAubGlua3MgbGkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBmb290ZXIgLmZvb3RlciAubGlua3MgLnZpc2libGUtc20ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIGZvb3RlciAuZm9vdGVyIC5pY29ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGZvb3RlciAuZm9vdGVyIC5pY29ucyB1bCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBmb290ZXIgLmZvb3RlciAuaWNvbnMgdWwgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBmb290ZXIgLmZvb3RlciBkaXYge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgZm9vdGVyIC5mb290ZXIgLmxpbmtzIHtcbiAgICBwYWRkaW5nLXRvcDogMC4xZW07XG4gIH1cbiAgZm9vdGVyIC5mb290ZXIgLmxpbmtzIGxpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgZm9vdGVyIC5mb290ZXIgLmxpbmtzIC52aXNpYmxlLXNtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBmb290ZXIgLmZvb3RlciAuaWNvbnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBmb290ZXIgLmZvb3RlciAuaWNvbnMgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgZm9vdGVyIC5mb290ZXIgLmljb25zIHVsIGltZyB7XG4gICAgbWF4LXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgZm9vdGVyIC5mb290ZXIgZGl2IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIGZvb3RlciAuZm9vdGVyIC5saW5rcyB7XG4gICAgcGFkZGluZy10b3A6IDAuMWVtO1xuICB9XG4gIGZvb3RlciAuZm9vdGVyIC5saW5rcyBsaSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGZvb3RlciAuZm9vdGVyIC5saW5rcyAudmlzaWJsZS1zbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgZm9vdGVyIC5mb290ZXIgLmljb25zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgZm9vdGVyIC5mb290ZXIgLmljb25zIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGZvb3RlciAuZm9vdGVyIC5pY29ucyB1bCBpbWcge1xuICAgIG1heC13aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIGZvb3RlciAuZm9vdGVyIGRpdiB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICBmb290ZXIgLmZvb3RlciAubGlua3Mge1xuICAgIHBhZGRpbmctdG9wOiAwLjFlbTtcbiAgfVxuICBmb290ZXIgLmZvb3RlciAubGlua3MgbGkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBmb290ZXIgLmZvb3RlciAubGlua3MgLnZpc2libGUtc20ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIGZvb3RlciAuZm9vdGVyIC5pY29ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGZvb3RlciAuZm9vdGVyIC5pY29ucyB1bCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBmb290ZXIgLmZvb3RlciAuaWNvbnMgdWwgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgfVxufSIsIlxyXG4vKiFcclxuICogV2F2ZXMgdjAuNi4wXHJcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuXHJcbiAud2F2ZXMtZWZmZWN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLW91dDtcclxuICBcclxuICAgIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6LTEwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgXHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBXYXZlcyBDb2xvcnNcclxuICAgICYud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcwKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIFN0eWxlIGlucHV0IGJ1dHRvbiBidWcuXHJcbiAgICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwicmVzZXRcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1ub3RyYW5zaXRpb24ge1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZSAje1wiIWltcG9ydGFudFwifTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1pbnB1dC13cmFwcGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBcclxuICAgIC53YXZlcy1idXR0b24taW5wdXQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMi41ZW07XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cclxuICAud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfSIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9faW5kZXguc2Nzcyc7XHJcblxyXG5mb290ZXIge1xyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubGlua3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleS04MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBtYXJnaW46IDJlbSBhdXRvIDEuNWVtIGF1dG87XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6ICRncmV5LTQwMDtcclxuICAgICAgICBmb250LXNpemU6IC44NWVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuMWVtO1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC52aXNpYmxlLXNtIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNnB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuMWVtO1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC52aXNpYmxlLXNtIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuMWVtO1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC52aXNpYmxlLXNtIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuMWVtO1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC52aXNpYmxlLXNtIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar-learning/navbar-learning.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/navbar-learning/navbar-learning.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavbarLearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarLearningComponent", function() { return NavbarLearningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function NavbarLearningComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarLearningComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.navbar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cursos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tienda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarLearningComponent_div_0_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.statusnavBar ? "hamburger-menu animate" : "hamburger-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r0.identity.name, " ", ctx_r0.identity.fathersurname, " ", ctx_r0.identity.mothersurname, " ");
} }
class NavbarLearningComponent {
    constructor(usersservices, route, router) {
        this.usersservices = usersservices;
        this.route = route;
        this.router = router;
        this.statusnavBar = false;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
    }
    ngOnInit() {
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
        this.router;
        this.router.navigate(['/learning']);
        location.reload();
    }
}
NavbarLearningComponent.ɵfac = function NavbarLearningComponent_Factory(t) { return new (t || NavbarLearningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_1__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarLearningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarLearningComponent, selectors: [["app-navbar-learning"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_1__["UsersServices"]])], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "navbar", "navbar-expand-lg", "navbar-light", "rounded"], [1, "container-fluid"], [1, "navbar-brand"], ["src", "../../../assets/logo.png", "alt", "Logo", "width", "85px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar", "aria-controls", "navbar", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "menu-wrapper", 3, "click"], [1, "hamburger-menu", 3, "ngClass"], ["id", "navbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["href", "inicio", "data-aos", "fade-right", 1, "ml-2", "nav-link"], ["data-aos", "fade-right", 1, "nav-link", "ml-2", "actived"], ["href", "store", "data-aos", "fade-right", 1, "nav-link", "ml-2"], [1, "right"], [1, "nav-item", "name"], ["data-aos", "fade-right", 1, "nav-link"], [1, "nav-item", "leave"], ["data-aos", "fade-right", 1, "nav-link", "ml-2", "pointer", 3, "click"], ["src", "../../../assets/svg/shutdown.svg", "alt", "exit", "width", "15px"]], template: function NavbarLearningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarLearningComponent_div_0_Template, 25, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.menu-wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.hamburger-menu[_ngcontent-%COMP%], .hamburger-menu[_ngcontent-%COMP%]:after, .hamburger-menu[_ngcontent-%COMP%]:before {\n  width: 25px;\n  height: 3.1px;\n  border-radius: 120px;\n}\n\n.hamburger-menu[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateY(3px);\n  background: #51260e;\n  transition: all 0ms 300ms;\n}\n\n.hamburger-menu.animate[_ngcontent-%COMP%] {\n  background: rgba(81, 38, 14, 0);\n}\n\n.hamburger-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 7px;\n  background: #51260e;\n  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.hamburger-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 7px;\n  background: #51260e;\n  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.hamburger-menu.animate[_ngcontent-%COMP%]:after {\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.hamburger-menu.animate[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  border: 0px solid;\n  width: 1.8em;\n  height: 1.8em;\n  padding: 0 0 0.25em 0.35em;\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  font-size: 0.9em;\n  color: #0E6152;\n}\n\n.navbar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.navbar[_ngcontent-%COMP%]   .actived[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0E6152;\n}\n\n@media screen and (min-width: 0px) and (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    justify-content: flex-start;\n    left: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXItbGVhcm5pbmcvQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci1sZWFybmluZy9uYXZiYXItbGVhcm5pbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyLWxlYXJuaW5nL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX193YXZlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci1sZWFybmluZy9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZiYXItbGVhcm5pbmdcXG5hdmJhci1sZWFybmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ0E7RUFDSSxhQUFBO0FDcENKOztBRHVDQTtFQUNJLGlIQUFBO0FDcENKOztBRHVDQTtFQUNJLDZDQUFBO0FDcENKOztBRHVDQTtFQUNJLGdDQUFBO0FDcENKOztBRHFDSTtFQUNJLGdDQUFBO0FDbkNSOztBRHVDQTtFQUNJLGVBQUE7QUNwQ0o7O0FDcEJBOzs7Ozs7O0VBQUE7O0FBVUM7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRHFCSjs7QUNuQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QURvQk47O0FDaEJJO0VBQ0UsMkNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDZEk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURnQk47O0FDYkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QURlTjs7QUNYRTtFQUNFLDJCQUFBO0FEY0o7O0FDWEU7RUFDRSx3QkFBQTtFQUNBLDJFQUFBO0FEY0o7O0FDWEU7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FEY0o7O0FDWkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRGNOOztBQ1ZFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBRGFKOztBQ1ZFO0VBQ0UsY0FBQTtBRGFKOztBQ1ZFLG9DQUFBOztBQUNBO0VBQ0UsV0FBQTtBRGFKOztBRTNIQTtFQUNJLGVBQUE7QUY4SEo7O0FFM0hBOzs7RUFHSSxXSFJRO0VHU1IsYUhSUztFR1NULG9CQUFBO0FGOEhKOztBRTNIQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FGOEhKOztBRTVISTtFQUNFLCtCQUFBO0FGOEhOOztBRTFIQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXSDFCVTtFRzJCVixtQkFBQTtFQUNBLDZHQUFBO0FGNkhKOztBRTFIQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRSG5DVTtFR29DVixtQkFBQTtFQUNBLDBHQUFBO0FGNkhKOztBRTFIQTtFQUNJLE1BQUE7RUFDQSx3QkFBQTtFQUNBLDBHQUFBO0FGNkhKOztBRTFIQTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLDZHQUFBO0FGNkhKOztBRTFIQTtFQUlJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBRjBISjs7QUVoSUk7RUFDSSxhQUFBO0FGa0lSOztBRXpISTtFQUNJLGtDSDVERTtFRzZERixnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0hwQ0k7QUNnS1o7O0FFMUhJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUY0SFI7O0FFMUhJO0VBQ0ksZ0JBQUE7RUFDQSxjSC9EUTtBQzJMaEI7O0FFeEhBO0VBRVE7SUFDSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSwyQkFBQTtJQUNBLFNBQUE7RUYwSFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyLWxlYXJuaW5nL25hdmJhci1sZWFybmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kYmFyLXdpZHRoOiAyNXB4O1xyXG4kYmFyLWhlaWdodDogMy4xcHg7XHJcbiRiYXItc3BhY2luZzogN3B4O1xyXG5cclxuJE1vbnRzZXJyYXQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJE11bGlzaDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRQb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblxyXG4kYm9yZGVyLWlucHV0OiAjYzlkM2RkO1xyXG5cclxuJHNoYWRvdy1uYXY6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LWJ0bjogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LXNtYWxsOiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRzaGFkb3ctY29udGFpbmVyLXNtYWxsOiAwIDEwcHggMjBweCAwIHJnYigwIDAgMCAvIDUlKTtcclxuJHNoYWRvdy1jb250YWluZXI6IDAgMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDAgMXB4IDFweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiRzaGFkb3ctbmF2LXNtYWxsOiAwIDJweCAzMHB4IDAgcmdiKDIwNyAyMDcgMjA3IC8gNTAlKTtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMEU2MTUyO1xyXG4kZ3JleS04MDA6ICM0MjQyNDI7XHJcbiRncmV5LTcwMDogIzI5MzIzZDtcclxuJGdyZXktNjAwOiAjNzk4ZGEzO1xyXG4kZ3JleS01MDA6ICMwRTYxNTI7XHJcbiRncmV5LTQwMDogIzlmYWZjMTtcclxuJGdyZXktMzAwOiAjMzMzMzMzO1xyXG4kZ3JleS0yMDA6ICM0ZDRkNGQ7XHJcbiRncmV5LTEwMDogIzY2NjY2NjtcclxuJHBpbmstZmlyc3Q6ICNlMWQ5ZDU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLTI6ICNlZGYwZjQ7XHJcblxyXG4kYmxhY2stODAwOiAjMDAwO1xyXG4kYmxhY2stNzAwOiAjMTQxNDE0O1xyXG4kYmxhY2stNjAwOiAjMWIxYjFiO1xyXG4kYmxhY2stNTAwOiAjMEU2MTUyO1xyXG5cclxuXHJcbi52aXNpYmxlLXNtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaGFkb3ctbmF2IHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG4uc2hhZG93LXNtYWxsIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnRleHQtbm9uZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi52aXNpYmxlLXNtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoYWRvdy1uYXYge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLnNoYWRvdy1zbWFsbCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRleHQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnRleHQtbm9uZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyohXG4gKiBXYXZlcyB2MC42LjBcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4ud2F2ZXMtZWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG59XG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1idXR0b25dLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9cmVzZXRdLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndhdmVzLWVmZmVjdCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ud2F2ZXMtbm90cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi53YXZlcy1pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ud2F2ZXMtaW5wdXQtd3JhcHBlciAud2F2ZXMtYnV0dG9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbn1cblxuLndhdmVzLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubWVudS13cmFwcGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGFtYnVyZ2VyLW1lbnUsXG4uaGFtYnVyZ2VyLW1lbnU6YWZ0ZXIsXG4uaGFtYnVyZ2VyLW1lbnU6YmVmb3JlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMy4xcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEyMHB4O1xufVxuXG4uaGFtYnVyZ2VyLW1lbnUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xuICBiYWNrZ3JvdW5kOiAjNTEyNjBlO1xuICB0cmFuc2l0aW9uOiBhbGwgMG1zIDMwMG1zO1xufVxuLmhhbWJ1cmdlci1tZW51LmFuaW1hdGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDgxLCAzOCwgMTQsIDApO1xufVxuXG4uaGFtYnVyZ2VyLW1lbnU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDdweDtcbiAgYmFja2dyb3VuZDogIzUxMjYwZTtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cblxuLmhhbWJ1cmdlci1tZW51OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDdweDtcbiAgYmFja2dyb3VuZDogIzUxMjYwZTtcbiAgdHJhbnNpdGlvbjogdG9wIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cblxuLmhhbWJ1cmdlci1tZW51LmFuaW1hdGU6YWZ0ZXIge1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogdG9wIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cblxuLmhhbWJ1cmdlci1tZW51LmFuaW1hdGU6YmVmb3JlIHtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2l0aW9uOiBib3R0b20gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCB0cmFuc2Zvcm0gMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xufVxuXG4ubmF2YmFyLXRvZ2dsZXIge1xuICBib3JkZXI6IDBweCBzb2xpZDtcbiAgd2lkdGg6IDEuOGVtO1xuICBoZWlnaHQ6IDEuOGVtO1xuICBwYWRkaW5nOiAwIDAgMC4yNWVtIDAuMzVlbTtcbn1cbi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uYXZiYXIgLm5hdi1saW5rIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogIzBFNjE1Mjtcbn1cbi5uYXZiYXIgLnJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmF2YmFyIC5hY3RpdmVkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwRTYxNTI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5uYXZiYXIgLnJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbGVmdDogOHB4O1xuICB9XG59IiwiXHJcbi8qIVxyXG4gKiBXYXZlcyB2MC42LjBcclxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5cclxuIC53YXZlcy1lZmZlY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2Utb3V0O1xyXG4gIFxyXG4gICAgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDotMTBweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICBcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcclxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIFdhdmVzIENvbG9yc1xyXG4gICAgJi53YXZlcy1saWdodCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy15ZWxsb3cgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1vcmFuZ2UgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNzApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gU3R5bGUgaW5wdXQgYnV0dG9uIGJ1Zy5cclxuICAgIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJyZXNldFwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW1nIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLW5vdHJhbnNpdGlvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lICN7XCIhaW1wb3J0YW50XCJ9O1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtY2lyY2xlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWlucHV0LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIFxyXG4gICAgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtY2lyY2xlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyLjVlbTtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogRmlyZWZveCBCdWc6IGxpbmsgbm90IHRyaWdnZXJlZCAqL1xyXG4gIC53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzL19pbmRleC5zY3NzJztcclxuXHJcbi5tZW51LXdyYXBwZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiAgXHJcbi5oYW1idXJnZXItbWVudSxcclxuLmhhbWJ1cmdlci1tZW51OmFmdGVyLFxyXG4uaGFtYnVyZ2VyLW1lbnU6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAkYmFyLXdpZHRoO1xyXG4gICAgaGVpZ2h0OiAkYmFyLWhlaWdodDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEyMHB4O1xyXG59XHJcbiAgXHJcbi5oYW1idXJnZXItbWVudSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoODEsIDM4LCAxNCwgMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMG1zIDMwMG1zO1xyXG5cclxuICAgICYuYW5pbWF0ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoODEsIDM4LCAxNCwgMCk7IFxyXG4gICAgfVxyXG59XHJcbiAgXHJcbi5oYW1idXJnZXItbWVudTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206ICRiYXItc3BhY2luZztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoODEsIDM4LDE0LCAxKTtcclxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcbn1cclxuICBcclxuLmhhbWJ1cmdlci1tZW51OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAkYmFyLXNwYWNpbmc7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgxLCAzOCwgMTQsIDEpO1xyXG4gICAgdHJhbnNpdGlvbjogdG9wIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxufVxyXG4gIFxyXG4uaGFtYnVyZ2VyLW1lbnUuYW5pbWF0ZTphZnRlciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiB0b3AgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCB0cmFuc2Zvcm0gMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpOztcclxufVxyXG4gIFxyXG4uaGFtYnVyZ2VyLW1lbnUuYW5pbWF0ZTpiZWZvcmUge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7O1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIGJvcmRlcjogMHB4IHNvbGlkO1xyXG4gICAgd2lkdGg6IDEuOGVtO1xyXG4gICAgaGVpZ2h0OiAxLjhlbTtcclxuICAgIHBhZGRpbmc6IDAgMCAwLjI1ZW0gMC4zNWVtO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgICAgIGNvbG9yOiAkYmxhY2stNTAwO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmFjdGl2ZWQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGxlZnQ6IDhweFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSBcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarLearningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar-learning',
                templateUrl: './navbar-learning.component.html',
                styleUrls: ['./navbar-learning.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_1__["UsersServices"]]
            }]
    }], function () { return [{ type: _services_users_services__WEBPACK_IMPORTED_MODULE_1__["UsersServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar-store/navbar-store.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/navbar-store/navbar-store.component.ts ***!
  \*******************************************************************/
/*! exports provided: NavbarStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarStoreComponent", function() { return NavbarStoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function NavbarStoreComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarStoreComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.navbar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cursos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tienda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarStoreComponent_div_0_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.statusnavBar ? "hamburger-menu animate" : "hamburger-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r0.identity.name, " ", ctx_r0.identity.fathersurname, " ", ctx_r0.identity.mothersurname, " ");
} }
function NavbarStoreComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarStoreComponent_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.navbar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cursos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tienda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.statusnavBar ? "hamburger-menu animate" : "hamburger-menu");
} }
class NavbarStoreComponent {
    constructor(usersservices, route, router) {
        this.usersservices = usersservices;
        this.route = route;
        this.router = router;
        this.statusnavBar = false;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]({
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
        this.router;
        this.router.navigate(['/learning']);
        location.reload();
    }
}
NavbarStoreComponent.ɵfac = function NavbarStoreComponent_Factory(t) { return new (t || NavbarStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NavbarStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarStoreComponent, selectors: [["app-navbar-store"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "navbar", "navbar-expand-lg", "navbar-light", "rounded"], [1, "container-fluid"], [1, "navbar-brand"], ["src", "../../../assets/logo.png", "alt", "Logo", "width", "85px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar", "aria-controls", "navbar", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "menu-wrapper", 3, "click"], [1, "hamburger-menu", 3, "ngClass"], ["id", "navbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["href", "inicio", "data-aos", "fade-right", 1, "nav-link", "ml-2"], ["href", "learning", "data-aos", "fade-right", 1, "nav-link", "ml-2"], ["data-aos", "fade-right", 1, "nav-link", "ml-2", "actived"], [1, "right"], [1, "nav-item", "name"], ["data-aos", "fade-right", 1, "nav-link"], [1, "nav-item", "leave"], ["data-aos", "fade-right", 1, "nav-link", "ml-2", "pointer", 3, "click"], ["src", "../../../assets/svg/shutdown.svg", "alt", "exit", "width", "15px"], ["src", "../../../assets/logo.png", "alt", "Logo", "width", "85px", "data-aos", "fade-right"], ["href", "inicio", "data-aos", "fade-right", 1, "ml-2", "nav-link"]], template: function NavbarStoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarStoreComponent_div_0_Template, 25, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarStoreComponent_div_1_Template, 18, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.menu-wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.hamburger-menu[_ngcontent-%COMP%], .hamburger-menu[_ngcontent-%COMP%]:after, .hamburger-menu[_ngcontent-%COMP%]:before {\n  width: 25px;\n  height: 3.1px;\n  border-radius: 120px;\n}\n\n.hamburger-menu[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateY(3px);\n  background: #51260e;\n  transition: all 0ms 300ms;\n}\n\n.hamburger-menu.animate[_ngcontent-%COMP%] {\n  background: rgba(81, 38, 14, 0);\n}\n\n.hamburger-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 7px;\n  background: #51260e;\n  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.hamburger-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 7px;\n  background: #51260e;\n  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.hamburger-menu.animate[_ngcontent-%COMP%]:after {\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.hamburger-menu.animate[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  border: 0px solid;\n  width: 1.8em;\n  height: 1.8em;\n  padding: 0 0 0.25em 0.35em;\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  font-size: 0.9em;\n  color: #0E6152;\n}\n\n.navbar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.navbar[_ngcontent-%COMP%]   .actived[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0E6152;\n}\n\n@media screen and (min-width: 0px) and (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    justify-content: flex-start;\n    left: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXItc3RvcmUvQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci1zdG9yZS9uYXZiYXItc3RvcmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyLXN0b3JlL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX193YXZlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci1zdG9yZS9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZiYXItbGVhcm5pbmdcXG5hdmJhci1sZWFybmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ0E7RUFDSSxhQUFBO0FDcENKOztBRHVDQTtFQUNJLGlIQUFBO0FDcENKOztBRHVDQTtFQUNJLDZDQUFBO0FDcENKOztBRHVDQTtFQUNJLGdDQUFBO0FDcENKOztBRHFDSTtFQUNJLGdDQUFBO0FDbkNSOztBRHVDQTtFQUNJLGVBQUE7QUNwQ0o7O0FDcEJBOzs7Ozs7O0VBQUE7O0FBVUM7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRHFCSjs7QUNuQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QURvQk47O0FDaEJJO0VBQ0UsMkNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDZEk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURnQk47O0FDYkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QURlTjs7QUNYRTtFQUNFLDJCQUFBO0FEY0o7O0FDWEU7RUFDRSx3QkFBQTtFQUNBLDJFQUFBO0FEY0o7O0FDWEU7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FEY0o7O0FDWkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRGNOOztBQ1ZFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBRGFKOztBQ1ZFO0VBQ0UsY0FBQTtBRGFKOztBQ1ZFLG9DQUFBOztBQUNBO0VBQ0UsV0FBQTtBRGFKOztBRTNIQTtFQUNJLGVBQUE7QUY4SEo7O0FFM0hBOzs7RUFHSSxXSFJRO0VHU1IsYUhSUztFR1NULG9CQUFBO0FGOEhKOztBRTNIQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FGOEhKOztBRTVISTtFQUNFLCtCQUFBO0FGOEhOOztBRTFIQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXSDFCVTtFRzJCVixtQkFBQTtFQUNBLDZHQUFBO0FGNkhKOztBRTFIQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRSG5DVTtFR29DVixtQkFBQTtFQUNBLDBHQUFBO0FGNkhKOztBRTFIQTtFQUNJLE1BQUE7RUFDQSx3QkFBQTtFQUNBLDBHQUFBO0FGNkhKOztBRTFIQTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLDZHQUFBO0FGNkhKOztBRTFIQTtFQUlJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBRjBISjs7QUVoSUk7RUFDSSxhQUFBO0FGa0lSOztBRXpISTtFQUNJLGtDSDVERTtFRzZERixnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0hwQ0k7QUNnS1o7O0FFMUhJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUY0SFI7O0FFMUhJO0VBQ0ksZ0JBQUE7RUFDQSxjSC9EUTtBQzJMaEI7O0FFeEhBO0VBRVE7SUFDSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSwyQkFBQTtJQUNBLFNBQUE7RUYwSFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyLXN0b3JlL25hdmJhci1zdG9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kYmFyLXdpZHRoOiAyNXB4O1xyXG4kYmFyLWhlaWdodDogMy4xcHg7XHJcbiRiYXItc3BhY2luZzogN3B4O1xyXG5cclxuJE1vbnRzZXJyYXQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJE11bGlzaDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRQb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblxyXG4kYm9yZGVyLWlucHV0OiAjYzlkM2RkO1xyXG5cclxuJHNoYWRvdy1uYXY6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LWJ0bjogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LXNtYWxsOiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRzaGFkb3ctY29udGFpbmVyLXNtYWxsOiAwIDEwcHggMjBweCAwIHJnYigwIDAgMCAvIDUlKTtcclxuJHNoYWRvdy1jb250YWluZXI6IDAgMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDAgMXB4IDFweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiRzaGFkb3ctbmF2LXNtYWxsOiAwIDJweCAzMHB4IDAgcmdiKDIwNyAyMDcgMjA3IC8gNTAlKTtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMEU2MTUyO1xyXG4kZ3JleS04MDA6ICM0MjQyNDI7XHJcbiRncmV5LTcwMDogIzI5MzIzZDtcclxuJGdyZXktNjAwOiAjNzk4ZGEzO1xyXG4kZ3JleS01MDA6ICMwRTYxNTI7XHJcbiRncmV5LTQwMDogIzlmYWZjMTtcclxuJGdyZXktMzAwOiAjMzMzMzMzO1xyXG4kZ3JleS0yMDA6ICM0ZDRkNGQ7XHJcbiRncmV5LTEwMDogIzY2NjY2NjtcclxuJHBpbmstZmlyc3Q6ICNlMWQ5ZDU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLTI6ICNlZGYwZjQ7XHJcblxyXG4kYmxhY2stODAwOiAjMDAwO1xyXG4kYmxhY2stNzAwOiAjMTQxNDE0O1xyXG4kYmxhY2stNjAwOiAjMWIxYjFiO1xyXG4kYmxhY2stNTAwOiAjMEU2MTUyO1xyXG5cclxuXHJcbi52aXNpYmxlLXNtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaGFkb3ctbmF2IHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG4uc2hhZG93LXNtYWxsIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnRleHQtbm9uZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi52aXNpYmxlLXNtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoYWRvdy1uYXYge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLnNoYWRvdy1zbWFsbCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRleHQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnRleHQtbm9uZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyohXG4gKiBXYXZlcyB2MC42LjBcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4ud2F2ZXMtZWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG59XG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1idXR0b25dLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9cmVzZXRdLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndhdmVzLWVmZmVjdCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ud2F2ZXMtbm90cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi53YXZlcy1pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ud2F2ZXMtaW5wdXQtd3JhcHBlciAud2F2ZXMtYnV0dG9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbn1cblxuLndhdmVzLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubWVudS13cmFwcGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGFtYnVyZ2VyLW1lbnUsXG4uaGFtYnVyZ2VyLW1lbnU6YWZ0ZXIsXG4uaGFtYnVyZ2VyLW1lbnU6YmVmb3JlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMy4xcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEyMHB4O1xufVxuXG4uaGFtYnVyZ2VyLW1lbnUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xuICBiYWNrZ3JvdW5kOiAjNTEyNjBlO1xuICB0cmFuc2l0aW9uOiBhbGwgMG1zIDMwMG1zO1xufVxuLmhhbWJ1cmdlci1tZW51LmFuaW1hdGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDgxLCAzOCwgMTQsIDApO1xufVxuXG4uaGFtYnVyZ2VyLW1lbnU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDdweDtcbiAgYmFja2dyb3VuZDogIzUxMjYwZTtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cblxuLmhhbWJ1cmdlci1tZW51OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDdweDtcbiAgYmFja2dyb3VuZDogIzUxMjYwZTtcbiAgdHJhbnNpdGlvbjogdG9wIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cblxuLmhhbWJ1cmdlci1tZW51LmFuaW1hdGU6YWZ0ZXIge1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogdG9wIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cblxuLmhhbWJ1cmdlci1tZW51LmFuaW1hdGU6YmVmb3JlIHtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2l0aW9uOiBib3R0b20gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCB0cmFuc2Zvcm0gMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xufVxuXG4ubmF2YmFyLXRvZ2dsZXIge1xuICBib3JkZXI6IDBweCBzb2xpZDtcbiAgd2lkdGg6IDEuOGVtO1xuICBoZWlnaHQ6IDEuOGVtO1xuICBwYWRkaW5nOiAwIDAgMC4yNWVtIDAuMzVlbTtcbn1cbi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uYXZiYXIgLm5hdi1saW5rIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogIzBFNjE1Mjtcbn1cbi5uYXZiYXIgLnJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmF2YmFyIC5hY3RpdmVkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwRTYxNTI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5uYXZiYXIgLnJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbGVmdDogOHB4O1xuICB9XG59IiwiXHJcbi8qIVxyXG4gKiBXYXZlcyB2MC42LjBcclxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5cclxuIC53YXZlcy1lZmZlY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2Utb3V0O1xyXG4gIFxyXG4gICAgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDotMTBweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICBcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcclxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIFdhdmVzIENvbG9yc1xyXG4gICAgJi53YXZlcy1saWdodCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy15ZWxsb3cgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1vcmFuZ2UgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNzApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gU3R5bGUgaW5wdXQgYnV0dG9uIGJ1Zy5cclxuICAgIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJyZXNldFwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW1nIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLW5vdHJhbnNpdGlvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lICN7XCIhaW1wb3J0YW50XCJ9O1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtY2lyY2xlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWlucHV0LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIFxyXG4gICAgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtY2lyY2xlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyLjVlbTtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogRmlyZWZveCBCdWc6IGxpbmsgbm90IHRyaWdnZXJlZCAqL1xyXG4gIC53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzL19pbmRleC5zY3NzJztcclxuXHJcbi5tZW51LXdyYXBwZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiAgXHJcbi5oYW1idXJnZXItbWVudSxcclxuLmhhbWJ1cmdlci1tZW51OmFmdGVyLFxyXG4uaGFtYnVyZ2VyLW1lbnU6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAkYmFyLXdpZHRoO1xyXG4gICAgaGVpZ2h0OiAkYmFyLWhlaWdodDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEyMHB4O1xyXG59XHJcbiAgXHJcbi5oYW1idXJnZXItbWVudSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoODEsIDM4LCAxNCwgMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMG1zIDMwMG1zO1xyXG5cclxuICAgICYuYW5pbWF0ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoODEsIDM4LCAxNCwgMCk7IFxyXG4gICAgfVxyXG59XHJcbiAgXHJcbi5oYW1idXJnZXItbWVudTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206ICRiYXItc3BhY2luZztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoODEsIDM4LDE0LCAxKTtcclxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcbn1cclxuICBcclxuLmhhbWJ1cmdlci1tZW51OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAkYmFyLXNwYWNpbmc7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgxLCAzOCwgMTQsIDEpO1xyXG4gICAgdHJhbnNpdGlvbjogdG9wIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxufVxyXG4gIFxyXG4uaGFtYnVyZ2VyLW1lbnUuYW5pbWF0ZTphZnRlciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiB0b3AgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCB0cmFuc2Zvcm0gMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpOztcclxufVxyXG4gIFxyXG4uaGFtYnVyZ2VyLW1lbnUuYW5pbWF0ZTpiZWZvcmUge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7O1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIGJvcmRlcjogMHB4IHNvbGlkO1xyXG4gICAgd2lkdGg6IDEuOGVtO1xyXG4gICAgaGVpZ2h0OiAxLjhlbTtcclxuICAgIHBhZGRpbmc6IDAgMCAwLjI1ZW0gMC4zNWVtO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgICAgIGNvbG9yOiAkYmxhY2stNTAwO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmFjdGl2ZWQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGxlZnQ6IDhweFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSBcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarStoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar-store',
                templateUrl: './navbar-store.component.html',
                styleUrls: ['./navbar-store.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]]
            }]
    }], function () { return [{ type: _services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class NavbarComponent {
    constructor() { }
    ngOnInit() {
        (function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.menu-wrapper').on('click', function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__('.hamburger-menu').toggleClass('animate');
            });
        })();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 23, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "p-4"], [1, "container"], ["href", "/", "data-aos", "fade-right", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar", "aria-controls", "navbar", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "menu-wrapper"], [1, "hamburger-menu"], ["id", "navbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["data-aos", "fade-right", 1, "nav-link", "active", "ml-2", "text-uppercase"], ["href", "/store", "data-aos", "fade-right", 1, "nav-link", "ml-2", "text-uppercase"], ["href", "/learning", "data-aos", "fade-right", 1, "nav-link", "ml-2", "text-uppercase"], ["href", "tutorial", "data-aos", "fade-right", 1, "nav-link", "ml-2", "text-uppercase"], [1, "promo-bar"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Centli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tienda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cursos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ven si eres nuevo!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A1Buen Fin 2024!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n.visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n.navbar[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  color: #0E6152;\n}\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  font-size: 0.8em;\n  color: #0E6152;\n  transition: 340ms ease-in;\n}\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  transition: 340ms ease-in;\n  color: black;\n}\n.navbar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #0E6152;\n}\n.navbar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 70%;\n  height: 2px;\n  border-radius: 5px;\n  background: #FFC107;\n  display: block;\n  margin: 0.1em auto;\n}\n.navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after, .navbar[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  width: 25px;\n  height: 3.1px;\n  border-radius: 120px;\n}\n.navbar[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateY(3px);\n  background: #51260e;\n  transition: all 0ms 300ms;\n}\n.navbar[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%] {\n  background: rgba(81, 38, 14, 0);\n}\n.navbar[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 7px;\n  background: #51260e;\n  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.navbar[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 7px;\n  background: #51260e;\n  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.navbar[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:after {\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.navbar[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border: 0px solid;\n  width: 1.8em;\n  height: 1.8em;\n  padding: 0 0 0.25em 0.35em;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.promo-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  \n  right: 0;\n  background-color: red;\n  color: white;\n  padding: 10px 20px;\n  font-size: 1.2em;\n  font-weight: bold;\n  white-space: nowrap;\n  \n  animation: move-right 10s linear infinite;\n  \n  transform: translateX(100%);\n  \n  z-index: 100;\n  \n}\n\n@keyframes move-right {\n  0% {\n    transform: translateX(100%);\n    \n  }\n  50% {\n    transform: translateX(0);\n    \n  }\n  100% {\n    transform: translateX(100%);\n    \n  }\n}\n\n@media screen and (min-width: 0px) and (max-width: 425px) {\n  .nav-link[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .active[_ngcontent-%COMP%]::after {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 426px) and (max-width: 600px) {\n  .nav-link[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .active[_ngcontent-%COMP%]::after {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 601px) and (max-width: 767px) {\n  .nav-link[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .active[_ngcontent-%COMP%]::after {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 991px) {\n  .nav-link[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .active[_ngcontent-%COMP%]::after {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX193YXZlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNxQ2hCO0VBQ0ksYUFBQTtBRG5DSjtBQ3NDQTtFQUNJLGlIQUFBO0FEbkNKO0FDc0NBO0VBQ0ksNkNBQUE7QURuQ0o7QUNzQ0E7RUFDSSxnQ0FBQTtBRG5DSjtBQ29DSTtFQUNJLGdDQUFBO0FEbENSO0FDc0NBO0VBQ0ksZUFBQTtBRG5DSjtBRXJCQTs7Ozs7OztFQUFBO0FBVUM7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRnNCSjtBRXBCSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBRnFCTjtBRWpCSTtFQUNFLDJDQUFBO0FGbUJOO0FFakJJO0VBQ0Usd0NBQUE7QUZtQk47QUVqQkk7RUFDRSx5Q0FBQTtBRm1CTjtBRWpCSTtFQUNFLHdDQUFBO0FGbUJOO0FFakJJO0VBQ0UseUNBQUE7QUZtQk47QUVqQkk7RUFDRSx3Q0FBQTtBRm1CTjtBRWpCSTtFQUNFLHdDQUFBO0FGbUJOO0FFZkk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUZpQk47QUVkSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBRmdCTjtBRVpFO0VBQ0UsMkJBQUE7QUZlSjtBRVpFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRmVKO0FFWkU7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FGZUo7QUViSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FGZU47QUVYRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUZjSjtBRVhFO0VBQ0UsY0FBQTtBRmNKO0FFWEUsb0NBQUE7QUFDQTtFQUNFLFdBQUE7QUZjSjtBRzVIQTtFQUNJLGlIRlFTO0FEdUhiO0FHN0hJO0VBQ0ksa0NGQ0U7RUVBRixnQkFBQTtFQUNBLGNBQUE7QUgrSFI7QUc1SEk7RUFDSSxxQ0ZQSztFRVFMLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUg4SFI7QUc3SFE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUgrSFo7QUczSEk7RUFDSSxjQUFBO0FINkhSO0FHNUhRO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBSDhIWjtBRzFISTtFQUNJLGVBQUE7QUg0SFI7QUd6SEk7OztFQUdJLFdGMUNJO0VFMkNKLGFGMUNLO0VFMkNMLG9CQUFBO0FIMkhSO0FHeEhJO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUgwSFI7QUd4SFE7RUFDSSwrQkFBQTtBSDBIWjtBR3RISTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXRjVETTtFRTZETixtQkFBQTtFQUNBLDZHQUFBO0FId0hSO0FHckhJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFGckVNO0VFc0VOLG1CQUFBO0VBQ0EsMEdBQUE7QUh1SFI7QUdwSEk7RUFDSSxNQUFBO0VBQ0Esd0JBQUE7RUFDQSwwR0FBQTtBSHNIUjtBR25ISTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLDZHQUFBO0FIcUhSO0FHbEhJO0VBSUksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FIaUhSO0FHdkhRO0VBQ0ksYUFBQTtBSHlIWjtBR2hIQSx5RUFBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQVcsbUNBQUE7RUFDWCxRQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFBcUIsNEJBQUE7RUFDckIseUNBQUE7RUFBMkMsNEJBQUE7RUFDM0MsMkJBQUE7RUFBNkIsa0NBQUE7RUFDN0IsWUFBQTtFQUFjLCtDQUFBO0FId0hsQjtBR3JIQSwrQ0FBQTtBQUNBO0VBQ0k7SUFDSSwyQkFBQTtJQUE2Qiw4Q0FBQTtFSHlIbkM7RUd2SEU7SUFDSSx3QkFBQTtJQUEwQixzQ0FBQTtFSDBIaEM7RUd4SEU7SUFDSSwyQkFBQTtJQUE2QixvQ0FBQTtFSDJIbkM7QUFDRjtBR3hIQSx3QkFBQTtBQUNBO0VBQ0k7SUFDSSxrQkFBQTtFSDBITjs7RUd2SE07SUFDSSx3QkFBQTtFSDBIVjtBQUNGO0FHdEhBO0VBQ0k7SUFDSSxrQkFBQTtFSHdITjs7RUdySE07SUFDSSx3QkFBQTtFSHdIVjtBQUNGO0FHcEhBO0VBQ0k7SUFDSSxrQkFBQTtFSHNITjs7RUduSE07SUFDSSx3QkFBQTtFSHNIVjtBQUNGO0FHbEhBO0VBQ0k7SUFDSSxrQkFBQTtFSG9ITjs7RUdqSE07SUFDSSx3QkFBQTtFSG9IVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnZpc2libGUtc20ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hhZG93LW5hdiB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uc2hhZG93LXNtYWxsIHtcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udGV4dC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG4udGV4dC1ub25lOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiFcbiAqIFdhdmVzIHYwLjYuMFxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi53YXZlcy1lZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbn1cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1saWdodCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy15ZWxsb3cgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1vcmFuZ2UgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPWJ1dHRvbl0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1yZXNldF0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYm9yZGVyOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0IGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi53YXZlcy1ub3RyYW5zaXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcbn1cblxuLndhdmVzLWlucHV0LXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi53YXZlcy1pbnB1dC13cmFwcGVyIC53YXZlcy1idXR0b24taW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBsaW5lLWhlaWdodDogMi41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xufVxuXG4ud2F2ZXMtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogRmlyZWZveCBCdWc6IGxpbmsgbm90IHRyaWdnZXJlZCAqL1xuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgei1pbmRleDogLTE7XG59XG5cbi5uYXZiYXIge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwRTYxNTI7XG59XG4ubmF2YmFyIC5uYXYtbGluayB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICMwRTYxNTI7XG4gIHRyYW5zaXRpb246IDM0MG1zIGVhc2UtaW47XG59XG4ubmF2YmFyIC5uYXYtbGluazpob3ZlciB7XG4gIHRyYW5zaXRpb246IDM0MG1zIGVhc2UtaW47XG4gIGNvbG9yOiBibGFjaztcbn1cbi5uYXZiYXIgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMEU2MTUyO1xufVxuLm5hdmJhciAuYWN0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkMxMDc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAuMWVtIGF1dG87XG59XG4ubmF2YmFyIC5tZW51LXdyYXBwZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2YmFyIC5oYW1idXJnZXItbWVudSxcbi5uYXZiYXIgLmhhbWJ1cmdlci1tZW51OmFmdGVyLFxuLm5hdmJhciAuaGFtYnVyZ2VyLW1lbnU6YmVmb3JlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMy4xcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEyMHB4O1xufVxuLm5hdmJhciAuaGFtYnVyZ2VyLW1lbnUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xuICBiYWNrZ3JvdW5kOiAjNTEyNjBlO1xuICB0cmFuc2l0aW9uOiBhbGwgMG1zIDMwMG1zO1xufVxuLm5hdmJhciAuaGFtYnVyZ2VyLW1lbnUuYW5pbWF0ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoODEsIDM4LCAxNCwgMCk7XG59XG4ubmF2YmFyIC5oYW1idXJnZXItbWVudTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogN3B4O1xuICBiYWNrZ3JvdW5kOiAjNTEyNjBlO1xuICB0cmFuc2l0aW9uOiBib3R0b20gMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xufVxuLm5hdmJhciAuaGFtYnVyZ2VyLW1lbnU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogN3B4O1xuICBiYWNrZ3JvdW5kOiAjNTEyNjBlO1xuICB0cmFuc2l0aW9uOiB0b3AgMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xufVxuLm5hdmJhciAuaGFtYnVyZ2VyLW1lbnUuYW5pbWF0ZTphZnRlciB7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2l0aW9uOiB0b3AgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCB0cmFuc2Zvcm0gMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xufVxuLm5hdmJhciAuaGFtYnVyZ2VyLW1lbnUuYW5pbWF0ZTpiZWZvcmUge1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG59XG4ubmF2YmFyIC5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlcjogMHB4IHNvbGlkO1xuICB3aWR0aDogMS44ZW07XG4gIGhlaWdodDogMS44ZW07XG4gIHBhZGRpbmc6IDAgMCAwLjI1ZW0gMC4zNWVtO1xufVxuLm5hdmJhciAubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBFc3RpbG8gcGFyYSBsYSBiYXJyYSBwcm9tb2Npb25hbCAobW92aW1pZW50byBkZSBkZXJlY2hhIGEgaXpxdWllcmRhKSAqL1xuLnByb21vLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICAvKiBBanVzdGEgbGEgcG9zaWNpw7NuIGRlIGxhIGJhcnJhICovXG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLyogRXZpdGEgZWwgc2FsdG8gZGUgbMOtbmVhICovXG4gIGFuaW1hdGlvbjogbW92ZS1yaWdodCAxMHMgbGluZWFyIGluZmluaXRlO1xuICAvKiBBbmltYWNpw7NuIGRlIG1vdmltaWVudG8gKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAvKiBDb21pZW56YSBmdWVyYSBkZSBsYSBwYW50YWxsYSAqL1xuICB6LWluZGV4OiAxMDA7XG4gIC8qIEFzZWd1cmEgcXVlIGVzdMOpIGVuY2ltYSBkZSBvdHJvcyBlbGVtZW50b3MgKi9cbn1cblxuLyogQW5pbWFjacOzbiBwYXJhIG1vdmVyIGxhIGJhcnJhIGEgbGEgZGVyZWNoYSAqL1xuQGtleWZyYW1lcyBtb3ZlLXJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAvKiBFbXBpZXphIGZ1ZXJhIGRlIGxhIHBhbnRhbGxhIGEgbGEgZGVyZWNoYSAqL1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIC8qIFNlIGRldGllbmUgZW4gbGEgcG9zaWNpw7NuIHZpc2libGUgKi9cbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLyogVnVlbHZlIGEgc2FsaXIgaGFjaWEgbGEgZGVyZWNoYSAqL1xuICB9XG59XG4vKiBFc3RpbG9zIHJlc3BvbnNpdm9zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAubmF2LWxpbmsge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5hY3RpdmU6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNnB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm5hdi1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYWN0aXZlOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5uYXYtbGluayB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmFjdGl2ZTo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmF2LWxpbmsge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5hY3RpdmU6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCJcclxuJGJhci13aWR0aDogMjVweDtcclxuJGJhci1oZWlnaHQ6IDMuMXB4O1xyXG4kYmFyLXNwYWNpbmc6IDdweDtcclxuXHJcbiRNb250c2VycmF0OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRNdWxpc2g6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kUG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuJGJvcmRlci1pbnB1dDogI2M5ZDNkZDtcclxuXHJcbiRzaGFkb3ctbmF2OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1idG46IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1zbWFsbDogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kc2hhZG93LWNvbnRhaW5lci1zbWFsbDogMCAxMHB4IDIwcHggMCByZ2IoMCAwIDAgLyA1JSk7XHJcbiRzaGFkb3ctY29udGFpbmVyOiAwIDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDFweCAxcHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4kc2hhZG93LW5hdi1zbWFsbDogMCAycHggMzBweCAwIHJnYigyMDcgMjA3IDIwNyAvIDUwJSk7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzBFNjE1MjtcclxuJGdyZXktODAwOiAjNDI0MjQyO1xyXG4kZ3JleS03MDA6ICMyOTMyM2Q7XHJcbiRncmV5LTYwMDogIzc5OGRhMztcclxuJGdyZXktNTAwOiAjMEU2MTUyO1xyXG4kZ3JleS00MDA6ICM5ZmFmYzE7XHJcbiRncmV5LTMwMDogIzMzMzMzMztcclxuJGdyZXktMjAwOiAjNGQ0ZDRkO1xyXG4kZ3JleS0xMDA6ICM2NjY2NjY7XHJcbiRwaW5rLWZpcnN0OiAjZTFkOWQ1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS0yOiAjZWRmMGY0O1xyXG5cclxuJGJsYWNrLTgwMDogIzAwMDtcclxuJGJsYWNrLTcwMDogIzE0MTQxNDtcclxuJGJsYWNrLTYwMDogIzFiMWIxYjtcclxuJGJsYWNrLTUwMDogIzBFNjE1MjtcclxuXHJcblxyXG4udmlzaWJsZS1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2hhZG93LW5hdiB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLnNoYWRvdy1zbWFsbCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50ZXh0LW5vbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCJcclxuLyohXHJcbiAqIFdhdmVzIHYwLjYuMFxyXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcblxyXG4gLndhdmVzLWVmZmVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgICAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gIFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gV2F2ZXMgQ29sb3JzXHJcbiAgICAmLndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43MCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTdHlsZSBpbnB1dCBidXR0b24gYnVnLlxyXG4gICAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInJlc2V0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtbm90cmFuc2l0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmUgI3tcIiFpbXBvcnRhbnRcIn07XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgXHJcbiAgICAud2F2ZXMtYnV0dG9uLWlucHV0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXHJcbiAgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH0iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvX2luZGV4LnNjc3MnO1xyXG5cclxuLm5hdmJhciB7XHJcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LW5hdjtcclxuICAgIFxyXG4gICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICMwRTYxNTI7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgICBmb250LWZhbWlseTogJE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICAgICAgY29sb3I6ICMwRTYxNTI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMzQwbXMgZWFzZS1pbjtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMzQwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogIzBFNjE1MjtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZDMTA3O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAuMWVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LXdyYXBwZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaGFtYnVyZ2VyLW1lbnUsXHJcbiAgICAuaGFtYnVyZ2VyLW1lbnU6YWZ0ZXIsXHJcbiAgICAuaGFtYnVyZ2VyLW1lbnU6YmVmb3JlIHtcclxuICAgICAgICB3aWR0aDogJGJhci13aWR0aDtcclxuICAgICAgICBoZWlnaHQ6ICRiYXItaGVpZ2h0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oYW1idXJnZXItbWVudSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoODEsIDM4LCAxNCwgMSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDBtcyAzMDBtcztcclxuXHJcbiAgICAgICAgJi5hbmltYXRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4MSwgMzgsIDE0LCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhhbWJ1cmdlci1tZW51OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206ICRiYXItc3BhY2luZztcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDgxLCAzOCwxNCwgMSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAuaGFtYnVyZ2VyLW1lbnU6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAkYmFyLXNwYWNpbmc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4MSwgMzgsIDE0LCAxKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5oYW1idXJnZXItbWVudS5hbmltYXRlOmFmdGVyIHtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmhhbWJ1cmdlci1tZW51LmFuaW1hdGU6YmVmb3JlIHtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCB0cmFuc2Zvcm0gMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkO1xyXG4gICAgICAgIHdpZHRoOiAxLjhlbTtcclxuICAgICAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjI1ZW0gMC4zNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBFc3RpbG8gcGFyYSBsYSBiYXJyYSBwcm9tb2Npb25hbCAobW92aW1pZW50byBkZSBkZXJlY2hhIGEgaXpxdWllcmRhKSAqL1xyXG4ucHJvbW8tYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDsgLyogQWp1c3RhIGxhIHBvc2ljacOzbiBkZSBsYSBiYXJyYSAqL1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBFdml0YSBlbCBzYWx0byBkZSBsw61uZWEgKi9cclxuICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodCAxMHMgbGluZWFyIGluZmluaXRlOyAvKiBBbmltYWNpw7NuIGRlIG1vdmltaWVudG8gKi9cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgLyogQ29taWVuemEgZnVlcmEgZGUgbGEgcGFudGFsbGEgKi9cclxuICAgIHotaW5kZXg6IDEwMDsgLyogQXNlZ3VyYSBxdWUgZXN0w6kgZW5jaW1hIGRlIG90cm9zIGVsZW1lbnRvcyAqL1xyXG59XHJcblxyXG4vKiBBbmltYWNpw7NuIHBhcmEgbW92ZXIgbGEgYmFycmEgYSBsYSBkZXJlY2hhICovXHJcbkBrZXlmcmFtZXMgbW92ZS1yaWdodCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyAvKiBFbXBpZXphIGZ1ZXJhIGRlIGxhIHBhbnRhbGxhIGEgbGEgZGVyZWNoYSAqL1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IC8qIFNlIGRldGllbmUgZW4gbGEgcG9zaWNpw7NuIHZpc2libGUgKi9cclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgLyogVnVlbHZlIGEgc2FsaXIgaGFjaWEgbGEgZGVyZWNoYSAqL1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBFc3RpbG9zIHJlc3BvbnNpdm9zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/preguntas/preguntas.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/preguntas/preguntas.component.ts ***!
  \*************************************************************/
/*! exports provided: PreguntasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasComponent", function() { return PreguntasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PreguntasComponent {
    constructor() { }
    ngOnInit() {
    }
}
PreguntasComponent.ɵfac = function PreguntasComponent_Factory(t) { return new (t || PreguntasComponent)(); };
PreguntasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreguntasComponent, selectors: [["app-preguntas"]], decls: 2, vars: 0, template: function PreguntasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "preguntas works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZ3VudGFzL3ByZWd1bnRhcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreguntasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-preguntas',
                templateUrl: './preguntas.component.html',
                styleUrls: ['./preguntas.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/promociones/promociones.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/promociones/promociones.component.ts ***!
  \*****************************************************************/
/*! exports provided: PromocionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromocionesComponent", function() { return PromocionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PromocionesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PromocionesComponent.ɵfac = function PromocionesComponent_Factory(t) { return new (t || PromocionesComponent)(); };
PromocionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromocionesComponent, selectors: [["app-promociones"]], decls: 2, vars: 0, template: function PromocionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "promociones works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvbW9jaW9uZXMvcHJvbW9jaW9uZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromocionesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promociones',
                templateUrl: './promociones.component.html',
                styleUrls: ['./promociones.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/tutorial/tutorial.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/tutorial/tutorial.component.ts ***!
  \***********************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
// src/app/components/tutorial/tutorial.component.ts



function TutorialComponent_div_6_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registrarse en Centli");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialComponent_div_6_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} }
function TutorialComponent_div_6_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Iniciar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialComponent_div_6_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 26);
} }
function TutorialComponent_div_6_h2_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Carrito de Compras");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialComponent_div_6_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 27);
} }
function TutorialComponent_div_6_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} }
function TutorialComponent_div_6_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
} }
function TutorialComponent_div_6_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
} }
function TutorialComponent_div_6_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
} }
function TutorialComponent_div_6_h2_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Facturaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialComponent_div_6_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
} }
function TutorialComponent_div_6_h2_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "M\u00E9todos de Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialComponent_div_6_img_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
} }
function TutorialComponent_div_6_h2_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tarifas de Env\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialComponent_div_6_img_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 34);
} }
function TutorialComponent_div_6_h2_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Datos de la Empresa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialComponent_div_6_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 35);
} }
function TutorialComponent_div_6_h2_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pol\u00EDticas de Privacidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialComponent_div_6_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 36);
} }
function TutorialComponent_div_6_img_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 37);
} }
function TutorialComponent_div_6_h2_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Redes Sociales");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialComponent_div_6_img_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 38);
} }
function TutorialComponent_div_6_img_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 39);
} }
function TutorialComponent_div_6_img_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 40);
} }
function TutorialComponent_div_6_h2_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Promociones");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialComponent_div_6_img_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 41);
} }
function TutorialComponent_div_6_h2_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contacto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialComponent_div_6_img_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 42);
} }
const _c0 = function (a0) { return { "visible": a0 }; };
function TutorialComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TutorialComponent_div_6_h2_3_Template, 2, 0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TutorialComponent_div_6_img_4_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TutorialComponent_div_6_h2_5_Template, 2, 0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TutorialComponent_div_6_img_6_Template, 1, 0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TutorialComponent_div_6_h2_7_Template, 2, 0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TutorialComponent_div_6_img_8_Template, 1, 0, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TutorialComponent_div_6_img_9_Template, 1, 0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TutorialComponent_div_6_img_10_Template, 1, 0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TutorialComponent_div_6_img_11_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TutorialComponent_div_6_img_12_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TutorialComponent_div_6_h2_13_Template, 2, 0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TutorialComponent_div_6_img_14_Template, 1, 0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TutorialComponent_div_6_h2_15_Template, 2, 0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TutorialComponent_div_6_img_16_Template, 1, 0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TutorialComponent_div_6_h2_17_Template, 2, 0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TutorialComponent_div_6_img_18_Template, 1, 0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TutorialComponent_div_6_h2_19_Template, 2, 0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TutorialComponent_div_6_img_20_Template, 1, 0, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TutorialComponent_div_6_h2_21_Template, 2, 0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TutorialComponent_div_6_img_22_Template, 1, 0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TutorialComponent_div_6_img_23_Template, 1, 0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TutorialComponent_div_6_h2_24_Template, 2, 0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TutorialComponent_div_6_img_25_Template, 1, 0, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TutorialComponent_div_6_img_26_Template, 1, 0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TutorialComponent_div_6_img_27_Template, 1, 0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TutorialComponent_div_6_h2_28_Template, 2, 0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TutorialComponent_div_6_img_29_Template, 1, 0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TutorialComponent_div_6_h2_30_Template, 2, 0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TutorialComponent_div_6_img_31_Template, 1, 0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contenedor_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, i_r2 === ctx_r0.indiceActual))("id", contenedor_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.obtenerTitulo(i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 10);
} }
class TutorialComponent {
    constructor() {
        this.contenedores = ['Cont_1', 'Cont_2', 'Cont_3', 'Cont_4', 'Cont_5', 'Cont_6', 'Cont_7', 'Cont_8', 'Cont_9', 'Cont_10', 'Cont_11'];
        this.indiceActual = 0;
    }
    ngOnInit() {
        this.mostrarCont(this.indiceActual);
    }
    mostrarCont(indice) {
        this.indiceActual = indice;
    }
    cambiarCont(direccion) {
        this.indiceActual = (this.indiceActual + direccion + this.contenedores.length) % this.contenedores.length;
    }
    obtenerTitulo(indice) {
        const titulos = [
            'Cómo puede registrarse e ingresar el cliente a la aplicación web o móvil',
            'Cómo iniciar sesión con nuestra cuenta creada en Centli!',
            'Cómo puedo acceder al carrito de compras y realizar una compra',
            'Qué tiene que hacer para obtener una factura',
            'Cómo puedo saber sobre los métodos de pago',
            '¿Cómo puedo saber las tarifas y lugares para envío?',
            '¿Cómo puede conocer los datos de la empresa?',
            'Cómo puede acceder para conocer las políticas de privacidad, cancelación y devolución',
            'Cómo puede acceder a las redes sociales de la empresa',
            'Cómo puedo saber si hay promociones o descuentos',
            '¿Cómo puedo contactar a la empresa para resolver mis dudas?'
        ];
        return titulos[indice] || '';
    }
}
TutorialComponent.ɵfac = function TutorialComponent_Factory(t) { return new (t || TutorialComponent)(); };
TutorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TutorialComponent, selectors: [["app-tutorial"]], decls: 11, vars: 1, consts: [[1, "header-content"], ["href", "/home", "data-aos", "fade-right", 1, "nav-link", "ml-2", "text-uppercase"], ["class", "Contenedor", 3, "ngClass", "id", 4, "ngFor", "ngForOf"], ["id", "prev", 1, "arrow", 3, "click"], ["id", "next", 1, "arrow", 3, "click"], [1, "Contenedor", 3, "ngClass", "id"], [4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/registrouno.png", "alt", "Registro", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/iniciarsesiondos.png", "alt", "Iniciar Sesi\u00F3n", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/parte3.png", "alt", "Carrito de Compras", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/parte4.png", "alt", "Carrito de Compras", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/parte5.png", "alt", "Carrito de Compras", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/parte6.png", "alt", "Carrito de Compras", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/parte7.png", "alt", "Carrito de Compras", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/Factura.jpg", "alt", "Facturaci\u00F3n", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/metodos.png", "alt", "M\u00E9todos de Pago", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/tarifas.png", "alt", "Tarifas de Env\u00EDo", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/datos.png", "alt", "Datos de la Empresa", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/politica1.png", "alt", "Pol\u00EDticas de Privacidad", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/polioticas2.png", "alt", "Pol\u00EDticas de Privacidad", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/social1.png", "alt", "Redes Sociales", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/FACEBOOKM.jpg", "alt", "Redes Sociales", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/INSTGRAM.jpg", "alt", "Redes Sociales", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/promociones.png", "alt", "Promociones", 4, "ngIf"], ["class", "Img", "src", "assets/Imagenes/contacto.png", "alt", "Contacto", 4, "ngIf"], ["src", "assets/Imagenes/registrouno.png", "alt", "Registro", 1, "Img"], ["src", "assets/Imagenes/iniciarsesiondos.png", "alt", "Iniciar Sesi\u00F3n", 1, "Img"], ["src", "assets/Imagenes/parte3.png", "alt", "Carrito de Compras", 1, "Img"], ["src", "assets/Imagenes/parte4.png", "alt", "Carrito de Compras", 1, "Img"], ["src", "assets/Imagenes/parte5.png", "alt", "Carrito de Compras", 1, "Img"], ["src", "assets/Imagenes/parte6.png", "alt", "Carrito de Compras", 1, "Img"], ["src", "assets/Imagenes/parte7.png", "alt", "Carrito de Compras", 1, "Img"], ["src", "assets/Imagenes/Factura.jpg", "alt", "Facturaci\u00F3n", 1, "Img"], ["src", "assets/Imagenes/metodos.png", "alt", "M\u00E9todos de Pago", 1, "Img"], ["src", "assets/Imagenes/tarifas.png", "alt", "Tarifas de Env\u00EDo", 1, "Img"], ["src", "assets/Imagenes/datos.png", "alt", "Datos de la Empresa", 1, "Img"], ["src", "assets/Imagenes/politica1.png", "alt", "Pol\u00EDticas de Privacidad", 1, "Img"], ["src", "assets/Imagenes/polioticas2.png", "alt", "Pol\u00EDticas de Privacidad", 1, "Img"], ["src", "assets/Imagenes/social1.png", "alt", "Redes Sociales", 1, "Img"], ["src", "assets/Imagenes/FACEBOOKM.jpg", "alt", "Redes Sociales", 1, "Img"], ["src", "assets/Imagenes/INSTGRAM.jpg", "alt", "Redes Sociales", 1, "Img"], ["src", "assets/Imagenes/promociones.png", "alt", "Promociones", 1, "Img"], ["src", "assets/Imagenes/contacto.png", "alt", "Contacto", 1, "Img"]], template: function TutorialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Centli ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cursos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TutorialComponent_div_6_Template, 32, 34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialComponent_Template_button_click_7_listener() { return ctx.cambiarCont(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u25C0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialComponent_Template_button_click_9_listener() { return ctx.cambiarCont(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u25B6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contenedores);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@charset \"UTF-8\";\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  background-color: #f4f4f4;\n  color: #333;\n  padding: 20px;\n}\n\nheader[_ngcontent-%COMP%] {\n  background-color: #0C6156;\n  color: white;\n  padding: 20px 0;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n\n.Contenedor[_ngcontent-%COMP%] {\n  display: none;\n  margin-bottom: 40px;\n  animation: fadeIn 1s ease-in-out;\n  \n}\n.Contenedor.visible[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.Contenedor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 10px;\n  color: #2c3e50;\n}\n\n.Contenedor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 20px;\n  color: #2980b9;\n}\n\n.Img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 800px;\n  height: auto;\n  display: block;\n  margin: 0 auto 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n\n.arrow[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding: 10px 20px;\n  background-color: #f8d35b;\n  border: none;\n  color: black;\n  border-radius: 50%;\n  cursor: pointer;\n  position: fixed;\n  top: 50%;\n  z-index: 10;\n  transition: background-color 0.3s ease;\n}\n.arrow[_ngcontent-%COMP%]:hover {\n  background-color: #2980b9;\n}\n#prev[_ngcontent-%COMP%] {\n  left: 20px;\n  transform: translateY(-50%);\n}\n#next[_ngcontent-%COMP%] {\n  right: 20px;\n  transform: translateY(-50%);\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@media (max-width: 768px) {\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n\n  .Contenedor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .Contenedor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .arrow[_ngcontent-%COMP%] {\n    font-size: 25px;\n    padding: 8px 16px;\n  }\n\n  .Img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin-bottom: 15px;\n  }\n}\n@media (max-width: 480px) {\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .Contenedor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .Contenedor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .arrow[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding: 5px 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC90dXRvcmlhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbC9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0dXRvcmlhbFxcdHV0b3JpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCLGtCQUFBO0FBQ0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FEQUo7QUNHRSw4QkFBQTtBQUNBO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FEQUo7QUNHRSxlQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURBSjtBQ0dFO0VBQ0UsZUFBQTtBREFKO0FDR0Usa0NBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQWtDLDJCQUFBO0FEQ3RDO0FDQ0k7RUFDRSxjQUFBO0FEQ047QUNHRSx1Q0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBREFKO0FDR0UsMENBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QURBSjtBQ0dFLDZCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBREFKO0FDR0UsNEJBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtBREFKO0FDR0U7RUFDRSx5QkFBQTtBREFKO0FDR0U7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7QURBSjtBQ0dFO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0FEQUo7QUNHRSxvRUFBQTtBQUNBO0VBQ0U7SUFDRSxVQUFBO0VEQUo7RUNFRTtJQUNFLFVBQUE7RURBSjtBQUNGO0FDR0Usc0RBQUE7QUFDQTtFQUNFO0lBQ0UsZUFBQTtFRERKOztFQ0lFO0lBQ0UsZUFBQTtFRERKOztFQ0lFO0lBQ0UsZUFBQTtFRERKOztFQ0lFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VEREo7O0VDSUU7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RURESjtBQUNGO0FDSUU7RUFDRTtJQUNFLGVBQUE7RURGSjs7RUNLRTtJQUNFLGVBQUE7RURGSjs7RUNLRTtJQUNFLGVBQUE7RURGSjs7RUNLRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFREZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogRXN0aWxvIGdsb2JhbCAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogRm9uZG8geSB0aXBvZ3JhZsOtYSBiw6FzaWNhICovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBjb2xvcjogIzMzMztcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogRW5jYWJlemFkbyAqL1xuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDNjE1NjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgbG9zIGNvbnRlbmVkb3JlcyAqL1xuLkNvbnRlbmVkb3Ige1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLWluLW91dDtcbiAgLyogQW5pbWFjacOzbiBkZSBhcGFyaWNpw7NuICovXG59XG4uQ29udGVuZWRvci52aXNpYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFTDrXR1bG9zIGRlbnRybyBkZSBsb3MgY29udGVuZWRvcmVzICovXG4uQ29udGVuZWRvciBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMyYzNlNTA7XG59XG5cbi8qIFN1YnTDrXR1bG9zIGRlbnRybyBkZSBsb3MgY29udGVuZWRvcmVzICovXG4uQ29udGVuZWRvciBoMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICMyOTgwYjk7XG59XG5cbi8qIEVzdGlsbyBwYXJhIGxhcyBpbcOhZ2VuZXMgKi9cbi5JbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi8qIEVzdGlsbyBwYXJhIGxvcyBib3RvbmVzICovXG4uYXJyb3cge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDM1YjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAxMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG5cbi5hcnJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XG59XG5cbiNwcmV2IHtcbiAgbGVmdDogMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jbmV4dCB7XG4gIHJpZ2h0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi8qIEFuaW1hY2nDs24gZGUgdHJhbnNpY2nDs24gcGFyYSBsYSB2aXNpYmlsaWRhZCBkZSBsb3MgY29udGVuZWRvcmVzICovXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi8qIE1lZGlhIHF1ZXJpZXMgcGFyYSBoYWNlciBsYSBww6FnaW5hIG3DoXMgcmVzcG9uc2l2YSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG5cbiAgLkNvbnRlbmVkb3IgaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5Db250ZW5lZG9yIGgyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAuYXJyb3cge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgfVxuXG4gIC5JbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuQ29udGVuZWRvciBoMSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLkNvbnRlbmVkb3IgaDIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5hcnJvdyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICB9XG59IiwiLy8gc3JjL2FwcC9jb21wb25lbnRzL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudC5zY3NzXHJcblxyXG4vKiBFc3RpbG8gZ2xvYmFsICovXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvbmRvIHkgdGlwb2dyYWbDrWEgYsOhc2ljYSAqL1xyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogRW5jYWJlemFkbyAqL1xyXG4gIGhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEM2MTU2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBoZWFkZXIgaDEge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxuICBcclxuICAvKiBFc3RpbG9zIHBhcmEgbG9zIGNvbnRlbmVkb3JlcyAqL1xyXG4gIC5Db250ZW5lZG9yIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1pbi1vdXQ7IC8qIEFuaW1hY2nDs24gZGUgYXBhcmljacOzbiAqL1xyXG4gIFxyXG4gICAgJi52aXNpYmxlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFTDrXR1bG9zIGRlbnRybyBkZSBsb3MgY29udGVuZWRvcmVzICovXHJcbiAgLkNvbnRlbmVkb3IgaDEge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gIH1cclxuICBcclxuICAvKiBTdWJ0w610dWxvcyBkZW50cm8gZGUgbG9zIGNvbnRlbmVkb3JlcyAqL1xyXG4gIC5Db250ZW5lZG9yIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogIzI5ODBiOTtcclxuICB9XHJcbiAgXHJcbiAgLyogRXN0aWxvIHBhcmEgbGFzIGltw6FnZW5lcyAqL1xyXG4gIC5JbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAvKiBFc3RpbG8gcGFyYSBsb3MgYm90b25lcyAqL1xyXG4gIC5hcnJvdyB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkMzViO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuYXJyb3c6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcclxuICB9XHJcbiAgXHJcbiAgI3ByZXYge1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI25leHQge1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFuaW1hY2nDs24gZGUgdHJhbnNpY2nDs24gcGFyYSBsYSB2aXNpYmlsaWRhZCBkZSBsb3MgY29udGVuZWRvcmVzICovXHJcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1lZGlhIHF1ZXJpZXMgcGFyYSBoYWNlciBsYSBww6FnaW5hIG3DoXMgcmVzcG9uc2l2YSAqL1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgaGVhZGVyIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLkNvbnRlbmVkb3IgaDEge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuQ29udGVuZWRvciBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICBcclxuICAgIC5hcnJvdyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuSW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIGhlYWRlciBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICBcclxuICAgIC5Db250ZW5lZG9yIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLkNvbnRlbmVkb3IgaDIge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYXJyb3cge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TutorialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tutorial',
                templateUrl: './tutorial.component.html',
                styleUrls: ['./tutorial.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/GLOBAL.ts":
/*!************************************!*\
  !*** ./src/app/services/GLOBAL.ts ***!
  \************************************/
/*! exports provided: GLOBAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
var GLOBAL = {
    url: 'http://localhost:3977'
    // url: 'https://store-centli-4a739e6d5a7a.herokuapp.com'
    // https://foodday20.herokuapp.com
    // http://localhost:3977
    // http://www.dominio-prueba.xyz
};


/***/ }),

/***/ "./src/app/services/users.services.ts":
/*!********************************************!*\
  !*** ./src/app/services/users.services.ts ***!
  \********************************************/
/*! exports provided: UsersServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersServices", function() { return UsersServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _GLOBAL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GLOBAL */ "./src/app/services/GLOBAL.ts");






class UsersServices {
    constructor(http) {
        this.http = http;
        this.url = _GLOBAL__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    newAccount(users) {
        let json = JSON.stringify(users);
        let params = json;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.url + '/sign-up', params, { headers: headers });
    }
    loginAccount(user_to_login, gethash = null) {
        if (gethash != null) {
            user_to_login.gethash = gethash;
        }
        let json = JSON.stringify(user_to_login);
        let params = json;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.url + '/login', params, { headers: headers });
    }
    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    }
    getToken() {
        let token = localStorage.getItem('token');
        if (token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    }
}
UsersServices.ɵfac = function UsersServices_Factory(t) { return new (t || UsersServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersServices, factory: UsersServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\torre\Desktop\FoodDay-master\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map