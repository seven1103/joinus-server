var qiniu = require("qiniu");
qiniu.conf.ACCESS_KEY = 'mVkfi9bj72si6pwMZaAl5qjthFQGU4_nUZovRnyf';
qiniu.conf.SECRET_KEY = '2STCpCfryXlTBBYe15co6VOwYBNYwVkRU41hMlkT';
var mac = new qiniu.auth.digest.Mac;
(qiniu.conf.ACCESS_KEY, qiniu.conf.SECRET_KEY);
var config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z0;
var formUploader = new qiniu.form_up.FormUploader(config);
class SQ{
    constructor(){
        this.author = 'seven';
        //上传空间
        this.bucket = 'seven-img';
        //上传保存文件名
        this.key = (Date.now()/1000).toString()+ Math.random().toString(36).substr(2);
    }
    //七牛文件上传
    uploadFile(key,localFile,callback){
        var options = {
            scope: this.bucket,
          };
        var putPolicy = new qiniu.rs.PutPolicy(options);
        var token = putPolicy.uploadToken(mac);
        var extra = new qiniu.form_up.PutExtra();
        formUploader.putFile(token, key, localFile, extra, function(err, ret) {
            callback(err,ret)
        })
    }

}

var QN = new SQ();
module.exports = new SQ();

