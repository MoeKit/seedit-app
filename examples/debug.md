# 自动登录-debug

---

## 强制登录

````javascript
var seeditApp = require('seedit-app');

seeditApp.afterFkzrLogin(function(){
       // 已经登录成功了，该干嘛就干嘛
       alert('登录成功'+window.name);
},{debug:true});

````
