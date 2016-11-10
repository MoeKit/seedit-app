# 说明

---

## 强制登录
<script type="text/javascript" src="http://scdn.bozhong.com/source/common/js/mobile-1.2.0.min.js"></script>

<div id="JS_hostType">
	<li>
		<p>是App（fkzr or bbs）？ <em id="JS_isApp"></em></p>
		<p>是Fkzr？ <em id="JS_isFkzr"></em></p>
		<p>是Bbs？ <em id="JS_isBbs"></em></p>
		<p>是Wechat？ <em id="JS_isWx"></em></p>
	</li>
</div>

```javascript
var seeditApp = require('seedit-app');
console.log(seeditApp.isApp())
$('#JS_isApp').html(seeditApp.isApp())
$('#JS_isFkzr').html(seeditApp.isFkzr())
$('#JS_isBbs').html(seeditApp.isBbs())
$('#JS_isWx').html(seeditApp.isWx())

```
