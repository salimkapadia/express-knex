'use strict';

var routes = null;

module.exports.init = function (app) {
	routes = require('./lookup');
  app.use('/', routes);
}

// (function (routeConfig) {
//
//   'use strict';
// 	var routes = null;
//
//   routeConfig.init = function (app) {
//
//     // *** routes *** //
//     routes = require('./lookup');
//
//     // *** register routes *** //
//     app.use('/lookup', routes);
//
//   };
//
// })(module.exports);
