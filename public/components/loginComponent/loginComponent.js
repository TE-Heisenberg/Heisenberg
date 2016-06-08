/**
 * Created by lenovo on 07-06-2016.
 */
angular.module("app").component("loginComponent", {
    templateUrl: "public/components/loginComponent/loginComponent.html",
    controllerAs: "login",
    controller: loginController
});

function loginController(loginService, $location) {

    var login = this;

    login.loginSubmit = function () {
        loginService.authenticate(login.username, login.password).then(function (response) {
            if (response.status == 200) {
                $location.url('/landingPage');
            }
        }).catch(function (err) {
            console.log("catch");

        })
    };

}