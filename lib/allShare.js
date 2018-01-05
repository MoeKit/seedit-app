var V = require('./version.js');
var Config = require('seedit-config');
var version = V.getVersion();
var protocalHeader = V.isBbs() ? 'bbsapp://' : 'fkzr://';
var ua = function() {
    return window.__ua || navigator.userAgent;
};
var setWxShare = function(wx, share_data,appid) {
    var serviceAppid = !!appid && appid!='' ? appid : 'wx06297e68f1f987bd';//默认[要个宝宝];
    var s_data = share_data;
    $.getJSON(Config.getSiteUrl("huodong") + '/restful/weixin/tool.json?type=4&service_appid='+serviceAppid+'&url=' + encodeURIComponent(location.href.split('#')[0]), function(data) {
        window.signature = data.data;
        var wx_defaults = {
            config: {
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.data.appid, // 必填，企业号的唯一标识，此处填写企业号corpid
                timestamp: data.data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.data.noncestr, // 必填，生成签名的随机串
                signature: data.data.signature, // 必填，签名，见附录1
                jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'hideOptionMenu',
                    'showOptionMenu',
                    'hideMenuItems',
                    'showMenuItems',
                    'getNetworkType'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            },
            hideMenuItems: {
                menuList: [
                    'menuItem:favorite',
                    'menuItem:share:facebook',
                    'menuItem:share:QZone',
                    'menuItem:share:weiboApp',
                    'menuItem:share:QZone',
                    'menuItem:share:qq',
                    'menuItem:copyUrl',
                    'menuItem:openWithQQBrowser',
                    'menuItem:openWithSafari',
                    'menuItem:share:email',
                    'menuItem:share:brand',
                    'menuItem:editTag',
                    'menuItem:setFont',
                    'menuItem:readMode'
                ]
            },
            wxMessageShare: {
                title: s_data.weixinSessionTitle || s_data.title || '', // 分享标题
                desc: s_data.weixinSessionContent || s_data.content || '', // 分享摘要
                link: s_data.wxSet.link || s_data.weixinSessionUrl || s_data.url || '', // 分享链接
                imgUrl: s_data.weixinSessionImage || s_data.image || '', // 分享图标
                success: function(data) {},
                cancel: function(data) {}
            },
            wxTimelineShare: {
                title: s_data.weixinTimelineTitle || s_data.title || '',
                desc: s_data.weixinTimelineContent || s_data.content || '',
                link: s_data.wxSet.link || s_data.weixinTimelineUrl || s_data.url || '',
                imgUrl: s_data.weixinTimelineImage || s_data.image || '',
                success: function(data) {},
                cancel: function(data) {}
            },
            wxReady: function() {
                // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。

                // 分享给朋友
                wx.onMenuShareAppMessage(wx_defaults.wxMessageShare);
                
                // 分享到朋友圈
                wx.onMenuShareTimeline(wx_defaults.wxTimelineShare);
               
                // 隐藏微信右上角菜单列表
                wx.hideMenuItems(wx_defaults.hideMenuItems);
            },
            wxError: function(res) {
                console.log(res);
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            },
            init: function() {
                if(s_data.wxSet.debug) {
                    wx_defaults.config.debug = s_data.wxSet.debug;
                }

                if(s_data.wxSet.jsApiList) {
                    wx_defaults.config.jsApiList = s_data.wxSet.jsApiList;
                }

                wx.config(wx_defaults.config);
                wx.ready(wx_defaults.wxReady);
                wx.error(wx_defaults.wxError);
            }
        };

        $.extend(true, wx_defaults, s_data.wxSet);
        wx_defaults.init();
    });
}

var setAppShare = function(data, element) {
    var $share = document.getElementById('share');
    if (!$share) {
        var _share = document.createElement('div');
        _share.setAttribute('id', 'share');
        document.querySelector('body').appendChild(_share);
        $share = document.getElementById('share');
    }
    $share.style.display = 'none';

    var app_defaults = { // 默认配置
        type: 'webShare',
        shareList: ['ShareTypeSinaWeibo', 'ShareTypeQQSpace', 'ShareTypeWeixinSession', 'ShareTypeWeixinTimeline', 'ShareTypeQQFriend']
    }

    for(var i in data) {
        if(i !== 'wxSet') { // 将所有不是 wxSet 的属性复制到 app_defaults
            app_defaults[i] = data[i];
        }
    }

    var text = encodeURIComponent(JSON.stringify(app_defaults));
    $share.textContent = text;

    if (element) {
        var $el = document.querySelectorAll(element);
        if($el.length > 0) {
            for(var i = 0; i < $el.length; i++) {
                $el[i].href = protocalHeader + text;
            }
        }
    }
}

var set = function(data, element,appid) {

    // APP 分享
    if(/bz-([A-Za-z]{1,50})-(android|ios)/.test(ua())) {
        setAppShare(data, element);
    }

    // 微信分享
    if((/MicroMessenger/i).test(ua())) {
        if(typeof data.wxSet !== 'undefined') {
            if(data.wxSet.wx) {
                setWxShare(data.wxSet.wx, data,appid);
            }
        }
    }
}

exports.set = set;
