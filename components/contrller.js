var app=angular.module("myapp",[])
app.component('dog',{
  templateUrl:"dog.html",
  controllerAs: "dog",
  controller: dogController,
  bindings: {
    salary: '='

  },
});
app.component('animal',{
  templateUrl:"animal.html",
  controllerAs:"animal",
  controller: animalController,
  bindings:{
    salary:'='
  },
});

app.component('cat',{
  templateUrl:"cat.html",
  controllerAs:"cat",
  controller: catController,
  bindings:{
    name:'='
  },
});

function dogController(){
  var dog=this;
  dog.company="Wipro";
  dog.lastname="Sharma";
}
function animalController(){
  var animal=this;
  animal.address="kota";
  animal.colony="railway colony";
}
function catController(){
  alert(this.name);
}
