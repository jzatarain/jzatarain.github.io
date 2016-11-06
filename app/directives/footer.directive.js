/*global angular, $*/
angular
    .module("red-ribbon")
    .directive('myFooter', myFooter);

myFooter.$inject = [];

function myFooter(){
    var directive = {
        restrict: 'EA',
        templateUrl: 'app/views/frontend-footer.template.html',
        scope: true,
        controller: MyFooterController,
        controllerAs: 'vm',
        bindToController: true,
        link: linkFunc
    };
    return directive;
    
    function linkFunc(scope, el, attr, vm){
    }
}


function MyFooterController() {
    var vm = this;
}

