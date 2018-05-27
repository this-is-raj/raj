window.$ = window.jQuery = require('jquery'); // eslint-disable-line
window._ = require('lodash'); // eslint-disable-line
// require('bootstrap');
require('jquery-mousewheel');
window.moment = require('moment-timezone'); // eslint-disable-line
require('../../../static/css/bootstrap.css');
require('bootstrap-vue');

require('../../../static/css/ionicons.css');
require('../../../static/css/fluidbox.min.css');
require('../../../static/css/style.css');
require('../../../static/css/responsive.css');
require('../../../static/js/isotope.pkgd.min');
require('../../../static/js/jquery.waypoints.min');
require('../../../static/js/progressbar.min');
require('../../../static/js/jquery.fluidbox.min');

String.prototype.toProperCase = function () {
	return this.replace(/_/g, ' ').replace(/w*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};