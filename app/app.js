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
            templateUrl : 'app/views/frontend/home.html',
            controller  : 'homeController',
            controllerAs: 'vm'
        })
        .when('/portafolio', {
            templateUrl: 'app/views/frontend/portafolio.html',
            controller: 'portafolioController',
            controllerAs: 'vm'
        })
        .when('/about', {
            templateUrl: 'app/views/frontend/about.html'
        })
        .otherwise({
            templateUrl: 'app/views/404.html'
        });
       
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