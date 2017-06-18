angular
    .module("red-ribbon")
    .directive('ngVideoSrc', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            attr.$set('src', attr.vsrc);
        }
    }
});