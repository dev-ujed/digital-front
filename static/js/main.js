/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/GalleryCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/GalleryCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_Gallerymixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/Gallerymixin.js */ "./resources/js/main/mixins/Gallerymixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_Gallerymixin_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    slug: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    imagesCount: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      loadedImages: []
    };
  },
  computed: {
    /**
     * Create the images object for Photoswipe.
     *
     * @return {Object}
     */
    items: function items() {
      var items = [];

      for (var i in this.loadedImages) {
        items.push({
          src: this.galleryPath + this.loadedImages[i].src,
          h: this.loadedImages[i].height,
          w: this.loadedImages[i].width
        });
      }

      return items;
    }
  },
  methods: {
    /**
     * Fetch the gallery images.
     *
     * @param {Object} e
     */
    load: function load(e) {
      var _this = this;

      // currentTarget is lost after propagation, so using a variable
      // to store the value is neccesary
      var event = {
        currentTarget: e.currentTarget
      };
      axios.get(this.$root.path + '/galerias/' + this.slug).then(function (response) {
        _this.loadedImages = response.data;

        _this.onClick(event);
      })["catch"](function (error) {
        console.error(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/GalleryLink.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/GalleryLink.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_Gallerymixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/Gallerymixin.js */ "./resources/js/main/mixins/Gallerymixin.js");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_Gallerymixin_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    images: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    slug: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      loadedImages: []
    };
  },
  computed: {
    /**
     * Create the images object for Photoswipe.
     *
     * @return {Object}
     */
    items: function items() {
      var items = [];

      for (var i in this.loadedImages) {
        items.push({
          src: this.galleryPath + this.loadedImages[i].src,
          h: this.loadedImages[i].height,
          w: this.loadedImages[i].width
        });
      }

      return items;
    }
  },
  methods: {
    /**
     * Fetch the gallery images.
     */
    load: function load() {
      var _this = this;

      axios.get(this.$root.path + '/galerias/' + this.slug).then(function (response) {
        _this.loadedImages = response.data;

        _this.build();
      })["catch"](function (error) {
        console.error(error);
      });
    },

    /**
     * Build the gallery when the thumb is clicked.
     */
    build: function build() {
      var gallery = new window.PhotoSwipe(this.dom.galleryContainer, window.PhotoSwipeUI_Default, this.items, this.config);
      gallery.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/SiteOverlay.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/SiteOverlay.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isActive: false,
      closeOnSwipe: false
    };
  },
  mounted: function mounted() {
    this.$root.$on('closeOverlay', this.close);
    this.$root.$on('showOverlay', this.show);
    this.$root.$on('toggleOverlay', this.toggle);
  },
  methods: {
    /**
     * Hide overlay and emit the event.
     */
    close: function close() {
      if (!this.isActive) {
        return;
      }

      this.isActive = false;
      this.closeOnSwipe = false;
      this.$root.$emit('overlayClosed');
    },

    /**
     * Activate overlay and emit the event.
     */
    show: function show(settings) {
      if (this.isActive) {
        return;
      }

      for (var property in settings) {
        this[property] = settings[property];
      }

      this.isActive = true;
      this.$root.$emit('overlayShown');
    },

    /**
     * Show or hide overlay.
     *
     * @param {boolean} show
     */
    toggle: function toggle() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (show) {
        this.show();
      } else {
        this.close();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/TruncatedText.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/TruncatedText.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    text: {
      type: String,
      required: true
    },
    truncatedText: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      expanded: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/LoginForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/LoginForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_BaseForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/BaseForm.vue */ "./resources/js/main/components/forms/base/BaseForm.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _base_BaseForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/RequestFile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/RequestFile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_TextField_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/TextField.vue */ "./resources/js/main/components/forms/base/TextField.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _base_TextField_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    requestid: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    errors: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    }
  },
  computed: {
    /**
     * Check if the field has any errors.
     *
     * @return {boolean}
     */
    hasErrors: function hasErrors() {
      // Remove the "[]" ending from multiplevalue fields, like "images[]".
      var fieldName = this.name.replace(/\[]$/, '');
      return !!Object.keys(this.$parent.errors).length && this.name in this.$parent.errors;
    }
  },
  methods: {
    remove: function remove(el) {
      var _this = this;

      var formData = new FormData();
      formData.append("file", el.split('_')[1]);
      window.axios.post('eliminar-archivo', formData).then(function (response) {
        _this.$delete(_this.$parent.fields.files, el);

        _this.$delete(_this.$parent.thumbs, el);

        _this.$delete(_this.$parent.names, el);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    console.log(this.$parent.thumbs);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/RequestStepForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/RequestStepForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_BaseForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/BaseForm.vue */ "./resources/js/main/components/forms/base/BaseForm.vue");
/* harmony import */ var _RequestUploadFile_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestUploadFile.vue */ "./resources/js/main/components/forms/RequestUploadFile.vue");
/* harmony import */ var _RequestFile_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RequestFile.vue */ "./resources/js/main/components/forms/RequestFile.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _base_BaseForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    RequestUploadFile: _RequestUploadFile_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    RequestFile: _RequestFile_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    requestid: {
      type: String,
      required: true
    },
    urldelete: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      fields: {
        id: this.requestid,
        descripcion: '',
        files: {}
      },
      errors: {},
      thumbs: [],
      names: []
    };
  },
  watch: {
    requestid: function requestid() {
      this.fields.id = this.requestid;
    }
  },
  methods: {
    prev: function prev() {
      this.$emit('prevuser', true);
    },

    /**
     * Handle redirection after receiving a successful response.
     *
     * @param {Object} response
     */
    onSuccess: function onSuccess(response) {
      if (this.redirectTo) {
        return window.location.href = this.redirectTo;
      }

      if (response.headers['redirect-to']) {
        return window.location.href = response.headers['redirect-to'];
      }

      this.isSubmitting = false;
      this.$emit('requestsuccess', true);
      this.$emit('requestfolio', response.data.folio.toString());
      this.$emit('requestemail', response.data.correo.toString());
    },
    CancelRequest: function CancelRequest() {
      window.axios.post(this.urldelete, {
        id: this.requestid
      });
      this.reset();
      this.$emit('deleterequest', true);
    },
    reset: function reset() {
      this.fields = {
        descripcion: '',
        id: '',
        files: {}
      }, this.errors = {};
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/RequestUploadFile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/RequestUploadFile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    requestid: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      errors: []
    };
  },
  methods: {
    addFile: function addFile() {
      var _this = this;

      var file = event.target.files[0];
      var formData = new FormData();
      formData.append("request", this.requestid);
      formData.append("file", file);
      window.axios.post('subir-archivo', formData).then(function (response) {
        if (response.data.id) {
          _this.errors = [];
          var id = response.data.id;
          var key = "description_" + id;

          _this.$set(_this.$parent.fields.files, key, '');

          _this.$set(_this.$parent.thumbs, key, response.data.urlfile);

          _this.$set(_this.$parent.names, key, file.name);
        }
      })["catch"](function (error) {
        _this.errors = error.response.data.errors.file;
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/StepForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/StepForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Steps_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Steps.vue */ "./resources/js/main/components/forms/Steps.vue");
/* harmony import */ var _RequestUploadFile_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestUploadFile.vue */ "./resources/js/main/components/forms/RequestUploadFile.vue");
/* harmony import */ var _helpers_scrollTo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/scrollTo.js */ "./resources/js/helpers/scrollTo.js");
/* harmony import */ var _helpers_getScrollTop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/getScrollTop.js */ "./resources/js/helpers/getScrollTop.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    RequestUploadFile: _RequestUploadFile_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Steps: _Steps_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    ureslist: {
      type: Array,
      required: true
    },
    urluser: {
      type: String,
      required: true
    },
    urlrequest: {
      type: String,
      required: true
    },
    urldelete: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      requestid: '',
      requestfolio: '',
      requestemail: '',
      successSteps: false,
      otherEmail: false,
      title: null,
      step: 0,
      isRight: true
    };
  },
  mounted: function mounted() {
    this.title = document.getElementById('title-request');
  },
  methods: {
    SuccessUser: function SuccessUser(e) {
      var _this = this;

      var documentOffset = Object(_helpers_getScrollTop_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      var titleOffset = Object(_helpers_getScrollTop_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.title);
      var duration = 600;
      this.step = 1;
      this.isRight = true;

      if (documentOffset === titleOffset) {
        this.moveRight();
        return;
      }

      if (Math.abs(titleOffset - documentOffset) < 200) {
        duration = 400;
      }

      Object(_helpers_scrollTo_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.title, 0, duration);
      setTimeout(function () {
        _this.moveRight();
      }, duration);
    },
    SuccessRequest: function SuccessRequest() {
      var _this2 = this;

      this.$refs.request_form.classList.remove('slideleft');
      this.$refs.request_form.classList.remove('slideright');
      var documentOffset = Object(_helpers_getScrollTop_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      var titleOffset = Object(_helpers_getScrollTop_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.title);
      var duration = 600;
      this.step = 2;
      this.isRight = true;

      if (documentOffset === titleOffset) {
        this.successSteps = true;
        return;
      }

      if (Math.abs(titleOffset - documentOffset) < 200) {
        duration = 400;
      }

      Object(_helpers_scrollTo_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.title, 0, duration);
      setTimeout(function () {
        _this2.successSteps = true;
      }, duration);
    },
    PrevUser: function PrevUser() {
      var _this3 = this;

      var documentOffset = Object(_helpers_getScrollTop_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      var titleOffset = Object(_helpers_getScrollTop_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.title);
      var duration = 600;
      this.step = 0;
      this.isRight = false;

      if (documentOffset === titleOffset) {
        this.moveLeft();
        return;
      }

      if (Math.abs(titleOffset - documentOffset) < 200) {
        duration = 400;
      }

      Object(_helpers_scrollTo_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.title, 0, duration);
      setTimeout(function () {
        _this3.moveLeft();
      }, duration);
    },
    GetID: function GetID(e) {
      this.requestid = e;
    },
    GetFolio: function GetFolio(e) {
      this.requestfolio = e;
    },
    GetEmail: function GetEmail(e) {
      var email = e;
      var domain = email.replace(/.*@/, "");

      if (domain != "ujed.mx") {
        this.otherEmail = true;
      }
    },
    reset: function reset() {
      this.requestid = '';
      this.otherEmail = false;
      this.requestfolio = '';
    },
    deleteRequest: function deleteRequest() {
      this.step = 0;
      this.isRight = false;
      this.$emit('deleterequest', true);
      this.reset();
      this.PrevUser();
    },
    newRequest: function newRequest() {
      var _this4 = this;

      var documentOffset = Object(_helpers_getScrollTop_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      var titleOffset = Object(_helpers_getScrollTop_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.title);
      var duration = 600;
      this.step = 0;
      this.isRight = true;

      if (documentOffset === titleOffset) {
        this.reset();
        this.successSteps = false;
        return;
      }

      if (Math.abs(titleOffset - documentOffset) < 200) {
        duration = 400;
      }

      Object(_helpers_scrollTo_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.title, 0, duration);
      setTimeout(function () {
        _this4.reset();

        _this4.successSteps = false;
      }, duration);
    },
    moveRight: function moveRight() {
      var _this5 = this;

      this.$refs.request_form.classList.remove('slideleft');
      this.$refs.request_form.classList.add('slideright');
      setTimeout(function () {
        _this5.$refs.user.classList.add('invisible');
      }, 400);
      this.$refs.request.classList.remove('invisible');
      setTimeout(function () {
        _this5.$refs.requeststep.$refs.description_field.$el.focus();
      }, 400);
    },
    moveLeft: function moveLeft() {
      var _this6 = this;

      this.$refs.request_form.classList.remove('slideright');
      this.$refs.request_form.classList.add('slideleft');
      setTimeout(function () {
        _this6.$refs.request.classList.add('invisible');
      }, 400);
      this.$refs.user.classList.remove('invisible');
      setTimeout(function () {
        _this6.$refs.userstep.$refs.email_field.$el.focus();
      }, 400);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/Steps.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/Steps.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    step: {
      type: Number,
      required: true
    },
    isRight: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    step: function step(val) {
      var _this = this;

      if (this.step === 1 && this.isRight) {
        this.$refs.progressbar.classList.remove('request__progress--success-reverse');
        Vue.nextTick(function () {
          _this.$refs.progressbar.classList.add('request__progress--success');
        });
        setTimeout(function () {
          _this.$refs.progressbar.classList.add('request__progress--full');
        }, 500);
      }

      if (this.step === 0 && !this.isRight) {
        this.$refs.progressbar.classList.remove('request__progress--success');
        Vue.nextTick(function () {
          _this.$refs.progressbar.classList.add('request__progress--success-reverse');
        });
        setTimeout(function () {
          _this.$refs.progressbar.classList.remove('request__progress--full');
        }, 500);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/UserStepForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/UserStepForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_BaseForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/BaseForm.vue */ "./resources/js/main/components/forms/base/BaseForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _base_BaseForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    ureslist: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      fields: {
        ures: '',
        id: ''
      }
    };
  },
  mounted: function mounted() {
    this.$parent.$on('deleterequest', this.reset);
  },
  methods: {
    /**
     * Handle redirection after receiving a successful response.
     *
     * @param {Object} response
     */
    onSuccess: function onSuccess(response) {
      this.isSubmitting = false;
      this.$emit('successuser', true);
      this.fields.id = response.data.id.toString();
      this.$emit('requestid', response.data.id.toString());
    },
    reset: function reset() {
      this.fields = {
        apellido_materno: '',
        apellido_paterno: '',
        correo: '',
        extension: '',
        id: '',
        matricula: '',
        nombre: '',
        pautoriza: '',
        telefono: '',
        ures: ''
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/BaseForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/BaseForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_scrollTo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/scrollTo.js */ "./resources/js/helpers/scrollTo.js");
/* harmony import */ var _CheckboxField_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxField.vue */ "./resources/js/main/components/forms/base/CheckboxField.vue");
/* harmony import */ var _DateField_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateField.vue */ "./resources/js/main/components/forms/base/DateField.vue");
/* harmony import */ var _FieldErrors_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldErrors.vue */ "./resources/js/main/components/forms/base/FieldErrors.vue");
/* harmony import */ var _FileField_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FileField.vue */ "./resources/js/main/components/forms/base/FileField.vue");
/* harmony import */ var _FormButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormButton.vue */ "./resources/js/main/components/forms/base/FormButton.vue");
/* harmony import */ var _SelectField_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectField.vue */ "./resources/js/main/components/forms/base/SelectField.vue");
/* harmony import */ var _TextArea_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TextArea.vue */ "./resources/js/main/components/forms/base/TextArea.vue");
/* harmony import */ var _TextField_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TextField.vue */ "./resources/js/main/components/forms/base/TextField.vue");









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CheckboxField: _CheckboxField_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FieldErrors: _FieldErrors_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    FileField: _FileField_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    FormButton: _FormButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    SelectField: _SelectField_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    TextArea: _TextArea_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    TextField: _TextField_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    DateField: _DateField_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    /**
     * The URI that will recieve the data.
     */
    action: {
      type: String,
      required: true
    },

    /**
     * HTTP method used to submit the form.
     */
    method: {
      type: String,
      required: false,
      "default": 'post'
    },

    /**
     * Redirect to the given URI after form submit. This overrides
     * any redirection received as response. Leave empty to ignore.
     */
    redirectTo: {
      type: String,
      required: false,
      "default": ''
    },

    /**
     * Space to have as offset between the top of the vieport and the
     * first invalid field when validation fails. Unitless pixel value.
     */
    scrollOffset: {
      type: Number,
      required: false,
      "default": 50
    },

    /**
     * Define if the form must perform AJAX validation on submit
     * and display any errors if the validation fails.
     */
    validate: {
      type: Boolean,
      "default": true
    },

    /**
     * Define initial values for fields.
     */
    initial: {
      type: Object,
      required: false,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      errors: {},
      groupedErrors: {},
      isSubmitting: false,
      submitError: false,
      supportsDates: null,
      fields: {
        _method: this.method
      }
    };
  },
  computed: {
    /**
     * Check if form element has an `enctype` property with a value
     * of `multipart/form-data`. If so, a FormData object will be
     * used to send the form via AJAX.
     */
    supportsFiles: function supportsFiles() {
      return this.$el.getAttribute('enctype') === 'multipart/form-data';
    }
  },

  /**
   * Group validation errors by field. Useful when using array fields in
   * form. Example:
   *
   * errors: {
   *     textfield_error: ...
   *     array_error.0: ...
   *     array_error.1: ...
   * }
   *
   * groupedErrors: {
   *     textfield_error: ...
   *     array_error: [
   *         0: ...
   *         1: ...
   *     ]
   * }
   */
  watch: {
    errors: function errors(value) {
      var regex = new RegExp('\\.\\d+$');
      var groupedErrors = {};

      for (var errorKey in value) {
        var matches = regex.exec(errorKey);

        if (matches) {
          var field = errorKey.replace(regex, '');
          var index = matches[0].replace('.', '');
          groupedErrors[field] = groupedErrors[field] || {};
          groupedErrors[field][index] = value[errorKey];
        } else {
          groupedErrors[errorKey] = value[errorKey];
        }
      }

      this.groupedErrors = groupedErrors;
    }
  },

  /**
   * Set the initial values.
   * Add listener for the submit event.
   */
  mounted: function mounted() {
    for (var key in this.initial) {
      this.$set(this.fields, key, this.initial[key]);
    }

    this.$el.addEventListener('submit', this.submit);
  },
  methods: {
    /**
     * Submit the form via AJAX.
     */
    submit: function submit(e) {
      var _this = this;

      e.preventDefault();
      this.isSubmitting = true;
      this.submitError = false;
      this.hook('beforeSubmit');
      window.axios.post(this.action, this.supportsFiles ? this.createFormData() : this.fields).then(function (response) {
        _this.errors = {};

        _this.hook('submitSucceeded', response);

        _this.onSuccess(response);
      })["catch"](this.onSubmitFail);
    },

    /**
     * Return a new FormData object with the information
     * of the `fields` property.
     *
     * If a field has an Array as value, square brackets "[]" are
     * appended to the key name.
     *
     * @return {FormData}
     */
    createFormData: function createFormData() {
      var formData = new FormData();

      for (var key in this.fields) {
        if (Array.isArray(this.fields[key])) {
          for (var i = 0; i < this.fields[key].length; i++) {
            formData.append(key + '[]', this.fields[key][i]);
          }
        } else {
          formData.append(key, this.fields[key]);
        }
      }

      return formData;
    },

    /**
     * If the failed response has a status code of 422 or 429, handle the
     * display of validation errors according to user options.
     * Otherwise, treat it as a server error.
     *
     * @param {Object} error
     */
    onSubmitFail: function onSubmitFail(error) {
      var _this2 = this;

      this.errors = {};
      this.validationCodes = [422, 429];
      this.isSubmitting = false;
      this.submitError = this.validationCodes.indexOf(error.response.status) === -1;
      this.hook('submitFailed', error);

      if (!this.validate || this.submitError) {
        return;
      }

      this.errors = error.response.data.errors; // Wait for `aria-invalid` attributes to be updated
      // before scrolling to the first invalid field

      Vue.nextTick(function () {
        _this2.scrollToError();

        _this2.hook('afterValidation');
      });
    },

    /**
     * Handle redirection after receiving a successful response.
     *
     * @param {Object} response
     */
    onSuccess: function onSuccess(response) {
      if (this.redirectTo) {
        return window.location.href = this.redirectTo;
      }

      if (response.headers['redirect-to']) {
        return window.location.href = response.headers['redirect-to'];
      }

      this.isSubmitting = false;
    },

    /**
     * Scroll to the first invalid field in form.
     */
    scrollToError: function scrollToError() {
      var invalidField = this.$el.querySelector('[aria-invalid="true"]');

      if (invalidField) {
        Object(_helpers_scrollTo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(invalidField, -this.scrollOffset);
        invalidField.focus();
      }
    },

    /**
     * Call a method after verifying that it exists.
     * Useful for registering hooks for use in components that might
     * extend this one.
     *
     * @param {string} method
     * @param {mixed} params
     */
    hook: function hook(method) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (typeof this[method] === 'function') {
        this[method](params);
      }
    },

    /**
     * Update a form field with the given value.
     *
     * @param  {string} fieldName
     * @param  {mixed} value
     */
    updateField: function updateField(fieldName, value) {
      this.$set(this.fields, fieldName, value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/CheckboxField.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/CheckboxField.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_FormField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/FormField.js */ "./resources/js/main/mixins/FormField.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_FormField_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    /**
     * Receive an initial value for the field.
     */
    initial: {
      type: Number,
      required: false,
      "default": 0
    }
  },
  data: function data() {
    return {
      checked: this.initial
    };
  },
  mounted: function mounted() {
    this.$emit('input', this.initial);
  },
  methods: {
    /**
     * Emit the value to the form.
     *
     * @param {Object} e
     */
    onChange: function onChange(e) {
      this.checked = e.target.checked;
      this.$emit('input', this.initial);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/DateField.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/DateField.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_FormField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/FormField.js */ "./resources/js/main/mixins/FormField.js");
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_FormField_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    /**
     * Receive an initial value for the field.
     */
    initial: {
      type: String,
      required: false,
      "default": ''
    }
  },
  data: function data() {
    return {
      displayValue: ''
    };
  },
  watch: {
    displayValue: function displayValue(value) {
      this.$emit('input', this.formatDate(value));
    }
  },
  created: function created() {
    if (this.$parent.supportsDates === null) {
      this.$parent.supportsDates = this.checkBrowserSupport();
    }
  },

  /**
   * Set an initial value to the field.
   */
  mounted: function mounted() {
    this.displayValue = this.formatDate(this.initial, true);
  },
  methods: {
    /**
     * Determine if browser supports native `date` type fields.
     *
     * @return boolean
     */
    checkBrowserSupport: function checkBrowserSupport() {
      var input = document.createElement('input');
      input.setAttribute('type', 'date');
      input.setAttribute('value', 'invalid-date');
      return input.value !== 'invalid-date';
    },

    /**
     * Normalize date for browsers that don't have support
     * for native `date` fields.
     *
     * @param  {string} date
     * @param  {boolean} dmyFormat - Return the date in dd/mm/yyyy format.
     * @return {string}
     */
    formatDate: function formatDate(date) {
      var dmyFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.$parent.supportsDates || !date) {
        return date;
      }

      var regex = dmyFormat ? /^(\d{4})-(\d{2})-(\d{2})$/ : /^(\d{2})\/(\d{2})\/(\d{4})$/;
      var separator = dmyFormat ? '/' : '-';
      var match = regex.exec(date);
      return match ? match[3] + separator + match[2] + separator + match[1] : date;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/FieldErrors.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/FieldErrors.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    /**
     * The `name` value of the associated field.
     */
    name: {
      type: String,
      required: true
    },

    /**
     * Define if the component should merge the errors received
     * for an array field.
     */
    array: {
      type: Boolean,
      required: false,
      "default": false
    }
  },
  computed: {
    /**
     * Fetch the validation errors for the associated field
     * from the parent form component.
     *
     * @return {array}
     */
    errors: function errors() {
      if (!this.array) {
        return this.$parent.errors[this.name];
      }

      var regex = new RegExp('^' + this.name + '\\.\\d+$');
      var errors = [];

      for (var field in this.$parent.errors) {
        if (regex.test(field)) {
          this.$parent.errors[field].forEach(function (error) {
            if (errors.indexOf(error) === -1) {
              errors.push(error);
            }
          });
        }
      }

      return errors;
    },

    /**
     * Return a formatted ID for the error list.
     *
     * @return {string}
     */
    id: function id() {
      return this.$options.filters.slugify(this.name + '-errors');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/FileField.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/FileField.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_FormField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/FormField.js */ "./resources/js/main/mixins/FormField.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_FormField_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  model: {
    event: 'attached'
  },
  props: {
    /**
     * Define if multiple files can be uploaded.
     */
    multiple: {
      type: Boolean,
      required: false,
      "default": false
    },

    /**
     * A placeholder to show in the text input when no file
     * has been selected yet.
     */
    placeholder: {
      type: String,
      required: false,
      "default": 'Ningún archivo seleccionado.'
    }
  },
  data: function data() {
    return {
      attachments: [],
      hasFocus: false
    };
  },
  computed: {
    /**
     * The text to be shown in input when files are attached.
     *
     * @return string
     */
    inputText: function inputText() {
      switch (this.attachments.length) {
        case 0:
          return '';

        case 1:
          return this.attachments[0].name;

        default:
          return this.attachments.length + ' archivos seleccionados.';
      }
    }
  },
  methods: {
    /**
     * Update the attachments.
     *
     * @param {Object} e
     */
    onChange: function onChange(e) {
      var attachments = [];
      Array.prototype.forEach.call(e.target.files, function (file) {
        attachments.push(file);
      });
      this.attachments = attachments;
      this.$emit('attached', this.multiple ? this.attachments : this.attachments[0]);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/SelectField.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/SelectField.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_FormField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/FormField.js */ "./resources/js/main/mixins/FormField.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_FormField_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    /**
     * Receive an initial selected value.
     */
    initial: {
      type: String,
      required: false,
      "default": ''
    },

    /**
     * An object of values and descriptions to populate the options
     * inside the select field.
     */
    options: {
      type: [Object, Array],
      required: false,
      "default": function _default() {
        return [];
      }
    }
  },
  computed: {
    orderedOptions: function orderedOptions() {
      var firstElement = this.options[Object.keys(this.options)[0]];

      if (typeof firstElement !== 'string') {
        return this.options;
      }

      var result = [];

      for (var key in this.options) {
        result.push({
          key: key,
          value: this.options[key]
        });
      }

      return result;
    }
  },

  /**
   * Add the reactive property to the `fields` object in parent form.
   */
  mounted: function mounted() {
    this.$set(this.$parent.fields, this.name, this.initial);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/TextArea.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/TextArea.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_FormField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/FormField.js */ "./resources/js/main/mixins/FormField.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_FormField_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    /**
     * Define the maximum number of characters allowed.
     */
    maxlength: {
      type: String,
      required: false,
      initial: '10000'
    }
  },
  data: function data() {
    return {
      hasScrollbar: false
    };
  },

  /**
   * Set the initial content (if any) and check for the presence
   * of a scrollbar as soon as the component is mounted.
   */
  mounted: function mounted() {
    this.setInitialContent();
    this.setScrollbarState();
  },
  methods: {
    /**
     * Add the reactive property to the `fields` object in parent form.
     */
    setInitialContent: function setInitialContent() {
      this.$el.value = this.$slots["default"] ? this.$slots["default"][0].text : '';
      this.$set(this.$parent.fields, this.name, this.$el.value);
    },

    /**
     * Determine whether the textarea currently shows a scrollbar.
     */
    setScrollbarState: function setScrollbarState() {
      this.hasScrollbar = this.$el.scrollHeight >= this.$el.offsetHeight;
    },

    /**
     * Send the field content to the parent form and update the scrollbar
     * visibility state when the user interacts with the textarea.
     */
    onInput: function onInput(e) {
      this.$emit('input', e.target.value);
      this.setScrollbarState();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/TextField.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/TextField.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_FormField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/FormField.js */ "./resources/js/main/mixins/FormField.js");
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_FormField_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    /**
     * Receive an initial value for the field.
     */
    initial: {
      type: String,
      required: false,
      "default": ''
    },

    /**
     * Define the maximum number of characters allowed.
     */
    maxlength: {
      type: String,
      required: false,
      "default": '255'
    },

    /**
     * Define the value for the `type` attribute of the input
     * (e.g. text, email).
     */
    type: {
      type: String,
      required: false,
      "default": 'text'
    }
  },

  /**
   * Add the reactive property to the `fields` object in parent form.
   */
  mounted: function mounted() {
    this.$set(this.$parent.fields, this.name, this.initial);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/menu/Menu.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/menu/Menu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Submenu_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submenu.vue */ "./resources/js/main/components/menu/Submenu.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SiteSubmenu: _Submenu_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    breakpoint: {
      type: Number,
      required: true
    },
    links: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      breakpointMatches: false,
      buttonClicked: false,
      focusTrap: null,
      menuIsVisible: false,
      menuIsOpen: false,
      menuItems: [],
      css: {
        overflowHidden: 'overflow-hidden'
      }
    };
  },
  watch: {
    menuIsOpen: function menuIsOpen(value) {
      if (value) {
        // Wait for the element to be visible (nextTick is not enough)
        setTimeout(this.focusTrap.activate, 50);
        this.$refs.image_title.classList.add('visually-hidden');
      } else {
        this.focusTrap.deactivate();
      }
    }
  },
  mounted: function mounted() {
    this.menuItems = this.$el.querySelectorAll('.js-item');
    this.setMatchMedia();
    this.focusTrap = this.setFocusTrap();
    this.$root.$on('overlayClosed', this.closeMenu);
  },
  methods: {
    /**
     * Return the previous or next item sibling (link or submenu title).
     *
     * @param  {HTMLElement} currentItem - Currently focused item.
     * @param  {string} target - Accepted values: "previous" and "next".
     * @return {HTMLElement|undefined}
     */
    findSibling: function findSibling(currentItem) {
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'next';
      var index = Array.prototype.indexOf.call(this.menuItems, currentItem);
      return this.menuItems[target === 'previous' ? index - 1 : index + 1];
    },

    /**
     * Return if given URL contains a reference to open in a new tab
     * and if it points to an external site.
     *
     * @param  {string}  url
     * @return {Object}
     * @return {string}  Object.url - The clean URL (without "_blank" reference).
     * @return {boolean} Object.newTab - If the link should open in a new tab.
     * @return {boolean} Object.external - If URL belongs to a diferent base domain.
     */
    parseLink: function parseLink(url) {
      var cleanUrl = url.replace(/^_?blank:/, '');
      return {
        url: cleanUrl,
        newTab: cleanUrl !== url,
        external: cleanUrl.slice(0, this.$root.path.length) !== this.$root.path
      };
    },

    /**
     * Initialize media query.
     */
    setMatchMedia: function setMatchMedia() {
      var mq = window.matchMedia("screen and (min-width:".concat(this.breakpoint, "px)"));
      mq.addListener(this.reset);
      this.reset(mq);
    },

    /*
    |------------------------------------------------------------------------
    | Visibility
    |------------------------------------------------------------------------
    */

    /**
     * Immediately show or hide menu list when media match is triggered.
     *
     * @param {Object} e
     */
    reset: function reset(e) {
      if (this.menuIsOpen) {
        document.body.classList.remove(this.css.overflowHidden);
        this.$root.$emit('closeOverlay');
      }

      this.menuIsOpen = false;
      this.menuIsVisible = e.matches;
      this.breakpointMatches = e.matches;
      this.buttonClicked = false;
      this.$emit('resetSubmenus', e.matches);
      this.$refs.image_title.classList.remove('visually-hidden');
    },

    /**
     * Close site menu on responsive view.
     */
    closeMenu: function closeMenu() {
      this.menuIsOpen = false;
      this.menuIsVisible = false;
      document.body.classList.remove(this.css.overflowHidden);
      document.removeEventListener('keyup', this.onEscape);
      this.$root.$emit('closeOverlay');
      var app = document.getElementById('app');
      app.classList.remove('overflow-hidden');
      this.$refs.image_title.classList.remove('visually-hidden');
    },

    /*
     * Diplay site menu on responsive view.
     */
    openMenu: function openMenu() {
      this.menuIsOpen = true;
      this.menuIsVisible = true;
      document.body.classList.add(this.css.overflowHidden);
      document.addEventListener('keyup', this.onEscape);
      this.$root.$emit('showOverlay');
      var app = document.getElementById('app');
      app.classList.add('overflow-hidden');
    },

    /**
     * Toggle menu visibility.
     */
    toggleMenu: function toggleMenu() {
      this.buttonClicked = true;

      if (this.menuIsOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },

    /*
    |------------------------------------------------------------------------
    | Focus
    |------------------------------------------------------------------------
    */

    /*
     * Return a new instance of FocusTrap on the menu list.
     */
    setFocusTrap: function setFocusTrap() {
      return window.FocusTrap(this.$refs.menu_container, {
        escapeDeactivates: false,
        clickOutsideDeactivates: true
      });
    },

    /**
     * Focus the previous focusable element in the menu, being a menu link,
     * submenu link, or title. If the current focus is on a menu item,
     * and it's preceded by a submenu, the focus will go to the
     * last link of that submenu.
     *
     * @param {HTMLElement} focusedItem - Currently focused menu item
     */
    focusPreviousElement: function focusPreviousElement(focusedItem) {
      var sibling = this.findSibling(focusedItem, 'previous');

      if (!sibling) {
        return;
      }

      if (sibling.classList.contains(this.css.submenuTitle)) {
        return this.$emit('focusLastSubmenuLink', sibling);
      }

      sibling.focus();
    },

    /**
     * Change focus to the previous or next menu item.
     *
     * @param {HTML Element} focusedElement - Currently focused menu item
     * @param {string} direction - Accepted values: "previous" and "next"
     */
    focusSiblingItem: function focusSiblingItem(focusedElement, direction) {
      var sibling = this.findSibling(focusedElement, direction);

      if (sibling) {
        sibling.focus();
      }
    },

    /*
    |------------------------------------------------------------------------
    | Keyboard navigation
    |------------------------------------------------------------------------
    */

    /**
     * Navigate through menu items with keyboard arrows.
     * The "up" key moves the focus to the previous focusable element inside
     * menu list (including submenu links).
     * "Left" key changes focus to the previous menu item while "right" and "down"
     * keys change it to the next menu item.
     *
     * @param {Object} e
     */
    arrowNavigation: function arrowNavigation(e) {
      if (e.key === 'ArrowUp') {
        return this.focusPreviousElement(e.target);
      }

      this.focusSiblingItem(e.target, e.key === 'ArrowLeft' ? 'previous' : 'next');
    },

    /**
     * Close menu when "Esc" key is pressed.
     */
    onEscape: function onEscape(e) {
      if (e.key === 'Escape') {
        this.closeMenu();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/menu/Submenu.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/menu/Submenu.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_animation_slide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/animation/slide.js */ "./resources/js/helpers/animation/slide.js");
/* harmony import */ var _SubmenuLink_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmenuLink.vue */ "./resources/js/main/components/menu/SubmenuLink.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SiteSubmenuLink: _SubmenuLink_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    breakpointMatches: {
      type: Boolean,
      required: true
    },
    links: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      isActive: false,
      submenuLinks: [],
      css: {
        submenuLink: 'main-menu__submenu-link'
      }
    };
  },
  computed: {
    isLast: function isLast() {
      var index = Array.prototype.indexOf.call(this.$parent.menuItems, this.$refs.title);
      return index === this.$parent.menuItems.length - 1;
    }
  },
  watch: {
    isActive: function isActive(value) {
      if (this.breakpointMatches) {
        this.$refs.submenu.style.display = '';
        return;
      }

      if (value) {
        Object(_helpers_animation_slide_js__WEBPACK_IMPORTED_MODULE_0__["slideDown"])(this.$refs.submenu);
      } else {
        Object(_helpers_animation_slide_js__WEBPACK_IMPORTED_MODULE_0__["slideUp"])(this.$refs.submenu);
      }
    }
  },
  mounted: function mounted() {
    this.submenuLinks = this.$el.querySelectorAll('.' + this.css.submenuLink);
    this.$parent.$on('resetSubmenus', this.close);
    this.$parent.$on('focusLastSubmenuLink', this.focusLastLink);
  },
  methods: {
    /**
     * Set submenu as active on desktop view when mouse enters the submenu.
     */
    onMouseOver: function onMouseOver() {
      if (this.breakpointMatches) {
        this.isActive = true;
      }
    },

    /**
     * Set submenu as inactive on desktop view when mouse leaves the submenu.
     */
    onMouseLeave: function onMouseLeave() {
      this.closeIfBreakpoint();
    },

    /*
    |------------------------------------------------------------------------
    | Visibility
    |------------------------------------------------------------------------
    */

    /**
     * Close submenu.
     */
    close: function close() {
      this.isActive = false;
    },

    /**
     * Close submenu only if breakpoint matches.
     */
    closeIfBreakpoint: function closeIfBreakpoint() {
      if (this.breakpointMatches) {
        this.isActive = false;
      }
    },

    /**
     * Show or hide submenu.
     */
    toggle: function toggle() {
      this.isActive = !this.isActive;
    },

    /*
    |------------------------------------------------------------------------
    | Focus
    |------------------------------------------------------------------------
    */

    /**
     * Focus the last link in submenu if the given HTML element matches
     * the title of the component.
     *
     * @param {HTMLElement} title
     */
    focusLastLink: function focusLastLink(title) {
      var _this = this;

      if (this.$refs.title === title) {
        this.isActive = true; // Wait for the element to be visible (nextTick is not enough)

        setTimeout(function () {
          _this.submenuLinks[_this.submenuLinks.length - 1].focus();
        }, 50);
      }
    },

    /**
     * Hide submenus when focus moves to a new menu item
     * on desktop screens.
     *
     * @param {Object} e
     */
    onBlur: function onBlur(e) {
      var _this2 = this;

      if (!this.breakpointMatches) {
        return;
      }

      Vue.nextTick(function () {
        if (_this2.submenuLinks[0] !== document.activeElement) {
          _this2.close();
        }
      });
    },

    /*
    |------------------------------------------------------------------------
    | Keyboard navigation
    |------------------------------------------------------------------------
    */

    /**
     * Navigate through submenu links with "up" and "down" arrows.
     *
     * @param {Object} e
     */
    linkNavigation: function linkNavigation(e) {
      var index = Array.prototype.indexOf.call(this.submenuLinks, e.target);
      var siblingLink = this.submenuLinks[e.key === 'ArrowUp' ? index - 1 : index + 1];

      if (siblingLink) {
        return siblingLink.focus();
      }

      if (e.key === 'ArrowUp') {
        return this.$refs.title.focus();
      }

      this.$parent.focusSiblingItem(this.$refs.title, 'next');

      if (!this.isLast) {
        this.closeIfBreakpoint();
      }
    },

    /**
     * Move to previous or next menu item when left or right keys are pressed.
     *
     * @param {Object} e
     */
    onLeftRightKeys: function onLeftRightKeys(e) {
      this.$parent.arrowNavigation({
        target: this.$refs.title,
        key: e.key
      });
    },

    /**
     * When the focus is on a submenu title, move to first link in submenu
     * with "down" key, or to the previous focusable item with "up" key
     * (another menu item or submenu link).
     *
     * @param {Object} e
     */
    onUpDownKeys: function onUpDownKeys(e) {
      var _this3 = this;

      if (e.key === 'ArrowUp') {
        return this.$parent.focusPreviousElement(this.$refs.title);
      }

      this.isActive = true; // Wait for the element to be visible (nextTick is not enough)

      setTimeout(function () {
        _this3.submenuLinks[0].focus();
      }, 50);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/menu/SubmenuLink.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/menu/SubmenuLink.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    linkData: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    isLast: function isLast() {
      var index = Array.prototype.indexOf.call(this.$parent.submenuLinks, this.$refs.link);
      return index === this.$parent.submenuLinks.length - 1;
    }
  },
  methods: {
    /**
     * Move to the current or next menu item with "left" and "right" arrows.
     *
     * @param {Object} e
     */
    onLeftRightKeys: function onLeftRightKeys(e) {
      if (e.key === 'ArrowLeft') {
        return this.$parent.$refs.title.focus();
      }

      this.$parent.onLeftRightKeys(e);

      if (!this.$parent.isLast) {
        this.$parent.closeIfBreakpoint();
      }
    },

    /**
     * Pressing tab while the focus is on the last link of a submenu
     * will deactivate that submenu on desktop view.
     *
     * @param {Object} e
     */
    onTab: function onTab(e) {
      if (this.isLast && !e.shiftKey) {
        this.$parent.closeIfBreakpoint();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/deepmerge/dist/umd.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/umd.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, function () { 'use strict';

	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {}
	}

	function cloneUnlessOtherwiseSpecified(value, options) {
		return (options.clone !== false && options.isMergeableObject(value))
			? deepmerge(emptyTarget(value), value, options)
			: value
	}

	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options)
		})
	}

	function getMergeFunction(key, options) {
		if (!options.customMerge) {
			return deepmerge
		}
		var customMerge = options.customMerge(key);
		return typeof customMerge === 'function' ? customMerge : deepmerge
	}

	function getEnumerableOwnPropertySymbols(target) {
		return Object.getOwnPropertySymbols
			? Object.getOwnPropertySymbols(target).filter(function(symbol) {
				return target.propertyIsEnumerable(symbol)
			})
			: []
	}

	function getKeys(target) {
		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
	}

	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) {
			getKeys(target).forEach(function(key) {
				destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
			});
		}
		getKeys(source).forEach(function(key) {
			if (!options.isMergeableObject(source[key]) || !target[key]) {
				destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
			} else {
				destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			}
		});
		return destination
	}

	function deepmerge(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;

		var sourceIsArray = Array.isArray(source);
		var targetIsArray = Array.isArray(target);
		var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

		if (!sourceAndTargetTypesMatch) {
			return cloneUnlessOtherwiseSpecified(source, options)
		} else if (sourceIsArray) {
			return options.arrayMerge(target, source, options)
		} else {
			return mergeObject(target, source, options)
		}
	}

	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) {
			throw new Error('first argument should be an array')
		}

		return array.reduce(function(prev, next) {
			return deepmerge(prev, next, options)
		}, {})
	};

	var deepmerge_1 = deepmerge;

	return deepmerge_1;

}));


/***/ }),

/***/ "./node_modules/diacritics/index.js":
/*!******************************************!*\
  !*** ./node_modules/diacritics/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.remove = removeDiacritics;

var replacementList = [
  {
    base: ' ',
    chars: "\u00A0",
  }, {
    base: '0',
    chars: "\u07C0",
  }, {
    base: 'A',
    chars: "\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F",
  }, {
    base: 'AA',
    chars: "\uA732",
  }, {
    base: 'AE',
    chars: "\u00C6\u01FC\u01E2",
  }, {
    base: 'AO',
    chars: "\uA734",
  }, {
    base: 'AU',
    chars: "\uA736",
  }, {
    base: 'AV',
    chars: "\uA738\uA73A",
  }, {
    base: 'AY',
    chars: "\uA73C",
  }, {
    base: 'B',
    chars: "\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0181",
  }, {
    base: 'C',
    chars: "\u24b8\uff23\uA73E\u1E08\u0106\u0043\u0108\u010A\u010C\u00C7\u0187\u023B",
  }, {
    base: 'D',
    chars: "\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018A\u0189\u1D05\uA779",
  }, {
    base: 'Dh',
    chars: "\u00D0",
  }, {
    base: 'DZ',
    chars: "\u01F1\u01C4",
  }, {
    base: 'Dz',
    chars: "\u01F2\u01C5",
  }, {
    base: 'E',
    chars: "\u025B\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E\u1D07",
  }, {
    base: 'F',
    chars: "\uA77C\u24BB\uFF26\u1E1E\u0191\uA77B",
  }, {
    base: 'G',
    chars: "\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E\u0262",
  }, {
    base: 'H',
    chars: "\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D",
  }, {
    base: 'I',
    chars: "\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197",
  }, {
    base: 'J',
    chars: "\u24BF\uFF2A\u0134\u0248\u0237",
  }, {
    base: 'K',
    chars: "\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2",
  }, {
    base: 'L',
    chars: "\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780",
  }, {
    base: 'LJ',
    chars: "\u01C7",
  }, {
    base: 'Lj',
    chars: "\u01C8",
  }, {
    base: 'M',
    chars: "\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C\u03FB",
  }, {
    base: 'N',
    chars: "\uA7A4\u0220\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u019D\uA790\u1D0E",
  }, {
    base: 'NJ',
    chars: "\u01CA",
  }, {
    base: 'Nj',
    chars: "\u01CB",
  }, {
    base: 'O',
    chars: "\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C",
  }, {
    base: 'OE',
    chars: "\u0152",
  }, {
    base: 'OI',
    chars: "\u01A2",
  }, {
    base: 'OO',
    chars: "\uA74E",
  }, {
    base: 'OU',
    chars: "\u0222",
  }, {
    base: 'P',
    chars: "\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754",
  }, {
    base: 'Q',
    chars: "\u24C6\uFF31\uA756\uA758\u024A",
  }, {
    base: 'R',
    chars: "\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782",
  }, {
    base: 'S',
    chars: "\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784",
  }, {
    base: 'T',
    chars: "\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786",
  }, {
    base: 'Th',
    chars: "\u00DE",
  }, {
    base: 'TZ',
    chars: "\uA728",
  }, {
    base: 'U',
    chars: "\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244",
  }, {
    base: 'V',
    chars: "\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245",
  }, {
    base: 'VY',
    chars: "\uA760",
  }, {
    base: 'W',
    chars: "\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72",
  }, {
    base: 'X',
    chars: "\u24CD\uFF38\u1E8A\u1E8C",
  }, {
    base: 'Y',
    chars: "\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE",
  }, {
    base: 'Z',
    chars: "\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762",
  }, {
    base: 'a',
    chars: "\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251",
  }, {
    base: 'aa',
    chars: "\uA733",
  }, {
    base: 'ae',
    chars: "\u00E6\u01FD\u01E3",
  }, {
    base: 'ao',
    chars: "\uA735",
  }, {
    base: 'au',
    chars: "\uA737",
  }, {
    base: 'av',
    chars: "\uA739\uA73B",
  }, {
    base: 'ay',
    chars: "\uA73D",
  }, {
    base: 'b',
    chars: "\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253\u0182",
  }, {
    base: 'c',
    chars: "\uFF43\u24D2\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184",
  }, {
    base: 'd',
    chars: "\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\u018B\u13E7\u0501\uA7AA",
  }, {
    base: 'dh',
    chars: "\u00F0",
  }, {
    base: 'dz',
    chars: "\u01F3\u01C6",
  }, {
    base: 'e',
    chars: "\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u01DD",
  }, {
    base: 'f',
    chars: "\u24D5\uFF46\u1E1F\u0192",
  }, {
    base: 'ff',
    chars: "\uFB00",
  }, {
    base: 'fi',
    chars: "\uFB01",
  }, {
    base: 'fl',
    chars: "\uFB02",
  }, {
    base: 'ffi',
    chars: "\uFB03",
  }, {
    base: 'ffl',
    chars: "\uFB04",
  }, {
    base: 'g',
    chars: "\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\uA77F\u1D79",
  }, {
    base: 'h',
    chars: "\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265",
  }, {
    base: 'hv',
    chars: "\u0195",
  }, {
    base: 'i',
    chars: "\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131",
  }, {
    base: 'j',
    chars: "\u24D9\uFF4A\u0135\u01F0\u0249",
  }, {
    base: 'k',
    chars: "\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3",
  }, {
    base: 'l',
    chars: "\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747\u026D",
  }, {
    base: 'lj',
    chars: "\u01C9",
  }, {
    base: 'm',
    chars: "\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F",
  }, {
    base: 'n',
    chars: "\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509",
  }, {
    base: 'nj',
    chars: "\u01CC",
  }, {
    base: 'o',
    chars: "\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\uA74B\uA74D\u0275\u0254\u1D11",
  }, {
    base: 'oe',
    chars: "\u0153",
  }, {
    base: 'oi',
    chars: "\u01A3",
  }, {
    base: 'oo',
    chars: "\uA74F",
  }, {
    base: 'ou',
    chars: "\u0223",
  }, {
    base: 'p',
    chars: "\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755\u03C1",
  }, {
    base: 'q',
    chars: "\u24E0\uFF51\u024B\uA757\uA759",
  }, {
    base: 'r',
    chars: "\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783",
  }, {
    base: 's',
    chars: "\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u0282",
  }, {
    base: 'ss',
    chars: "\xDF",
  }, {
    base: 't',
    chars: "\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787",
  }, {
    base: 'th',
    chars: "\u00FE",
  }, {
    base: 'tz',
    chars: "\uA729",
  }, {
    base: 'u',
    chars: "\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289",
  }, {
    base: 'v',
    chars: "\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C",
  }, {
    base: 'vy',
    chars: "\uA761",
  }, {
    base: 'w',
    chars: "\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73",
  }, {
    base: 'x',
    chars: "\u24E7\uFF58\u1E8B\u1E8D",
  }, {
    base: 'y',
    chars: "\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF",
  }, {
    base: 'z',
    chars: "\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763",
  }
];

var diacriticsMap = {};
for (var i = 0; i < replacementList.length; i += 1) {
  var chars = replacementList[i].chars;
  for (var j = 0; j < chars.length; j += 1) {
    diacriticsMap[chars[j]] = replacementList[i].base;
  }
}

function removeDiacritics(str) {
  return str.replace(/[^\u0000-\u007e]/g, function(c) {
    return diacriticsMap[c] || c;
  });
}

exports.replacementList = replacementList;
exports.diacriticsMap = diacriticsMap;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/GalleryCard.vue?vue&type=template&id=ebb9e31e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/GalleryCard.vue?vue&type=template&id=ebb9e31e& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    {
      staticClass: "gallery",
      on: {
        click: function($event) {
          $event.preventDefault()
          return _vm.load($event)
        }
      }
    },
    [
      _c("div", { staticClass: "gallery__cover-container" }, [
        _c("span", { staticClass: "gallery__counter" }, [
          _c("span", { staticClass: "gallery__counter-number" }, [
            _vm._v(_vm._s(_vm.imagesCount))
          ]),
          _vm._v(" imágenes\n        ")
        ]),
        _vm._v(" "),
        _c("img", {
          staticClass: "js-thumb gallery__cover",
          attrs: { src: _vm.$root.path + "/img/galeria/" + _vm.cover }
        })
      ]),
      _vm._v("\n    " + _vm._s(_vm.title) + "\n")
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/GalleryLink.vue?vue&type=template&id=5c62834a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/GalleryLink.vue?vue&type=template&id=5c62834a& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    { on: { click: _vm.load } },
    [_c("span", { staticClass: "workshop__gallery-icon" }), _vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/SiteOverlay.vue?vue&type=template&id=8bc3d710&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/SiteOverlay.vue?vue&type=template&id=8bc3d710& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticClass: "overlay",
    class: { "overlay--active": _vm.isActive },
    on: { click: _vm.close }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/TruncatedText.vue?vue&type=template&id=0ba4768c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/TruncatedText.vue?vue&type=template&id=0ba4768c& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: !_vm.expanded,
          expression: "! expanded"
        }
      ],
      domProps: { innerHTML: _vm._s(_vm.truncatedText) }
    }),
    _vm._v(" "),
    _c(
      "p",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.expanded,
            expression: "! expanded"
          }
        ]
      },
      [
        _c(
          "button",
          {
            staticClass: "btn-link",
            on: {
              click: function($event) {
                _vm.expanded = true
              }
            }
          },
          [
            _c("span", { staticClass: "align-bottom" }, [
              _vm._v("Mostrar más")
            ]),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: _vm.$root.path + "/img/icons/plus-circle-link.svg",
                alt: "",
                width: "16px"
              }
            })
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.expanded,
          expression: "expanded"
        }
      ],
      domProps: { innerHTML: _vm._s(_vm.text) }
    }),
    _vm._v(" "),
    _c(
      "p",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.expanded,
            expression: "expanded"
          }
        ]
      },
      [
        _c(
          "button",
          {
            staticClass: "btn-link",
            on: {
              click: function($event) {
                _vm.expanded = false
              }
            }
          },
          [
            _c("span", { staticClass: "align-bottom" }, [
              _vm._v("Mostrar menos")
            ]),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: _vm.$root.path + "/img/icons/minus-circle-link.svg",
                width: "16px",
                alt: ""
              }
            })
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/RequestFile.vue?vue&type=template&id=4e74b5fa&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/RequestFile.vue?vue&type=template&id=4e74b5fa& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card mb-4" }, [
    _c("div", { staticClass: "card__title" }, [
      _c(
        "p",
        { staticClass: "m-0 d-initial" },
        [
          _vm._t("paperclip", null, { paperclip: "paperclip" }),
          _vm._v(" "),
          _c("i", [_vm._v(" " + _vm._s(_vm.$parent.names[_vm.name]) + "    ")])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn--without-style color-danger p-0 card__button",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              return _vm.remove(_vm.name)
            }
          }
        },
        [_vm._t("x")],
        2
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card__body card--file" }, [
      _c(
        "div",
        { staticClass: "card card--thumb mr-8 m-auto sm:d-block text-center" },
        [_c("img", { attrs: { src: _vm.$parent.thumbs[_vm.name], alt: "" } })]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "form-control m-0" }, [
        _c("label", { staticClass: "size-caption", attrs: { for: _vm.name } }, [
          _vm._v("\n                Descripción del archivo\n                "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _vm.type === "checkbox"
          ? _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.$parent.fields.files[_vm.name],
                  expression: "$parent.fields.files[name]"
                }
              ],
              staticClass: "form-field",
              class: { "form-field--invalid": _vm.hasErrors },
              attrs: {
                id: _vm.id,
                name: _vm.name,
                "aria-invalid": _vm.hasErrors ? "true" : null,
                "aria-describedBy": _vm.describedBy || null,
                maxlength: 80,
                type: "checkbox"
              },
              domProps: {
                value: _vm.value,
                checked: Array.isArray(_vm.$parent.fields.files[_vm.name])
                  ? _vm._i(_vm.$parent.fields.files[_vm.name], _vm.value) > -1
                  : _vm.$parent.fields.files[_vm.name]
              },
              on: {
                input: function($event) {
                  return _vm.$emit("input", $event.target.value)
                },
                change: function($event) {
                  var $$a = _vm.$parent.fields.files[_vm.name],
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = _vm.value,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 &&
                        _vm.$set(
                          _vm.$parent.fields.files,
                          _vm.name,
                          $$a.concat([$$v])
                        )
                    } else {
                      $$i > -1 &&
                        _vm.$set(
                          _vm.$parent.fields.files,
                          _vm.name,
                          $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                        )
                    }
                  } else {
                    _vm.$set(_vm.$parent.fields.files, _vm.name, $$c)
                  }
                }
              }
            })
          : _vm.type === "radio"
          ? _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.$parent.fields.files[_vm.name],
                  expression: "$parent.fields.files[name]"
                }
              ],
              staticClass: "form-field",
              class: { "form-field--invalid": _vm.hasErrors },
              attrs: {
                id: _vm.id,
                name: _vm.name,
                "aria-invalid": _vm.hasErrors ? "true" : null,
                "aria-describedBy": _vm.describedBy || null,
                maxlength: 80,
                type: "radio"
              },
              domProps: {
                value: _vm.value,
                checked: _vm._q(_vm.$parent.fields.files[_vm.name], _vm.value)
              },
              on: {
                input: function($event) {
                  return _vm.$emit("input", $event.target.value)
                },
                change: function($event) {
                  return _vm.$set(_vm.$parent.fields.files, _vm.name, _vm.value)
                }
              }
            })
          : _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.$parent.fields.files[_vm.name],
                  expression: "$parent.fields.files[name]"
                }
              ],
              staticClass: "form-field",
              class: { "form-field--invalid": _vm.hasErrors },
              attrs: {
                id: _vm.id,
                name: _vm.name,
                "aria-invalid": _vm.hasErrors ? "true" : null,
                "aria-describedBy": _vm.describedBy || null,
                maxlength: 80,
                type: _vm.type
              },
              domProps: {
                value: _vm.value,
                value: _vm.$parent.fields.files[_vm.name]
              },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$parent.fields.files,
                      _vm.name,
                      $event.target.value
                    )
                  },
                  function($event) {
                    return _vm.$emit("input", $event.target.value)
                  }
                ]
              }
            }),
        _vm._v(" "),
        _vm.hasErrors
          ? _c(
              "ul",
              { staticClass: "error", attrs: { id: _vm.id } },
              _vm._l(_vm.$parent.errors[_vm.name], function(error, i) {
                return _c("li", {
                  key: i,
                  domProps: { textContent: _vm._s(error) }
                })
              }),
              0
            )
          : _vm._e(),
        _vm._v(" "),
        _c("small", { staticClass: "color-gray-60" }, [
          _vm._v("Máximo 80 caracteres")
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("small", { staticClass: "color-gray-60" }, [
      _c("i", [_vm._v("Opcional")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/RequestStepForm.vue?vue&type=template&id=8c5335a4&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/RequestStepForm.vue?vue&type=template&id=8c5335a4& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    [
      _c(
        "div",
        { staticClass: "form-control" },
        [
          _c("label", { attrs: { for: "descripcion" } }, [
            _vm._v("Cuéntanos en qué podemos ayudarte")
          ]),
          _vm._v(" "),
          _c("text-area", {
            ref: "description_field",
            attrs: {
              name: "descripcion",
              cols: "30",
              rows: "10",
              maxlength: "500"
            },
            model: {
              value: _vm.fields.descripcion,
              callback: function($$v) {
                _vm.$set(_vm.fields, "descripcion", $$v)
              },
              expression: "fields.descripcion"
            }
          }),
          _vm._v(" "),
          _c("field-errors", { attrs: { name: "descripcion" } })
        ],
        1
      ),
      _vm._v(" "),
      Object.keys(_vm.fields.files).length > 0
        ? _c("p", { staticClass: "size-caption" }, [
            _vm._v("Archivos adjuntos")
          ])
        : _vm._e(),
      _vm._v(" "),
      Object.keys(_vm.fields.files).length > 0
        ? _c("p", { staticClass: "size-sm color-gray-60" }, [
            _vm._v(
              "Si lo deseas, puedes agregar una breve anotación a los archivos que has agregado."
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.fields.files, function(file, key) {
        return _c(
          "div",
          { key: key, attrs: { value: file, name: key } },
          [
            _c(
              "request-file",
              {
                attrs: {
                  requestid: _vm.requestid,
                  value: file,
                  name: key,
                  errors: []
                }
              },
              [
                _vm._t("paperclip", null, { slot: "paperclip" }),
                _vm._v(" "),
                _vm._t("x", null, { slot: "x" })
              ],
              2
            )
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-control mb-18" },
        [_c("request-upload-file", { attrs: { requestid: _vm.requestid } })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c(
            "button",
            {
              staticClass: "btn btn--light request--button mb-6 sm:mr-8",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.prev()
                }
              }
            },
            [_vm._t("return")],
            2
          ),
          _vm._v(" "),
          _c(
            "form-button",
            {
              staticClass: "btn btn--form mb-6 request--button",
              attrs: { type: "submit" }
            },
            [_c("span", { staticClass: "mr-1" }, [_vm._v("Enviar")])]
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "request--link size-sm",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.CancelRequest()
                }
              }
            },
            [_vm._v("Cancelar solicitud")]
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/RequestUploadFile.vue?vue&type=template&id=67b6929b&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/RequestUploadFile.vue?vue&type=template&id=67b6929b& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "label",
      {
        staticClass: "btn btn--sm btn--light cursor--pointer",
        attrs: { for: "file" }
      },
      [_vm._v("\n        Adjuntar archivo\n    ")]
    ),
    _vm._v(" "),
    _c("input", {
      staticClass: "form-field hidden",
      attrs: {
        id: "file",
        name: "file",
        type: "file",
        "aria-describedBy": _vm.errors.length > 0 ? "file-errors" : "",
        "aria-invalid": _vm.errors.length > 0 ? "true" : null
      },
      on: { change: _vm.addFile }
    }),
    _vm._v(" "),
    _vm.errors.length > 0
      ? _c(
          "ul",
          { staticClass: "error", attrs: { id: "file-errors" } },
          _vm._l(_vm.errors, function(error, i) {
            return _c("li", {
              key: i,
              domProps: { textContent: _vm._s(error) }
            })
          }),
          0
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/StepForm.vue?vue&type=template&id=2c5a0b71&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/StepForm.vue?vue&type=template&id=2c5a0b71& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      !_vm.successSteps
        ? _c(
            "steps",
            { attrs: { step: _vm.step, isRight: _vm.isRight } },
            [_c("template", { slot: "doro" }, [_vm._t("doro")], 2)],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { ref: "request_form" },
        [
          _c("transition", { attrs: { name: "fade", mode: "out-in" } }, [
            _vm.successSteps
              ? _c(
                  "div",
                  {
                    key: "1",
                    ref: "step_success",
                    staticClass: "successRequest"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "text-center alert__request--success" },
                      [
                        _c(
                          "span",
                          { staticClass: "alert__figure" },
                          [_vm._t("success")],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "text-center size-normal mb-8 mt-4" },
                          [_vm._v("Tu solicitud ha sido creada")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "h4",
                      { staticClass: "text-center mb-6 color-gray-70" },
                      [
                        _vm._v("El folio de la solicitud es: "),
                        _c("b", [_vm._v(_vm._s(_vm.requestfolio))])
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Te hemos enviado un correo de confirmación con un enlace para que puedas revisar el estado y avance de tu solicitud en cualquier momento."
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Igualmente puedes consultar dicho avance ingresando el folio anterior en el apartado para "
                      ),
                      _c(
                        "a",
                        { staticClass: "request--link", attrs: { href: "#" } },
                        [_vm._v("consultar el estado")]
                      ),
                      _vm._v(" de esta misma página.")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Cuando la solicitud sea concluida recibirás un correo de notificación."
                      )
                    ]),
                    _vm._v(" "),
                    _vm.otherEmail == true
                      ? _c(
                          "p",
                          {
                            staticClass:
                              "alert alert--info alert--has-icon mt-8 size-sm"
                          },
                          [
                            _vm._v(
                              "\n                    Detectamos que tu correo electrónico no es un correo institucional (terminación en @ujed.mx). Si lo deseas, puedes hacernos una nueva solicitud para tramitarlo.\n                "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-center mt-12" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn--form",
                          attrs: { type: "submit" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.newRequest()
                            }
                          }
                        },
                        [
                          _c("span", { staticClass: "mr-1" }, [
                            _vm._v("Crear nueva solicitud")
                          ])
                        ]
                      )
                    ])
                  ]
                )
              : _c(
                  "div",
                  {
                    key: "2",
                    ref: "step_request",
                    staticClass: "request__form"
                  },
                  [
                    _c(
                      "div",
                      { ref: "user", staticClass: "request-step" },
                      [
                        _c(
                          "userstep-form",
                          {
                            ref: "userstep",
                            attrs: {
                              action: _vm.urluser,
                              ureslist: _vm.ureslist
                            },
                            on: {
                              successuser: _vm.SuccessUser,
                              requestid: _vm.GetID
                            }
                          },
                          [
                            _c(
                              "template",
                              { slot: "continue" },
                              [_vm._t("continue")],
                              2
                            )
                          ],
                          2
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { ref: "request", staticClass: "request-step invisible" },
                      [
                        _c(
                          "requeststep-form",
                          {
                            ref: "requeststep",
                            attrs: {
                              action: _vm.urlrequest,
                              urldelete: _vm.urldelete,
                              requestid: _vm.requestid
                            },
                            on: {
                              prevuser: _vm.PrevUser,
                              requestsuccess: _vm.SuccessRequest,
                              deleterequest: _vm.deleteRequest,
                              requestfolio: _vm.GetFolio,
                              requestemail: _vm.GetEmail
                            }
                          },
                          [
                            _c(
                              "template",
                              { slot: "return" },
                              [_vm._t("return")],
                              2
                            ),
                            _vm._v(" "),
                            _c(
                              "template",
                              { slot: "paperclip" },
                              [_vm._t("paperclip")],
                              2
                            ),
                            _vm._v(" "),
                            _c("template", { slot: "x" }, [_vm._t("x")], 2)
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ]
                )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/Steps.vue?vue&type=template&id=4ad6a3b6&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/Steps.vue?vue&type=template&id=4ad6a3b6& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "m-auto d-flex justify-center" }, [
    _c(
      "span",
      {
        staticClass: "request__step",
        class: {
          "request__step--active": _vm.step === 0 && _vm.isRight,
          "request__step--success": _vm.step === 1 && _vm.isRight,
          "request__step--success-reverse": _vm.step === 0 && !_vm.isRight
        }
      },
      [
        _c(
          "span",
          {
            staticClass: "m-auto",
            class: _vm.step === 1 ? "content-check" : "content-1"
          },
          [_vm._t("doro")],
          2
        ),
        _vm._v(" "),
        _c("small", [_vm._v("Datos de contacto")])
      ]
    ),
    _vm._v(" "),
    _c("span", { staticClass: "request__progress" }, [
      _c("span", { ref: "progressbar", staticClass: "progress__success" })
    ]),
    _vm._v(" "),
    _c(
      "span",
      {
        staticClass: "request__step",
        class: {
          "request__step--active": _vm.step === 1 && _vm.isRight,
          "request__step--success": _vm.step === 2 && _vm.isRight
        }
      },
      [
        _c(
          "span",
          {
            staticClass: "m-auto",
            class: _vm.step === 2 ? "content-check" : "content-2"
          },
          [_vm._t("doro")],
          2
        ),
        _vm._v(" "),
        _c("small", [_vm._v("Solicitud")])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/UserStepForm.vue?vue&type=template&id=3eac365c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/UserStepForm.vue?vue&type=template&id=3eac365c& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", [
    _c(
      "div",
      { staticClass: "form-control" },
      [
        _c("label", { attrs: { for: "correo" } }, [
          _vm._v("Correo electrónico")
        ]),
        _vm._v(" "),
        _c("text-field", {
          ref: "email_field",
          attrs: { name: "correo", type: "email", maxlength: "80" },
          model: {
            value: _vm.fields.correo,
            callback: function($$v) {
              _vm.$set(_vm.fields, "correo", $$v)
            },
            expression: "fields.correo"
          }
        }),
        _vm._v(" "),
        _c("field-errors", { attrs: { name: "correo" } })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "form-control col sm:col-1/2" },
        [
          _c("label", { attrs: { for: "matricula" } }, [_vm._v("Matrícula")]),
          _vm._v(" "),
          _c("text-field", {
            attrs: { name: "matricula", maxlength: "6", minlength: "5" },
            model: {
              value: _vm.fields.matricula,
              callback: function($$v) {
                _vm.$set(_vm.fields, "matricula", $$v)
              },
              expression: "fields.matricula"
            }
          }),
          _vm._v(" "),
          _c("field-errors", { attrs: { name: "matricula" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-control col sm:col-1/2" },
        [
          _c("label", { attrs: { for: "nombre" } }, [_vm._v("Nombre")]),
          _vm._v(" "),
          _c("text-field", {
            attrs: { name: "nombre", maxlength: "120" },
            model: {
              value: _vm.fields.nombre,
              callback: function($$v) {
                _vm.$set(_vm.fields, "nombre", $$v)
              },
              expression: "fields.nombre"
            }
          }),
          _vm._v(" "),
          _c("field-errors", { attrs: { name: "nombre" } })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "form-control col sm:col-1/2" },
        [
          _c("label", { attrs: { for: "apellido_paterno" } }, [
            _vm._v("Apellido paterno")
          ]),
          _vm._v(" "),
          _c("text-field", {
            attrs: { name: "apellido_paterno", maxlength: "60" },
            model: {
              value: _vm.fields.apellido_paterno,
              callback: function($$v) {
                _vm.$set(_vm.fields, "apellido_paterno", $$v)
              },
              expression: "fields.apellido_paterno"
            }
          }),
          _vm._v(" "),
          _c("field-errors", { attrs: { name: "apellido_paterno" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-control col sm:col-1/2" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("text-field", {
            attrs: { name: "apellido_materno", maxlength: "60" },
            model: {
              value: _vm.fields.apellido_materno,
              callback: function($$v) {
                _vm.$set(_vm.fields, "apellido_materno", $$v)
              },
              expression: "fields.apellido_materno"
            }
          }),
          _vm._v(" "),
          _c("field-errors", { attrs: { name: "apellido_materno" } })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "form-control col sm:col-7/12" },
        [
          _c("label", { attrs: { for: "telefono" } }, [_vm._v("Teléfono")]),
          _vm._v(" "),
          _c("text-field", {
            attrs: { name: "telefono", maxlength: "11" },
            model: {
              value: _vm.fields.telefono,
              callback: function($$v) {
                _vm.$set(_vm.fields, "telefono", $$v)
              },
              expression: "fields.telefono"
            }
          }),
          _vm._v(" "),
          _c("field-errors", { attrs: { name: "telefono" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-control col sm:col-5/12" },
        [
          _c("label", { attrs: { for: "extension" } }, [
            _vm._v("Extensión (UJED)")
          ]),
          _vm._v(" "),
          _c("text-field", {
            attrs: { name: "extension", maxlength: "6", minlength: "4" },
            model: {
              value: _vm.fields.extension,
              callback: function($$v) {
                _vm.$set(_vm.fields, "extension", $$v)
              },
              expression: "fields.extension"
            }
          }),
          _vm._v(" "),
          _c("field-errors", { attrs: { name: "extension" } })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "form-control" },
      [
        _c("label", { attrs: { for: "ures" } }, [_vm._v("Unidad responsable")]),
        _vm._v(" "),
        _c("select-field", {
          staticClass: "form-field",
          attrs: { name: "ures", id: "ures", options: _vm.ureslist },
          model: {
            value: _vm.fields.ures,
            callback: function($$v) {
              _vm.$set(_vm.fields, "ures", $$v)
            },
            expression: "fields.ures"
          }
        }),
        _vm._v(" "),
        _c("field-errors", { attrs: { name: "ures" } })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "form-control" },
      [
        _vm._m(1),
        _vm._v(" "),
        _c("text-field", {
          attrs: { name: "pautoriza", maxlength: "200" },
          model: {
            value: _vm.fields.pautoriza,
            callback: function($$v) {
              _vm.$set(_vm.fields, "pautoriza", $$v)
            },
            expression: "fields.pautoriza"
          }
        }),
        _vm._v(" "),
        _c("field-errors", { attrs: { name: "pautoriza" } })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "text-center" },
      [
        _c(
          "form-button",
          { staticClass: "btn btn--form request--button" },
          [_vm._t("continue")],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "apellido_materno" } }, [
      _vm._v("\n            Apellido materno\n            "),
      _c("small", { staticClass: "color-gray-60" }, [
        _c("i", [_vm._v("Opcional")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "pautoriza" } }, [
      _vm._v("\n            ¿Quién autoriza?\n            "),
      _c("small", { staticClass: "color-gray-60" }, [
        _c("i", [_vm._v("Opcional")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/CheckboxField.vue?vue&type=template&id=39e391fa&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/CheckboxField.vue?vue&type=template&id=39e391fa& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    [
      _c("input", {
        class: { "has-warning": _vm.hasErrors },
        attrs: {
          type: "checkbox",
          name: _vm.name,
          "aria-invalid": _vm.hasErrors ? "true" : null,
          "aria-describedby": _vm.describedBy
        },
        domProps: { checked: _vm.checked, value: _vm.value },
        on: { change: _vm.onChange }
      }),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/DateField.vue?vue&type=template&id=0350a3ef&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/DateField.vue?vue&type=template&id=0350a3ef& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("input", {
    directives: [
      {
        name: "model",
        rawName: "v-model",
        value: _vm.displayValue,
        expression: "displayValue"
      }
    ],
    staticClass: "form-field",
    class: { "form-field--invalid": _vm.hasErrors },
    attrs: {
      id: _vm.id,
      name: _vm.name,
      type: "date",
      maxlength: "10",
      "aria-invalid": _vm.hasErrors ? "true" : null,
      "aria-describedBy": _vm.describedBy || null
    },
    domProps: { value: _vm.displayValue },
    on: {
      input: function($event) {
        if ($event.target.composing) {
          return
        }
        _vm.displayValue = $event.target.value
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/FieldErrors.vue?vue&type=template&id=39683bc8&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/FieldErrors.vue?vue&type=template&id=39683bc8& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.errors
    ? _c(
        "ul",
        { staticClass: "error", attrs: { id: _vm.id } },
        _vm._l(_vm.errors, function(error, i) {
          return _c("li", { key: i, domProps: { textContent: _vm._s(error) } })
        }),
        0
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/FileField.vue?vue&type=template&id=76be45e1&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/FileField.vue?vue&type=template&id=76be45e1& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-file" }, [
    _c("input", {
      ref: "input",
      staticClass: "form-file__upload",
      attrs: {
        id: _vm.id,
        name: _vm.name,
        type: "file",
        tabindex: "0",
        multiple: _vm.multiple,
        "aria-invalid": _vm.hasErrors ? "true" : null,
        "aria-describedBy": _vm.describedBy || null
      },
      on: {
        change: _vm.onChange,
        focus: function($event) {
          _vm.hasFocus = true
        },
        blur: function($event) {
          _vm.hasFocus = false
        }
      }
    }),
    _vm._v(" "),
    _c("input", {
      staticClass: "form-file__text",
      class: {
        "form-field--invalid": _vm.hasErrors,
        "form-field--focus": _vm.hasFocus
      },
      attrs: { type: "text", placeholder: _vm.placeholder, tabindex: "-1" },
      domProps: { value: _vm.inputText }
    }),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "form-file__btn btn btn--light",
        attrs: { type: "button" },
        on: {
          click: function($event) {
            return _vm.$refs.input.click()
          }
        }
      },
      [_vm._v("\n        Examinar\n    ")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/FormButton.vue?vue&type=template&id=79ed0eba&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/FormButton.vue?vue&type=template&id=79ed0eba& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "btn",
      class: { "btn--loading": _vm.$parent.isSubmitting },
      attrs: { disabled: _vm.$parent.isSubmitting, type: "submit" }
    },
    [_vm._t("default", [_vm._v("\n        Enviar\n    ")])],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/SelectField.vue?vue&type=template&id=d0ac70be&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/SelectField.vue?vue&type=template&id=d0ac70be& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "select",
    {
      staticClass: "form-field",
      class: { "form-field--invalid": _vm.hasErrors },
      attrs: {
        id: _vm.id,
        name: _vm.name,
        "aria-invalid": _vm.hasErrors ? "true" : null,
        "aria-describedBy": _vm.describedBy || null
      },
      domProps: { value: _vm.value },
      on: {
        input: function($event) {
          return _vm.$emit("input", $event.target.value)
        }
      }
    },
    [
      _vm._t("default", [
        _c("option", { attrs: { value: "", disabled: "" } }, [
          _vm._v("- Selecciona una opción -")
        ]),
        _vm._v(" "),
        _vm._l(_vm.orderedOptions, function(option) {
          return _c("option", {
            key: option.key,
            domProps: { value: option.key, textContent: _vm._s(option.value) }
          })
        })
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/TextArea.vue?vue&type=template&id=557cde27&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/TextArea.vue?vue&type=template&id=557cde27& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "textarea",
    {
      staticClass: "form-field",
      class: {
        "form-field--invalid": _vm.hasErrors,
        "form-field--no-scrollbar": !_vm.hasScrollbar
      },
      attrs: {
        id: _vm.id,
        name: _vm.name,
        maxlength: _vm.maxlength,
        "aria-invalid": _vm.hasErrors ? "true" : null,
        "aria-describedBy": _vm.describedBy || null
      },
      domProps: { value: _vm.value },
      on: { input: _vm.onInput }
    },
    [_vm._v("<slot></slot>")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/TextField.vue?vue&type=template&id=a3afe560&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/forms/base/TextField.vue?vue&type=template&id=a3afe560& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("input", {
    staticClass: "form-field",
    class: { "form-field--invalid": _vm.hasErrors },
    attrs: {
      id: _vm.id,
      name: _vm.name,
      type: _vm.type,
      maxlength: _vm.maxlength,
      "aria-invalid": _vm.hasErrors ? "true" : null,
      "aria-describedBy": _vm.describedBy || null
    },
    domProps: { value: _vm.value },
    on: {
      input: function($event) {
        return _vm.$emit("input", $event.target.value)
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/menu/Menu.vue?vue&type=template&id=1def847e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/menu/Menu.vue?vue&type=template&id=1def847e& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      ref: "menu_container",
      staticClass: "main-menu",
      attrs: { id: "main-menu", role: "navigation" }
    },
    [
      _c("div", { staticClass: "container main-menu__container" }, [
        _c(
          "a",
          {
            staticClass: "main-logo__dtd main-logo__dtd--flex",
            class: {
              "main-logo__dtd--open": _vm.menuIsOpen,
              "main-logo__dtd--closed": !_vm.menuIsOpen && _vm.buttonClicked
            },
            attrs: { href: _vm.$root.path + "/digitalapp/", title: "Inicio" }
          },
          [
            _c("img", {
              staticClass: "main-logo__icon",
              attrs: {
                src: _vm.$root.path + "/static/img/header/logo-header-icon.png",
                alt: "Dirección de transformación Digital"
              }
            }),
            _vm._v(" "),
            _c("img", {
              ref: "image_title",
              staticClass: "main-logo__text",
              attrs: {
                src:
                  _vm.$root.path + "/static/img/header/logo-header-texto.png",
                alt: "Dirección de transformación Digital"
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "main-logo__ujed float-right" }, [
          _c("img", {
            attrs: {
              src: this.$root.path + "/static/img/header/logo-ujed.png",
              alt: "Universidad Juárez del Estado de Durango"
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "main-menu__btn",
            attrs: {
              id: "main-menu-btn",
              type: "button",
              "aria-expanded": "false",
              "aria-controls": "main-menu"
            },
            on: { click: _vm.toggleMenu }
          },
          [
            _c(
              "span",
              {
                staticClass: "main-menu__btn-icon",
                class: { "main-menu__btn-icon--active": _vm.menuIsOpen },
                attrs: { "aria-hidden": "true" }
              },
              [_c("span")]
            ),
            _vm._v(" "),
            _vm.menuIsOpen
              ? _c("span", { staticClass: "visually-hidden" }, [
                  _vm._v("Ocultar menú")
                ])
              : _c("span", { staticClass: "visually-hidden" }, [
                  _vm._v("Mostrar menú")
                ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", {
        staticClass: "main-menu__background",
        class: {
          "main-menu__background--open": _vm.menuIsOpen,
          "main-menu__background--closed": !_vm.menuIsOpen && _vm.buttonClicked
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "main-menu__list--container",
          class: {
            "main-menu__list--container--open": _vm.menuIsOpen
          }
        },
        [
          _c("div", { staticClass: "container main-menu__container--sm" }, [
            _c("a", {
              staticClass: "main-logo__dtd",
              class: {
                "main-logo__dtd--open": _vm.menuIsOpen,
                "main-logo__dtd--closed": !_vm.menuIsOpen && _vm.buttonClicked
              },
              attrs: { href: _vm.$root.path, title: "Inicio" }
            })
          ]),
          _vm._v(" "),
          _c(
            "ul",
            {
              ref: "list",
              staticClass: "list-bare main-menu__list",
              class: {
                "main-menu__list--open": _vm.menuIsOpen,
                "main-menu__list--closed ": !_vm.menuIsOpen && _vm.buttonClicked
              },
              attrs: {
                "aria-hidden": !_vm.menuIsVisible,
                "aria-labelledby": "main-menu-btn"
              }
            },
            [
              _vm._l(_vm.links, function(link, title) {
                return [
                  typeof link === "string"
                    ? _c(
                        "li",
                        {
                          key: title,
                          staticClass: "main-menu__li",
                          class: {
                            "main-menu__li--open": _vm.menuIsOpen,
                            "main-menu__li--closed":
                              !_vm.menuIsOpen && _vm.buttonClicked
                          }
                        },
                        [
                          _vm._l([_vm.parseLink(link)], function(ref) {
                            var url = ref.url
                            var newTab = ref.newTab
                            var external = ref.external
                            return [
                              _c(
                                "a",
                                {
                                  key: url,
                                  staticClass: "js-item main-menu__link",
                                  attrs: {
                                    href: url,
                                    target: newTab ? "_blank" : false,
                                    rel:
                                      newTab && external
                                        ? "noopener noreferrer"
                                        : false
                                  },
                                  on: {
                                    keydown: function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "left",
                                          37,
                                          $event.key,
                                          ["Left", "ArrowLeft"]
                                        ) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "right",
                                          39,
                                          $event.key,
                                          ["Right", "ArrowRight"]
                                        ) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "up",
                                          38,
                                          $event.key,
                                          ["Up", "ArrowUp"]
                                        ) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "down",
                                          40,
                                          $event.key,
                                          ["Down", "ArrowDown"]
                                        )
                                      ) {
                                        return null
                                      }
                                      if (
                                        "button" in $event &&
                                        $event.button !== 0
                                      ) {
                                        return null
                                      }
                                      if (
                                        "button" in $event &&
                                        $event.button !== 2
                                      ) {
                                        return null
                                      }
                                      $event.preventDefault()
                                      return _vm.arrowNavigation($event)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(title) +
                                      "\n                        "
                                  )
                                ]
                              )
                            ]
                          })
                        ],
                        2
                      )
                    : _c(
                        "site-submenu",
                        {
                          key: title,
                          attrs: {
                            "breakpoint-matches": _vm.breakpointMatches,
                            links: link
                          }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(title) +
                              "\n                "
                          )
                        ]
                      )
                ]
              }),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "main-menu__li",
                  class: {
                    "main-menu__li--open": _vm.menuIsOpen,
                    "main-menu__li--closed":
                      !_vm.menuIsOpen && _vm.buttonClicked
                  }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "js-item main-menu__link",
                      attrs: { href: _vm.$root.path + "/administracion/" },
                      on: {
                        keydown: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "left", 37, $event.key, [
                              "Left",
                              "ArrowLeft"
                            ]) &&
                            _vm._k($event.keyCode, "right", 39, $event.key, [
                              "Right",
                              "ArrowRight"
                            ]) &&
                            _vm._k($event.keyCode, "up", 38, $event.key, [
                              "Up",
                              "ArrowUp"
                            ]) &&
                            _vm._k($event.keyCode, "down", 40, $event.key, [
                              "Down",
                              "ArrowDown"
                            ])
                          ) {
                            return null
                          }
                          if ("button" in $event && $event.button !== 0) {
                            return null
                          }
                          if ("button" in $event && $event.button !== 2) {
                            return null
                          }
                          $event.preventDefault()
                          return _vm.arrowNavigation($event)
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "main-menu__login-icon",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(
                        "\n                    Administración\n                "
                      )
                    ]
                  )
                ]
              )
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass: "main-menu__footer",
              class: {
                "main-menu__footer--open": _vm.menuIsOpen
              }
            },
            [
              _vm._v("\n            Dirección de Transformación Digital "),
              _c("br"),
              _vm._v(" Universidad Juárez del Estado de Durango\n        ")
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/menu/Submenu.vue?vue&type=template&id=f94ead60&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/menu/Submenu.vue?vue&type=template&id=f94ead60& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "main-menu__li",
      on: { mouseover: _vm.onMouseOver, mouseleave: _vm.onMouseLeave }
    },
    [
      _c(
        "p",
        {
          ref: "title",
          staticClass: "main-menu__submenu-title",
          class: {
            "main-menu__submenu-title--active":
              _vm.isActive && !_vm.breakpointMatches
          },
          attrs: {
            tabindex: "0",
            "aria-haspopup": "true",
            "aria-expanded": _vm.isActive ? "true" : "false"
          },
          on: {
            click: _vm.toggle,
            keydown: [
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "left", 37, $event.key, [
                    "Left",
                    "ArrowLeft"
                  ]) &&
                  _vm._k($event.keyCode, "right", 39, $event.key, [
                    "Right",
                    "ArrowRight"
                  ])
                ) {
                  return null
                }
                if ("button" in $event && $event.button !== 0) {
                  return null
                }
                if ("button" in $event && $event.button !== 2) {
                  return null
                }
                $event.preventDefault()
                return _vm.onLeftRightKeys($event)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "up", 38, $event.key, [
                    "Up",
                    "ArrowUp"
                  ]) &&
                  _vm._k($event.keyCode, "down", 40, $event.key, [
                    "Down",
                    "ArrowDown"
                  ])
                ) {
                  return null
                }
                $event.preventDefault()
                return _vm.onUpDownKeys($event)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "space", 32, $event.key, [
                    " ",
                    "Spacebar"
                  ]) &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                $event.preventDefault()
                return _vm.toggle($event)
              }
            ],
            blur: _vm.onBlur
          }
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c(
        "ul",
        { ref: "submenu", staticClass: "list-bare main-menu__submenu" },
        _vm._l(_vm.links, function(link, name) {
          return _c("site-submenu-link", {
            key: name,
            attrs: { name: name, "link-data": _vm.$parent.parseLink(link) }
          })
        }),
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/menu/SubmenuLink.vue?vue&type=template&id=4b21d72c&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/main/components/menu/SubmenuLink.vue?vue&type=template&id=4b21d72c& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { staticClass: "main-menu__submenu-item" }, [
    _c(
      "a",
      {
        ref: "link",
        staticClass: "main-menu__submenu-link",
        attrs: {
          href: _vm.linkData.url,
          target: _vm.linkData.newTab ? "_blank" : false,
          rel:
            _vm.linkData.newTab && _vm.linkData.external
              ? "noopener noreferrer"
              : false
        },
        on: {
          keydown: [
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "up", 38, $event.key, [
                  "Up",
                  "ArrowUp"
                ]) &&
                _vm._k($event.keyCode, "down", 40, $event.key, [
                  "Down",
                  "ArrowDown"
                ])
              ) {
                return null
              }
              $event.preventDefault()
              return _vm.$parent.linkNavigation($event)
            },
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "left", 37, $event.key, [
                  "Left",
                  "ArrowLeft"
                ]) &&
                _vm._k($event.keyCode, "right", 39, $event.key, [
                  "Right",
                  "ArrowRight"
                ])
              ) {
                return null
              }
              if ("button" in $event && $event.button !== 0) {
                return null
              }
              if ("button" in $event && $event.button !== 2) {
                return null
              }
              $event.preventDefault()
              return _vm.onLeftRightKeys($event)
            },
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
              ) {
                return null
              }
              return _vm.onTab($event)
            }
          ]
        }
      },
      [_vm._v("\n        " + _vm._s(_vm.name) + "\n    ")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/helpers/animation/easings.js":
/*!***************************************************!*\
  !*** ./resources/js/helpers/animation/easings.js ***!
  \***************************************************/
/*! exports provided: easeInOutQuad, easeInOutCubic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function() { return easeInOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutCubic", function() { return easeInOutCubic; });
/*
|-------------------------------------------------------------------------------
| Easing functions
|-------------------------------------------------------------------------------
*/

/**
 * Quadratic easing in/out.
 *
 * @param  {number} t - Current time in animation
 * @param  {number} b - Beggining/original value of property or percentage
 * @param  {number} c - Change in value: Destination value minus original value of property or percentage
 * @param  {number} d - Total duration of animation
 * @return {number}
 */
function easeInOutQuad(t, b, c, d) {
  if ((t /= d / 2) < 1) {
    return c / 2 * t * t + b;
  }

  return -c / 2 * (--t * (t - 2) - 1) + b;
}
/**
 * Cubic easing in/out.
 *
 * @param  {number} t - Current time in animation
 * @param  {number} b - Beggining/original value of property or percentage
 * @param  {number} c - Change in value: Destination value minus original value of property or percentage
 * @param  {number} d - Total duration of animation
 * @return {number}
 */

function easeInOutCubic(t, b, c, d) {
  if ((t /= d / 2) < 1) {
    return c / 2 * t * t * t + b;
  }

  return c / 2 * ((t -= 2) * t * t + 2) + b;
}

/***/ }),

/***/ "./resources/js/helpers/animation/slide.js":
/*!*************************************************!*\
  !*** ./resources/js/helpers/animation/slide.js ***!
  \*************************************************/
/*! exports provided: slide, slideDown, slideUp, slideToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slide", function() { return slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideDown", function() { return slideDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideUp", function() { return slideUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToggle", function() { return slideToggle; });
/* harmony import */ var _easings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easings.js */ "./resources/js/helpers/animation/easings.js");
/* harmony import */ var _getComputedStyles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getComputedStyles.js */ "./resources/js/helpers/getComputedStyles.js");


/**
 * Display or collapse the given element with an animation.
 *
 * @param {HTMLElement} el
 * @param {number} duration
 * @param {string} direction
 */

function slide(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'down';
  var computedStyle;
  var start;
  var originalStyles;
  var style;

  if (el.hasAttribute('data-slide-animation-styles')) {
    originalStyles = el.getAttribute('data-slide-animation-styles');
    computedStyle = Object(_getComputedStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el, originalStyles);
  } else {
    var styleAttribute = el.getAttribute('style') || '';
    computedStyle = Object(_getComputedStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el, styleAttribute);
    originalStyles = styleAttribute ? styleAttribute.replace(/(display(\s)?:)(\s)?(\w)+;/gi, '') : '';
    el.setAttribute('data-slide-animation-styles', originalStyles);
  }

  var height = computedStyle.clientHeight ? computedStyle.clientHeight : el.clientHeight;
  var marginBottom = parseInt(computedStyle.marginBottom.replace('px', ''), 10);
  var marginTop = parseInt(computedStyle.marginTop.replace('px', ''), 10);
  var paddingBottom = parseInt(computedStyle.paddingBottom.replace('px', ''), 10);
  var paddingTop = parseInt(computedStyle.paddingTop.replace('px', ''), 10);
  /**
   * Step in animation.
   *
   * @param {number} timestamp
   */

  var step = function step(timestamp) {
    start = start || timestamp;
    var lapsed = timestamp - start;
    var easing = Object(_easings_js__WEBPACK_IMPORTED_MODULE_0__["easeInOutQuad"])(lapsed, 0, 1, duration);
    var factor = direction === 'down' ? easing : 1 - easing;

    if (lapsed < duration) {
      var currentHeight = factor * height;
      var currentMarginBottom = factor * marginBottom;
      var currentMarginTop = factor * marginTop;
      var currentPaddingBottom = factor * paddingBottom;
      var currentPaddingTop = factor * paddingTop;
      style = "".concat(originalStyles, " display: block; overflow: hidden; height: ").concat(currentHeight, "px; margin-bottom: ").concat(currentMarginBottom, "px; margin-top: ").concat(currentMarginTop, "px; padding-bottom: ").concat(currentPaddingBottom, "px; padding-top: ").concat(currentPaddingTop, "px;");
      el.setAttribute('style', style);
      requestAnimationFrame(step);
    } else {
      var display = direction === 'down' ? 'display: block;' : 'display: none;';
      style = originalStyles + ' ' + display;
      el.setAttribute('style', style);
      el.removeAttribute('data-slide-animation-styles');
    }
  };

  requestAnimationFrame(step);
}
/**
 * Slide down animation.
 *
 * @param {HTMLElement} el
 * @param {number} duration
 */

function slideDown(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  slide(el, duration, 'down');
}
/**
 * Slide up animation.
 *
 * @param {HTMLElement} el
 * @param {number} duration
 */

function slideUp(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  slide(el, duration, 'up');
}
/**
 * Display or collapse the given element with an animation depending on its
 * current state.
 *
 * @param {HTMLElement} el
 * @param {number} duration
 */

function slideToggle(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var isHidden = Object(_getComputedStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el).display === 'none';

  if (isHidden) {
    slideDown(el, duration);
  } else {
    slideUp(el, duration);
  }
}

/***/ }),

/***/ "./resources/js/helpers/getComputedStyles.js":
/*!***************************************************!*\
  !*** ./resources/js/helpers/getComputedStyles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getComputedStyles; });
/**
 * Return the computed styles of the given hidden element.
 * The parent must be visible to work.
 *
 * @param {HTMLElement} el
 * @param {string|null} forceOriginalStyles - Take the given string as original styles,
 *     instead of getting them from the DOM.
 */
function getComputedStyles(el) {
  var forceOriginalStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var originalStyles = forceOriginalStyles !== null ? forceOriginalStyles : el.getAttribute('style') || '';
  var newStyles = originalStyles + 'visibility: hidden !important; display: block !important;';
  var computedStyles;
  el.setAttribute('style', newStyles);
  computedStyles = window.getComputedStyle(el);
  computedStyles.clientHeight = el.clientHeight;
  computedStyles.clientWidth = el.clientWidth;
  el.setAttribute('style', originalStyles);
  return computedStyles;
}

/***/ }),

/***/ "./resources/js/helpers/getScrollTop.js":
/*!**********************************************!*\
  !*** ./resources/js/helpers/getScrollTop.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollTop; });
/**
 * Return the given element's top position relative to the document.
 * If no element is given, the position of the viewport is returned.
 *
 * @param {HTMLElement|null} el
 * @return {number}
 */
function getScrollTop() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var body = document.body;
  var docEl = document.documentElement;
  return Math.round((el ? el.getBoundingClientRect().top : 0) + (window.pageYOffset || docEl.scrollTop || body.scrollTop) - (docEl.clientTop || body.clientTop || 0));
}

/***/ }),

/***/ "./resources/js/helpers/scrollTo.js":
/*!******************************************!*\
  !*** ./resources/js/helpers/scrollTo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollTo; });
/* harmony import */ var _animation_easings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation/easings.js */ "./resources/js/helpers/animation/easings.js");
/* harmony import */ var _getScrollTop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getScrollTop.js */ "./resources/js/helpers/getScrollTop.js");


/**
 * Scroll to a given position or element using animation.
 *
 * @param {number|HTMLElement} target - Position in document (in pixels) or HTML element.
 * @param {number} offset             - Offset used as a breathing space.
 * @param {number} duration           - Duration (in milliseconds) of animation.
 */

function scrollTo(target) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 800;
  var scrollTop = Object(_getScrollTop_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var currentTime = 0;
  var start;
  var position;
  /**
   * Move forward in the animation.
   *
   * @param {number} timestamp
   */

  var step = function step(timestamp) {
    if (!start) {
      start = timestamp;
    }

    var lapsed = timestamp - start;

    if (lapsed < duration) {
      var y = Object(_animation_easings_js__WEBPACK_IMPORTED_MODULE_0__["easeInOutCubic"])(lapsed, scrollTop, position - scrollTop, duration);
      window.scrollTo(0, y);
      requestAnimationFrame(step);
    } else {
      window.scrollTo(0, position);
    }
  };
  /**
   * Return the target's position relative to document.
   *
   * @return {number}
   */


  var calculateTargetPosition = function calculateTargetPosition() {
    if (typeof target === 'number') {
      return target + offset;
    }

    return Math.round(target.getBoundingClientRect().top + scrollTop + offset);
  };

  position = calculateTargetPosition();
  requestAnimationFrame(step);
}

/***/ }),

/***/ "./resources/js/helpers/slugify.js":
/*!*****************************************!*\
  !*** ./resources/js/helpers/slugify.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slugify; });
/* harmony import */ var diacritics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diacritics */ "./node_modules/diacritics/index.js");
/* harmony import */ var diacritics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diacritics__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Create a slug from the given string.
 *
 * @param  {string} string
 * @return {string}
 */

function slugify(string) {
  return Object(diacritics__WEBPACK_IMPORTED_MODULE_0__["remove"])(string.trim()).replace(/[/_\s]+/g, '-') // Replace underscores, slashes and spaces with "-"
  .replace(/[^\w|-]/g, '') // Remove characters that are not letters, numbers, underscores or dashes
  .replace(/-{2,}/, '-') // Replace multiple dashes with a single one
  .toLowerCase();
}

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/boot.js */ "./resources/js/main/boot.js");
/* harmony import */ var _main_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/index.js */ "./resources/js/main/index.js");



/***/ }),

/***/ "./resources/js/main/boot.js":
/*!***********************************!*\
  !*** ./resources/js/main/boot.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_slugify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/slugify.js */ "./resources/js/helpers/slugify.js");
/* harmony import */ var _vendor_hammer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor/hammer.js */ "./resources/js/vendor/hammer.js");
/* harmony import */ var _vendor_hammer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_hammer_js__WEBPACK_IMPORTED_MODULE_1__);



(function () {
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');
  /*
  |---------------------------------------------------------------------------
  | Hammer
  |---------------------------------------------------------------------------
  */

  window.hammer = _vendor_hammer_js__WEBPACK_IMPORTED_MODULE_1___default.a;
  /*
  |---------------------------------------------------------------------------
  | Axios headers
  |---------------------------------------------------------------------------
  */

  var token = document.head.querySelector('meta[name="csrf-token"]');
  window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  window.axios.defaults.headers.common["X-CSRFToken"] = token.content;
  /*
  |---------------------------------------------------------------------------
  | Vue configuration
  |---------------------------------------------------------------------------
  */

  Vue.config.productionTip = false;
  Vue.filter('slugify', _helpers_slugify_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  /*
  |---------------------------------------------------------------------------
  | Sweet Alert defaults
  |---------------------------------------------------------------------------
  */

  window.swal = window.swal.mixin({
    cancelButtonColor: '#bbb',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#20c372',
    confirmButtonText: 'Aceptar'
  });
})();

/***/ }),

/***/ "./resources/js/main/components/GalleryCard.vue":
/*!******************************************************!*\
  !*** ./resources/js/main/components/GalleryCard.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GalleryCard_vue_vue_type_template_id_ebb9e31e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryCard.vue?vue&type=template&id=ebb9e31e& */ "./resources/js/main/components/GalleryCard.vue?vue&type=template&id=ebb9e31e&");
/* harmony import */ var _GalleryCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryCard.vue?vue&type=script&lang=js& */ "./resources/js/main/components/GalleryCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GalleryCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GalleryCard_vue_vue_type_template_id_ebb9e31e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GalleryCard_vue_vue_type_template_id_ebb9e31e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/GalleryCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/GalleryCard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/main/components/GalleryCard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/GalleryCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/GalleryCard.vue?vue&type=template&id=ebb9e31e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/main/components/GalleryCard.vue?vue&type=template&id=ebb9e31e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryCard_vue_vue_type_template_id_ebb9e31e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryCard.vue?vue&type=template&id=ebb9e31e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/GalleryCard.vue?vue&type=template&id=ebb9e31e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryCard_vue_vue_type_template_id_ebb9e31e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryCard_vue_vue_type_template_id_ebb9e31e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/GalleryLink.vue":
/*!******************************************************!*\
  !*** ./resources/js/main/components/GalleryLink.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GalleryLink_vue_vue_type_template_id_5c62834a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryLink.vue?vue&type=template&id=5c62834a& */ "./resources/js/main/components/GalleryLink.vue?vue&type=template&id=5c62834a&");
/* harmony import */ var _GalleryLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryLink.vue?vue&type=script&lang=js& */ "./resources/js/main/components/GalleryLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GalleryLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GalleryLink_vue_vue_type_template_id_5c62834a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GalleryLink_vue_vue_type_template_id_5c62834a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/GalleryLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/GalleryLink.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/main/components/GalleryLink.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/GalleryLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/GalleryLink.vue?vue&type=template&id=5c62834a&":
/*!*************************************************************************************!*\
  !*** ./resources/js/main/components/GalleryLink.vue?vue&type=template&id=5c62834a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryLink_vue_vue_type_template_id_5c62834a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryLink.vue?vue&type=template&id=5c62834a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/GalleryLink.vue?vue&type=template&id=5c62834a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryLink_vue_vue_type_template_id_5c62834a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryLink_vue_vue_type_template_id_5c62834a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/SiteOverlay.vue":
/*!******************************************************!*\
  !*** ./resources/js/main/components/SiteOverlay.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SiteOverlay_vue_vue_type_template_id_8bc3d710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SiteOverlay.vue?vue&type=template&id=8bc3d710& */ "./resources/js/main/components/SiteOverlay.vue?vue&type=template&id=8bc3d710&");
/* harmony import */ var _SiteOverlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SiteOverlay.vue?vue&type=script&lang=js& */ "./resources/js/main/components/SiteOverlay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SiteOverlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SiteOverlay_vue_vue_type_template_id_8bc3d710___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SiteOverlay_vue_vue_type_template_id_8bc3d710___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/SiteOverlay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/SiteOverlay.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/main/components/SiteOverlay.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteOverlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SiteOverlay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/SiteOverlay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteOverlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/SiteOverlay.vue?vue&type=template&id=8bc3d710&":
/*!*************************************************************************************!*\
  !*** ./resources/js/main/components/SiteOverlay.vue?vue&type=template&id=8bc3d710& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteOverlay_vue_vue_type_template_id_8bc3d710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SiteOverlay.vue?vue&type=template&id=8bc3d710& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/SiteOverlay.vue?vue&type=template&id=8bc3d710&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteOverlay_vue_vue_type_template_id_8bc3d710___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteOverlay_vue_vue_type_template_id_8bc3d710___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/TruncatedText.vue":
/*!********************************************************!*\
  !*** ./resources/js/main/components/TruncatedText.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TruncatedText_vue_vue_type_template_id_0ba4768c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TruncatedText.vue?vue&type=template&id=0ba4768c& */ "./resources/js/main/components/TruncatedText.vue?vue&type=template&id=0ba4768c&");
/* harmony import */ var _TruncatedText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TruncatedText.vue?vue&type=script&lang=js& */ "./resources/js/main/components/TruncatedText.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TruncatedText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TruncatedText_vue_vue_type_template_id_0ba4768c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TruncatedText_vue_vue_type_template_id_0ba4768c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/TruncatedText.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/TruncatedText.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/main/components/TruncatedText.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruncatedText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TruncatedText.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/TruncatedText.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TruncatedText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/TruncatedText.vue?vue&type=template&id=0ba4768c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/main/components/TruncatedText.vue?vue&type=template&id=0ba4768c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TruncatedText_vue_vue_type_template_id_0ba4768c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TruncatedText.vue?vue&type=template&id=0ba4768c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/TruncatedText.vue?vue&type=template&id=0ba4768c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TruncatedText_vue_vue_type_template_id_0ba4768c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TruncatedText_vue_vue_type_template_id_0ba4768c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/forms/LoginForm.vue":
/*!**********************************************************!*\
  !*** ./resources/js/main/components/forms/LoginForm.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/LoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/LoginForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/LoginForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/main/components/forms/LoginForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/LoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/RequestFile.vue":
/*!************************************************************!*\
  !*** ./resources/js/main/components/forms/RequestFile.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestFile_vue_vue_type_template_id_4e74b5fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestFile.vue?vue&type=template&id=4e74b5fa& */ "./resources/js/main/components/forms/RequestFile.vue?vue&type=template&id=4e74b5fa&");
/* harmony import */ var _RequestFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestFile.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/RequestFile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RequestFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RequestFile_vue_vue_type_template_id_4e74b5fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RequestFile_vue_vue_type_template_id_4e74b5fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/RequestFile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/RequestFile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/main/components/forms/RequestFile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RequestFile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/RequestFile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/RequestFile.vue?vue&type=template&id=4e74b5fa&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/main/components/forms/RequestFile.vue?vue&type=template&id=4e74b5fa& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestFile_vue_vue_type_template_id_4e74b5fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RequestFile.vue?vue&type=template&id=4e74b5fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/RequestFile.vue?vue&type=template&id=4e74b5fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestFile_vue_vue_type_template_id_4e74b5fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestFile_vue_vue_type_template_id_4e74b5fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/forms/RequestStepForm.vue":
/*!****************************************************************!*\
  !*** ./resources/js/main/components/forms/RequestStepForm.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestStepForm_vue_vue_type_template_id_8c5335a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestStepForm.vue?vue&type=template&id=8c5335a4& */ "./resources/js/main/components/forms/RequestStepForm.vue?vue&type=template&id=8c5335a4&");
/* harmony import */ var _RequestStepForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestStepForm.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/RequestStepForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RequestStepForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RequestStepForm_vue_vue_type_template_id_8c5335a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RequestStepForm_vue_vue_type_template_id_8c5335a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/RequestStepForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/RequestStepForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/main/components/forms/RequestStepForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestStepForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RequestStepForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/RequestStepForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestStepForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/RequestStepForm.vue?vue&type=template&id=8c5335a4&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/main/components/forms/RequestStepForm.vue?vue&type=template&id=8c5335a4& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestStepForm_vue_vue_type_template_id_8c5335a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RequestStepForm.vue?vue&type=template&id=8c5335a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/RequestStepForm.vue?vue&type=template&id=8c5335a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestStepForm_vue_vue_type_template_id_8c5335a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestStepForm_vue_vue_type_template_id_8c5335a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/forms/RequestUploadFile.vue":
/*!******************************************************************!*\
  !*** ./resources/js/main/components/forms/RequestUploadFile.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestUploadFile_vue_vue_type_template_id_67b6929b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestUploadFile.vue?vue&type=template&id=67b6929b& */ "./resources/js/main/components/forms/RequestUploadFile.vue?vue&type=template&id=67b6929b&");
/* harmony import */ var _RequestUploadFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestUploadFile.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/RequestUploadFile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RequestUploadFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RequestUploadFile_vue_vue_type_template_id_67b6929b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RequestUploadFile_vue_vue_type_template_id_67b6929b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/RequestUploadFile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/RequestUploadFile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/main/components/forms/RequestUploadFile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestUploadFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RequestUploadFile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/RequestUploadFile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestUploadFile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/RequestUploadFile.vue?vue&type=template&id=67b6929b&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/main/components/forms/RequestUploadFile.vue?vue&type=template&id=67b6929b& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestUploadFile_vue_vue_type_template_id_67b6929b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RequestUploadFile.vue?vue&type=template&id=67b6929b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/RequestUploadFile.vue?vue&type=template&id=67b6929b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestUploadFile_vue_vue_type_template_id_67b6929b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestUploadFile_vue_vue_type_template_id_67b6929b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/forms/StepForm.vue":
/*!*********************************************************!*\
  !*** ./resources/js/main/components/forms/StepForm.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StepForm_vue_vue_type_template_id_2c5a0b71___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepForm.vue?vue&type=template&id=2c5a0b71& */ "./resources/js/main/components/forms/StepForm.vue?vue&type=template&id=2c5a0b71&");
/* harmony import */ var _StepForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepForm.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/StepForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StepForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StepForm_vue_vue_type_template_id_2c5a0b71___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StepForm_vue_vue_type_template_id_2c5a0b71___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/StepForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/StepForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/main/components/forms/StepForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StepForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/StepForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StepForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/StepForm.vue?vue&type=template&id=2c5a0b71&":
/*!****************************************************************************************!*\
  !*** ./resources/js/main/components/forms/StepForm.vue?vue&type=template&id=2c5a0b71& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepForm_vue_vue_type_template_id_2c5a0b71___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepForm.vue?vue&type=template&id=2c5a0b71& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/StepForm.vue?vue&type=template&id=2c5a0b71&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepForm_vue_vue_type_template_id_2c5a0b71___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepForm_vue_vue_type_template_id_2c5a0b71___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/forms/Steps.vue":
/*!******************************************************!*\
  !*** ./resources/js/main/components/forms/Steps.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Steps_vue_vue_type_template_id_4ad6a3b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Steps.vue?vue&type=template&id=4ad6a3b6& */ "./resources/js/main/components/forms/Steps.vue?vue&type=template&id=4ad6a3b6&");
/* harmony import */ var _Steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Steps.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/Steps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Steps_vue_vue_type_template_id_4ad6a3b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Steps_vue_vue_type_template_id_4ad6a3b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/Steps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/Steps.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/main/components/forms/Steps.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Steps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/Steps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/Steps.vue?vue&type=template&id=4ad6a3b6&":
/*!*************************************************************************************!*\
  !*** ./resources/js/main/components/forms/Steps.vue?vue&type=template&id=4ad6a3b6& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Steps_vue_vue_type_template_id_4ad6a3b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Steps.vue?vue&type=template&id=4ad6a3b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/Steps.vue?vue&type=template&id=4ad6a3b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Steps_vue_vue_type_template_id_4ad6a3b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Steps_vue_vue_type_template_id_4ad6a3b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/forms/UserStepForm.vue":
/*!*************************************************************!*\
  !*** ./resources/js/main/components/forms/UserStepForm.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserStepForm_vue_vue_type_template_id_3eac365c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserStepForm.vue?vue&type=template&id=3eac365c& */ "./resources/js/main/components/forms/UserStepForm.vue?vue&type=template&id=3eac365c&");
/* harmony import */ var _UserStepForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserStepForm.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/UserStepForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserStepForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserStepForm_vue_vue_type_template_id_3eac365c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserStepForm_vue_vue_type_template_id_3eac365c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/UserStepForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/UserStepForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/main/components/forms/UserStepForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStepForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserStepForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/UserStepForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStepForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/UserStepForm.vue?vue&type=template&id=3eac365c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/main/components/forms/UserStepForm.vue?vue&type=template&id=3eac365c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStepForm_vue_vue_type_template_id_3eac365c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserStepForm.vue?vue&type=template&id=3eac365c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/UserStepForm.vue?vue&type=template&id=3eac365c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStepForm_vue_vue_type_template_id_3eac365c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStepForm_vue_vue_type_template_id_3eac365c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/forms/base/BaseForm.vue":
/*!**************************************************************!*\
  !*** ./resources/js/main/components/forms/base/BaseForm.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseForm.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/base/BaseForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _BaseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/base/BaseForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/base/BaseForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/BaseForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/BaseForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/base/CheckboxField.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/main/components/forms/base/CheckboxField.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckboxField_vue_vue_type_template_id_39e391fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckboxField.vue?vue&type=template&id=39e391fa& */ "./resources/js/main/components/forms/base/CheckboxField.vue?vue&type=template&id=39e391fa&");
/* harmony import */ var _CheckboxField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxField.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/base/CheckboxField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CheckboxField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckboxField_vue_vue_type_template_id_39e391fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CheckboxField_vue_vue_type_template_id_39e391fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/base/CheckboxField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/base/CheckboxField.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/CheckboxField.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckboxField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/CheckboxField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/base/CheckboxField.vue?vue&type=template&id=39e391fa&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/CheckboxField.vue?vue&type=template&id=39e391fa& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_template_id_39e391fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckboxField.vue?vue&type=template&id=39e391fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/CheckboxField.vue?vue&type=template&id=39e391fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_template_id_39e391fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxField_vue_vue_type_template_id_39e391fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/forms/base/DateField.vue":
/*!***************************************************************!*\
  !*** ./resources/js/main/components/forms/base/DateField.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateField_vue_vue_type_template_id_0350a3ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateField.vue?vue&type=template&id=0350a3ef& */ "./resources/js/main/components/forms/base/DateField.vue?vue&type=template&id=0350a3ef&");
/* harmony import */ var _DateField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateField.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/base/DateField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DateField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateField_vue_vue_type_template_id_0350a3ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DateField_vue_vue_type_template_id_0350a3ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/base/DateField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/base/DateField.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/DateField.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DateField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/DateField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/base/DateField.vue?vue&type=template&id=0350a3ef&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/DateField.vue?vue&type=template&id=0350a3ef& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateField_vue_vue_type_template_id_0350a3ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DateField.vue?vue&type=template&id=0350a3ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/DateField.vue?vue&type=template&id=0350a3ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateField_vue_vue_type_template_id_0350a3ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateField_vue_vue_type_template_id_0350a3ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/forms/base/FieldErrors.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/main/components/forms/base/FieldErrors.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FieldErrors_vue_vue_type_template_id_39683bc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldErrors.vue?vue&type=template&id=39683bc8& */ "./resources/js/main/components/forms/base/FieldErrors.vue?vue&type=template&id=39683bc8&");
/* harmony import */ var _FieldErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldErrors.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/base/FieldErrors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FieldErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FieldErrors_vue_vue_type_template_id_39683bc8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FieldErrors_vue_vue_type_template_id_39683bc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/base/FieldErrors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/base/FieldErrors.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/FieldErrors.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FieldErrors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/FieldErrors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldErrors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/base/FieldErrors.vue?vue&type=template&id=39683bc8&":
/*!************************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/FieldErrors.vue?vue&type=template&id=39683bc8& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldErrors_vue_vue_type_template_id_39683bc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FieldErrors.vue?vue&type=template&id=39683bc8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/FieldErrors.vue?vue&type=template&id=39683bc8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldErrors_vue_vue_type_template_id_39683bc8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldErrors_vue_vue_type_template_id_39683bc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/forms/base/FileField.vue":
/*!***************************************************************!*\
  !*** ./resources/js/main/components/forms/base/FileField.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileField_vue_vue_type_template_id_76be45e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileField.vue?vue&type=template&id=76be45e1& */ "./resources/js/main/components/forms/base/FileField.vue?vue&type=template&id=76be45e1&");
/* harmony import */ var _FileField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileField.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/base/FileField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileField_vue_vue_type_template_id_76be45e1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileField_vue_vue_type_template_id_76be45e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/base/FileField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/base/FileField.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/FileField.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/FileField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/base/FileField.vue?vue&type=template&id=76be45e1&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/FileField.vue?vue&type=template&id=76be45e1& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_template_id_76be45e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileField.vue?vue&type=template&id=76be45e1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/FileField.vue?vue&type=template&id=76be45e1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_template_id_76be45e1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_template_id_76be45e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/forms/base/FormButton.vue":
/*!****************************************************************!*\
  !*** ./resources/js/main/components/forms/base/FormButton.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormButton_vue_vue_type_template_id_79ed0eba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormButton.vue?vue&type=template&id=79ed0eba& */ "./resources/js/main/components/forms/base/FormButton.vue?vue&type=template&id=79ed0eba&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _FormButton_vue_vue_type_template_id_79ed0eba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormButton_vue_vue_type_template_id_79ed0eba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/base/FormButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/base/FormButton.vue?vue&type=template&id=79ed0eba&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/FormButton.vue?vue&type=template&id=79ed0eba& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormButton_vue_vue_type_template_id_79ed0eba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormButton.vue?vue&type=template&id=79ed0eba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/FormButton.vue?vue&type=template&id=79ed0eba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormButton_vue_vue_type_template_id_79ed0eba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormButton_vue_vue_type_template_id_79ed0eba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/forms/base/SelectField.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/main/components/forms/base/SelectField.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectField_vue_vue_type_template_id_d0ac70be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectField.vue?vue&type=template&id=d0ac70be& */ "./resources/js/main/components/forms/base/SelectField.vue?vue&type=template&id=d0ac70be&");
/* harmony import */ var _SelectField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectField.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/base/SelectField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectField_vue_vue_type_template_id_d0ac70be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SelectField_vue_vue_type_template_id_d0ac70be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/base/SelectField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/base/SelectField.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/SelectField.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SelectField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/SelectField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/base/SelectField.vue?vue&type=template&id=d0ac70be&":
/*!************************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/SelectField.vue?vue&type=template&id=d0ac70be& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_template_id_d0ac70be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SelectField.vue?vue&type=template&id=d0ac70be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/SelectField.vue?vue&type=template&id=d0ac70be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_template_id_d0ac70be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_template_id_d0ac70be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/forms/base/TextArea.vue":
/*!**************************************************************!*\
  !*** ./resources/js/main/components/forms/base/TextArea.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextArea_vue_vue_type_template_id_557cde27___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextArea.vue?vue&type=template&id=557cde27& */ "./resources/js/main/components/forms/base/TextArea.vue?vue&type=template&id=557cde27&");
/* harmony import */ var _TextArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextArea.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/base/TextArea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TextArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextArea_vue_vue_type_template_id_557cde27___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TextArea_vue_vue_type_template_id_557cde27___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/base/TextArea.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/base/TextArea.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/TextArea.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TextArea.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/TextArea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/base/TextArea.vue?vue&type=template&id=557cde27&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/TextArea.vue?vue&type=template&id=557cde27& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextArea_vue_vue_type_template_id_557cde27___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TextArea.vue?vue&type=template&id=557cde27& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/TextArea.vue?vue&type=template&id=557cde27&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextArea_vue_vue_type_template_id_557cde27___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextArea_vue_vue_type_template_id_557cde27___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/forms/base/TextField.vue":
/*!***************************************************************!*\
  !*** ./resources/js/main/components/forms/base/TextField.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextField_vue_vue_type_template_id_a3afe560___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextField.vue?vue&type=template&id=a3afe560& */ "./resources/js/main/components/forms/base/TextField.vue?vue&type=template&id=a3afe560&");
/* harmony import */ var _TextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextField.vue?vue&type=script&lang=js& */ "./resources/js/main/components/forms/base/TextField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextField_vue_vue_type_template_id_a3afe560___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TextField_vue_vue_type_template_id_a3afe560___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/forms/base/TextField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/forms/base/TextField.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/TextField.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TextField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/TextField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/forms/base/TextField.vue?vue&type=template&id=a3afe560&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/main/components/forms/base/TextField.vue?vue&type=template&id=a3afe560& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_template_id_a3afe560___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TextField.vue?vue&type=template&id=a3afe560& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/forms/base/TextField.vue?vue&type=template&id=a3afe560&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_template_id_a3afe560___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextField_vue_vue_type_template_id_a3afe560___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/menu/Menu.vue":
/*!****************************************************!*\
  !*** ./resources/js/main/components/menu/Menu.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu_vue_vue_type_template_id_1def847e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=1def847e& */ "./resources/js/main/components/menu/Menu.vue?vue&type=template&id=1def847e&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./resources/js/main/components/menu/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_1def847e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Menu_vue_vue_type_template_id_1def847e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/menu/Menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/menu/Menu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/main/components/menu/Menu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/menu/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/menu/Menu.vue?vue&type=template&id=1def847e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/main/components/menu/Menu.vue?vue&type=template&id=1def847e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_1def847e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=template&id=1def847e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/menu/Menu.vue?vue&type=template&id=1def847e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_1def847e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_1def847e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/menu/Submenu.vue":
/*!*******************************************************!*\
  !*** ./resources/js/main/components/menu/Submenu.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Submenu_vue_vue_type_template_id_f94ead60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submenu.vue?vue&type=template&id=f94ead60& */ "./resources/js/main/components/menu/Submenu.vue?vue&type=template&id=f94ead60&");
/* harmony import */ var _Submenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submenu.vue?vue&type=script&lang=js& */ "./resources/js/main/components/menu/Submenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Submenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Submenu_vue_vue_type_template_id_f94ead60___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Submenu_vue_vue_type_template_id_f94ead60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/menu/Submenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/menu/Submenu.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/main/components/menu/Submenu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Submenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Submenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/menu/Submenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Submenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/menu/Submenu.vue?vue&type=template&id=f94ead60&":
/*!**************************************************************************************!*\
  !*** ./resources/js/main/components/menu/Submenu.vue?vue&type=template&id=f94ead60& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submenu_vue_vue_type_template_id_f94ead60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Submenu.vue?vue&type=template&id=f94ead60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/menu/Submenu.vue?vue&type=template&id=f94ead60&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submenu_vue_vue_type_template_id_f94ead60___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submenu_vue_vue_type_template_id_f94ead60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/components/menu/SubmenuLink.vue":
/*!***********************************************************!*\
  !*** ./resources/js/main/components/menu/SubmenuLink.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmenuLink_vue_vue_type_template_id_4b21d72c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmenuLink.vue?vue&type=template&id=4b21d72c& */ "./resources/js/main/components/menu/SubmenuLink.vue?vue&type=template&id=4b21d72c&");
/* harmony import */ var _SubmenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmenuLink.vue?vue&type=script&lang=js& */ "./resources/js/main/components/menu/SubmenuLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmenuLink_vue_vue_type_template_id_4b21d72c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmenuLink_vue_vue_type_template_id_4b21d72c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/main/components/menu/SubmenuLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/main/components/menu/SubmenuLink.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/main/components/menu/SubmenuLink.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmenuLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/menu/SubmenuLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/main/components/menu/SubmenuLink.vue?vue&type=template&id=4b21d72c&":
/*!******************************************************************************************!*\
  !*** ./resources/js/main/components/menu/SubmenuLink.vue?vue&type=template&id=4b21d72c& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmenuLink_vue_vue_type_template_id_4b21d72c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmenuLink.vue?vue&type=template&id=4b21d72c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/main/components/menu/SubmenuLink.vue?vue&type=template&id=4b21d72c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmenuLink_vue_vue_type_template_id_4b21d72c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmenuLink_vue_vue_type_template_id_4b21d72c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main/index.js":
/*!************************************!*\
  !*** ./resources/js/main/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boot.js */ "./resources/js/main/boot.js");
/* harmony import */ var _components_forms_base_BaseForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/forms/base/BaseForm.vue */ "./resources/js/main/components/forms/base/BaseForm.vue");
/* harmony import */ var _components_forms_StepForm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forms/StepForm.vue */ "./resources/js/main/components/forms/StepForm.vue");
/* harmony import */ var _components_forms_UserStepForm_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forms/UserStepForm.vue */ "./resources/js/main/components/forms/UserStepForm.vue");
/* harmony import */ var _components_forms_RequestStepForm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/forms/RequestStepForm.vue */ "./resources/js/main/components/forms/RequestStepForm.vue");
/* harmony import */ var _components_GalleryCard_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/GalleryCard.vue */ "./resources/js/main/components/GalleryCard.vue");
/* harmony import */ var _components_GalleryLink_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/GalleryLink.vue */ "./resources/js/main/components/GalleryLink.vue");
/* harmony import */ var _components_TruncatedText_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TruncatedText.vue */ "./resources/js/main/components/TruncatedText.vue");
/* harmony import */ var _components_forms_RequestUploadFile_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/forms/RequestUploadFile.vue */ "./resources/js/main/components/forms/RequestUploadFile.vue");
/* harmony import */ var _components_forms_RequestFile_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/forms/RequestFile.vue */ "./resources/js/main/components/forms/RequestFile.vue");
/* harmony import */ var _components_menu_Menu_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/menu/Menu.vue */ "./resources/js/main/components/menu/Menu.vue");
/* harmony import */ var _components_forms_LoginForm_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/forms/LoginForm.vue */ "./resources/js/main/components/forms/LoginForm.vue");
/* harmony import */ var _components_SiteOverlay_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/SiteOverlay.vue */ "./resources/js/main/components/SiteOverlay.vue");














(function () {
  /* Base components
  ------------------------------------------------------------------------- */
  Vue.component('base-form', _components_forms_base_BaseForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Vue.component('step-form', _components_forms_StepForm_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Vue.component('userstep-form', _components_forms_UserStepForm_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
  Vue.component('requeststep-form', _components_forms_RequestStepForm_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);
  Vue.component('request-upload-file', _components_forms_RequestUploadFile_vue__WEBPACK_IMPORTED_MODULE_8__["default"]);
  Vue.component('request-file', _components_forms_RequestFile_vue__WEBPACK_IMPORTED_MODULE_9__["default"]);
  Vue.component('login-form', _components_forms_LoginForm_vue__WEBPACK_IMPORTED_MODULE_11__["default"]);
  /* App components
  ------------------------------------------------------------------------- */

  Vue.component('gallery-card', _components_GalleryCard_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
  Vue.component('gallery-link', _components_GalleryLink_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
  Vue.component('truncated-text', _components_TruncatedText_vue__WEBPACK_IMPORTED_MODULE_7__["default"]);
  Vue.component('site-menu', _components_menu_Menu_vue__WEBPACK_IMPORTED_MODULE_10__["default"]);
  Vue.component('site-overlay', _components_SiteOverlay_vue__WEBPACK_IMPORTED_MODULE_12__["default"]);
  /**
   * Vue instance
   */

  var app = new Vue({
    el: '#app',
    data: {
      isLoading: true,
      path: document.body.getAttribute('data-root') || '',
      menuIsVisible: false,
      mq: false,
      resourceCount: 0,
      model: {}
    },
    mounted: function mounted() {
      var _this = this;

      this.mq = window.matchMedia('(min-width:1100px)');
      this.menuIsVisible = this.mq.matches;
      this.mq.addListener(function (e) {
        return _this.menuIsVisible = e.matches;
      });
      Vue.nextTick(function () {
        return _this.isLoading = false;
      });
    },
    methods: {
      /**
       * Show or hide dashboard menu.
       */
      toggleMenu: function toggleMenu() {
        this.menuIsVisible = !this.menuIsVisible;
      }
    }
  });
})();

/***/ }),

/***/ "./resources/js/main/mixins/FormField.js":
/*!***********************************************!*\
  !*** ./resources/js/main/mixins/FormField.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    /**
     * A list of IDs of the elements that describe the field
     * according to ARIA specifications, separated by a space.
     */
    ariaDescribedby: {
      type: String,
      required: false,
      "default": ''
    },

    /**
     * Define the `name` for the field.
     */
    name: {
      type: String,
      required: true
    },

    /**
     * Declaring the value as a property is necessary for binding
     * the data inside custom input components.
     */
    value: {
      required: false
    }
  },
  computed: {
    /**
     * Add the ID of the validation error to the `aria-describedby`
     * attribute if validation fails.
     *
     * @return {string}
     */
    describedBy: function describedBy() {
      if (!this.$parent.validate) {
        return this.ariaDescribedby;
      }

      return this.hasErrors ? "".concat(this.id, "-errors ").concat(this.ariaDescribedby) : this.ariaDescribedby;
    },

    /**
     * Check if the field has any errors.
     *
     * @return {boolean}
     */
    hasErrors: function hasErrors() {
      // Remove the "[]" ending from multiplevalue fields, like "images[]".
      var fieldName = this.name.replace(/\[]$/, '');
      return !!this.$parent.errors[fieldName];
    },

    /**
     * Return a formatted ID for the field.
     *
     * @return {string}
     */
    id: function id() {
      return this.$options.filters.slugify(this.name);
    }
  }
});

/***/ }),

/***/ "./resources/js/main/mixins/Gallerymixin.js":
/*!**************************************************!*\
  !*** ./resources/js/main/mixins/Gallerymixin.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/umd.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    images: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      required: false
    },
    path: {
      type: String,
      required: false,
      "default": 'img/galeria/'
    },
    useThumb: {
      type: Boolean,
      required: false,
      "default": true
    }
  },
  data: function data() {
    return {
      activeThumb: null,
      dom: {
        galleryContainer: {}
      },
      config: {
        closeOnScroll: false,
        loop: false,
        shareEl: false,
        showHideOpacity: true,
        errorMsg: '<div class="pswp__error-msg">No se encontró <a href="%url%" target="_blank">la imagen</a>.</div>',
        getThumbBoundsFn: null
      }
    };
  },
  computed: {
    /**
     * Make sure the gallery path ends with a slash.
     *
     * @return string
     */
    galleryPath: function galleryPath() {
      return this.path.slice(-1) === '/' ? this.path : this.path + '/';
    },

    /**
     * Create the images object for Photoswipe.
     *
     * @return {Object}
     */
    items: function items() {
      var items = [];

      for (var i in this.images) {
        items.push({
          src: this.galleryPath + this.images[i].img,
          h: this.images[i].height,
          w: this.images[i].width
        });
      }

      return items;
    }
  },
  mounted: function mounted() {
    this.config = deepmerge__WEBPACK_IMPORTED_MODULE_0__(this.config, this.options || {});
    this.dom.galleryContainer = document.querySelector('#photoswipe');
  },
  methods: {
    /**
    * Return thumb coordinates for opening animation.
    *
    * @return {Object}
    */
    getThumbCoordinates: function getThumbCoordinates() {
      var rect = this.activeThumb.getBoundingClientRect();
      return {
        x: rect.left,
        y: rect.top + (window.pageYOffset || document.documentElement.scrollTop),
        w: rect.width
      };
    },

    /**
     * Build the gallery when the thumb is clicked.
     *
     * @param {Object}
     */
    onClick: function onClick(e) {
      this.activeThumb = e.currentTarget.querySelector('.js-thumb');
      var gallery = new window.PhotoSwipe(this.dom.galleryContainer, window.PhotoSwipeUI_Default, this.items, deepmerge__WEBPACK_IMPORTED_MODULE_0__(this.config, {
        getThumbBoundsFn: this.useThumb ? this.getThumbCoordinates : null,
        index: parseInt(e.currentTarget.getAttribute('data-index') || 0, 10)
      }));
      gallery.init();
    }
  }
});

/***/ }),

/***/ "./resources/js/vendor/hammer.js":
/*!***************************************!*\
  !*** ./resources/js/vendor/hammer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function (window, document, exportName, undefined) {
  'use strict';

  var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
  var TEST_ELEMENT = document.createElement('div');
  var TYPE_FUNCTION = 'function';
  var round = Math.round;
  var abs = Math.abs;
  var now = Date.now;
  /**
   * set a timeout with a given scope
   * @param {Function} fn
   * @param {Number} timeout
   * @param {Object} context
   * @returns {number}
   */

  function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
  }
  /**
   * if the argument is an array, we want to execute the fn on each entry
   * if it aint an array we don't want to do a thing.
   * this is used by all the methods that accept a single and array argument.
   * @param {*|Array} arg
   * @param {String} fn
   * @param {Object} [context]
   * @returns {Boolean}
   */


  function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
      each(arg, context[fn], context);
      return true;
    }

    return false;
  }
  /**
   * walk objects and arrays
   * @param {Object} obj
   * @param {Function} iterator
   * @param {Object} context
   */


  function each(obj, iterator, context) {
    var i;

    if (!obj) {
      return;
    }

    if (obj.forEach) {
      obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
      i = 0;

      while (i < obj.length) {
        iterator.call(context, obj[i], i, obj);
        i++;
      }
    } else {
      for (i in obj) {
        obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
      }
    }
  }
  /**
   * wrap a method with a deprecation warning and stack trace
   * @param {Function} method
   * @param {String} name
   * @param {String} message
   * @returns {Function} A new function wrapping the supplied method.
   */


  function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function () {
      var e = new Error('get-stack-trace');
      var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
      var log = window.console && (window.console.warn || window.console.log);

      if (log) {
        log.call(window.console, deprecationMessage, stack);
      }

      return method.apply(this, arguments);
    };
  }
  /**
   * extend object.
   * means that properties in dest will be overwritten by the ones in src.
   * @param {Object} target
   * @param {...Object} objects_to_assign
   * @returns {Object} target
   */


  var assign;

  if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];

        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }

      return output;
    };
  } else {
    assign = Object.assign;
  }
  /**
   * extend object.
   * means that properties in dest will be overwritten by the ones in src.
   * @param {Object} dest
   * @param {Object} src
   * @param {Boolean} [merge=false]
   * @returns {Object} dest
   */


  var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;

    while (i < keys.length) {
      if (!merge || merge && dest[keys[i]] === undefined) {
        dest[keys[i]] = src[keys[i]];
      }

      i++;
    }

    return dest;
  }, 'extend', 'Use `assign`.');
  /**
   * merge the values from src in the dest.
   * means that properties that exist in dest will not be overwritten by src
   * @param {Object} dest
   * @param {Object} src
   * @returns {Object} dest
   */

  var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
  }, 'merge', 'Use `assign`.');
  /**
   * simple class inheritance
   * @param {Function} child
   * @param {Function} base
   * @param {Object} [properties]
   */

  function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;
    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
      assign(childP, properties);
    }
  }
  /**
   * simple function bind
   * @param {Function} fn
   * @param {Object} context
   * @returns {Function}
   */


  function bindFn(fn, context) {
    return function boundFn() {
      return fn.apply(context, arguments);
    };
  }
  /**
   * let a boolean value also be a function that must return a boolean
   * this first item in args will be used as the context
   * @param {Boolean|Function} val
   * @param {Array} [args]
   * @returns {Boolean}
   */


  function boolOrFn(val, args) {
    if (_typeof(val) == TYPE_FUNCTION) {
      return val.apply(args ? args[0] || undefined : undefined, args);
    }

    return val;
  }
  /**
   * use the val2 when val1 is undefined
   * @param {*} val1
   * @param {*} val2
   * @returns {*}
   */


  function ifUndefined(val1, val2) {
    return val1 === undefined ? val2 : val1;
  }
  /**
   * addEventListener with multiple events at once
   * @param {EventTarget} target
   * @param {String} types
   * @param {Function} handler
   */


  function addEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
      target.addEventListener(type, handler, false);
    });
  }
  /**
   * removeEventListener with multiple events at once
   * @param {EventTarget} target
   * @param {String} types
   * @param {Function} handler
   */


  function removeEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
      target.removeEventListener(type, handler, false);
    });
  }
  /**
   * find if a node is in the given parent
   * @method hasParent
   * @param {HTMLElement} node
   * @param {HTMLElement} parent
   * @return {Boolean} found
   */


  function hasParent(node, parent) {
    while (node) {
      if (node == parent) {
        return true;
      }

      node = node.parentNode;
    }

    return false;
  }
  /**
   * small indexOf wrapper
   * @param {String} str
   * @param {String} find
   * @returns {Boolean} found
   */


  function inStr(str, find) {
    return str.indexOf(find) > -1;
  }
  /**
   * split string on whitespace
   * @param {String} str
   * @returns {Array} words
   */


  function splitStr(str) {
    return str.trim().split(/\s+/g);
  }
  /**
   * find if a array contains the object using indexOf or a simple polyFill
   * @param {Array} src
   * @param {String} find
   * @param {String} [findByKey]
   * @return {Boolean|Number} false when not found, or the index
   */


  function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
      return src.indexOf(find);
    } else {
      var i = 0;

      while (i < src.length) {
        if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
          return i;
        }

        i++;
      }

      return -1;
    }
  }
  /**
   * convert array-like objects to real arrays
   * @param {Object} obj
   * @returns {Array}
   */


  function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
  }
  /**
   * unique array with objects based on a key (like 'id') or just by the array's value
   * @param {Array} src [{id:1},{id:2},{id:1}]
   * @param {String} [key]
   * @param {Boolean} [sort=False]
   * @returns {Array} [{id:1},{id:2}]
   */


  function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
      var val = key ? src[i][key] : src[i];

      if (inArray(values, val) < 0) {
        results.push(src[i]);
      }

      values[i] = val;
      i++;
    }

    if (sort) {
      if (!key) {
        results = results.sort();
      } else {
        results = results.sort(function sortUniqueArray(a, b) {
          return a[key] > b[key];
        });
      }
    }

    return results;
  }
  /**
   * get the prefixed property
   * @param {Object} obj
   * @param {String} property
   * @returns {String|Undefined} prefixed
   */


  function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);
    var i = 0;

    while (i < VENDOR_PREFIXES.length) {
      prefix = VENDOR_PREFIXES[i];
      prop = prefix ? prefix + camelProp : property;

      if (prop in obj) {
        return prop;
      }

      i++;
    }

    return undefined;
  }
  /**
   * get a unique id
   * @returns {number} uniqueId
   */


  var _uniqueId = 1;

  function uniqueId() {
    return _uniqueId++;
  }
  /**
   * get the window object of an element
   * @param {HTMLElement} element
   * @returns {DocumentView|Window}
   */


  function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return doc.defaultView || doc.parentWindow || window;
  }

  var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
  var SUPPORT_TOUCH = ('ontouchstart' in window);
  var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
  var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
  var INPUT_TYPE_TOUCH = 'touch';
  var INPUT_TYPE_PEN = 'pen';
  var INPUT_TYPE_MOUSE = 'mouse';
  var INPUT_TYPE_KINECT = 'kinect';
  var COMPUTE_INTERVAL = 25;
  var INPUT_START = 1;
  var INPUT_MOVE = 2;
  var INPUT_END = 4;
  var INPUT_CANCEL = 8;
  var DIRECTION_NONE = 1;
  var DIRECTION_LEFT = 2;
  var DIRECTION_RIGHT = 4;
  var DIRECTION_UP = 8;
  var DIRECTION_DOWN = 16;
  var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
  var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
  var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
  var PROPS_XY = ['x', 'y'];
  var PROPS_CLIENT_XY = ['clientX', 'clientY'];
  /**
   * create new input type manager
   * @param {Manager} manager
   * @param {Function} callback
   * @returns {Input}
   * @constructor
   */

  function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget; // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.

    this.domHandler = function (ev) {
      if (boolOrFn(manager.options.enable, [manager])) {
        self.handler(ev);
      }
    };

    this.init();
  }

  Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function handler() {},

    /**
     * bind the events
     */
    init: function init() {
      this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function destroy() {
      this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
      this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
      this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
  };
  /**
   * create new input type manager
   * called by the Manager constructor
   * @param {Hammer} manager
   * @returns {Input}
   */

  function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
      Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
      Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
      Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
      Type = MouseInput;
    } else {
      Type = TouchMouseInput;
    }

    return new Type(manager, inputHandler);
  }
  /**
   * handle input events
   * @param {Manager} manager
   * @param {String} eventType
   * @param {Object} input
   */


  function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
    var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
      manager.session = {};
    } // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'


    input.eventType = eventType; // compute scale, rotation etc

    computeInputData(manager, input); // emit secret event

    manager.emit('hammer.input', input);
    manager.recognize(input);
    manager.session.prevInput = input;
  }
  /**
   * extend the data with some usable properties like scale, rotate, velocity etc
   * @param {Object} manager
   * @param {Object} input
   */


  function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length; // store the first input to calculate the distance and direction

    if (!session.firstInput) {
      session.firstInput = simpleCloneInputData(input);
    } // to compute scale and rotation we need to store the multiple touches


    if (pointersLength > 1 && !session.firstMultiple) {
      session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
      session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;
    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);
    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
    input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
    computeIntervalInputData(session, input); // find the correct target

    var target = manager.element;

    if (hasParent(input.srcEvent.target, target)) {
      target = input.srcEvent.target;
    }

    input.target = target;
  }

  function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
      prevDelta = session.prevDelta = {
        x: prevInput.deltaX || 0,
        y: prevInput.deltaY || 0
      };
      offset = session.offsetDelta = {
        x: center.x,
        y: center.y
      };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
  }
  /**
   * velocity is calculated every x ms
   * @param {Object} session
   * @param {Object} input
   */


  function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity,
        velocityX,
        velocityY,
        direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
      var deltaX = input.deltaX - last.deltaX;
      var deltaY = input.deltaY - last.deltaY;
      var v = getVelocity(deltaTime, deltaX, deltaY);
      velocityX = v.x;
      velocityY = v.y;
      velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
      direction = getDirection(deltaX, deltaY);
      session.lastInterval = input;
    } else {
      // use latest velocity info if it doesn't overtake a minimum period
      velocity = last.velocity;
      velocityX = last.velocityX;
      velocityY = last.velocityY;
      direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
  }
  /**
   * create a simple clone from the input used for storage of firstInput and firstMultiple
   * @param {Object} input
   * @returns {Object} clonedInputData
   */


  function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;

    while (i < input.pointers.length) {
      pointers[i] = {
        clientX: round(input.pointers[i].clientX),
        clientY: round(input.pointers[i].clientY)
      };
      i++;
    }

    return {
      timeStamp: now(),
      pointers: pointers,
      center: getCenter(pointers),
      deltaX: input.deltaX,
      deltaY: input.deltaY
    };
  }
  /**
   * get the center of all the pointers
   * @param {Array} pointers
   * @return {Object} center contains `x` and `y` properties
   */


  function getCenter(pointers) {
    var pointersLength = pointers.length; // no need to loop when only one touch

    if (pointersLength === 1) {
      return {
        x: round(pointers[0].clientX),
        y: round(pointers[0].clientY)
      };
    }

    var x = 0,
        y = 0,
        i = 0;

    while (i < pointersLength) {
      x += pointers[i].clientX;
      y += pointers[i].clientY;
      i++;
    }

    return {
      x: round(x / pointersLength),
      y: round(y / pointersLength)
    };
  }
  /**
   * calculate the velocity between two points. unit is in px per ms.
   * @param {Number} deltaTime
   * @param {Number} x
   * @param {Number} y
   * @return {Object} velocity `x` and `y`
   */


  function getVelocity(deltaTime, x, y) {
    return {
      x: x / deltaTime || 0,
      y: y / deltaTime || 0
    };
  }
  /**
   * get the direction between two points
   * @param {Number} x
   * @param {Number} y
   * @return {Number} direction
   */


  function getDirection(x, y) {
    if (x === y) {
      return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
      return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }

    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
  }
  /**
   * calculate the absolute distance between two points
   * @param {Object} p1 {x, y}
   * @param {Object} p2 {x, y}
   * @param {Array} [props] containing x and y keys
   * @return {Number} distance
   */


  function getDistance(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }

    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.sqrt(x * x + y * y);
  }
  /**
   * calculate the angle between two coordinates
   * @param {Object} p1
   * @param {Object} p2
   * @param {Array} [props] containing x and y keys
   * @return {Number} angle
   */


  function getAngle(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }

    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
  }
  /**
   * calculate the rotation degrees between two pointersets
   * @param {Array} start array of pointers
   * @param {Array} end array of pointers
   * @return {Number} rotation
   */


  function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
  }
  /**
   * calculate the scale factor between two pointersets
   * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
   * @param {Array} start array of pointers
   * @param {Array} end array of pointers
   * @return {Number} scale
   */


  function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
  }

  var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
  };
  var MOUSE_ELEMENT_EVENTS = 'mousedown';
  var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
  /**
   * Mouse events input
   * @constructor
   * @extends Input
   */

  function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;
    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
  }

  inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
      var eventType = MOUSE_INPUT_MAP[ev.type]; // on start we want to have the left mouse button down

      if (eventType & INPUT_START && ev.button === 0) {
        this.pressed = true;
      }

      if (eventType & INPUT_MOVE && ev.which !== 1) {
        eventType = INPUT_END;
      } // mouse must be down


      if (!this.pressed) {
        return;
      }

      if (eventType & INPUT_END) {
        this.pressed = false;
      }

      this.callback(this.manager, eventType, {
        pointers: [ev],
        changedPointers: [ev],
        pointerType: INPUT_TYPE_MOUSE,
        srcEvent: ev
      });
    }
  });
  var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
  }; // in IE10 the pointer types is defined as an enum

  var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816

  };
  var POINTER_ELEMENT_EVENTS = 'pointerdown';
  var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel'; // IE10 has prefixed support, and case-sensitive

  if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
  }
  /**
   * Pointer events input
   * @constructor
   * @extends Input
   */


  function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;
    Input.apply(this, arguments);
    this.store = this.manager.session.pointerEvents = [];
  }

  inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
      var store = this.store;
      var removePointer = false;
      var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
      var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
      var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
      var isTouch = pointerType == INPUT_TYPE_TOUCH; // get index of the event in the store

      var storeIndex = inArray(store, ev.pointerId, 'pointerId'); // start and mouse must be down

      if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
        if (storeIndex < 0) {
          store.push(ev);
          storeIndex = store.length - 1;
        }
      } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        removePointer = true;
      } // it not found, so the pointer hasn't been down (so it's probably a hover)


      if (storeIndex < 0) {
        return;
      } // update the event in the store


      store[storeIndex] = ev;
      this.callback(this.manager, eventType, {
        pointers: store,
        changedPointers: [ev],
        pointerType: pointerType,
        srcEvent: ev
      });

      if (removePointer) {
        // remove from the store
        store.splice(storeIndex, 1);
      }
    }
  });
  var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
  var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
  /**
   * Touch events input
   * @constructor
   * @extends Input
   */

  function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;
    Input.apply(this, arguments);
  }

  inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
      var type = SINGLE_TOUCH_INPUT_MAP[ev.type]; // should we handle the touch events?

      if (type === INPUT_START) {
        this.started = true;
      }

      if (!this.started) {
        return;
      }

      var touches = normalizeSingleTouches.call(this, ev, type); // when done, reset the started state

      if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
        this.started = false;
      }

      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    }
  });
  /**
   * @this {TouchInput}
   * @param {Object} ev
   * @param {Number} type flag
   * @returns {undefined|Array} [all, changed]
   */

  function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
      all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
  }

  var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
  };
  var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
  /**
   * Multi-user touch events input
   * @constructor
   * @extends Input
   */

  function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};
    Input.apply(this, arguments);
  }

  inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
      var type = TOUCH_INPUT_MAP[ev.type];
      var touches = getTouches.call(this, ev, type);

      if (!touches) {
        return;
      }

      this.callback(this.manager, type, {
        pointers: touches[0],
        changedPointers: touches[1],
        pointerType: INPUT_TYPE_TOUCH,
        srcEvent: ev
      });
    }
  });
  /**
   * @this {TouchInput}
   * @param {Object} ev
   * @param {Number} type flag
   * @returns {undefined|Array} [all, changed]
   */

  function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds; // when there is only one touch, the process can be simplified

    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
      targetIds[allTouches[0].identifier] = true;
      return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target; // get target touches from touches

    targetTouches = allTouches.filter(function (touch) {
      return hasParent(touch.target, target);
    }); // collect touches

    if (type === INPUT_START) {
      i = 0;

      while (i < targetTouches.length) {
        targetIds[targetTouches[i].identifier] = true;
        i++;
      }
    } // filter changed touches to only contain touches that exist in the collected target ids


    i = 0;

    while (i < changedTouches.length) {
      if (targetIds[changedTouches[i].identifier]) {
        changedTargetTouches.push(changedTouches[i]);
      } // cleanup removed touches


      if (type & (INPUT_END | INPUT_CANCEL)) {
        delete targetIds[changedTouches[i].identifier];
      }

      i++;
    }

    if (!changedTargetTouches.length) {
      return;
    }

    return [// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
    uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
  }
  /**
   * Combined touch and mouse input
   *
   * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
   * This because touch devices also emit mouse events while doing a touch.
   *
   * @constructor
   * @extends Input
   */


  var DEDUP_TIMEOUT = 2500;
  var DEDUP_DISTANCE = 25;

  function TouchMouseInput() {
    Input.apply(this, arguments);
    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
    this.primaryTouch = null;
    this.lastTouches = [];
  }

  inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
      var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
          isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;

      if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
        return;
      } // when we're in a touch event, record touches to  de-dupe synthetic mouse event


      if (isTouch) {
        recordTouches.call(this, inputEvent, inputData);
      } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
        return;
      }

      this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
      this.touch.destroy();
      this.mouse.destroy();
    }
  });

  function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
      this.primaryTouch = eventData.changedPointers[0].identifier;
      setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
      setLastTouch.call(this, eventData);
    }
  }

  function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
      var lastTouch = {
        x: touch.clientX,
        y: touch.clientY
      };
      this.lastTouches.push(lastTouch);
      var lts = this.lastTouches;

      var removeLastTouch = function removeLastTouch() {
        var i = lts.indexOf(lastTouch);

        if (i > -1) {
          lts.splice(i, 1);
        }
      };

      setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
  }

  function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX,
        y = eventData.srcEvent.clientY;

    for (var i = 0; i < this.lastTouches.length; i++) {
      var t = this.lastTouches[i];
      var dx = Math.abs(x - t.x),
          dy = Math.abs(y - t.y);

      if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
        return true;
      }
    }

    return false;
  }

  var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
  var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined; // magical touchAction value

  var TOUCH_ACTION_COMPUTE = 'compute';
  var TOUCH_ACTION_AUTO = 'auto';
  var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented

  var TOUCH_ACTION_NONE = 'none';
  var TOUCH_ACTION_PAN_X = 'pan-x';
  var TOUCH_ACTION_PAN_Y = 'pan-y';
  var TOUCH_ACTION_MAP = getTouchActionProps();
  /**
   * Touch Action
   * sets the touchAction property or uses the js alternative
   * @param {Manager} manager
   * @param {String} value
   * @constructor
   */

  function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
  }

  TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function set(value) {
      // find out the touch-action by the event handlers
      if (value == TOUCH_ACTION_COMPUTE) {
        value = this.compute();
      }

      if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
        this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
      }

      this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function update() {
      this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function compute() {
      var actions = [];
      each(this.manager.recognizers, function (recognizer) {
        if (boolOrFn(recognizer.options.enable, [recognizer])) {
          actions = actions.concat(recognizer.getTouchAction());
        }
      });
      return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function preventDefaults(input) {
      var srcEvent = input.srcEvent;
      var direction = input.offsetDirection; // if the touch action did prevented once this session

      if (this.manager.session.prevented) {
        srcEvent.preventDefault();
        return;
      }

      var actions = this.actions;
      var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
      var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
      var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

      if (hasNone) {
        //do not prevent defaults if this is a tap gesture
        var isTapPointer = input.pointers.length === 1;
        var isTapMovement = input.distance < 2;
        var isTapTouchTime = input.deltaTime < 250;

        if (isTapPointer && isTapMovement && isTapTouchTime) {
          return;
        }
      }

      if (hasPanX && hasPanY) {
        // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
        return;
      }

      if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
        return this.preventSrc(srcEvent);
      }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function preventSrc(srcEvent) {
      this.manager.session.prevented = true;
      srcEvent.preventDefault();
    }
  };
  /**
   * when the touchActions are collected they are not a valid value, so we need to clean things up. *
   * @param {String} actions
   * @returns {*}
   */

  function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
      return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y); // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning

    if (hasPanX && hasPanY) {
      return TOUCH_ACTION_NONE;
    } // pan-x OR pan-y


    if (hasPanX || hasPanY) {
      return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    } // manipulation


    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
      return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
  }

  function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
      return false;
    }

    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
      // If css.supports is not supported but there is native touch-action assume it supports
      // all values. This is the case for IE 10 and 11.
      touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
  }
  /**
   * Recognizer flow explained; *
   * All recognizers have the initial state of POSSIBLE when a input session starts.
   * The definition of a input session is from the first input until the last input, with all it's movement in it. *
   * Example session for mouse-input: mousedown -> mousemove -> mouseup
   *
   * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
   * which determines with state it should be.
   *
   * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
   * POSSIBLE to give it another change on the next cycle.
   *
   *               Possible
   *                  |
   *            +-----+---------------+
   *            |                     |
   *      +-----+-----+               |
   *      |           |               |
   *   Failed      Cancelled          |
   *                          +-------+------+
   *                          |              |
   *                      Recognized       Began
   *                                         |
   *                                      Changed
   *                                         |
   *                                  Ended/Recognized
   */


  var STATE_POSSIBLE = 1;
  var STATE_BEGAN = 2;
  var STATE_CHANGED = 4;
  var STATE_ENDED = 8;
  var STATE_RECOGNIZED = STATE_ENDED;
  var STATE_CANCELLED = 16;
  var STATE_FAILED = 32;
  /**
   * Recognizer
   * Every recognizer needs to extend from this class.
   * @constructor
   * @param {Object} options
   */

  function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});
    this.id = uniqueId();
    this.manager = null; // default is enable true

    this.options.enable = ifUndefined(this.options.enable, true);
    this.state = STATE_POSSIBLE;
    this.simultaneous = {};
    this.requireFail = [];
  }

  Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function set(options) {
      assign(this.options, options); // also update the touchAction, in case something changed about the directions/enabled state

      this.manager && this.manager.touchAction.update();
      return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function recognizeWith(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
        return this;
      }

      var simultaneous = this.simultaneous;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

      if (!simultaneous[otherRecognizer.id]) {
        simultaneous[otherRecognizer.id] = otherRecognizer;
        otherRecognizer.recognizeWith(this);
      }

      return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function dropRecognizeWith(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
        return this;
      }

      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      delete this.simultaneous[otherRecognizer.id];
      return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function requireFailure(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
        return this;
      }

      var requireFail = this.requireFail;
      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

      if (inArray(requireFail, otherRecognizer) === -1) {
        requireFail.push(otherRecognizer);
        otherRecognizer.requireFailure(this);
      }

      return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function dropRequireFailure(otherRecognizer) {
      if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
        return this;
      }

      otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
      var index = inArray(this.requireFail, otherRecognizer);

      if (index > -1) {
        this.requireFail.splice(index, 1);
      }

      return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function hasRequireFailures() {
      return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function canRecognizeWith(otherRecognizer) {
      return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function emit(input) {
      var self = this;
      var state = this.state;

      function emit(event) {
        self.manager.emit(event, input);
      } // 'panstart' and 'panmove'


      if (state < STATE_ENDED) {
        emit(self.options.event + stateStr(state));
      }

      emit(self.options.event); // simple 'eventName' events

      if (input.additionalEvent) {
        // additional event(panleft, panright, pinchin, pinchout...)
        emit(input.additionalEvent);
      } // panend and pancancel


      if (state >= STATE_ENDED) {
        emit(self.options.event + stateStr(state));
      }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function tryEmit(input) {
      if (this.canEmit()) {
        return this.emit(input);
      } // it's failing anyway


      this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function canEmit() {
      var i = 0;

      while (i < this.requireFail.length) {
        if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
          return false;
        }

        i++;
      }

      return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function recognize(inputData) {
      // make a new copy of the inputData
      // so we can change the inputData without messing up the other recognizers
      var inputDataClone = assign({}, inputData); // is is enabled and allow recognizing?

      if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
        this.reset();
        this.state = STATE_FAILED;
        return;
      } // reset when we've reached the end


      if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
        this.state = STATE_POSSIBLE;
      }

      this.state = this.process(inputDataClone); // the recognizer has recognized a gesture
      // so trigger an event

      if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
        this.tryEmit(inputDataClone);
      }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function process(inputData) {},
    // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function getTouchAction() {},

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function reset() {}
  };
  /**
   * get a usable string, used as event postfix
   * @param {Const} state
   * @returns {String} state
   */

  function stateStr(state) {
    if (state & STATE_CANCELLED) {
      return 'cancel';
    } else if (state & STATE_ENDED) {
      return 'end';
    } else if (state & STATE_CHANGED) {
      return 'move';
    } else if (state & STATE_BEGAN) {
      return 'start';
    }

    return '';
  }
  /**
   * direction cons to string
   * @param {Const} direction
   * @returns {String}
   */


  function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
      return 'down';
    } else if (direction == DIRECTION_UP) {
      return 'up';
    } else if (direction == DIRECTION_LEFT) {
      return 'left';
    } else if (direction == DIRECTION_RIGHT) {
      return 'right';
    }

    return '';
  }
  /**
   * get a recognizer by name if it is bound to a manager
   * @param {Recognizer|String} otherRecognizer
   * @param {Recognizer} recognizer
   * @returns {Recognizer}
   */


  function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;

    if (manager) {
      return manager.get(otherRecognizer);
    }

    return otherRecognizer;
  }
  /**
   * This recognizer is just used as a base for the simple attribute recognizers.
   * @constructor
   * @extends Recognizer
   */


  function AttrRecognizer() {
    Recognizer.apply(this, arguments);
  }

  inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
      /**
       * @type {Number}
       * @default 1
       */
      pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function attrTest(input) {
      var optionPointers = this.options.pointers;
      return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function process(input) {
      var state = this.state;
      var eventType = input.eventType;
      var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
      var isValid = this.attrTest(input); // on cancel input and we've recognized before, return STATE_CANCELLED

      if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
        return state | STATE_CANCELLED;
      } else if (isRecognized || isValid) {
        if (eventType & INPUT_END) {
          return state | STATE_ENDED;
        } else if (!(state & STATE_BEGAN)) {
          return STATE_BEGAN;
        }

        return state | STATE_CHANGED;
      }

      return STATE_FAILED;
    }
  });
  /**
   * Pan
   * Recognized when the pointer is down and moved in the allowed direction.
   * @constructor
   * @extends AttrRecognizer
   */

  function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);
    this.pX = null;
    this.pY = null;
  }

  inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
      event: 'pan',
      threshold: 10,
      pointers: 1,
      direction: DIRECTION_ALL
    },
    getTouchAction: function getTouchAction() {
      var direction = this.options.direction;
      var actions = [];

      if (direction & DIRECTION_HORIZONTAL) {
        actions.push(TOUCH_ACTION_PAN_Y);
      }

      if (direction & DIRECTION_VERTICAL) {
        actions.push(TOUCH_ACTION_PAN_X);
      }

      return actions;
    },
    directionTest: function directionTest(input) {
      var options = this.options;
      var hasMoved = true;
      var distance = input.distance;
      var direction = input.direction;
      var x = input.deltaX;
      var y = input.deltaY; // lock to axis?

      if (!(direction & options.direction)) {
        if (options.direction & DIRECTION_HORIZONTAL) {
          direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
          hasMoved = x != this.pX;
          distance = Math.abs(input.deltaX);
        } else {
          direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
          hasMoved = y != this.pY;
          distance = Math.abs(input.deltaY);
        }
      }

      input.direction = direction;
      return hasMoved && distance > options.threshold && direction & options.direction;
    },
    attrTest: function attrTest(input) {
      return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
    },
    emit: function emit(input) {
      this.pX = input.deltaX;
      this.pY = input.deltaY;
      var direction = directionStr(input.direction);

      if (direction) {
        input.additionalEvent = this.options.event + direction;
      }

      this._super.emit.call(this, input);
    }
  });
  /**
   * Pinch
   * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
   * @constructor
   * @extends AttrRecognizer
   */

  function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }

  inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
      event: 'pinch',
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function getTouchAction() {
      return [TOUCH_ACTION_NONE];
    },
    attrTest: function attrTest(input) {
      return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },
    emit: function emit(input) {
      if (input.scale !== 1) {
        var inOut = input.scale < 1 ? 'in' : 'out';
        input.additionalEvent = this.options.event + inOut;
      }

      this._super.emit.call(this, input);
    }
  });
  /**
   * Press
   * Recognized when the pointer is down for x ms without any movement.
   * @constructor
   * @extends Recognizer
   */

  function PressRecognizer() {
    Recognizer.apply(this, arguments);
    this._timer = null;
    this._input = null;
  }

  inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
      event: 'press',
      pointers: 1,
      time: 251,
      // minimal time of the pointer to be pressed
      threshold: 9 // a minimal movement is ok, but keep it low

    },
    getTouchAction: function getTouchAction() {
      return [TOUCH_ACTION_AUTO];
    },
    process: function process(input) {
      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTime = input.deltaTime > options.time;
      this._input = input; // we only allow little movement
      // and we've reached an end event, so a tap is possible

      if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
        this.reset();
      } else if (input.eventType & INPUT_START) {
        this.reset();
        this._timer = setTimeoutContext(function () {
          this.state = STATE_RECOGNIZED;
          this.tryEmit();
        }, options.time, this);
      } else if (input.eventType & INPUT_END) {
        return STATE_RECOGNIZED;
      }

      return STATE_FAILED;
    },
    reset: function reset() {
      clearTimeout(this._timer);
    },
    emit: function emit(input) {
      if (this.state !== STATE_RECOGNIZED) {
        return;
      }

      if (input && input.eventType & INPUT_END) {
        this.manager.emit(this.options.event + 'up', input);
      } else {
        this._input.timeStamp = now();
        this.manager.emit(this.options.event, this._input);
      }
    }
  });
  /**
   * Rotate
   * Recognized when two or more pointer are moving in a circular motion.
   * @constructor
   * @extends AttrRecognizer
   */

  function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }

  inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
      event: 'rotate',
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function getTouchAction() {
      return [TOUCH_ACTION_NONE];
    },
    attrTest: function attrTest(input) {
      return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
  });
  /**
   * Swipe
   * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
   * @constructor
   * @extends AttrRecognizer
   */

  function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }

  inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
      event: 'swipe',
      threshold: 10,
      velocity: 0.3,
      direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
      pointers: 1
    },
    getTouchAction: function getTouchAction() {
      return PanRecognizer.prototype.getTouchAction.call(this);
    },
    attrTest: function attrTest(input) {
      var direction = this.options.direction;
      var velocity;

      if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
        velocity = input.overallVelocity;
      } else if (direction & DIRECTION_HORIZONTAL) {
        velocity = input.overallVelocityX;
      } else if (direction & DIRECTION_VERTICAL) {
        velocity = input.overallVelocityY;
      }

      return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },
    emit: function emit(input) {
      var direction = directionStr(input.offsetDirection);

      if (direction) {
        this.manager.emit(this.options.event + direction, input);
      }

      this.manager.emit(this.options.event, input);
    }
  });
  /**
   * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
   * between the given interval and position. The delay option can be used to recognize multi-taps without firing
   * a single tap.
   *
   * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
   * multi-taps being recognized.
   * @constructor
   * @extends Recognizer
   */

  function TapRecognizer() {
    Recognizer.apply(this, arguments); // previous time and center,
    // used for tap counting

    this.pTime = false;
    this.pCenter = false;
    this._timer = null;
    this._input = null;
    this.count = 0;
  }

  inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
      event: 'tap',
      pointers: 1,
      taps: 1,
      interval: 300,
      // max time between the multi-tap taps
      time: 250,
      // max time of the pointer to be down (like finger on the screen)
      threshold: 9,
      // a minimal movement is ok, but keep it low
      posThreshold: 10 // a multi-tap can be a bit off the initial position

    },
    getTouchAction: function getTouchAction() {
      return [TOUCH_ACTION_MANIPULATION];
    },
    process: function process(input) {
      var options = this.options;
      var validPointers = input.pointers.length === options.pointers;
      var validMovement = input.distance < options.threshold;
      var validTouchTime = input.deltaTime < options.time;
      this.reset();

      if (input.eventType & INPUT_START && this.count === 0) {
        return this.failTimeout();
      } // we only allow little movement
      // and we've reached an end event, so a tap is possible


      if (validMovement && validTouchTime && validPointers) {
        if (input.eventType != INPUT_END) {
          return this.failTimeout();
        }

        var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
        var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
        this.pTime = input.timeStamp;
        this.pCenter = input.center;

        if (!validMultiTap || !validInterval) {
          this.count = 1;
        } else {
          this.count += 1;
        }

        this._input = input; // if tap count matches we have recognized it,
        // else it has began recognizing...

        var tapCount = this.count % options.taps;

        if (tapCount === 0) {
          // no failing requirements, immediately trigger the tap event
          // or wait as long as the multitap interval to trigger
          if (!this.hasRequireFailures()) {
            return STATE_RECOGNIZED;
          } else {
            this._timer = setTimeoutContext(function () {
              this.state = STATE_RECOGNIZED;
              this.tryEmit();
            }, options.interval, this);
            return STATE_BEGAN;
          }
        }
      }

      return STATE_FAILED;
    },
    failTimeout: function failTimeout() {
      this._timer = setTimeoutContext(function () {
        this.state = STATE_FAILED;
      }, this.options.interval, this);
      return STATE_FAILED;
    },
    reset: function reset() {
      clearTimeout(this._timer);
    },
    emit: function emit() {
      if (this.state == STATE_RECOGNIZED) {
        this._input.tapCount = this.count;
        this.manager.emit(this.options.event, this._input);
      }
    }
  });
  /**
   * Simple way to create a manager with a default set of recognizers.
   * @param {HTMLElement} element
   * @param {Object} [options]
   * @constructor
   */

  function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
  }
  /**
   * @const {string}
   */


  Hammer.VERSION = '2.0.8';
  /**
   * default settings
   * @namespace
   */

  Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [// RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
    [RotateRecognizer, {
      enable: false
    }], [PinchRecognizer, {
      enable: false
    }, ['rotate']], [SwipeRecognizer, {
      direction: DIRECTION_HORIZONTAL
    }], [PanRecognizer, {
      direction: DIRECTION_HORIZONTAL
    }, ['swipe']], [TapRecognizer], [TapRecognizer, {
      event: 'doubletap',
      taps: 2
    }, ['tap']], [PressRecognizer]],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
      /**
       * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
       * @type {String}
       * @default 'none'
       */
      userSelect: 'none',

      /**
       * Disable the Windows Phone grippers when pressing an element.
       * @type {String}
       * @default 'none'
       */
      touchSelect: 'none',

      /**
       * Disables the default callout shown when you touch and hold a touch target.
       * On iOS, when you touch and hold a touch target such as a link, Safari displays
       * a callout containing information about the link. This property allows you to disable that callout.
       * @type {String}
       * @default 'none'
       */
      touchCallout: 'none',

      /**
       * Specifies whether zooming is enabled. Used by IE10>
       * @type {String}
       * @default 'none'
       */
      contentZooming: 'none',

      /**
       * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
       * @type {String}
       * @default 'none'
       */
      userDrag: 'none',

      /**
       * Overrides the highlight color shown when the user taps a link or a JavaScript
       * clickable element in iOS. This property obeys the alpha value, if specified.
       * @type {String}
       * @default 'rgba(0,0,0,0)'
       */
      tapHighlightColor: 'rgba(0,0,0,0)'
    }
  };
  var STOP = 1;
  var FORCED_STOP = 2;
  /**
   * Manager
   * @param {HTMLElement} element
   * @param {Object} [options]
   * @constructor
   */

  function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});
    this.options.inputTarget = this.options.inputTarget || element;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};
    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);
    toggleCssProps(this, true);
    each(this.options.recognizers, function (item) {
      var recognizer = this.add(new item[0](item[1]));
      item[2] && recognizer.recognizeWith(item[2]);
      item[3] && recognizer.requireFailure(item[3]);
    }, this);
  }

  Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function set(options) {
      assign(this.options, options); // Options that need a little more setup

      if (options.touchAction) {
        this.touchAction.update();
      }

      if (options.inputTarget) {
        // Clean up existing event listeners and reinitialize
        this.input.destroy();
        this.input.target = options.inputTarget;
        this.input.init();
      }

      return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function stop(force) {
      this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function recognize(inputData) {
      var session = this.session;

      if (session.stopped) {
        return;
      } // run the touch-action polyfill


      this.touchAction.preventDefaults(inputData);
      var recognizer;
      var recognizers = this.recognizers; // this holds the recognizer that is being recognized.
      // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
      // if no recognizer is detecting a thing, it is set to `null`

      var curRecognizer = session.curRecognizer; // reset when the last recognizer is recognized
      // or when we're in a new session

      if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
        curRecognizer = session.curRecognizer = null;
      }

      var i = 0;

      while (i < recognizers.length) {
        recognizer = recognizers[i]; // find out if we are allowed try to recognize the input for this one.
        // 1.   allow if the session is NOT forced stopped (see the .stop() method)
        // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
        //      that is being recognized.
        // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
        //      this can be setup with the `recognizeWith()` method on the recognizer.

        if (session.stopped !== FORCED_STOP && ( // 1
        !curRecognizer || recognizer == curRecognizer || // 2
        recognizer.canRecognizeWith(curRecognizer))) {
          // 3
          recognizer.recognize(inputData);
        } else {
          recognizer.reset();
        } // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
        // current active recognizer. but only if we don't already have an active recognizer


        if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
          curRecognizer = session.curRecognizer = recognizer;
        }

        i++;
      }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function get(recognizer) {
      if (recognizer instanceof Recognizer) {
        return recognizer;
      }

      var recognizers = this.recognizers;

      for (var i = 0; i < recognizers.length; i++) {
        if (recognizers[i].options.event == recognizer) {
          return recognizers[i];
        }
      }

      return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function add(recognizer) {
      if (invokeArrayArg(recognizer, 'add', this)) {
        return this;
      } // remove existing


      var existing = this.get(recognizer.options.event);

      if (existing) {
        this.remove(existing);
      }

      this.recognizers.push(recognizer);
      recognizer.manager = this;
      this.touchAction.update();
      return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function remove(recognizer) {
      if (invokeArrayArg(recognizer, 'remove', this)) {
        return this;
      }

      recognizer = this.get(recognizer); // let's make sure this recognizer exists

      if (recognizer) {
        var recognizers = this.recognizers;
        var index = inArray(recognizers, recognizer);

        if (index !== -1) {
          recognizers.splice(index, 1);
          this.touchAction.update();
        }
      }

      return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function on(events, handler) {
      if (events === undefined) {
        return;
      }

      if (handler === undefined) {
        return;
      }

      var handlers = this.handlers;
      each(splitStr(events), function (event) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      });
      return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function off(events, handler) {
      if (events === undefined) {
        return;
      }

      var handlers = this.handlers;
      each(splitStr(events), function (event) {
        if (!handler) {
          delete handlers[event];
        } else {
          handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
        }
      });
      return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function emit(event, data) {
      // we also want to trigger dom events
      if (this.options.domEvents) {
        triggerDomEvent(event, data);
      } // no handlers, so skip it all


      var handlers = this.handlers[event] && this.handlers[event].slice();

      if (!handlers || !handlers.length) {
        return;
      }

      data.type = event;

      data.preventDefault = function () {
        data.srcEvent.preventDefault();
      };

      var i = 0;

      while (i < handlers.length) {
        handlers[i](data);
        i++;
      }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function destroy() {
      this.element && toggleCssProps(this, false);
      this.handlers = {};
      this.session = {};
      this.input.destroy();
      this.element = null;
    }
  };
  /**
   * add/remove the css properties as defined in manager.options.cssProps
   * @param {Manager} manager
   * @param {Boolean} add
   */

  function toggleCssProps(manager, add) {
    var element = manager.element;

    if (!element.style) {
      return;
    }

    var prop;
    each(manager.options.cssProps, function (value, name) {
      prop = prefixed(element.style, name);

      if (add) {
        manager.oldCssProps[prop] = element.style[prop];
        element.style[prop] = value;
      } else {
        element.style[prop] = manager.oldCssProps[prop] || '';
      }
    });

    if (!add) {
      manager.oldCssProps = {};
    }
  }
  /**
   * trigger dom event
   * @param {String} event
   * @param {Object} data
   */


  function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
  }

  assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,
    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,
    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,
    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,
    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,
    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,
    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
  }); // this prevents errors when Hammer is loaded in the presence of an AMD
  //  style loader but by script tag, not by the loader.

  var freeGlobal = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}; // jshint ignore:line

  freeGlobal.Hammer = Hammer;

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, document, 'Hammer');

/***/ }),

/***/ "./resources/sass/dashboard.scss":
/*!***************************************!*\
  !*** ./resources/sass/dashboard.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/main.scss":
/*!**********************************!*\
  !*** ./resources/sass/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************************!*\
  !*** multi ./resources/js/main ./resources/sass/main.scss ./resources/sass/dashboard.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/XochitlEscamilla/Documents/DTD/resources/js/main */"./resources/js/main.js");
__webpack_require__(/*! /Users/XochitlEscamilla/Documents/DTD/resources/sass/main.scss */"./resources/sass/main.scss");
module.exports = __webpack_require__(/*! /Users/XochitlEscamilla/Documents/DTD/resources/sass/dashboard.scss */"./resources/sass/dashboard.scss");


/***/ })

/******/ });