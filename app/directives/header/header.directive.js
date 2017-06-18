/*global angular, $*/
angular
    .module("red-ribbon")
    .directive('myHeader', myHeader);

myHeader.$inject = [];

function myHeader(){
    var directive = {
        restrict: 'EA',
        templateUrl: 'app/directives/header/header.template.html',
        scope: true,
        controller: MyHeaderController,
        controllerAs: 'vm',
        bindToController: true,
        link: linkFunc
    };

    return directive;
    
    function linkFunc(scope, el, attr, vm){
        $(".button-collapse").sideNav();
        $(".dropdown-button").dropdown();
    }
}


function MyHeaderController() {
    var vm = this;
}