/*global angular*/
var dependencies = [
    'ngAria',
    'ngRoute',
    'ngMessages',
    'ngAnimate',
    'angular-loading-bar'
];

function router($routeProvider){
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'app/views/home.template.html',
            controller  : 'homeController',
            controllerAs: 'vm'
        })
        .when('/portafolio', {
            templateUrl: 'app/views/portafolio.html',
            controller: 'portafolioController',
            controllerAs: 'vm'
        })
       
        /*// route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController',
            controlleras: 'vm'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController',
            controlleras: 'vm'
        });*/
}

angular
    .module("red-ribbon", dependencies)
    .config(router);