# 疯狂造人版本过低提示

---

## 检查版本

> 当`大于等于`期望版本时，返回`true`，否则返回`false`。

> 因一个页面可能同时用于怀孕社区App和疯狂造人，第一个参数为疯狂造人版本号，第二个参数为怀孕社区版本号，必须为3位版本号。

````javascript
var seeditApp = require('seedit-app');
var compare = seeditApp.compareVersion('4.3.0','2.5.0');
````

## 版本过低弹窗

> 当第3个参数设为`true`时，会强制弹出，无视是否是客户端，版本是否符合期望，用于测试

<!-- <link rel="stylesheet" href="http://scdn.bozhong.com/source/shop/css_sec/css_sec.css"> -->

````html

<a href="javascript:" id="clickme0" class="demo-btn">疯狂造人调用(完全符合条件才出现)</a>

<a href="javascript:" id="clickme1" class="demo-btn">点我显示默认文案(强制出现)</a>

<a href="javascript:" id="clickme2" class="demo-btn">自定义文案(强制出现)</a>

<a href="javascript:" id="clickme3" class="demo-btn">手动调用弹窗</a>
````

````javascript
var seeditApp = require('seedit-app');

document.getElementById('clickme0').onclick= function(){
	seeditApp.checkVersion('4.3.0','2.5.0');
};

document.getElementById('clickme1').onclick= function(){
	seeditApp.checkVersion('4.3.0','2.5.0',null,true);
};

document.getElementById('clickme2').onclick= function(){
	seeditApp.checkVersion('4.3.0','2.5.0','你是逗逼吗',true);
};

document.getElementById('clickme3').onclick= function(){
	seeditApp.showVersionDialog('我是手动调用的弹窗');
};

````
