var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var QN = require('../qiniu.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.post('/upload',multipartMiddleware,function(req, res, next){
  let key = 'a.png';
  let localFile = req.files.file.path;
  //上传
  QN.uploadFile(key,localFile,function(err,ret){
    if(!err){
      console.log(ret.hash, ret.key, ret.persistentId);
    }else{
      console.log(err);
    }
  })
  res.send('上传成功')
})
module.exports = router;
