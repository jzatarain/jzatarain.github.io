/*global angular, $*/
angular
    .module("red-ribbon")
    .directive('myFooter', myFooter);

MyFooterController.$inject = [];

function myFooter(){
    var directive = {
        restrict: 'EA',
        templateUrl: 'app/directives/footer/footer.template.html',
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

