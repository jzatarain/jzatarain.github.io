/*global angular, $, Grade*/
angular
    .module("red-ribbon")
    .directive('gradientImage', gradientImage);

gradientImageController.$inject = ["$window"];

function gradientImage(){
    var directive = {
        restrict: 'E',
        templateUrl: 'app/views/frontend/gradientImage.template.html',
        scope: {
            imgSrc: "=",
            imgClass: "@",
            imgStyle: "@"
        },
        controller: gradientImageController,
        controllerAs: 'vm',
        bindToController: true,
        link: {
            pre: function(scope, elem, attr, vm){
                var img = elem.find("img:first");
                if (img[0].complete){
                    Grade(img.parent()[0]);
                }
                else {
                    img.on("load", function(event){
                        Grade(img.parent()[0]);
                    });
                }
                
            },
            post: function(scope, el, attr, vm){
            }
        }
    };
    return directive;
}


function gradientImageController($window) {
    var vm = this;
}

