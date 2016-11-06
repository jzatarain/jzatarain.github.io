/*global angular*/
angular
    .module("red-ribbon")
    .controller('homeController', HomeController);

HomeController.$inject = ['$http', '$scope'];

function HomeController($http, $scope){
    var vm = this;

    initializeComponents();
    function initializeComponents(){
        getDailyBingImage();
    }
    
    function getDailyBingImage(){
        $http.get('https://api.nasa.gov/planetary/apod?api_key=59ic3XmFOKWV8EbBOLHLOclSDYmCDgaO4uRawAbh')
        .then(function(response){
            vm.dailyImage = response.data.url;
        }, function(err){
            console.log(err);
        });
    }
}
