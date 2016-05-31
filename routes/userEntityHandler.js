var express=require('express');
var router=express.Router();
var userEntityService=require('../models/userEntityModel');

router.route('/userEntity')

  .get(function(req,res,next){
    console.log('aa gya');
      userEntityService.getAll().then(function(err,result){
        if(err) res.send(err);
        console.log('ab result aayega');
        console.log(result);
        res.json(result);
      })
   })

  .post(function(req,res,next){
      var userEntityObject=req.body.userEntityObject;
      userEntityService.postUserEntity(userEntityObject).then(function(err,result){
        if(err) res.send(err);
        res.json({message:result});
    })
  })


router.route('/userEntity/:Id')

    .get(function(req,res,next){
       var userId=req.params.id;
       userEntityService.getUserEntity(userId).then(function(err,result){
         if(err)  res.send(err);
         res.json(result);
       });
  })

  .put(function(req,res,next){
      var userId=req.params.id;
      var userEntityObject=req.params.userEntityObject;
      userEntityService.putUserEntity(userId,userEntityObject).then(function(err,result){
       if(err)  res.send(err);
       res.json({message:result});
     });
  })

  .delete(function(req,res,next){
     var userId=req.params.id;
     userEntityService.deleteUserEntity(userId).then(function(err,result){
       if(err)  res.send(err);
       res.json({message:result});
   })
});


module.exports=router;
