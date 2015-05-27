# 商城

---

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
````