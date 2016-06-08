/**
 * Created by lenovo on 07-06-2016.
 */
angular.module("app").component("loginComponent", {
    templateUrl: "public/components/loginComponent/loginComponent.html",
    controllerAs: "login",
    controller: loginController
});

function loginController() {

    var login = this;

    login.loginSubmit = function () {
       
    };
}