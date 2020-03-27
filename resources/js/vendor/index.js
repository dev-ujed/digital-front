/* Polyfills
----------------------------------------------------------------------------- */

import './classlist.js';
import hammer from './hammer.js';


require('es6-promise/auto');


/* Libraries
----------------------------------------------------------------------------- */

window.axios = require('axios');
window.swal = require('sweetalert2').default;
window.Vue = require('vue');
window.FocusTrap = require('focus-trap');
window.hammer = hammer;
