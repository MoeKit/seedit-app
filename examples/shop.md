# 商城

---

## 协议列表

````html
<a href="javascript:" class="demo-btn" id="btn00">添加商品到购物车</a>
<a href="javascript:" class="demo-btn" id="btn01">打开优惠券页面协议</a>
<a href="javascript:" class="demo-btn" id="btn02">打开电子凭证页面</a>
<a href="javascript:" class="demo-btn" id="btn03">打开购物车页面</a>
<a href="javascript:" class="demo-btn" id="btn04">请求登录授权</a>
<a href="javascript:" class="demo-btn" id="btn05">退出登录</a>
````

## 商品详情页

````html
<a href="javascript:" class="demo-btn" id="btn1">淘宝客方式打开</a>
<a href="javascript:" class="demo-btn" id="btn2">非淘宝客方式打开</a>
````
			

````javascript
var defaults = {
	type: 'shop',
	action: 'showItem',
	itemId: '45177946914',
	itemIdType: 1,
	taoKe: 1
};
document.getElementById('btn1').setAttribute('href', 'fkzr://' + encodeURIComponent(JSON.stringify(defaults)));

defaults.taoKe = 0;
document.getElementById('btn2').setAttribute('href', 'fkzr://' + encodeURIComponent(JSON.stringify(defaults)));

var json00 = {
	type:'shop',
	action:'addItem2Cart',
	itemId:'AAFPds4tAB7bO9kBV72TCl8s',
	taoKe:1,
};
document.getElementById('btn00').setAttribute('href', 'fkzr://' + encodeURIComponent(JSON.stringify(json00)));

var json01={
	type:'shop',
	action:'showPromotions',
	param:'广州万孚生物2014',
	paramType:'shop'
};
document.getElementById('btn01').setAttribute('href', 'fkzr://' + encodeURIComponent(JSON.stringify(json01)));

var json02 = {
	type:'shop',
	action:'showETicketDetail',
	orderId:'1100733950386625'
};
document.getElementById('btn02').setAttribute('href', 'fkzr://' + encodeURIComponent(JSON.stringify(json02)));

var json03 ={
	type:'shop',
   	action:'showCart'
}

document.getElementById('btn03').setAttribute('href', 'fkzr://' + encodeURIComponent(JSON.stringify(json03)));

var json04 ={
	 type:'shop',
   	action:'showLogin'
};
document.getElementById('btn04').setAttribute('href', 'fkzr://' + encodeURIComponent(JSON.stringify(json04)));

var json05 ={
	 type:'shop',
   action:'logout'
}
document.getElementById('btn05').setAttribute('href', 'fkzr://' + encodeURIComponent(JSON.stringify(json05)));
````