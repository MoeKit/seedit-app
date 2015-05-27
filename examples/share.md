# 分享设置

---

## 多个平台共用一个分享

> 不需要手动写一个`div#share`，会动态创建

> 当为第二个参数指定选择器时，会同时给该选择器链接设置`fkzr://`协议的链接。不指定时就只设置右上角分享。

````html
<a class="demo-btn">点我分享</a>
````

````javascript
var share = require('seedit-app').share;
share.set({
	content:'内容',  //内容
    image:'http://placehold.it/300x250&text=share', //图片的网址
    title:'分享标题',  //标题
    url:'http://bozhong.com',  //分享的网址
    description:'分享主体', //主体内容，可选
},'.demo-btn');
````