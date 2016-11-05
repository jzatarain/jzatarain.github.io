/*global angular*/
angular
    .module("red-ribbon")
    .directive('myHeader', myHeader);

myHeader.$inject = [];

function myHeader(){
    var directive = {
        restrict: 'EA',
        templateUrl: 'app/views/frontend-header.template.html',
        scope: true,
        controller: MyHeaderController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}


function MyHeaderController() {
    var vm = this;
    
}