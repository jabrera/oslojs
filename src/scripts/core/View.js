App["View"] = {
	"construct": parameters => {
		App.View.setTemplate(App.Constant.DEFAULT_TEMPLATE);
		document.querySelector(".template").innerHTML = "";
	},
	"setTemplate": template => {
		App.View["TEMPLATE"] = template;
		return App.View;
	},
	"data": {},
	"set": (name, val) => {
		App.View.data[name] = val;
	},
	"setJson": json => {
		for(var i in json)
			App.View.data[i] = json[i];
	},
	"render": () => {
		var template = App.View.TEMPLATE;
		if(template == false) {
			App.View.loadPage(false);
		} else {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = e => {
				if(e.target.readyState == 4) {
					if(e.target.status == 200) {
						App.View.loadPage(e.target.responseText)
					} else {
						App.location("error", "template-not-found", [template, App.Utility.getControllerCode(App.CONTROLLER), App.ACTION])
					}
				}
			};
			xhttp.open("GET", `src/views/${template}.html`);
			xhttp.send();
		}
		return true;
	},
	loadPage: html => {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = e => {
			if(e.target.readyState == 4) {
				if(e.target.status == 200) {
					let html2 = e.target.responseText;
					for(var i in App.View.data) {
						html2 = html2.replace(new RegExp("{{"+i+"}}", "g"), App.View.data[i]);
					}
					if(html == false) {
						document.querySelector(".template").innerHTML = html2;
					} else {
						document.querySelector(".template").innerHTML = html;
						var tempDiv = document.createElement('div');
						tempDiv.innerHTML = html2;
						for(let i = 0; i < tempDiv.childNodes.length; i++) {
							document.querySelector(".template").innerHTML = document.querySelector(".template").innerHTML.replace(new RegExp("{{"+tempDiv.childNodes[i].id+"}}", "g"), tempDiv.childNodes[i].innerHTML);
						}
					}
					document.querySelector(".template").setAttribute("moon-controller", App.Utility.getControllerCode(App.CONTROLLER));
					document.querySelector(".template").setAttribute("moon-action", App.ACTION);
					App.View.destruct();
				} else {
					App.location("error", "page-not-found", [App.Utility.getControllerCode(App.CONTROLLER), App.ACTION])
				}
			}
		};
		xhttp.open("GET", `src/views/${App.Utility.getControllerCode(App.CONTROLLER)}/${App.ACTION}.html`);
		xhttp.send();
	},
	"destruct": () => {

	}
}