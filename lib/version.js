var ua = function(){
	return window.__ua || navigator.userAgent;
};
// 获取版本
exports.getVersion = function() {
	if (!/bz-(crazy|bbs)-(android|ios)/.test(ua())) {
		return 0;
	} else {
		var r = ua().match(/bz-(crazy|bbs)-(android|ios)-(\d.\d.\d.)/);
		if (r && r[3]) {
			return r[3].replace(/\./g, '') * 1;
		} else {
			return 0;
		}
	}
};