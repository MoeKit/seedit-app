# 客户端协议-微信授权

---

## 微信登录

### 1.跳到微信登录

> 4.2.0 及以上版本支持微信登录 

````html
<a href="javascript:" class="demo-btn" id="btn1">微信登录</a>
````
			

````javascript
var defaults = {
	type: 'weixinLogin',
};
document.getElementById('btn1').setAttribute('href', 'fkzr://' + encodeURIComponent(JSON.stringify(defaults)));

````

### 2.分享时要求微信登录

> 分享时若未授权过先要求到微信授权

> 若已经授权过，直接弹出分享菜单

````html
<a href="javascript:" class="demo-btn" id="btn2">点我分享</a>
<div id="share" style="display:none;"></div>
````

````javascript
var shareJson = {
    "type": "webShare",
    "weixinLogin": 1,
    "shareList": [
        "ShareTypeWeixinTimeline"
    ],
    "content": "content",
    "url": "http://bozhong.com/event/fkzr/valentine2015.htm",
    "title": "title",
    "description": "description",
    "image": "http://image.bozhong.com/cms/2015/03/16/3ab80165da4cc1934e64959902cb11ec826223.jpg",
    "weixinTimelineContent": "分享到朋友圈内容",
    "weixinTimelineTitle": "分享到朋友圈标题",
    "weixinTimelineImage": "http://placehold.it/300x250&text=weixin-timeline"
};

document.getElementById('btn2').setAttribute('href','fkzr://'+encodeURIComponent(JSON.stringify(shareJson)));
document.getElementById('share').textContent = encodeURIComponent(JSON.stringify(shareJson));
````