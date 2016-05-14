var app = angular.module("app").component("stayBookingComponent", {

    templateUrl: "public/components/stayBookingComponent/stayBookingComponent.html",
    controllerAs: "stayBookingCtrl",
    controller: ["$http", stayBookingController]


})

function stayBookingController($http)
{
  var stayBookingCtrl=this;
  stayBookingCtrl.nodeMaster={};
  console.log("inside stay booking controller");


  $http.get('public/data/configjsons/nodemaster.json').success(function(data){
        console.log("http requested data");
        console.log(data);
        stayBookingCtrl.nodeMaster=data;
        console.log(stayBookingCtrl.nodeMaster.services.stay);
  });

    console.log("nodeMaster data");





    stayBookingCtrl.label = "First Name";
    stayBookingCtrl.type = "text";
    stayBookingCtrl.firstName = "Raj";

    stayBookingCtrl.reflectValue = function(keyString,value) {
      stayBookingCtrl[keyString] = value;
      console.log(keyString);
    };

    stayBookingCtrl.selectedmultiSelectedData=null,
    stayBookingCtrl.multiSelectData = {

                      "required": true,
                      "label": "Food",
                      "id": "Food",
                      "type": "multiSelect",
                      "specificAttr":{
                      "listLabelKey":'category',
                      "listValueKey":'name',
                    /* "domainList":["pizza","burger","ice-cream"]*/
                    /*"domainList": [
                                 {"label":"Pizza","value":"pizza"},
                                 {"label":"Burger","value":"burger"},
                                   {"label":"Salad","value":"salad"}
                                      ]*/

                        "domainList":[
                                  { category: 'meat', name: 'Pepperoni' },
                                  { category: 'meat', name: 'Sausage' },
                                  { category: 'meat', name: 'Ground Beef' },
                                  { category: 'meat', name: 'Bacon' },
                                  { category: 'veg', name: 'Mushrooms' },
                                  { category: 'veg', name: 'Onion' },
                                  { category: 'veg', name: 'Green Pepper' },
                                  { category: 'veg', name: 'Green Olives' }
                                ]
                        }// end of specificAttr

                      }//end of stayBookingCtrl.multiSelectData


  stayBookingCtrl.selectedsingleSelectedData=null,
  stayBookingCtrl.singleSelectData = {

                     "required": true,
                     "label": "Food",
                     "id": "Food",
                     "type": "singleSelect",
                     "specificAttr":{
                     "listLabelKey":'label',
                     "listValueKey":'value',
                    /* "domainList":["pizza","burger","ice-cream"]*/


                       "domainList": [
                                {"label":"Pizza","value":"pizza"},
                                {"label":"Burger","value":"burger"},
                                  {"label":"Salad","value":"salad"}
                                     ]

          }// end of specificAttr

     }//end of stayBookingCtrl.sigleSelectData

     stayBookingCtrl.autoCompleteData={

         "specificAttr":{
                "minLength":2,
                "maxLength":18

         }
     }
     states = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
      Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
      Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
      Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
      North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
      South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
      Wisconsin, Wyoming';
     function createFilterFor(query) {
         var lowercaseQuery = angular.lowercase(query);

         return function filterFn(state) {
           return (state.value.indexOf(lowercaseQuery) === 0);
         };

       }
    stayBookingCtrl.states= loadAll();
     stayBookingCtrl.autoCompleteData.specificAttr.querySearch =  function  (query) {
       var results = query ?stayBookingCtrl.states.filter( createFilterFor(query) ) : [];
       return results;
     }
     function loadAll() {
       console.log("inside loadAll")
       a=states.split(/, +/g).map( function (state) {
         return {
           value: state.toLowerCase(),
           display: state
         };
       });
       console.log("a is");
       console.log(a);
       return a;
     }

}//eof
