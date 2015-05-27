var expect = require('expect.js');
var seeditApp = require('../index');
var getVersion = seeditApp.getVersion;
window.__ua = "bz-crazy-android-3.2.1 Mozilla/5.0 (Linux; Android 4.4.4; MI 3 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36";
describe('seedit-app', function() {

	it('get version android', function() {
		expect(getVersion()).to.be(321);
	});

	it('get version ios', function() {
		window.__ua = "bz-crazy-ios-4.1.0 Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B440";
		expect(getVersion()).to.be(410);
	});

});