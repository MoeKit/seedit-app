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

	it('get compare version', function() {
		window.__ua = "bz-crazy-ios-4.1.0 Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B440";
		expect(seeditApp.getCompareVersion('4.3.0', '2.6.0')).to.be('4.3.0');
		window.__ua = "bz-bbs-ios-4.1.0 Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B440";
		expect(seeditApp.getCompareVersion('4.3.0', '2.6.0')).to.be('2.6.0');
	});

	it('compareVersion', function() {
		window.__ua = "bz-crazy-ios-4.1.0 Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B440";
		expect(seeditApp.compareVersion('4.3.0', '2.6.0')).to.be(false);
		expect(seeditApp.compareVersion('4.0.0', '2.6.0')).to.be(true);
		window.__ua = "bz-bbs-ios-2.5.0 Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B440";
		expect(seeditApp.compareVersion('4.0.0', '2.6.0')).to.be(false);
		expect(seeditApp.compareVersion('4.0.0', '2.4.0')).to.be(true);
	});

});