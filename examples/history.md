# 版本wiki

---


## 疯狂造人版本wiki

`4.0.0` 可以获取到 access_token，实现自动登录

`4.1.0` 商城协议可用

`< 4.1.0`

+ 分享是写死的，无法动态更改，无法更改分享链接

`4.1.0` 分享可(动态)自定义链接，平台，内容，图标等

`< 4.2.0` 

+ (包含4.1.0,4.1.1,4.1.2)Android分享配置不能encode(会分享不了)，而iOS必须encode。4.2.0以上统一必须encode

+ iOS存在url`&`转码的问题

`4.2.0` 

+ 统一必须encode

+ 支持分享的`debug`

+ 支持微信登录，支持分享时进行微信授权得到微信id

+ Android分享内容不能有英文百分号`%`，必须用中文百分号`%`来避免崩溃

+ `bug` Android webview左上角的返回键不是退出，而是后退，影响到所有webview页面

`4.2.1`

+ 修复上面问题百分号问题和webview后退问题

`<4.3`

+ 所有`Android`版本实际上没法单独配置某个平台的分享！！
+ `Android`和`iOS`在webview再进入第二个webview时token没法获取

## 播种网版本wiki

`2.5.0` 支持`access_token`获取

`2.6.0`(未发布) 

+ 支持`bbsapp://`协议，但局限于商城协议，分享协议不支持
