(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-learning-learning-module"],{

/***/ "./src/app/models/content_model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/content_model.ts ***!
  \*****************************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
class Content {
    constructor(_id, course, module, number, namecontent, link, files) {
        this._id = _id;
        this.course = course;
        this.module = module;
        this.number = number;
        this.namecontent = namecontent;
        this.link = link;
        this.files = files;
    }
}


/***/ }),

/***/ "./src/app/models/courses_model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/courses_model.ts ***!
  \*****************************************/
/*! exports provided: Courses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Courses", function() { return Courses; });
class Courses {
    constructor(_id, course_name, duration, instructor, modules, image) {
        this._id = _id;
        this.course_name = course_name;
        this.duration = duration;
        this.instructor = instructor;
        this.modules = modules;
        this.image = image;
    }
}


/***/ }),

/***/ "./src/app/models/module_model.ts":
/*!****************************************!*\
  !*** ./src/app/models/module_model.ts ***!
  \****************************************/
/*! exports provided: Modules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modules", function() { return Modules; });
class Modules {
    constructor(_id, course, module_name, module_duration, image) {
        this._id = _id;
        this.course = course;
        this.module_name = module_name;
        this.module_duration = module_duration;
        this.image = image;
    }
}


/***/ }),

/***/ "./src/app/models/pdfs_model.ts":
/*!**************************************!*\
  !*** ./src/app/models/pdfs_model.ts ***!
  \**************************************/
/*! exports provided: PDFS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDFS", function() { return PDFS; });
class PDFS {
    constructor(_id, namePDF, files, number, content) {
        this._id = _id;
        this.namePDF = namePDF;
        this.files = files;
        this.number = number;
        this.content = content;
    }
}


/***/ }),

/***/ "./src/app/models/quiz_model.ts":
/*!**************************************!*\
  !*** ./src/app/models/quiz_model.ts ***!
  \**************************************/
/*! exports provided: Quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
class Quiz {
    constructor(nameQuiz, content, number, link) {
        this.nameQuiz = nameQuiz;
        this.content = content;
        this.number = number;
        this.link = link;
    }
}


/***/ }),

/***/ "./src/app/models/users_model.ts":
/*!***************************************!*\
  !*** ./src/app/models/users_model.ts ***!
  \***************************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
class Users {
    constructor(_id, name, fathersurname, mothersurname, role, creditcard, nip, email, password, expiration_date) {
        this._id = _id;
        this.name = name;
        this.fathersurname = fathersurname;
        this.mothersurname = mothersurname;
        this.role = role;
        this.creditcard = creditcard;
        this.nip = nip;
        this.email = email;
        this.password = password;
        this.expiration_date = expiration_date;
    }
}


/***/ }),

/***/ "./src/app/models/videos_model.ts":
/*!****************************************!*\
  !*** ./src/app/models/videos_model.ts ***!
  \****************************************/
/*! exports provided: Videos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Videos", function() { return Videos; });
class Videos {
    constructor(_id, nameVideo, files, number, content) {
        this._id = _id;
        this.nameVideo = nameVideo;
        this.files = files;
        this.number = number;
        this.content = content;
    }
}


/***/ }),

/***/ "./src/app/pages/learning/add-content/add-content.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/learning/add-content/add-content.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContentComponent", function() { return AddContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/aos/dist/aos.js */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _services_content_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/content.services */ "./src/app/services/content.services.ts");
/* harmony import */ var _services_modules_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/modules.services */ "./src/app/services/modules.services.ts");
/* harmony import */ var src_app_models_content_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/content_model */ "./src/app/models/content_model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../learning-home/learning-home.component */ "./src/app/pages/learning/learning-home/learning-home.component.ts");
















function AddContentComponent_div_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddContentComponent_div_0_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddContentComponent_div_0_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddContentComponent_div_0_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddContentComponent_div_0_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddContentComponent_div_0_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.alertMessage, " ");
} }
function AddContentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A\u00F1adir un nuevo contenido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "* Por favor complete todos los campos para crear el curso con exito *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddContentComponent_div_0_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddContentComponent_div_0_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.content.course = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddContentComponent_div_0_span_16_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddContentComponent_div_0_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.content.module = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddContentComponent_div_0_span_21_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddContentComponent_div_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.content.number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddContentComponent_div_0_span_26_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddContentComponent_div_0_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.content.namecontent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddContentComponent_div_0_span_31_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddContentComponent_div_0_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.content.link = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AddContentComponent_div_0_span_36_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddContentComponent_div_0_Template_input_change_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.fileChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " A\u00F1adir contenido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Respuesta del servidor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AddContentComponent_div_0_div_45_Template, 3, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r3.touched && _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.content.course);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.errors == null ? null : _r3.errors.required) && _r3.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r5.touched && _r5.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.content.module);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.required) && _r5.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r7.touched && _r7.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.content.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r7.errors == null ? null : _r7.errors.required) && _r7.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r9.touched && _r9.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.content.namecontent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r9.errors == null ? null : _r9.errors.required) && _r9.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r11.touched && _r11.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.content.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r11.errors == null ? null : _r11.errors.required) && _r11.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.alertMessage);
} }
function AddContentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-learning-home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddContentComponent {
    constructor(moduleservices, usersservices, contentservices, route, router) {
        this.moduleservices = moduleservices;
        this.usersservices = usersservices;
        this.contentservices = contentservices;
        this.route = route;
        this.router = router;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
        this.content = new src_app_models_content_model__WEBPACK_IMPORTED_MODULE_6__["Content"]('', '', '', '', '', '', '');
    }
    ngOnInit() {
        _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
            //once: false // "false" --> Animaciones repetidas al hacer scroll.
        });
    }
    onSubmit(f) {
        this.route.params.forEach((params) => {
            let moduleId = params['id'];
            let courseId = params['ids'];
            this.content.course = courseId;
            this.content.module = moduleId;
            this.contentservices.addNewContent(this.token, this.content).subscribe(response => {
                if (!response.INFO_CONTENT) {
                    alert("Se encontraron problemas en el servidor.");
                    this.alertMessage = 'Se encontraron problemas en el servidor.';
                }
                else {
                    if (!this.filesToUpload) {
                        this.alertMessage = 'Se añadió el módulo, pero no se adjuntó imagen.';
                    }
                    else {
                        this.makeFileRequest(this.url + '/upload-file/' + response.INFO_CONTENT._id, [], this.filesToUpload).then((result) => {
                            this.content.files = result.files;
                            this.alertMessage = "El contenido se creó con éxito.";
                            this.content = response.INFO_CONTENT;
                        });
                    }
                }
            }, error => {
                console.log(error);
            });
        });
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
    makeFileRequest(url, params, files) {
        var token = this.token;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append('files', files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    }
}
AddContentComponent.ɵfac = function AddContentComponent_Factory(t) { return new (t || AddContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modules_services__WEBPACK_IMPORTED_MODULE_5__["ModuleServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AddContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddContentComponent, selectors: [["app-add-content"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"], _services_modules_services__WEBPACK_IMPORTED_MODULE_5__["ModuleServices"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "FirstSection", "pt-3"], [1, "text"], [1, "text-danger"], ["width", "45%"], [1, "col-12", "col-sm-8", "col-md-6", "col-lg-5", "d-block", "m-auto", 3, "ngSubmit"], ["f", "ngForm"], [1, "col.12"], ["src", "../../../../assets/svg/id.svg", "alt", "", "width", "30px"], ["type", "text", "name", "course", "id", "course", "placeholder", "Ingresa el ID de la URL despues de COURSE", "required", "", 1, "form-control", "id_course", 3, "ngModel", "ngModelChange"], ["course", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "name", "module", "id", "module", "placeholder", "Ingresa el ID de la URL despues de CONTENT", "required", "", 1, "form-control", "module", 3, "ngModel", "ngModelChange"], ["module", "ngModel"], ["src", "../../../../assets/svg/number.svg", "alt", "", "width", "30px"], ["type", "text", "name", "number", "id", "number", "placeholder", "Ingresa el n\u00FAmero de contenido", "required", "", 1, "form-control", "number", 3, "ngModel", "ngModelChange"], ["number", "ngModel"], ["src", "../../../../assets/svg/name.svg", "alt", "", "width", "30px"], ["type", "text", "name", "namecontent", "id", "namecontent", "placeholder", "Ingresa el nombre del contenido (PDF's, Videos, Examenes)", "required", "", 1, "form-control", "namecontent", 3, "ngModel", "ngModelChange"], ["namecontent", "ngModel"], ["src", "../../../../assets/svg/link.svg", "alt", "", "width", "30px"], ["type", "text", "name", "link", "id", "link", "placeholder", "Ingresa el link de este: (pdfs, videos, examenes)", "required", "", 1, "form-control", "link", 3, "ngModel", "ngModelChange"], ["link", "ngModel"], [1, "col-12"], ["src", "../../../../assets/svg/image.svg", "alt", "Icon", "width", "30px"], ["type", "file", "name", "image", "id", "image", "placeholder", "Imagen del curso", 1, "form-control", "image", 3, "change"], ["type", "submit", 1, "btn", "btn-response", "d-block", "waves-effect", "waves-ripple", 3, "disabled"], [1, "response"], [1, "alert", "alert-primary", "w-50", "d-block", "m-auto", "text-center"]], template: function AddContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddContentComponent_div_0_Template, 46, 22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddContentComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity.role == "ROLE_ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_9__["NavbarLearningComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_11__["LearningHomeComponent"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\ninput[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, textarea.form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\n.FirstSection[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  padding-bottom: 10px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n  font-weight: 300;\n  font-size: 0.85em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  border: 1px solid #eeeeee;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 0.8em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-size: 0.8em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-response[_ngcontent-%COMP%] {\n  display: block;\n  margin: 2em auto 2em auto;\n  transition: 350ms ease-in;\n  background-color: #4bb0a9;\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  font-size: 0.95em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-response[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #4bb0a9;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%] {\n  padding-bottom: 3em;\n  margin-top: 3em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  padding-bottom: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLWNvbnRlbnQvQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9sZWFybmluZy9hZGQtY29udGVudC9hZGQtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLWNvbnRlbnQvQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfX3dhdmVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL2FkZC1jb250ZW50L0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxsZWFybmluZ1xcYWRkLWNvdXJzZVxcYWRkLWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ0E7RUFDSSxhQUFBO0FDcENKOztBRHVDQTtFQUNJLGlIQUFBO0FDcENKOztBRHVDQTtFQUNJLDZDQUFBO0FDcENKOztBRHVDQTtFQUNJLGdDQUFBO0FDcENKOztBRHFDSTtFQUNJLGdDQUFBO0FDbkNSOztBRHVDQTtFQUNJLGVBQUE7QUNwQ0o7O0FDcEJBOzs7Ozs7O0VBQUE7O0FBVUM7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRHFCSjs7QUNuQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QURvQk47O0FDaEJJO0VBQ0UsMkNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDZEk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURnQk47O0FDYkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QURlTjs7QUNYRTtFQUNFLDJCQUFBO0FEY0o7O0FDWEU7RUFDRSx3QkFBQTtFQUNBLDJFQUFBO0FEY0o7O0FDWEU7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FEY0o7O0FDWkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRGNOOztBQ1ZFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBRGFKOztBQ1ZFO0VBQ0UsY0FBQTtBRGFKOztBQ1ZFLG9DQUFBOztBQUNBO0VBQ0UsV0FBQTtBRGFKOztBRHhGQTtFQUNJLGFBQUE7QUMyRko7O0FEeEZBO0VBQ0ksaUhBQUE7QUMyRko7O0FEeEZBO0VBQ0ksNkNBQUE7QUMyRko7O0FEeEZBO0VBQ0ksZ0NBQUE7QUMyRko7O0FEMUZJO0VBQ0ksZ0NBQUE7QUM0RlI7O0FEeEZBO0VBQ0ksZUFBQTtBQzJGSjs7QUNuSkE7Ozs7Ozs7RUFBQTs7QUFVQztFQUNHLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FEb0pKOztBQ2xKSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBRG1KTjs7QUMvSUk7RUFDRSwyQ0FBQTtBRGlKTjs7QUMvSUk7RUFDRSx3Q0FBQTtBRGlKTjs7QUMvSUk7RUFDRSx5Q0FBQTtBRGlKTjs7QUMvSUk7RUFDRSx3Q0FBQTtBRGlKTjs7QUMvSUk7RUFDRSx5Q0FBQTtBRGlKTjs7QUMvSUk7RUFDRSx3Q0FBQTtBRGlKTjs7QUMvSUk7RUFDRSx3Q0FBQTtBRGlKTjs7QUM3SUk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUQrSU47O0FDNUlJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEOElOOztBQzFJRTtFQUNFLDJCQUFBO0FENklKOztBQzFJRTtFQUNFLHdCQUFBO0VBQ0EsMkVBQUE7QUQ2SUo7O0FDMUlFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRDZJSjs7QUMzSUk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRDZJTjs7QUN6SUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FENElKOztBQ3pJRTtFQUNFLGNBQUE7QUQ0SUo7O0FDeklFLG9DQUFBOztBQUNBO0VBQ0UsV0FBQTtBRDRJSjs7QUUxUEE7RUFFSSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FGNFBKOztBRXhQQTtFQUNJLGtCQUFBO0FGMlBKOztBRXpQUTtFQUNJLGtCQUFBO0VBQ0Esa0NIVkY7RUdXRSxnQkFBQTtFQUNBLG9CQUFBO0FGMlBaOztBRXpQUTtFQUNJLGtDSGZGO0VHZ0JFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRjJQWjs7QUV6UFE7RUFDSSxpQkFBQTtBRjJQWjs7QUUxUFk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUY0UGhCOztBRTNQZ0I7RUFDSSxZQUFBO0FGNlBwQjs7QUU1UG9CO0VBQ0ksZ0JBQUE7QUY4UHhCOztBRS9Qb0I7RUFDSSxnQkFBQTtBRjhQeEI7O0FFM1BnQjtFQUNJLGdCQUFBO0FGNlBwQjs7QUUxUFk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDSDVDTjtFRzZDTSxnQkFBQTtFQUNBLGlCQUFBO0FGNFBoQjs7QUUzUGdCO0VBQ0kseUJBQUE7RUFDQSxzQ0FBQTtBRjZQcEI7O0FFeFBJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FGMFBSOztBRXpQUTtFQUNJLGtDSDFERjtFRzJERSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUYyUFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWFybmluZy9hZGQtY29udGVudC9hZGQtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kYmFyLXdpZHRoOiAyNXB4O1xyXG4kYmFyLWhlaWdodDogMy4xcHg7XHJcbiRiYXItc3BhY2luZzogN3B4O1xyXG5cclxuJE1vbnRzZXJyYXQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJE11bGlzaDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRQb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblxyXG4kYm9yZGVyLWlucHV0OiAjYzlkM2RkO1xyXG5cclxuJHNoYWRvdy1uYXY6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LWJ0bjogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LXNtYWxsOiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRzaGFkb3ctY29udGFpbmVyLXNtYWxsOiAwIDEwcHggMjBweCAwIHJnYigwIDAgMCAvIDUlKTtcclxuJHNoYWRvdy1jb250YWluZXI6IDAgMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDAgMXB4IDFweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiRzaGFkb3ctbmF2LXNtYWxsOiAwIDJweCAzMHB4IDAgcmdiKDIwNyAyMDcgMjA3IC8gNTAlKTtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMEU2MTUyO1xyXG4kZ3JleS04MDA6ICM0MjQyNDI7XHJcbiRncmV5LTcwMDogIzI5MzIzZDtcclxuJGdyZXktNjAwOiAjNzk4ZGEzO1xyXG4kZ3JleS01MDA6ICMwRTYxNTI7XHJcbiRncmV5LTQwMDogIzlmYWZjMTtcclxuJGdyZXktMzAwOiAjMzMzMzMzO1xyXG4kZ3JleS0yMDA6ICM0ZDRkNGQ7XHJcbiRncmV5LTEwMDogIzY2NjY2NjtcclxuJHBpbmstZmlyc3Q6ICNlMWQ5ZDU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLTI6ICNlZGYwZjQ7XHJcblxyXG4kYmxhY2stODAwOiAjMDAwO1xyXG4kYmxhY2stNzAwOiAjMTQxNDE0O1xyXG4kYmxhY2stNjAwOiAjMWIxYjFiO1xyXG4kYmxhY2stNTAwOiAjMEU2MTUyO1xyXG5cclxuXHJcbi52aXNpYmxlLXNtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaGFkb3ctbmF2IHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG4uc2hhZG93LXNtYWxsIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnRleHQtbm9uZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi52aXNpYmxlLXNtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoYWRvdy1uYXYge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLnNoYWRvdy1zbWFsbCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRleHQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnRleHQtbm9uZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyohXG4gKiBXYXZlcyB2MC42LjBcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4ud2F2ZXMtZWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG59XG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1idXR0b25dLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9cmVzZXRdLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndhdmVzLWVmZmVjdCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ud2F2ZXMtbm90cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi53YXZlcy1pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ud2F2ZXMtaW5wdXQtd3JhcHBlciAud2F2ZXMtYnV0dG9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbn1cblxuLndhdmVzLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4udmlzaWJsZS1zbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGFkb3ctbmF2IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zaGFkb3ctc21hbGwge1xuICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50ZXh0LW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi50ZXh0LW5vbmU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIVxuICogV2F2ZXMgdjAuNi4wXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLndhdmVzLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9YnV0dG9uXSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXJlc2V0XSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3QgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLndhdmVzLW5vdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xufVxuXG4ud2F2ZXMtaW5wdXQtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLndhdmVzLWlucHV0LXdyYXBwZXIgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG59XG5cbi53YXZlcy1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICB6LWluZGV4OiAtMTtcbn1cblxuaW5wdXQ6Zm9jdXMsIGlucHV0LmZvcm0tY29udHJvbDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHRleHRhcmVhLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLkZpcnN0U2VjdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IHAge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBwIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBwIHNwYW4ge1xuICBmb250LXdlaWdodDogODAwO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIC5idG4tcmVzcG9uc2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAyZW0gYXV0byAyZW0gYXV0bztcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjBhOTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gLmJ0bi1yZXNwb25zZTpob3ZlciB7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjNGJiMGE5O1xufVxuLkZpcnN0U2VjdGlvbiAucmVzcG9uc2Uge1xuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICBtYXJnaW4tdG9wOiAzZW07XG59XG4uRmlyc3RTZWN0aW9uIC5yZXNwb25zZSBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCJcclxuLyohXHJcbiAqIFdhdmVzIHYwLjYuMFxyXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcblxyXG4gLndhdmVzLWVmZmVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgICAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gIFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gV2F2ZXMgQ29sb3JzXHJcbiAgICAmLndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43MCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTdHlsZSBpbnB1dCBidXR0b24gYnVnLlxyXG4gICAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInJlc2V0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtbm90cmFuc2l0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmUgI3tcIiFpbXBvcnRhbnRcIn07XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgXHJcbiAgICAud2F2ZXMtYnV0dG9uLWlucHV0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXHJcbiAgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvX2luZGV4JztcclxuXHJcbmlucHV0OmZvY3VzLCBpbnB1dC5mb3JtLWNvbnRyb2w6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cclxuICAgIG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuXHJcbi5GaXJzdFNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgLnRleHQge1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tcmVzcG9uc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJlbSBhdXRvIDJlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmIwYTk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45NWVtO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzRiYjBhOTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZXNwb25zZSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDNlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-content',
                templateUrl: './add-content.component.html',
                styleUrls: ['./add-content.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"], _services_modules_services__WEBPACK_IMPORTED_MODULE_5__["ModuleServices"]]
            }]
    }], function () { return [{ type: _services_modules_services__WEBPACK_IMPORTED_MODULE_5__["ModuleServices"] }, { type: _services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"] }, { type: _services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/add-course/add-course.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/learning/add-course/add-course.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCourseComponent", function() { return AddCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/aos/dist/aos.js */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _services_courses_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/courses.services */ "./src/app/services/courses.services.ts");
/* harmony import */ var src_app_models_courses_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/courses_model */ "./src/app/models/courses_model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _learning_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../learning.component */ "./src/app/pages/learning/learning.component.ts");














function AddCourseComponent_div_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCourseComponent_div_0_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCourseComponent_div_0_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCourseComponent_div_0_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCourseComponent_div_0_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.alertMessage, " ");
} }
function AddCourseComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A\u00F1adir un nuevo curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "* Por favor complete todos los campos para crear el curso con exito *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCourseComponent_div_0_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCourseComponent_div_0_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.courses.course_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddCourseComponent_div_0_span_16_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCourseComponent_div_0_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.courses.duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddCourseComponent_div_0_span_21_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCourseComponent_div_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.courses.instructor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddCourseComponent_div_0_span_26_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCourseComponent_div_0_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.courses.modules = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddCourseComponent_div_0_span_31_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddCourseComponent_div_0_Template_input_change_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.fileChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " A\u00F1adir curso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Respuesta del servidor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AddCourseComponent_div_0_div_40_Template, 3, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r3.touched && _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.courses.course_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.errors == null ? null : _r3.errors.required) && _r3.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r5.touched && _r5.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.courses.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.required) && _r5.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r7.touched && _r7.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.courses.instructor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r7.errors == null ? null : _r7.errors.required) && _r7.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r9.touched && _r9.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.courses.modules);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r9.errors == null ? null : _r9.errors.required) && _r9.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.alertMessage);
} }
function AddCourseComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddCourseComponent {
    constructor(coursesservices, usersservices, route, router) {
        this.coursesservices = coursesservices;
        this.usersservices = usersservices;
        this.route = route;
        this.router = router;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
        this.courses = new src_app_models_courses_model__WEBPACK_IMPORTED_MODULE_5__["Courses"]('', '', '', '', '', '');
    }
    ngOnInit() {
        _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
            //once: false // "false" --> Animaciones repetidas al hacer scroll.
        });
    }
    onSubmit(f) {
        this.coursesservices.addNewCourse(this.token, this.courses).subscribe(response => {
            if (!response.INFO_COURSE) {
                this.alertMessage = 'Se encontraron problemas en el servidor.';
            }
            else {
                if (!this.filesToUpload) {
                    this.alertMessage = 'Se añadió el curso, pero no se adjuntó imagen.';
                }
                else {
                    this.makeFileRequest(this.url + '/add-image-course/' + response.INFO_COURSE._id, [], this.filesToUpload).then((result) => {
                        this.courses.image = result.image;
                        this.alertMessage = 'El curso se creó con éxito.';
                        this.courses = response.INFO_COURSE;
                    });
                }
            }
        }, error => {
            console.log(error);
        });
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
    makeFileRequest(url, params, files) {
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
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    }
}
AddCourseComponent.ɵfac = function AddCourseComponent_Factory(t) { return new (t || AddCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_courses_services__WEBPACK_IMPORTED_MODULE_4__["CoursesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AddCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCourseComponent, selectors: [["app-add-course"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_courses_services__WEBPACK_IMPORTED_MODULE_4__["CoursesServices"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "FirstSection", "pt-3"], [1, "text"], [1, "text-danger"], ["width", "45%"], [1, "col-12", "col-sm-8", "col-md-5", "d-block", "m-auto", 3, "ngSubmit"], ["f", "ngForm"], [1, "col-12"], ["src", "../../../../assets/svg/course.svg", "alt", "Icon", "width", "30px"], ["type", "text", "name", "course_name", "id", "course_name", "placeholder", "Nombre del curso", "required", "", 1, "form-control", "course_name", 3, "ngModel", "ngModelChange"], ["course_name", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["src", "../../../../assets/svg/timesheet.svg", "alt", "Icon", "width", "30px"], ["type", "text", "name", "duration", "id", "duration", "placeholder", "Duraci\u00F3n total del curso", "required", "", 1, "form-control", "duration", 3, "ngModel", "ngModelChange"], ["duration", "ngModel"], ["src", "../../../../assets/svg/Male Female User Group.svg", "alt", "Icon", "width", "30px"], ["type", "text", "name", "instructor", "id", "instructor", "placeholder", "Nombre del instructor", "required", "", 1, "form-control", "instructor", 3, "ngModel", "ngModelChange"], ["instructor", "ngModel"], ["src", "../../../../assets/svg/module.svg", "alt", "Icon", "width", "30px"], ["type", "text", "name", "modules", "id", "modules", "placeholder", "N\u00FAmero total de m\u00F3dulos", "required", "", 1, "form-control", "modules", 3, "ngModel", "ngModelChange"], ["modules", "ngModel"], ["src", "../../../../assets/svg/image.svg", "alt", "Icon", "width", "30px"], ["type", "file", "name", "image", "id", "image", "placeholder", "Imagen del curso", 1, "form-control", "image", 3, "change"], ["type", "submit", 1, "btn", "btn-response", "d-block", "waves-effect", "waves-ripple", 3, "disabled"], [1, "response"], [1, "alert", "alert-primary", "w-75", "d-block", "m-auto", "text-center"]], template: function AddCourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddCourseComponent_div_0_Template, 41, 18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCourseComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity.role == "ROLE_ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_8__["NavbarLearningComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _learning_component__WEBPACK_IMPORTED_MODULE_10__["LearningComponent"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\ninput[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, textarea.form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\n.FirstSection[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  padding-bottom: 10px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n  font-weight: 300;\n  font-size: 0.85em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  border: 1px solid #eeeeee;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 0.8em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-size: 0.8em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-response[_ngcontent-%COMP%] {\n  display: block;\n  margin: 2em auto 2em auto;\n  transition: 350ms ease-in;\n  background-color: #4bb0a9;\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  font-size: 0.95em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-response[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #4bb0a9;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%] {\n  padding-bottom: 3em;\n  margin-top: 3em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  padding-bottom: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLWNvdXJzZS9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL2FkZC1jb3Vyc2UvYWRkLWNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLWNvdXJzZS9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fd2F2ZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLWNvdXJzZS9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcbGVhcm5pbmdcXGFkZC1jb3Vyc2VcXGFkZC1jb3Vyc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0ksYUFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxpSEFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSw2Q0FBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxnQ0FBQTtBQ3BDSjs7QURxQ0k7RUFDSSxnQ0FBQTtBQ25DUjs7QUR1Q0E7RUFDSSxlQUFBO0FDcENKOztBQ3BCQTs7Ozs7OztFQUFBOztBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURxQko7O0FDbkJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEb0JOOztBQ2hCSTtFQUNFLDJDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2RJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEZ0JOOztBQ2JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEZU47O0FDWEU7RUFDRSwyQkFBQTtBRGNKOztBQ1hFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRGNKOztBQ1hFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRGNKOztBQ1pJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QURjTjs7QUNWRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QURhSjs7QUNWRTtFQUNFLGNBQUE7QURhSjs7QUNWRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QURhSjs7QUUzSEE7RUFFSSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FGNkhKOztBRXpIQTtFQUNJLGtCQUFBO0FGNEhKOztBRTFIUTtFQUNJLGtCQUFBO0VBQ0Esa0NIVkY7RUdXRSxnQkFBQTtFQUNBLG9CQUFBO0FGNEhaOztBRTFIUTtFQUNJLGtDSGZGO0VHZ0JFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRjRIWjs7QUUxSFE7RUFDSSxpQkFBQTtBRjRIWjs7QUUzSFk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUY2SGhCOztBRTVIZ0I7RUFDSSxZQUFBO0FGOEhwQjs7QUU3SG9CO0VBQ0ksZ0JBQUE7QUYrSHhCOztBRWhJb0I7RUFDSSxnQkFBQTtBRitIeEI7O0FFNUhnQjtFQUNJLGdCQUFBO0FGOEhwQjs7QUUzSFk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDSDVDTjtFRzZDTSxnQkFBQTtFQUNBLGlCQUFBO0FGNkhoQjs7QUU1SGdCO0VBQ0kseUJBQUE7RUFDQSxzQ0FBQTtBRjhIcEI7O0FFekhJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FGMkhSOztBRTFIUTtFQUNJLGtDSDFERjtFRzJERSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUY0SFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWFybmluZy9hZGQtY291cnNlL2FkZC1jb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJGJhci13aWR0aDogMjVweDtcclxuJGJhci1oZWlnaHQ6IDMuMXB4O1xyXG4kYmFyLXNwYWNpbmc6IDdweDtcclxuXHJcbiRNb250c2VycmF0OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRNdWxpc2g6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kUG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuJGJvcmRlci1pbnB1dDogI2M5ZDNkZDtcclxuXHJcbiRzaGFkb3ctbmF2OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1idG46IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1zbWFsbDogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kc2hhZG93LWNvbnRhaW5lci1zbWFsbDogMCAxMHB4IDIwcHggMCByZ2IoMCAwIDAgLyA1JSk7XHJcbiRzaGFkb3ctY29udGFpbmVyOiAwIDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDFweCAxcHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4kc2hhZG93LW5hdi1zbWFsbDogMCAycHggMzBweCAwIHJnYigyMDcgMjA3IDIwNyAvIDUwJSk7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzBFNjE1MjtcclxuJGdyZXktODAwOiAjNDI0MjQyO1xyXG4kZ3JleS03MDA6ICMyOTMyM2Q7XHJcbiRncmV5LTYwMDogIzc5OGRhMztcclxuJGdyZXktNTAwOiAjMEU2MTUyO1xyXG4kZ3JleS00MDA6ICM5ZmFmYzE7XHJcbiRncmV5LTMwMDogIzMzMzMzMztcclxuJGdyZXktMjAwOiAjNGQ0ZDRkO1xyXG4kZ3JleS0xMDA6ICM2NjY2NjY7XHJcbiRwaW5rLWZpcnN0OiAjZTFkOWQ1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS0yOiAjZWRmMGY0O1xyXG5cclxuJGJsYWNrLTgwMDogIzAwMDtcclxuJGJsYWNrLTcwMDogIzE0MTQxNDtcclxuJGJsYWNrLTYwMDogIzFiMWIxYjtcclxuJGJsYWNrLTUwMDogIzBFNjE1MjtcclxuXHJcblxyXG4udmlzaWJsZS1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2hhZG93LW5hdiB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLnNoYWRvdy1zbWFsbCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50ZXh0LW5vbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIudmlzaWJsZS1zbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGFkb3ctbmF2IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zaGFkb3ctc21hbGwge1xuICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50ZXh0LW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi50ZXh0LW5vbmU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIVxuICogV2F2ZXMgdjAuNi4wXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLndhdmVzLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9YnV0dG9uXSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXJlc2V0XSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3QgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLndhdmVzLW5vdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xufVxuXG4ud2F2ZXMtaW5wdXQtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLndhdmVzLWlucHV0LXdyYXBwZXIgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG59XG5cbi53YXZlcy1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICB6LWluZGV4OiAtMTtcbn1cblxuaW5wdXQ6Zm9jdXMsIGlucHV0LmZvcm0tY29udHJvbDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHRleHRhcmVhLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLkZpcnN0U2VjdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IHAge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBwIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBwIHNwYW4ge1xuICBmb250LXdlaWdodDogODAwO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIC5idG4tcmVzcG9uc2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAyZW0gYXV0byAyZW0gYXV0bztcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjBhOTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gLmJ0bi1yZXNwb25zZTpob3ZlciB7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjNGJiMGE5O1xufVxuLkZpcnN0U2VjdGlvbiAucmVzcG9uc2Uge1xuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICBtYXJnaW4tdG9wOiAzZW07XG59XG4uRmlyc3RTZWN0aW9uIC5yZXNwb25zZSBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCJcclxuLyohXHJcbiAqIFdhdmVzIHYwLjYuMFxyXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcblxyXG4gLndhdmVzLWVmZmVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgICAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gIFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gV2F2ZXMgQ29sb3JzXHJcbiAgICAmLndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43MCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTdHlsZSBpbnB1dCBidXR0b24gYnVnLlxyXG4gICAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInJlc2V0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtbm90cmFuc2l0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmUgI3tcIiFpbXBvcnRhbnRcIn07XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgXHJcbiAgICAud2F2ZXMtYnV0dG9uLWlucHV0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXHJcbiAgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvX2luZGV4JztcclxuXHJcbmlucHV0OmZvY3VzLCBpbnB1dC5mb3JtLWNvbnRyb2w6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cclxuICAgIG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuXHJcbi5GaXJzdFNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgLnRleHQge1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tcmVzcG9uc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJlbSBhdXRvIDJlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmIwYTk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45NWVtO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzRiYjBhOTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZXNwb25zZSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDNlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-course',
                templateUrl: './add-course.component.html',
                styleUrls: ['./add-course.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_courses_services__WEBPACK_IMPORTED_MODULE_4__["CoursesServices"]]
            }]
    }], function () { return [{ type: _services_courses_services__WEBPACK_IMPORTED_MODULE_4__["CoursesServices"] }, { type: _services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/add-module/add-module.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/learning/add-module/add-module.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModuleComponent", function() { return AddModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/aos/dist/aos.js */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _services_modules_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/modules.services */ "./src/app/services/modules.services.ts");
/* harmony import */ var _services_courses_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/courses.services */ "./src/app/services/courses.services.ts");
/* harmony import */ var src_app_models_module_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/module_model */ "./src/app/models/module_model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../learning-home/learning-home.component */ "./src/app/pages/learning/learning-home/learning-home.component.ts");















function AddModuleComponent_div_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddModuleComponent_div_0_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddModuleComponent_div_0_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddModuleComponent_div_0_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.alertMessage, " ");
} }
function AddModuleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A\u00F1adir un nuevo m\u00F3dulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "* Por favor complete todos los campos para crear el curso con exito *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddModuleComponent_div_0_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddModuleComponent_div_0_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.modules.course = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddModuleComponent_div_0_span_16_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddModuleComponent_div_0_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.modules.module_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddModuleComponent_div_0_span_21_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddModuleComponent_div_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.modules.module_duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddModuleComponent_div_0_span_26_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddModuleComponent_div_0_Template_input_change_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.fileChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " A\u00F1adir m\u00F3dulo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Respuesta del servidor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddModuleComponent_div_0_div_35_Template, 3, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r3.touched && _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.modules.course);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.errors == null ? null : _r3.errors.required) && _r3.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r5.touched && _r5.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.modules.module_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.required) && _r5.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r7.touched && _r7.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.modules.module_duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r7.errors == null ? null : _r7.errors.required) && _r7.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.alertMessage);
} }
function AddModuleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-learning-home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddModuleComponent {
    constructor(moduleservices, usersservices, route, router) {
        this.moduleservices = moduleservices;
        this.usersservices = usersservices;
        this.route = route;
        this.router = router;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
        this.modules = new src_app_models_module_model__WEBPACK_IMPORTED_MODULE_6__["Modules"]('', '', '', '', '');
    }
    ngOnInit() {
        _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
            //once: false // "false" --> Animaciones repetidas al hacer scroll.
        });
    }
    onSubmit(f) {
        this.route.params.forEach((params) => {
            let courseId = params['id'];
            this.modules.course = courseId;
            this.moduleservices.addNewModule(this.token, this.modules).subscribe(response => {
                if (!response.INFO_MODULE) {
                    this.alertMessage = 'Se encontraron problemas en el servidor.';
                }
                else {
                    if (!this.filesToUpload) {
                        this.alertMessage = 'Se añadió el módulo, pero no se adjuntó imagen.';
                    }
                    else {
                        this.makeFileRequest(this.url + '/add-image-module/' + response.INFO_MODULE._id, [], this.filesToUpload).then((result) => {
                            this.modules.image = result.image;
                            this.alertMessage = 'El módulo se creó con éxito.';
                            this.modules = response.INFO_MODULE;
                        });
                    }
                }
            }, error => {
                console.log(error);
            });
        });
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
    makeFileRequest(url, params, files) {
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
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    }
}
AddModuleComponent.ɵfac = function AddModuleComponent_Factory(t) { return new (t || AddModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modules_services__WEBPACK_IMPORTED_MODULE_4__["ModuleServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AddModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddModuleComponent, selectors: [["app-add-module"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_modules_services__WEBPACK_IMPORTED_MODULE_4__["ModuleServices"], _services_courses_services__WEBPACK_IMPORTED_MODULE_5__["CoursesServices"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "FirstSection", "pt-3"], [1, "text"], [1, "text-danger"], ["width", "45%"], [1, "col-12", "col-sm-8", "col-md-6", "col-lg-4", "d-block", "m-auto", 3, "ngSubmit"], ["f", "ngForm"], [1, "col.12"], ["src", "../../../../assets/svg/more_detailsForm.svg", "alt", "", "width", "30px"], ["type", "text", "name", "course", "id", "course", "placeholder", "Ingresa el ID de la URL", "required", "", 1, "form-control", "id_course", 3, "ngModel", "ngModelChange"], ["course", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["src", "../../../../assets/svg/module.svg", "alt", "", "width", "30px"], ["type", "text", "name", "module_name", "id", "module_name", "placeholder", "Nombre del m\u00F3dulo", "required", "", 1, "form-control", "module_name", 3, "ngModel", "ngModelChange"], ["module_name", "ngModel"], ["src", "../../../../assets/svg/time.svg", "alt", "", "width", "30px"], ["type", "text", "name", "module_duration", "id", "module_duration", "placeholder", "Duraci\u00F3n del m\u00F3dulo", "required", "", 1, "form-control", "module_duration", 3, "ngModel", "ngModelChange"], ["module_duration", "ngModel"], [1, "col-12"], ["src", "../../../../assets/svg/image.svg", "alt", "Icon", "width", "30px"], ["type", "file", "name", "image", "id", "image", "placeholder", "Imagen del curso", 1, "form-control", "image", 3, "change"], ["type", "submit", 1, "btn", "btn-response", "d-block", "waves-effect", "waves-ripple", 3, "disabled"], [1, "response"], [1, "alert", "alert-primary", "w-50", "d-block", "m-auto", "text-center"]], template: function AddModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddModuleComponent_div_0_Template, 36, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddModuleComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity.role == "ROLE_ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_9__["NavbarLearningComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_11__["LearningHomeComponent"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\ninput[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, textarea.form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\n.FirstSection[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  padding-bottom: 10px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n  font-weight: 300;\n  font-size: 0.85em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  border: 1px solid #eeeeee;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 0.8em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-size: 0.8em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-response[_ngcontent-%COMP%] {\n  display: block;\n  margin: 2em auto 2em auto;\n  transition: 350ms ease-in;\n  background-color: #4bb0a9;\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  font-size: 0.95em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-response[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #4bb0a9;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%] {\n  padding-bottom: 3em;\n  margin-top: 3em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  padding-bottom: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLW1vZHVsZS9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL2FkZC1tb2R1bGUvYWRkLW1vZHVsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLW1vZHVsZS9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fd2F2ZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLW1vZHVsZS9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcbGVhcm5pbmdcXGFkZC1jb3Vyc2VcXGFkZC1jb3Vyc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0ksYUFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxpSEFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSw2Q0FBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxnQ0FBQTtBQ3BDSjs7QURxQ0k7RUFDSSxnQ0FBQTtBQ25DUjs7QUR1Q0E7RUFDSSxlQUFBO0FDcENKOztBQ3BCQTs7Ozs7OztFQUFBOztBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURxQko7O0FDbkJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEb0JOOztBQ2hCSTtFQUNFLDJDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2RJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEZ0JOOztBQ2JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEZU47O0FDWEU7RUFDRSwyQkFBQTtBRGNKOztBQ1hFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRGNKOztBQ1hFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRGNKOztBQ1pJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QURjTjs7QUNWRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QURhSjs7QUNWRTtFQUNFLGNBQUE7QURhSjs7QUNWRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QURhSjs7QUR4RkE7RUFDSSxhQUFBO0FDMkZKOztBRHhGQTtFQUNJLGlIQUFBO0FDMkZKOztBRHhGQTtFQUNJLDZDQUFBO0FDMkZKOztBRHhGQTtFQUNJLGdDQUFBO0FDMkZKOztBRDFGSTtFQUNJLGdDQUFBO0FDNEZSOztBRHhGQTtFQUNJLGVBQUE7QUMyRko7O0FDbkpBOzs7Ozs7O0VBQUE7O0FBVUM7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRG9KSjs7QUNsSkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QURtSk47O0FDL0lJO0VBQ0UsMkNBQUE7QURpSk47O0FDL0lJO0VBQ0Usd0NBQUE7QURpSk47O0FDL0lJO0VBQ0UseUNBQUE7QURpSk47O0FDL0lJO0VBQ0Usd0NBQUE7QURpSk47O0FDL0lJO0VBQ0UseUNBQUE7QURpSk47O0FDL0lJO0VBQ0Usd0NBQUE7QURpSk47O0FDL0lJO0VBQ0Usd0NBQUE7QURpSk47O0FDN0lJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEK0lOOztBQzVJSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBRDhJTjs7QUMxSUU7RUFDRSwyQkFBQTtBRDZJSjs7QUMxSUU7RUFDRSx3QkFBQTtFQUNBLDJFQUFBO0FENklKOztBQzFJRTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUQ2SUo7O0FDM0lJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUQ2SU47O0FDeklFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBRDRJSjs7QUN6SUU7RUFDRSxjQUFBO0FENElKOztBQ3pJRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QUQ0SUo7O0FFMVBBO0VBRUksd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBRjRQSjs7QUV4UEE7RUFDSSxrQkFBQTtBRjJQSjs7QUV6UFE7RUFDSSxrQkFBQTtFQUNBLGtDSFZGO0VHV0UsZ0JBQUE7RUFDQSxvQkFBQTtBRjJQWjs7QUV6UFE7RUFDSSxrQ0hmRjtFR2dCRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUYyUFo7O0FFelBRO0VBQ0ksaUJBQUE7QUYyUFo7O0FFMVBZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FGNFBoQjs7QUUzUGdCO0VBQ0ksWUFBQTtBRjZQcEI7O0FFNVBvQjtFQUNJLGdCQUFBO0FGOFB4Qjs7QUUvUG9CO0VBQ0ksZ0JBQUE7QUY4UHhCOztBRTNQZ0I7RUFDSSxnQkFBQTtBRjZQcEI7O0FFMVBZO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0g1Q047RUc2Q00sZ0JBQUE7RUFDQSxpQkFBQTtBRjRQaEI7O0FFM1BnQjtFQUNJLHlCQUFBO0VBQ0Esc0NBQUE7QUY2UHBCOztBRXhQSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBRjBQUjs7QUV6UFE7RUFDSSxrQ0gxREY7RUcyREUsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FGMlBaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLW1vZHVsZS9hZGQtbW9kdWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiRiYXItd2lkdGg6IDI1cHg7XHJcbiRiYXItaGVpZ2h0OiAzLjFweDtcclxuJGJhci1zcGFjaW5nOiA3cHg7XHJcblxyXG4kTW9udHNlcnJhdDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kTXVsaXNoOiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJFBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbiRib3JkZXItaW5wdXQ6ICNjOWQzZGQ7XHJcblxyXG4kc2hhZG93LW5hdjogMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiRzaGFkb3ctYnRuOiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiRzaGFkb3ctc21hbGw6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuJHNoYWRvdy1jb250YWluZXItc21hbGw6IDAgMTBweCAyMHB4IDAgcmdiKDAgMCAwIC8gNSUpO1xyXG4kc2hhZG93LWNvbnRhaW5lcjogMCAycHggMXB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMCAxcHggMXB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggM3B4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuJHNoYWRvdy1uYXYtc21hbGw6IDAgMnB4IDMwcHggMCByZ2IoMjA3IDIwNyAyMDcgLyA1MCUpO1xyXG5cclxuJHByaW1hcnktY29sb3I6ICMwRTYxNTI7XHJcbiRncmV5LTgwMDogIzQyNDI0MjtcclxuJGdyZXktNzAwOiAjMjkzMjNkO1xyXG4kZ3JleS02MDA6ICM3OThkYTM7XHJcbiRncmV5LTUwMDogIzBFNjE1MjtcclxuJGdyZXktNDAwOiAjOWZhZmMxO1xyXG4kZ3JleS0zMDA6ICMzMzMzMzM7XHJcbiRncmV5LTIwMDogIzRkNGQ0ZDtcclxuJGdyZXktMTAwOiAjNjY2NjY2O1xyXG4kcGluay1maXJzdDogI2UxZDlkNTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kd2hpdGUtMjogI2VkZjBmNDtcclxuXHJcbiRibGFjay04MDA6ICMwMDA7XHJcbiRibGFjay03MDA6ICMxNDE0MTQ7XHJcbiRibGFjay02MDA6ICMxYjFiMWI7XHJcbiRibGFjay01MDA6ICMwRTYxNTI7XHJcblxyXG5cclxuLnZpc2libGUtc20ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNoYWRvdy1uYXYge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuXHJcbi5zaGFkb3ctc21hbGwge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4udGV4dC1ub25lIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLnZpc2libGUtc20ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hhZG93LW5hdiB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uc2hhZG93LXNtYWxsIHtcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udGV4dC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG4udGV4dC1ub25lOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiFcbiAqIFdhdmVzIHYwLjYuMFxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi53YXZlcy1lZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbn1cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1saWdodCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy15ZWxsb3cgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1vcmFuZ2UgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPWJ1dHRvbl0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1yZXNldF0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYm9yZGVyOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0IGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi53YXZlcy1ub3RyYW5zaXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcbn1cblxuLndhdmVzLWlucHV0LXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi53YXZlcy1pbnB1dC13cmFwcGVyIC53YXZlcy1idXR0b24taW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBsaW5lLWhlaWdodDogMi41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xufVxuXG4ud2F2ZXMtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogRmlyZWZveCBCdWc6IGxpbmsgbm90IHRyaWdnZXJlZCAqL1xuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgei1pbmRleDogLTE7XG59XG5cbi52aXNpYmxlLXNtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoYWRvdy1uYXYge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLnNoYWRvdy1zbWFsbCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRleHQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnRleHQtbm9uZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyohXG4gKiBXYXZlcyB2MC42LjBcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4ud2F2ZXMtZWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG59XG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1idXR0b25dLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9cmVzZXRdLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndhdmVzLWVmZmVjdCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ud2F2ZXMtbm90cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi53YXZlcy1pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ud2F2ZXMtaW5wdXQtd3JhcHBlciAud2F2ZXMtYnV0dG9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbn1cblxuLndhdmVzLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5pbnB1dDpmb2N1cywgaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgdGV4dGFyZWEuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uRmlyc3RTZWN0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDAuODVlbTtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHAgaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gcCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHAgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gLmJ0bi1yZXNwb25zZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDJlbSBhdXRvIDJlbSBhdXRvO1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiMGE5O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDAuOTVlbTtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSAuYnRuLXJlc3BvbnNlOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICM0YmIwYTk7XG59XG4uRmlyc3RTZWN0aW9uIC5yZXNwb25zZSB7XG4gIHBhZGRpbmctYm90dG9tOiAzZW07XG4gIG1hcmdpbi10b3A6IDNlbTtcbn1cbi5GaXJzdFNlY3Rpb24gLnJlc3BvbnNlIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIlxyXG4vKiFcclxuICogV2F2ZXMgdjAuNi4wXHJcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuXHJcbiAud2F2ZXMtZWZmZWN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLW91dDtcclxuICBcclxuICAgIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6LTEwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgXHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBXYXZlcyBDb2xvcnNcclxuICAgICYud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcwKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIFN0eWxlIGlucHV0IGJ1dHRvbiBidWcuXHJcbiAgICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwicmVzZXRcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1ub3RyYW5zaXRpb24ge1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZSAje1wiIWltcG9ydGFudFwifTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1pbnB1dC13cmFwcGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBcclxuICAgIC53YXZlcy1idXR0b24taW5wdXQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMi41ZW07XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cclxuICAud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9faW5kZXgnO1xyXG5cclxuaW5wdXQ6Zm9jdXMsIGlucHV0LmZvcm0tY29udHJvbDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHRleHRhcmVhLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblxyXG4gICAgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5cclxuLkZpcnN0U2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuODVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1yZXNwb25zZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMmVtIGF1dG8gMmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjBhOTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1ZW07XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjNGJiMGE5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlc3BvbnNlIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM2VtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNlbTtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-module',
                templateUrl: './add-module.component.html',
                styleUrls: ['./add-module.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_modules_services__WEBPACK_IMPORTED_MODULE_4__["ModuleServices"], _services_courses_services__WEBPACK_IMPORTED_MODULE_5__["CoursesServices"]]
            }]
    }], function () { return [{ type: _services_modules_services__WEBPACK_IMPORTED_MODULE_4__["ModuleServices"] }, { type: _services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/add-pdf/add-pdf.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/learning/add-pdf/add-pdf.component.ts ***!
  \*************************************************************/
/*! exports provided: AddPdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPdfComponent", function() { return AddPdfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/aos/dist/aos.js */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _services_content_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/content.services */ "./src/app/services/content.services.ts");
/* harmony import */ var _services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/pdfs.services */ "./src/app/services/pdfs.services.ts");
/* harmony import */ var src_app_models_pdfs_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/pdfs_model */ "./src/app/models/pdfs_model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../learning-home/learning-home.component */ "./src/app/pages/learning/learning-home/learning-home.component.ts");
















function AddPdfComponent_div_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPdfComponent_div_0_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPdfComponent_div_0_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPdfComponent_div_0_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.alertMessage, " ");
} }
function AddPdfComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A\u00F1adir un nuevo video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "* Por favor complete todos los campos para crear el PDF con exito *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPdfComponent_div_0_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPdfComponent_div_0_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.pdfs.namePDF = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddPdfComponent_div_0_span_16_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPdfComponent_div_0_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.pdfs.number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddPdfComponent_div_0_span_21_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPdfComponent_div_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.pdfs.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddPdfComponent_div_0_span_26_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddPdfComponent_div_0_Template_input_change_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.fileChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " A\u00F1adir PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Respuesta del servidor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddPdfComponent_div_0_div_35_Template, 3, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r3.touched && _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.pdfs.namePDF);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.errors == null ? null : _r3.errors.required) && _r3.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r5.touched && _r5.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.pdfs.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.required) && _r5.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r7.touched && _r7.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.pdfs.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r7.errors == null ? null : _r7.errors.required) && _r7.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.alertMessage);
} }
function AddPdfComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-learning-home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddPdfComponent {
    constructor(contentservices, pdfservices, usersservices, route, router) {
        this.contentservices = contentservices;
        this.pdfservices = pdfservices;
        this.usersservices = usersservices;
        this.route = route;
        this.router = router;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
        this.pdfs = new src_app_models_pdfs_model__WEBPACK_IMPORTED_MODULE_6__["PDFS"]('', '', '', '', '');
    }
    ngOnInit() {
        _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true
        });
    }
    onSubmit(f) {
        this.route.params.forEach((params) => {
            let contentId = params['idPDF'];
            this.pdfs.content = contentId;
            this.pdfservices.addNewFile(this.token, this.pdfs).subscribe(response => {
                if (!response.INFO_PDF) {
                    this.alertMessage = 'Se encontraron problemas en el servidor.';
                }
                else {
                    if (!this.filesToUpload) {
                        this.alertMessage = 'Se añadió el PDF, pero no se adjuntó archivo.';
                    }
                    else {
                        this.makeFileRequest(this.url + '/upload-pdf/' + response.INFO_PDF._id, [], this.filesToUpload).then((result) => {
                            this.pdfs.files = result.files;
                            this.alertMessage = 'El PDF se creó con éxito.';
                            this.pdfs = response.INFO_PDF;
                        });
                    }
                }
            }, error => {
                console.log(error);
            });
        });
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
    makeFileRequest(url, params, files) {
        var token = this.token;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append('files', files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    }
}
AddPdfComponent.ɵfac = function AddPdfComponent_Factory(t) { return new (t || AddPdfComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__["PdfsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AddPdfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPdfComponent, selectors: [["app-add-pdf"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"], _services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__["PdfsServices"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "FirstSection", "pt-3"], [1, "text"], [1, "text-danger"], ["width", "45%"], [1, "col-12", "col-sm-8", "col-md-6", "col-lg-4", "d-block", "m-auto", 3, "ngSubmit"], ["f", "ngForm"], [1, "col-12"], ["src", "../../../../assets/svg/pdf_name.svg", "alt", "Icon", "width", "30px"], ["type", "text", "name", "namePDF", "id", "namePDF", "placeholder", "Nombre del PDF", "required", "", 1, "form-control", "namePDF", 3, "ngModel", "ngModelChange"], ["namePDF", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["src", "../../../../assets/svg/number.svg", "alt", "Icon", "width", "30px"], ["type", "text", "name", "number", "id", "number", "placeholder", "N\u00FAmero del PDF", "required", "", 1, "form-control", "number", 3, "ngModel", "ngModelChange"], ["number", "ngModel"], ["src", "../../../../assets/svg/video_content.svg", "alt", "Icon", "width", "30px"], ["type", "text", "name", "content", "id", "content", "placeholder", "ID del contenido", "required", "", 1, "form-control", "nameVideo", 3, "ngModel", "ngModelChange"], ["content", "ngModel"], ["src", "../../../../assets/svg/pdf_files.svg", "alt", "Icon", "width", "30px"], ["type", "file", "name", "files", "id", "files", "placeholder", "PDF", 1, "form-control", "image", 3, "change"], ["type", "submit", 1, "btn", "btn-response", "d-block", "waves-effect", "waves-ripple", 3, "disabled"], [1, "response"], [1, "alert", "alert-primary", "w-50", "d-block", "m-auto", "text-center"]], template: function AddPdfComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddPdfComponent_div_0_Template, 36, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddPdfComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_9__["NavbarLearningComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_11__["LearningHomeComponent"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\ninput[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, textarea.form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\n.FirstSection[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  padding-bottom: 10px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n  font-weight: 300;\n  font-size: 0.85em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  border: 1px solid #eeeeee;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 0.8em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-size: 0.8em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-response[_ngcontent-%COMP%] {\n  display: block;\n  margin: 2em auto 2em auto;\n  transition: 350ms ease-in;\n  background-color: #4bb0a9;\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  font-size: 0.95em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-response[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #4bb0a9;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%] {\n  padding-bottom: 3em;\n  margin-top: 3em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  padding-bottom: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLXBkZi9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL2FkZC1wZGYvYWRkLXBkZi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLXBkZi9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fd2F2ZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLXBkZi9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcbGVhcm5pbmdcXGFkZC1jb3Vyc2VcXGFkZC1jb3Vyc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0ksYUFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxpSEFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSw2Q0FBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxnQ0FBQTtBQ3BDSjs7QURxQ0k7RUFDSSxnQ0FBQTtBQ25DUjs7QUR1Q0E7RUFDSSxlQUFBO0FDcENKOztBQ3BCQTs7Ozs7OztFQUFBOztBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURxQko7O0FDbkJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEb0JOOztBQ2hCSTtFQUNFLDJDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2RJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEZ0JOOztBQ2JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEZU47O0FDWEU7RUFDRSwyQkFBQTtBRGNKOztBQ1hFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRGNKOztBQ1hFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRGNKOztBQ1pJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QURjTjs7QUNWRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QURhSjs7QUNWRTtFQUNFLGNBQUE7QURhSjs7QUNWRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QURhSjs7QUR4RkE7RUFDSSxhQUFBO0FDMkZKOztBRHhGQTtFQUNJLGlIQUFBO0FDMkZKOztBRHhGQTtFQUNJLDZDQUFBO0FDMkZKOztBRHhGQTtFQUNJLGdDQUFBO0FDMkZKOztBRDFGSTtFQUNJLGdDQUFBO0FDNEZSOztBRHhGQTtFQUNJLGVBQUE7QUMyRko7O0FDbkpBOzs7Ozs7O0VBQUE7O0FBVUM7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRG9KSjs7QUNsSkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QURtSk47O0FDL0lJO0VBQ0UsMkNBQUE7QURpSk47O0FDL0lJO0VBQ0Usd0NBQUE7QURpSk47O0FDL0lJO0VBQ0UseUNBQUE7QURpSk47O0FDL0lJO0VBQ0Usd0NBQUE7QURpSk47O0FDL0lJO0VBQ0UseUNBQUE7QURpSk47O0FDL0lJO0VBQ0Usd0NBQUE7QURpSk47O0FDL0lJO0VBQ0Usd0NBQUE7QURpSk47O0FDN0lJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEK0lOOztBQzVJSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBRDhJTjs7QUMxSUU7RUFDRSwyQkFBQTtBRDZJSjs7QUMxSUU7RUFDRSx3QkFBQTtFQUNBLDJFQUFBO0FENklKOztBQzFJRTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUQ2SUo7O0FDM0lJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUQ2SU47O0FDeklFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBRDRJSjs7QUN6SUU7RUFDRSxjQUFBO0FENElKOztBQ3pJRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QUQ0SUo7O0FFMVBBO0VBRUksd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBRjRQSjs7QUV4UEE7RUFDSSxrQkFBQTtBRjJQSjs7QUV6UFE7RUFDSSxrQkFBQTtFQUNBLGtDSFZGO0VHV0UsZ0JBQUE7RUFDQSxvQkFBQTtBRjJQWjs7QUV6UFE7RUFDSSxrQ0hmRjtFR2dCRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUYyUFo7O0FFelBRO0VBQ0ksaUJBQUE7QUYyUFo7O0FFMVBZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FGNFBoQjs7QUUzUGdCO0VBQ0ksWUFBQTtBRjZQcEI7O0FFNVBvQjtFQUNJLGdCQUFBO0FGOFB4Qjs7QUUvUG9CO0VBQ0ksZ0JBQUE7QUY4UHhCOztBRTNQZ0I7RUFDSSxnQkFBQTtBRjZQcEI7O0FFMVBZO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0g1Q047RUc2Q00sZ0JBQUE7RUFDQSxpQkFBQTtBRjRQaEI7O0FFM1BnQjtFQUNJLHlCQUFBO0VBQ0Esc0NBQUE7QUY2UHBCOztBRXhQSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBRjBQUjs7QUV6UFE7RUFDSSxrQ0gxREY7RUcyREUsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FGMlBaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLXBkZi9hZGQtcGRmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiRiYXItd2lkdGg6IDI1cHg7XHJcbiRiYXItaGVpZ2h0OiAzLjFweDtcclxuJGJhci1zcGFjaW5nOiA3cHg7XHJcblxyXG4kTW9udHNlcnJhdDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kTXVsaXNoOiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJFBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbiRib3JkZXItaW5wdXQ6ICNjOWQzZGQ7XHJcblxyXG4kc2hhZG93LW5hdjogMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiRzaGFkb3ctYnRuOiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiRzaGFkb3ctc21hbGw6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuJHNoYWRvdy1jb250YWluZXItc21hbGw6IDAgMTBweCAyMHB4IDAgcmdiKDAgMCAwIC8gNSUpO1xyXG4kc2hhZG93LWNvbnRhaW5lcjogMCAycHggMXB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMCAxcHggMXB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggM3B4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuJHNoYWRvdy1uYXYtc21hbGw6IDAgMnB4IDMwcHggMCByZ2IoMjA3IDIwNyAyMDcgLyA1MCUpO1xyXG5cclxuJHByaW1hcnktY29sb3I6ICMwRTYxNTI7XHJcbiRncmV5LTgwMDogIzQyNDI0MjtcclxuJGdyZXktNzAwOiAjMjkzMjNkO1xyXG4kZ3JleS02MDA6ICM3OThkYTM7XHJcbiRncmV5LTUwMDogIzBFNjE1MjtcclxuJGdyZXktNDAwOiAjOWZhZmMxO1xyXG4kZ3JleS0zMDA6ICMzMzMzMzM7XHJcbiRncmV5LTIwMDogIzRkNGQ0ZDtcclxuJGdyZXktMTAwOiAjNjY2NjY2O1xyXG4kcGluay1maXJzdDogI2UxZDlkNTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kd2hpdGUtMjogI2VkZjBmNDtcclxuXHJcbiRibGFjay04MDA6ICMwMDA7XHJcbiRibGFjay03MDA6ICMxNDE0MTQ7XHJcbiRibGFjay02MDA6ICMxYjFiMWI7XHJcbiRibGFjay01MDA6ICMwRTYxNTI7XHJcblxyXG5cclxuLnZpc2libGUtc20ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNoYWRvdy1uYXYge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuXHJcbi5zaGFkb3ctc21hbGwge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4udGV4dC1ub25lIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLnZpc2libGUtc20ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hhZG93LW5hdiB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uc2hhZG93LXNtYWxsIHtcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udGV4dC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG4udGV4dC1ub25lOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiFcbiAqIFdhdmVzIHYwLjYuMFxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi53YXZlcy1lZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbn1cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1saWdodCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy15ZWxsb3cgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1vcmFuZ2UgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPWJ1dHRvbl0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1yZXNldF0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYm9yZGVyOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0IGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi53YXZlcy1ub3RyYW5zaXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcbn1cblxuLndhdmVzLWlucHV0LXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi53YXZlcy1pbnB1dC13cmFwcGVyIC53YXZlcy1idXR0b24taW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBsaW5lLWhlaWdodDogMi41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xufVxuXG4ud2F2ZXMtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogRmlyZWZveCBCdWc6IGxpbmsgbm90IHRyaWdnZXJlZCAqL1xuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgei1pbmRleDogLTE7XG59XG5cbi52aXNpYmxlLXNtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoYWRvdy1uYXYge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLnNoYWRvdy1zbWFsbCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRleHQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnRleHQtbm9uZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyohXG4gKiBXYXZlcyB2MC42LjBcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4ud2F2ZXMtZWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG59XG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1idXR0b25dLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9cmVzZXRdLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndhdmVzLWVmZmVjdCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ud2F2ZXMtbm90cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi53YXZlcy1pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ud2F2ZXMtaW5wdXQtd3JhcHBlciAud2F2ZXMtYnV0dG9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbn1cblxuLndhdmVzLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5pbnB1dDpmb2N1cywgaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgdGV4dGFyZWEuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uRmlyc3RTZWN0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDAuODVlbTtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHAgaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gcCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHAgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gLmJ0bi1yZXNwb25zZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDJlbSBhdXRvIDJlbSBhdXRvO1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiMGE5O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDAuOTVlbTtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSAuYnRuLXJlc3BvbnNlOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICM0YmIwYTk7XG59XG4uRmlyc3RTZWN0aW9uIC5yZXNwb25zZSB7XG4gIHBhZGRpbmctYm90dG9tOiAzZW07XG4gIG1hcmdpbi10b3A6IDNlbTtcbn1cbi5GaXJzdFNlY3Rpb24gLnJlc3BvbnNlIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIlxyXG4vKiFcclxuICogV2F2ZXMgdjAuNi4wXHJcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuXHJcbiAud2F2ZXMtZWZmZWN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLW91dDtcclxuICBcclxuICAgIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6LTEwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgXHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBXYXZlcyBDb2xvcnNcclxuICAgICYud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcwKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIFN0eWxlIGlucHV0IGJ1dHRvbiBidWcuXHJcbiAgICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwicmVzZXRcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1ub3RyYW5zaXRpb24ge1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZSAje1wiIWltcG9ydGFudFwifTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1pbnB1dC13cmFwcGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBcclxuICAgIC53YXZlcy1idXR0b24taW5wdXQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMi41ZW07XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cclxuICAud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9faW5kZXgnO1xyXG5cclxuaW5wdXQ6Zm9jdXMsIGlucHV0LmZvcm0tY29udHJvbDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHRleHRhcmVhLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblxyXG4gICAgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5cclxuLkZpcnN0U2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuODVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1yZXNwb25zZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMmVtIGF1dG8gMmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjBhOTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1ZW07XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjNGJiMGE5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlc3BvbnNlIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM2VtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNlbTtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPdfComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-pdf',
                templateUrl: './add-pdf.component.html',
                styleUrls: ['./add-pdf.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"], _services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__["PdfsServices"]]
            }]
    }], function () { return [{ type: _services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"] }, { type: _services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__["PdfsServices"] }, { type: _services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/add-quiz/add-quiz.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/learning/add-quiz/add-quiz.component.ts ***!
  \***************************************************************/
/*! exports provided: AddQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuizComponent", function() { return AddQuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/aos/dist/aos.js */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _services_content_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/content.services */ "./src/app/services/content.services.ts");
/* harmony import */ var _services_quiz_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/quiz.services */ "./src/app/services/quiz.services.ts");
/* harmony import */ var src_app_models_quiz_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/quiz_model */ "./src/app/models/quiz_model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");















function AddQuizComponent_div_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddQuizComponent_div_0_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddQuizComponent_div_0_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddQuizComponent_div_0_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddQuizComponent_div_0_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.alertMessage, " ");
} }
function AddQuizComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A\u00F1adir un nuevo examen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "* Por favor complete todos los campos para crear el PDF con exito *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddQuizComponent_div_0_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuizComponent_div_0_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.quiz.number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddQuizComponent_div_0_span_16_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuizComponent_div_0_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.quiz.nameQuiz = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddQuizComponent_div_0_span_21_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuizComponent_div_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.quiz.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddQuizComponent_div_0_span_26_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuizComponent_div_0_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.quiz.link = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddQuizComponent_div_0_span_31_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " A\u00F1adir examen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Respuesta del servidor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddQuizComponent_div_0_div_37_Template, 3, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r3.touched && _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.quiz.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.errors == null ? null : _r3.errors.required) && _r3.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r5.touched && _r5.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.quiz.nameQuiz);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.required) && _r5.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r7.touched && _r7.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.quiz.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r7.errors == null ? null : _r7.errors.required) && _r7.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r9.touched && _r9.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.quiz.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r9.errors == null ? null : _r9.errors.required) && _r9.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.alertMessage);
} }
function AddQuizComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
class AddQuizComponent {
    constructor(contentservices, quizservices, usersservices, route, router) {
        this.contentservices = contentservices;
        this.quizservices = quizservices;
        this.usersservices = usersservices;
        this.route = route;
        this.router = router;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
        this.quiz = new src_app_models_quiz_model__WEBPACK_IMPORTED_MODULE_6__["Quiz"]('', '', '', '');
    }
    ngOnInit() {
        _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true
        });
    }
    onSubmit(f) {
        this.route.params.forEach((params) => {
            let contentId = params['idQuiz'];
            this.quiz.content = contentId;
            this.quizservices.addNewQuiz(this.token, this.quiz).subscribe(response => {
                if (!response.INFO_QUIZ) {
                    this.alertMessage = 'Se encontraron problemas en el servidor.';
                }
                else {
                    this.alertMessage = 'El examen se creó con éxito.';
                    this.quiz = response.INFO_QUIZ;
                }
            }, error => {
                console.log(error);
            });
        });
    }
}
AddQuizComponent.ɵfac = function AddQuizComponent_Factory(t) { return new (t || AddQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_quiz_services__WEBPACK_IMPORTED_MODULE_5__["QuizServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AddQuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddQuizComponent, selectors: [["app-add-quiz"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"], _services_quiz_services__WEBPACK_IMPORTED_MODULE_5__["QuizServices"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "FirstSection", "pt-3"], [1, "text"], [1, "text-danger"], ["width", "45%"], [1, "col-12", "col-sm-8", "col-md-6", "col-lg-4", "d-block", "m-auto", 3, "ngSubmit"], ["f", "ngForm"], [1, "col-12"], ["src", "../../../../assets/svg/number.svg", "alt", "Icon", "width", "30px"], ["type", "text", "name", "number", "id", "number", "placeholder", "N\u00FAmero del examen", "required", "", 1, "form-control", "number", 3, "ngModel", "ngModelChange"], ["number", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["src", "../../../../assets/svg/exam.svg", "alt", "Icon", "width", "30px"], ["type", "text", "name", "nameQuiz", "id", "nameQuiz", "placeholder", "Nombre del examen", "required", "", 1, "form-control", "nameQuiz", 3, "ngModel", "ngModelChange"], ["nameQuiz", "ngModel"], ["src", "../../../../assets/svg/video_content.svg", "alt", "Icon", "width", "30px"], ["type", "text", "name", "content", "id", "content", "placeholder", "ID Contenido", "required", "", 1, "form-control", "content", 3, "ngModel", "ngModelChange"], ["content", "ngModel"], ["src", "../../../../assets/svg/link.svg", "alt", "Icon", "width", "30px"], ["type", "text", "name", "link", "id", "link", "placeholder", "Link", "required", "", 1, "form-control", "link", 3, "ngModel", "ngModelChange"], ["link", "ngModel"], ["type", "submit", 1, "btn", "btn-response", "d-block", "waves-effect", "waves-ripple", 3, "disabled"], [1, "response"], [1, "alert", "alert-primary", "w-50", "d-block", "m-auto", "text-center"]], template: function AddQuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddQuizComponent_div_0_Template, 38, 18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddQuizComponent_div_1_Template, 1, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_9__["NavbarLearningComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\ninput[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, textarea.form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\n.FirstSection[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  padding-bottom: 10px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n  font-weight: 300;\n  font-size: 0.85em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  border: 1px solid #eeeeee;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 0.8em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-size: 0.8em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-response[_ngcontent-%COMP%] {\n  display: block;\n  margin: 2em auto 2em auto;\n  transition: 350ms ease-in;\n  background-color: #4bb0a9;\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  font-size: 0.95em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-response[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #4bb0a9;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%] {\n  padding-bottom: 3em;\n  margin-top: 3em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  padding-bottom: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLXF1aXovQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9sZWFybmluZy9hZGQtcXVpei9hZGQtcXVpei5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLXF1aXovQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfX3dhdmVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL2FkZC1xdWl6L0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxsZWFybmluZ1xcYWRkLWNvdXJzZVxcYWRkLWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ0E7RUFDSSxhQUFBO0FDcENKOztBRHVDQTtFQUNJLGlIQUFBO0FDcENKOztBRHVDQTtFQUNJLDZDQUFBO0FDcENKOztBRHVDQTtFQUNJLGdDQUFBO0FDcENKOztBRHFDSTtFQUNJLGdDQUFBO0FDbkNSOztBRHVDQTtFQUNJLGVBQUE7QUNwQ0o7O0FDcEJBOzs7Ozs7O0VBQUE7O0FBVUM7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRHFCSjs7QUNuQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QURvQk47O0FDaEJJO0VBQ0UsMkNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDZEk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURnQk47O0FDYkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QURlTjs7QUNYRTtFQUNFLDJCQUFBO0FEY0o7O0FDWEU7RUFDRSx3QkFBQTtFQUNBLDJFQUFBO0FEY0o7O0FDWEU7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FEY0o7O0FDWkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRGNOOztBQ1ZFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBRGFKOztBQ1ZFO0VBQ0UsY0FBQTtBRGFKOztBQ1ZFLG9DQUFBOztBQUNBO0VBQ0UsV0FBQTtBRGFKOztBRHhGQTtFQUNJLGFBQUE7QUMyRko7O0FEeEZBO0VBQ0ksaUhBQUE7QUMyRko7O0FEeEZBO0VBQ0ksNkNBQUE7QUMyRko7O0FEeEZBO0VBQ0ksZ0NBQUE7QUMyRko7O0FEMUZJO0VBQ0ksZ0NBQUE7QUM0RlI7O0FEeEZBO0VBQ0ksZUFBQTtBQzJGSjs7QUNuSkE7Ozs7Ozs7RUFBQTs7QUFVQztFQUNHLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FEb0pKOztBQ2xKSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBRG1KTjs7QUMvSUk7RUFDRSwyQ0FBQTtBRGlKTjs7QUMvSUk7RUFDRSx3Q0FBQTtBRGlKTjs7QUMvSUk7RUFDRSx5Q0FBQTtBRGlKTjs7QUMvSUk7RUFDRSx3Q0FBQTtBRGlKTjs7QUMvSUk7RUFDRSx5Q0FBQTtBRGlKTjs7QUMvSUk7RUFDRSx3Q0FBQTtBRGlKTjs7QUMvSUk7RUFDRSx3Q0FBQTtBRGlKTjs7QUM3SUk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUQrSU47O0FDNUlJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEOElOOztBQzFJRTtFQUNFLDJCQUFBO0FENklKOztBQzFJRTtFQUNFLHdCQUFBO0VBQ0EsMkVBQUE7QUQ2SUo7O0FDMUlFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRDZJSjs7QUMzSUk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRDZJTjs7QUN6SUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FENElKOztBQ3pJRTtFQUNFLGNBQUE7QUQ0SUo7O0FDeklFLG9DQUFBOztBQUNBO0VBQ0UsV0FBQTtBRDRJSjs7QUUxUEE7RUFFSSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FGNFBKOztBRXhQQTtFQUNJLGtCQUFBO0FGMlBKOztBRXpQUTtFQUNJLGtCQUFBO0VBQ0Esa0NIVkY7RUdXRSxnQkFBQTtFQUNBLG9CQUFBO0FGMlBaOztBRXpQUTtFQUNJLGtDSGZGO0VHZ0JFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRjJQWjs7QUV6UFE7RUFDSSxpQkFBQTtBRjJQWjs7QUUxUFk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUY0UGhCOztBRTNQZ0I7RUFDSSxZQUFBO0FGNlBwQjs7QUU1UG9CO0VBQ0ksZ0JBQUE7QUY4UHhCOztBRS9Qb0I7RUFDSSxnQkFBQTtBRjhQeEI7O0FFM1BnQjtFQUNJLGdCQUFBO0FGNlBwQjs7QUUxUFk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDSDVDTjtFRzZDTSxnQkFBQTtFQUNBLGlCQUFBO0FGNFBoQjs7QUUzUGdCO0VBQ0kseUJBQUE7RUFDQSxzQ0FBQTtBRjZQcEI7O0FFeFBJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FGMFBSOztBRXpQUTtFQUNJLGtDSDFERjtFRzJERSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUYyUFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWFybmluZy9hZGQtcXVpei9hZGQtcXVpei5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kYmFyLXdpZHRoOiAyNXB4O1xyXG4kYmFyLWhlaWdodDogMy4xcHg7XHJcbiRiYXItc3BhY2luZzogN3B4O1xyXG5cclxuJE1vbnRzZXJyYXQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJE11bGlzaDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRQb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblxyXG4kYm9yZGVyLWlucHV0OiAjYzlkM2RkO1xyXG5cclxuJHNoYWRvdy1uYXY6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LWJ0bjogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LXNtYWxsOiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRzaGFkb3ctY29udGFpbmVyLXNtYWxsOiAwIDEwcHggMjBweCAwIHJnYigwIDAgMCAvIDUlKTtcclxuJHNoYWRvdy1jb250YWluZXI6IDAgMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDAgMXB4IDFweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiRzaGFkb3ctbmF2LXNtYWxsOiAwIDJweCAzMHB4IDAgcmdiKDIwNyAyMDcgMjA3IC8gNTAlKTtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMEU2MTUyO1xyXG4kZ3JleS04MDA6ICM0MjQyNDI7XHJcbiRncmV5LTcwMDogIzI5MzIzZDtcclxuJGdyZXktNjAwOiAjNzk4ZGEzO1xyXG4kZ3JleS01MDA6ICMwRTYxNTI7XHJcbiRncmV5LTQwMDogIzlmYWZjMTtcclxuJGdyZXktMzAwOiAjMzMzMzMzO1xyXG4kZ3JleS0yMDA6ICM0ZDRkNGQ7XHJcbiRncmV5LTEwMDogIzY2NjY2NjtcclxuJHBpbmstZmlyc3Q6ICNlMWQ5ZDU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLTI6ICNlZGYwZjQ7XHJcblxyXG4kYmxhY2stODAwOiAjMDAwO1xyXG4kYmxhY2stNzAwOiAjMTQxNDE0O1xyXG4kYmxhY2stNjAwOiAjMWIxYjFiO1xyXG4kYmxhY2stNTAwOiAjMEU2MTUyO1xyXG5cclxuXHJcbi52aXNpYmxlLXNtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaGFkb3ctbmF2IHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG4uc2hhZG93LXNtYWxsIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnRleHQtbm9uZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi52aXNpYmxlLXNtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoYWRvdy1uYXYge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLnNoYWRvdy1zbWFsbCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRleHQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnRleHQtbm9uZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyohXG4gKiBXYXZlcyB2MC42LjBcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4ud2F2ZXMtZWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG59XG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1idXR0b25dLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9cmVzZXRdLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndhdmVzLWVmZmVjdCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ud2F2ZXMtbm90cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi53YXZlcy1pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ud2F2ZXMtaW5wdXQtd3JhcHBlciAud2F2ZXMtYnV0dG9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbn1cblxuLndhdmVzLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4udmlzaWJsZS1zbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGFkb3ctbmF2IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zaGFkb3ctc21hbGwge1xuICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50ZXh0LW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi50ZXh0LW5vbmU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIVxuICogV2F2ZXMgdjAuNi4wXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLndhdmVzLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9YnV0dG9uXSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXJlc2V0XSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3QgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLndhdmVzLW5vdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xufVxuXG4ud2F2ZXMtaW5wdXQtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLndhdmVzLWlucHV0LXdyYXBwZXIgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG59XG5cbi53YXZlcy1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICB6LWluZGV4OiAtMTtcbn1cblxuaW5wdXQ6Zm9jdXMsIGlucHV0LmZvcm0tY29udHJvbDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHRleHRhcmVhLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLkZpcnN0U2VjdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IHAge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBwIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBwIHNwYW4ge1xuICBmb250LXdlaWdodDogODAwO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIC5idG4tcmVzcG9uc2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAyZW0gYXV0byAyZW0gYXV0bztcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjBhOTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gLmJ0bi1yZXNwb25zZTpob3ZlciB7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjNGJiMGE5O1xufVxuLkZpcnN0U2VjdGlvbiAucmVzcG9uc2Uge1xuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICBtYXJnaW4tdG9wOiAzZW07XG59XG4uRmlyc3RTZWN0aW9uIC5yZXNwb25zZSBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCJcclxuLyohXHJcbiAqIFdhdmVzIHYwLjYuMFxyXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcblxyXG4gLndhdmVzLWVmZmVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgICAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gIFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gV2F2ZXMgQ29sb3JzXHJcbiAgICAmLndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43MCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTdHlsZSBpbnB1dCBidXR0b24gYnVnLlxyXG4gICAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInJlc2V0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtbm90cmFuc2l0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmUgI3tcIiFpbXBvcnRhbnRcIn07XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgXHJcbiAgICAud2F2ZXMtYnV0dG9uLWlucHV0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXHJcbiAgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvX2luZGV4JztcclxuXHJcbmlucHV0OmZvY3VzLCBpbnB1dC5mb3JtLWNvbnRyb2w6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cclxuICAgIG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuXHJcbi5GaXJzdFNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgLnRleHQge1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tcmVzcG9uc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJlbSBhdXRvIDJlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmIwYTk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45NWVtO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzRiYjBhOTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZXNwb25zZSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDNlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddQuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-quiz',
                templateUrl: './add-quiz.component.html',
                styleUrls: ['./add-quiz.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"], _services_quiz_services__WEBPACK_IMPORTED_MODULE_5__["QuizServices"]]
            }]
    }], function () { return [{ type: _services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"] }, { type: _services_quiz_services__WEBPACK_IMPORTED_MODULE_5__["QuizServices"] }, { type: _services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/add-video/add-video.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/learning/add-video/add-video.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVideoComponent", function() { return AddVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/aos/dist/aos.js */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _services_content_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/content.services */ "./src/app/services/content.services.ts");
/* harmony import */ var _services_video_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/video.services */ "./src/app/services/video.services.ts");
/* harmony import */ var src_app_models_videos_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/videos_model */ "./src/app/models/videos_model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../learning-home/learning-home.component */ "./src/app/pages/learning/learning-home/learning-home.component.ts");
















function AddVideoComponent_div_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddVideoComponent_div_0_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddVideoComponent_div_0_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddVideoComponent_div_0_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.alertMessage, " ");
} }
function AddVideoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A\u00F1adir un nuevo video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "* Por favor complete todos los campos para crear el video con exito *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddVideoComponent_div_0_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddVideoComponent_div_0_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.videos.nameVideo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddVideoComponent_div_0_span_16_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddVideoComponent_div_0_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.videos.number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddVideoComponent_div_0_span_21_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddVideoComponent_div_0_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.videos.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddVideoComponent_div_0_span_26_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddVideoComponent_div_0_Template_input_change_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.fileChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " A\u00F1adir video ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Respuesta del servidor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddVideoComponent_div_0_div_35_Template, 3, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r3.touched && _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.videos.nameVideo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.errors == null ? null : _r3.errors.required) && _r3.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r5.touched && _r5.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.videos.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.required) && _r5.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r7.touched && _r7.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.videos.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r7.errors == null ? null : _r7.errors.required) && _r7.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.alertMessage);
} }
function AddVideoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-learning-home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddVideoComponent {
    constructor(contentservices, videosservices, usersservices, route, router) {
        this.contentservices = contentservices;
        this.videosservices = videosservices;
        this.usersservices = usersservices;
        this.route = route;
        this.router = router;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
        this.videos = new src_app_models_videos_model__WEBPACK_IMPORTED_MODULE_6__["Videos"]('', '', '', '', '');
    }
    ngOnInit() {
        _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true
        });
    }
    onSubmit(f) {
        this.route.params.forEach((params) => {
            let contentId = params['idVideo'];
            this.videos.content = contentId;
            this.videosservices.addNewVideo(this.token, this.videos).subscribe(response => {
                if (!response.INFO_VIDEO) {
                    this.alertMessage = 'Se encontraron problemas en el servidor.';
                }
                else {
                    if (!this.filesToUpload) {
                        this.alertMessage = 'Se añadió el video, pero no se adjuntó archivo.';
                    }
                    else {
                        this.makeFileRequest(this.url + '/upload-video/' + response.INFO_VIDEO._id, [], this.filesToUpload).then((result) => {
                            this.videos.files = result.files;
                            this.alertMessage = 'El video se creó con éxito.';
                            this.videos = response.INFO_VIDEO;
                        });
                    }
                }
            }, error => {
                console.log(error);
            });
        });
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
    makeFileRequest(url, params, files) {
        var token = this.token;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append('files', files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    }
}
AddVideoComponent.ɵfac = function AddVideoComponent_Factory(t) { return new (t || AddVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_video_services__WEBPACK_IMPORTED_MODULE_5__["VideosServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AddVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddVideoComponent, selectors: [["app-add-video"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"], _services_video_services__WEBPACK_IMPORTED_MODULE_5__["VideosServices"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "FirstSection", "pt-3"], [1, "text"], [1, "text-danger"], ["width", "45%"], [1, "col-12", "col-sm-8", "col-md-6", "col-lg-4", "d-block", "m-auto", 3, "ngSubmit"], ["f", "ngForm"], [1, "col-12"], ["src", "../../../../assets/svg/video.svg", "alt", "Icon", "width", "30px"], ["type", "text", "name", "nameVideo", "id", "nameVideo", "placeholder", "Nombre del video", "required", "", 1, "form-control", "nameVideo", 3, "ngModel", "ngModelChange"], ["nameVideo", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["src", "../../../../assets/svg/number.svg", "alt", "Icon", "width", "30px"], ["type", "text", "name", "number", "id", "number", "placeholder", "N\u00FAmero de video", "required", "", 1, "form-control", "number", 3, "ngModel", "ngModelChange"], ["number", "ngModel"], ["src", "../../../../assets/svg/video_content.svg", "alt", "Icon", "width", "30px"], ["type", "text", "name", "content", "id", "content", "placeholder", "ID del contenido", "required", "", 1, "form-control", "nameVideo", 3, "ngModel", "ngModelChange"], ["content", "ngModel"], ["src", "../../../../assets/svg/video_video.svg", "alt", "Icon", "width", "30px"], ["type", "file", "name", "files", "id", "files", "placeholder", "Video", 1, "form-control", "image", 3, "change"], ["type", "submit", 1, "btn", "btn-response", "d-block", "waves-effect", "waves-ripple", 3, "disabled"], [1, "response"], [1, "alert", "alert-primary", "w-50", "d-block", "m-auto", "text-center"]], template: function AddVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddVideoComponent_div_0_Template, 36, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddVideoComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_9__["NavbarLearningComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_11__["LearningHomeComponent"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\ninput[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, textarea.form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\n.FirstSection[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  padding-bottom: 10px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n  font-weight: 300;\n  font-size: 0.85em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  border: 1px solid #eeeeee;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 0.8em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-size: 0.8em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-response[_ngcontent-%COMP%] {\n  display: block;\n  margin: 2em auto 2em auto;\n  transition: 350ms ease-in;\n  background-color: #4bb0a9;\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  font-size: 0.95em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-response[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #4bb0a9;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%] {\n  padding-bottom: 3em;\n  margin-top: 3em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  padding-bottom: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLXZpZGVvL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLXZpZGVvL2FkZC12aWRlby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvYWRkLXZpZGVvL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX193YXZlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9sZWFybmluZy9hZGQtdmlkZW8vQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGxlYXJuaW5nXFxhZGQtY291cnNlXFxhZGQtY291cnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDQTtFQUNJLGFBQUE7QUNwQ0o7O0FEdUNBO0VBQ0ksaUhBQUE7QUNwQ0o7O0FEdUNBO0VBQ0ksNkNBQUE7QUNwQ0o7O0FEdUNBO0VBQ0ksZ0NBQUE7QUNwQ0o7O0FEcUNJO0VBQ0ksZ0NBQUE7QUNuQ1I7O0FEdUNBO0VBQ0ksZUFBQTtBQ3BDSjs7QUNwQkE7Ozs7Ozs7RUFBQTs7QUFVQztFQUNHLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FEcUJKOztBQ25CSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBRG9CTjs7QUNoQkk7RUFDRSwyQ0FBQTtBRGtCTjs7QUNoQkk7RUFDRSx3Q0FBQTtBRGtCTjs7QUNoQkk7RUFDRSx5Q0FBQTtBRGtCTjs7QUNoQkk7RUFDRSx3Q0FBQTtBRGtCTjs7QUNoQkk7RUFDRSx5Q0FBQTtBRGtCTjs7QUNoQkk7RUFDRSx3Q0FBQTtBRGtCTjs7QUNoQkk7RUFDRSx3Q0FBQTtBRGtCTjs7QUNkSTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBRGdCTjs7QUNiSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBRGVOOztBQ1hFO0VBQ0UsMkJBQUE7QURjSjs7QUNYRTtFQUNFLHdCQUFBO0VBQ0EsMkVBQUE7QURjSjs7QUNYRTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QURjSjs7QUNaSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FEY047O0FDVkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FEYUo7O0FDVkU7RUFDRSxjQUFBO0FEYUo7O0FDVkUsb0NBQUE7O0FBQ0E7RUFDRSxXQUFBO0FEYUo7O0FEeEZBO0VBQ0ksYUFBQTtBQzJGSjs7QUR4RkE7RUFDSSxpSEFBQTtBQzJGSjs7QUR4RkE7RUFDSSw2Q0FBQTtBQzJGSjs7QUR4RkE7RUFDSSxnQ0FBQTtBQzJGSjs7QUQxRkk7RUFDSSxnQ0FBQTtBQzRGUjs7QUR4RkE7RUFDSSxlQUFBO0FDMkZKOztBQ25KQTs7Ozs7OztFQUFBOztBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURvSko7O0FDbEpJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEbUpOOztBQy9JSTtFQUNFLDJDQUFBO0FEaUpOOztBQy9JSTtFQUNFLHdDQUFBO0FEaUpOOztBQy9JSTtFQUNFLHlDQUFBO0FEaUpOOztBQy9JSTtFQUNFLHdDQUFBO0FEaUpOOztBQy9JSTtFQUNFLHlDQUFBO0FEaUpOOztBQy9JSTtFQUNFLHdDQUFBO0FEaUpOOztBQy9JSTtFQUNFLHdDQUFBO0FEaUpOOztBQzdJSTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBRCtJTjs7QUM1SUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUQ4SU47O0FDMUlFO0VBQ0UsMkJBQUE7QUQ2SUo7O0FDMUlFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRDZJSjs7QUMxSUU7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FENklKOztBQzNJSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FENklOOztBQ3pJRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUQ0SUo7O0FDeklFO0VBQ0UsY0FBQTtBRDRJSjs7QUN6SUUsb0NBQUE7O0FBQ0E7RUFDRSxXQUFBO0FENElKOztBRTFQQTtFQUVJLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUY0UEo7O0FFeFBBO0VBQ0ksa0JBQUE7QUYyUEo7O0FFelBRO0VBQ0ksa0JBQUE7RUFDQSxrQ0hWRjtFR1dFLGdCQUFBO0VBQ0Esb0JBQUE7QUYyUFo7O0FFelBRO0VBQ0ksa0NIZkY7RUdnQkUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FGMlBaOztBRXpQUTtFQUNJLGlCQUFBO0FGMlBaOztBRTFQWTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBRjRQaEI7O0FFM1BnQjtFQUNJLFlBQUE7QUY2UHBCOztBRTVQb0I7RUFDSSxnQkFBQTtBRjhQeEI7O0FFL1BvQjtFQUNJLGdCQUFBO0FGOFB4Qjs7QUUzUGdCO0VBQ0ksZ0JBQUE7QUY2UHBCOztBRTFQWTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0NINUNOO0VHNkNNLGdCQUFBO0VBQ0EsaUJBQUE7QUY0UGhCOztBRTNQZ0I7RUFDSSx5QkFBQTtFQUNBLHNDQUFBO0FGNlBwQjs7QUV4UEk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUYwUFI7O0FFelBRO0VBQ0ksa0NIMURGO0VHMkRFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRjJQWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL2FkZC12aWRlby9hZGQtdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJGJhci13aWR0aDogMjVweDtcclxuJGJhci1oZWlnaHQ6IDMuMXB4O1xyXG4kYmFyLXNwYWNpbmc6IDdweDtcclxuXHJcbiRNb250c2VycmF0OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRNdWxpc2g6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kUG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuJGJvcmRlci1pbnB1dDogI2M5ZDNkZDtcclxuXHJcbiRzaGFkb3ctbmF2OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1idG46IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1zbWFsbDogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kc2hhZG93LWNvbnRhaW5lci1zbWFsbDogMCAxMHB4IDIwcHggMCByZ2IoMCAwIDAgLyA1JSk7XHJcbiRzaGFkb3ctY29udGFpbmVyOiAwIDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDFweCAxcHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4kc2hhZG93LW5hdi1zbWFsbDogMCAycHggMzBweCAwIHJnYigyMDcgMjA3IDIwNyAvIDUwJSk7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzBFNjE1MjtcclxuJGdyZXktODAwOiAjNDI0MjQyO1xyXG4kZ3JleS03MDA6ICMyOTMyM2Q7XHJcbiRncmV5LTYwMDogIzc5OGRhMztcclxuJGdyZXktNTAwOiAjMEU2MTUyO1xyXG4kZ3JleS00MDA6ICM5ZmFmYzE7XHJcbiRncmV5LTMwMDogIzMzMzMzMztcclxuJGdyZXktMjAwOiAjNGQ0ZDRkO1xyXG4kZ3JleS0xMDA6ICM2NjY2NjY7XHJcbiRwaW5rLWZpcnN0OiAjZTFkOWQ1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS0yOiAjZWRmMGY0O1xyXG5cclxuJGJsYWNrLTgwMDogIzAwMDtcclxuJGJsYWNrLTcwMDogIzE0MTQxNDtcclxuJGJsYWNrLTYwMDogIzFiMWIxYjtcclxuJGJsYWNrLTUwMDogIzBFNjE1MjtcclxuXHJcblxyXG4udmlzaWJsZS1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2hhZG93LW5hdiB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLnNoYWRvdy1zbWFsbCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50ZXh0LW5vbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIudmlzaWJsZS1zbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGFkb3ctbmF2IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zaGFkb3ctc21hbGwge1xuICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50ZXh0LW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi50ZXh0LW5vbmU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIVxuICogV2F2ZXMgdjAuNi4wXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLndhdmVzLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9YnV0dG9uXSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXJlc2V0XSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3QgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLndhdmVzLW5vdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xufVxuXG4ud2F2ZXMtaW5wdXQtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLndhdmVzLWlucHV0LXdyYXBwZXIgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG59XG5cbi53YXZlcy1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnZpc2libGUtc20ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hhZG93LW5hdiB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uc2hhZG93LXNtYWxsIHtcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udGV4dC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG4udGV4dC1ub25lOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiFcbiAqIFdhdmVzIHYwLjYuMFxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi53YXZlcy1lZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbn1cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1saWdodCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy15ZWxsb3cgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1vcmFuZ2UgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPWJ1dHRvbl0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1yZXNldF0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYm9yZGVyOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0IGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi53YXZlcy1ub3RyYW5zaXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcbn1cblxuLndhdmVzLWlucHV0LXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi53YXZlcy1pbnB1dC13cmFwcGVyIC53YXZlcy1idXR0b24taW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBsaW5lLWhlaWdodDogMi41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xufVxuXG4ud2F2ZXMtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogRmlyZWZveCBCdWc6IGxpbmsgbm90IHRyaWdnZXJlZCAqL1xuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgei1pbmRleDogLTE7XG59XG5cbmlucHV0OmZvY3VzLCBpbnB1dC5mb3JtLWNvbnRyb2w6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5GaXJzdFNlY3Rpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gcCBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4uRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gcCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSAuYnRuLXJlc3BvbnNlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMmVtIGF1dG8gMmVtIGF1dG87XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmIwYTk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xufVxuLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIC5idG4tcmVzcG9uc2U6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzRiYjBhOTtcbn1cbi5GaXJzdFNlY3Rpb24gLnJlc3BvbnNlIHtcbiAgcGFkZGluZy1ib3R0b206IDNlbTtcbiAgbWFyZ2luLXRvcDogM2VtO1xufVxuLkZpcnN0U2VjdGlvbiAucmVzcG9uc2UgaDMge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiXHJcbi8qIVxyXG4gKiBXYXZlcyB2MC42LjBcclxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5cclxuIC53YXZlcy1lZmZlY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2Utb3V0O1xyXG4gIFxyXG4gICAgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDotMTBweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICBcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcclxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIFdhdmVzIENvbG9yc1xyXG4gICAgJi53YXZlcy1saWdodCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy15ZWxsb3cgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1vcmFuZ2UgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNzApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gU3R5bGUgaW5wdXQgYnV0dG9uIGJ1Zy5cclxuICAgIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJyZXNldFwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW1nIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLW5vdHJhbnNpdGlvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lICN7XCIhaW1wb3J0YW50XCJ9O1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtY2lyY2xlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWlucHV0LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIFxyXG4gICAgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtY2lyY2xlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyLjVlbTtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogRmlyZWZveCBCdWc6IGxpbmsgbm90IHRyaWdnZXJlZCAqL1xyXG4gIC53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9IiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL19pbmRleCc7XHJcblxyXG5pbnB1dDpmb2N1cywgaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgdGV4dGFyZWEuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuXHJcbiAgICBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uRmlyc3RTZWN0aW9uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIC50ZXh0IHtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC44NWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLXJlc3BvbnNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyZW0gYXV0byAyZW0gYXV0bztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiMGE5O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOTVlbTtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICM0YmIwYTk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmVzcG9uc2Uge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-video',
                templateUrl: './add-video.component.html',
                styleUrls: ['./add-video.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"], _services_video_services__WEBPACK_IMPORTED_MODULE_5__["VideosServices"]]
            }]
    }], function () { return [{ type: _services_content_services__WEBPACK_IMPORTED_MODULE_4__["ContentServices"] }, { type: _services_video_services__WEBPACK_IMPORTED_MODULE_5__["VideosServices"] }, { type: _services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/content-learning/content-learning.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/learning/content-learning/content-learning.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContentLearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLearningComponent", function() { return ContentLearningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././../../../node_modules/aos/dist/aos.js */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _services_courses_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/courses.services */ "./src/app/services/courses.services.ts");
/* harmony import */ var _services_modules_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/modules.services */ "./src/app/services/modules.services.ts");
/* harmony import */ var _services_content_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/content.services */ "./src/app/services/content.services.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _models_module_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/module_model */ "./src/app/models/module_model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

















function ContentLearningComponent_div_0_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentLearningComponent_div_0_div_4_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.onUpdateConfirm(ctx_r8.module._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Editar m\u00F3dulo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentLearningComponent_div_0_div_4_div_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.onDeleteConfirm(ctx_r10.module._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Eliminar m\u00F3dulo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContentLearningComponent_div_0_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00BFEstas seguro de eliminar este m\u00F3dulo?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentLearningComponent_div_0_div_4_div_2_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.onCancelModule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " No, cancelar esta acci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentLearningComponent_div_0_div_4_div_2_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.onDeleteContent(ctx_r13.module._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " S\u00ED, eliminar definitivamente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContentLearningComponent_div_0_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modificar curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContentLearningComponent_div_0_div_4_div_3_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.onUpdateContent(ctx_r18.module._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContentLearningComponent_div_0_div_4_div_3_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.module.course = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContentLearningComponent_div_0_div_4_div_3_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.module.module_duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContentLearningComponent_div_0_div_4_div_3_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.module.module_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContentLearningComponent_div_0_div_4_div_3_Template_input_change_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r23.fileChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentLearningComponent_div_0_div_4_div_3_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.onUpdateCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancelar acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Actualizar contenido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r7.module.course);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.module.course);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r7.module.module_duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.module.module_duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r7.module.module_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.module.module_name);
} }
function ContentLearningComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentLearningComponent_div_0_div_4_div_1_Template, 8, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContentLearningComponent_div_0_div_4_div_2_Template, 9, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContentLearningComponent_div_0_div_4_div_3_Template, 21, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.identity.role == "ROLE_ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.confirm == ctx_r3.module._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.update == ctx_r3.module._id);
} }
const _c0 = function (a0) { return [a0]; };
function ContentLearningComponent_div_0_div_6_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, content_r26.link + "/" + content_r26._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r25.url + "/get-files/" + content_r26.files, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r26.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r26.namecontent);
} }
function ContentLearningComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContentLearningComponent_div_0_div_6_a_3_Template, 8, 6, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.content);
} }
function ContentLearningComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00BFA que contenido deseas acceder?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContentLearningComponent_div_0_div_4_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContentLearningComponent_div_0_div_6_Template, 4, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.module);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.content);
} }
const _c1 = function (a1) { return ["add-content/", a1]; };
function ContentLearningComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r1.module._id));
} }
function ContentLearningComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You must log in to view the content of this platform.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContentLearningComponent {
    constructor(usersservices, coursesservices, moduleservices, contentservices, route, router) {
        this.usersservices = usersservices;
        this.coursesservices = coursesservices;
        this.moduleservices = moduleservices;
        this.contentservices = contentservices;
        this.route = route;
        this.router = router;
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
        this.module = new _models_module_model__WEBPACK_IMPORTED_MODULE_7__["Modules"]('', '', '', '', '');
    }
    ngOnInit() {
        _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
            //once: false // "false" --> Animaciones repetidas al hacer scroll.
        });
        this.getContent();
    }
    getContent() {
        this.route.params.forEach((params) => {
            let id = params['id'];
            this.moduleservices.getModule(this.token, id).subscribe(response => {
                if (!response.module) {
                    console.log('Se encontraron problemas en el servidor.');
                }
                else {
                    this.module = response.module;
                    this.contentservices.getContents(response.module._id).subscribe(response => {
                        if (!response.content) {
                            console.log('Se encontraron problemas en el servidor.');
                        }
                        else {
                            this.content = response.content;
                            console.log(this.content);
                        }
                    }, error => {
                        console.log(error);
                    });
                }
            }, error => {
                console.log(error);
            });
        });
    }
    onCancelModule() {
        this.confirm = null;
        document.querySelector(".First").scrollIntoView({ behavior: "smooth" });
    }
    onDeleteConfirm(id) {
        this.confirm = id;
    }
    onDeleteContent(id) {
        this.moduleservices.deleteModule(this.token, id).subscribe(response => {
            if (!response.module) {
                alert("Se encontraron problemas en el servidor. ");
            }
            else if (response.module) {
                alert("El módulo se eliminó con éxito.");
                this.router.navigate(['/learning']);
            }
        }, error => {
            console.log(error);
        });
    }
    onUpdateConfirm(id) {
        this.update = id;
    }
    onUpdateCancel() {
        this.update = null;
        document.querySelector(".First").scrollIntoView({ behavior: "smooth" });
    }
    onUpdateContent(id) {
        this.moduleservices.updateModule(this.token, id, this.module).subscribe(response => {
            if (!response.module) {
                alert("Error en el servidor");
            }
            else {
                if (!this.filesToUpload) {
                    this.module = response.module;
                    alert("El módulo se modificó con éxito, pero no se modificó la imagen.");
                    this.router.navigate(['/learning']);
                }
                else {
                    this.makeFileRequest(this.url + '/add-image-module/' + response.module._id, [], this.filesToUpload),
                        (result) => {
                            this.module.image = result.image;
                            this.module = response.module;
                            alert("El módulo se modificó con éxito.");
                            this.router.navigate(['/learning']);
                        };
                }
            }
        }, error => {
            console.log(error);
        });
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log(this.filesToUpload);
    }
    makeFileRequest(url, params, files) {
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
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    }
}
ContentLearningComponent.ɵfac = function ContentLearningComponent_Factory(t) { return new (t || ContentLearningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_6__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_courses_services__WEBPACK_IMPORTED_MODULE_3__["CoursesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modules_services__WEBPACK_IMPORTED_MODULE_4__["ModuleServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_services__WEBPACK_IMPORTED_MODULE_5__["ContentServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
ContentLearningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentLearningComponent, selectors: [["app-content-learning"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_courses_services__WEBPACK_IMPORTED_MODULE_3__["CoursesServices"], _services_modules_services__WEBPACK_IMPORTED_MODULE_4__["ModuleServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_5__["ContentServices"], _services_users_services__WEBPACK_IMPORTED_MODULE_6__["UsersServices"]])], decls: 6, vars: 3, consts: [[4, "ngIf"], ["data-aos", "fade-down", 1, "First"], [1, "clearfix"], ["class", "FirstSection", 4, "ngIf"], ["class", "actions d-lg-flex justify-content-lg-start", "data-aos", "fade-down", 4, "ngIf"], ["class", "secure", 4, "ngIf"], ["class", "secure-update", 4, "ngIf"], ["data-aos", "fade-down", 1, "actions", "d-lg-flex", "justify-content-lg-start"], [1, "btn", "btn-edit", "waves-effect", "waves-ripple", 3, "click"], ["src", "../../../../assets/svg/edit.svg", "alt", "Logo"], [1, "visible-sm"], ["data-aos", "fade-down", 1, "btn", "btn-delete", "waves-effect", "waves-ripple", 3, "click"], ["src", "../../../../assets/svg/trash.svg", "alt", "Logo"], [1, "secure"], [1, "buttons", "d-lg-flex", "justify-content-lg-around"], [1, "btn", "btn-cancel", "btn-primary", "waves-effect", "waves-ripple", 3, "click"], [1, "btn", "btn-deletes", "btn-danger", "waves-effect", "waves-ripple", 3, "click"], [1, "secure-update"], [1, "text-center", "mt-3"], [1, "col-12", "col-sm-9", "col-md-7", "col-lg-5", "d-block", "m-auto", 3, "ngSubmit"], ["f", "ngForm"], ["type", "text", "name", "course_name", "id", "", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["course", "ngModel"], ["type", "text", "name", "duration", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["module_duration", "ngModel"], ["type", "text", "name", "instructor", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["module_name", "ngModel"], ["type", "file", "name", "image", "id", "", 1, "form-control", 3, "change"], [1, "actions", "mt-3", "d-lg-flex", "justify-content-lg-around"], ["type", "reset", 1, "btn-danger", "btn", "waves-effect", "waves-ripple", 3, "click"], ["type", "submit", 1, "btn-primary", "btn", "waves-effect", "waves-ripple"], [1, "FirstSection"], [1, "container"], [1, "row", "justify-content-around"], ["routerLinkActive", "router-link-active", "class", "p-5 mt-5 rounded text-none", "data-aos", "fade-down", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "router-link-active", "data-aos", "fade-down", 1, "p-5", "mt-5", "rounded", "text-none", 3, "routerLink"], [1, "image"], ["alt", "Icon", 3, "src"], [1, "text"], [1, "number"], ["routerLinkActive", "router-link-active", 1, "ThirdSection", "btn-adds", 3, "routerLink"], ["src", "../../../../assets/svg/addE.svg", "alt", "adds"], [1, "alert", "alert-danger", "w-50", "d-block", "m-auto", "text-center"], [1, "mt-5"]], template: function ContentLearningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContentLearningComponent_div_0_Template, 7, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentLearningComponent_div_1_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "EMPEZAR AHORA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ContentLearningComponent_div_5_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity.role == "ROLE_ADMIN" && ctx.module);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_10__["NavbarLearningComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  font-size: 2.4em;\n  text-align: center;\n  padding-bottom: 1em;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #eeeeee;\n  margin-top: 1em;\n  background: #0E6152;\n  transition: 350ms ease-in;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto auto 1em;\n  width: 650px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  color: white;\n  font-weight: 400;\n  text-transform: uppercase;\n  margin-top: 0.6em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h4.number[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto auto 0.4em;\n  width: 50px;\n  height: 40px;\n  background: red;\n  border-radius: 20%;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px rgba(0, 0, 0, 0.3);\n}\n\n.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 3em 0.8em 0 0;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  font-size: 0.95em;\n  transition: 350ms ease-in;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n\n.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  padding-right: 5px;\n}\n\n.actions[_ngcontent-%COMP%]   a.btn-edit[_ngcontent-%COMP%] {\n  color: #fff;\n  display: block;\n  margin: auto;\n  background: #005670;\n}\n\n.actions[_ngcontent-%COMP%]   a.btn-edit[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 13px 24px -7px #005670;\n}\n\n.actions[_ngcontent-%COMP%]   a.btn-delete[_ngcontent-%COMP%] {\n  color: #fff;\n  display: block;\n  margin: auto;\n  background: #e4002b;\n}\n\n.actions[_ngcontent-%COMP%]   a.btn-delete[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 13px 24px -7px #e4002b;\n}\n\n.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 350ms ease-in;\n}\n\n.secure[_ngcontent-%COMP%] {\n  margin-top: 1.5em;\n}\n\n.secure[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n}\n\n.secure[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  font-size: 300;\n  color: #fff;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  transition: 380ms ease-in;\n}\n\n.secure[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 380ms ease-in;\n  box-shadow: 0px 13px 24px -7px #7e7b7b;\n}\n\n.secure-update[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  text-transform: uppercase;\n  padding-top: 1em;\n  font-size: 1.3em;\n}\n\n.btn-adds[_ngcontent-%COMP%] {\n  background: #4bb0a9;\n  position: fixed;\n  width: 55px;\n  height: 55px;\n  line-height: 55px;\n  bottom: 30px;\n  right: 30px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 50px;\n  font-size: 1px;\n  transition: 350ms ease-in;\n}\n\n.btn-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  margin: 6em auto;\n}\n\n.btn-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.22em auto;\n  width: 75%;\n}\n\n.btn-adds[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #999999;\n}\n\n@media screen and (min-width: 0px) and (max-width: 991px) {\n  hr[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n\n@media screen and (min-width: 0px) and (max-width: 425px) {\n  hr[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n\n  .FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvY29udGVudC1sZWFybmluZy9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL2NvbnRlbnQtbGVhcm5pbmcvY29udGVudC1sZWFybmluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvY29udGVudC1sZWFybmluZy9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fd2F2ZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvY29udGVudC1sZWFybmluZy9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcbGVhcm5pbmdcXGNvbnRlbnQtbGVhcm5pbmdcXGNvbnRlbnQtbGVhcm5pbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0ksYUFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxpSEFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSw2Q0FBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxnQ0FBQTtBQ3BDSjs7QURxQ0k7RUFDSSxnQ0FBQTtBQ25DUjs7QUR1Q0E7RUFDSSxlQUFBO0FDcENKOztBQ3BCQTs7Ozs7OztFQUFBOztBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURxQko7O0FDbkJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEb0JOOztBQ2hCSTtFQUNFLDJDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2RJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEZ0JOOztBQ2JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEZU47O0FDWEU7RUFDRSwyQkFBQTtBRGNKOztBQ1hFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRGNKOztBQ1hFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRGNKOztBQ1pJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QURjTjs7QUNWRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QURhSjs7QUNWRTtFQUNFLGNBQUE7QURhSjs7QUNWRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QURhSjs7QUUzSEE7RUFDSSxlQUFBO0VBQ0Esa0NIR007RUdGTixnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRjhISjs7QUU1SEE7RUFDSSxlQUFBO0FGK0hKOztBRXpIWTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUY0SGhCOztBRXpIb0I7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FGMkh4Qjs7QUV2SGdCO0VBQ0ksa0JBQUE7QUZ5SHBCOztBRXhIb0I7RUFDSSxrQ0gzQmQ7RUc0QmMsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBRjBIeEI7O0FFeEh3QjtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FGMEg1Qjs7QUVwSGdCO0VBQ0kseUJBQUE7RUFDQSxpREFBQTtBRnNIcEI7O0FFN0dJO0VBQ0kscUJBQUE7RUFDQSwrR0hyREs7RUdzREwsa0NIM0RFO0VHNERGLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FGZ0hSOztBRTlHUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBRmdIWjs7QUU3R1E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRitHWjs7QUU5R1k7RUFDSSxzQ0FBQTtBRmdIaEI7O0FFNUdRO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUY4R1o7O0FFN0dZO0VBQ0ksc0NBQUE7QUYrR2hCOztBRTNHUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBRjZHWjs7QUV2R0E7RUFDSSxpQkFBQTtBRjBHSjs7QUV6R0k7RUFDSSxrQkFBQTtFQUNBLGtDSHhHRTtFR3lHRixnQkFBQTtBRjJHUjs7QUV4R1E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtDSC9HRjtFR2dIRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsK0dIOUdDO0VHK0dELHlCQUFBO0FGMEdaOztBRXpHWTtFQUNJLHlCQUFBO0VBQ0Esc0NBQUE7QUYyR2hCOztBRXBHSTtFQUNJLGtDSC9IRTtFR2dJRix5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUZ1R1I7O0FFbkdBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0dIdEllO0VHdUlmLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FGc0dKOztBRXBHSTtFQUNHLGNBQUE7RUFDQSxnQkFBQTtBRnNHUDs7QUVyR087RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FGdUdYOztBRW5HSTtFQUNJLHlCQUFBO0VBQ0Esc0NBQUE7QUZxR1I7O0FFaEdBO0VBQ0k7SUFDSSxVQUFBO0VGbUdOO0FBQ0Y7O0FFaEdBO0VBQ0k7SUFDSSxVQUFBO0VGa0dOOztFRTdGYztJQUNJLFVBQUE7RUZnR2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWFybmluZy9jb250ZW50LWxlYXJuaW5nL2NvbnRlbnQtbGVhcm5pbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJGJhci13aWR0aDogMjVweDtcclxuJGJhci1oZWlnaHQ6IDMuMXB4O1xyXG4kYmFyLXNwYWNpbmc6IDdweDtcclxuXHJcbiRNb250c2VycmF0OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRNdWxpc2g6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kUG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuJGJvcmRlci1pbnB1dDogI2M5ZDNkZDtcclxuXHJcbiRzaGFkb3ctbmF2OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1idG46IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1zbWFsbDogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kc2hhZG93LWNvbnRhaW5lci1zbWFsbDogMCAxMHB4IDIwcHggMCByZ2IoMCAwIDAgLyA1JSk7XHJcbiRzaGFkb3ctY29udGFpbmVyOiAwIDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDFweCAxcHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4kc2hhZG93LW5hdi1zbWFsbDogMCAycHggMzBweCAwIHJnYigyMDcgMjA3IDIwNyAvIDUwJSk7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzBFNjE1MjtcclxuJGdyZXktODAwOiAjNDI0MjQyO1xyXG4kZ3JleS03MDA6ICMyOTMyM2Q7XHJcbiRncmV5LTYwMDogIzc5OGRhMztcclxuJGdyZXktNTAwOiAjMEU2MTUyO1xyXG4kZ3JleS00MDA6ICM5ZmFmYzE7XHJcbiRncmV5LTMwMDogIzMzMzMzMztcclxuJGdyZXktMjAwOiAjNGQ0ZDRkO1xyXG4kZ3JleS0xMDA6ICM2NjY2NjY7XHJcbiRwaW5rLWZpcnN0OiAjZTFkOWQ1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS0yOiAjZWRmMGY0O1xyXG5cclxuJGJsYWNrLTgwMDogIzAwMDtcclxuJGJsYWNrLTcwMDogIzE0MTQxNDtcclxuJGJsYWNrLTYwMDogIzFiMWIxYjtcclxuJGJsYWNrLTUwMDogIzBFNjE1MjtcclxuXHJcblxyXG4udmlzaWJsZS1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2hhZG93LW5hdiB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLnNoYWRvdy1zbWFsbCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50ZXh0LW5vbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIudmlzaWJsZS1zbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGFkb3ctbmF2IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zaGFkb3ctc21hbGwge1xuICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50ZXh0LW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi50ZXh0LW5vbmU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIVxuICogV2F2ZXMgdjAuNi4wXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLndhdmVzLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9YnV0dG9uXSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXJlc2V0XSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3QgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLndhdmVzLW5vdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xufVxuXG4ud2F2ZXMtaW5wdXQtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLndhdmVzLWlucHV0LXdyYXBwZXIgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG59XG5cbi53YXZlcy1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICB6LWluZGV4OiAtMTtcbn1cblxuaDIge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyLjRlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuLkZpcnN0U2VjdGlvbiAuY29udGFpbmVyIC5yb3cgYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgYmFja2dyb3VuZDogIzBFNjE1MjtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbn1cbi5GaXJzdFNlY3Rpb24gLmNvbnRhaW5lciAucm93IGEgLmltYWdlIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG8gYXV0byAxZW07XG4gIHdpZHRoOiA2NTBweDtcbn1cbi5GaXJzdFNlY3Rpb24gLmNvbnRhaW5lciAucm93IGEgLnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uRmlyc3RTZWN0aW9uIC5jb250YWluZXIgLnJvdyBhIC50ZXh0IGg0IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6IDAuNmVtO1xufVxuLkZpcnN0U2VjdGlvbiAuY29udGFpbmVyIC5yb3cgYSAudGV4dCBoNC5udW1iZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvIGF1dG8gMC40ZW07XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xufVxuLkZpcnN0U2VjdGlvbiAuY29udGFpbmVyIC5yb3cgYTpob3ZlciB7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5hY3Rpb25zIGEge1xuICBtYXJnaW46IDNlbSAwLjhlbSAwIDA7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOTVlbTtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFjdGlvbnMgYSBpbWcge1xuICB3aWR0aDogMjVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLmFjdGlvbnMgYS5idG4tZWRpdCB7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMDA1NjcwO1xufVxuLmFjdGlvbnMgYS5idG4tZWRpdDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjMDA1NjcwO1xufVxuLmFjdGlvbnMgYS5idG4tZGVsZXRlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6ICNlNDAwMmI7XG59XG4uYWN0aW9ucyBhLmJ0bi1kZWxldGU6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggI2U0MDAyYjtcbn1cbi5hY3Rpb25zIGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG59XG5cbi5zZWN1cmUge1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbn1cbi5zZWN1cmUgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnNlY3VyZSAuYnV0dG9ucyBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDMwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgdHJhbnNpdGlvbjogMzgwbXMgZWFzZS1pbjtcbn1cbi5zZWN1cmUgLmJ1dHRvbnMgYTpob3ZlciB7XG4gIHRyYW5zaXRpb246IDM4MG1zIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjN2U3YjdiO1xufVxuXG4uc2VjdXJlLXVwZGF0ZSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4uYnRuLWFkZHMge1xuICBiYWNrZ3JvdW5kOiAjNGJiMGE5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMXB4O1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xufVxuLmJ0bi1hZGRzIGRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDZlbSBhdXRvO1xufVxuLmJ0bi1hZGRzIGRpdiBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjIyZW0gYXV0bztcbiAgd2lkdGg6IDc1JTtcbn1cbi5idG4tYWRkczpob3ZlciB7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjOTk5OTk5O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICBociB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgaHIge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cblxuICAuRmlyc3RTZWN0aW9uIC5jb250YWluZXIgLnJvdyBhIHtcbiAgICB3aWR0aDogODUlO1xuICB9XG59IiwiXHJcbi8qIVxyXG4gKiBXYXZlcyB2MC42LjBcclxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5cclxuIC53YXZlcy1lZmZlY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2Utb3V0O1xyXG4gIFxyXG4gICAgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDotMTBweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICBcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcclxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIFdhdmVzIENvbG9yc1xyXG4gICAgJi53YXZlcy1saWdodCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy15ZWxsb3cgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1vcmFuZ2UgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNzApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gU3R5bGUgaW5wdXQgYnV0dG9uIGJ1Zy5cclxuICAgIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJyZXNldFwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW1nIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLW5vdHJhbnNpdGlvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lICN7XCIhaW1wb3J0YW50XCJ9O1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtY2lyY2xlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWlucHV0LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIFxyXG4gICAgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtY2lyY2xlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyLjVlbTtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogRmlyZWZveCBCdWc6IGxpbmsgbm90IHRyaWdnZXJlZCAqL1xyXG4gIC53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9IiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL19pbmRleCc7XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyLjRlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbn1cclxuaHIge1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG59XHJcblxyXG4uRmlyc3RTZWN0aW9uIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzgsMjM4LDIzOCk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEU2MTUyO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuXHJcbiAgICAgICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0byAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjZlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYubnVtYmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gLjRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMzAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIGEge1xyXG4gICAgICAgIG1hcmdpbjogM2VtIC44ZW0gMCAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctYnRuO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjk1ZW07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5idG4tZWRpdCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1NjcwO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjMDA1NjcwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmJ0bi1kZWxldGUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U0MDAyYjtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggI2U0MDAyYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VjdXJlIHtcclxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1idG47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDM4MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzgwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjN2U3YjdiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VjdXJlLXVwZGF0ZSB7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tYWRkcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGJiMGE5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTVweDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1jb250YWluZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIG1hcmdpbjogNmVtIGF1dG87XHJcbiAgICAgICBpbWcge1xyXG4gICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgIG1hcmdpbjogLjIyZW0gYXV0bztcclxuICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4IHJnYigxNTMsIDE1MywgMTUzKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICBociB7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIGhyIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG4gICAgLkZpcnN0U2VjdGlvbiB7XHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentLearningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content-learning',
                templateUrl: './content-learning.component.html',
                styleUrls: ['./content-learning.component.scss'],
                providers: [_services_courses_services__WEBPACK_IMPORTED_MODULE_3__["CoursesServices"], _services_modules_services__WEBPACK_IMPORTED_MODULE_4__["ModuleServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_5__["ContentServices"], _services_users_services__WEBPACK_IMPORTED_MODULE_6__["UsersServices"]]
            }]
    }], function () { return [{ type: _services_users_services__WEBPACK_IMPORTED_MODULE_6__["UsersServices"] }, { type: _services_courses_services__WEBPACK_IMPORTED_MODULE_3__["CoursesServices"] }, { type: _services_modules_services__WEBPACK_IMPORTED_MODULE_4__["ModuleServices"] }, { type: _services_content_services__WEBPACK_IMPORTED_MODULE_5__["ContentServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/learning-home/learning-home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/learning/learning-home/learning-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: LearningHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningHomeComponent", function() { return LearningHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././../../../node_modules/aos/dist/aos.js */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_courses_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/courses.services */ "./src/app/services/courses.services.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _learning_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../learning.filter.pipe */ "./src/app/pages/learning/learning.filter.pipe.ts");













function LearningHomeComponent_div_0_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No se han encontrado resultados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No podemos encontrar ning\u00FAn curso que coincida con su b\u00FAsqueda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " o no hay ning\u00FAn curso disponible ahora.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\\(o_o)/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["course", a1]; };
function LearningHomeComponent_div_0_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const courses_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, courses_r5._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.url + "/get-image-course/" + courses_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", courses_r5.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](courses_r5.instructor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](courses_r5.course_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", courses_r5.modules, " M\u00F3dulos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", courses_r5.duration, " ");
} }
const _c1 = function () { return ["add-course"]; };
function LearningHomeComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function LearningHomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Descubre los secretos de la cocina mexicana con nuestros cursos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LearningHomeComponent_div_0_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.searchTerm = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ordenados por: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Agregados recientemente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LearningHomeComponent_div_0_p_15_Template, 10, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "courseFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LearningHomeComponent_div_0_a_19_Template, 15, 9, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "courseFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LearningHomeComponent_div_0_div_21_Template, 4, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_1_0 = null;
    const currVal_1 = !((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 4, ctx_r0.courses, ctx_r0.searchTerm)) == null ? null : tmp_1_0.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 7, ctx_r0.courses, ctx_r0.searchTerm));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.identity.role == "ROLE_ADMIN");
} }
function LearningHomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You must log in to view the content of this platform.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LearningHomeComponent {
    constructor(usersservices, coursesservices, route, router) {
        this.usersservices = usersservices;
        this.coursesservices = coursesservices;
        this.route = route;
        this.router = router;
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].url;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
        this.next_page = 1;
        this.prev_page = 1;
    }
    ngOnInit() {
        _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
            //once: false // "false" --> Animaciones repetidas al hacer scroll.
        });
        this.getCourses();
    }
    getCourses() {
        this.route.params.forEach((params) => {
            let page = +params['page'];
            if (!page) {
                page = 1;
            }
            else {
                this.next_page = page + 1;
                this.prev_page = page - 1;
                if (this.prev_page == 0) {
                    this.prev_page = 1;
                }
            }
            this.coursesservices.getCourses(page).subscribe(response => {
                if (response.page) {
                    this.router.navigate(['/']);
                }
                else {
                    this.courses = response.courses;
                }
            }, error => {
                console.log(error);
            });
        });
    }
}
LearningHomeComponent.ɵfac = function LearningHomeComponent_Factory(t) { return new (t || LearningHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_courses_services__WEBPACK_IMPORTED_MODULE_2__["CoursesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LearningHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LearningHomeComponent, selectors: [["app-learning-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_courses_services__WEBPACK_IMPORTED_MODULE_2__["CoursesServices"]])], decls: 3, vars: 2, consts: [[4, "ngIf"], [1, "clearfix"], [1, "FirstSection"], ["data-aos", "fade-down"], [1, "subnav"], ["data-aos", "fade-down", 1, "search", "shadow-small", "col-10", "col-sm-4", "col-md-4", "col-lg-3", "col-xl-3"], ["src", "../../../../assets/svg/Search.svg", "alt", "Search", "width", "25px"], ["type", "search", "placeholder", "Nombre del curso", "name", "search", "spellcheck", "false", 1, "search", "form-control", 3, "ngModel", "ngModelChange"], ["data-aos", "fade-down", 1, "order"], [1, "TwoSection"], ["class", "item-not-found", 4, "ngIf"], [1, "container"], [1, "row", "d-flex", "justify-content-around"], ["routerLinkActive", "router-link-active", "class", "rounded text-none p-3 mt-5", "data-aos", "fade-down", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "item-not-found"], [1, "info-item"], ["routerLinkActive", "router-link-active", "data-aos", "fade-down", 1, "rounded", "text-none", "p-3", "mt-5", 3, "routerLink"], [1, "image"], [1, "rounded", 3, "src", "alt"], [1, "text"], [1, "instructor"], [1, "course_name"], [1, "info", "d-md-flex", "justify-content-md-around"], [1, "modules", "info-d"], ["src", "../../../../assets/svg/module.svg", "alt", "Module"], [1, "duration", "info-d"], ["src", "../../../../assets/svg/future.svg", "alt", "Future"], ["routerLinkActive", "router-link-active", 1, "ThirdSection", "btn-add", 3, "routerLink"], ["src", "../../../../assets/svg/addE.svg", "alt", "add"], [1, "alert", "alert-danger", "w-50", "d-block", "m-auto", "text-center"], [1, "mt-5"]], template: function LearningHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LearningHomeComponent_div_0_Template, 22, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LearningHomeComponent_div_2_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_7__["NavbarLearningComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], pipes: [_learning_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["CoursesFilterPipe"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\ninput[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\n.FirstSection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  font-size: 3.5em;\n  text-align: center;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .subnav[_ngcontent-%COMP%] {\n  padding-bottom: 1.5em;\n  margin-top: 5em;\n  text-align: center;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .subnav[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  border: 1px solid #ebe7e7;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .subnav[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-bottom: 2px;\n  padding-left: 5px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .subnav[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 0.85em;\n  border: none;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .subnav[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  font-size: 0.95em;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .subnav[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0E6152;\n}\n\n.TwoSection[_ngcontent-%COMP%] {\n  padding-bottom: 5em;\n  width: 100%;\n}\n\n.TwoSection[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  padding-top: 2em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .item-not-found[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n  padding-top: 5em;\n  width: 85%;\n  margin: auto;\n  font-size: 1.2em;\n  color: #1b1b1b;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .item-not-found[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 1.5em;\n  font-weight: 500;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .item-not-found[_ngcontent-%COMP%]   span.info-item[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #0E6152;\n  font-size: 0.7em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #eeeeee;\n  margin-top: 1em;\n  background: #fff;\n  transition: 350ms ease-in;\n}\n\n.TwoSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 245px;\n  width: 100%;\n  overflow: hidden;\n}\n\n.TwoSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n  height: 100%;\n}\n\n.TwoSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: #0E6152;\n}\n\n.TwoSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.TwoSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3.instructor[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  margin-left: 0.5em;\n  font-weight: 300;\n  font-size: 0.9em;\n  width: 275px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.TwoSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3.course_name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.9em;\n  margin-top: 1em;\n  text-transform: capitalize !important;\n  margin-left: 0.5em;\n  width: 275px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.TwoSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .info-d[_ngcontent-%COMP%] {\n  padding-top: 0.9em;\n  padding-bottom: 1em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  font-size: 0.85em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .info-d[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  width: 30px;\n}\n\n.TwoSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px rgba(0, 0, 0, 0.3);\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  background: #4bb0a9;\n  position: fixed;\n  width: 55px;\n  height: 55px;\n  line-height: 55px;\n  bottom: 30px;\n  right: 30px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 50px;\n  font-size: 30px;\n  transition: 350ms ease-in;\n}\n\n.btn-add[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n\n.btn-add[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.22em auto;\n  width: 75%;\n}\n\n.btn-add[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #999999;\n}\n\n@media screen and (min-width: 0px) and (max-width: 425px) {\n  .FirstSection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding-bottom: 0.5em;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .subnav[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .subnav[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n    padding-top: 3em;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .TwoSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3.course_name[_ngcontent-%COMP%] {\n    width: 240px;\n    margin: 1em auto;\n  }\n}\n\n@media screen and (min-width: 426px) and (max-width: 600px) {\n  .FirstSection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding-bottom: 0.5em;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .subnav[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .subnav[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n    padding-top: 3em;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .TwoSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3.course_name[_ngcontent-%COMP%] {\n    width: 290px;\n    margin: 1em auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvbGVhcm5pbmctaG9tZS9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL2xlYXJuaW5nLWhvbWUvbGVhcm5pbmctaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvbGVhcm5pbmctaG9tZS9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fd2F2ZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvbGVhcm5pbmctaG9tZS9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcbGVhcm5pbmdcXGxlYXJuaW5nLWhvbWVcXGxlYXJuaW5nLWhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0ksYUFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxpSEFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSw2Q0FBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxnQ0FBQTtBQ3BDSjs7QURxQ0k7RUFDSSxnQ0FBQTtBQ25DUjs7QUR1Q0E7RUFDSSxlQUFBO0FDcENKOztBQ3BCQTs7Ozs7OztFQUFBOztBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURxQko7O0FDbkJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEb0JOOztBQ2hCSTtFQUNFLDJDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2RJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEZ0JOOztBQ2JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEZU47O0FDWEU7RUFDRSwyQkFBQTtBRGNKOztBQ1hFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRGNKOztBQ1hFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRGNKOztBQ1pJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QURjTjs7QUNWRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QURhSjs7QUNWRTtFQUNFLGNBQUE7QURhSjs7QUNWRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QURhSjs7QUUzSEE7RUFFSSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FGNkhKOztBRXpISTtFQUNJLGVBQUE7RUFDQSxrQ0hQRTtFR1FGLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRjRIUjs7QUUxSEk7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FGNEhSOztBRTFIUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBRjRIWjs7QUUzSFk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FGNkhoQjs7QUUzSFk7RUFDSSxrQ0gvQk47RUdnQ00saUJBQUE7RUFDQSxZQUFBO0FGNkhoQjs7QUUxSFE7RUFDSSxpQkFBQTtFQUNBLGtDSHRDRjtFR3VDRSxnQkFBQTtBRjRIWjs7QUUzSFk7RUFDSSxjSDlCQTtBQzJKaEI7O0FFdkhBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FGMEhKOztBRXpISTtFQUNJLGdCQUFBO0FGMkhSOztBRXpISTtFQUNJLGtDSHRERTtFR3VERixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNIbENJO0FDNkpaOztBRXpIUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FGMkhaOztBRXpIWTtFQUNJLGdCQUFBO0VBQ0EsY0h0REw7RUd1REssZ0JBQUE7QUYySGhCOztBRXJISTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUZ1SFI7O0FFdEhRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRndIWjs7QUV2SFk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUZ5SGhCOztBRXRIUTtFQUNJLGNIakVBO0FDeUxaOztBRXZIWTtFQUNJLGtDSDlGTjtBQ3VOVjs7QUV4SGdCO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUYwSHBCOztBRXhIZ0I7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FGMEhwQjs7QUV0SFE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0g1SEY7RUc2SEUsZ0JBQUE7RUFDQSxpQkFBQTtBRndIWjs7QUV2SFk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUZ5SGhCOztBRXJIUTtFQUNJLHlCQUFBO0VBQ0EsaURBQUE7QUZ1SFo7O0FFakhBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0dIN0llO0VHOElmLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FGb0hKOztBRWxISTtFQUNHLGNBQUE7RUFDQSxZQUFBO0FGb0hQOztBRW5ITztFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUZxSFg7O0FFakhJO0VBQ0kseUJBQUE7RUFDQSxzQ0FBQTtBRm1IUjs7QUU5R0E7RUFFUTtJQUNJLHFCQUFBO0VGZ0hWO0VFOUdNO0lBQ0ksY0FBQTtJQUNBLFlBQUE7RUZnSFY7RUUvR1U7SUFDSSxZQUFBO0VGaUhkO0VFOUdNO0lBQ0ksZ0JBQUE7RUZnSFY7RUUvR1U7SUFDSSxjQUFBO0VGaUhkOztFRTNHVTtJQUNJLFVBQUE7RUY4R2Q7RUU3R2M7SUFDSSxrQkFBQTtFRitHbEI7RUU3R3NCO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0VGK0cxQjtBQUNGOztBRXZHQTtFQUVRO0lBQ0kscUJBQUE7RUZ3R1Y7RUV0R007SUFDSSxjQUFBO0lBQ0EsWUFBQTtFRndHVjtFRXZHVTtJQUNJLFlBQUE7RUZ5R2Q7RUV0R007SUFDSSxnQkFBQTtFRndHVjtFRXZHVTtJQUNJLGNBQUE7RUZ5R2Q7O0VFbkdVO0lBQ0ksVUFBQTtFRnNHZDtFRXJHYztJQUNJLGtCQUFBO0VGdUdsQjtFRXJHc0I7SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7RUZ1RzFCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWFybmluZy9sZWFybmluZy1ob21lL2xlYXJuaW5nLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJGJhci13aWR0aDogMjVweDtcclxuJGJhci1oZWlnaHQ6IDMuMXB4O1xyXG4kYmFyLXNwYWNpbmc6IDdweDtcclxuXHJcbiRNb250c2VycmF0OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRNdWxpc2g6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kUG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuJGJvcmRlci1pbnB1dDogI2M5ZDNkZDtcclxuXHJcbiRzaGFkb3ctbmF2OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1idG46IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1zbWFsbDogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kc2hhZG93LWNvbnRhaW5lci1zbWFsbDogMCAxMHB4IDIwcHggMCByZ2IoMCAwIDAgLyA1JSk7XHJcbiRzaGFkb3ctY29udGFpbmVyOiAwIDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDFweCAxcHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4kc2hhZG93LW5hdi1zbWFsbDogMCAycHggMzBweCAwIHJnYigyMDcgMjA3IDIwNyAvIDUwJSk7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzBFNjE1MjtcclxuJGdyZXktODAwOiAjNDI0MjQyO1xyXG4kZ3JleS03MDA6ICMyOTMyM2Q7XHJcbiRncmV5LTYwMDogIzc5OGRhMztcclxuJGdyZXktNTAwOiAjMEU2MTUyO1xyXG4kZ3JleS00MDA6ICM5ZmFmYzE7XHJcbiRncmV5LTMwMDogIzMzMzMzMztcclxuJGdyZXktMjAwOiAjNGQ0ZDRkO1xyXG4kZ3JleS0xMDA6ICM2NjY2NjY7XHJcbiRwaW5rLWZpcnN0OiAjZTFkOWQ1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS0yOiAjZWRmMGY0O1xyXG5cclxuJGJsYWNrLTgwMDogIzAwMDtcclxuJGJsYWNrLTcwMDogIzE0MTQxNDtcclxuJGJsYWNrLTYwMDogIzFiMWIxYjtcclxuJGJsYWNrLTUwMDogIzBFNjE1MjtcclxuXHJcblxyXG4udmlzaWJsZS1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2hhZG93LW5hdiB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLnNoYWRvdy1zbWFsbCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50ZXh0LW5vbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIudmlzaWJsZS1zbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGFkb3ctbmF2IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zaGFkb3ctc21hbGwge1xuICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50ZXh0LW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi50ZXh0LW5vbmU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIVxuICogV2F2ZXMgdjAuNi4wXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLndhdmVzLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9YnV0dG9uXSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXJlc2V0XSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3QgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLndhdmVzLW5vdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xufVxuXG4ud2F2ZXMtaW5wdXQtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLndhdmVzLWlucHV0LXdyYXBwZXIgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG59XG5cbi53YXZlcy1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICB6LWluZGV4OiAtMTtcbn1cblxuaW5wdXQ6Zm9jdXMsIGlucHV0LmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLkZpcnN0U2VjdGlvbiBoMiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDMuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uRmlyc3RTZWN0aW9uIC5zdWJuYXYge1xuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gIG1hcmdpbi10b3A6IDVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5GaXJzdFNlY3Rpb24gLnN1Ym5hdiAuc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZTdlNztcbn1cbi5GaXJzdFNlY3Rpb24gLnN1Ym5hdiAuc2VhcmNoIGltZyB7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLkZpcnN0U2VjdGlvbiAuc3VibmF2IC5zZWFyY2ggaW5wdXQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBib3JkZXI6IG5vbmU7XG59XG4uRmlyc3RTZWN0aW9uIC5zdWJuYXYgLm9yZGVyIHtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5GaXJzdFNlY3Rpb24gLnN1Ym5hdiAub3JkZXIgc3Ryb25nIHtcbiAgY29sb3I6ICMwRTYxNTI7XG59XG5cbi5Ud29TZWN0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDVlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uVHdvU2VjdGlvbiBociB7XG4gIHBhZGRpbmctdG9wOiAyZW07XG59XG4uVHdvU2VjdGlvbiAuaXRlbS1ub3QtZm91bmQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDVlbTtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzFiMWIxYjtcbn1cbi5Ud29TZWN0aW9uIC5pdGVtLW5vdC1mb3VuZCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5Ud29TZWN0aW9uIC5pdGVtLW5vdC1mb3VuZCBzcGFuLmluZm8taXRlbSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMEU2MTUyO1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuLlR3b1NlY3Rpb24gYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbn1cbi5Ud29TZWN0aW9uIGEgLmltYWdlIHtcbiAgaGVpZ2h0OiAyNDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uVHdvU2VjdGlvbiBhIC5pbWFnZSBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uVHdvU2VjdGlvbiBhIC50ZXh0IHtcbiAgY29sb3I6ICMwRTYxNTI7XG59XG4uVHdvU2VjdGlvbiBhIC50ZXh0IGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuLlR3b1NlY3Rpb24gYSAudGV4dCBoMy5pbnN0cnVjdG9yIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHdpZHRoOiAyNzVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uVHdvU2VjdGlvbiBhIC50ZXh0IGgzLmNvdXJzZV9uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIHdpZHRoOiAyNzVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uVHdvU2VjdGlvbiBhIC5pbmZvLWQge1xuICBwYWRkaW5nLXRvcDogMC45ZW07XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xufVxuLlR3b1NlY3Rpb24gYSAuaW5mby1kIGltZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDMwcHg7XG59XG4uVHdvU2VjdGlvbiBhOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmJ0bi1hZGQge1xuICBiYWNrZ3JvdW5kOiAjNGJiMGE5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbn1cbi5idG4tYWRkIGRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG4uYnRuLWFkZCBkaXYgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMC4yMmVtIGF1dG87XG4gIHdpZHRoOiA3NSU7XG59XG4uYnRuLWFkZDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjOTk5OTk5O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuRmlyc3RTZWN0aW9uIGgyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAuc3VibmF2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAuc3VibmF2IC5zZWFyY2gge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAuRmlyc3RTZWN0aW9uIC5vcmRlciB7XG4gICAgcGFkZGluZy10b3A6IDNlbTtcbiAgfVxuICAuRmlyc3RTZWN0aW9uIC5vcmRlciBzdHJvbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLlR3b1NlY3Rpb24gLmNvbnRhaW5lciBhIHtcbiAgICB3aWR0aDogODUlO1xuICB9XG4gIC5Ud29TZWN0aW9uIC5jb250YWluZXIgYSAudGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5Ud29TZWN0aW9uIC5jb250YWluZXIgYSAudGV4dCBoMy5jb3Vyc2VfbmFtZSB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNnB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLkZpcnN0U2VjdGlvbiBoMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICB9XG4gIC5GaXJzdFNlY3Rpb24gLnN1Ym5hdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5GaXJzdFNlY3Rpb24gLnN1Ym5hdiAuc2VhcmNoIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAub3JkZXIge1xuICAgIHBhZGRpbmctdG9wOiAzZW07XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAub3JkZXIgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5Ud29TZWN0aW9uIC5jb250YWluZXIgYSB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICAuVHdvU2VjdGlvbiAuY29udGFpbmVyIGEgLnRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuVHdvU2VjdGlvbiAuY29udGFpbmVyIGEgLnRleHQgaDMuY291cnNlX25hbWUge1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xuICB9XG59IiwiXHJcbi8qIVxyXG4gKiBXYXZlcyB2MC42LjBcclxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5cclxuIC53YXZlcy1lZmZlY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2Utb3V0O1xyXG4gIFxyXG4gICAgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDotMTBweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICBcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcclxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIFdhdmVzIENvbG9yc1xyXG4gICAgJi53YXZlcy1saWdodCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy15ZWxsb3cgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1vcmFuZ2UgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNzApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gU3R5bGUgaW5wdXQgYnV0dG9uIGJ1Zy5cclxuICAgIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJyZXNldFwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW1nIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLW5vdHJhbnNpdGlvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lICN7XCIhaW1wb3J0YW50XCJ9O1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtY2lyY2xlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWlucHV0LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIFxyXG4gICAgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtY2lyY2xlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyLjVlbTtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogRmlyZWZveCBCdWc6IGxpbmsgbm90IHRyaWdnZXJlZCAqL1xyXG4gIC53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9IiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL19pbmRleCc7XHJcblxyXG5pbnB1dDpmb2N1cywgaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuXHJcbiAgICBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5GaXJzdFNlY3Rpb24ge1xyXG4gICAgaDIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDMuNWVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zdWJuYXYge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzNSwgMjMxLCAyMzEpO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm9yZGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuOTVlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uVHdvU2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBociB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgIH1cclxuICAgIC5pdGVtLW5vdC1mb3VuZCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNWVtO1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgY29sb3I6ICRibGFjay02MDA7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEuNWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICAgICAgICAgJi5pbmZvLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleS01MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjQ1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrLTUwMDtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgJi5pbnN0cnVjdG9yIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuY291cnNlX25hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5mby1kIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IC45ZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMzAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWFkZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGJiMGE5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTVweDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1jb250YWluZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICBpbWcge1xyXG4gICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgIG1hcmdpbjogLjIyZW0gYXV0bztcclxuICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4IHJnYigxNTMsIDE1MywgMTUzKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAuRmlyc3RTZWN0aW9uIHtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VibmF2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm9yZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDNlbTtcclxuICAgICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLlR3b1NlY3Rpb24ge1xyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5jb3Vyc2VfbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuRmlyc3RTZWN0aW9uIHtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VibmF2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm9yZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDNlbTtcclxuICAgICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLlR3b1NlY3Rpb24ge1xyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5jb3Vyc2VfbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-learning-home',
                templateUrl: './learning-home.component.html',
                styleUrls: ['./learning-home.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_courses_services__WEBPACK_IMPORTED_MODULE_2__["CoursesServices"]]
            }]
    }], function () { return [{ type: _services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"] }, { type: _services_courses_services__WEBPACK_IMPORTED_MODULE_2__["CoursesServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/learning-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/learning/learning-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LearningRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningRoutingModule", function() { return LearningRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_content_add_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-content/add-content.component */ "./src/app/pages/learning/add-content/add-content.component.ts");
/* harmony import */ var _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-course/add-course.component */ "./src/app/pages/learning/add-course/add-course.component.ts");
/* harmony import */ var _add_module_add_module_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-module/add-module.component */ "./src/app/pages/learning/add-module/add-module.component.ts");
/* harmony import */ var _add_pdf_add_pdf_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-pdf/add-pdf.component */ "./src/app/pages/learning/add-pdf/add-pdf.component.ts");
/* harmony import */ var _add_quiz_add_quiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-quiz/add-quiz.component */ "./src/app/pages/learning/add-quiz/add-quiz.component.ts");
/* harmony import */ var _add_video_add_video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-video/add-video.component */ "./src/app/pages/learning/add-video/add-video.component.ts");
/* harmony import */ var _content_learning_content_learning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-learning/content-learning.component */ "./src/app/pages/learning/content-learning/content-learning.component.ts");
/* harmony import */ var _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./learning-home/learning-home.component */ "./src/app/pages/learning/learning-home/learning-home.component.ts");
/* harmony import */ var _learning_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./learning.component */ "./src/app/pages/learning/learning.component.ts");
/* harmony import */ var _modules_learning_modules_learning_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules-learning/modules-learning.component */ "./src/app/pages/learning/modules-learning/modules-learning.component.ts");
/* harmony import */ var _pdf_learning_pdf_learning_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pdf-learning/pdf-learning.component */ "./src/app/pages/learning/pdf-learning/pdf-learning.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/pages/learning/quiz/quiz.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/pages/learning/signin/signin.component.ts");
/* harmony import */ var _videos_learning_videos_learning_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./videos-learning/videos-learning.component */ "./src/app/pages/learning/videos-learning/videos-learning.component.ts");
/* harmony import */ var _viewpdf_viewpdf_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./viewpdf/viewpdf.component */ "./src/app/pages/learning/viewpdf/viewpdf.component.ts");
/* harmony import */ var _viewvideo_viewvideo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./viewvideo/viewvideo.component */ "./src/app/pages/learning/viewvideo/viewvideo.component.ts");




















const routes = [
    { path: '', component: _learning_component__WEBPACK_IMPORTED_MODULE_10__["LearningComponent"] },
    { path: 'add-course', component: _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_3__["AddCourseComponent"] },
    { path: 'add-content', component: _add_content_add_content_component__WEBPACK_IMPORTED_MODULE_2__["AddContentComponent"] },
    { path: 'home', component: _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_9__["LearningHomeComponent"] },
    { path: 'sign-in', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__["SigninComponent"] },
    { path: 'add-course', component: _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_3__["AddCourseComponent"] },
    { path: 'course/:id', component: _modules_learning_modules_learning_component__WEBPACK_IMPORTED_MODULE_11__["ModulesLearningComponent"] },
    { path: 'course/:id/add-module/:course', component: _add_module_add_module_component__WEBPACK_IMPORTED_MODULE_4__["AddModuleComponent"] },
    { path: 'course/:ids/content/:id/add-content/:module', component: _add_content_add_content_component__WEBPACK_IMPORTED_MODULE_2__["AddContentComponent"] },
    { path: 'course/:id/content/:id', component: _content_learning_content_learning_component__WEBPACK_IMPORTED_MODULE_8__["ContentLearningComponent"] },
    { path: 'course/:id/content/:id/pdfs/:ids', component: _pdf_learning_pdf_learning_component__WEBPACK_IMPORTED_MODULE_12__["PdfLearningComponent"] },
    { path: 'course/:id/content/:id/pdfs/:id/add-pdf/:idPDF', component: _add_pdf_add_pdf_component__WEBPACK_IMPORTED_MODULE_5__["AddPdfComponent"] },
    { path: 'course/:id/content/:id/pdfs/:id/view/:file', component: _viewpdf_viewpdf_component__WEBPACK_IMPORTED_MODULE_16__["ViewpdfComponent"] },
    { path: 'course/:id/content/:id/videos/:ids', component: _videos_learning_videos_learning_component__WEBPACK_IMPORTED_MODULE_15__["VideosLearningComponent"] },
    { path: 'course/:id/content/:id/videos/:id/view/:file', component: _viewvideo_viewvideo_component__WEBPACK_IMPORTED_MODULE_17__["ViewvideoComponent"] },
    { path: 'course/:id/content/:id/videos/:id/add-video/:idVideo', component: _add_video_add_video_component__WEBPACK_IMPORTED_MODULE_7__["AddVideoComponent"] },
    { path: 'course/:id/content/:id/quizzes/:ids', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__["QuizComponent"] },
    { path: 'course/:id/content/:id/quizzes/:id/add-quiz/:idQuiz', component: _add_quiz_add_quiz_component__WEBPACK_IMPORTED_MODULE_6__["AddQuizComponent"] }
];
class LearningRoutingModule {
}
LearningRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LearningRoutingModule });
LearningRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LearningRoutingModule_Factory(t) { return new (t || LearningRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LearningRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/learning/learning.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/learning/learning.component.ts ***!
  \******************************************************/
/*! exports provided: LearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningComponent", function() { return LearningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_users_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/users_model */ "./src/app/models/users_model.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./learning-home/learning-home.component */ "./src/app/pages/learning/learning-home/learning-home.component.ts");










function LearningComponent_div_0_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El correo electronico es obligatorio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LearningComponent_div_0_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La contrase\u00F1a es obligatorio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LearningComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ERROR:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.errorMessage, " ");
} }
const _c0 = function () { return ["sign-in"]; };
function LearningComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LearningComponent_div_0_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LearningComponent_div_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.users.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LearningComponent_div_0_span_14_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LearningComponent_div_0_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.users.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LearningComponent_div_0_span_19_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Iniciar sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LearningComponent_div_0_div_22_Template, 4, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00BFA\u00FAn no tienes cuenta? Registra una cuenta facilmente haciendo clic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "aqu\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.users.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.errors == null ? null : _r3.errors.required) && _r3.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.users.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.required) && _r5.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
} }
function LearningComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-learning-home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LearningComponent {
    constructor(Title, usersservices, route, router) {
        this.Title = Title;
        this.usersservices = usersservices;
        this.route = route;
        this.router = router;
        this.Title.setTitle('Iniciar sesión - Centli');
        this.users = new _models_users_model__WEBPACK_IMPORTED_MODULE_1__["Users"]('', '', '', '', 'ROLE_USER', '', '', '', '', '');
    }
    ngOnInit() {
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
    }
    onSubmit(f) {
        console.log("---> Realizando petición HTTP al servidor...");
        this.usersservices.loginAccount(this.users).subscribe(response => {
            console.log("THIS USERS", this.users);
            let identity = response.INFO_ACCOUNT;
            this.identity = identity;
            console.log("---> Creando la identidad del usuario...");
            console.log(identity);
            if (!this.identity._id) {
                alert("Se encontrarón problemas para generar la IDENTIDAD del usuario");
                console.log("---> Hubo un problema al generar la identidad del usuario.");
            }
            else {
                localStorage.setItem('identity', JSON.stringify(identity));
                this.usersservices.loginAccount(this.users, 'true').subscribe(response => {
                    let token = response.token;
                    this.token = token;
                    console.log("---> Token creado con exito.");
                    if (this.token.length <= 0) {
                        alert("Se encontrarón problemas para generar el TOKEN del usuario");
                        console.log("---> Hubo un problema al generar el token del usuario.");
                    }
                    else {
                        location.reload();
                        this.router.navigate(['/inicio']);
                        localStorage.setItem('token', token);
                    }
                }, error => {
                    var errorMessage = error;
                    if (errorMessage != null) {
                        this.errorMessage = error.error.message;
                        console.log(error);
                    }
                });
            }
        }, error => {
            var errorMessage = error;
            if (errorMessage != null) {
                this.errorMessage = error.error.message;
                console.log(error);
            }
        });
    }
}
LearningComponent.ɵfac = function LearningComponent_Factory(t) { return new (t || LearningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LearningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LearningComponent, selectors: [["app-learning"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]])], decls: 3, vars: 2, consts: [[4, "ngIf"], [1, "clearfix"], [1, "Login"], [1, "FirstSection", "d-lg-flex", "justify-content-lg-around"], [1, "image"], ["src", "../../../assets/file.jpg", "alt", "Login"], [1, "text"], ["src", "../../../assets/logo.png", "alt", "Logo", 1, "logo"], ["width", "50%"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form__body"], ["src", "../../../assets/svg/email.svg", "alt", "Email"], ["type", "email", "placeholder", "Direcci\u00F3n de correo electr\u00F3nico", "required", "", "name", "email", "id", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "text-danger FFP", 4, "ngIf"], ["src", "../../../assets/svg/password.svg", "alt", "Password"], ["type", "password", "placeholder", "Contrase\u00F1a", "required", "", "name", "password", "id", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "submit", 1, "btn", 3, "disabled"], ["class", "alert alert-danger text-center pb-3 col-8 d-block m-auto small-shadow FFP", 4, "ngIf"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [1, "text-danger", "FFP"], [1, "alert", "alert-danger", "text-center", "pb-3", "col-8", "d-block", "m-auto", "small-shadow", "FFP"]], template: function LearningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LearningComponent_div_0_Template, 27, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LearningComponent_div_2_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_7__["LearningHomeComponent"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-top: 3em;\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  width: 200px;\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0 auto 0 auto;\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 60%;\n  display: block;\n  margin: auto;\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form__body[_ngcontent-%COMP%] {\n  padding: 1px;\n  margin-top: 2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #d1d1d1;\n  border-radius: 3px;\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form__body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n  padding-right: 5px;\n  padding-left: 4px;\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form__body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n  font-family: \"Poppins\", sans-serif;\n  border: none;\n  font-size: 0.9em;\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form__body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  -moz-transition: 500ms ease-in;\n  transition: 500ms ease-in;\n  transform: translateX(0);\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form__body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  transition: 500ms ease-in;\n  transform: translateX(0);\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form__body[_ngcontent-%COMP%]:focus-within   input[_ngcontent-%COMP%]::-moz-placeholder {\n  -moz-transition: 500ms ease-in;\n  transition: 500ms ease-in;\n  transform: translateX(-350px);\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form__body[_ngcontent-%COMP%]:focus-within   input[_ngcontent-%COMP%]::placeholder {\n  transition: 500ms ease-in;\n  transform: translateX(-350px);\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto auto 2em auto;\n  background-color: #0E6253;\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  margin-top: 2.5em;\n  transition: 390ms ease-in;\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transition: 390ms ease-in;\n  box-shadow: 0px 13px 24px -7px #0E6152;\n}\n\n.Login[_ngcontent-%COMP%]   .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #0E6152;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  text-align: center;\n  font-size: 0.8em;\n  width: 75%;\n  margin: 2em auto;\n}\n\n@media screen and (min-width: 0px) and (max-width: 425px) {\n  .FirstSection[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n    width: 100% !important;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form__body[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 426px) and (max-width: 600px) {\n  .FirstSection[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n    width: 100% !important;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 75% !important;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form__body[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: auto;\n  }\n}\n\n@media screen and (min-width: 601px) and (max-width: 768px) {\n  .FirstSection[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n    width: 100% !important;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form__body[_ngcontent-%COMP%] {\n    width: 60% !important;\n    margin: auto;\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 991px) {\n  .FirstSection[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n    width: 100% !important;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .FirstSection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form__body[_ngcontent-%COMP%] {\n    width: 50% !important;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9sZWFybmluZy9sZWFybmluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxcc3R5bGVzXFxfX3dhdmVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxsZWFybmluZ1xcbGVhcm5pbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0ksYUFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxpSEFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSw2Q0FBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxnQ0FBQTtBQ3BDSjs7QURxQ0k7RUFDSSxnQ0FBQTtBQ25DUjs7QUR1Q0E7RUFDSSxlQUFBO0FDcENKOztBQ3BCQTs7Ozs7OztFQUFBOztBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURxQko7O0FDbkJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEb0JOOztBQ2hCSTtFQUNFLDJDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2RJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEZ0JOOztBQ2JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEZU47O0FDWEU7RUFDRSwyQkFBQTtBRGNKOztBQ1hFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRGNKOztBQ1hFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRGNKOztBQ1pJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QURjTjs7QUNWRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QURhSjs7QUNWRTtFQUNFLGNBQUE7QURhSjs7QUNWRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QURhSjs7QUV6SFE7RUFDSSxVQUFBO0FGNEhaOztBRTNIWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FGNkhoQjs7QUUxSFE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUY0SFo7O0FFM0hZO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FGNkhoQjs7QUUxSFk7RUFDSSxxQkFBQTtBRjRIaEI7O0FFekhZO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FGMkhoQjs7QUV6SGdCO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0h4Qkw7QUNtSmY7O0FFekhvQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FGMkh4Qjs7QUV4SG9CO0VBQ0ksd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtDSDVDZDtFRzZDYyxZQUFBO0VBQ0EsZ0JBQUE7QUYwSHhCOztBRXhId0I7RUFDSSw4QkFBQTtFQUFBLHlCQUFBO0VBQ0Esd0JBQUE7QUYwSDVCOztBRTVId0I7RUFDSSx5QkFBQTtFQUNBLHdCQUFBO0FGMEg1Qjs7QUVuSDRCO0VBQ0ksOEJBQUE7RUFBQSx5QkFBQTtFQUNBLDZCQUFBO0FGcUhoQzs7QUV2SDRCO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtBRnFIaEM7O0FFL0dnQjtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDSHRFVjtFR3VFVSxpQkFBQTtFQUNBLHlCQUFBO0FGaUhwQjs7QUVoSG9CO0VBQ0kseUJBQUE7RUFDQSxzQ0FBQTtBRmtIeEI7O0FFOUdZO0VBQ0ksY0hqRUw7RUdrRUssa0NIakZOO0VHa0ZNLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBRmdIaEI7O0FFekdBO0VBRVE7SUFDSSxhQUFBO0VGMkdWO0VFekdNO0lBQ0kseUJBQUE7SUFDQSxzQkFBQTtFRjJHVjtFRTFHVTtJQUNJLHFCQUFBO0VGNEdkO0VFM0djO0lBQ0ksV0FBQTtFRjZHbEI7QUFDRjs7QUV2R0E7RUFFUTtJQUNJLGFBQUE7RUZ3R1Y7RUV0R007SUFDSSx5QkFBQTtJQUNBLHNCQUFBO0VGd0dWO0VFdkdVO0lBQ0kscUJBQUE7RUZ5R2Q7RUV4R2M7SUFDSSxVQUFBO0lBQ0EsWUFBQTtFRjBHbEI7QUFDRjs7QUVwR0E7RUFFUTtJQUNJLGFBQUE7RUZxR1Y7RUVuR007SUFDSSx5QkFBQTtJQUNBLHNCQUFBO0VGcUdWO0VFcEdVO0lBQ0ksc0JBQUE7RUZzR2Q7RUVyR2M7SUFDSSxxQkFBQTtJQUNBLFlBQUE7RUZ1R2xCO0FBQ0Y7O0FFakdBO0VBRVE7SUFDSSxhQUFBO0VGa0dWO0VFaEdNO0lBQ0kseUJBQUE7SUFDQSxzQkFBQTtFRmtHVjtFRWpHVTtJQUNJLHNCQUFBO0VGbUdkO0VFbEdjO0lBQ0kscUJBQUE7SUFDQSxZQUFBO0VGb0dsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvbGVhcm5pbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJGJhci13aWR0aDogMjVweDtcclxuJGJhci1oZWlnaHQ6IDMuMXB4O1xyXG4kYmFyLXNwYWNpbmc6IDdweDtcclxuXHJcbiRNb250c2VycmF0OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRNdWxpc2g6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kUG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuJGJvcmRlci1pbnB1dDogI2M5ZDNkZDtcclxuXHJcbiRzaGFkb3ctbmF2OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1idG46IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1zbWFsbDogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kc2hhZG93LWNvbnRhaW5lci1zbWFsbDogMCAxMHB4IDIwcHggMCByZ2IoMCAwIDAgLyA1JSk7XHJcbiRzaGFkb3ctY29udGFpbmVyOiAwIDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDFweCAxcHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4kc2hhZG93LW5hdi1zbWFsbDogMCAycHggMzBweCAwIHJnYigyMDcgMjA3IDIwNyAvIDUwJSk7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzBFNjE1MjtcclxuJGdyZXktODAwOiAjNDI0MjQyO1xyXG4kZ3JleS03MDA6ICMyOTMyM2Q7XHJcbiRncmV5LTYwMDogIzc5OGRhMztcclxuJGdyZXktNTAwOiAjMEU2MTUyO1xyXG4kZ3JleS00MDA6ICM5ZmFmYzE7XHJcbiRncmV5LTMwMDogIzMzMzMzMztcclxuJGdyZXktMjAwOiAjNGQ0ZDRkO1xyXG4kZ3JleS0xMDA6ICM2NjY2NjY7XHJcbiRwaW5rLWZpcnN0OiAjZTFkOWQ1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS0yOiAjZWRmMGY0O1xyXG5cclxuJGJsYWNrLTgwMDogIzAwMDtcclxuJGJsYWNrLTcwMDogIzE0MTQxNDtcclxuJGJsYWNrLTYwMDogIzFiMWIxYjtcclxuJGJsYWNrLTUwMDogIzBFNjE1MjtcclxuXHJcblxyXG4udmlzaWJsZS1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2hhZG93LW5hdiB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLnNoYWRvdy1zbWFsbCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50ZXh0LW5vbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIudmlzaWJsZS1zbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGFkb3ctbmF2IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zaGFkb3ctc21hbGwge1xuICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50ZXh0LW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi50ZXh0LW5vbmU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIVxuICogV2F2ZXMgdjAuNi4wXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLndhdmVzLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9YnV0dG9uXSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXJlc2V0XSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3QgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLndhdmVzLW5vdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xufVxuXG4ud2F2ZXMtaW5wdXQtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLndhdmVzLWlucHV0LXdyYXBwZXIgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG59XG5cbi53YXZlcy1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICB6LWluZGV4OiAtMTtcbn1cblxuLkxvZ2luIC5GaXJzdFNlY3Rpb24gLmltYWdlIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5Mb2dpbiAuRmlyc3RTZWN0aW9uIC5pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5Mb2dpbiAuRmlyc3RTZWN0aW9uIC50ZXh0IHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZy10b3A6IDNlbTtcbn1cbi5Mb2dpbiAuRmlyc3RTZWN0aW9uIC50ZXh0IC5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xufVxuLkxvZ2luIC5GaXJzdFNlY3Rpb24gLnRleHQgaHIge1xuICBtYXJnaW46IDAgYXV0byAwIGF1dG87XG59XG4uTG9naW4gLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5Mb2dpbiAuRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gZGl2LmZvcm1fX2JvZHkge1xuICBwYWRkaW5nOiAxcHg7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQxZDE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLkxvZ2luIC5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBkaXYuZm9ybV9fYm9keSBpbWcge1xuICB3aWR0aDogMzVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi5Mb2dpbiAuRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gZGl2LmZvcm1fX2JvZHkgaW5wdXQge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuLkxvZ2luIC5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBkaXYuZm9ybV9fYm9keSBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICB0cmFuc2l0aW9uOiA1MDBtcyBlYXNlLWluO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG4uTG9naW4gLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIGRpdi5mb3JtX19ib2R5OmZvY3VzLXdpdGhpbiBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICB0cmFuc2l0aW9uOiA1MDBtcyBlYXNlLWluO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM1MHB4KTtcbn1cbi5Mb2dpbiAuRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0byBhdXRvIDJlbSBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEU2MjUzO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAyLjVlbTtcbiAgdHJhbnNpdGlvbjogMzkwbXMgZWFzZS1pbjtcbn1cbi5Mb2dpbiAuRmlyc3RTZWN0aW9uIC50ZXh0IGZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMzkwbXMgZWFzZS1pbjtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICMwRTYxNTI7XG59XG4uTG9naW4gLkZpcnN0U2VjdGlvbiAudGV4dCBwIHtcbiAgY29sb3I6ICMwRTYxNTI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDJlbSBhdXRvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuRmlyc3RTZWN0aW9uIC5pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuRmlyc3RTZWN0aW9uIC50ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHtcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIGRpdi5mb3JtX19ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuRmlyc3RTZWN0aW9uIC5pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuRmlyc3RTZWN0aW9uIC50ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHtcbiAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIGRpdi5mb3JtX19ib2R5IHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuRmlyc3RTZWN0aW9uIC5pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuRmlyc3RTZWN0aW9uIC50ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBkaXYuZm9ybV9fYm9keSB7XG4gICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuRmlyc3RTZWN0aW9uIC5pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuRmlyc3RTZWN0aW9uIC50ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkZpcnN0U2VjdGlvbiAudGV4dCBmb3JtIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5GaXJzdFNlY3Rpb24gLnRleHQgZm9ybSBkaXYuZm9ybV9fYm9keSB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufSIsIlxyXG4vKiFcclxuICogV2F2ZXMgdjAuNi4wXHJcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuXHJcbiAud2F2ZXMtZWZmZWN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLW91dDtcclxuICBcclxuICAgIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6LTEwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgXHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBXYXZlcyBDb2xvcnNcclxuICAgICYud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcwKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIFN0eWxlIGlucHV0IGJ1dHRvbiBidWcuXHJcbiAgICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwicmVzZXRcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1ub3RyYW5zaXRpb24ge1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZSAje1wiIWltcG9ydGFudFwifTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1pbnB1dC13cmFwcGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBcclxuICAgIC53YXZlcy1idXR0b24taW5wdXQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMi41ZW07XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cclxuICAud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfSIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9faW5kZXguc2Nzcyc7XHJcblxyXG4uTG9naW4ge1xyXG4gICAgLkZpcnN0U2VjdGlvbiB7XHJcbiAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzZW07XHJcbiAgICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkaXYuZm9ybV9fYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwOSwgMjA5LCAyMDkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93LXNtYWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6Zm9jdXMtd2l0aGluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDUwMG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNTBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0byAyZW0gYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEU2MjUzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzOTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzOTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmV5LTUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyZW0gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAuRmlyc3RTZWN0aW9uIHtcclxuICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZGl2LmZvcm1fX2JvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuRmlyc3RTZWN0aW9uIHtcclxuICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NSUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZGl2LmZvcm1fX2JvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuRmlyc3RTZWN0aW9uIHtcclxuICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGRpdi5mb3JtX19ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5GaXJzdFNlY3Rpb24ge1xyXG4gICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZGl2LmZvcm1fX2JvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-learning',
                templateUrl: './learning.component.html',
                styleUrls: ['./learning.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"]]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _services_users_services__WEBPACK_IMPORTED_MODULE_2__["UsersServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/learning.filter.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/learning/learning.filter.pipe.ts ***!
  \********************************************************/
/*! exports provided: CoursesFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesFilterPipe", function() { return CoursesFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CoursesFilterPipe {
    transform(courses, searchTerm) {
        if (!courses || !searchTerm) {
            return courses;
        }
        return courses.filter(courses => courses.course_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
CoursesFilterPipe.ɵfac = function CoursesFilterPipe_Factory(t) { return new (t || CoursesFilterPipe)(); };
CoursesFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "courseFilter", type: CoursesFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'courseFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/learning/learning.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/learning/learning.module.ts ***!
  \***************************************************/
/*! exports provided: LearningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningModule", function() { return LearningModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _learning_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./learning-routing.module */ "./src/app/pages/learning/learning-routing.module.ts");
/* harmony import */ var _learning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./learning.component */ "./src/app/pages/learning/learning.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-course/add-course.component */ "./src/app/pages/learning/add-course/add-course.component.ts");
/* harmony import */ var _add_content_add_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-content/add-content.component */ "./src/app/pages/learning/add-content/add-content.component.ts");
/* harmony import */ var _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./learning-home/learning-home.component */ "./src/app/pages/learning/learning-home/learning-home.component.ts");
/* harmony import */ var _learning_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./learning.filter.pipe */ "./src/app/pages/learning/learning.filter.pipe.ts");
/* harmony import */ var _modules_learning_modules_learning_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules-learning/modules-learning.component */ "./src/app/pages/learning/modules-learning/modules-learning.component.ts");
/* harmony import */ var _content_learning_content_learning_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content-learning/content-learning.component */ "./src/app/pages/learning/content-learning/content-learning.component.ts");
/* harmony import */ var _add_module_add_module_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-module/add-module.component */ "./src/app/pages/learning/add-module/add-module.component.ts");
/* harmony import */ var _pdf_learning_pdf_learning_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pdf-learning/pdf-learning.component */ "./src/app/pages/learning/pdf-learning/pdf-learning.component.ts");
/* harmony import */ var _videos_learning_videos_learning_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./videos-learning/videos-learning.component */ "./src/app/pages/learning/videos-learning/videos-learning.component.ts");
/* harmony import */ var _viewvideo_viewvideo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./viewvideo/viewvideo.component */ "./src/app/pages/learning/viewvideo/viewvideo.component.ts");
/* harmony import */ var _add_video_add_video_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-video/add-video.component */ "./src/app/pages/learning/add-video/add-video.component.ts");
/* harmony import */ var _add_pdf_add_pdf_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-pdf/add-pdf.component */ "./src/app/pages/learning/add-pdf/add-pdf.component.ts");
/* harmony import */ var _viewpdf_viewpdf_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./viewpdf/viewpdf.component */ "./src/app/pages/learning/viewpdf/viewpdf.component.ts");
/* harmony import */ var _add_quiz_add_quiz_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add-quiz/add-quiz.component */ "./src/app/pages/learning/add-quiz/add-quiz.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/pages/learning/quiz/quiz.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/pages/learning/signin/signin.component.ts");
























class LearningModule {
}
LearningModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LearningModule });
LearningModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LearningModule_Factory(t) { return new (t || LearningModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _learning_routing_module__WEBPACK_IMPORTED_MODULE_4__["LearningRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LearningModule, { declarations: [_learning_component__WEBPACK_IMPORTED_MODULE_5__["LearningComponent"],
        _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_7__["AddCourseComponent"],
        _add_content_add_content_component__WEBPACK_IMPORTED_MODULE_8__["AddContentComponent"],
        _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_9__["LearningHomeComponent"],
        _learning_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["CoursesFilterPipe"],
        _modules_learning_modules_learning_component__WEBPACK_IMPORTED_MODULE_11__["ModulesLearningComponent"],
        _content_learning_content_learning_component__WEBPACK_IMPORTED_MODULE_12__["ContentLearningComponent"],
        _add_module_add_module_component__WEBPACK_IMPORTED_MODULE_13__["AddModuleComponent"],
        _pdf_learning_pdf_learning_component__WEBPACK_IMPORTED_MODULE_14__["PdfLearningComponent"],
        _videos_learning_videos_learning_component__WEBPACK_IMPORTED_MODULE_15__["VideosLearningComponent"],
        _viewvideo_viewvideo_component__WEBPACK_IMPORTED_MODULE_16__["ViewvideoComponent"],
        _add_video_add_video_component__WEBPACK_IMPORTED_MODULE_17__["AddVideoComponent"],
        _add_pdf_add_pdf_component__WEBPACK_IMPORTED_MODULE_18__["AddPdfComponent"],
        _viewpdf_viewpdf_component__WEBPACK_IMPORTED_MODULE_19__["ViewpdfComponent"],
        _add_quiz_add_quiz_component__WEBPACK_IMPORTED_MODULE_20__["AddQuizComponent"],
        _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_21__["QuizComponent"],
        _signin_signin_component__WEBPACK_IMPORTED_MODULE_22__["SigninComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _learning_routing_module__WEBPACK_IMPORTED_MODULE_4__["LearningRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _learning_component__WEBPACK_IMPORTED_MODULE_5__["LearningComponent"],
                    _add_course_add_course_component__WEBPACK_IMPORTED_MODULE_7__["AddCourseComponent"],
                    _add_content_add_content_component__WEBPACK_IMPORTED_MODULE_8__["AddContentComponent"],
                    _learning_home_learning_home_component__WEBPACK_IMPORTED_MODULE_9__["LearningHomeComponent"],
                    _learning_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["CoursesFilterPipe"],
                    _modules_learning_modules_learning_component__WEBPACK_IMPORTED_MODULE_11__["ModulesLearningComponent"],
                    _content_learning_content_learning_component__WEBPACK_IMPORTED_MODULE_12__["ContentLearningComponent"],
                    _add_module_add_module_component__WEBPACK_IMPORTED_MODULE_13__["AddModuleComponent"],
                    _pdf_learning_pdf_learning_component__WEBPACK_IMPORTED_MODULE_14__["PdfLearningComponent"],
                    _videos_learning_videos_learning_component__WEBPACK_IMPORTED_MODULE_15__["VideosLearningComponent"],
                    _viewvideo_viewvideo_component__WEBPACK_IMPORTED_MODULE_16__["ViewvideoComponent"],
                    _add_video_add_video_component__WEBPACK_IMPORTED_MODULE_17__["AddVideoComponent"],
                    _add_pdf_add_pdf_component__WEBPACK_IMPORTED_MODULE_18__["AddPdfComponent"],
                    _viewpdf_viewpdf_component__WEBPACK_IMPORTED_MODULE_19__["ViewpdfComponent"],
                    _add_quiz_add_quiz_component__WEBPACK_IMPORTED_MODULE_20__["AddQuizComponent"],
                    _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_21__["QuizComponent"],
                    _signin_signin_component__WEBPACK_IMPORTED_MODULE_22__["SigninComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _learning_routing_module__WEBPACK_IMPORTED_MODULE_4__["LearningRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/learning/modules-learning/modules-learning.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/learning/modules-learning/modules-learning.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ModulesLearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesLearningComponent", function() { return ModulesLearningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././../../../node_modules/aos/dist/aos.js */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_courses_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/courses.services */ "./src/app/services/courses.services.ts");
/* harmony import */ var _services_modules_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/modules.services */ "./src/app/services/modules.services.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _models_courses_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/courses_model */ "./src/app/models/courses_model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");















function ModulesLearningComponent_div_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesLearningComponent_div_0_div_5_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.onUpdateConfirm(ctx_r8.course._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Editar curso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesLearningComponent_div_0_div_5_div_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.onDeleteConfirm(ctx_r10.course._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Eliminar este curso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModulesLearningComponent_div_0_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00BFEstas seguro de eliminar este producto?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesLearningComponent_div_0_div_5_div_2_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.onCancelCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " No, cancelar esta acci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesLearningComponent_div_0_div_5_div_2_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.onDeleteCourse(ctx_r13.course._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " S\u00ED, eliminar definitivamente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModulesLearningComponent_div_0_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modificar curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ModulesLearningComponent_div_0_div_5_div_3_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.onUpdateCourse(ctx_r19.course._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModulesLearningComponent_div_0_div_5_div_3_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.course.course_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModulesLearningComponent_div_0_div_5_div_3_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.course.duration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModulesLearningComponent_div_0_div_5_div_3_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r23.course.instructor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModulesLearningComponent_div_0_div_5_div_3_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.course.modules = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ModulesLearningComponent_div_0_div_5_div_3_Template_input_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.fileChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesLearningComponent_div_0_div_5_div_3_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r26.onUpdateCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancelar acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Actualizar curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r7.course.course_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.course.course_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r7.course.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.course.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r7.course.instructor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.course.instructor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r7.course.modules);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.course.modules);
} }
function ModulesLearningComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesLearningComponent_div_0_div_5_div_1_Template, 8, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModulesLearningComponent_div_0_div_5_div_2_Template, 9, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModulesLearningComponent_div_0_div_5_div_3_Template, 24, 8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.identity.role == "ROLE_ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.confirm == ctx_r3.course._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.update == ctx_r3.course._id);
} }
const _c0 = function (a1) { return ["content/", a1]; };
function ModulesLearningComponent_div_0_div_7_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const modules_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, modules_r28._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r27.url + "/get-image-product/" + modules_r28.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", modules_r28.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", modules_r28.module_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", modules_r28.module_duration, " ");
} }
function ModulesLearningComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModulesLearningComponent_div_0_div_7_a_3_Template, 13, 7, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.modules);
} }
function ModulesLearningComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "M\u00F3dulos del curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModulesLearningComponent_div_0_div_5_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ModulesLearningComponent_div_0_div_7_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.course);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.modules);
} }
const _c1 = function (a1) { return ["add-module/", a1]; };
function ModulesLearningComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r29.course._id));
} }
function ModulesLearningComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesLearningComponent_div_1_div_1_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.identity.role == "ROLE_ADMIN");
} }
function ModulesLearningComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You must log in to view the content of this platform.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ModulesLearningComponent {
    constructor(usersservices, coursesservices, moduleservices, route, router) {
        this.usersservices = usersservices;
        this.coursesservices = coursesservices;
        this.moduleservices = moduleservices;
        this.route = route;
        this.router = router;
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].url;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
        this.next_page = 1;
        this.prev_page = 1;
        this.course = new _models_courses_model__WEBPACK_IMPORTED_MODULE_6__["Courses"]('', '', '', '', '', '');
    }
    ngOnInit() {
        _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
            //once: false // "false" --> Animaciones repetidas al hacer scroll.
        });
        this.getCourses();
    }
    getCourses() {
        this.route.params.forEach((params) => {
            let id = params['id'];
            this.coursesservices.getCourse(this.token, id).subscribe(response => {
                if (!response.course) {
                    console.log('Se encontraron problemas en el servidor.');
                }
                else {
                    this.course = response.course;
                    this.moduleservices.getModules(response.course._id).subscribe(response => {
                        if (!response.modules) {
                            console.log('Se encontraron problemas en el servidor.');
                        }
                        else {
                            this.modules = response.modules;
                        }
                    }, error => {
                        console.log(error);
                    });
                }
            }, error => {
                console.log(error);
            });
        });
    }
    onCancelCourse() {
        this.confirm = null;
        document.querySelector(".TwoSection").scrollIntoView({ behavior: "smooth" });
    }
    onDeleteConfirm(id) {
        this.confirm = id;
    }
    onDeleteCourse(id) {
        this.coursesservices.deleteCourse(this.token, id).subscribe(response => {
            if (!response.courseRemoved) {
                alert("Se encontraron problemas en el servidor. ");
            }
            else if (response.courseRemoved) {
                alert("El curso se eliminó con éxito.");
                this.router.navigate(['/learning']);
            }
        }, error => {
            console.log(error);
        });
    }
    onUpdateConfirm(id) {
        this.update = id;
    }
    onUpdateCancel() {
        this.update = null;
        document.querySelector(".TwoSection").scrollIntoView({ behavior: "smooth" });
    }
    onUpdateCourse(id) {
        this.coursesservices.updateCourse(this.token, id, this.course).subscribe(response => {
            if (!response.INFO_COURSE) {
                alert("Error en el servidor");
            }
            else {
                if (!this.filesToUpload) {
                    alert("El curso se modificó con éxito, pero no se modificó la imagen.");
                    this.course = response.INFO_COURSE;
                    this.router.navigate(['/learning']);
                }
                else {
                    this.makeFileRequest(this.url + '/add-image-course/' + response.INFO_COURSE._id, [], this.filesToUpload),
                        (result) => {
                            this.course.image = result.image;
                            alert("El curso se modificó con éxito.");
                            this.alertMessage = 'El curso se modificó con éxito.';
                            this.course = response.INFO_COURSE;
                            this.router.navigate(['/learning']);
                        };
                }
            }
        }, error => {
            console.log(error);
        });
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
    makeFileRequest(url, params, files) {
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
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    }
}
ModulesLearningComponent.ɵfac = function ModulesLearningComponent_Factory(t) { return new (t || ModulesLearningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_courses_services__WEBPACK_IMPORTED_MODULE_2__["CoursesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modules_services__WEBPACK_IMPORTED_MODULE_3__["ModuleServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
ModulesLearningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModulesLearningComponent, selectors: [["app-modules-learning"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_courses_services__WEBPACK_IMPORTED_MODULE_2__["CoursesServices"], _services_modules_services__WEBPACK_IMPORTED_MODULE_3__["ModuleServices"], _services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"]])], decls: 4, vars: 3, consts: [[4, "ngIf"], [1, "clearfix"], [1, "TwoSection"], ["data-aos", "fade-down"], ["class", "ThirdSection", 4, "ngIf"], ["class", "actions d-lg-flex justify-content-lg-start", "data-aos", "fade-down", 4, "ngIf"], ["class", "secure", 4, "ngIf"], ["class", "secure-update", 4, "ngIf"], ["data-aos", "fade-down", 1, "actions", "d-lg-flex", "justify-content-lg-start"], [1, "btn", "btn-edit", "waves-effect", "waves-ripple", 3, "click"], ["src", "../../../../assets/svg/edit.svg", "alt", "Logo"], [1, "visible-sm"], ["data-aos", "fade-down", 1, "btn", "btn-delete", "waves-effect", "waves-ripple", 3, "click"], ["src", "../../../../assets/svg/trash.svg", "alt", "Logo"], [1, "secure"], [1, "buttons", "d-lg-flex", "justify-content-lg-around"], [1, "btn", "btn-cancel", "btn-primary", "waves-effect", "waves-ripple", 3, "click"], [1, "btn", "btn-deletes", "btn-danger", "waves-effect", "waves-ripple", 3, "click"], [1, "secure-update"], [1, "text-center", "mt-3"], [1, "col-12", "col-sm-9", "col-md-7", "col-lg-5", "d-block", "m-auto", 3, "ngSubmit"], ["f", "ngForm"], ["type", "text", "name", "course_name", "id", "", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["course_name", "ngModel"], ["type", "text", "name", "duration", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["duration", "ngModel"], ["type", "text", "name", "instructor", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["instructor", "ngModel"], ["type", "text", "name", "modules", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["modules", "ngModel"], ["type", "file", "name", "image", "id", "", 1, "form-control", 3, "change"], [1, "actions", "mt-3", "d-lg-flex", "justify-content-lg-around"], ["type", "reset", 1, "btn-danger", "btn", "waves-effect", "waves-ripple", 3, "click"], ["type", "submit", 1, "btn-primary", "btn", "waves-effect", "waves-ripple"], [1, "ThirdSection"], [1, "container"], [1, "row", "justify-content-around"], ["routerLinkActive", "router-link-active", "class", "p-4 mt-5 rounded text-none", "data-aos", "fade-down", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "router-link-active", "data-aos", "fade-down", 1, "p-4", "mt-5", "rounded", "text-none", 3, "routerLink"], [1, "image"], [3, "src", "alt"], [1, "text"], [1, "name_module"], [1, "name"], [1, "duration_module"], ["src", "../../../../assets/svg/time.svg", "alt", "Icon", "width", "18px"], ["routerLinkActive", "router-link-active", 1, "ThirdSection", "btn-adds", 3, "routerLink"], ["src", "../../../../assets/svg/addE.svg", "alt", "adds"], [1, "alert", "alert-danger", "w-50", "d-block", "m-auto", "text-center"], [1, "mt-5"]], template: function ModulesLearningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModulesLearningComponent_div_0_Template, 9, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesLearningComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModulesLearningComponent_div_3_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_9__["NavbarLearningComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.TwoSection[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  font-size: 3em;\n  text-align: center;\n  padding-bottom: 1em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 3em 0.8em 0 0;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  font-size: 0.95em;\n  transition: 350ms ease-in;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  padding-right: 5px;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a.btn-edit[_ngcontent-%COMP%] {\n  color: #fff;\n  display: block;\n  margin: auto;\n  background: #005670;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a.btn-edit[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 13px 24px -7px #005670;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a.btn-delete[_ngcontent-%COMP%] {\n  color: #fff;\n  display: block;\n  margin: auto;\n  background: #e4002b;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a.btn-delete[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 13px 24px -7px #e4002b;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 350ms ease-in;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%] {\n  margin-top: 1.5em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  font-size: 300;\n  color: #fff;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  transition: 380ms ease-in;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 380ms ease-in;\n  box-shadow: 0px 13px 24px -7px #7e7b7b;\n}\n\n.TwoSection[_ngcontent-%COMP%]   .secure-update[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  text-transform: uppercase;\n  padding-top: 1em;\n  font-size: 1.3em;\n}\n\n.ThirdSection[_ngcontent-%COMP%] {\n  padding-bottom: 4em;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #eeeeee;\n  margin-top: 1em;\n  background: #fff;\n  transition: 350ms ease-in;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 245px;\n  width: 100%;\n  overflow: hidden;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n  height: 100%;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: #0E6152;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding-top: 9px;\n  padding-left: 3px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  text-transform: uppercase;\n  font-size: 0.7em;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h4.name[_ngcontent-%COMP%] {\n  padding-left: 0;\n  font-weight: 500;\n}\n\n.ThirdSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px rgba(0, 0, 0, 0.3);\n}\n\n.btn-adds[_ngcontent-%COMP%] {\n  background: #4bb0a9;\n  position: fixed;\n  width: 55px;\n  height: 55px;\n  line-height: 55px;\n  bottom: 30px;\n  right: 30px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 50px;\n  font-size: 1px;\n  transition: 350ms ease-in;\n}\n\n.btn-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  margin: 6em auto;\n}\n\n.btn-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.22em auto;\n  width: 75%;\n}\n\n.btn-adds[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #999999;\n}\n\n@media screen and (min-width: 0px) and (max-width: 425px) {\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    width: 80%;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-top: 1em;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    margin: 1em auto;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   br.visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   br.visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n@media screen and (min-width: 426px) and (max-width: 600px) {\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    width: 65%;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-top: 1em;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    margin: 1em auto;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   br.visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   br.visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n@media screen and (min-width: 601px) and (max-width: 767px) {\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    width: 55%;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-top: 1em;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    margin: 1em auto;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   br.visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 55%;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   br.visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 991px) {\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    width: 45%;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-top: 1em;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    margin: 1em auto;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   br.visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n  .TwoSection[_ngcontent-%COMP%]   .secure[_ngcontent-%COMP%]   br.visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvbW9kdWxlcy1sZWFybmluZy9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL21vZHVsZXMtbGVhcm5pbmcvbW9kdWxlcy1sZWFybmluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvbW9kdWxlcy1sZWFybmluZy9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fd2F2ZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvbW9kdWxlcy1sZWFybmluZy9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcbGVhcm5pbmdcXG1vZHVsZXMtbGVhcm5pbmdcXG1vZHVsZXMtbGVhcm5pbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0ksYUFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxpSEFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSw2Q0FBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxnQ0FBQTtBQ3BDSjs7QURxQ0k7RUFDSSxnQ0FBQTtBQ25DUjs7QUR1Q0E7RUFDSSxlQUFBO0FDcENKOztBQ3BCQTs7Ozs7OztFQUFBOztBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURxQko7O0FDbkJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEb0JOOztBQ2hCSTtFQUNFLDJDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2RJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEZ0JOOztBQ2JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEZU47O0FDWEU7RUFDRSwyQkFBQTtBRGNKOztBQ1hFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRGNKOztBQ1hFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRGNKOztBQ1pJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QURjTjs7QUNWRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QURhSjs7QUNWRTtFQUNFLGNBQUE7QURhSjs7QUNWRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QURhSjs7QUUzSEE7RUFDSSxpQkFBQTtBRjhISjs7QUU3SEk7RUFDSSxrQ0hFRTtFR0RGLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUYrSFI7O0FFN0hJO0VBQ0ksZUFBQTtBRitIUjs7QUUzSFE7RUFDSSxxQkFBQTtFQUNBLCtHSE5DO0VHT0Qsa0NIWkY7RUdhRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRjZIWjs7QUUzSFk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUY2SGhCOztBRTFIWTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FGNEhoQjs7QUUzSGdCO0VBQ0ksc0NBQUE7QUY2SHBCOztBRXpIWTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FGMkhoQjs7QUUxSGdCO0VBQ0ksc0NBQUE7QUY0SHBCOztBRXhIWTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBRjBIaEI7O0FFcEhJO0VBQ0ksaUJBQUE7QUZzSFI7O0FFckhRO0VBQ0ksa0JBQUE7RUFDQSxrQ0h6REY7RUcwREUsZ0JBQUE7QUZ1SFo7O0FFcEhZO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0hoRU47RUdpRU0sZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLCtHSC9ESDtFR2dFRyx5QkFBQTtBRnNIaEI7O0FFckhnQjtFQUNJLHlCQUFBO0VBQ0Esc0NBQUE7QUZ1SHBCOztBRWhIUTtFQUNJLGtDSGhGRjtFR2lGRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUZrSFo7O0FFNUdBO0VBQ0ksbUJBQUE7QUYrR0o7O0FFNUdZO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBRjhHaEI7O0FFN0dnQjtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUYrR3BCOztBRTlHb0I7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUZnSHhCOztBRTdHZ0I7RUFDSSxjSGxGUjtBQ2lNWjs7QUU5R29CO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUZnSHhCOztBRTlHd0I7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NIdEhsQjtFR3VIa0IsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FGZ0g1Qjs7QUU5RzRCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FGZ0hoQzs7QUV6R2dCO0VBQ0kseUJBQUE7RUFDQSxpREFBQTtBRjJHcEI7O0FFcEdBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0dIN0llO0VHOElmLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FGdUdKOztBRXJHSTtFQUNHLGNBQUE7RUFDQSxnQkFBQTtBRnVHUDs7QUV0R087RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FGd0dYOztBRXBHSTtFQUNJLHlCQUFBO0VBQ0Esc0NBQUE7QUZzR1I7O0FFakdBO0VBRVE7SUFDSSxjQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUZtR1Y7RUVqR1U7SUFDSSxlQUFBO0VGbUdkO0VFaEdVO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0VGa0dkO0VFaEdVO0lBQ0ksY0FBQTtFRmtHZDtFRTlGVTtJQUNJLFVBQUE7RUZnR2Q7RUU5RlU7SUFDSSxjQUFBO0VGZ0dkO0FBQ0Y7O0FFNUZBO0VBRVE7SUFDSSxjQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUY2RlY7RUUzRlU7SUFDSSxlQUFBO0VGNkZkO0VFMUZVO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0VGNEZkO0VFekZVO0lBQ0ksY0FBQTtFRjJGZDtFRXRGVTtJQUNJLFVBQUE7RUZ3RmQ7RUV0RlU7SUFDSSxjQUFBO0VGd0ZkO0FBQ0Y7O0FFcEZBO0VBRVE7SUFDSSxjQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUZxRlY7RUVuRlU7SUFDSSxlQUFBO0VGcUZkO0VFbEZVO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0VGb0ZkO0VFakZVO0lBQ0ksY0FBQTtFRm1GZDtFRTlFVTtJQUNJLFVBQUE7RUZnRmQ7RUU5RVU7SUFDSSxjQUFBO0VGZ0ZkO0FBQ0Y7O0FFNUVBO0VBRVE7SUFDSSxjQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUY2RVY7RUUzRVU7SUFDSSxlQUFBO0VGNkVkO0VFMUVVO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0VGNEVkO0VFekVVO0lBQ0ksY0FBQTtFRjJFZDtFRXRFVTtJQUNJLFVBQUE7RUZ3RWQ7RUV0RVU7SUFDSSxjQUFBO0VGd0VkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWFybmluZy9tb2R1bGVzLWxlYXJuaW5nL21vZHVsZXMtbGVhcm5pbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJGJhci13aWR0aDogMjVweDtcclxuJGJhci1oZWlnaHQ6IDMuMXB4O1xyXG4kYmFyLXNwYWNpbmc6IDdweDtcclxuXHJcbiRNb250c2VycmF0OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRNdWxpc2g6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kUG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuJGJvcmRlci1pbnB1dDogI2M5ZDNkZDtcclxuXHJcbiRzaGFkb3ctbmF2OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1idG46IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1zbWFsbDogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kc2hhZG93LWNvbnRhaW5lci1zbWFsbDogMCAxMHB4IDIwcHggMCByZ2IoMCAwIDAgLyA1JSk7XHJcbiRzaGFkb3ctY29udGFpbmVyOiAwIDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDFweCAxcHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4kc2hhZG93LW5hdi1zbWFsbDogMCAycHggMzBweCAwIHJnYigyMDcgMjA3IDIwNyAvIDUwJSk7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzBFNjE1MjtcclxuJGdyZXktODAwOiAjNDI0MjQyO1xyXG4kZ3JleS03MDA6ICMyOTMyM2Q7XHJcbiRncmV5LTYwMDogIzc5OGRhMztcclxuJGdyZXktNTAwOiAjMEU2MTUyO1xyXG4kZ3JleS00MDA6ICM5ZmFmYzE7XHJcbiRncmV5LTMwMDogIzMzMzMzMztcclxuJGdyZXktMjAwOiAjNGQ0ZDRkO1xyXG4kZ3JleS0xMDA6ICM2NjY2NjY7XHJcbiRwaW5rLWZpcnN0OiAjZTFkOWQ1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS0yOiAjZWRmMGY0O1xyXG5cclxuJGJsYWNrLTgwMDogIzAwMDtcclxuJGJsYWNrLTcwMDogIzE0MTQxNDtcclxuJGJsYWNrLTYwMDogIzFiMWIxYjtcclxuJGJsYWNrLTUwMDogIzBFNjE1MjtcclxuXHJcblxyXG4udmlzaWJsZS1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2hhZG93LW5hdiB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLnNoYWRvdy1zbWFsbCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50ZXh0LW5vbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIudmlzaWJsZS1zbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGFkb3ctbmF2IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zaGFkb3ctc21hbGwge1xuICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50ZXh0LW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi50ZXh0LW5vbmU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIVxuICogV2F2ZXMgdjAuNi4wXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLndhdmVzLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9YnV0dG9uXSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXJlc2V0XSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3QgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLndhdmVzLW5vdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xufVxuXG4ud2F2ZXMtaW5wdXQtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLndhdmVzLWlucHV0LXdyYXBwZXIgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG59XG5cbi53YXZlcy1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICB6LWluZGV4OiAtMTtcbn1cblxuLlR3b1NlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAyLjVlbTtcbn1cbi5Ud29TZWN0aW9uIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuLlR3b1NlY3Rpb24gaHIge1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG4uVHdvU2VjdGlvbiAuYWN0aW9ucyBhIHtcbiAgbWFyZ2luOiAzZW0gMC44ZW0gMCAwO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5Ud29TZWN0aW9uIC5hY3Rpb25zIGEgaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5Ud29TZWN0aW9uIC5hY3Rpb25zIGEuYnRuLWVkaXQge1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZDogIzAwNTY3MDtcbn1cbi5Ud29TZWN0aW9uIC5hY3Rpb25zIGEuYnRuLWVkaXQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzAwNTY3MDtcbn1cbi5Ud29TZWN0aW9uIC5hY3Rpb25zIGEuYnRuLWRlbGV0ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZTQwMDJiO1xufVxuLlR3b1NlY3Rpb24gLmFjdGlvbnMgYS5idG4tZGVsZXRlOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICNlNDAwMmI7XG59XG4uVHdvU2VjdGlvbiAuYWN0aW9ucyBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xufVxuLlR3b1NlY3Rpb24gLnNlY3VyZSB7XG4gIG1hcmdpbi10b3A6IDEuNWVtO1xufVxuLlR3b1NlY3Rpb24gLnNlY3VyZSBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uVHdvU2VjdGlvbiAuc2VjdXJlIC5idXR0b25zIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB0cmFuc2l0aW9uOiAzODBtcyBlYXNlLWluO1xufVxuLlR3b1NlY3Rpb24gLnNlY3VyZSAuYnV0dG9ucyBhOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMzgwbXMgZWFzZS1pbjtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICM3ZTdiN2I7XG59XG4uVHdvU2VjdGlvbiAuc2VjdXJlLXVwZGF0ZSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4uVGhpcmRTZWN0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDRlbTtcbn1cbi5UaGlyZFNlY3Rpb24gLmNvbnRhaW5lciAucm93IGEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG59XG4uVGhpcmRTZWN0aW9uIC5jb250YWluZXIgLnJvdyBhIC5pbWFnZSB7XG4gIGhlaWdodDogMjQ1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLlRoaXJkU2VjdGlvbiAuY29udGFpbmVyIC5yb3cgYSAuaW1hZ2UgaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLlRoaXJkU2VjdGlvbiAuY29udGFpbmVyIC5yb3cgYSAudGV4dCB7XG4gIGNvbG9yOiAjMEU2MTUyO1xufVxuLlRoaXJkU2VjdGlvbiAuY29udGFpbmVyIC5yb3cgYSAudGV4dCBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5UaGlyZFNlY3Rpb24gLmNvbnRhaW5lciAucm93IGEgLnRleHQgZGl2IGg0IHtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cbi5UaGlyZFNlY3Rpb24gLmNvbnRhaW5lciAucm93IGEgLnRleHQgZGl2IGg0Lm5hbWUge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uVGhpcmRTZWN0aW9uIC5jb250YWluZXIgLnJvdyBhOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmJ0bi1hZGRzIHtcbiAgYmFja2dyb3VuZDogIzRiYjBhOTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBsaW5lLWhlaWdodDogNTVweDtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDFweDtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbn1cbi5idG4tYWRkcyBkaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA2ZW0gYXV0bztcbn1cbi5idG4tYWRkcyBkaXYgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMC4yMmVtIGF1dG87XG4gIHdpZHRoOiA3NSU7XG59XG4uYnRuLWFkZHM6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzk5OTk5OTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLlR3b1NlY3Rpb24gLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC5Ud29TZWN0aW9uIC5hY3Rpb25zIGEge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuICAuVHdvU2VjdGlvbiAuYWN0aW9ucyBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gIH1cbiAgLlR3b1NlY3Rpb24gLmFjdGlvbnMgYnIudmlzaWJsZS1zbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLlR3b1NlY3Rpb24gLnNlY3VyZSBhIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC5Ud29TZWN0aW9uIC5zZWN1cmUgYnIudmlzaWJsZS1zbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNnB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLlR3b1NlY3Rpb24gLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNjUlO1xuICB9XG4gIC5Ud29TZWN0aW9uIC5hY3Rpb25zIGEge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuICAuVHdvU2VjdGlvbiAuYWN0aW9ucyBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gIH1cbiAgLlR3b1NlY3Rpb24gLmFjdGlvbnMgYnIudmlzaWJsZS1zbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLlR3b1NlY3Rpb24gLnNlY3VyZSBhIHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG4gIC5Ud29TZWN0aW9uIC5zZWN1cmUgYnIudmlzaWJsZS1zbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLlR3b1NlY3Rpb24gLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNTUlO1xuICB9XG4gIC5Ud29TZWN0aW9uIC5hY3Rpb25zIGEge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuICAuVHdvU2VjdGlvbiAuYWN0aW9ucyBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gIH1cbiAgLlR3b1NlY3Rpb24gLmFjdGlvbnMgYnIudmlzaWJsZS1zbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLlR3b1NlY3Rpb24gLnNlY3VyZSBhIHtcbiAgICB3aWR0aDogNTUlO1xuICB9XG4gIC5Ud29TZWN0aW9uIC5zZWN1cmUgYnIudmlzaWJsZS1zbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLlR3b1NlY3Rpb24gLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIC5Ud29TZWN0aW9uIC5hY3Rpb25zIGEge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuICAuVHdvU2VjdGlvbiAuYWN0aW9ucyBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gIH1cbiAgLlR3b1NlY3Rpb24gLmFjdGlvbnMgYnIudmlzaWJsZS1zbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLlR3b1NlY3Rpb24gLnNlY3VyZSBhIHtcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIC5Ud29TZWN0aW9uIC5zZWN1cmUgYnIudmlzaWJsZS1zbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iLCJcclxuLyohXHJcbiAqIFdhdmVzIHYwLjYuMFxyXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcblxyXG4gLndhdmVzLWVmZmVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgICAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gIFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gV2F2ZXMgQ29sb3JzXHJcbiAgICAmLndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43MCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTdHlsZSBpbnB1dCBidXR0b24gYnVnLlxyXG4gICAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInJlc2V0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtbm90cmFuc2l0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmUgI3tcIiFpbXBvcnRhbnRcIn07XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgXHJcbiAgICAud2F2ZXMtYnV0dG9uLWlucHV0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXHJcbiAgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvX2luZGV4JztcclxuXHJcbi5Ud29TZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIuNWVtO1xyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgfVxyXG4gICAgaHIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogM2VtIC44ZW0gMCAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93LWJ0bjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC45NWVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYnRuLWVkaXQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDU2NzA7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzAwNTY3MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5idG4tZGVsZXRlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTQwMDJiO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICNlNDAwMmI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3VyZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctYnRuO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzgwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDM4MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICM3ZTdiN2I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3VyZS11cGRhdGUge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLlRoaXJkU2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNGVtO1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzOCwyMzgsMjM4KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrLTUwMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuN2VtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4zMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWFkZHMge1xyXG4gICAgYmFja2dyb3VuZDogIzRiYjBhOTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDU1cHg7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctY29udGFpbmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICBtYXJnaW46IDZlbSBhdXRvO1xyXG4gICAgICAgaW1nIHtcclxuICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICBtYXJnaW46IC4yMmVtIGF1dG87XHJcbiAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCByZ2IoMTUzLCAxNTMsIDE1Myk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgLlR3b1NlY3Rpb24ge1xyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyLnZpc2libGUtc20ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlY3VyZSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBici52aXNpYmxlLXNtIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNnB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5Ud29TZWN0aW9uIHtcclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnIudmlzaWJsZS1zbSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlY3VyZSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBici52aXNpYmxlLXNtIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5Ud29TZWN0aW9uIHtcclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiA1NSU7XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnIudmlzaWJsZS1zbSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlY3VyZSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBici52aXNpYmxlLXNtIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5Ud29TZWN0aW9uIHtcclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnIudmlzaWJsZS1zbSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlY3VyZSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBici52aXNpYmxlLXNtIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModulesLearningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modules-learning',
                templateUrl: './modules-learning.component.html',
                styleUrls: ['./modules-learning.component.scss'],
                providers: [_services_courses_services__WEBPACK_IMPORTED_MODULE_2__["CoursesServices"], _services_modules_services__WEBPACK_IMPORTED_MODULE_3__["ModuleServices"], _services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"]]
            }]
    }], function () { return [{ type: _services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"] }, { type: _services_courses_services__WEBPACK_IMPORTED_MODULE_2__["CoursesServices"] }, { type: _services_modules_services__WEBPACK_IMPORTED_MODULE_3__["ModuleServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/pdf-learning/pdf-learning.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/learning/pdf-learning/pdf-learning.component.ts ***!
  \***********************************************************************/
/*! exports provided: PdfLearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfLearningComponent", function() { return PdfLearningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././../../../node_modules/aos/dist/aos.js */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _services_content_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/content.services */ "./src/app/services/content.services.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/pdfs.services */ "./src/app/services/pdfs.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");













const _c0 = function (a0) { return [a0]; };
function PdfLearningComponent_div_0_div_6_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pdf_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "view/" + pdf_r5._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pdf_r5.number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pdf_r5.namePDF, " ");
} }
function PdfLearningComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PdfLearningComponent_div_0_div_6_a_3_Template, 6, 5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.pdf);
} }
const _c1 = function (a1) { return ["add-pdf/", a1]; };
function PdfLearningComponent_div_0_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r6.content._id));
} }
function PdfLearningComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PdfLearningComponent_div_0_div_7_div_1_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.identity.role == "ROLE_ADMIN");
} }
function PdfLearningComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PDF's del curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PdfLearningComponent_div_0_div_6_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PdfLearningComponent_div_0_div_7_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00BFNo entendiste en su totalidad alg\u00FAn tema o practica? Consulta este ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "REA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " para apoyarte dando ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "clic aqu\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pdf);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.content);
} }
function PdfLearningComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You must log in to view the content of this platform.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PdfLearningComponent {
    constructor(usersservices, contentservices, pdfsservices, route, router) {
        this.usersservices = usersservices;
        this.contentservices = contentservices;
        this.pdfsservices = pdfsservices;
        this.route = route;
        this.router = router;
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
    }
    ngOnInit() {
        this.getPDFS();
        _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true
        });
    }
    getPDFS() {
        this.route.params.forEach((params) => {
            let id = params['ids'];
            this.contentservices.getContent(this.token, id).subscribe(response => {
                if (!response.content) {
                    console.log('Se encontraron problemas en el servidor.');
                }
                else {
                    this.content = response.content;
                    this.pdfsservices.getFiles(this.token, response.content._id).subscribe(response => {
                        if (!response.pdfs) {
                            console.log('Se encontraron problemas en el servidor.');
                        }
                        else {
                            this.pdf = response.pdfs;
                            console.log(this.pdf);
                        }
                    }, error => {
                        console.log(error);
                    });
                }
            }, error => {
                console.log(error);
            });
        });
    }
}
PdfLearningComponent.ɵfac = function PdfLearningComponent_Factory(t) { return new (t || PdfLearningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__["PdfsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
PdfLearningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PdfLearningComponent, selectors: [["app-pdf-learning"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"], _services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__["PdfsServices"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "TwoSection"], ["class", "FirstSection", 4, "ngIf"], [1, "rea"], ["href", "https://www.pequerecetas.com/", "target", "_blank"], [1, "FirstSection"], [1, "container"], [1, "row", "justify-content-around"], ["routerLinkActive", "router-link-active", "class", "p-4 mt-5 rounded text-none", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "router-link-active", 1, "p-4", "mt-5", "rounded", "text-none", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "ThirdSection", "btn-adds", 3, "routerLink"], ["src", "../../../../assets/svg/addE.svg", "alt", "adds"], [1, "alert", "alert-danger", "w-50", "d-block", "m-auto", "text-center"], [1, "mt-5"]], template: function PdfLearningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PdfLearningComponent_div_0_Template, 15, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PdfLearningComponent_div_1_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_8__["NavbarLearningComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.TwoSection[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  font-size: 3em;\n  text-align: center;\n  padding-bottom: 1em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n\n.FirstSection[_ngcontent-%COMP%] {\n  margin-bottom: 5em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 30%;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n  color: #0E6152;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  background-color: #212121;\n  transition: 350ms ease-in;\n  color: white;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  font-size: 1.3em;\n  color: #212121;\n  background-color: #fff;\n  border-radius: 50%;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 1px;\n  border-radius: 50px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 1.5em;\n  font-size: 1em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px rgba(0, 0, 0, 0.3);\n}\n\n.btn-adds[_ngcontent-%COMP%] {\n  background: #4bb0a9;\n  position: fixed;\n  width: 55px;\n  height: 55px;\n  line-height: 55px;\n  bottom: 30px;\n  right: 30px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 50px;\n  font-size: 1px;\n  transition: 350ms ease-in;\n}\n\n.btn-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  margin: 6em auto;\n}\n\n.btn-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.22em auto;\n  width: 75%;\n}\n\n.btn-adds[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #999999;\n}\n\n.rea[_ngcontent-%COMP%] {\n  margin-top: 2em;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  font-size: 1em;\n  color: #0E6152;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvcGRmLWxlYXJuaW5nL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvcGRmLWxlYXJuaW5nL3BkZi1sZWFybmluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvcGRmLWxlYXJuaW5nL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX193YXZlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9sZWFybmluZy9wZGYtbGVhcm5pbmcvQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGxlYXJuaW5nXFx2aWRlb3MtbGVhcm5pbmdcXHZpZGVvcy1sZWFybmluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvcGRmLWxlYXJuaW5nL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxsZWFybmluZ1xccGRmLWxlYXJuaW5nXFxwZGYtbGVhcm5pbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0ksYUFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxpSEFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSw2Q0FBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxnQ0FBQTtBQ3BDSjs7QURxQ0k7RUFDSSxnQ0FBQTtBQ25DUjs7QUR1Q0E7RUFDSSxlQUFBO0FDcENKOztBQ3BCQTs7Ozs7OztFQUFBOztBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURxQko7O0FDbkJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEb0JOOztBQ2hCSTtFQUNFLDJDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2RJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEZ0JOOztBQ2JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEZU47O0FDWEU7RUFDRSwyQkFBQTtBRGNKOztBQ1hFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRGNKOztBQ1hFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRGNKOztBQ1pJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QURjTjs7QUNWRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QURhSjs7QUNWRTtFQUNFLGNBQUE7QURhSjs7QUNWRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QURhSjs7QUUxSEE7RUFDSSxpQkFBQTtBRjZISjs7QUU1SEk7RUFDSSxrQ0hDRTtFR0FGLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUY4SFI7O0FFNUhJO0VBQ0ksZUFBQTtBRjhIUjs7QUUxSEE7RUFDSSxrQkFBQTtBRjZISjs7QUUxSFk7RUFDSSxVQUFBO0VBQ0Esa0NIaEJOO0VHaUJNLGtCQUFBO0VBQ0EsY0hTSjtFR1JJLCtHSFhHO0VHWUgseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUY0SGhCOztBRTFIZ0I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FGNEhwQjs7QUUxSGdCO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUY0SHBCOztBRTFIZ0I7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUY0SHBCOztBRTFIZ0I7RUFDSSx5QkFBQTtFQUNBLGlEQUFBO0FGNEhwQjs7QUVySEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwrR0hyRGU7RUdzRGYsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUZ3SEo7O0FFdEhJO0VBQ0csY0FBQTtFQUNBLGdCQUFBO0FGd0hQOztBRXZITztFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUZ5SFg7O0FFckhJO0VBQ0kseUJBQUE7RUFDQSxzQ0FBQTtBRnVIUjs7QUcxTUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0pFTTtFSUROLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNKY087QUMrTFgiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWFybmluZy9wZGYtbGVhcm5pbmcvcGRmLWxlYXJuaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiRiYXItd2lkdGg6IDI1cHg7XHJcbiRiYXItaGVpZ2h0OiAzLjFweDtcclxuJGJhci1zcGFjaW5nOiA3cHg7XHJcblxyXG4kTW9udHNlcnJhdDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kTXVsaXNoOiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJFBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbiRib3JkZXItaW5wdXQ6ICNjOWQzZGQ7XHJcblxyXG4kc2hhZG93LW5hdjogMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiRzaGFkb3ctYnRuOiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiRzaGFkb3ctc21hbGw6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuJHNoYWRvdy1jb250YWluZXItc21hbGw6IDAgMTBweCAyMHB4IDAgcmdiKDAgMCAwIC8gNSUpO1xyXG4kc2hhZG93LWNvbnRhaW5lcjogMCAycHggMXB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMCAxcHggMXB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggM3B4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuJHNoYWRvdy1uYXYtc21hbGw6IDAgMnB4IDMwcHggMCByZ2IoMjA3IDIwNyAyMDcgLyA1MCUpO1xyXG5cclxuJHByaW1hcnktY29sb3I6ICMwRTYxNTI7XHJcbiRncmV5LTgwMDogIzQyNDI0MjtcclxuJGdyZXktNzAwOiAjMjkzMjNkO1xyXG4kZ3JleS02MDA6ICM3OThkYTM7XHJcbiRncmV5LTUwMDogIzBFNjE1MjtcclxuJGdyZXktNDAwOiAjOWZhZmMxO1xyXG4kZ3JleS0zMDA6ICMzMzMzMzM7XHJcbiRncmV5LTIwMDogIzRkNGQ0ZDtcclxuJGdyZXktMTAwOiAjNjY2NjY2O1xyXG4kcGluay1maXJzdDogI2UxZDlkNTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kd2hpdGUtMjogI2VkZjBmNDtcclxuXHJcbiRibGFjay04MDA6ICMwMDA7XHJcbiRibGFjay03MDA6ICMxNDE0MTQ7XHJcbiRibGFjay02MDA6ICMxYjFiMWI7XHJcbiRibGFjay01MDA6ICMwRTYxNTI7XHJcblxyXG5cclxuLnZpc2libGUtc20ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNoYWRvdy1uYXYge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuXHJcbi5zaGFkb3ctc21hbGwge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4udGV4dC1ub25lIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLnZpc2libGUtc20ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hhZG93LW5hdiB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uc2hhZG93LXNtYWxsIHtcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udGV4dC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG4udGV4dC1ub25lOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiFcbiAqIFdhdmVzIHYwLjYuMFxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi53YXZlcy1lZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbn1cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1saWdodCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy15ZWxsb3cgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1vcmFuZ2UgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPWJ1dHRvbl0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1yZXNldF0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYm9yZGVyOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0IGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi53YXZlcy1ub3RyYW5zaXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcbn1cblxuLndhdmVzLWlucHV0LXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi53YXZlcy1pbnB1dC13cmFwcGVyIC53YXZlcy1idXR0b24taW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBsaW5lLWhlaWdodDogMi41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xufVxuXG4ud2F2ZXMtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogRmlyZWZveCBCdWc6IGxpbmsgbm90IHRyaWdnZXJlZCAqL1xuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgei1pbmRleDogLTE7XG59XG5cbi5Ud29TZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMi41ZW07XG59XG4uVHdvU2VjdGlvbiBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAzZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cbi5Ud29TZWN0aW9uIGhyIHtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG4uRmlyc3RTZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNWVtO1xufVxuLkZpcnN0U2VjdGlvbiAuY29udGFpbmVyIC5yb3cgYSB7XG4gIHdpZHRoOiAzMCU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzBFNjE1MjtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBjb2xvcjogd2hpdGU7XG59XG4uRmlyc3RTZWN0aW9uIC5jb250YWluZXIgLnJvdyBhIGgyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiAjMjEyMTIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uRmlyc3RTZWN0aW9uIC5jb250YWluZXIgLnJvdyBhIGhyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4uRmlyc3RTZWN0aW9uIC5jb250YWluZXIgLnJvdyBhIGgzIHtcbiAgbWFyZ2luLXRvcDogMS41ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLkZpcnN0U2VjdGlvbiAuY29udGFpbmVyIC5yb3cgYTpob3ZlciB7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5idG4tYWRkcyB7XG4gIGJhY2tncm91bmQ6ICM0YmIwYTk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAxcHg7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG59XG4uYnRuLWFkZHMgZGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNmVtIGF1dG87XG59XG4uYnRuLWFkZHMgZGl2IGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAuMjJlbSBhdXRvO1xuICB3aWR0aDogNzUlO1xufVxuLmJ0bi1hZGRzOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICM5OTk5OTk7XG59XG5cbi5yZWEge1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICMwRTYxNTI7XG59IiwiXHJcbi8qIVxyXG4gKiBXYXZlcyB2MC42LjBcclxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5cclxuIC53YXZlcy1lZmZlY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2Utb3V0O1xyXG4gIFxyXG4gICAgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDotMTBweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICBcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcclxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIFdhdmVzIENvbG9yc1xyXG4gICAgJi53YXZlcy1saWdodCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy15ZWxsb3cgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1vcmFuZ2UgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNzApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gU3R5bGUgaW5wdXQgYnV0dG9uIGJ1Zy5cclxuICAgIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJyZXNldFwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW1nIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLW5vdHJhbnNpdGlvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lICN7XCIhaW1wb3J0YW50XCJ9O1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtY2lyY2xlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWlucHV0LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIFxyXG4gICAgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtY2lyY2xlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyLjVlbTtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogRmlyZWZveCBCdWc6IGxpbmsgbm90IHRyaWdnZXJlZCAqL1xyXG4gIC53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9IiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL19pbmRleCc7XHJcblxyXG5cclxuLlR3b1NlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICB9XHJcbiAgICBociB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uRmlyc3RTZWN0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVlbTtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrLTUwMDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctY29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjMwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tYWRkcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGJiMGE5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTVweDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1jb250YWluZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIG1hcmdpbjogNmVtIGF1dG87XHJcbiAgICAgICBpbWcge1xyXG4gICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgIG1hcmdpbjogLjIyZW0gYXV0bztcclxuICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4IHJnYigxNTMsIDE1MywgMTUzKTtcclxuICAgIH1cclxuXHJcbn0iLCJAaW1wb3J0ICcuLi92aWRlb3MtbGVhcm5pbmcvdmlkZW9zLWxlYXJuaW5nLmNvbXBvbmVudC5zY3NzJztcclxuXHJcbi5yZWEge1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICRncmV5LTUwMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfLearningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pdf-learning',
                templateUrl: './pdf-learning.component.html',
                styleUrls: ['./pdf-learning.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"], _services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__["PdfsServices"]]
            }]
    }], function () { return [{ type: _services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"] }, { type: _services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"] }, { type: _services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__["PdfsServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/quiz/quiz.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/learning/quiz/quiz.component.ts ***!
  \*******************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././../../../node_modules/aos/dist/aos.js */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _services_content_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/content.services */ "./src/app/services/content.services.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _services_quiz_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/quiz.services */ "./src/app/services/quiz.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");













function QuizComponent_div_0_div_6_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quiz_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", quiz_r5.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", quiz_r5.number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", quiz_r5.nameQuiz, " ");
} }
function QuizComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuizComponent_div_0_div_6_a_3_Template, 6, 3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.quiz);
} }
const _c0 = function (a1) { return ["add-quiz/", a1]; };
function QuizComponent_div_0_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r6.content._id));
} }
function QuizComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuizComponent_div_0_div_7_div_1_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.identity.role == "ROLE_ADMIN");
} }
function QuizComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Examenes del curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuizComponent_div_0_div_6_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuizComponent_div_0_div_7_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.quiz);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.content);
} }
function QuizComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You must log in to view the content of this platform.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class QuizComponent {
    constructor(usersservices, contentservices, quizservices, route, router) {
        this.usersservices = usersservices;
        this.contentservices = contentservices;
        this.quizservices = quizservices;
        this.route = route;
        this.router = router;
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
    }
    ngOnInit() {
        this.getQuizzes();
        _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true
        });
    }
    getQuizzes() {
        this.route.params.forEach((params) => {
            let id = params['ids'];
            this.contentservices.getContent(this.token, id).subscribe(response => {
                if (!response.content) {
                    console.log('Se encontraron problemas en el servidor.');
                }
                else {
                    this.content = response.content;
                    this.quizservices.getQuizzes(this.token, response.content._id).subscribe(response => {
                        if (!response.quizzes) {
                            console.log();
                        }
                        else {
                            this.quiz = response.quizzes;
                            console.log(this.quiz);
                        }
                    }, error => {
                        console.log(error);
                    });
                }
            }, error => {
                console.log(error);
            });
        });
    }
}
QuizComponent.ɵfac = function QuizComponent_Factory(t) { return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_quiz_services__WEBPACK_IMPORTED_MODULE_5__["QuizServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizComponent, selectors: [["app-quiz"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"], _services_quiz_services__WEBPACK_IMPORTED_MODULE_5__["QuizServices"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "TwoSection"], ["class", "FirstSection", 4, "ngIf"], [1, "FirstSection"], [1, "container"], [1, "row", "justify-content-around"], ["target", "_blank", "class", "p-4 mt-5 rounded text-none", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "p-4", "mt-5", "rounded", "text-none", 3, "href"], ["routerLinkActive", "router-link-active", 1, "ThirdSection", "btn-adds", 3, "routerLink"], ["src", "../../../../assets/svg/addE.svg", "alt", "adds"], [1, "alert", "alert-danger", "w-50", "d-block", "m-auto", "text-center"], [1, "mt-5"]], template: function QuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuizComponent_div_0_Template, 8, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuizComponent_div_1_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_8__["NavbarLearningComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.TwoSection[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  font-size: 3em;\n  text-align: center;\n  padding-bottom: 1em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n\n.FirstSection[_ngcontent-%COMP%] {\n  margin-bottom: 5em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 30%;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n  color: #0E6152;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  background-color: #212121;\n  transition: 350ms ease-in;\n  color: white;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  font-size: 1.3em;\n  color: #212121;\n  background-color: #fff;\n  border-radius: 50%;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 1px;\n  border-radius: 50px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 1.5em;\n  font-size: 1em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px rgba(0, 0, 0, 0.3);\n}\n\n.btn-adds[_ngcontent-%COMP%] {\n  background: #4bb0a9;\n  position: fixed;\n  width: 55px;\n  height: 55px;\n  line-height: 55px;\n  bottom: 30px;\n  right: 30px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 50px;\n  font-size: 1px;\n  transition: 350ms ease-in;\n}\n\n.btn-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  margin: 6em auto;\n}\n\n.btn-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.22em auto;\n  width: 75%;\n}\n\n.btn-adds[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #999999;\n}\n\n.rea[_ngcontent-%COMP%] {\n  margin-top: 2em;\n  text-align: center;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  font-size: 1em;\n  color: #0E6152;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvcXVpei9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL3F1aXovcXVpei5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvcXVpei9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fd2F2ZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvcXVpei9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcbGVhcm5pbmdcXHZpZGVvcy1sZWFybmluZ1xcdmlkZW9zLWxlYXJuaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sZWFybmluZy9xdWl6L0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxsZWFybmluZ1xccGRmLWxlYXJuaW5nXFxwZGYtbGVhcm5pbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0ksYUFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxpSEFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSw2Q0FBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxnQ0FBQTtBQ3BDSjs7QURxQ0k7RUFDSSxnQ0FBQTtBQ25DUjs7QUR1Q0E7RUFDSSxlQUFBO0FDcENKOztBQ3BCQTs7Ozs7OztFQUFBOztBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURxQko7O0FDbkJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEb0JOOztBQ2hCSTtFQUNFLDJDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2RJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEZ0JOOztBQ2JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEZU47O0FDWEU7RUFDRSwyQkFBQTtBRGNKOztBQ1hFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRGNKOztBQ1hFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRGNKOztBQ1pJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QURjTjs7QUNWRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QURhSjs7QUNWRTtFQUNFLGNBQUE7QURhSjs7QUNWRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QURhSjs7QUUxSEE7RUFDSSxpQkFBQTtBRjZISjs7QUU1SEk7RUFDSSxrQ0hDRTtFR0FGLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUY4SFI7O0FFNUhJO0VBQ0ksZUFBQTtBRjhIUjs7QUUxSEE7RUFDSSxrQkFBQTtBRjZISjs7QUUxSFk7RUFDSSxVQUFBO0VBQ0Esa0NIaEJOO0VHaUJNLGtCQUFBO0VBQ0EsY0hTSjtFR1JJLCtHSFhHO0VHWUgseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUY0SGhCOztBRTFIZ0I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FGNEhwQjs7QUUxSGdCO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUY0SHBCOztBRTFIZ0I7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUY0SHBCOztBRTFIZ0I7RUFDSSx5QkFBQTtFQUNBLGlEQUFBO0FGNEhwQjs7QUVySEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwrR0hyRGU7RUdzRGYsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUZ3SEo7O0FFdEhJO0VBQ0csY0FBQTtFQUNBLGdCQUFBO0FGd0hQOztBRXZITztFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUZ5SFg7O0FFckhJO0VBQ0kseUJBQUE7RUFDQSxzQ0FBQTtBRnVIUjs7QUcxTUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0pFTTtFSUROLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNKY087QUMrTFgiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWFybmluZy9xdWl6L3F1aXouY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJGJhci13aWR0aDogMjVweDtcclxuJGJhci1oZWlnaHQ6IDMuMXB4O1xyXG4kYmFyLXNwYWNpbmc6IDdweDtcclxuXHJcbiRNb250c2VycmF0OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRNdWxpc2g6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kUG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuJGJvcmRlci1pbnB1dDogI2M5ZDNkZDtcclxuXHJcbiRzaGFkb3ctbmF2OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1idG46IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuJHNoYWRvdy1zbWFsbDogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kc2hhZG93LWNvbnRhaW5lci1zbWFsbDogMCAxMHB4IDIwcHggMCByZ2IoMCAwIDAgLyA1JSk7XHJcbiRzaGFkb3ctY29udGFpbmVyOiAwIDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDFweCAxcHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4kc2hhZG93LW5hdi1zbWFsbDogMCAycHggMzBweCAwIHJnYigyMDcgMjA3IDIwNyAvIDUwJSk7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzBFNjE1MjtcclxuJGdyZXktODAwOiAjNDI0MjQyO1xyXG4kZ3JleS03MDA6ICMyOTMyM2Q7XHJcbiRncmV5LTYwMDogIzc5OGRhMztcclxuJGdyZXktNTAwOiAjMEU2MTUyO1xyXG4kZ3JleS00MDA6ICM5ZmFmYzE7XHJcbiRncmV5LTMwMDogIzMzMzMzMztcclxuJGdyZXktMjAwOiAjNGQ0ZDRkO1xyXG4kZ3JleS0xMDA6ICM2NjY2NjY7XHJcbiRwaW5rLWZpcnN0OiAjZTFkOWQ1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS0yOiAjZWRmMGY0O1xyXG5cclxuJGJsYWNrLTgwMDogIzAwMDtcclxuJGJsYWNrLTcwMDogIzE0MTQxNDtcclxuJGJsYWNrLTYwMDogIzFiMWIxYjtcclxuJGJsYWNrLTUwMDogIzBFNjE1MjtcclxuXHJcblxyXG4udmlzaWJsZS1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2hhZG93LW5hdiB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLnNoYWRvdy1zbWFsbCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50ZXh0LW5vbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIudmlzaWJsZS1zbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGFkb3ctbmF2IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zaGFkb3ctc21hbGwge1xuICBib3gtc2hhZG93OiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50ZXh0LW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi50ZXh0LW5vbmU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIVxuICogV2F2ZXMgdjAuNi4wXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLndhdmVzLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXRlYWwgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9YnV0dG9uXSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXJlc2V0XSwgLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3QgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLndhdmVzLW5vdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xufVxuXG4ud2F2ZXMtaW5wdXQtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLndhdmVzLWlucHV0LXdyYXBwZXIgLndhdmVzLWJ1dHRvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMi41ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG59XG5cbi53YXZlcy1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICB6LWluZGV4OiAtMTtcbn1cblxuLlR3b1NlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAyLjVlbTtcbn1cbi5Ud29TZWN0aW9uIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuLlR3b1NlY3Rpb24gaHIge1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbi5GaXJzdFNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA1ZW07XG59XG4uRmlyc3RTZWN0aW9uIC5jb250YWluZXIgLnJvdyBhIHtcbiAgd2lkdGg6IDMwJTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMEU2MTUyO1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5GaXJzdFNlY3Rpb24gLmNvbnRhaW5lciAucm93IGEgaDIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICMyMTIxMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5GaXJzdFNlY3Rpb24gLmNvbnRhaW5lciAucm93IGEgaHIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5GaXJzdFNlY3Rpb24gLmNvbnRhaW5lciAucm93IGEgaDMge1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uRmlyc3RTZWN0aW9uIC5jb250YWluZXIgLnJvdyBhOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmJ0bi1hZGRzIHtcbiAgYmFja2dyb3VuZDogIzRiYjBhOTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBsaW5lLWhlaWdodDogNTVweDtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDFweDtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbn1cbi5idG4tYWRkcyBkaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA2ZW0gYXV0bztcbn1cbi5idG4tYWRkcyBkaXYgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMC4yMmVtIGF1dG87XG4gIHdpZHRoOiA3NSU7XG59XG4uYnRuLWFkZHM6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzk5OTk5OTtcbn1cblxuLnJlYSB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzBFNjE1Mjtcbn0iLCJcclxuLyohXHJcbiAqIFdhdmVzIHYwLjYuMFxyXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcblxyXG4gLndhdmVzLWVmZmVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgICAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gIFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gV2F2ZXMgQ29sb3JzXHJcbiAgICAmLndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43MCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTdHlsZSBpbnB1dCBidXR0b24gYnVnLlxyXG4gICAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInJlc2V0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtbm90cmFuc2l0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmUgI3tcIiFpbXBvcnRhbnRcIn07XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgXHJcbiAgICAud2F2ZXMtYnV0dG9uLWlucHV0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXHJcbiAgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvX2luZGV4JztcclxuXHJcblxyXG4uVHdvU2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVlbTtcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAgIH1cclxuICAgIGhyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5GaXJzdFNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNWVtO1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2stNTAwO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1jb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGhyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMzAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1hZGRzIHtcclxuICAgIGJhY2tncm91bmQ6ICM0YmIwYTk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LWNvbnRhaW5lcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDFweDtcclxuICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgbWFyZ2luOiA2ZW0gYXV0bztcclxuICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgbWFyZ2luOiAuMjJlbSBhdXRvO1xyXG4gICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggcmdiKDE1MywgMTUzLCAxNTMpO1xyXG4gICAgfVxyXG5cclxufSIsIkBpbXBvcnQgJy4uL3ZpZGVvcy1sZWFybmluZy92aWRlb3MtbGVhcm5pbmcuY29tcG9uZW50LnNjc3MnO1xyXG5cclxuLnJlYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogJGdyZXktNTAwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiz',
                templateUrl: './quiz.component.html',
                styleUrls: ['./quiz.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"], _services_quiz_services__WEBPACK_IMPORTED_MODULE_5__["QuizServices"]]
            }]
    }], function () { return [{ type: _services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"] }, { type: _services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"] }, { type: _services_quiz_services__WEBPACK_IMPORTED_MODULE_5__["QuizServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/signin/signin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/learning/signin/signin.component.ts ***!
  \***********************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _models_users_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/users_model */ "./src/app/models/users_model.ts");
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function SigninComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A1Debes aceptar los t\u00E9rminos y condiciones!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SigninComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.alertMessage, " ");
} }
class SigninComponent {
    constructor(route, router, usersServices) {
        this.route = route;
        this.router = router;
        this.usersServices = usersServices;
        this.termsAccepted = false; // Nueva propiedad para controlar los términos
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
        this.users = new _models_users_model__WEBPACK_IMPORTED_MODULE_2__["Users"]('', '', '', '', '', '', '', '', '', '');
    }
    ngOnInit() { }
    onSubmit(f) {
        if (!this.termsAccepted) { // Verificar si los términos fueron aceptados
            this.alertMessage = 'Por favor, acepta los términos y condiciones.';
            return;
        }
        this.usersServices.newAccount(this.users).subscribe(response => {
            if (!response.INFO_ACCOUNT) {
                this.alertMessage = 'Se encontraron problemas en el servidor.';
            }
            else {
                this.alertMessage = 'Cuenta creada con éxito, ahora ya puedes iniciar sesión.';
                this.users = response.INFO_ACCOUNT;
            }
        }, error => {
            console.log(error);
        });
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_1__["UsersServices"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_1__["UsersServices"]])], decls: 61, vars: 35, consts: [[3, "ngSubmit"], ["f", "ngForm"], [1, "container"], [1, "row"], [1, "text", "col-5", "d-block", "m-auto"], [1, "col-12"], ["src", "../../../../assets/svg/nameSG.svg", "alt", "Icon"], ["type", "text", "name", "name", "id", "name", "placeholder", "T\u00FA nombre", "required", "", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["src", "../../../../assets/svg/FSSG.svg", "alt", "Icon"], ["type", "text", "name", "fathersurname", "id", "fathersurname", "placeholder", "T\u00FA apellido paterno", "required", "", 3, "ngModel", "ngModelChange"], ["fathersurname", "ngModel"], ["type", "text", "name", "mothersurname", "id", "mothersurname", "placeholder", "T\u00FA apellido materno", "required", "", 3, "ngModel", "ngModelChange"], ["mothersurname", "ngModel"], ["src", "../../../../assets/svg/emailSG.svg", "alt", "Icon"], ["type", "email", "name", "email", "id", "email", "placeholder", "Direcci\u00F3n electr\u00F3nica", "required", "", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["src", "../../../../assets/svg/passwordSG.svg", "alt", "Icon"], ["type", "password", "name", "password", "id", "password", "placeholder", "Contrase\u00F1a", "required", "", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["src", "../../../../assets/svg/mastercard_credit_card.svg", "alt", "Icon"], ["type", "text", "name", "creditcard", "id", "creditcard", "placeholder", "Tarjeta de credito", "required", "", "maxlength", "19", 3, "ngModel", "ngModelChange"], ["creditcard", "ngModel"], ["src", "../../../../assets/svg/nipSG.svg", "alt", "Icon"], ["type", "text", "name", "nip", "id", "nip", "placeholder", "NIP", "required", "", "maxlength", "3", 3, "ngModel", "ngModelChange"], ["nip", "ngModel"], ["src", "../../../../assets/svg/dateSG.svg", "alt", "Icon"], ["type", "text", "name", "expiration_date", "id", "expiration_date", "placeholder", "2020-11-2", "required", "", 3, "ngModel", "ngModelChange"], ["expiration_date", "ngModel"], ["type", "checkbox", "id", "terms", "name", "terms", 3, "change"], ["for", "terms"], ["href", "aboutus", "target", "_blank"], ["type", "submit", 1, "btn", "btn-response", "d-block", "waves-effect", "waves-ripple", 3, "disabled"], [1, "response"], [1, "text-center"], [4, "ngIf"], [1, "text-danger"], [1, "alert", "alert-primary", "w-75", "d-block", "m-auto", "text-center"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Crear una nueva cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_9_listener($event) { return ctx.users.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SigninComponent_span_11_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_14_listener($event) { return ctx.users.fathersurname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SigninComponent_span_16_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_19_listener($event) { return ctx.users.mothersurname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SigninComponent_span_21_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_24_listener($event) { return ctx.users.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SigninComponent_span_26_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_29_listener($event) { return ctx.users.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SigninComponent_span_31_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_34_listener($event) { return ctx.users.creditcard = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SigninComponent_span_36_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_39_listener($event) { return ctx.users.nip = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, SigninComponent_span_41_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_44_listener($event) { return ctx.users.expiration_date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, SigninComponent_span_46_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SigninComponent_Template_input_change_48_listener($event) { return ctx.termsAccepted = $event.target.checked; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " He le\u00EDdo y acepto los ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "t\u00E9rminos y condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, SigninComponent_span_54_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Crear cuenta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Respuesta del servidor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, SigninComponent_div_60_Template, 3, 1, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.users.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors.required) && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r3.touched && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.users.fathersurname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.errors == null ? null : _r3.errors.required) && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r5.touched && _r5.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.users.mothersurname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.required) && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r7.touched && _r7.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.users.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r7.errors == null ? null : _r7.errors.required) && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r9.touched && _r9.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.users.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r9.errors == null ? null : _r9.errors.required) && _r9.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r11.touched && _r11.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.users.creditcard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r11.errors == null ? null : _r11.errors.required) && _r11.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r13.touched && _r13.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.users.nip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r13.errors == null ? null : _r13.errors.required) && _r13.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r15.touched && _r15.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.users.expiration_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r15.errors == null ? null : _r15.errors.required) && _r15.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.termsAccepted && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid || !ctx.termsAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\ninput[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, textarea.form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 2.3em;\n  margin: 2em auto 1em;\n}\n\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #dddddd;\n  border-radius: 4px;\n  padding: 5px;\n}\n\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n}\n\n.btn-response[_ngcontent-%COMP%] {\n  display: block;\n  margin: 2em auto 2em auto;\n  transition: 350ms ease-in;\n  background-color: #4bb0a9;\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  font-size: 0.95em;\n}\n\n.btn-response[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #4bb0a9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvc2lnbmluL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvc2lnbmluL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX193YXZlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9sZWFybmluZy9zaWduaW4vQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGxlYXJuaW5nXFxzaWduaW5cXHNpZ25pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ0E7RUFDSSxhQUFBO0FDcENKOztBRHVDQTtFQUNJLGlIQUFBO0FDcENKOztBRHVDQTtFQUNJLDZDQUFBO0FDcENKOztBRHVDQTtFQUNJLGdDQUFBO0FDcENKOztBRHFDSTtFQUNJLGdDQUFBO0FDbkNSOztBRHVDQTtFQUNJLGVBQUE7QUNwQ0o7O0FDcEJBOzs7Ozs7O0VBQUE7O0FBVUM7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRHFCSjs7QUNuQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QURvQk47O0FDaEJJO0VBQ0UsMkNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDZEk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURnQk47O0FDYkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QURlTjs7QUNYRTtFQUNFLDJCQUFBO0FEY0o7O0FDWEU7RUFDRSx3QkFBQTtFQUNBLDJFQUFBO0FEY0o7O0FDWEU7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FEY0o7O0FDWkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRGNOOztBQ1ZFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBRGFKOztBQ1ZFO0VBQ0UsY0FBQTtBRGFKOztBQ1ZFLG9DQUFBOztBQUNBO0VBQ0UsV0FBQTtBRGFKOztBRTNIQTtFQUVJLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUY2SEo7O0FFMUhBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDSFBNO0VHUU4sZ0JBQUE7RUFDQSxvQkFBQTtBRjZISjs7QUV6SEk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRjRIUjs7QUUzSFE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUY2SFo7O0FFM0hRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0gxQkY7RUcyQkUsZ0JBQUE7QUY2SFo7O0FFeEhBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0h0Q007RUd1Q04sZ0JBQUE7RUFDQSxpQkFBQTtBRjJISjs7QUUxSEk7RUFDSSx5QkFBQTtFQUNBLHNDQUFBO0FGNEhSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kYmFyLXdpZHRoOiAyNXB4O1xyXG4kYmFyLWhlaWdodDogMy4xcHg7XHJcbiRiYXItc3BhY2luZzogN3B4O1xyXG5cclxuJE1vbnRzZXJyYXQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJE11bGlzaDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRQb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblxyXG4kYm9yZGVyLWlucHV0OiAjYzlkM2RkO1xyXG5cclxuJHNoYWRvdy1uYXY6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LWJ0bjogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LXNtYWxsOiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRzaGFkb3ctY29udGFpbmVyLXNtYWxsOiAwIDEwcHggMjBweCAwIHJnYigwIDAgMCAvIDUlKTtcclxuJHNoYWRvdy1jb250YWluZXI6IDAgMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDAgMXB4IDFweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiRzaGFkb3ctbmF2LXNtYWxsOiAwIDJweCAzMHB4IDAgcmdiKDIwNyAyMDcgMjA3IC8gNTAlKTtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMEU2MTUyO1xyXG4kZ3JleS04MDA6ICM0MjQyNDI7XHJcbiRncmV5LTcwMDogIzI5MzIzZDtcclxuJGdyZXktNjAwOiAjNzk4ZGEzO1xyXG4kZ3JleS01MDA6ICMwRTYxNTI7XHJcbiRncmV5LTQwMDogIzlmYWZjMTtcclxuJGdyZXktMzAwOiAjMzMzMzMzO1xyXG4kZ3JleS0yMDA6ICM0ZDRkNGQ7XHJcbiRncmV5LTEwMDogIzY2NjY2NjtcclxuJHBpbmstZmlyc3Q6ICNlMWQ5ZDU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLTI6ICNlZGYwZjQ7XHJcblxyXG4kYmxhY2stODAwOiAjMDAwO1xyXG4kYmxhY2stNzAwOiAjMTQxNDE0O1xyXG4kYmxhY2stNjAwOiAjMWIxYjFiO1xyXG4kYmxhY2stNTAwOiAjMEU2MTUyO1xyXG5cclxuXHJcbi52aXNpYmxlLXNtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaGFkb3ctbmF2IHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG4uc2hhZG93LXNtYWxsIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnRleHQtbm9uZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi52aXNpYmxlLXNtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoYWRvdy1uYXYge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLnNoYWRvdy1zbWFsbCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRleHQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnRleHQtbm9uZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyohXG4gKiBXYXZlcyB2MC42LjBcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4ud2F2ZXMtZWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG59XG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1idXR0b25dLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9cmVzZXRdLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndhdmVzLWVmZmVjdCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ud2F2ZXMtbm90cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi53YXZlcy1pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ud2F2ZXMtaW5wdXQtd3JhcHBlciAud2F2ZXMtYnV0dG9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbn1cblxuLndhdmVzLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5pbnB1dDpmb2N1cywgaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgdGV4dGFyZWEuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIuM2VtO1xuICBtYXJnaW46IDJlbSBhdXRvIDFlbTtcbn1cblxuLnRleHQgcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLnRleHQgcCBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnRleHQgcCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJ0bi1yZXNwb25zZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDJlbSBhdXRvIDJlbSBhdXRvO1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiMGE5O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDAuOTVlbTtcbn1cbi5idG4tcmVzcG9uc2U6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggIzRiYjBhOTtcbn0iLCJcclxuLyohXHJcbiAqIFdhdmVzIHYwLjYuMFxyXG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcblxyXG4gLndhdmVzLWVmZmVjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgXHJcbiAgICAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gIFxyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gV2F2ZXMgQ29sb3JzXHJcbiAgICAmLndhdmVzLWxpZ2h0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1yZWQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXllbGxvdyAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzNSwgNTksIC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLW9yYW5nZSAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtcHVycGxlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC43MCk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43MCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTdHlsZSBpbnB1dCBidXR0b24gYnVnLlxyXG4gICAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInJlc2V0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAud2F2ZXMtbm90cmFuc2l0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmUgI3tcIiFpbXBvcnRhbnRcIn07XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtaW5wdXQtd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgXHJcbiAgICAud2F2ZXMtYnV0dG9uLWlucHV0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1jaXJjbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBGaXJlZm94IEJ1ZzogbGluayBub3QgdHJpZ2dlcmVkICovXHJcbiAgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvX2luZGV4JztcclxuXHJcbmlucHV0OmZvY3VzLCBpbnB1dC5mb3JtLWNvbnRyb2w6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cclxuICAgIG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgICBtYXJnaW46IDJlbSBhdXRvIDFlbTtcclxufVxyXG5cclxuLnRleHQgeyAgXHJcbiAgICBwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLXJlc3BvbnNlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyZW0gYXV0byAyZW0gYXV0bztcclxuICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiMGE5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAuOTVlbTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4ICM0YmIwYTk7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signin',
                templateUrl: './signin.component.html',
                styleUrls: ['./signin.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_1__["UsersServices"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_users_services__WEBPACK_IMPORTED_MODULE_1__["UsersServices"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/videos-learning/videos-learning.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/learning/videos-learning/videos-learning.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VideosLearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosLearningComponent", function() { return VideosLearningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _services_content_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/content.services */ "./src/app/services/content.services.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _services_video_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/video.services */ "./src/app/services/video.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");












const _c0 = function (a0) { return [a0]; };
function VideosLearningComponent_div_0_div_6_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "view/" + video_r5._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", video_r5.number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", video_r5.nameVideo, " ");
} }
function VideosLearningComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VideosLearningComponent_div_0_div_6_a_3_Template, 6, 5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.video);
} }
const _c1 = function (a1) { return ["add-video/", a1]; };
function VideosLearningComponent_div_0_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r6.content._id));
} }
function VideosLearningComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideosLearningComponent_div_0_div_7_div_1_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.identity.role == "ROLE_ADMIN");
} }
function VideosLearningComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Videos del curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VideosLearningComponent_div_0_div_6_Template, 4, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VideosLearningComponent_div_0_div_7_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.video);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.content);
} }
function VideosLearningComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You must log in to view the content of this platform.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VideosLearningComponent {
    constructor(usersservices, contentservices, videosservices, route, router) {
        this.usersservices = usersservices;
        this.contentservices = contentservices;
        this.videosservices = videosservices;
        this.route = route;
        this.router = router;
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
    }
    ngOnInit() {
        this.getVideos();
    }
    getVideos() {
        this.route.params.forEach((params) => {
            let id = params['ids'];
            console.log(id);
            this.contentservices.getContent(this.token, id).subscribe(response => {
                if (!response.content) {
                    console.log('Se encontraron problemas en el servidor.');
                }
                else {
                    this.content = response.content;
                    this.videosservices.getVideos(this.token, response.content._id).subscribe(response => {
                        if (!response.videos) {
                            console.log('Se encontraron problemas en el servidor.');
                        }
                        else {
                            this.video = response.videos;
                            console.log(this.video);
                        }
                    }, error => {
                        console.log(error);
                    });
                }
            }, error => {
                console.log(error);
            });
        });
    }
}
VideosLearningComponent.ɵfac = function VideosLearningComponent_Factory(t) { return new (t || VideosLearningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_services__WEBPACK_IMPORTED_MODULE_2__["ContentServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_video_services__WEBPACK_IMPORTED_MODULE_4__["VideosServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
VideosLearningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosLearningComponent, selectors: [["app-videos-learning"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_2__["ContentServices"], _services_video_services__WEBPACK_IMPORTED_MODULE_4__["VideosServices"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "TwoSection"], ["data-aos", "fade-down"], ["class", "FirstSection", 4, "ngIf"], [1, "FirstSection"], [1, "container"], [1, "row", "justify-content-around"], ["routerLinkActive", "router-link-active", "class", "p-4 mt-5 rounded text-none", "data-aos", "fade-down", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "router-link-active", "data-aos", "fade-down", 1, "p-4", "mt-5", "rounded", "text-none", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "ThirdSection", "btn-adds", 3, "routerLink"], ["src", "../../../../assets/svg/addE.svg", "alt", "adds"], [1, "alert", "alert-danger", "w-50", "d-block", "m-auto", "text-center"], [1, "mt-5"]], template: function VideosLearningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideosLearningComponent_div_0_Template, 8, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideosLearningComponent_div_1_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_7__["NavbarLearningComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.TwoSection[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  font-size: 3em;\n  text-align: center;\n  padding-bottom: 1em;\n}\n\n.TwoSection[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n\n.FirstSection[_ngcontent-%COMP%] {\n  margin-bottom: 5em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 30%;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n  color: #0E6152;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  background-color: #212121;\n  transition: 350ms ease-in;\n  color: white;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  font-size: 1.3em;\n  color: #212121;\n  background-color: #fff;\n  border-radius: 50%;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 1px;\n  border-radius: 50px;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 1.5em;\n  font-size: 1em;\n}\n\n.FirstSection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px rgba(0, 0, 0, 0.3);\n}\n\n.btn-adds[_ngcontent-%COMP%] {\n  background: #4bb0a9;\n  position: fixed;\n  width: 55px;\n  height: 55px;\n  line-height: 55px;\n  bottom: 30px;\n  right: 30px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 50px;\n  font-size: 1px;\n  transition: 350ms ease-in;\n}\n\n.btn-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  margin: 6em auto;\n}\n\n.btn-adds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.22em auto;\n  width: 75%;\n}\n\n.btn-adds[_ngcontent-%COMP%]:hover {\n  transition: 350ms ease-in;\n  box-shadow: 0px 13px 24px -7px #999999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvdmlkZW9zLWxlYXJuaW5nL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvdmlkZW9zLWxlYXJuaW5nL3ZpZGVvcy1sZWFybmluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvdmlkZW9zLWxlYXJuaW5nL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX193YXZlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9sZWFybmluZy92aWRlb3MtbGVhcm5pbmcvQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGxlYXJuaW5nXFx2aWRlb3MtbGVhcm5pbmdcXHZpZGVvcy1sZWFybmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ0E7RUFDSSxhQUFBO0FDcENKOztBRHVDQTtFQUNJLGlIQUFBO0FDcENKOztBRHVDQTtFQUNJLDZDQUFBO0FDcENKOztBRHVDQTtFQUNJLGdDQUFBO0FDcENKOztBRHFDSTtFQUNJLGdDQUFBO0FDbkNSOztBRHVDQTtFQUNJLGVBQUE7QUNwQ0o7O0FDcEJBOzs7Ozs7O0VBQUE7O0FBVUM7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRHFCSjs7QUNuQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QURvQk47O0FDaEJJO0VBQ0UsMkNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDZEk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURnQk47O0FDYkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QURlTjs7QUNYRTtFQUNFLDJCQUFBO0FEY0o7O0FDWEU7RUFDRSx3QkFBQTtFQUNBLDJFQUFBO0FEY0o7O0FDWEU7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FEY0o7O0FDWkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRGNOOztBQ1ZFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBRGFKOztBQ1ZFO0VBQ0UsY0FBQTtBRGFKOztBQ1ZFLG9DQUFBOztBQUNBO0VBQ0UsV0FBQTtBRGFKOztBRTFIQTtFQUNJLGlCQUFBO0FGNkhKOztBRTVISTtFQUNJLGtDSENFO0VHQUYsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRjhIUjs7QUU1SEk7RUFDSSxlQUFBO0FGOEhSOztBRTFIQTtFQUNJLGtCQUFBO0FGNkhKOztBRTFIWTtFQUNJLFVBQUE7RUFDQSxrQ0hoQk47RUdpQk0sa0JBQUE7RUFDQSxjSFNKO0VHUkksK0dIWEc7RUdZSCx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBRjRIaEI7O0FFMUhnQjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUY0SHBCOztBRTFIZ0I7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBRjRIcEI7O0FFMUhnQjtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBRjRIcEI7O0FFMUhnQjtFQUNJLHlCQUFBO0VBQ0EsaURBQUE7QUY0SHBCOztBRXJIQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtHSHJEZTtFR3NEZixtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBRndISjs7QUV0SEk7RUFDRyxjQUFBO0VBQ0EsZ0JBQUE7QUZ3SFA7O0FFdkhPO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBRnlIWDs7QUVySEk7RUFDSSx5QkFBQTtFQUNBLHNDQUFBO0FGdUhSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvdmlkZW9zLWxlYXJuaW5nL3ZpZGVvcy1sZWFybmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kYmFyLXdpZHRoOiAyNXB4O1xyXG4kYmFyLWhlaWdodDogMy4xcHg7XHJcbiRiYXItc3BhY2luZzogN3B4O1xyXG5cclxuJE1vbnRzZXJyYXQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJE11bGlzaDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRQb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblxyXG4kYm9yZGVyLWlucHV0OiAjYzlkM2RkO1xyXG5cclxuJHNoYWRvdy1uYXY6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LWJ0bjogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LXNtYWxsOiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRzaGFkb3ctY29udGFpbmVyLXNtYWxsOiAwIDEwcHggMjBweCAwIHJnYigwIDAgMCAvIDUlKTtcclxuJHNoYWRvdy1jb250YWluZXI6IDAgMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDAgMXB4IDFweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiRzaGFkb3ctbmF2LXNtYWxsOiAwIDJweCAzMHB4IDAgcmdiKDIwNyAyMDcgMjA3IC8gNTAlKTtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMEU2MTUyO1xyXG4kZ3JleS04MDA6ICM0MjQyNDI7XHJcbiRncmV5LTcwMDogIzI5MzIzZDtcclxuJGdyZXktNjAwOiAjNzk4ZGEzO1xyXG4kZ3JleS01MDA6ICMwRTYxNTI7XHJcbiRncmV5LTQwMDogIzlmYWZjMTtcclxuJGdyZXktMzAwOiAjMzMzMzMzO1xyXG4kZ3JleS0yMDA6ICM0ZDRkNGQ7XHJcbiRncmV5LTEwMDogIzY2NjY2NjtcclxuJHBpbmstZmlyc3Q6ICNlMWQ5ZDU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLTI6ICNlZGYwZjQ7XHJcblxyXG4kYmxhY2stODAwOiAjMDAwO1xyXG4kYmxhY2stNzAwOiAjMTQxNDE0O1xyXG4kYmxhY2stNjAwOiAjMWIxYjFiO1xyXG4kYmxhY2stNTAwOiAjMEU2MTUyO1xyXG5cclxuXHJcbi52aXNpYmxlLXNtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaGFkb3ctbmF2IHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG4uc2hhZG93LXNtYWxsIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnRleHQtbm9uZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi52aXNpYmxlLXNtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoYWRvdy1uYXYge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLnNoYWRvdy1zbWFsbCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRleHQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnRleHQtbm9uZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyohXG4gKiBXYXZlcyB2MC42LjBcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4ud2F2ZXMtZWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG59XG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1idXR0b25dLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9cmVzZXRdLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndhdmVzLWVmZmVjdCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ud2F2ZXMtbm90cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi53YXZlcy1pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ud2F2ZXMtaW5wdXQtd3JhcHBlciAud2F2ZXMtYnV0dG9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbn1cblxuLndhdmVzLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uVHdvU2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDIuNWVtO1xufVxuLlR3b1NlY3Rpb24gaDIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG59XG4uVHdvU2VjdGlvbiBociB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuLkZpcnN0U2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDVlbTtcbn1cbi5GaXJzdFNlY3Rpb24gLmNvbnRhaW5lciAucm93IGEge1xuICB3aWR0aDogMzAlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwRTYxNTI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLkZpcnN0U2VjdGlvbiAuY29udGFpbmVyIC5yb3cgYSBoMiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogIzIxMjEyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLkZpcnN0U2VjdGlvbiAuY29udGFpbmVyIC5yb3cgYSBociB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLkZpcnN0U2VjdGlvbiAuY29udGFpbmVyIC5yb3cgYSBoMyB7XG4gIG1hcmdpbi10b3A6IDEuNWVtO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5GaXJzdFNlY3Rpb24gLmNvbnRhaW5lciAucm93IGE6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xuICBib3gtc2hhZG93OiAwcHggMTNweCAyNHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uYnRuLWFkZHMge1xuICBiYWNrZ3JvdW5kOiAjNGJiMGE5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMXB4O1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xufVxuLmJ0bi1hZGRzIGRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDZlbSBhdXRvO1xufVxuLmJ0bi1hZGRzIGRpdiBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjIyZW0gYXV0bztcbiAgd2lkdGg6IDc1JTtcbn1cbi5idG4tYWRkczpob3ZlciB7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjOTk5OTk5O1xufSIsIlxyXG4vKiFcclxuICogV2F2ZXMgdjAuNi4wXHJcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuXHJcbiAud2F2ZXMtZWZmZWN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLW91dDtcclxuICBcclxuICAgIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6LTEwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgXHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBXYXZlcyBDb2xvcnNcclxuICAgICYud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcwKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIFN0eWxlIGlucHV0IGJ1dHRvbiBidWcuXHJcbiAgICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwicmVzZXRcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1ub3RyYW5zaXRpb24ge1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZSAje1wiIWltcG9ydGFudFwifTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1pbnB1dC13cmFwcGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBcclxuICAgIC53YXZlcy1idXR0b24taW5wdXQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMi41ZW07XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cclxuICAud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9faW5kZXgnO1xyXG5cclxuXHJcbi5Ud29TZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIuNWVtO1xyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgfVxyXG4gICAgaHIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLkZpcnN0U2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1ZW07XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFjay01MDA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93LWNvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDM1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjRweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4zMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWFkZHMge1xyXG4gICAgYmFja2dyb3VuZDogIzRiYjBhOTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDU1cHg7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctY29udGFpbmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMzUwbXMgZWFzZS1pbjtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICBtYXJnaW46IDZlbSBhdXRvO1xyXG4gICAgICAgaW1nIHtcclxuICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICBtYXJnaW46IC4yMmVtIGF1dG87XHJcbiAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlLWluO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCByZ2IoMTUzLCAxNTMsIDE1Myk7XHJcbiAgICB9XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideosLearningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-videos-learning',
                templateUrl: './videos-learning.component.html',
                styleUrls: ['./videos-learning.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_2__["ContentServices"], _services_video_services__WEBPACK_IMPORTED_MODULE_4__["VideosServices"]]
            }]
    }], function () { return [{ type: _services_users_services__WEBPACK_IMPORTED_MODULE_3__["UsersServices"] }, { type: _services_content_services__WEBPACK_IMPORTED_MODULE_2__["ContentServices"] }, { type: _services_video_services__WEBPACK_IMPORTED_MODULE_4__["VideosServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/viewpdf/viewpdf.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/learning/viewpdf/viewpdf.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewpdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpdfComponent", function() { return ViewpdfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././../../../node_modules/aos/dist/aos.js */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _services_content_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/content.services */ "./src/app/services/content.services.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/pdfs.services */ "./src/app/services/pdfs.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");














function ViewpdfComponent_div_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Descargar archivo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pdf_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r3.url + "/get-view-pdf/" + pdf_r4.files, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ViewpdfComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewpdfComponent_div_0_div_2_div_1_Template, 4, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.pdfs);
} }
function ViewpdfComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewpdfComponent_div_0_div_2_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pdfs);
} }
function ViewpdfComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You must log in to view the content of this platform.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewpdfComponent {
    constructor(usersservices, contentservices, pdfsservices, route, router, sanitizer) {
        this.usersservices = usersservices;
        this.contentservices = contentservices;
        this.pdfsservices = pdfsservices;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
    }
    ngOnInit() {
        _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true
        });
        this.downloadPDF();
    }
    downloadPDF() {
        this.route.params.forEach((params) => {
            let id = params['file'];
            this.pdfsservices.getFile(id).subscribe(response => {
                this.pdfs = [response.pdf];
                console.log(this.pdfs);
            }, error => {
                console.log(error);
            });
        });
    }
}
ViewpdfComponent.ɵfac = function ViewpdfComponent_Factory(t) { return new (t || ViewpdfComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__["PdfsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"])); };
ViewpdfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewpdfComponent, selectors: [["app-viewpdf"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"], _services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__["PdfsServices"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "FirstSection", 4, "ngIf"], [1, "FirstSection"], ["class", "container-pdf p-5 mt-5", 4, "ngFor", "ngForOf"], [1, "container-pdf", "p-5", "mt-5"], ["download", "pdf.files", "target", "_blank", "rel", "noopener noreferrer", "target", "_blank", 1, "text-center", "text-none", 3, "href"], ["src", "../../../../assets/svg/download.svg", "alt", "Icon"], [1, "alert", "alert-danger", "w-50", "d-block", "m-auto", "text-center"], [1, "mt-5"]], template: function ViewpdfComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewpdfComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewpdfComponent_div_1_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_9__["NavbarLearningComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\na[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n}\n\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 1em auto;\n  width: 50px;\n}\n\n.container-pdf[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  display: block;\n  margin: auto;\n  text-align: center;\n  transition: 180ms ease-in;\n}\n\n.container-pdf[_ngcontent-%COMP%]:hover {\n  transition: 180ms ease-in;\n  box-shadow: 0px 13px 24px -7px #a6a8a8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvdmlld3BkZi9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nL3ZpZXdwZGYvdmlld3BkZi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvdmlld3BkZi9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzdHlsZXNcXF9fd2F2ZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvdmlld3BkZi9DOlxcVXNlcnNcXHRvcnJlXFxEZXNrdG9wXFxGb29kRGF5LW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcbGVhcm5pbmdcXHZpZXdwZGZcXHZpZXdwZGYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0ksYUFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxpSEFBQTtBQ3BDSjs7QUR1Q0E7RUFDSSw2Q0FBQTtBQ3BDSjs7QUR1Q0E7RUFDSSxnQ0FBQTtBQ3BDSjs7QURxQ0k7RUFDSSxnQ0FBQTtBQ25DUjs7QUR1Q0E7RUFDSSxlQUFBO0FDcENKOztBQ3BCQTs7Ozs7OztFQUFBOztBQVVDO0VBQ0csa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURxQko7O0FDbkJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FEb0JOOztBQ2hCSTtFQUNFLDJDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHlDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2hCSTtFQUNFLHdDQUFBO0FEa0JOOztBQ2RJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEZ0JOOztBQ2JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FEZU47O0FDWEU7RUFDRSwyQkFBQTtBRGNKOztBQ1hFO0VBQ0Usd0JBQUE7RUFDQSwyRUFBQTtBRGNKOztBQ1hFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBRGNKOztBQ1pJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QURjTjs7QUNWRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QURhSjs7QUNWRTtFQUNFLGNBQUE7QURhSjs7QUNWRSxvQ0FBQTs7QUFDQTtFQUNFLFdBQUE7QURhSjs7QUUzSEE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NIRU07QUM0SFY7O0FFN0hJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBRitIUjs7QUUzSEE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrR0hEZTtFR0VmLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBRjhISjs7QUU3SEk7RUFDSSx5QkFBQTtFQUNBLHNDQUFBO0FGK0hSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvdmlld3BkZi92aWV3cGRmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiRiYXItd2lkdGg6IDI1cHg7XHJcbiRiYXItaGVpZ2h0OiAzLjFweDtcclxuJGJhci1zcGFjaW5nOiA3cHg7XHJcblxyXG4kTW9udHNlcnJhdDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kTXVsaXNoOiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJFBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbiRib3JkZXItaW5wdXQ6ICNjOWQzZGQ7XHJcblxyXG4kc2hhZG93LW5hdjogMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiRzaGFkb3ctYnRuOiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiRzaGFkb3ctc21hbGw6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuJHNoYWRvdy1jb250YWluZXItc21hbGw6IDAgMTBweCAyMHB4IDAgcmdiKDAgMCAwIC8gNSUpO1xyXG4kc2hhZG93LWNvbnRhaW5lcjogMCAycHggMXB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMCAxcHggMXB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggM3B4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuJHNoYWRvdy1uYXYtc21hbGw6IDAgMnB4IDMwcHggMCByZ2IoMjA3IDIwNyAyMDcgLyA1MCUpO1xyXG5cclxuJHByaW1hcnktY29sb3I6ICMwRTYxNTI7XHJcbiRncmV5LTgwMDogIzQyNDI0MjtcclxuJGdyZXktNzAwOiAjMjkzMjNkO1xyXG4kZ3JleS02MDA6ICM3OThkYTM7XHJcbiRncmV5LTUwMDogIzBFNjE1MjtcclxuJGdyZXktNDAwOiAjOWZhZmMxO1xyXG4kZ3JleS0zMDA6ICMzMzMzMzM7XHJcbiRncmV5LTIwMDogIzRkNGQ0ZDtcclxuJGdyZXktMTAwOiAjNjY2NjY2O1xyXG4kcGluay1maXJzdDogI2UxZDlkNTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kd2hpdGUtMjogI2VkZjBmNDtcclxuXHJcbiRibGFjay04MDA6ICMwMDA7XHJcbiRibGFjay03MDA6ICMxNDE0MTQ7XHJcbiRibGFjay02MDA6ICMxYjFiMWI7XHJcbiRibGFjay01MDA6ICMwRTYxNTI7XHJcblxyXG5cclxuLnZpc2libGUtc20ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNoYWRvdy1uYXYge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuXHJcbi5zaGFkb3ctc21hbGwge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4udGV4dC1ub25lIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLnZpc2libGUtc20ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hhZG93LW5hdiB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uc2hhZG93LXNtYWxsIHtcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udGV4dC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG4udGV4dC1ub25lOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiFcbiAqIFdhdmVzIHYwLjYuMFxuICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBBbGZpYW5hIEUuIFNpYnVlYSBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi53YXZlcy1lZmZlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbn1cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1saWdodCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtcmVkIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy15ZWxsb3cgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDU5LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1vcmFuZ2UgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXB1cnBsZSAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNyk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLWdyZWVuIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdCBpbnB1dFt0eXBlPWJ1dHRvbl0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1yZXNldF0sIC53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYm9yZGVyOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ud2F2ZXMtZWZmZWN0IGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi53YXZlcy1ub3RyYW5zaXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcbn1cblxuLndhdmVzLWlucHV0LXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi53YXZlcy1pbnB1dC13cmFwcGVyIC53YXZlcy1idXR0b24taW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLndhdmVzLWNpcmNsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBsaW5lLWhlaWdodDogMi41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xufVxuXG4ud2F2ZXMtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogRmlyZWZveCBCdWc6IGxpbmsgbm90IHRyaWdnZXJlZCAqL1xuLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgei1pbmRleDogLTE7XG59XG5cbmEge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5hIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDFlbSBhdXRvO1xuICB3aWR0aDogNTBweDtcbn1cblxuLmNvbnRhaW5lci1wZGYge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDE4MG1zIGVhc2UtaW47XG59XG4uY29udGFpbmVyLXBkZjpob3ZlciB7XG4gIHRyYW5zaXRpb246IDE4MG1zIGVhc2UtaW47XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjYTZhOGE4O1xufSIsIlxyXG4vKiFcclxuICogV2F2ZXMgdjAuNi4wXHJcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuXHJcbiAud2F2ZXMtZWZmZWN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLW91dDtcclxuICBcclxuICAgIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6LTEwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgXHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBXYXZlcyBDb2xvcnNcclxuICAgICYud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcwKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIFN0eWxlIGlucHV0IGJ1dHRvbiBidWcuXHJcbiAgICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwicmVzZXRcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1ub3RyYW5zaXRpb24ge1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZSAje1wiIWltcG9ydGFudFwifTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1pbnB1dC13cmFwcGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBcclxuICAgIC53YXZlcy1idXR0b24taW5wdXQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMi41ZW07XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cclxuICAud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9faW5kZXgnO1xyXG5cclxuYSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lci1wZGYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1jb250YWluZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDE4MG1zIGVhc2UtaW47XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAxODBtcyBlYXNlLWluO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjYTZhOGE4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewpdfComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-viewpdf',
                templateUrl: './viewpdf.component.html',
                styleUrls: ['./viewpdf.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"], _services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__["PdfsServices"]]
            }]
    }], function () { return [{ type: _services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"] }, { type: _services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"] }, { type: _services_pdfs_services__WEBPACK_IMPORTED_MODULE_5__["PdfsServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/learning/viewvideo/viewvideo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/learning/viewvideo/viewvideo.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewvideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewvideoComponent", function() { return ViewvideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././../../../node_modules/aos/dist/aos.js */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/GLOBAL */ "./src/app/services/GLOBAL.ts");
/* harmony import */ var _services_content_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/content.services */ "./src/app/services/content.services.ts");
/* harmony import */ var _services_users_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/users.services */ "./src/app/services/users.services.ts");
/* harmony import */ var _services_video_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/video.services */ "./src/app/services/video.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/navbar-learning/navbar-learning.component */ "./src/app/components/navbar-learning/navbar-learning.component.ts");













function ViewvideoComponent_div_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "video", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "source", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r4.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", video_r4.nameVideo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.url + "/get-view-video/" + video_r4.files, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ViewvideoComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewvideoComponent_div_0_div_2_div_1_Template, 8, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.video);
} }
function ViewvideoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewvideoComponent_div_0_div_2_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.video);
} }
function ViewvideoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You must log in to view the content of this platform.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewvideoComponent {
    constructor(usersservices, contentservices, videosservices, route, router) {
        this.usersservices = usersservices;
        this.contentservices = contentservices;
        this.videosservices = videosservices;
        this.route = route;
        this.router = router;
        this.url = _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
        this.identity = this.usersservices.getIdentity();
        this.token = this.usersservices.getToken();
    }
    ngOnInit() {
        _node_modules_aos_dist_aos_js__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
            //once: false // "false" --> Animaciones repetidas al hacer scroll.
        });
        this.getFile();
    }
    getFile() {
        this.route.params.forEach((params) => {
            let id = params['file'];
            this.videosservices.getVideoAlone(this.token, id).subscribe(response => {
                this.video = [response.video];
                console.log(this.video);
            }, error => {
                console.log(error);
            });
        });
    }
}
ViewvideoComponent.ɵfac = function ViewvideoComponent_Factory(t) { return new (t || ViewvideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_video_services__WEBPACK_IMPORTED_MODULE_5__["VideosServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ViewvideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewvideoComponent, selectors: [["app-viewvideo"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"], _services_video_services__WEBPACK_IMPORTED_MODULE_5__["VideosServices"]])], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "FirstSection", 4, "ngIf"], [1, "FirstSection"], [4, "ngFor", "ngForOf"], [1, "number"], ["width", "65%"], ["controls", "", "controlslist", "nodownload", "preload", "metadata", 1, "rounded"], [3, "src"], [1, "alert", "alert-danger", "w-50", "d-block", "m-auto", "text-center"], [1, "mt-5"]], template: function ViewvideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewvideoComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewvideoComponent_div_1_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_navbar_learning_navbar_learning_component__WEBPACK_IMPORTED_MODULE_8__["NavbarLearningComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.shadow-nav[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\n.shadow-small[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);\n}\n\n.text-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.text-none[_ngcontent-%COMP%]:hover {\n  text-decoration: none !important;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: 0.3s ease-out;\n}\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: transform, opacity;\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=reset][_ngcontent-%COMP%], .waves-effect[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper[_ngcontent-%COMP%]   .waves-button-input[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n\n.FirstSection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.FirstSection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #0E6152;\n  width: 35px;\n  height: 35px;\n  margin: auto;\n  color: #fff;\n  margin: 0.3em auto;\n  border-radius: 50%;\n}\n\n.FirstSection[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  display: block;\n  margin: 1.5em auto;\n  width: 100%;\n  box-shadow: 0px 13px 24px -7px #aaaaaa;\n  max-width: 700px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvdmlld3ZpZGVvL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvdmlld3ZpZGVvL3ZpZXd2aWRlby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvdmlld3ZpZGVvL0M6XFxVc2Vyc1xcdG9ycmVcXERlc2t0b3BcXEZvb2REYXktbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHN0eWxlc1xcX193YXZlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9sZWFybmluZy92aWV3dmlkZW8vQzpcXFVzZXJzXFx0b3JyZVxcRGVza3RvcFxcRm9vZERheS1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGxlYXJuaW5nXFx2aWV3dmlkZW9cXHZpZXd2aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ0E7RUFDSSxhQUFBO0FDcENKOztBRHVDQTtFQUNJLGlIQUFBO0FDcENKOztBRHVDQTtFQUNJLDZDQUFBO0FDcENKOztBRHVDQTtFQUNJLGdDQUFBO0FDcENKOztBRHFDSTtFQUNJLGdDQUFBO0FDbkNSOztBRHVDQTtFQUNJLGVBQUE7QUNwQ0o7O0FDcEJBOzs7Ozs7O0VBQUE7O0FBVUM7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRHFCSjs7QUNuQkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QURvQk47O0FDaEJJO0VBQ0UsMkNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0UseUNBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDaEJJO0VBQ0Usd0NBQUE7QURrQk47O0FDZEk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURnQk47O0FDYkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QURlTjs7QUNYRTtFQUNFLDJCQUFBO0FEY0o7O0FDWEU7RUFDRSx3QkFBQTtFQUNBLDJFQUFBO0FEY0o7O0FDWEU7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FEY0o7O0FDWkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRGNOOztBQ1ZFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBRGFKOztBQ1ZFO0VBQ0UsY0FBQTtBRGFKOztBQ1ZFLG9DQUFBOztBQUNBO0VBQ0UsV0FBQTtBRGFKOztBRTFISTtFQUNJLGtDSEdFO0VHRkYsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FGNkhSOztBRTNIUTtFQUNJLGNBQUE7RUFDQSx5QkhPSTtFR05KLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FGNkhaOztBRXpISTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FGMkhSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhcm5pbmcvdmlld3ZpZGVvL3ZpZXd2aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kYmFyLXdpZHRoOiAyNXB4O1xyXG4kYmFyLWhlaWdodDogMy4xcHg7XHJcbiRiYXItc3BhY2luZzogN3B4O1xyXG5cclxuJE1vbnRzZXJyYXQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJE11bGlzaDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRQb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblxyXG4kYm9yZGVyLWlucHV0OiAjYzlkM2RkO1xyXG5cclxuJHNoYWRvdy1uYXY6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LWJ0bjogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4kc2hhZG93LXNtYWxsOiAwIDNweCA3cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRzaGFkb3ctY29udGFpbmVyLXNtYWxsOiAwIDEwcHggMjBweCAwIHJnYigwIDAgMCAvIDUlKTtcclxuJHNoYWRvdy1jb250YWluZXI6IDAgMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDAgMXB4IDFweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiRzaGFkb3ctbmF2LXNtYWxsOiAwIDJweCAzMHB4IDAgcmdiKDIwNyAyMDcgMjA3IC8gNTAlKTtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMEU2MTUyO1xyXG4kZ3JleS04MDA6ICM0MjQyNDI7XHJcbiRncmV5LTcwMDogIzI5MzIzZDtcclxuJGdyZXktNjAwOiAjNzk4ZGEzO1xyXG4kZ3JleS01MDA6ICMwRTYxNTI7XHJcbiRncmV5LTQwMDogIzlmYWZjMTtcclxuJGdyZXktMzAwOiAjMzMzMzMzO1xyXG4kZ3JleS0yMDA6ICM0ZDRkNGQ7XHJcbiRncmV5LTEwMDogIzY2NjY2NjtcclxuJHBpbmstZmlyc3Q6ICNlMWQ5ZDU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLTI6ICNlZGYwZjQ7XHJcblxyXG4kYmxhY2stODAwOiAjMDAwO1xyXG4kYmxhY2stNzAwOiAjMTQxNDE0O1xyXG4kYmxhY2stNjAwOiAjMWIxYjFiO1xyXG4kYmxhY2stNTAwOiAjMEU2MTUyO1xyXG5cclxuXHJcbi52aXNpYmxlLXNtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaGFkb3ctbmF2IHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG4uc2hhZG93LXNtYWxsIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnRleHQtbm9uZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi52aXNpYmxlLXNtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoYWRvdy1uYXYge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLnNoYWRvdy1zbWFsbCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRleHQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnRleHQtbm9uZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyohXG4gKiBXYXZlcyB2MC42LjBcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4ud2F2ZXMtZWZmZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XG59XG4ud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG59XG4ud2F2ZXMtZWZmZWN0LndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcpO1xufVxuLndhdmVzLWVmZmVjdC53YXZlcy1ncmVlbiAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3Qud2F2ZXMtdGVhbCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMC43KTtcbn1cbi53YXZlcy1lZmZlY3QgaW5wdXRbdHlwZT1idXR0b25dLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9cmVzZXRdLCAud2F2ZXMtZWZmZWN0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLndhdmVzLWVmZmVjdCBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ud2F2ZXMtbm90cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ud2F2ZXMtY2lyY2xlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi53YXZlcy1pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ud2F2ZXMtaW5wdXQtd3JhcHBlciAud2F2ZXMtYnV0dG9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi53YXZlcy1jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbn1cblxuLndhdmVzLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cbi53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uRmlyc3RTZWN0aW9uIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uRmlyc3RTZWN0aW9uIGgyIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBFNjE1MjtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwLjNlbSBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uRmlyc3RTZWN0aW9uIHZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMS41ZW0gYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCAjYWFhYWFhO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufSIsIlxyXG4vKiFcclxuICogV2F2ZXMgdjAuNi4wXHJcbiAqIGh0dHA6Ly9maWFuLm15LmlkL1dhdmVzXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuXHJcbiAud2F2ZXMtZWZmZWN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLW91dDtcclxuICBcclxuICAgIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6LTEwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgXHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBXYXZlcyBDb2xvcnNcclxuICAgICYud2F2ZXMtbGlnaHQgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XHJcbiAgICB9XHJcbiAgICAmLndhdmVzLXJlZCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMteWVsbG93IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCA1OSwgLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtb3JhbmdlIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy1wdXJwbGUgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjcwKTtcclxuICAgIH1cclxuICAgICYud2F2ZXMtZ3JlZW4gLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuNzApO1xyXG4gICAgfVxyXG4gICAgJi53YXZlcy10ZWFsIC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAwLjcwKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIFN0eWxlIGlucHV0IGJ1dHRvbiBidWcuXHJcbiAgICBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwicmVzZXRcIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1ub3RyYW5zaXRpb24ge1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZSAje1wiIWltcG9ydGFudFwifTtcclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMTAwJSwgYmxhY2sgMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXZlcy1pbnB1dC13cmFwcGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBcclxuICAgIC53YXZlcy1idXR0b24taW5wdXQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndhdmVzLWNpcmNsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMi41ZW07XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAud2F2ZXMtYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZpcmVmb3ggQnVnOiBsaW5rIG5vdCB0cmlnZ2VyZWQgKi9cclxuICAud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9faW5kZXgnO1xyXG5cclxuLkZpcnN0U2VjdGlvbiB7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7ICAgIFxyXG4gICAgICAgICAgICBtYXJnaW46IC4zZW0gYXV0bztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICB2aWRlbyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAxLjVlbSBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDI0cHggLTdweCByZ2IoMTcwLCAxNzAsIDE3MCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewvideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-viewvideo',
                templateUrl: './viewvideo.component.html',
                styleUrls: ['./viewvideo.component.scss'],
                providers: [_services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"], _services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"], _services_video_services__WEBPACK_IMPORTED_MODULE_5__["VideosServices"]]
            }]
    }], function () { return [{ type: _services_users_services__WEBPACK_IMPORTED_MODULE_4__["UsersServices"] }, { type: _services_content_services__WEBPACK_IMPORTED_MODULE_3__["ContentServices"] }, { type: _services_video_services__WEBPACK_IMPORTED_MODULE_5__["VideosServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/content.services.ts":
/*!**********************************************!*\
  !*** ./src/app/services/content.services.ts ***!
  \**********************************************/
/*! exports provided: ContentServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentServices", function() { return ContentServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _GLOBAL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GLOBAL */ "./src/app/services/GLOBAL.ts");






class ContentServices {
    constructor(http) {
        this.http = http;
        this.url = _GLOBAL__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    addNewContent(token, content) {
        let json = JSON.stringify(content);
        let params = json;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.post(this.url + '/add-new-content', params, { headers: headers });
    }
    getContent(token, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + '/get-content/' + id, { headers: headers });
    }
    getContents(moduleId = null) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.get(this.url + '/get-contents/' + moduleId, { headers: headers });
    }
    updateContent(token, id, content) {
        let params = JSON.stringify(content);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.put(this.url + '/update-content/' + id, params, { headers: headers });
    }
    deleteContent(token, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.delete(this.url + '/delete-content/' + id, { headers: headers });
    }
}
ContentServices.ɵfac = function ContentServices_Factory(t) { return new (t || ContentServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContentServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContentServices, factory: ContentServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/courses.services.ts":
/*!**********************************************!*\
  !*** ./src/app/services/courses.services.ts ***!
  \**********************************************/
/*! exports provided: CoursesServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesServices", function() { return CoursesServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _GLOBAL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GLOBAL */ "./src/app/services/GLOBAL.ts");






class CoursesServices {
    constructor(http) {
        this.http = http;
        this.url = _GLOBAL__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    addNewCourse(token, courses) {
        let json = JSON.stringify(courses);
        let params = json;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.post(this.url + '/add-new-course', params, { headers: headers });
    }
    getCourse(token, id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + '/get-course/' + id, { headers: headers });
    }
    getCourses(page) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.get(this.url + '/get-courses/' + page, { headers: headers });
    }
    updateCourse(token, id, course) {
        let params = JSON.stringify(course);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.put(this.url + '/update-course/' + id, params, { headers: headers });
    }
    deleteCourse(token, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.delete(this.url + '/delete-course/' + id, { headers: headers });
    }
}
CoursesServices.ɵfac = function CoursesServices_Factory(t) { return new (t || CoursesServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CoursesServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoursesServices, factory: CoursesServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/modules.services.ts":
/*!**********************************************!*\
  !*** ./src/app/services/modules.services.ts ***!
  \**********************************************/
/*! exports provided: ModuleServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleServices", function() { return ModuleServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _GLOBAL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GLOBAL */ "./src/app/services/GLOBAL.ts");






class ModuleServices {
    constructor(http) {
        this.http = http;
        this.url = _GLOBAL__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    addNewModule(token, modules) {
        let json = JSON.stringify(modules);
        let params = json;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.post(this.url + '/add-new-module', params, { headers: headers });
    }
    getModule(token, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + '/get-module/' + id, { headers: headers });
    }
    getModules(courseId = null) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.get(this.url + '/get-modules/' + courseId, { headers: headers });
    }
    updateModule(token, id, modules) {
        let params = JSON.stringify(modules);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.put(this.url + '/update-module/' + id, params, { headers: headers });
    }
    deleteModule(token, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.delete(this.url + '/delete-module/' + id, { headers: headers });
    }
}
ModuleServices.ɵfac = function ModuleServices_Factory(t) { return new (t || ModuleServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ModuleServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModuleServices, factory: ModuleServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/pdfs.services.ts":
/*!*******************************************!*\
  !*** ./src/app/services/pdfs.services.ts ***!
  \*******************************************/
/*! exports provided: PdfsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfsServices", function() { return PdfsServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _GLOBAL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GLOBAL */ "./src/app/services/GLOBAL.ts");






class PdfsServices {
    constructor(http) {
        this.http = http;
        this.url = _GLOBAL__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    addNewFile(token, pdfs) {
        let json = JSON.stringify(pdfs);
        let params = json;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.post(this.url + '/add-new-pdf', params, { headers: headers });
    }
    getFile(pdfFile) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.get(this.url + '/get-pdf/' + pdfFile, { headers: headers });
    }
    getAloneFile(pdfFile) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.get(this.url + '/get-view-pdf/' + pdfFile, { headers: headers });
    }
    getFiles(token, contentId = null) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + '/get-pdfs/' + contentId, { headers: headers });
    }
    updateFiles(token, id, pdfs) {
        let params = JSON.stringify(pdfs);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.put(this.url + '/update-pdf/' + id, params, { headers: headers });
    }
}
PdfsServices.ɵfac = function PdfsServices_Factory(t) { return new (t || PdfsServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PdfsServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PdfsServices, factory: PdfsServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfsServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/quiz.services.ts":
/*!*******************************************!*\
  !*** ./src/app/services/quiz.services.ts ***!
  \*******************************************/
/*! exports provided: QuizServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizServices", function() { return QuizServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _GLOBAL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GLOBAL */ "./src/app/services/GLOBAL.ts");






class QuizServices {
    constructor(http) {
        this.http = http;
        this.url = _GLOBAL__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    addNewQuiz(token, quiz) {
        let json = JSON.stringify(quiz);
        let params = json;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.post(this.url + '/add-new-quiz', params, { headers: headers });
    }
    getQuizzes(token, contentId = null) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + '/get-quizzes/' + contentId, { headers: headers });
    }
    updateQuiz(token, id, quiz) {
        let params = JSON.stringify(quiz);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.put(this.url + '/update-quiz/' + id, params, { headers: headers });
    }
}
QuizServices.ɵfac = function QuizServices_Factory(t) { return new (t || QuizServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
QuizServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuizServices, factory: QuizServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/video.services.ts":
/*!********************************************!*\
  !*** ./src/app/services/video.services.ts ***!
  \********************************************/
/*! exports provided: VideosServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosServices", function() { return VideosServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _GLOBAL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GLOBAL */ "./src/app/services/GLOBAL.ts");






class VideosServices {
    constructor(http) {
        this.http = http;
        this.url = _GLOBAL__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    addNewVideo(token, videos) {
        let json = JSON.stringify(videos);
        let params = json;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.post(this.url + '/add-new-video', params, { headers: headers });
    }
    getVideo(token, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + '/get-video/' + id, { headers: headers });
    }
    getVideos(token, contentId = null) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + '/get-videos/' + contentId, { headers: headers });
    }
    updateVideos(token, id, videos) {
        let params = JSON.stringify(videos);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.put(this.url + '/update-video/' + id, params, { headers: headers });
    }
    getFiles(videoFile) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.get(this.url + '/get-view-video/' + videoFile, { headers: headers });
    }
    getVideoAlone(token, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this.http.get(this.url + '/get-video/' + id, { headers: headers });
    }
}
VideosServices.ɵfac = function VideosServices_Factory(t) { return new (t || VideosServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
VideosServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VideosServices, factory: VideosServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideosServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-learning-learning-module-es2015.js.map