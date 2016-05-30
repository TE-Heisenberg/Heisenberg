/**
 * Created by lenovo on 30-05-2016.
 */
var Q = require('q');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TE');
var db = mongoose.connection;

var services = {};

services.getTravelPlan = getTravelPlan;
services.postTravelPlan = postTravelPlan;
services.putTravelPlan = putTravelPlan;
services.deleteTravelPlan = deleteTravelPlan;

module.escape = services;

function getTravelPlan() {
    var deferred = Q.defer();

    return deferred.promise;
}

function postTravelPlan() {
    var deferred = Q.defer();

    return deferred.promise;
}

function putTravelPlan(d) {
    var deferred = Q.defer();

    return deferred.promise;
}

function deleteTravelPlan() {
    var deferred = Q.defer();

    return deferred.promise;
}