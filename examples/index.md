# 说明

---

## 强制登录

````javascript
var seeditApp = require('seedit-app');
/**
seeditApp.afterAllLogin(function(){
        // 已经登录成功了，该干嘛就干嘛
        alert('登录成功'+window.name);
},{debug:true});
**/
````
## 生成疯狂造人商品详情页链接

````javascript
var seeditApp = require('seedit-app');
var url = seeditApp.shop.showItemUrl(1234);
// fkzr://%7B%22type%22%3A%22shop%22%2C%22action%22%3A%22showItem%22%2C%22itemId%22%3A1234%2C%22itemIdType%22%3A1%7D
````
