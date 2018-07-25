App.Controller["HomeController"] = {
	"construct": parameters => {

	},
	"index": parameters => {
		
		return App.View.render();
	},
	"page2": parameters => {
		return "/";
	}
}