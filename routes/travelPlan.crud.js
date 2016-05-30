/**
 * Created by lenovo on 30-05-2016.
 */

var express = require('express');
var router = express.Router();
var travelPlan = require('../models/travelPlan.model');

router.get('/travelPlan/:id', function (req, res, next) {
  var travelPlaId=req.params.id;
    travelPlan.getTravelPlan(travelPlanId).then(function (data) {
        res.send(data);
    });

});
router.post('/travelPlan', function (req, res, next) {

    travelPlan.postTravelPlan(travelPlandata).then(function () {
      
    });

});
router.put('/travelPlan/:id', function (req, res, next) {
             var travelPlanId=req.params.id;
    travelPlan.putTravelPlan(id,travelPlanNew).then(function () {
    });

});
router.delete('/travelPlan/:id', function (req, res, next) {
     var travelPlanId=req.params.id;
    travelPlan.deleteTravelPlan(travelPlanId).then(function () {
    });

});


module.exports = router;
