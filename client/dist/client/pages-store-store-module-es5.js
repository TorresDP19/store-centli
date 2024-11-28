function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-store-store-module"], {
  /***/
  "./src/app/models/products_model.ts":
  /*!******************************************!*\
    !*** ./src/app/models/products_model.ts ***!
    \******************************************/

  /*! exports provided: Products */

  /***/
  function _src_app_models_products_modelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Products", function () {
      return Products;
    });

    var Products = /*#__PURE__*/_createClass(function Products(_id, productName, brand, price, description, image, material) {
      _classCallCheck(this, Products);

      this._id = _id;
      this.productName = productName;
      this.brand = brand;
      this.price = price;
      this.description = description;
      this.image = image;
      this.material = material;
    });
    /***/

  },

  /***/
  "./src/app/pages/store/cart/cart.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/store/cart/cart.component.ts ***!
    \****************************************************/

  /*! exports provided: CartComponent */

  /***/
  function _src_app_pages_store_cart_cartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/GLOBAL */
    "./src/app/services/GLOBAL.ts");
    /* harmony import */


    var _services_users_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/users.services */
    "./src/app/services/users.services.ts");
    /* harmony import */


    var _services_products_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/products.services */
    "./src/app/services/products.services.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_cart_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/cart.services */
    "./src/app/services/cart.services.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_navbar_store_navbar_store_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/navbar-store/navbar-store.component */
    "./src/app/components/navbar-store/navbar-store.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["subTotalWrap"];
    var _c1 = ["subTotalWrap_existing"];

    var _c2 = function _c2() {
      return {
        standalone: true
      };
    };

    function CartComponent_div_0_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_0_tr_20_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var product_r4 = ctx.$implicit;
          return product_r4.qtyTotal = $event;
        })("change", function CartComponent_div_0_tr_20_Template_input_change_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var product_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.changeSubtotal(product_r4, i_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", null, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_0_tr_20_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var product_r4 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.removeFromCart(product_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r4 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", product_r4._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.url + "/get-image-product/" + product_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, product_r4.price));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", product_r4.qtyTotal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", product_r4.qtyTotal)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 10, product_r4.price));
      }
    }

    function CartComponent_div_0_div_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Datos de mi tarjeta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "M\xE9todos de pago");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mercado Libre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "PayPal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Google Pay");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "AQUI PUEDE RECOGER TU PEDIDO");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "iframe", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "BR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "PEDIDOS EN TODA LA REPUBLICA SE COBRARA ENVIO DE 100$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "iframe", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_0_div_34_Template_button_click_48_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var product_r11 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.toDoPay(product_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Realizar pago");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Solicitar Factura");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "RFC:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_0_div_34_Template_input_ngModelChange_58_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.invoiceData.rfc = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Raz\xF3n Social:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_0_div_34_Template_input_ngModelChange_62_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.invoiceData.razonSocial = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Direcci\xF3n Fiscal:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_0_div_34_Template_input_ngModelChange_66_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.invoiceData.direccionFiscal = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Correo Electr\xF3nico para Factura:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_0_div_34_Template_input_ngModelChange_70_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.invoiceData.emailFactura = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_0_div_34_Template_input_ngModelChange_73_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.invoiceData.deseaFactura = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " \xBFDeseas recibir factura? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_0_div_34_Template_button_click_75_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.submitInvoiceData();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Enviar Datos para Factura");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("value", "", ctx_r2.identity.name, " ", ctx_r2.identity.fathersurname, " ", ctx_r2.identity.mothersurname, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.identity.creditcard);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.identity.nip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.identity.expiration_date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.invoiceData.rfc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.invoiceData.razonSocial);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.invoiceData.direccionFiscal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.invoiceData.emailFactura);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.invoiceData.deseaFactura);
      }
    }

    function CartComponent_div_0_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You must login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-store");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mi carrito de compras");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nombre del producto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "C/U");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cantidad");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "P. Final");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Eliminar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CartComponent_div_0_tr_20_Template, 19, 13, "tr", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Total a pagar: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_0_Template_a_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.clearCart(ctx_r20.MyProducts);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Vaciar mi carrito ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CartComponent_div_0_div_34_Template, 77, 11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CartComponent_div_0_div_35_Template, 3, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.MyProducts);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 4, ctx_r0.total), " MX");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.MyProducts);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.identity);
      }
    }

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(Title, productsservices, usersservices, route, router, cartServices, currencyPipe) {
        _classCallCheck(this, CartComponent);

        this.Title = Title;
        this.productsservices = productsservices;
        this.usersservices = usersservices;
        this.route = route;
        this.router = router;
        this.cartServices = cartServices;
        this.currencyPipe = currencyPipe; // Agregamos invoiceData para almacenar la información de la factura

        this.invoiceData = {
          rfc: '',
          razonSocial: '',
          direccionFiscal: '',
          emailFactura: '',
          deseaFactura: false
        };
        this.MyProducts = [];
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
        this.Title.setTitle("Cart - Centli");
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
      }

      return _createClass(CartComponent, [{
        key: "total",
        get: function get() {
          return this.MyProducts.reduce(function (sum, x) {
            return {
              qtyTotal: 1,
              price: sum.price + x.qtyTotal * x.price
            };
          }, {
            qtyTotal: 1,
            price: 0
          }).price;
        }
      }, {
        key: "toDoPay",
        value: function toDoPay(MyProducts) {
          var street = document.querySelector('.street').value;

          if (street != null) {
            alert("Tu pedido se realizó con éxito, los productos llegarán dentro de 3 a 5 días.");
            this.cartServices.clearCart(MyProducts);
            this.MyProducts = _toConsumableArray(this.cartServices.getProducts());
          } else {
            alert("Debes colocar a donde se va enviar tu producto.");
          }
        } // Función para manejar el cambio en el subtotal

      }, {
        key: "changeSubtotal",
        value: function changeSubtotal(product, index) {
          var qty = product.qtyTotal;
          var amt = product.price;
          var subTotal = amt * qty;
          var subTotal_converted = this.currencyPipe.transform(subTotal, "MX");
          this.subTotalItems.toArray()[index].nativeElement.innerHTML = subTotal_converted;
          this.cartServices.saveCart();
        } // Función para eliminar un producto del carrito

      }, {
        key: "removeFromCart",
        value: function removeFromCart(product) {
          this.cartServices.removeProduct(product);
          this.MyProducts = this.cartServices.getProducts();
        } // Función para limpiar el carrito

      }, {
        key: "clearCart",
        value: function clearCart(MyProducts) {
          this.cartServices.clearCart(MyProducts);
          this.MyProducts = _toConsumableArray(this.cartServices.getProducts());
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.identity = this.usersservices.getIdentity();
          this.token = this.usersservices.getToken();
          this.cartServices.loadCart();
          this.MyProducts = this.cartServices.getProducts();
        } // Método para enviar los datos de la factura

      }, {
        key: "submitInvoiceData",
        value: function submitInvoiceData() {
          if (this.invoiceData.deseaFactura) {
            // Validar que todos los campos de la factura estén completos
            if (this.invoiceData.rfc && this.invoiceData.razonSocial && this.invoiceData.direccionFiscal && this.invoiceData.emailFactura) {
              // Aquí iría la lógica para enviar los datos al servidor, por ejemplo
              console.log('Datos para la factura:', this.invoiceData);
              alert('Factura solicitada con éxito');
            } else {
              alert('Por favor, completa todos los campos requeridos para la factura');
            }
          } else {
            alert('No has solicitado factura');
          }
        }
      }]);
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_services__WEBPACK_IMPORTED_MODULE_3__["ProductsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_services__WEBPACK_IMPORTED_MODULE_6__["CartServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      viewQuery: function CartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.subTotalItems = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.subTotalItems_existing = _t);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"], _services_products_services__WEBPACK_IMPORTED_MODULE_3__["ProductsServices"]])],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "scrollme"], [1, "table"], ["scope", "col"], ["scope", "col", 1, "text-center"], [3, "id", 4, "ngFor", "ngForOf"], [1, "total"], [1, "text-uppercase"], ["width", "25%"], [1, "visible-sm"], [1, ""], [1, "btn", "clean", "waves-effect", "waves-ripple", "rounded", "col-9", "col-sm-5", "col-md-3", "col-lg-3", 3, "click"], ["src", "../../../../assets/svg/cartE.svg", "alt", "Icon"], ["class", "pay-form", 4, "ngFor", "ngForOf"], [3, "id"], ["width", "50px", "alt", "", 3, "src"], [1, "price"], ["min", "1", "type", "number", "name", "", 1, "form-control", "col-12", "col-sm-8", "col-md-4", "col-lg-4", 3, "ngModel", "ngModelOptions", "value", "ngModelChange", "change"], [1, "col-2", "pr-0"], ["subTotalWrap", ""], [1, "btn", "btn-danger", "btn-sm", "m-auto", "d-block", "waves-effect", "waves-ripple", "rounded", 3, "click"], [1, "pay-form"], ["width", "50%"], [1, "text-center"], [1, "col-12", "col-sm-8", "col-md-6", "col-lg-5", "d-block", "m-auto"], [1, "payment-methods", "mt-3"], [1, "row", "justify-content-center"], [1, "col-4", "text-center"], ["src", "../../../../assets/img/mercado.png", "alt", "Mercado Libre", 1, "payment-icon", 2, "width", "200px", "height", "auto"], [1, "btn", "btn-mercado", "btn-sm", "mt-2"], ["src", "../../../../assets/img/paypal.png", "alt", "PayPal", 1, "payment-icon", 2, "width", "200px", "height", "auto"], [1, "btn", "btn-paypal", "btn-sm", "mt-2"], ["src", "../../../../assets/img/gogole.png", "alt", "Google Pay", 1, "payment-icon", 2, "width", "200px", "height", "auto"], [1, "btn", "btn-googlepay", "btn-sm", "mt-2"], [1, "col-12"], ["src", "../../../../assets/svg/person.svg", "alt", "Icon", 1, "icon"], ["type", "text", "placeholder", "Ingresa tu nombre", "required", "", 1, "form-control", 3, "value"], ["src", "../../../../assets/svg/debit_card.svg", "alt", "Icon", 1, "icon"], ["type", "text", "placeholder", "Ingresa tu tarjeta de credito", "required", "", 1, "form-control", 3, "value"], ["src", "../../../../assets/svg/nip.svg", "alt", "Icon", 1, "icon"], ["type", "text", "placeholder", "Ingresa tu NIP", "required", "", 1, "form-control", 3, "value"], ["src", "../../../../assets/svg/date.svg", "alt", "Icon", 1, "icon"], ["type", "text", "placeholder", "Fecha de expiraci\xF3n", "required", "", 1, "form-control", 3, "value"], ["src", "../../../../assets/svg/location.svg", "alt", "Icon", 1, "icon"], ["type", "text", "placeholder", "Ubicaci\xF3n de tu calle", "required", "", 1, "form-control", "street"], [1, "google-maps", 2, "width", "100%", "height", "400px", "margin-top", "20px"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939.9357055686223!2d-99.1762896339959!3d19.552651808882093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f7c3a5832aeb%3A0xcda64171435b5d51!2sTortilleria%20CENTLI!5e0!3m2!1ses-419!2smx!4v1731267284724!5m2!1ses-419!2smx", "width", "100%", "height", "100%", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15019367.370395655!2d-113.26052594252658!3d23.21258333154409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2zTcOpeGljbw!5e0!3m2!1ses-419!2smx!4v1731267359166!5m2!1ses-419!2smx", "width", "100%", "height", "100%", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], ["type", "submit", 1, "btn", "btn-pay-now", "btn-sm", "d-block", 3, "click"], [1, "invoice-request", "mt-4"], [1, "row"], ["for", "rfc"], ["type", "text", "id", "rfc", "placeholder", "Ingresa tu RFC", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-12", "mt-2"], ["for", "razonSocial"], ["type", "text", "id", "razonSocial", "placeholder", "Ingresa tu raz\xF3n social", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "direccionFiscal"], ["type", "text", "id", "direccionFiscal", "placeholder", "Ingresa tu direcci\xF3n fiscal", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "emailFactura"], ["type", "email", "id", "emailFactura", "placeholder", "Ingresa tu correo", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-12", "mt-3"], [1, "checkbox-inline"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "mt-3", 3, "click"], [1, "alert", "alert-primary"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CartComponent_div_0_Template, 36, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_navbar_store_navbar_store_component__WEBPACK_IMPORTED_MODULE_8__["NavbarStoreComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]],
      styles: ["@charset \"UTF-8\";\n.visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\ninput[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, textarea.form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\nh2[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  font-size: 3.5em;\n  text-align: center;\n}\n.scrollme[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  color: #fff;\n  background: #212121;\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n  line-height: 1.9;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.price[_ngcontent-%COMP%] {\n  color: #B71C1C;\n  font-weight: 500;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 0px 13px 24px -7px #878686;\n}\n.total[_ngcontent-%COMP%] {\n  margin: 1em auto auto 1em;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n}\n.total[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  font-weight: 600;\n}\n.total[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #212121;\n}\n.total[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-top: 2em;\n  margin-bottom: 2em;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.total[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  padding-right: 8px;\n}\n.total[_ngcontent-%COMP%]   .clean[_ngcontent-%COMP%] {\n  display: block;\n  margin: 2em auto 5em;\n  background: #00796B;\n  color: #fff;\n  box-shadow: 0px 13px 24px -7px #878686;\n  transition: 350ms ease-in;\n}\n.total[_ngcontent-%COMP%]   .clean[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 13px 24px -7px #00796B;\n  transition: 350ms ease-in;\n}\n.total[_ngcontent-%COMP%]   .pay[_ngcontent-%COMP%] {\n  background: #0097A7;\n  color: #ffF;\n  box-shadow: 0px 13px 24px -7px #878686;\n  transition: 350ms ease-in;\n}\n.total[_ngcontent-%COMP%]   .pay[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #00796B;\n}\n.pay-form[_ngcontent-%COMP%] {\n  background: #D9F2EE;\n  margin-top: 2em;\n  margin-bottom: 3em;\n}\n.pay-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.pay-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #cccaca;\n  border-radius: 4px;\n}\n.pay-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 30px;\n}\n.pay-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n}\n.pay-form[_ngcontent-%COMP%]   .btn-pay-now[_ngcontent-%COMP%] {\n  margin: 2em auto;\n  background: #212121;\n  color: #ffF;\n  box-shadow: 0px 13px 24px -7px #878686;\n  transition: 350ms ease-in;\n}\n.pay-form[_ngcontent-%COMP%]   .btn-pay-now[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #212121;\n}\n@media screen and (min-width: 0px) and (max-width: 320px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n  }\n\n  th[_ngcontent-%COMP%] {\n    font-size: 0.5em;\n  }\n\n  br.visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  a.clean[_ngcontent-%COMP%] {\n    width: 65%;\n    display: block;\n    margin: 2em auto !important;\n  }\n\n  .pay-form[_ngcontent-%COMP%] {\n    margin-top: 5em;\n  }\n  .pay-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n.icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n\n.payment-methods[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n}\n\n.btn-mercado[_ngcontent-%COMP%] {\n  background-color: #FFB800;\n  color: white;\n}\n\n.btn-paypal[_ngcontent-%COMP%] {\n  background-color: #003087;\n  color: white;\n}\n\n.btn-googlepay[_ngcontent-%COMP%] {\n  background-color: #4285F4;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcmUvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdG9yZS9jYXJ0L0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcmUvY2FydC9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fd2F2ZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcmUvY2FydC9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcc3RvcmVcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDcUNoQjtFQUNJLGFBQUE7QURuQ0o7QUNzQ0E7RUFDSSxpSEFBQTtBRG5DSjtBQ3NDQTtFQUNJLDZDQUFBO0FEbkNKO0FDc0NBO0VBQ0ksZ0NBQUE7QURuQ0o7QUNvQ0k7RUFDSSxnQ0FBQTtBRGxDUjtBQ3NDQTtFQUNJLGVBQUE7QURuQ0o7QUVyQkE7Ozs7Ozs7RUFBQTtBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUZzQko7QUVwQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUZxQk47QUVqQkk7RUFDRSwyQ0FBQTtBRm1CTjtBRWpCSTtFQUNFLHdDQUFBO0FGbUJOO0FFakJJO0VBQ0UseUNBQUE7QUZtQk47QUVqQkk7RUFDRSx3Q0FBQTtBRm1CTjtBRWpCSTtFQUNFLHlDQUFBO0FGbUJOO0FFakJJO0VBQ0Usd0NBQUE7QUZtQk47QUVqQkk7RUFDRSx3Q0FBQTtBRm1CTjtBRWZJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FGaUJOO0FFZEk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUZnQk47QUVaRTtFQUNFLDJCQUFBO0FGZUo7QUVaRTtFQUNFLHdCQUFBO0VBQ0EsMkVBQUE7QUZlSjtBRVpFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRmVKO0FFYkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRmVOO0FFWEU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FGY0o7QUVYRTtFQUNFLGNBQUE7QUZjSjtBRVhFLG9DQUFBO0FBQ0E7RUFDRSxXQUFBO0FGY0o7QUc1SEE7RUFFSSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FIOEhKO0FHM0hBO0VBQ0ksZUFBQTtFQUNBLGtDRk5NO0VFT04sZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FIOEhKO0FHM0hBO0VBQ0ksZ0JBQUE7QUg4SEo7QUczSEE7RUFDSSxpQkFBQTtBSDhISjtBRzdISTtFQUNJLGtDRm5CRTtFRW9CRixXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0ZoQk87RUVpQlAsZ0JBQUE7QUgrSFI7QUc1SFE7RUFDSSxrQ0YzQkY7QUR5SlY7QUc3SFk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUgrSGhCO0FHN0hZO0VBQ0ksc0NBQUE7QUgrSGhCO0FHekhBO0VBQ0kseUJBQUE7RUFDQSxrQ0Z6Q007RUUwQ04sa0JBQUE7QUg0SEo7QUczSEk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FINkhSO0FHNUhRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FIOEhaO0FHM0hJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUg2SFI7QUc1SFE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUg4SFo7QUczSEk7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0FINkhSO0FHNUhRO0VBQ0ksc0NBQUE7RUFDQSx5QkFBQTtBSDhIWjtBRzNISTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0EseUJBQUE7QUg2SFI7QUc1SFE7RUFDSSx5QkFBQTtFQUNBLHNDQUFBO0FIOEhaO0FHekhBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUg0SEo7QUczSEk7RUFDSSxrQ0YzRkU7RUU0RkYsZ0JBQUE7RUFDQSx5QkFBQTtBSDZIUjtBRzNISTtFQUNJLDZDRjFGTztFRTJGUCxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUg2SFI7QUc1SFE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBSDhIWjtBRzVIUTtFQUNJLFlBQUE7RUFDQSxrQ0Y1R0Y7RUU2R0UsZ0JBQUE7QUg4SFo7QUczSEk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0EseUJBQUE7QUg2SFI7QUc1SFE7RUFDSSx5QkFBQTtFQUNBLHNDQUFBO0FIOEhaO0FHekhBO0VBQ0k7SUFDSSxnQkFBQTtFSDRITjs7RUcxSEU7SUFDSSxnQkFBQTtFSDZITjs7RUczSEU7SUFDSSxjQUFBO0VIOEhOOztFRzVIRTtJQUNJLFVBQUE7SUFDQSxjQUFBO0lBQ0EsMkJBQUE7RUgrSE47O0VHN0hFO0lBQ0ksZUFBQTtFSGdJTjtFRy9ITTtJQUNJLGdCQUFBO0VIaUlWO0FBQ0Y7QUc5SEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FIZ0lKO0FHN0hBLCtDQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBSGdJSjtBRzdIQSwyQkFBQTtBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FIZ0lKO0FHN0hBLG9CQUFBO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUhnSUo7QUc3SEEsd0JBQUE7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBSGdJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3JlL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi52aXNpYmxlLXNtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoYWRvdy1uYXYge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLnNoYWRvdy1zbWFsbCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRleHQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnRleHQtbm9uZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyohXG4gKiBXYXZlcyB2MC42LjBcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4ud2F2ZXMtZWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG59XG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1idXR0b25dLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9cmVzZXRdLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndhdmVzLWVmZmVjdCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ud2F2ZXMtbm90cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi53YXZlcy1pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ud2F2ZXMtaW5wdXQtd3JhcHBlciAud2F2ZXMtYnV0dG9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbn1cblxuLndhdmVzLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5pbnB1dDpmb2N1cywgaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgdGV4dGFyZWEuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xufVxuXG5oMiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDMuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zY3JvbGxtZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMi41ZW07XG59XG50YWJsZSB0aGVhZCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMyMTIxMjE7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbGluZS1oZWlnaHQ6IDEuOTtcbn1cbnRhYmxlIHRib2R5IHRkIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxudGFibGUgdGJvZHkgdGQucHJpY2Uge1xuICBjb2xvcjogI0I3MUMxQztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbnRhYmxlIHRib2R5IHRkIGJ1dHRvbiB7XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjODc4Njg2O1xufVxuXG4udG90YWwge1xuICBtYXJnaW46IDFlbSBhdXRvIGF1dG8gMWVtO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b3RhbCBoMyB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udG90YWwgaDMgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjEyMTIxO1xufVxuLnRvdGFsIGEge1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvdGFsIGEgaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cbi50b3RhbCAuY2xlYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAyZW0gYXV0byA1ZW07XG4gIGJhY2tncm91bmQ6ICMwMDc5NkI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzg3ODY4NjtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbn1cbi50b3RhbCAuY2xlYW46aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzAwNzk2QjtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbn1cbi50b3RhbCAucGF5IHtcbiAgYmFja2dyb3VuZDogIzAwOTdBNztcbiAgY29sb3I6ICNmZkY7XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjODc4Njg2O1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xufVxuLnRvdGFsIC5wYXk6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzAwNzk2Qjtcbn1cblxuLnBheS1mb3JtIHtcbiAgYmFja2dyb3VuZDogI0Q5RjJFRTtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICBtYXJnaW4tYm90dG9tOiAzZW07XG59XG4ucGF5LWZvcm0gaDMge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ucGF5LWZvcm0gcCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NhY2E7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5wYXktZm9ybSBwIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDMwcHg7XG59XG4ucGF5LWZvcm0gcCBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnBheS1mb3JtIC5idG4tcGF5LW5vdyB7XG4gIG1hcmdpbjogMmVtIGF1dG87XG4gIGJhY2tncm91bmQ6ICMyMTIxMjE7XG4gIGNvbG9yOiAjZmZGO1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzg3ODY4NjtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbn1cbi5wYXktZm9ybSAuYnRuLXBheS1ub3c6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzIxMjEyMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gIH1cblxuICB0aCB7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgfVxuXG4gIGJyLnZpc2libGUtc20ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgYS5jbGVhbiB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDJlbSBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGF5LWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDVlbTtcbiAgfVxuICAucGF5LWZvcm0gaDMge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbn1cbi5pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4vKiBFc3RpbG8gcGFyYSBsb3MgYm90b25lcyBkZSBtw6l0b2RvcyBkZSBwYWdvICovXG4ucGF5bWVudC1tZXRob2RzIC5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLyogQm90w7NuIGRlIE1lcmNhZG8gTGlicmUgKi9cbi5idG4tbWVyY2FkbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkI4MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogQm90w7NuIGRlIFBheVBhbCAqL1xuLmJ0bi1wYXlwYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMDg3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIEJvdMOzbiBkZSBHb29nbGUgUGF5ICovXG4uYnRuLWdvb2dsZXBheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1RjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iLCJcclxuJGJhci13aWR0aDogMjVweDtcclxuJGJhci1oZWlnaHQ6IDMuMXB4O1xyXG4kYmFyLXNwYWNpbmc6IDdweDtcclxuXHJcbiRNb250c2VycmF0OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRNdWxpc2g6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kUG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuJGJvcmRlci1pbnB1dDogI2M5ZDNkZDtcclxuXHJcbiRzaGFkb3ctbmF2OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1idG46IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1zbWFsbDogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kc2hhZG93LWNvbnRhaW5lci1zbWFsbDogMCAxMHB4IDIwcHggMCByZ2IoMCAwIDAgLyA1JSk7XHJcbiRzaGFkb3ctY29udGFpbmVyOiAwIDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDFweCAxcHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4kc2hhZG93LW5hdi1zbWFsbDogMCAycHggMzBweCAwIHJnYigyMDcgMjA3IDIwNyAvIDUwJSk7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzBFNjE1MjtcclxuJGdyZXktODAwOiAjNDI0MjQyO1xyXG4kZ3JleS03MDA6ICMyOTMyM2Q7XHJcbiRncmV5LTYwMDogIzc5OGRhMztcclxuJGdyZXktNTAwOiAjMEU2MTUyO1xyXG4kZ3JleS00MDA6ICM5ZmFmYzE7XHJcbiRncmV5LTMwMDogIzMzMzMzMztcclxuJGdyZXktMjAwOiAjNGQ0ZDRkO1xyXG4kZ3JleS0xMDA6ICM2NjY2NjY7XHJcbiRwaW5rLWZpcnN0OiAjZTFkOWQ1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS0yOiAjZWRmMGY0O1xyXG5cclxuJGJsYWNrLTgwMDogIzAwMDtcclxuJGJsYWNrLTcwMDogIzE0MTQxNDtcclxuJGJsYWNrLTYwMDogIzFiMWIxYjtcclxuJGJsYWNrLTUwMDogIzBFNjE1MjtcclxuXHJcblxyXG4udmlzaWJsZS1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2hhZG93LW5hdiB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLnNoYWRvdy1zbWFsbCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50ZXh0LW5vbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCJcclxuLyohXHJcbiAqIFdhdmVzIHYwLjYuMFxyXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcblxyXG4gLndhdmVzLWVmZmVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgICAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gIFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gV2F2ZXMgQ29sb3JzXHJcbiAgICAmLndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43MCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTdHlsZSBpbnB1dCBidXR0b24gYnVnLlxyXG4gICAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInJlc2V0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtbm90cmFuc2l0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmUgI3tcIiFpbXBvcnRhbnRcIn07XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgXHJcbiAgICAud2F2ZXMtYnV0dG9uLWlucHV0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXHJcbiAgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvX2luZGV4JztcclxuXHJcbmlucHV0OmZvY3VzLCBpbnB1dC5mb3JtLWNvbnRyb2w6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cclxuICAgIG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMy41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY3JvbGxtZSB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG50YWJsZSB7ICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMTIxMjE7XHJcbiAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1zbWFsbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS45O1xyXG4gICAgfVxyXG4gICAgdGJvZHkge1xyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICAmLnByaWNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjQjcxQzFDO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4IHJnYigxMzUsIDEzNCwgMTM0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRvdGFsIHtcclxuICAgIG1hcmdpbjogMWVtIGF1dG8gYXV0byAxZW07XHJcbiAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2xlYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMmVtIGF1dG8gNWVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDc5NkI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4IHJnYigxMzUsIDEzNCwgMTM0KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzAwNzk2QjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjsgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYXkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDk3QTc7XHJcbiAgICAgICAgY29sb3I6ICNmZkY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4IHJnYigxMzUsIDEzNCwgMTM0KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzAwNzk2QjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYXktZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDlGMkVFO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93LXNtYWxsO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA0LCAyMDIsIDIwMik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4tcGF5LW5vdyB7XHJcbiAgICAgICAgbWFyZ2luOiAyZW0gYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kOiMyMTIxMjE7XHJcbiAgICAgICAgY29sb3I6ICNmZkY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4IHJnYigxMzUsIDEzNCwgMTM0KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzIxMjEyMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIH1cclxuICAgIHRoIHtcclxuICAgICAgICBmb250LXNpemU6IC41ZW07XHJcbiAgICB9XHJcbiAgICBici52aXNpYmxlLXNtIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIGEuY2xlYW4ge1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAyZW0gYXV0byFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucGF5LWZvcm0ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVlbTtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5pY29uIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKiBFc3RpbG8gcGFyYSBsb3MgYm90b25lcyBkZSBtw6l0b2RvcyBkZSBwYWdvICovXHJcbi5wYXltZW50LW1ldGhvZHMgLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEJvdMOzbiBkZSBNZXJjYWRvIExpYnJlICovXHJcbi5idG4tbWVyY2FkbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCODAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBCb3TDs24gZGUgUGF5UGFsICovXHJcbi5idG4tcGF5cGFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDMwODc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIEJvdMOzbiBkZSBHb29nbGUgUGF5ICovXHJcbi5idG4tZ29vZ2xlcGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1RjQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.scss'],
          providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"], _services_products_services__WEBPACK_IMPORTED_MODULE_3__["ProductsServices"]]
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
        }, {
          type: _services_products_services__WEBPACK_IMPORTED_MODULE_3__["ProductsServices"]
        }, {
          type: _services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_cart_services__WEBPACK_IMPORTED_MODULE_6__["CartServices"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]
        }];
      }, {
        subTotalItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ["subTotalWrap"]
        }],
        subTotalItems_existing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ["subTotalWrap_existing"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/store/cart/invoice/invoice.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/store/cart/invoice/invoice.component.ts ***!
    \***************************************************************/

  /*! exports provided: InvoiceComponent */

  /***/
  function _src_app_pages_store_cart_invoice_invoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function () {
      return InvoiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var InvoiceComponent = /*#__PURE__*/function () {
      function InvoiceComponent() {
        _classCallCheck(this, InvoiceComponent);

        this.invoiceData = {
          rfc: '',
          razonSocial: '',
          direccionFiscal: '',
          emailFactura: '',
          deseaFactura: false
        };
      }

      return _createClass(InvoiceComponent, [{
        key: "submitInvoiceData",
        value: function submitInvoiceData() {
          if (this.invoiceData.deseaFactura) {
            // Genera el contenido de la factura con los datos
            var facturaHTML = "\n        <h1>Factura</h1>\n        <p><strong>RFC:</strong> ".concat(this.invoiceData.rfc, "</p>\n        <p><strong>Raz\xF3n Social:</strong> ").concat(this.invoiceData.razonSocial, "</p>\n        <p><strong>Direcci\xF3n Fiscal:</strong> ").concat(this.invoiceData.direccionFiscal, "</p>\n        <p><strong>Correo Electr\xF3nico:</strong> ").concat(this.invoiceData.emailFactura, "</p>\n      "); // Crear una nueva ventana para mostrar la factura

            var facturaWindow = window.open('', '_blank');
            facturaWindow.document.write(facturaHTML);
            facturaWindow.document.close(); // Lanza la impresión en la nueva ventana

            facturaWindow.print();
          } else {
            alert("No has solicitado factura.");
          }
        }
      }]);
    }();

    InvoiceComponent.ɵfac = function InvoiceComponent_Factory(t) {
      return new (t || InvoiceComponent)();
    };

    InvoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InvoiceComponent,
      selectors: [["app-invoice"]],
      decls: 27,
      vars: 5,
      consts: [[1, "invoice-request", "mt-4"], [1, "text-center"], [1, "row"], [1, "col-12"], ["for", "rfc"], ["type", "text", "id", "rfc", "placeholder", "Ingresa tu RFC", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-12", "mt-2"], ["for", "razonSocial"], ["type", "text", "id", "razonSocial", "placeholder", "Ingresa tu raz\xF3n social", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "direccionFiscal"], ["type", "text", "id", "direccionFiscal", "placeholder", "Ingresa tu direcci\xF3n fiscal", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "emailFactura"], ["type", "email", "id", "emailFactura", "placeholder", "Ingresa tu correo", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-12", "mt-3"], [1, "checkbox-inline"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "mt-3", 3, "click"]],
      template: function InvoiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Solicitar Factura");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RFC:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.invoiceData.rfc = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Raz\xF3n Social:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.invoiceData.razonSocial = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Direcci\xF3n Fiscal:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.invoiceData.direccionFiscal = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Correo Electr\xF3nico para Factura:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.invoiceData.emailFactura = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.invoiceData.deseaFactura = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \xBFDeseas recibir factura? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceComponent_Template_button_click_25_listener() {
            return ctx.submitInvoiceData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Enviar Datos para Factura");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceData.rfc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceData.razonSocial);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceData.direccionFiscal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceData.emailFactura);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.invoiceData.deseaFactura);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3JlL2NhcnQvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-invoice',
          templateUrl: './invoice.component.html',
          styleUrls: ['./invoice.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/store/newproduct/newproduct.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/store/newproduct/newproduct.component.ts ***!
    \****************************************************************/

  /*! exports provided: NewproductComponent */

  /***/
  function _src_app_pages_store_newproduct_newproductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewproductComponent", function () {
      return NewproductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/GLOBAL */
    "./src/app/services/GLOBAL.ts");
    /* harmony import */


    var _services_users_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/users.services */
    "./src/app/services/users.services.ts");
    /* harmony import */


    var _services_products_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/products.services */
    "./src/app/services/products.services.ts");
    /* harmony import */


    var _models_products_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../models/products_model */
    "./src/app/models/products_model.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_navbar_store_navbar_store_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/navbar-store/navbar-store.component */
    "./src/app/components/navbar-store/navbar-store.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _store_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../store.component */
    "./src/app/pages/store/store.component.ts");

    function NewproductComponent_div_0_div_1_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewproductComponent_div_0_div_1_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewproductComponent_div_0_div_1_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewproductComponent_div_0_div_1_span_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewproductComponent_div_0_div_1_span_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewproductComponent_div_0_div_1_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.alertMessage, " ");
      }
    }

    function NewproductComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-store");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A\xF1adir un nuevo producto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewproductComponent_div_0_div_1_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.onSubmit(_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewproductComponent_div_0_div_1_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.products.productName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NewproductComponent_div_0_div_1_span_14_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewproductComponent_div_0_div_1_Template_input_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.products.brand = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NewproductComponent_div_0_div_1_span_19_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewproductComponent_div_0_div_1_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.products.price = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NewproductComponent_div_0_div_1_span_24_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "textarea", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewproductComponent_div_0_div_1_Template_textarea_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.products.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "                            ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NewproductComponent_div_0_div_1_span_30_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 21, 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewproductComponent_div_0_div_1_Template_input_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.products.material = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, NewproductComponent_div_0_div_1_span_35_Template, 2, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewproductComponent_div_0_div_1_Template_input_change_38_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.fileChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " A\xF1adir producto ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Respuesta del servidor:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, NewproductComponent_div_0_div_1_div_44_Template, 3, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r5.touched && _r5.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.products.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.required) && _r5.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r7.touched && _r7.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.products.brand);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r7.errors == null ? null : _r7.errors.required) && _r7.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r9.touched && _r9.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.products.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r9.errors == null ? null : _r9.errors.required) && _r9.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r11.touched && _r11.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.products.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r11.errors == null ? null : _r11.errors.required) && _r11.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r13.touched && _r13.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.products.material);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r13.errors == null ? null : _r13.errors.required) && _r13.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r4.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.alertMessage);
      }
    }

    function NewproductComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You are not admin in this platform. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewproductComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewproductComponent_div_0_div_1_Template, 45, 22, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewproductComponent_div_0_div_2_Template, 3, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.identity.role == "ROLE_ADMIN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.identity.role == "ROLE_USER");
      }
    }

    function NewproductComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-store");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NewproductComponent = /*#__PURE__*/function () {
      function NewproductComponent(Title, productsservices, usersservices, route, router) {
        _classCallCheck(this, NewproductComponent);

        this.Title = Title;
        this.productsservices = productsservices;
        this.usersservices = usersservices;
        this.route = route;
        this.router = router;
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
        this.Title.setTitle('Añadir producto - Centli');
        this.products = new _models_products_model__WEBPACK_IMPORTED_MODULE_4__["Products"]('', '', '', '', '', '', '');
      }

      return _createClass(NewproductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.identity = this.usersservices.getIdentity();
          this.token = this.usersservices.getToken();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(f) {
          var _this = this;

          this.productsservices.addNewProduct(this.token, this.products).subscribe(function (response) {
            if (!response.INFO_PRODUCT) {
              _this.alertMessage = 'Se encontrarón problemas en el servidor.';
            } else {
              if (!_this.filesToUpload) {
                _this.alertMessage = 'Se añadió el producto, pero no se adjuntó imagen.';
              } else {
                _this.makeFileRequest(_this.url + '/add-image/' + response.INFO_PRODUCT._id, [], _this.filesToUpload).then(function (result) {
                  _this.products.image = result.image;
                  _this.alertMessage = 'Producto creado con exito!';
                  _this.products = response.INFO_PRODUCT;
                });
              }
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(fileInput) {
          this.filesToUpload = fileInput.target.files;
        }
      }, {
        key: "makeFileRequest",
        value: function makeFileRequest(url, params, files) {
          var token = this.token;
          return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();

            for (var i = 0; i < files.length; i++) {
              formData.append('image', files[i], files[i].name);
            }

            xhr.onreadystatechange = function () {
              if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                  resolve(JSON.parse(xhr.response));
                } else {
                  reject(xhr.response);
                }
              }
            };

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
          });
        }
      }]);
    }();

    NewproductComponent.ɵfac = function NewproductComponent_Factory(t) {
      return new (t || NewproductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_services__WEBPACK_IMPORTED_MODULE_3__["ProductsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    NewproductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewproductComponent,
      selectors: [["app-newproduct"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_products_services__WEBPACK_IMPORTED_MODULE_3__["ProductsServices"], _services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]])],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "FirstSection", "pt-3"], [1, "text"], ["width", "75%"], [1, "d-block", "m-auto", "col-12", "col-sm-8", "col-md-6", "col-lg-5", 3, "ngSubmit"], ["f", "ngForm"], [1, "col-12"], ["src", "../../../../assets/svg/productForm.svg", "alt", "Icon Form"], ["type", "text", "name", "productName", "id", "productName", "placeholder", "Nombre del producto", "required", "", 1, "form-control", "productName", 3, "ngModel", "ngModelChange"], ["productName", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["src", "../../../../assets/svg/product_documentsForm.svg", "alt", "Icon Form"], ["type", "text", "name", "brand", "id", "brand", "placeholder", "Nombre de la marca del producto", "required", "", 1, "form-control", "brand", 3, "ngModel", "ngModelChange"], ["brand", "ngModel"], ["src", "../../../../assets/svg/PriceTagForm.svg", "alt", "Icon Form"], ["type", "text", "name", "price", "id", "price", "placeholder", "Precio del producto", "required", "", 1, "form-control", "price", 3, "ngModel", "ngModelChange"], ["price", "ngModel"], ["src", "../../../../assets/svg/more_detailsForm.svg", "alt", "Icon Form"], ["placeholder", "Descripci\xF3n del producto", "name", "description", "id", "description", "required", "", 1, "description", "form-control", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], ["src", "../../../../assets/svg/spachelor.svg", "alt", "Icon Form"], ["type", "text", "name", "material", "id", "material", "placeholder", "Material del producto", "required", "", 1, "form-control", "material", 3, "ngModel", "ngModelChange"], ["material", "ngModel"], ["src", "../../../../assets/svg/imageForm.svg", "alt", "Icon Form"], ["type", "file", "name", "image", "id", "image", "placeholder", "Imagen del producto", 1, "form-control", "image", 3, "change"], ["type", "submit", 1, "btn", "btn-response", "d-block", 3, "disabled"], [1, "message", "rounded"], [1, "text-danger"], [1, "alert", "alert-primary", "w-50"], [1, "alert", "alert-primary"]],
      template: function NewproductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewproductComponent_div_0_Template, 3, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewproductComponent_div_1_Template, 2, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_navbar_store_navbar_store_component__WEBPACK_IMPORTED_MODULE_8__["NavbarStoreComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _store_component__WEBPACK_IMPORTED_MODULE_10__["StoreComponent"]],
      styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\ninput[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, textarea.form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fefefe;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1em;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 1.5em;\n  margin-bottom: 2em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid grey;\n  border-radius: 4px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 30px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn-response[_ngcontent-%COMP%] {\n  border-color: #00a78e;\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  color: #00a78e;\n  transition: 350ms ease-in;\n  font-family: \"Poppins\", sans-serif;\n  margin: 3em auto;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn-response[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  background-color: #00a78e;\n  color: #fff;\n  box-shadow: 0px 13px 24px -7px #00a78e;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40vh;\n  background: #fafafa;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  text-align: center;\n  margin-top: 1em;\n  padding-top: 1.5em;\n  text-transform: uppercase;\n  font-size: 1.3em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .alert-primary[_ngcontent-%COMP%] {\n  display: block;\n  margin: 2em auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcmUvbmV3cHJvZHVjdC9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0b3JlL25ld3Byb2R1Y3QvbmV3cHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcmUvbmV3cHJvZHVjdC9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fd2F2ZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcmUvbmV3cHJvZHVjdC9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcc3RvcmVcXG5ld3Byb2R1Y3RcXG5ld3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0ksYUFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxpSEFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSw2Q0FBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxnQ0FBQTtBQ3BDSjs7QURxQ0k7RUFDSSxnQ0FBQTtBQ25DUjs7QUR1Q0E7RUFDSSxlQUFBO0FDcENKOztBQ3BCQTs7Ozs7OztFQUFBOztBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURxQko7O0FDbkJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEb0JOOztBQ2hCSTtFQUNFLDJDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2RJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEZ0JOOztBQ2JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEZU47O0FDWEU7RUFDRSwyQkFBQTtBRGNKOztBQ1hFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRGNKOztBQ1hFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRGNKOztBQ1pJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QURjTjs7QUNWRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QURhSjs7QUNWRTtFQUNFLGNBQUE7QURhSjs7QUNWRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QURhSjs7QUUzSEE7RUFFSSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FGNkhKOztBRXpISTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBRjRIUjs7QUUzSFE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0hiQztFR2NELHlCQUFBO0FGNkhaOztBRTNIUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUY2SFo7O0FFekhnQjtFQUNJLDZDSGZMO0VHZ0JLLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBRjJIcEI7O0FFMUhvQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0FGNEh4Qjs7QUUxSG9CO0VBQ0ksWUFBQTtFQUNBLGtDSGpDZDtFR2tDYyxnQkFBQTtBRjRIeEI7O0FFMUhvQjtFQUNJLFlBQUE7QUY0SHhCOztBRTFIb0I7RUFDSSxnQkFBQTtBRjRIeEI7O0FFeEhnQjtFQUNJLHFCQUFBO0VBQ0EsNkNIeENMO0VHeUNLLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NIbERWO0VHbURVLGdCQUFBO0FGMEhwQjs7QUV6SG9CO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtBRjJIeEI7O0FFckhJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRnVIUjs7QUVySFE7RUFDSSxxQ0h0RUM7RUd1RUQsa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FGdUhaOztBRXJIUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FGdUhaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RvcmUvbmV3cHJvZHVjdC9uZXdwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiRiYXItd2lkdGg6IDI1cHg7XHJcbiRiYXItaGVpZ2h0OiAzLjFweDtcclxuJGJhci1zcGFjaW5nOiA3cHg7XHJcblxyXG4kTW9udHNlcnJhdDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kTXVsaXNoOiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJFBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbiRib3JkZXItaW5wdXQ6ICNjOWQzZGQ7XHJcblxyXG4kc2hhZG93LW5hdjogMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiRzaGFkb3ctYnRuOiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiRzaGFkb3ctc21hbGw6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuJHNoYWRvdy1jb250YWluZXItc21hbGw6IDAgMTBweCAyMHB4IDAgcmdiKDAgMCAwIC8gNSUpO1xyXG4kc2hhZG93LWNvbnRhaW5lcjogMCAycHggMXB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMCAxcHggMXB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggM3B4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuJHNoYWRvdy1uYXYtc21hbGw6IDAgMnB4IDMwcHggMCByZ2IoMjA3IDIwNyAyMDcgLyA1MCUpO1xyXG5cclxuJHByaW1hcnktY29sb3I6ICMwRTYxNTI7XHJcbiRncmV5LTgwMDogIzQyNDI0MjtcclxuJGdyZXktNzAwOiAjMjkzMjNkO1xyXG4kZ3JleS02MDA6ICM3OThkYTM7XHJcbiRncmV5LTUwMDogIzBFNjE1MjtcclxuJGdyZXktNDAwOiAjOWZhZmMxO1xyXG4kZ3JleS0zMDA6ICMzMzMzMzM7XHJcbiRncmV5LTIwMDogIzRkNGQ0ZDtcclxuJGdyZXktMTAwOiAjNjY2NjY2O1xyXG4kcGluay1maXJzdDogI2UxZDlkNTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kd2hpdGUtMjogI2VkZjBmNDtcclxuXHJcbiRibGFjay04MDA6ICMwMDA7XHJcbiRibGFjay03MDA6ICMxNDE0MTQ7XHJcbiRibGFjay02MDA6ICMxYjFiMWI7XHJcbiRibGFjay01MDA6ICMwRTYxNTI7XHJcblxyXG5cclxuLnZpc2libGUtc20ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNoYWRvdy1uYXYge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuXHJcbi5zaGFkb3ctc21hbGwge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4udGV4dC1ub25lIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLnZpc2libGUtc20ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hhZG93LW5hdiB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uc2hhZG93LXNtYWxsIHtcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udGV4dC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG4udGV4dC1ub25lOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiFcbiAqIFdhdmVzIHYwLjYuMFxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi53YXZlcy1lZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbn1cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1saWdodCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy15ZWxsb3cgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1vcmFuZ2UgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPWJ1dHRvbl0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1yZXNldF0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYm9yZGVyOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0IGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi53YXZlcy1ub3RyYW5zaXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcbn1cblxuLndhdmVzLWlucHV0LXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi53YXZlcy1pbnB1dC13cmFwcGVyIC53YXZlcy1idXR0b24taW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBsaW5lLWhlaWdodDogMi41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xufVxuXG4ud2F2ZXMtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogRmlyZWZveCBCdWc6IGxpbmsgbm90IHRyaWdnZXJlZCAqL1xuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgei1pbmRleDogLTE7XG59XG5cbmlucHV0OmZvY3VzLCBpbnB1dC5mb3JtLWNvbnRyb2w6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5GaXJzdFNlY3Rpb24gLnRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBociB7XG4gIG1hcmdpbi10b3A6IDEuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gZGl2IHAge1xuICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gZGl2IHAgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMzBweDtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBkaXYgcCBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIGRpdiBwIHRleHRhcmVhIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIGRpdiBwIHNwYW4ge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIGRpdiAuYnRuLXJlc3BvbnNlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhNzhlO1xuICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMDBhNzhlO1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogM2VtIGF1dG87XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gZGl2IC5idG4tcmVzcG9uc2U6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNzhlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICMwMGE3OGU7XG59XG4uRmlyc3RTZWN0aW9uIC5tZXNzYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDB2aDtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cbi5GaXJzdFNlY3Rpb24gLm1lc3NhZ2UgaDMge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBwYWRkaW5nLXRvcDogMS41ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG4uRmlyc3RTZWN0aW9uIC5tZXNzYWdlIC5hbGVydC1wcmltYXJ5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCJcclxuLyohXHJcbiAqIFdhdmVzIHYwLjYuMFxyXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcblxyXG4gLndhdmVzLWVmZmVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgICAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gIFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gV2F2ZXMgQ29sb3JzXHJcbiAgICAmLndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43MCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTdHlsZSBpbnB1dCBidXR0b24gYnVnLlxyXG4gICAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInJlc2V0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtbm90cmFuc2l0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmUgI3tcIiFpbXBvcnRhbnRcIn07XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgXHJcbiAgICAud2F2ZXMtYnV0dG9uLWlucHV0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXHJcbiAgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvX2luZGV4LnNjc3MnO1xyXG5cclxuaW5wdXQ6Zm9jdXMsIGlucHV0LmZvcm0tY29udHJvbDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHRleHRhcmVhLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblxyXG4gICAgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uRmlyc3RTZWN0aW9uIHtcclxuICAgIC50ZXh0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRNb250c2VycmF0O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBociB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1zbWFsbDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnRuLXJlc3BvbnNlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMGE3OGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1zbWFsbDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBhNzhlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogM2VtIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE3OGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzAwYTc4ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRNb250c2VycmF0O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEuNWVtO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWxlcnQtcHJpbWFyeSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJlbSBhdXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewproductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-newproduct',
          templateUrl: './newproduct.component.html',
          styleUrls: ['./newproduct.component.scss'],
          providers: [_services_products_services__WEBPACK_IMPORTED_MODULE_3__["ProductsServices"], _services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]]
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
        }, {
          type: _services_products_services__WEBPACK_IMPORTED_MODULE_3__["ProductsServices"]
        }, {
          type: _services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/store/product/product.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/store/product/product.component.ts ***!
    \**********************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function _src_app_pages_store_product_productComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/GLOBAL */
    "./src/app/services/GLOBAL.ts");
    /* harmony import */


    var _services_users_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/users.services */
    "./src/app/services/users.services.ts");
    /* harmony import */


    var _services_products_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/products.services */
    "./src/app/services/products.services.ts");
    /* harmony import */


    var _models_products_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../models/products_model */
    "./src/app/models/products_model.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_cart_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/cart.services */
    "./src/app/services/cart.services.ts");
    /* harmony import */


    var _components_navbar_store_navbar_store_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/navbar-store/navbar-store.component */
    "./src/app/components/navbar-store/navbar-store.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ProductComponent_div_1_div_1_div_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_1_div_1_div_26_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r6.onUpdateConfirm(ctx_r6.products._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Editar producto ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_1_div_1_div_26_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r8.onDeleteConfirm(ctx_r8.products._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Eliminar este producto ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductComponent_div_1_div_1_div_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xBFEstas seguro de eliminar este producto?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_1_div_1_div_27_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r9.onCancelProduct();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " No, cancelar esta acci\xF3n ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_1_div_1_div_27_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r11.onDeleteProduct(ctx_r11.products._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " S\xED, eliminar definitivamente ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductComponent_div_1_div_1_div_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modificar producto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 32, 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductComponent_div_1_div_1_div_28_Template_form_ngSubmit_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r18.onUpdateProduct(ctx_r18.products._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 34, 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_div_1_div_1_div_28_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r20.products.productName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 36, 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_div_1_div_1_div_28_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r21.products.brand = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 38, 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_div_1_div_1_div_28_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r22.products.price = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 40, 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_div_1_div_1_div_28_Template_textarea_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r23.products.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 42, 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductComponent_div_1_div_1_div_28_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r24.products.material = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductComponent_div_1_div_1_div_28_Template_input_change_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r25.fileChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_1_div_1_div_28_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r26.onUpdateCancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cancelar acci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Actualizar producto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r5.products.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.products.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r5.products.brand);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.products.brand);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r5.products.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.products.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r5.products.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.products.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", " ", ctx_r5.products.material, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.products.material);
      }
    }

    function ProductComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ID del producto: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Marca: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Material del producto: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_1_div_1_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r27.addToCart(ctx_r27.products);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Agregar al carrito");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProductComponent_div_1_div_1_div_26_Template, 7, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProductComponent_div_1_div_1_div_27_Template, 8, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProductComponent_div_1_div_1_div_28_Template, 27, 10, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Descripci\xF3n del producto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.products.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.products._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.products.brand);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.products.material);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx_r2.products.price, " MX");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.identity.role == "ROLE_ADMIN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.confirm == ctx_r2.products._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.update == ctx_r2.products._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.url + "/get-image-product/" + ctx_r2.products.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r2.products.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function ProductComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductComponent_div_1_div_1_Template, 37, 10, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.products);
      }
    }

    function ProductComponent_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ID del producto: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Marca: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Material del producto: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_div_2_div_1_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r30.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Agregar al carrito");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Descripci\xF3n del producto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.products.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.products._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.products.brand);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.products.material);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx_r29.products.price, " MX");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r29.url + "/get-image-product/" + ctx_r29.products.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r29.products.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function ProductComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductComponent_div_2_div_1_Template, 32, 7, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.products);
      }
    }

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent(Title, productsservices, usersservices, route, router, cartServices) {
        _classCallCheck(this, ProductComponent);

        this.Title = Title;
        this.productsservices = productsservices;
        this.usersservices = usersservices;
        this.route = route;
        this.router = router;
        this.cartServices = cartServices;
        this.MyProducts = [];
        this.Title.setTitle("Product - Centli");
        this.products = new _models_products_model__WEBPACK_IMPORTED_MODULE_4__["Products"]('', '', '', '', '', '', '');
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
      }

      return _createClass(ProductComponent, [{
        key: "addToCart",
        value: function addToCart(product) {
          if (!this.cartServices.productsInCart(product)) {
            product.qtyTotal = 1;
            this.cartServices.addToCart(product);
            this.MyProducts = _toConsumableArray(this.cartServices.getProducts());
            alert("El producto se añadió con éxito a tu carrito 😃");
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProductAlone();
          this.identity = this.usersservices.getIdentity();
          this.token = this.usersservices.getToken();
          this.cartServices.loadCart();
          this.MyProducts = this.cartServices.getProducts();
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['/learning']);
        }
      }, {
        key: "getProductAlone",
        value: function getProductAlone() {
          var _this2 = this;

          this.route.params.forEach(function (params) {
            var id = params['id'];

            _this2.productsservices.getProduct(id).subscribe(function (response) {
              if (response.id) {
                alert("El producto que buscas no existe.");
              } else {
                _this2.products = response.product;
              }
            }, function (error) {
              console.log(error);
            });
          });
        }
      }, {
        key: "onCancelProduct",
        value: function onCancelProduct() {
          this.confirm = null;
          document.querySelector(".FirstSection").scrollIntoView({
            behavior: "smooth"
          });
        }
      }, {
        key: "onDeleteConfirm",
        value: function onDeleteConfirm(id) {
          this.confirm = id;
        }
      }, {
        key: "onDeleteProduct",
        value: function onDeleteProduct(id) {
          var _this3 = this;

          this.productsservices.deleteProduct(this.token, id).subscribe(function (response) {
            if (!response.productsRemoved) {
              alert("Se encontraron problemas en el servidor.");
            } else if (response.productsRemoved) {
              alert("El producto se eliminó con éxito.");

              _this3.router.navigate(['/store']);
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onUpdateConfirm",
        value: function onUpdateConfirm(id) {
          this.update = id;
        }
      }, {
        key: "onUpdateCancel",
        value: function onUpdateCancel() {
          this.update = null;
          document.querySelector(".FirstSection").scrollIntoView({
            behavior: "smooth"
          });
        }
      }, {
        key: "onUpdateProduct",
        value: function onUpdateProduct(id) {
          var _this4 = this;

          this.productsservices.updateProduct(this.token, id, this.products).subscribe(function (response) {
            if (!response.INFO_PRODUCT) {
              alert("Se encontraron problemas en el servidor.");
            } else {
              if (!_this4.filesToUpload) {
                _this4.products = response.INFO_PRODUCT;

                _this4.router.navigate(['/store']);

                alert("El producto se modificó con éxito.");
              } else {
                _this4.makeFileRequest(_this4.url + '/add-image/' + response.INFO_PRODUCT._id, [], _this4.filesToUpload), function (result) {
                  _this4.products.image = result.image;
                  _this4.alertMessage = 'Producto modificado con exito...';
                  alert("El producto fue modificado con exito.");
                  _this4.products = response.INFO_PRODUCT;

                  _this4.router.navigate(['/store']);
                };
              }
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(fileInput) {
          this.filesToUpload = fileInput.target.files;
          console.log(this.filesToUpload);
        }
      }, {
        key: "makeFileRequest",
        value: function makeFileRequest(url, params, files) {
          var token = this.token;
          return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();

            for (var i = 0; i < files.length; i++) {
              formData.append('image', files[i], files[i].name);
            }

            xhr.onreadystatechange = function () {
              if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                  resolve(JSON.parse(xhr.response));
                } else {
                  reject(xhr.response);
                }
              }
            };

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
          });
        }
      }]);
    }();

    ProductComponent.ɵfac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_services__WEBPACK_IMPORTED_MODULE_3__["ProductsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_services__WEBPACK_IMPORTED_MODULE_7__["CartServices"]));
    };

    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductComponent,
      selectors: [["app-product"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_products_services__WEBPACK_IMPORTED_MODULE_3__["ProductsServices"], _services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]])],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf"], ["class", "FirstSection", 4, "ngIf"], ["href", "store/cart", 1, "btn-cart"], ["src", "../../../assets/svg/Shopping Cart.svg", "alt", "cart", 1, "img-fluid"], [1, "FirstSection"], [1, "container"], [1, "row", "justify-content-lg-around"], ["data-aos", "fade-down", 1, "text", "col-sm-12", "col-md-12", "col-md-10", "col-lg-6", "col-xl-6", "col-12"], [1, "price"], [1, "col-2"], ["disabled", "", "type", "hidden", "min", "1", "value", "1", 1, "w-100"], [1, "btn", "waves-effect", "waves-ripple", 3, "click"], ["src", "../../../../assets/svg/buy.svg"], ["class", "actions d-lg-flex justify-content-lg-start", 4, "ngIf"], ["class", "secure", 4, "ngIf"], ["class", "secure-update", 4, "ngIf"], ["data-aos", "fade-down", 1, "image", "col-sm-12", "col-md-12", "col-md-10", "col-lg-6", "col-xl-6", "col-12"], [1, "rounded", 3, "src"], [1, "TwoSection", "container"], [1, "description"], ["width", "100%"], [3, "innerHtml"], [1, "actions", "d-lg-flex", "justify-content-lg-start"], [1, "btn", "btn-edit", "waves-effect", "waves-ripple", 3, "click"], ["src", "../../../../assets/svg/tags.svg", "alt", "Logo"], [1, "btn", "btn-delete", "waves-effect", "waves-ripple", 3, "click"], ["src", "../../../../assets/svg/trash.svg", "alt", "Logo"], [1, "secure"], [1, "buttons", "d-lg-flex", "justify-content-lg-around"], [1, "btn", "btn-cancel", "btn-primary", "waves-effect", "waves-ripple", 3, "click"], [1, "btn", "btn-deletes", "btn-danger", "waves-effect", "waves-ripple", 3, "click"], [1, "secure-update"], [3, "ngSubmit"], ["f", "ngForm"], ["type", "text", "name", "productName", "id", "", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["productName", "ngModel"], ["type", "text", "name", "brand", "id", "", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["brand", "ngModel"], ["type", "text", "name", "price", "id", "", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["price", "ngModel"], ["name", "description", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["description", "ngModel"], ["type", "text", "name", "material", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["material", "ngModel"], ["type", "file", "name", "image", "id", "", 1, "form-control", 3, "change"], [1, "actions", "d-lg-flex", "justify-content-lg-around"], ["type", "reset", 1, "btn", "waves-effect", "waves-ripple", 3, "click"], ["type", "submit", 1, "btn", "waves-effect", "waves-ripple"], [1, "text", "col-sm-12", "col-md-12", "col-md-10", "col-lg-6", "col-xl-6", "col-12"], [1, "image", "col-sm-12", "col-md-12", "col-md-10", "col-lg-6", "col-xl-6", "col-12"], ["data-aos", "fade-down", 1, "TwoSection", "container"]],
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-store");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductComponent_div_1_Template, 5, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductComponent_div_2_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity == null);
        }
      },
      directives: [_components_navbar_store_navbar_store_component__WEBPACK_IMPORTED_MODULE_8__["NavbarStoreComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]],
      styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.btn-cart[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 55px;\n  height: 55px;\n  line-height: 55px;\n  bottom: 30px;\n  right: 30px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 50px;\n  font-size: 30px;\n  transition: 350ms ease-in;\n}\n\n.btn-cart[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n\n.btn-cart[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.3em auto;\n  width: 75%;\n}\n\n.btn-cart[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #999999;\n}\n\n.FirstSection[_ngcontent-%COMP%] {\n  padding-top: 4em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFC107;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding-bottom: 0.2em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  height: 2px;\n  background: #fafafa;\n  border-radius: 5px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding-top: 0.5em;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  font-size: 1.2em;\n  color: #0E6152;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 300;\n  color: #4d4d4d;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4.price[_ngcontent-%COMP%] {\n  padding-top: 1em;\n  font-weight: 700;\n  font-family: \"Montserrat\", sans-serif;\n  color: #222222;\n  font-size: 2em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n  background: #0E6152;\n  transition: 350ms ease-in;\n  color: #fff;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  max-width: 100%;\n  width: 30px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #007cc0;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 3em 0.8em 0 0;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  font-size: 0.95em;\n  transition: 350ms ease-in;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  padding-right: 5px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a.btn-edit[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #005670;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a.btn-edit[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 13px 24px -7px #005670;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a.btn-delete[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #e4002b;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a.btn-delete[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 13px 24px -7px #e4002b;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 350ms ease-in;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%] {\n  margin-top: 1.5em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  font-size: 300;\n  color: #fff;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  transition: 380ms ease-in;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 380ms ease-in;\n  box-shadow: 0px 13px 24px -7px #7e7b7b;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .secure-update[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  text-transform: uppercase;\n  padding-top: 1em;\n  font-size: 1.3em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  width: 65%;\n}\n\n.TwoSection[_ngcontent-%COMP%] {\n  padding-bottom: 3em;\n  padding-top: 7em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  color: #333333;\n  margin-bottom: 0.8em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 85%;\n  text-align: justify;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n}\n\n@media screen and (min-width: 0px) and (max-width: 425px) {\n  .FirstSection[_ngcontent-%COMP%] {\n    padding-top: 2em;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    margin: 3em auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    margin: 2em auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 1em auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 2em auto;\n    width: 75%;\n  }\n\n  .TwoSection[_ngcontent-%COMP%] {\n    padding-bottom: 6em;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 426px) and (max-width: 600px) {\n  .FirstSection[_ngcontent-%COMP%] {\n    padding-top: 2em;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    margin: 3em auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 60%;\n    display: block;\n    margin: 2em auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 1em auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 2em auto;\n    width: 75%;\n  }\n\n  .TwoSection[_ngcontent-%COMP%] {\n    padding-bottom: 6em;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 601px) and (max-width: 767px) {\n  .FirstSection[_ngcontent-%COMP%] {\n    padding-top: 1em !important;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    margin: 3em auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 50%;\n    display: block;\n    margin: 2em auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 1em auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 2em auto;\n    width: 75%;\n  }\n\n  .TwoSection[_ngcontent-%COMP%] {\n    padding-bottom: 6em;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 991px) {\n  .FirstSection[_ngcontent-%COMP%] {\n    padding-top: 1em !important;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    margin: 3em auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 45%;\n    display: block;\n    margin: 2em auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 1em auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 2em auto;\n    width: 60%;\n  }\n\n  .TwoSection[_ngcontent-%COMP%] {\n    padding-bottom: 6em;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    text-align: center !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcmUvcHJvZHVjdC9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0b3JlL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcmUvcHJvZHVjdC9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fd2F2ZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcmUvcHJvZHVjdC9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcc3RvcmVcXHByb2R1Y3RcXHByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0ksYUFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxpSEFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSw2Q0FBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxnQ0FBQTtBQ3BDSjs7QURxQ0k7RUFDSSxnQ0FBQTtBQ25DUjs7QUR1Q0E7RUFDSSxlQUFBO0FDcENKOztBQ3BCQTs7Ozs7OztFQUFBOztBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURxQko7O0FDbkJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEb0JOOztBQ2hCSTtFQUNFLDJDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2RJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEZ0JOOztBQ2JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEZU47O0FDWEU7RUFDRSwyQkFBQTtBRGNKOztBQ1hFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRGNKOztBQ1hFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRGNKOztBQ1pJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QURjTjs7QUNWRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QURhSjs7QUNWRTtFQUNFLGNBQUE7QURhSjs7QUNWRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QURhSjs7QUUzSEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0dITWU7RUdMZixtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBRjhISjs7QUU1SEk7RUFDRyxjQUFBO0VBQ0EsWUFBQTtBRjhIUDs7QUU3SE87RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FGK0hYOztBRTNISTtFQUNJLHlCQUFBO0VBQ0Esc0NBQUE7QUY2SFI7O0FFeEhBO0VBQ0ksZ0JBQUE7QUYySEo7O0FFekhRO0VBQ0ksY0FBQTtFQUNBLGtDSDdCRjtFRzhCRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUYySFo7O0FFekhRO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUYySFo7O0FFekhRO0VBQ0ksa0JBQUE7RUFDQSxrQ0h6Q0Y7RUcwQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUYySFo7O0FFMUhZO0VBQ0ksZ0JBQUE7RUFDQSxjSDdCTDtBQ3lKWDs7QUV6SFk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNIdkRIO0VHd0RHLGNBQUE7RUFDQSxjQUFBO0FGMkhoQjs7QUV0SFE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSwrR0gvREM7QUN1TGI7O0FFdkhZO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRnlIaEI7O0FFdEhZO0VBQ0kseUJBQUE7RUFDQSxzQ0FBQTtBRndIaEI7O0FFbEhZO0VBQ0kscUJBQUE7RUFDQSwrR0hoRkg7RUdpRkcsa0NIdEZOO0VHdUZNLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FGb0hoQjs7QUVsSGdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FGb0hwQjs7QUVqSGdCO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FGbUhwQjs7QUVsSG9CO0VBQ0ksc0NBQUE7QUZvSHhCOztBRWhIZ0I7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUZrSHBCOztBRWpIb0I7RUFDSSxzQ0FBQTtBRm1IeEI7O0FFL0dnQjtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBRmlIcEI7O0FFM0dRO0VBQ0ksaUJBQUE7QUY2R1o7O0FFNUdZO0VBQ0ksa0JBQUE7RUFDQSxrQ0gvSE47RUdnSU0sZ0JBQUE7QUY4R2hCOztBRTNHZ0I7RUFDSSxrQ0hwSVY7RUdxSVUsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLCtHSG5JUDtFR29JTyx5QkFBQTtBRjZHcEI7O0FFNUdvQjtFQUNJLHlCQUFBO0VBQ0Esc0NBQUE7QUY4R3hCOztBRXZHWTtFQUNJLGtDSHBKTjtFR3FKTSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUZ5R2hCOztBRW5HUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBRnFHWjs7QUVoR0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FGbUdKOztBRWxHSTtFQUNJLFVBQUE7QUZvR1I7O0FFbEdRO0VBQ0ksa0NINUtGO0VHNktFLGdCQUFBO0VBQ0EsY0g3SkQ7RUc4SkMsb0JBQUE7QUZvR1o7O0FFakdRO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NIckxGO0VHc0xFLGdCQUFBO0FGbUdaOztBRTVGQTtFQUNJO0lBQ0ksZ0JBQUE7RUYrRk47RUU5Rk07SUFDSSxrQkFBQTtFRmdHVjtFRTlGYztJQUNJLGNBQUE7RUZnR2xCO0VFN0ZVO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0VGK0ZkO0VFN0ZVO0lBQ0ksa0JBQUE7RUYrRmQ7RUU5RmM7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7RUZnR2xCO0VFNUZjO0lBQ0ksZ0JBQUE7RUY4RmxCO0VFekZVO0lBQ0ksZ0JBQUE7SUFDQSxVQUFBO0VGMkZkOztFRXZGRTtJQUNJLG1CQUFBO0VGMEZOO0VFekZNO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VGMkZWO0VFMUZVO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSw2QkFBQTtFRjRGZDtBQUNGOztBRXZGQTtFQUNJO0lBQ0ksZ0JBQUE7RUZ5Rk47RUV4Rk07SUFDSSxrQkFBQTtFRjBGVjtFRXhGYztJQUNJLGNBQUE7RUYwRmxCO0VFdkZVO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0VGeUZkO0VFdkZVO0lBQ0ksa0JBQUE7RUZ5RmQ7RUV4RmM7SUFDSSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VGMEZsQjtFRXRGYztJQUNJLGdCQUFBO0VGd0ZsQjtFRW5GVTtJQUNJLGdCQUFBO0lBQ0EsVUFBQTtFRnFGZDs7RUVqRkU7SUFDSSxtQkFBQTtFRm9GTjtFRW5GTTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFRnFGVjtFRXBGVTtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsNkJBQUE7RUZzRmQ7QUFDRjs7QUVoRkE7RUFDSTtJQUNJLDJCQUFBO0VGa0ZOO0VFakZNO0lBQ0ksa0JBQUE7RUZtRlY7RUVqRmM7SUFDSSxjQUFBO0VGbUZsQjtFRWhGVTtJQUNJLGNBQUE7SUFDQSxnQkFBQTtFRmtGZDtFRWhGVTtJQUNJLGtCQUFBO0VGa0ZkO0VFakZjO0lBQ0ksVUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFRm1GbEI7RUUvRWM7SUFDSSxnQkFBQTtFRmlGbEI7RUU1RVU7SUFDSSxnQkFBQTtJQUNBLFVBQUE7RUY4RWQ7O0VFMUVFO0lBQ0ksbUJBQUE7RUY2RU47RUU1RU07SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUY4RVY7RUU3RVU7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLDZCQUFBO0VGK0VkO0FBQ0Y7O0FFekVBO0VBQ0k7SUFDSSwyQkFBQTtFRjJFTjtFRTFFTTtJQUNJLGtCQUFBO0VGNEVWO0VFM0VVO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0VGNkVkO0VFM0VVO0lBQ0ksa0JBQUE7RUY2RWQ7RUU1RWM7SUFDSSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VGOEVsQjtFRTFFYztJQUNJLGdCQUFBO0VGNEVsQjtFRXZFVTtJQUNJLGdCQUFBO0lBQ0EsVUFBQTtFRnlFZDs7RUVyRUU7SUFDSSxtQkFBQTtFRndFTjtFRXZFTTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFRnlFVjtFRXhFVTtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsNkJBQUE7RUYwRWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3JlL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kYmFyLXdpZHRoOiAyNXB4O1xyXG4kYmFyLWhlaWdodDogMy4xcHg7XHJcbiRiYXItc3BhY2luZzogN3B4O1xyXG5cclxuJE1vbnRzZXJyYXQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJE11bGlzaDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRQb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblxyXG4kYm9yZGVyLWlucHV0OiAjYzlkM2RkO1xyXG5cclxuJHNoYWRvdy1uYXY6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LWJ0bjogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LXNtYWxsOiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRzaGFkb3ctY29udGFpbmVyLXNtYWxsOiAwIDEwcHggMjBweCAwIHJnYigwIDAgMCAvIDUlKTtcclxuJHNoYWRvdy1jb250YWluZXI6IDAgMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDAgMXB4IDFweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiRzaGFkb3ctbmF2LXNtYWxsOiAwIDJweCAzMHB4IDAgcmdiKDIwNyAyMDcgMjA3IC8gNTAlKTtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMEU2MTUyO1xyXG4kZ3JleS04MDA6ICM0MjQyNDI7XHJcbiRncmV5LTcwMDogIzI5MzIzZDtcclxuJGdyZXktNjAwOiAjNzk4ZGEzO1xyXG4kZ3JleS01MDA6ICMwRTYxNTI7XHJcbiRncmV5LTQwMDogIzlmYWZjMTtcclxuJGdyZXktMzAwOiAjMzMzMzMzO1xyXG4kZ3JleS0yMDA6ICM0ZDRkNGQ7XHJcbiRncmV5LTEwMDogIzY2NjY2NjtcclxuJHBpbmstZmlyc3Q6ICNlMWQ5ZDU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLTI6ICNlZGYwZjQ7XHJcblxyXG4kYmxhY2stODAwOiAjMDAwO1xyXG4kYmxhY2stNzAwOiAjMTQxNDE0O1xyXG4kYmxhY2stNjAwOiAjMWIxYjFiO1xyXG4kYmxhY2stNTAwOiAjMEU2MTUyO1xyXG5cclxuXHJcbi52aXNpYmxlLXNtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaGFkb3ctbmF2IHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG4uc2hhZG93LXNtYWxsIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnRleHQtbm9uZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi52aXNpYmxlLXNtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoYWRvdy1uYXYge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLnNoYWRvdy1zbWFsbCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRleHQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnRleHQtbm9uZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyohXG4gKiBXYXZlcyB2MC42LjBcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4ud2F2ZXMtZWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG59XG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1idXR0b25dLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9cmVzZXRdLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndhdmVzLWVmZmVjdCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ud2F2ZXMtbm90cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi53YXZlcy1pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ud2F2ZXMtaW5wdXQtd3JhcHBlciAud2F2ZXMtYnV0dG9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbn1cblxuLndhdmVzLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYnRuLWNhcnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbn1cbi5idG4tY2FydCBkaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmJ0bi1jYXJ0IGRpdiBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjNlbSBhdXRvO1xuICB3aWR0aDogNzUlO1xufVxuLmJ0bi1jYXJ0OmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICM5OTk5OTk7XG59XG5cbi5GaXJzdFNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogNGVtO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBoMyB7XG4gIGNvbG9yOiAjRkZDMTA3O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctYm90dG9tOiAwLjJlbTtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgaHIge1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBoNCB7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzBFNjE1Mjtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgaDQgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBoNC5wcmljZSB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAyLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMEU2MTUyO1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBidXR0b24gaW1nIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAzMHB4O1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBidXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzAwN2NjMDtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgLmFjdGlvbnMgYSB7XG4gIG1hcmdpbjogM2VtIDAuOGVtIDAgMDtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IC5hY3Rpb25zIGEgaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgLmFjdGlvbnMgYS5idG4tZWRpdCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDA1NjcwO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCAuYWN0aW9ucyBhLmJ0bi1lZGl0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICMwMDU2NzA7XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IC5hY3Rpb25zIGEuYnRuLWRlbGV0ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZTQwMDJiO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCAuYWN0aW9ucyBhLmJ0bi1kZWxldGU6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggI2U0MDAyYjtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgLmFjdGlvbnMgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgLnNlY3VyZSB7XG4gIG1hcmdpbi10b3A6IDEuNWVtO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCAuc2VjdXJlIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgLnNlY3VyZSAuYnV0dG9ucyBhIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDMwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgdHJhbnNpdGlvbjogMzgwbXMgZWFzZS1pbjtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgLnNlY3VyZSAuYnV0dG9ucyBhOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMzgwbXMgZWFzZS1pbjtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICM3ZTdiN2I7XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IC5zZWN1cmUtdXBkYXRlIHAge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG4uRmlyc3RTZWN0aW9uIC5pbWFnZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNjUlO1xufVxuXG4uVHdvU2VjdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAzZW07XG4gIHBhZGRpbmctdG9wOiA3ZW07XG59XG4uVHdvU2VjdGlvbiAuZGVzY3JpcHRpb24ge1xuICB3aWR0aDogNzAlO1xufVxuLlR3b1NlY3Rpb24gLmRlc2NyaXB0aW9uIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzMzMzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG59XG4uVHdvU2VjdGlvbiAuZGVzY3JpcHRpb24gcCB7XG4gIHdpZHRoOiA4NSU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLkZpcnN0U2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDJlbTtcbiAgfVxuICAuRmlyc3RTZWN0aW9uIC50ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCBoNCBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuRmlyc3RTZWN0aW9uIC50ZXh0IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAzZW0gYXV0bztcbiAgfVxuICAuRmlyc3RTZWN0aW9uIC50ZXh0IC5hY3Rpb25zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCAuYWN0aW9ucyBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xuICB9XG4gIC5GaXJzdFNlY3Rpb24gLnRleHQgLnNlY3VyZSBhIHtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xuICB9XG4gIC5GaXJzdFNlY3Rpb24gLmltYWdlIGltZyB7XG4gICAgbWFyZ2luOiAyZW0gYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICB9XG5cbiAgLlR3b1NlY3Rpb24ge1xuICAgIHBhZGRpbmctYm90dG9tOiA2ZW07XG4gIH1cbiAgLlR3b1NlY3Rpb24gLmRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLlR3b1NlY3Rpb24gLmRlc2NyaXB0aW9uIHAge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5GaXJzdFNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAyZW07XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5GaXJzdFNlY3Rpb24gLnRleHQgaDQgc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogM2VtIGF1dG87XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCAuYWN0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5GaXJzdFNlY3Rpb24gLnRleHQgLmFjdGlvbnMgYSB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xuICB9XG4gIC5GaXJzdFNlY3Rpb24gLnRleHQgLnNlY3VyZSBhIHtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xuICB9XG4gIC5GaXJzdFNlY3Rpb24gLmltYWdlIGltZyB7XG4gICAgbWFyZ2luOiAyZW0gYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICB9XG5cbiAgLlR3b1NlY3Rpb24ge1xuICAgIHBhZGRpbmctYm90dG9tOiA2ZW07XG4gIH1cbiAgLlR3b1NlY3Rpb24gLmRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLlR3b1NlY3Rpb24gLmRlc2NyaXB0aW9uIHAge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5GaXJzdFNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAxZW0gIWltcG9ydGFudDtcbiAgfVxuICAuRmlyc3RTZWN0aW9uIC50ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCBoNCBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuRmlyc3RTZWN0aW9uIC50ZXh0IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAzZW0gYXV0bztcbiAgfVxuICAuRmlyc3RTZWN0aW9uIC50ZXh0IC5hY3Rpb25zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCAuYWN0aW9ucyBhIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMmVtIGF1dG87XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCAuc2VjdXJlIGEge1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAuaW1hZ2UgaW1nIHtcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cblxuICAuVHdvU2VjdGlvbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDZlbTtcbiAgfVxuICAuVHdvU2VjdGlvbiAuZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuVHdvU2VjdGlvbiAuZGVzY3JpcHRpb24gcCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLkZpcnN0U2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDFlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5GaXJzdFNlY3Rpb24gLnRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuRmlyc3RTZWN0aW9uIC50ZXh0IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAzZW0gYXV0bztcbiAgfVxuICAuRmlyc3RTZWN0aW9uIC50ZXh0IC5hY3Rpb25zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCAuYWN0aW9ucyBhIHtcbiAgICB3aWR0aDogNDUlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMmVtIGF1dG87XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCAuc2VjdXJlIGEge1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAuaW1hZ2UgaW1nIHtcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cblxuICAuVHdvU2VjdGlvbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDZlbTtcbiAgfVxuICAuVHdvU2VjdGlvbiAuZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuVHdvU2VjdGlvbiAuZGVzY3JpcHRpb24gcCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCJcclxuLyohXHJcbiAqIFdhdmVzIHYwLjYuMFxyXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcblxyXG4gLndhdmVzLWVmZmVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgICAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gIFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gV2F2ZXMgQ29sb3JzXHJcbiAgICAmLndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43MCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTdHlsZSBpbnB1dCBidXR0b24gYnVnLlxyXG4gICAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInJlc2V0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtbm90cmFuc2l0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmUgI3tcIiFpbXBvcnRhbnRcIn07XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgXHJcbiAgICAud2F2ZXMtYnV0dG9uLWlucHV0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXHJcbiAgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvX2luZGV4JztcclxuXHJcbi5idG4tY2FydCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LWNvbnRhaW5lcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgbWFyZ2luOiAuM2VtIGF1dG87XHJcbiAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCByZ2IoMTUzLCAxNTMsIDE1Myk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uRmlyc3RTZWN0aW9uIHtcclxuICAgIHBhZGRpbmctdG9wOiA0ZW07XHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGQzEwNztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IC41ZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICMwRTYxNTI7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleS0yMDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYucHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJE1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBFNjE1MjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctYnRuO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjMDA3Y2MwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogM2VtIC44ZW0gMCAwO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1idG47XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOTVlbTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLmJ0bi1lZGl0IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1NjcwO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzAwNTY3MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5idG4tZGVsZXRlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTQwMDJiO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggI2U0MDAyYjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VjdXJlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93LWJ0bjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzODBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzODBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzdlN2I3YjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWN1cmUtdXBkYXRlIHtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLmltYWdlIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLlR3b1NlY3Rpb24ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNlbTtcclxuICAgIHBhZGRpbmctdG9wOiA3ZW07XHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBjb2xvcjogJGdyZXktMzAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuOGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIC5GaXJzdFNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogM2VtIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyZW0gYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VjdXJlIHtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMWVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLlR3b1NlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2ZW07XHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLkZpcnN0U2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzZW0gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlY3VyZSB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5Ud29TZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNmVtO1xyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuRmlyc3RTZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMWVtIWltcG9ydGFudDtcclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzZW0gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlY3VyZSB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5Ud29TZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNmVtO1xyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuRmlyc3RTZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMWVtIWltcG9ydGFudDtcclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzZW0gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlY3VyZSB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5Ud29TZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNmVtO1xyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.scss'],
          providers: [_services_products_services__WEBPACK_IMPORTED_MODULE_3__["ProductsServices"], _services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]]
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
        }, {
          type: _services_products_services__WEBPACK_IMPORTED_MODULE_3__["ProductsServices"]
        }, {
          type: _services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_cart_services__WEBPACK_IMPORTED_MODULE_7__["CartServices"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/store/store-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/store/store-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: StoreRoutingModule */

  /***/
  function _src_app_pages_store_storeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreRoutingModule", function () {
      return StoreRoutingModule;
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


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/pages/store/cart/cart.component.ts");
    /* harmony import */


    var _newproduct_newproduct_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./newproduct/newproduct.component */
    "./src/app/pages/store/newproduct/newproduct.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/pages/store/product/product.component.ts");
    /* harmony import */


    var _store_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store.component */
    "./src/app/pages/store/store.component.ts");

    var routes = [{
      path: '',
      component: _store_component__WEBPACK_IMPORTED_MODULE_5__["StoreComponent"]
    }, {
      path: 'add-product',
      component: _newproduct_newproduct_component__WEBPACK_IMPORTED_MODULE_3__["NewproductComponent"]
    }, {
      path: 'product/:id',
      component: _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"]
    }, {
      path: 'cart',
      component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]
    }];

    var StoreRoutingModule = /*#__PURE__*/_createClass(function StoreRoutingModule() {
      _classCallCheck(this, StoreRoutingModule);
    });

    StoreRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StoreRoutingModule
    });
    StoreRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StoreRoutingModule_Factory(t) {
        return new (t || StoreRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoreRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreRoutingModule, [{
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
  "./src/app/pages/store/store.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/store/store.component.ts ***!
    \************************************************/

  /*! exports provided: StoreComponent */

  /***/
  function _src_app_pages_store_storeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreComponent", function () {
      return StoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_users_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/users.services */
    "./src/app/services/users.services.ts");
    /* harmony import */


    var _services_products_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/products.services */
    "./src/app/services/products.services.ts");
    /* harmony import */


    var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/GLOBAL */
    "./src/app/services/GLOBAL.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_navbar_store_navbar_store_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/navbar-store/navbar-store.component */
    "./src/app/components/navbar-store/navbar-store.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_footer_store_footer_store_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/footer-store/footer-store.component */
    "./src/app/components/footer-store/footer-store.component.ts");
    /* harmony import */


    var _store_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./store.filter.pipe */
    "./src/app/pages/store/store.filter.pipe.ts");

    function StoreComponent_div_0_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No se han encontrado resultados.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No podemos encontrar ning\xFAn art\xEDculo que coincida con su b\xFAsqueda");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " o actualmente no hay productos disponibles.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\\(o_o)/");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["product/", a1];
    };

    function StoreComponent_div_0_a_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r4 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, product_r4._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.url + "/get-image-product/" + product_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", product_r4.price, " MX");
      }
    }

    var _c1 = function _c1() {
      return ["cart"];
    };

    var _c2 = function _c2() {
      return ["add-product"];
    };

    function StoreComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar-store");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Productos disponibles en nuestra tienda");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StoreComponent_div_0_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.searchTerm = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StoreComponent_div_0_p_10_Template, 10, 0, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "productFilter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StoreComponent_div_0_a_14_Template, 9, 6, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "productFilter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-footer-store");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var tmp_1_0 = null;
        var currVal_1 = !((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 5, ctx_r0.products, ctx_r0.searchTerm)) == null ? null : tmp_1_0.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchTerm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 8, ctx_r0.products, ctx_r0.searchTerm));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
      }
    }

    function StoreComponent_div_1_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No se han encontrado resultados.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No podemos encontrar ning\xFAn art\xEDculo que coincida con su b\xFAsqueda");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " o actualmente no hay productos disponibles.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\\(o_o)/");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StoreComponent_div_1_a_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r9 = ctx.$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, product_r9._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r8.url + "/get-image-product/" + product_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r9.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", product_r9.price, " MX");
      }
    }

    function StoreComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar-store");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Productos disponibles en nuestra tienda");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StoreComponent_div_1_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.searchTerm = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StoreComponent_div_1_p_10_Template, 10, 0, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "productFilter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StoreComponent_div_1_a_14_Template, 9, 6, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "productFilter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-footer-store");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var tmp_1_0 = null;
        var currVal_1 = !((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 3, ctx_r1.products, ctx_r1.searchTerm)) == null ? null : tmp_1_0.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.searchTerm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 6, ctx_r1.products, ctx_r1.searchTerm));
      }
    }

    var StoreComponent = /*#__PURE__*/function () {
      function StoreComponent(Title, usersservices, productsservices, route, router) {
        _classCallCheck(this, StoreComponent);

        this.Title = Title;
        this.usersservices = usersservices;
        this.productsservices = productsservices;
        this.route = route;
        this.router = router;
        this.Title.setTitle('Tienda - Centli');
        this.next_page = 1;
        this.prev_page = 1;
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
      }

      return _createClass(StoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.identity = this.usersservices.getIdentity();
          this.token = this.usersservices.getToken();
          this.getProducts();
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this5 = this;

          this.route.params.forEach(function (params) {
            var page = +params['page'];

            if (!page) {
              page = 1;
            } else {
              _this5.next_page = page + 1;
              _this5.prev_page = page - 1;

              if (_this5.prev_page == 0) {
                _this5.prev_page = 1;
              }
            }

            _this5.productsservices.getProducts(page).subscribe(function (response) {
              if (response.page) {
                _this5.router.navigate(['/']);
              } else {
                _this5.products = response.product;
              }
            }, function (error) {
              console.log(error);
            });
          });
        }
      }]);
    }();

    StoreComponent.ɵfac = function StoreComponent_Factory(t) {
      return new (t || StoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_1__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_services__WEBPACK_IMPORTED_MODULE_2__["ProductsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    StoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StoreComponent,
      selectors: [["app-store"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_products_services__WEBPACK_IMPORTED_MODULE_2__["ProductsServices"], _services_users_services__WEBPACK_IMPORTED_MODULE_1__["UsersServices"]])],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "TwoSection", "pt-5", "d-lg-flex", "justify-content-around"], ["data-aos", "fade-down"], ["data-aos", "fade-down", 1, "form-group"], ["type", "text", "name", "search", "spellcheck", "false", "id", "search", "placeholder", "Escribe el producto que buscas...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["src", "../../../assets/svg/Search.svg", "alt", "Search Icon"], [1, "ThirdSection"], ["class", "item-not-found", 4, "ngIf"], [1, "container"], [1, "row", "justify-content-around"], ["routerLinkActive", "router-link-active", "class", "product p-3 mt-5 text-none rounded", "data-aos", "fade-down", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "router-link-active", 1, "btn-cart", 3, "routerLink"], ["src", "../../../assets/svg/Shopping Cart.svg", "alt", "cart", 1, "img-fluid"], ["routerLinkActive", "router-link-active", 1, "btn-add", 3, "routerLink"], ["src", "../../../assets/svg/addC.svg", "alt", "cart", 1, "img-fluid"], [1, "item-not-found"], [1, "info-item"], ["routerLinkActive", "router-link-active", "data-aos", "fade-down", 1, "product", "p-3", "mt-5", "text-none", "rounded", 3, "routerLink"], [1, "image"], ["alt", "image", 1, "rounded", "img-fluid", 3, "src"], [1, "text"], [1, "__name"], [1, "__price"], [1, "form-group"], ["routerLinkActive", "router-link-active", "class", "product p-3 mt-5 rounded text-none rounded", "data-aos", "fade-down", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "router-link-active", "data-aos", "fade-down", 1, "product", "p-3", "mt-5", "rounded", "text-none", "rounded", 3, "routerLink"]],
      template: function StoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoreComponent_div_0_Template, 23, 13, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoreComponent_div_1_Template, 17, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_navbar_store_navbar_store_component__WEBPACK_IMPORTED_MODULE_7__["NavbarStoreComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _components_footer_store_footer_store_component__WEBPACK_IMPORTED_MODULE_9__["FooterStoreComponent"]],
      pipes: [_store_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["ProductFilterPipe"]],
      styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\ninput[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\n.btn-cart[_ngcontent-%COMP%] {\n  background: #fff;\n  position: fixed;\n  width: 55px;\n  height: 55px;\n  line-height: 55px;\n  bottom: 30px;\n  right: 30px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 50px;\n  font-size: 30px;\n  transition: 350ms ease-in;\n}\n\n.btn-cart[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n\n.btn-cart[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.3em auto;\n  width: 75%;\n}\n\n.btn-cart[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #999999;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  background: #fff;\n  position: fixed;\n  width: 55px;\n  height: 55px;\n  line-height: 55px;\n  bottom: 30px;\n  bottom: 100px;\n  right: 30px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 50px;\n  font-size: 30px;\n  transition: 350ms ease-in;\n}\n\n.btn-add[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n\n.btn-add[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.3em auto;\n  width: 75%;\n}\n\n.btn-add[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #999999;\n}\n\n.TwoSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  color: #0E6152;\n  text-transform: uppercase;\n  font-size: 1.5em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 280px;\n  padding: 0.2em;\n  border: 1px solid #2121;\n  border-radius: 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.2em;\n  width: 100%;\n  border: none;\n  font-size: 0.9em;\n  color: #798da3;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 0.9em;\n  -moz-transition: 350ms ease-in;\n  transition: 350ms ease-in;\n  transform: translateX(0);\n}\n\n.TwoSection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 0.9em;\n  transition: 350ms ease-in;\n  transform: translateX(0);\n}\n\n.TwoSection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 25px;\n  padding: 4px;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:focus-within   input[_ngcontent-%COMP%]::-moz-placeholder {\n  -moz-transition: 350ms ease-in;\n  transition: 350ms ease-in;\n  transform: translateX(-215px);\n}\n\n.TwoSection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:focus-within   input[_ngcontent-%COMP%]::placeholder {\n  transition: 350ms ease-in;\n  transform: translateX(-215px);\n}\n\n.ThirdSection[_ngcontent-%COMP%] {\n  padding-bottom: 3em;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .item-not-found[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n  padding-top: 5em;\n  width: 85%;\n  margin: auto;\n  font-size: 1.2em;\n  color: #1b1b1b;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .item-not-found[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 1.5em;\n  font-weight: 500;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .item-not-found[_ngcontent-%COMP%]   span.info-item[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #0E6152;\n  font-size: 0.7em;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: 300ms ease-in;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 245px;\n  width: 100%;\n  overflow: hidden;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n  height: 100%;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 1.2em;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4.__name[_ngcontent-%COMP%] {\n  font-family: \"Mulish\", sans-serif;\n  font-size: 1.2em;\n  text-transform: uppercase;\n  color: #0E6152;\n  width: 320px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4.__price[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  margin-top: 0.5em;\n  font-weight: 600;\n  color: #000 !important;\n  font-size: 1.4em;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 300ms ease-in;\n  background: #fdfdfd;\n  box-shadow: 0px 13px 15px -7px rgba(0, 0, 0, 0.329);\n}\n\n@media screen and (min-width: 0px) and (max-width: 425px) {\n  .TwoSection[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin: 1em auto;\n  }\n\n  .ThirdSection[_ngcontent-%COMP%]   .item-not-found[_ngcontent-%COMP%] {\n    padding-top: 2em;\n  }\n  .ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n  .ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4.__name[_ngcontent-%COMP%] {\n    width: 240px;\n  }\n}\n\n@media screen and (min-width: 426px) and (max-width: 600px) {\n  .TwoSection[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin: 1em auto;\n  }\n\n  .ThirdSection[_ngcontent-%COMP%]   .item-not-found[_ngcontent-%COMP%] {\n    padding-top: 2em;\n  }\n  .ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n  .ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4.__name[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n\n@media screen and (min-width: 601px) and (max-width: 767px) {\n  .TwoSection[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin: 1em auto;\n  }\n\n  .ThirdSection[_ngcontent-%COMP%]   .item-not-found[_ngcontent-%COMP%] {\n    padding-top: 2em;\n  }\n  .ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n  .ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4.__name[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 991px) {\n  .TwoSection[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin: 1em auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcmUvQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdG9yZS9zdG9yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RvcmUvQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfX3dhdmVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0b3JlL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxzdG9yZVxcc3RvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0ksYUFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxpSEFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSw2Q0FBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxnQ0FBQTtBQ3BDSjs7QURxQ0k7RUFDSSxnQ0FBQTtBQ25DUjs7QUR1Q0E7RUFDSSxlQUFBO0FDcENKOztBQ3BCQTs7Ozs7OztFQUFBOztBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURxQko7O0FDbkJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEb0JOOztBQ2hCSTtFQUNFLDJDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2RJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEZ0JOOztBQ2JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEZU47O0FDWEU7RUFDRSwyQkFBQTtBRGNKOztBQ1hFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRGNKOztBQ1hFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRGNKOztBQ1pJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QURjTjs7QUNWRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QURhSjs7QUNWRTtFQUNFLGNBQUE7QURhSjs7QUNWRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QURhSjs7QUUzSEE7RUFFSSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FGNkhKOztBRTFIQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtHSEplO0VHS2YsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUY2SEo7O0FFM0hJO0VBQ0csY0FBQTtFQUNBLFlBQUE7QUY2SFA7O0FFNUhPO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRjhIWDs7QUUxSEk7RUFDSSx5QkFBQTtFQUNBLHNDQUFBO0FGNEhSOztBRXZIQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwrR0huQ2U7RUdvQ2YsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUYwSEo7O0FFeEhJO0VBQ0csY0FBQTtFQUNBLFlBQUE7QUYwSFA7O0FFekhPO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRjJIWDs7QUV2SEk7RUFDSSx5QkFBQTtFQUNBLHNDQUFBO0FGeUhSOztBRWxISTtFQUNJLGtDSHBFRTtFR3FFRixnQkFBQTtFQUNBLGNIdkRHO0VHd0RILHlCQUFBO0VBQ0EsZ0JBQUE7QUZxSFI7O0FFbkhJO0VBQ0ksNkNIckVPO0VHc0VQLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUZxSFI7O0FFbkhRO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjSDVFRDtBQ2lNWDs7QUVuSFk7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFBQSx5QkFBQTtFQUNBLHdCQUFBO0FGcUhoQjs7QUV6SFk7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBRnFIaEI7O0FFaEhRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FGa0haOztBRTdHZ0I7RUFDSSw4QkFBQTtFQUFBLHlCQUFBO0VBQ0EsNkJBQUE7QUYrR3BCOztBRWpIZ0I7RUFDSSx5QkFBQTtFQUNBLDZCQUFBO0FGK0dwQjs7QUV2R0E7RUFDSSxtQkFBQTtBRjBHSjs7QUV6R0k7RUFDSSxrQ0gxSEU7RUcySEYsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjSHRHSTtBQ2lOWjs7QUV6R1E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRjJHWjs7QUV6R1k7RUFDSSxnQkFBQTtFQUNBLGNIMUhMO0VHMkhLLGdCQUFBO0FGMkdoQjs7QUVwR1E7RUFDSSx5QkFBQTtFQUNBLCtHSDNJTztBQ2lQbkI7O0FFckdZO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRnVHaEI7O0FFdEdnQjtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBRndHcEI7O0FFcEdnQjtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUZzR3BCOztBRXBHb0I7RUFDSSxpQ0hyS2Y7RUdzS2UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNIeEpiO0VHeUphLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUZzR3hCOztBRW5Hb0I7RUFDSSxrQ0gvS2Q7RUdnTGMsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUZxR3hCOztBRS9GWTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtBRmlHaEI7O0FFMUZBO0VBQ0k7SUFDSSxrQkFBQTtFRjZGTjtFRTVGTTtJQUNJLGdCQUFBO0VGOEZWOztFRTFGTTtJQUNJLGdCQUFBO0VGNkZWO0VFMUZVO0lBQ0ksVUFBQTtFRjRGZDtFRXpGc0I7SUFDSSxZQUFBO0VGMkYxQjtBQUNGOztBRW5GQTtFQUNJO0lBQ0ksa0JBQUE7RUZxRk47RUVwRk07SUFDSSxnQkFBQTtFRnNGVjs7RUVsRk07SUFDSSxnQkFBQTtFRnFGVjtFRWxGVTtJQUNJLFVBQUE7RUZvRmQ7RUVqRnNCO0lBQ0ksWUFBQTtFRm1GMUI7QUFDRjs7QUUzRUE7RUFDSTtJQUNJLGtCQUFBO0VGNkVOO0VFNUVNO0lBQ0ksZ0JBQUE7RUY4RVY7O0VFMUVNO0lBQ0ksZ0JBQUE7RUY2RVY7RUUxRVU7SUFDSSxVQUFBO0VGNEVkO0VFekVzQjtJQUNJLFlBQUE7RUYyRTFCO0FBQ0Y7O0FFbkVBO0VBQ0k7SUFDSSxrQkFBQTtFRnFFTjtFRXBFTTtJQUNJLGdCQUFBO0VGc0VWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdG9yZS9zdG9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kYmFyLXdpZHRoOiAyNXB4O1xyXG4kYmFyLWhlaWdodDogMy4xcHg7XHJcbiRiYXItc3BhY2luZzogN3B4O1xyXG5cclxuJE1vbnRzZXJyYXQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJE11bGlzaDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRQb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblxyXG4kYm9yZGVyLWlucHV0OiAjYzlkM2RkO1xyXG5cclxuJHNoYWRvdy1uYXY6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LWJ0bjogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LXNtYWxsOiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRzaGFkb3ctY29udGFpbmVyLXNtYWxsOiAwIDEwcHggMjBweCAwIHJnYigwIDAgMCAvIDUlKTtcclxuJHNoYWRvdy1jb250YWluZXI6IDAgMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDAgMXB4IDFweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiRzaGFkb3ctbmF2LXNtYWxsOiAwIDJweCAzMHB4IDAgcmdiKDIwNyAyMDcgMjA3IC8gNTAlKTtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMEU2MTUyO1xyXG4kZ3JleS04MDA6ICM0MjQyNDI7XHJcbiRncmV5LTcwMDogIzI5MzIzZDtcclxuJGdyZXktNjAwOiAjNzk4ZGEzO1xyXG4kZ3JleS01MDA6ICMwRTYxNTI7XHJcbiRncmV5LTQwMDogIzlmYWZjMTtcclxuJGdyZXktMzAwOiAjMzMzMzMzO1xyXG4kZ3JleS0yMDA6ICM0ZDRkNGQ7XHJcbiRncmV5LTEwMDogIzY2NjY2NjtcclxuJHBpbmstZmlyc3Q6ICNlMWQ5ZDU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLTI6ICNlZGYwZjQ7XHJcblxyXG4kYmxhY2stODAwOiAjMDAwO1xyXG4kYmxhY2stNzAwOiAjMTQxNDE0O1xyXG4kYmxhY2stNjAwOiAjMWIxYjFiO1xyXG4kYmxhY2stNTAwOiAjMEU2MTUyO1xyXG5cclxuXHJcbi52aXNpYmxlLXNtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaGFkb3ctbmF2IHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG4uc2hhZG93LXNtYWxsIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnRleHQtbm9uZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi52aXNpYmxlLXNtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoYWRvdy1uYXYge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLnNoYWRvdy1zbWFsbCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRleHQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnRleHQtbm9uZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyohXG4gKiBXYXZlcyB2MC42LjBcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4ud2F2ZXMtZWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG59XG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1idXR0b25dLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9cmVzZXRdLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndhdmVzLWVmZmVjdCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ud2F2ZXMtbm90cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi53YXZlcy1pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ud2F2ZXMtaW5wdXQtd3JhcHBlciAud2F2ZXMtYnV0dG9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbn1cblxuLndhdmVzLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5pbnB1dDpmb2N1cywgaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uYnRuLWNhcnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbn1cbi5idG4tY2FydCBkaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmJ0bi1jYXJ0IGRpdiBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjNlbSBhdXRvO1xuICB3aWR0aDogNzUlO1xufVxuLmJ0bi1jYXJ0OmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICM5OTk5OTk7XG59XG5cbi5idG4tYWRkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBsaW5lLWhlaWdodDogNTVweDtcbiAgYm90dG9tOiAzMHB4O1xuICBib3R0b206IDEwMHB4O1xuICByaWdodDogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG59XG4uYnRuLWFkZCBkaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmJ0bi1hZGQgZGl2IGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAuM2VtIGF1dG87XG4gIHdpZHRoOiA3NSU7XG59XG4uYnRuLWFkZDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjOTk5OTk5O1xufVxuXG4uVHdvU2VjdGlvbiBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwRTYxNTI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4uVHdvU2VjdGlvbiAuZm9ybS1ncm91cCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjgwcHg7XG4gIHBhZGRpbmc6IDAuMmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjEyMTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5Ud29TZWN0aW9uIC5mb3JtLWdyb3VwIGlucHV0IHtcbiAgcGFkZGluZzogMC4yZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjNzk4ZGEzO1xufVxuLlR3b1NlY3Rpb24gLmZvcm0tZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOWVtO1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG4uVHdvU2VjdGlvbiAuZm9ybS1ncm91cCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyNXB4O1xuICBwYWRkaW5nOiA0cHg7XG59XG4uVHdvU2VjdGlvbiAuZm9ybS1ncm91cDpmb2N1cy13aXRoaW4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMTVweCk7XG59XG5cbi5UaGlyZFNlY3Rpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xufVxuLlRoaXJkU2VjdGlvbiAuaXRlbS1ub3QtZm91bmQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDVlbTtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzFiMWIxYjtcbn1cbi5UaGlyZFNlY3Rpb24gLml0ZW0tbm90LWZvdW5kIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLlRoaXJkU2VjdGlvbiAuaXRlbS1ub3QtZm91bmQgc3Bhbi5pbmZvLWl0ZW0ge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzBFNjE1MjtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cbi5UaGlyZFNlY3Rpb24gLmNvbnRhaW5lciBhIHtcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbjtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLlRoaXJkU2VjdGlvbiAuY29udGFpbmVyIGEgLmltYWdlIHtcbiAgaGVpZ2h0OiAyNDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uVGhpcmRTZWN0aW9uIC5jb250YWluZXIgYSAuaW1hZ2UgaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLlRoaXJkU2VjdGlvbiAuY29udGFpbmVyIGEgLnRleHQgaDQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLlRoaXJkU2VjdGlvbiAuY29udGFpbmVyIGEgLnRleHQgaDQuX19uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaXNoXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMEU2MTUyO1xuICB3aWR0aDogMzIwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLlRoaXJkU2VjdGlvbiAuY29udGFpbmVyIGEgLnRleHQgaDQuX19wcmljZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG4uVGhpcmRTZWN0aW9uIC5jb250YWluZXIgYTpob3ZlciB7XG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW47XG4gIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMzI5KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLlR3b1NlY3Rpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuVHdvU2VjdGlvbiAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgfVxuXG4gIC5UaGlyZFNlY3Rpb24gLml0ZW0tbm90LWZvdW5kIHtcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xuICB9XG4gIC5UaGlyZFNlY3Rpb24gLmNvbnRhaW5lciBhIHtcbiAgICB3aWR0aDogODUlO1xuICB9XG4gIC5UaGlyZFNlY3Rpb24gLmNvbnRhaW5lciBhIC50ZXh0IGg0Ll9fbmFtZSB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5Ud29TZWN0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLlR3b1NlY3Rpb24gLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gIH1cblxuICAuVGhpcmRTZWN0aW9uIC5pdGVtLW5vdC1mb3VuZCB7XG4gICAgcGFkZGluZy10b3A6IDJlbTtcbiAgfVxuICAuVGhpcmRTZWN0aW9uIC5jb250YWluZXIgYSB7XG4gICAgd2lkdGg6IDg1JTtcbiAgfVxuICAuVGhpcmRTZWN0aW9uIC5jb250YWluZXIgYSAudGV4dCBoNC5fX25hbWUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuVHdvU2VjdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5Ud29TZWN0aW9uIC5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xuICB9XG5cbiAgLlRoaXJkU2VjdGlvbiAuaXRlbS1ub3QtZm91bmQge1xuICAgIHBhZGRpbmctdG9wOiAyZW07XG4gIH1cbiAgLlRoaXJkU2VjdGlvbiAuY29udGFpbmVyIGEge1xuICAgIHdpZHRoOiA2NSU7XG4gIH1cbiAgLlRoaXJkU2VjdGlvbiAuY29udGFpbmVyIGEgLnRleHQgaDQuX19uYW1lIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLlR3b1NlY3Rpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuVHdvU2VjdGlvbiAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgfVxufSIsIlxyXG4vKiFcclxuICogV2F2ZXMgdjAuNi4wXHJcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuXHJcbiAud2F2ZXMtZWZmZWN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLW91dDtcclxuICBcclxuICAgIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6LTEwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgXHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBXYXZlcyBDb2xvcnNcclxuICAgICYud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcwKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIFN0eWxlIGlucHV0IGJ1dHRvbiBidWcuXHJcbiAgICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwicmVzZXRcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1ub3RyYW5zaXRpb24ge1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZSAje1wiIWltcG9ydGFudFwifTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1pbnB1dC13cmFwcGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBcclxuICAgIC53YXZlcy1idXR0b24taW5wdXQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMi41ZW07XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cclxuICAud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfSIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9faW5kZXguc2Nzcyc7XHJcblxyXG5pbnB1dDpmb2N1cywgaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuXHJcbiAgICBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuLmJ0bi1jYXJ0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LWNvbnRhaW5lcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgbWFyZ2luOiAuM2VtIGF1dG87XHJcbiAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCByZ2IoMTUzLCAxNTMsIDE1Myk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uYnRuLWFkZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTVweDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGJvdHRvbTogMTAwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctY29udGFpbmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgaW1nIHtcclxuICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICBtYXJnaW46IC4zZW0gYXV0bztcclxuICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4IHJnYigxNTMsIDE1MywgMTUzKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4uVHdvU2VjdGlvbiB7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICRncmV5LTUwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9XHJcbiAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1zbWFsbDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IC4yZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIxMjE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC4yZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjllbTtcclxuICAgICAgICAgICAgY29sb3I6ICRncmV5LTYwMDtcclxuXHJcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjE1cHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLlRoaXJkU2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM2VtO1xyXG4gICAgLml0ZW0tbm90LWZvdW5kIHtcclxuICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1ZW07XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBjb2xvcjogJGJsYWNrLTYwMDtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMS41ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAgICAgICAmLmluZm8taXRlbSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmV5LTUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctY29udGFpbmVyO1xyXG4gICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLl9fbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkTXVsaXNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZXktNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5fX3ByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4zMjkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAuVHdvU2VjdGlvbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuVGhpcmRTZWN0aW9uIHtcclxuICAgICAgICAuaXRlbS1ub3QtZm91bmQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5fX25hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLlR3b1NlY3Rpb24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMWVtIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLlRoaXJkU2VjdGlvbiB7XHJcbiAgICAgICAgLml0ZW0tbm90LWZvdW5kIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuX19uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5Ud29TZWN0aW9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5UaGlyZFNlY3Rpb24ge1xyXG4gICAgICAgIC5pdGVtLW5vdC1mb3VuZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLl9fbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuVHdvU2VjdGlvbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-store',
          templateUrl: './store.component.html',
          styleUrls: ['./store.component.scss'],
          providers: [_services_products_services__WEBPACK_IMPORTED_MODULE_2__["ProductsServices"], _services_users_services__WEBPACK_IMPORTED_MODULE_1__["UsersServices"]]
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
        }, {
          type: _services_users_services__WEBPACK_IMPORTED_MODULE_1__["UsersServices"]
        }, {
          type: _services_products_services__WEBPACK_IMPORTED_MODULE_2__["ProductsServices"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/store/store.filter.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/store/store.filter.pipe.ts ***!
    \**************************************************/

  /*! exports provided: ProductFilterPipe */

  /***/
  function _src_app_pages_store_storeFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductFilterPipe", function () {
      return ProductFilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductFilterPipe = /*#__PURE__*/function () {
      function ProductFilterPipe() {
        _classCallCheck(this, ProductFilterPipe);
      }

      return _createClass(ProductFilterPipe, [{
        key: "transform",
        value: function transform(product, searchTerm) {
          if (!searchTerm || !product) {
            return product;
          }

          return product.filter(function (product) {
            return product.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
          });
        }
      }]);
    }();

    ProductFilterPipe.ɵfac = function ProductFilterPipe_Factory(t) {
      return new (t || ProductFilterPipe)();
    };

    ProductFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "productFilter",
      type: ProductFilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'productFilter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/store/store.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/store/store.module.ts ***!
    \*********************************************/

  /*! exports provided: StoreModule */

  /***/
  function _src_app_pages_store_storeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreModule", function () {
      return StoreModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _store_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./store-routing.module */
    "./src/app/pages/store/store-routing.module.ts");
    /* harmony import */


    var _store_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store.component */
    "./src/app/pages/store/store.component.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _newproduct_newproduct_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./newproduct/newproduct.component */
    "./src/app/pages/store/newproduct/newproduct.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/pages/store/product/product.component.ts");
    /* harmony import */


    var _store_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./store.filter.pipe */
    "./src/app/pages/store/store.filter.pipe.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/pages/store/cart/cart.component.ts");
    /* harmony import */


    var _cart_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./cart/invoice/invoice.component */
    "./src/app/pages/store/cart/invoice/invoice.component.ts");

    var StoreModule = /*#__PURE__*/_createClass(function StoreModule() {
      _classCallCheck(this, StoreModule);
    });

    StoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StoreModule
    });
    StoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StoreModule_Factory(t) {
        return new (t || StoreModule)();
      },
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _store_routing_module__WEBPACK_IMPORTED_MODULE_4__["StoreRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoreModule, {
        declarations: [_store_component__WEBPACK_IMPORTED_MODULE_5__["StoreComponent"], _newproduct_newproduct_component__WEBPACK_IMPORTED_MODULE_7__["NewproductComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _store_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["ProductFilterPipe"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"], _cart_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_11__["InvoiceComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _store_routing_module__WEBPACK_IMPORTED_MODULE_4__["StoreRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_store_component__WEBPACK_IMPORTED_MODULE_5__["StoreComponent"], _newproduct_newproduct_component__WEBPACK_IMPORTED_MODULE_7__["NewproductComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _store_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["ProductFilterPipe"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"], _cart_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_11__["InvoiceComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _store_routing_module__WEBPACK_IMPORTED_MODULE_4__["StoreRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/cart.services.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/cart.services.ts ***!
    \*******************************************/

  /*! exports provided: CartServices */

  /***/
  function _src_app_services_cartServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartServices", function () {
      return CartServices;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CartServices = /*#__PURE__*/function () {
      function CartServices() {
        _classCallCheck(this, CartServices);

        this.products = [];
      }

      return _createClass(CartServices, [{
        key: "addToCart",
        value: function addToCart(addedProduct) {
          this.products.push(addedProduct);
          this.saveCart();
        }
      }, {
        key: "saveCart",
        value: function saveCart() {
          localStorage.setItem('cart_items', JSON.stringify(this.products));
        }
      }, {
        key: "loadCart",
        value: function loadCart() {
          var _a;

          this.products = (_a = JSON.parse(localStorage.getItem("cart_items"))) !== null && _a !== void 0 ? _a : [];
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          return this.products;
        }
      }, {
        key: "productsInCart",
        value: function productsInCart(product) {
          return this.products.findIndex(function (o) {
            return o.id === product._id;
          }) > -1;
        }
      }, {
        key: "removeProduct",
        value: function removeProduct(product) {
          var index = this.products.findIndex(function (o) {
            return o.id === product.id;
          });

          if (index > -1) {
            this.products.splice(index, 1);
            this.saveCart();
            alert("El producto que seleccionaste se eliminó con éxito 😊");
          }
        }
      }, {
        key: "clearCart",
        value: function clearCart(products) {
          if (localStorage.getItem("cart_items") === null) {
            alert("Tu carrito de compras se encuentra vació ☹");
          } else {
            this.products = [];
            localStorage.removeItem("cart_items");
            alert("Tu carrito de compras se limpió con éxito 😊");
          }
        }
      }]);
    }();

    CartServices.ɵfac = function CartServices_Factory(t) {
      return new (t || CartServices)();
    };

    CartServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CartServices,
      factory: CartServices.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/products.services.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/products.services.ts ***!
    \***********************************************/

  /*! exports provided: ProductsServices */

  /***/
  function _src_app_services_productsServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsServices", function () {
      return ProductsServices;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var _GLOBAL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./GLOBAL */
    "./src/app/services/GLOBAL.ts");

    var ProductsServices = /*#__PURE__*/function () {
      function ProductsServices(http) {
        _classCallCheck(this, ProductsServices);

        this.http = http;
        this.url = _GLOBAL__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
      }

      return _createClass(ProductsServices, [{
        key: "addNewProduct",
        value: function addNewProduct(token, products) {
          var json = JSON.stringify(products);
          var params = json;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          return this.http.post(this.url + '/new-product', params, {
            headers: headers
          });
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.get(this.url + '/get-product/' + id, {
            headers: headers
          });
        }
      }, {
        key: "getProducts",
        value: function getProducts(page) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.get(this.url + '/get-all-products/' + page, {
            headers: headers
          });
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(token, id, products) {
          var params = JSON.stringify(products);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          return this.http.put(this.url + '/update-product/' + id, params, {
            headers: headers
          });
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(token, id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          return this.http["delete"](this.url + '/delete-product/' + id, {
            headers: headers
          });
        }
      }]);
    }();

    ProductsServices.ɵfac = function ProductsServices_Factory(t) {
      return new (t || ProductsServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProductsServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductsServices,
      factory: ProductsServices.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-store-store-module-es5.js.map