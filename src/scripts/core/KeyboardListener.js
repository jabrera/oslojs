App["KeyboardListener"] = {
	"keys": {},
	"ready": () => {
		let  key = code => {
			if(App.KeyboardListener.keys.hasOwnProperty(code))
				return true;
			return false;
		}
		window.onkeydown = e => {
			App.KeyboardListener.keys[e.which] = true;

			var shift = key(16),
				ctrl = key(17),
				alt = key(18);

			// if(shift && key(40)) {

			// }
		}
	}
}