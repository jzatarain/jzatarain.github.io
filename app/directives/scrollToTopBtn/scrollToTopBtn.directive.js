/*global angular, $, Grade*/
angular
    .module("red-ribbon")
    .directive('scrollToTopBtn', scrollToTopBtn);

/* @ngInject */
function scrollToTopBtn($window, $document){
    var directive = {
        restrict: 'E',
        templateUrl: 'app/directives/scrollToTopBtn/scrollToTopBtn.template.html',
        scope: true,
        replace: true,
        controller: scrollToTopBtnController,
        controllerAs: 'vm',
        bindToController: true,
        link: {
            pre: function(scope, elem, attr, vm){
                $window.onscroll = scrollFunction;
                
                function scrollFunction() {
                    if ($document[0].body.scrollTop > 80 || $document[0].documentElement.scrollTop > 80) {
                        elem.removeClass("hide");
                    } else {
                        elem.addClass("hide");
                    }
                }
            },
            post: function(scope, el, attr, vm){
            }
        }
    };
    return directive;
}

/* @ngInject */
function scrollToTopBtnController($window, $document) {
    var vm = this;
    vm.scrollToTop = scrollToTop;
    
    function scrollToTop(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
}

