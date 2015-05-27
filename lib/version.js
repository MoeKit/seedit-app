var ua = navigator.userAgent;
// 获取版本
exports.getVersion = function() {
	if (!/bz-crazy-(android|ios)/.test(ua)) {
		return 0;
	} else {
		var r = new RegExp(/[0-9].[0-9].[0-9]+/);
		return ua.match(r)[0].replace(/\./g, '')*1;
	}
};