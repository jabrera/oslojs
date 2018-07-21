App["Size"] = {
	inDesktop: () => {
		if(window.outerWidth <= App.Constant.DESKTOP_MINIMUM)
			return true;
		return false;
	},
	inTablet: () => {
		if(window.outerWidth <= App.Constant.TABLET_MINUMUM)
			return true;
		return false;
	},
	inMobile: () => {
		if(window.outerWidth <= App.Constant.MOBILE_MINIMUM)
			return true;
		return false;
	}
}