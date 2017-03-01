/* OsloJS - v1.0.1 - 2017-03-01
 * https://github.com/juvarabrera/moonjs
 *
 * Copyright (c) 2017 Juvar Abrera;
 * Licensed under the MIT license 
*/
 
 var App = {
	Classes: {},
	"ready": function(page) {
		this.Route.call(page);
	},
	"location": function(controller, action, parameters) {
		App.CONTROLLER = controller.charAt(0).toUpperCase() + controller.slice(1) + "Controller";
		App.ACTION = action;
		if(parameters == undefined)
			parameters = [];
		App.PARAMETERS = parameters;
		window.location = "#/"+controller+"/"+action+"/"+parameters.join("/");
	}, 
	"refresh": function() {
		$("[data-bulaga]").each(function() {
			var val = $(this).attr("data-bulaga").split(" ");
			var options = {};
			var map = {
				"slide-up": ["animation", "SLIDE_UP"],
				"slide-left": ["animation", "SLIDE_LEFT"],
				"slide-right": ["animation", "SLIDE_RIGHT"],
				"slide-down": ["animation", "SLIDE_DOWN"],
				"bounce": ["bounce", true],
				"repeat": ["repeat", true]
			}
			for(var x in val) {
				if(map.hasOwnProperty(val[x]))
					options[map[val[x]][0]] = map[val[x]][1];
			}
		});
	}
}