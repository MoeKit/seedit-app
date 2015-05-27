var Config = require('seedit-config'),
	jsonp = require('jsonp'),
	domain = Config.getMainDomain();
var appReg = /bz-(bbs|crazy)-(android|ios)/;
var fkzrReg = /bz-crazy-(android|ios)/;
var bbsReg = /bz-bbs-(android|ios)/;
var wxReg = /micromessenger/i;
var ua = navigator.userAgent;
var data = null;
var readyCallback = [];
var debug = false;
var log = function(msg) {
	debug && alert(msg);
};


var $ = require('zepto');
require('./style.css');
var tipTpl = require('./tip.tpl');
var $tip = $(tipTpl).appendTo('body');
// 获取版本
exports.getAppVersion = function() {
	if (!fkzrReg.test(ua)) {
		return 0;
	} else {
		var r = new RegExp(/[0-9].[0-9].[0-9]+/);
		return ua.match(r)[0].replace(/\./g, '');
	}
};


// 对比版本号
// 返回true表示正确版本号，false表示低于版本
var compareVersion = exports.compareVersion = function(version) {
	var expectVersion = version.replace('.', '').replace('.', '') * 1;
	var r = new RegExp(/[0-9].[0-9].[0-9]+/);
	var v = ua.match(r)[0].replace(/\./g, '');
	// 期望版本小于现在版本
	if (expectVersion <= v) {
		return true;
	} else {
		return false;
	}
};

var showVersionDialog = exports.showVersionDialog = function(tip) {
	$tip.find('.seedit-app-subtitle').text(tip ? tip : '需要升级到最新版本才能购买商品');

	$tip.show();
	$('#seedit-app-content').show().addClass('bounceinT');
	$tip.find('.seedit-app-close').on('click', function(e) {
		e.preventDefault();
		$('#seedit-app-content').removeClass('bounceinT').addClass('bounceoutB');
		setTimeout(function() {
			$('#seedit-app-content').hide();
			$tip.css({
				opacity: 0
			});
			setTimeout(function() {
				$('#seedit-app-content').hide().removeClass('bounceinT').removeClass('bounceoutB').addClass('normal-translate');
				$tip.hide().css({
					opacity: 1
				});
			}, 600)
		}, 500);
	});
};

var openInFkzr = exports.openInFkzr = function() {
	$('#seedit-app-content').css('padding-top', '40px');
	$tip.find('.seedit-app-subtitle,a.seedit-app-close').hide();
	$tip.find('h3').css('padding-bottom', '28px').text('请使用疯狂造人参与本次活动');
	$tip.find('.seedit-app-btn').text('确定');
	showVersionDialog();
};

// 检测低于某个版本的客户端，并提示更新
exports.checkVersion = function(version, tip, force) {
	var expectVersion = version.replace('.', '').replace('.', '') * 1;
	var r = new RegExp(/[0-9].[0-9].[0-9]+/);
	var v = ua.match(r)[0].replace(/\./g, '');

	if (!force) {
		// 不是疯狂造人，不管
		if (!fkzrReg.test(ua)) {
			return;
		}

		// 期望版本小于现在版本
		if (expectVersion <= v) {
			return;
		}
	}
	showVersionDialog(tip);
};

// 根据cookie检查是否登录
var hasLogin = function() {
	return /_auth/.test(document.cookie);
};

// 生成跳转链接
var buildRedirectUrl = function(url) {
	url = url || 　document.location.href;
	return 'http://account.' + Config.getMainDomain() + '/?redirect_uri=' + encodeURIComponent(url);
};

// 获取数据
var _getJson = function(cb) {
	var isReturn = false;
	// 不是客户端滚开
	if (!appReg.test(navigator.userAgent)) {
		log('非app，返回空token');
		cb && cb({});
		isReturn = true;
		return;
	}

	// 是客户端
	// android 手动执行token注入，因为会有延时(不知道为什么)
	if (window.crazy && window.crazy.token) {
		window.crazy.token();
	}

	function wait() {
		if (!window.crazyjson && !window.bzjson && !window.name) {
			setTimeout(wait, 50);
		} else {
			var crazy = JSON.parse(window.crazyjson || window.bzjson || window.name);
			data = crazy;
			window.name = window.crazyjson || window.bzjson || window.name;
			log('缓存json' + window.name);
			if (!isReturn) {
				log('app，得到token');
				cb && cb(crazy);
				isReturn = true;
			}
		}
	}
	wait();
	// 2s获取不到token就算失败
	setTimeout(function() {
		if (!isReturn) {
			log('App 2s内获取不到token,返回空token');
			cb && cb({});
			isReturn = true;
		}
	}, 2000);
};

// 登录设置cookie
var _ready = function(cb) {
	_getJson(function(json) {
		log('_getJson结果' + JSON.stringify(json));
		if (!json.access_token) {
			log('得不到token');
			cb && cb('fail');
		} else {
			//if (!/_auth/.test(document.cookie)) {
			jsonp('http://account.' + domain + '/restful/bozhong/tokentocookie.jsonp', {
				access_token: json.access_token
			}, '__c', function(data) {
				log('换cookie' + JSON.stringify(data));
				// 处理token失效的情况
				// 登录成功
				if (data.error_code === 8002) {
					cb && cb('fail');
					document.location.href = buildRedirectUrl();
				} else {
					cb && cb('success');
				}
			});
			//}
		}
	});
};



exports.ready = _ready;

// 确定在客户端和浏览器已经登录后才执行回调, 用于一定要用户登录的需求
// 1.是客户端，且能得到token, 自动登录
// 2.是客户端，2s内得不到token,跳网页登录
// 3.不是客户端，跳网页登录
exports.afterAllLogin = function(cb, option) {
	if (option && option.debug) {
		alert('debug true')
		debug = true;
	}

	var compare = compareVersion('4.1.0');
	if (!compare) {
		// 小于4.1.0时，有cookie就算登录
		if (hasLogin()) {
			return cb();
		}
	}


	// 已经登录并且不是客户端就回调，否则重新登录，避免客户端切用户时webview的用户切换不了
	if (hasLogin() && !appReg.test(ua)) {
		cb();
	} else {
		// 非app
		if (!appReg.test(ua)) {
			log('非app，跳转Account去登录');
			document.location.href = buildRedirectUrl();
		} else { // 是app
			_ready(function(err) {
				if (err === 'fail') {
					log('得不到token,跳转去account ' + buildRedirectUrl())
					document.location.href = buildRedirectUrl();
				} else if (err === 'success') {
					cb();
				}
			});
		}
	}
};

// 保证客户端登录，非客户端不强制登录
// 当为非客户端时，直接执行回调
exports.afterAppLogin = function(cb) {
	// 先处理客户端登录
	if (isApp()) {
		
	}

	if (hasLogin()) {
		cb();
	} else {
		// 非app
		if (!appReg.test(ua)) {
			cb();
		} else { // 是app
			_ready(function(err) {
				if (err === 'fail') {
					document.location.href = buildRedirectUrl();
				} else if (err === 'success') {
					cb();
				}
			});
		}
	}
};

// 获取用户信息，请注意在用户已经登录后使用
exports.getUserData = function(cb) {
	jsonp('http://common.' + domain + '/bbs/common_member.jsonp', {}, '__c', cb);
};

// 获取客户端数据
exports.getData = function() {

};

function isApp() {
	return appReg.test(ua);
}

// 是否是客户端
exports.isApp = isApp;

// 是否是疯狂造人
exports.isFkzr = function() {
	return fkzrReg.test(ua);
};

// 是否是怀孕社区
exports.isBbs = function() {
	return bbsReg.test(ua);
};

// 是否是微信
exports.isWx = function() {
	return wxReg.test(ua);
};

exports.shop = {};

// 生成商品详情链接，当为真实id时，itemIdType可以省略
exports.shop.showItemUrl = function(itemId, itemIdType) {
	var json = {
		type: 'shop',
		action: 'showItem',
		itemId: itemId, //商品真实/混淆id
		itemIdType: itemIdType ? itemIdType : 1 //itemId类型：1代表真实，2代表混淆
	};
	return buildFkzrUrl(json);
};

// 工具函数
function buildFkzrUrl(json) {
	return 'fkzr://' + encodeURIComponent(JSON.stringify(json));
};

exports.share = require('./lib/share');