# Demo-分享按钮隐藏及微信授权登录回调

---


````javascript
var share = require('seedit-app').share;
share.set({
	content:'内容',  //内容
    image:'http://placehold.it/300x250&text=share', //图片的网址
    title:'分享标题',  //标题
    url:'http://bozhong.com',  //分享的网址
    description:'分享主体', //主体内容，可选
    bzWebviewBtn:'1100', // 显示分享和刷新按钮
    weixinLogin:1
});
// 设置一个全局函数
window.setShareStatus = function(status){
	alert(status);
};
````