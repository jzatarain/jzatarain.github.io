angular
    .module('polyhack')
    .config(config);

function config($routeProvider, $locationProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'views/home.template.html',
    		controller: 'HomeController',
            controllerAs: 'homeCtrl'
    	})
        .when('/home', {
            templateUrl: 'views/home.template.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.template.html',
            controller: 'AboutController',
            controllerAs: 'aboutCtrl'
        })
        .when('/contact', {
        	templateUrl: 'views/contact.template.html',
            controller: 'ContactController',
            controllerAs: 'contactCtrl'
        });
}