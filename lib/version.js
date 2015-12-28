var ua = function(){
	return window.__ua || navigator.userAgent;
};
var appReg = /bz-(bbs|crazy)-(android|ios)/;
var fkzrReg = /bz-crazy-(android|ios)/;
var bbsReg = /bz-bbs-(android|ios)/;
var wxReg = /micromessenger/i;
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
// 是否是疯狂造人
exports.isFkzr = function() {
	return fkzrReg.test(ua());
}
// 是否是播种怀孕社区
exports.isBbs = function() {
	return bbsReg.test(ua());
}