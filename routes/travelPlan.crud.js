/**
 * Created by lenovo on 30-05-2016.
 */

var express = require('express');
var router = express.Router();
var travelPlan = require('../models/travelPlan.model');

router.get('/', function (req, res, next) {
    travelPlan.getTravelPlan().then(function (data) {
        res.send(data);
    });

});
router.post('/', function (req, res, next) {

    travelPlan.postTravelPlan().then(function (data) {
        res.send(data);
    });

});
router.put('/', function (req, res, next) {

    travelPlan.putTravelPlan().then(function (data) {
        res.send(data);
    });

});
router.delete('/', function (req, res, next) {

    travelPlan.deleteTravelPlan().then(function (data) {
        res.send(data);
    });

});


module.exports = router;