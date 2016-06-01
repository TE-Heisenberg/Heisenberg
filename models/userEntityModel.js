var mongoose=require('mongoose');

var Q=require('q');
var schema=mongoose.Schema;

var userEntitySchema= new schema({
             picture :  String ,
             id :   String ,
             role :   String ,
             band :   String ,
             gender :   String ,
             first_name :   String ,
             last_name :   String ,
             date_of_birth :  Date ,
             residential_address :   String ,
             mobile :   String ,
             other_contacts :   String ,
             date_of_joining :  Date ,
             work_experience_in_year : Number,
             language : [String],
             work_location :   String ,
             projects : [{
               project_id :  String  ,
               project_name :   String ,
               team_name :   String ,
               project_role :   String ,
               manager :   String
            }],
             passport_details : {
               passport_number : Number,
               date_of_expiry :  Date ,
               date_of_issue :  Date ,
               issuing_authority :   String
            },
             preferences : {
               stay : [{
                 rating : [Number],
                 location : [String],
                 amenities : [String],
                 price : [String]
              }],
               booking : [{
                 airlines : [String],
                 fare_type : Boolean,
                 departure_time : [String],
                 arrival_time : [String],
                 no_of_stop : Number,
                 price : [String]
              }],
               local_travel : [{
                 price : [String],
                 local_type : [String]
              }]
            },
             favorite_travel : {
               travel_plan_id :   String,
               comment :   String
            },
             visa_availability : [{
               from :   String ,
               to :   String ,
               visa_category :  Boolean
            }],
             cost_code : String,
             country : String
     });

var userEntityModel=mongoose.model('userEntityModel',userEntitySchema,'userEntityCollection');
var userEntityService={};

userEntityService.getAll=function(){
  console.log('hum aa gye......feeling happy........:) ');
  return userEntityModel.find({});
};

userEntityService.getUserEntity=function(userId){
   return userEntityModel.findById(userId);
};

userEntityService.postUserEntity=function(newUserEntityObject){
   var newModel=new userEntityModel(newUserEntityObject);
   return newModel.save();
};

userEntityService.putUserEntity=function(userId,newUserEntityObject){
    userEntityModel.findById(userId,function(err,userEntityObject){
      if(err) return err;
      userEntityObject=newUserEntityObject;
      userEntityObject.save(function(err){
        if(err) return err;
        return "update successfully";
      })
    })
};

userEntityService.deleteUserEntity=function(userId){
   userEntityModel.remove(userId,function(err){
     if(err) return err;
     return "deleted Successfully";
   })
};

module.exports=userEntityService;
