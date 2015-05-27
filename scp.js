var client = require('scp2');
var path = require('path');
var dir = path.resolve(process.cwd(),'_site');
var file = path.resolve(process.cwd(),'package.json');

var config = require(file);

console.log('开始上传~');
client.scp(dir, 'bozhong:bozhong321@192.168.80.40:/home/bozhong/code/moekit/'+config.name+'/', function(err) {
	if(!err){
		console.log('上传成功~');
	}else{
		console.log('上传失败',err);
	}
});