# 分享测试页面

---

<style>
	* {
		margin:0;
		padding:0;
	}
	body {
		padding:15px 15px;
		border-top:2px solid blue;
	}
	.box {
		text-align:center;
	}
	.btn {
		border:1px solid blue;
		padding:5px 10px;
		border-radius:3px;
		text-decoration: none;
		width:150px;
		display:inline-block;
	}
	pre{
		margin:15px 0;
		color:#666;
	}
	hr {
		border-bottom:none;
		margin:15px;
		border-color:#ececec;
		color:#ececec;
		background-color:#ececec;
	}
	</style>


````html
<div class="box"><a id="all" class="demo-btn">全部都有</a></div>
<div id="all-box"></div>
<hr>

<div class="box"><a id="debug" class="demo-btn">全部都有(debug)</a></div>
<div id="debug-box"></div>
<hr>

<div class="box"><a id="wx-timeline" class="demo-btn">只有微信朋友圈</a></div>
<div id="wx-timeline-box"></div>
<hr>

<div class="box"><a id="qq" class="demo-btn">只有QQ空间</a></div>
<div id="qq-box"></div>
<hr>

<div class="box"><a id="weibo" class="demo-btn">只有微博</a></div>
<div id="weibo-box"></div>
<hr>

<div class="box"><a id="qq-wx" class="demo-btn">微信朋友圈+QQ空间</a></div>
<div id="qq-wx-box"></div>
<hr>

<div class="box"><a id="right" href="" class="demo-btn">右上角分享</a></div>
<div id="right-box"></div>
<div id="share"></div>
<hr>

````

````javascript
var right  = {
	debug:1,
	type:'webShare',
	shareList:['ShareTypeSinaWeibo','ShareTypeQQSpace','ShareTypeWeixinSession','ShareTypeWeixinTimeline'],
	content:'右上角分享内容',
	url:'http://bozhong.com/event/fkzr/valentine2015.htm',
	title:'右上角分享标题',
	description:'右上角分享描述',
	image:'http://placehold.it/300x250&text=right'
};

document.getElementById('share').textContent =encodeURIComponent(JSON.stringify(right));
document.getElementById('right-box').innerHTML = '<pre>'+JSON.stringify(right,null,4)+'</pre>';


var all  = {
	type:'webShare',
	shareList:['ShareTypeSinaWeibo','ShareTypeQQSpace','ShareTypeWeixinSession','ShareTypeWeixinTimeline'],
	content:'全部内容',
	url:'http://bozhong.com/event/fkzr/valentine2015.htm',
	title:'全部标题',
	description:'全部描述',
	image:'http://placehold.it/300x250&text=ALL'
};

document.getElementById('all').setAttribute('href','fkzr://'+encodeURIComponent(JSON.stringify(all)));
document.getElementById('all-box').innerHTML = '<pre>'+JSON.stringify(all,null,4)+'</pre>';


var debug  = {
	debug:1,
	type:'webShare',
	shareList:['ShareTypeSinaWeibo','ShareTypeQQSpace','ShareTypeWeixinSession','ShareTypeWeixinTimeline'],
	content:'全部内容',
	url:'http://bozhong.com/event/fkzr/valentine2015.htm',
	title:'全部标题',
	description:'全部描述',
	image:'http://placehold.it/300x250&text=ALL'
};

document.getElementById('debug').setAttribute('href','fkzr://'+encodeURIComponent(JSON.stringify(debug)));
document.getElementById('debug-box').innerHTML = '<pre>'+JSON.stringify(debug,null,4)+'</pre>';


var all1  = {
	type:'webShare',
	shareList:['ShareTypeWeixinTimeline'],
	content:'content',
	url:'http://bozhong.com/event/fkzr/valentine2015.htm',
	title:'title',
	description:'description',
	image:'http://image.bozhong.com/cms/2015/03/16/3ab80165da4cc1934e64959902cb11ec826223.jpg',
	weixinTimelineContent:'分享到朋友圈内容',
	weixinTimelineTitle:'分享到朋友圈标题',
	weixinTimelineImage:'http://placehold.it/300x250&text=weixin-timeline'
};

document.getElementById('wx-timeline').setAttribute('href','fkzr://'+encodeURIComponent(JSON.stringify(all1)));
document.getElementById('wx-timeline-box').innerHTML = '<pre>'+JSON.stringify(all1,null,4)+'</pre>';


var all2  = {
	type:'webShare',
	shareList:['ShareTypeQQSpace'],
	content:'微信朋友圈',
	url:'http://bozhong.com/event/fkzr/valentine2015.htm',
	title:'title',
	description:'description',
	image:'http://image.bozhong.com/cms/2015/03/16/3ab80165da4cc1934e64959902cb11ec826223.jpg',
	qqSpaceContent:'分享到QQ空间内容',
	qqSpaceTitle:'分享到QQ空间标题',
	qqSpaceImage:'http://placehold.it/300x250&text=QQ'
};

document.getElementById('qq').setAttribute('href','fkzr://'+encodeURIComponent(JSON.stringify(all2)));
document.getElementById('qq-box').innerHTML = '<pre>'+JSON.stringify(all2,null,4)+'</pre>';

var all3  = {
	type:'webShare',
	shareList:['ShareTypeWeixinTimeline','ShareTypeQQSpace'],
	content:'content',
	url:'http://bozhong.com/event/fkzr/valentine2015.htm',
	title:'title',
	description:'description',
	image:'http://image.bozhong.com/cms/2015/03/16/3ab80165da4cc1934e64959902cb11ec826223.jpg',
	weixinTimelineContent:'分享到朋友圈内容',
	weixinTimelineTitle:'分享到朋友圈标题',
	weixinTimelineImage:'http://placehold.it/300x250&text=weixin-timeline',
	qqSpaceContent:'分享到QQ空间内容',
	qqSpaceTitle:'分享到QQ空间标题',
	qqSpaceImage:'http://placehold.it/300x250&text=QQ'
};

document.getElementById('qq-wx').setAttribute('href','fkzr://'+encodeURIComponent(JSON.stringify(all3)));
document.getElementById('qq-wx-box').innerHTML = '<pre>'+JSON.stringify(all3,null,4)+'</pre>';


var all4  = {
	type:'webShare',
	shareList:['ShareTypeSinaWeibo'],
	content:'微博',
	url:'http://bozhong.com/event/fkzr/valentine2015.htm',
	title:'微博 title',
	description:'微博 description',
	image:'http://placehold.it/300x250&text=weibo'
};

document.getElementById('weibo').setAttribute('href','fkzr://'+encodeURIComponent(JSON.stringify(all4)));
document.getElementById('weibo-box').innerHTML = '<pre>'+JSON.stringify(all4,null,4)+'</pre>';

````