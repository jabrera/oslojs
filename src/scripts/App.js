/* OsloJS - v1.1.0 - 2017-03-07
 * https://github.com/juvarabrera/oslojs
 *
 * Copyright (c) 2017 Juvar Abrera;
 * Licensed under the MIT license 
*/
 
 var App = {
	Classes: {},
	Controller: {},
	Constant: {},
	KeyboardListener: {},
	Route: {},
	Size: {},
	Utility: {},
	View: {},
	"ready": (page) => {
		App.Route.call(page);
	}
}