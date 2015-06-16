var V = require('./version.js');
var version = V.getVersion();
var ua = function() {
	return window.__ua || navigator.userAgent;
};

// 临时保存所有分享数据到这里
var _share = {};

var shareList = ['ShareTypeSinaWeibo', 'ShareTypeQQSpace', 'ShareTypeWeixinSession', 'ShareTypeWeixinTimeline'];
var defaults = {
	type: 'webShare',
	shareList: shareList
};
var encode = encodeURIComponent;
var $share = document.getElementById('share');
if (!$share) {
	var _share = document.createElement('div');
	_share.setAttribute('id', 'share');
	document.querySelector('body').appendChild(_share);
	$share = document.getElementById('share');
}
$share.style.display = 'none';

var _setShare = function(text, link) {

	if (typeof text === 'object') {
		text = JSON.stringify(text);
	}

	// 410之前版本是旧版本分享，不能动态设置，要写死在页面中。
	// Android 411 410 不能encode
	// Android 412 还是不支持
	if ((version === 411 || version === 410 || version === 412) && /bz-crazy-android/.test(ua())) {
		$share.textContent = text;
	} else {
		// iOS 必须encode,否则url会有字符被转码
		// 4.1之后的版本统一成需要encode
		$share.textContent = encode(text);
	}

	text = encode(text);

	if (link) {
		var $list = document.querySelectorAll(link);
		if ($list) {
			for (var i = 0; i < $list.length; i++) {
				$list[i].share = text;
				$list[i].setAttribute('href', 'fkzr://' + text);
			}
		}
	}
};

var set = function(content, link) {
	for (var i in defaults) {
		content[i] = defaults[i];
	};
	_setShare(content, link);
	// 如果有jquery对象或者选择器，为其加上疯狂造人协议，仅限于>=4.1版本，其他的应该设置弹窗
};



exports.set = set;