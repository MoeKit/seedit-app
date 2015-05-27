# 提示疯狂造人中打开

---

````html
<a href="javascript:" id="clickme0" class="demo-btn">显示弹窗</a>
````


````javascript
var seeditApp = require('seedit-app');
document.getElementById('clickme0').onclick= function(){
	// 检查是否是疯狂造人
	if(!seeditApp.isFkzr()){
		seeditApp.openInFkzr();
	}
};
````