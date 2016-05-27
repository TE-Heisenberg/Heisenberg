var express = require('express');
var fs=require('fs');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/landingPageData', function(req, res, next) {
  fs.readFile('/data/landing/landingjson.json',function(err,data){
    res.json(data);
  })
});
module.exports=router;
