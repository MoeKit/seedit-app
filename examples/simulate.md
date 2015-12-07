# 模拟疯狂造人环境

---

## 设置ua和access_token

> 下面access_token为`test1003`用户的token。

> 调试页面需要绑定office地址，否则不能token换cookie

````javascript
window.__ua = "bz-crazy-android-4.1.1 Mozilla/5.0 (Linux; Android 4.4.4; MI 3 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36";
window.__access_token = JSON.stringify({access_token:'2b286c88fdec39d962882175a541c5bf'});

var seeditApp = require('seedit-app');

seeditApp.afterFkzrLogin(function(){
    // 已经登录成功了，该干嘛就干嘛
    alert('自动登录成功');
},{debug:true});

````
