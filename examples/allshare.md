# 通用分享设置

---


## BBS、疯狂造人和微信通用分享

### Usage
````html
<a id="btn" class="demo-btn">点击分享</a>
<div id="share" style="display:none;"></div>
````

````javascript
seajs.use('https://res.wx.qq.com/open/js/jweixin-1.0.0.js', function(wx) {
    var allShare = require('seedit-app').allShare;
    allShare.set({
        "shareList": [
            "ShareTypeWeixinTimeline",
            "ShareTypeWeixinSession"
        ],
        content:'内容',  //内容
        image:'http://temp.im/300x300/9ED048/fff', //图片的网址
        title:'分享标题',  //标题
        url:'http://bozhong.com',  //分享的网址
        description:'分享主体', //主体内容，可选
        weixinSessionContent: '微信好友内容', 
        weixinSessionTitle: '微信好友标题', 
        weixinTimelineContent: '朋友圈内容', 
        weixinTimelineTitle: '朋友圈标题',
        bzWebviewBtn:'1100', // 显示分享和刷新按钮
        wxSet: {
            wx: wx,
            debug: true,
            wxMessageShare: { // 分享给好友 可选
                success: function() { // 分享成功回调
                    // do something...
                },
                cancel: function() { // 分享失败回调
                    // do something...
                }
            },
            wxTimelineShare: { // 分享到朋友圈 可选
                success: function() { // 分享成功回调
                    // do something...
                },
                cancel: function() { // 分享失败回调
                    // do something...
                }
            }
        }
    }, '#btn');
})

````

### Options
#### allShare.set(json, element)
*json* `object`

除 `wxSet` 外，其余都是 web 协议的属性，具体请参考：http://wiki.bozhong.com/ios/webshare#typewebshare

*element* `string`

DOM 元素，可绑定分享按钮（APP 端可用）

#### wxSet

微信 JSSDK 说明文档：
https://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html

- wx `object` 微信对象，从外部传入。如需微信分享则必填，否则微信分享无效

- debug `boolean` 微信 debug 选项，默认为 false

- config `object` 微信设置 wx.config(**config**)

- hideMenuItems `object` 隐藏右上角菜单 wx.hideMenuItems(**hideMenuItems**)

- wxMessageShare `object` 分享给好友的数据，默认会获取 web 协议属性的内容，可单独修改某个属性。

- wxTimelineShare `object` 分享到朋友圈的数据，同上

- wxReady `function` wx.ready(**wxReady**)，默认执行 wx.onMenuShareAppMessage()、wx.onMenuShareTimeline() 和 wx.hideMenuItems()

- wxError `function` wx.error(**wxError**)

- init `function` 初始化微信函数，默认执行 wx.config()、wx.ready() 和 wx.error(), 如有必要可以重写该项

在需要微信分享时，以上设置，除了 `wx` 对象，其余都是可选项。


