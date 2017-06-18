/*global angular, $, baffle*/
angular
    .module("red-ribbon")
    .controller('homeController', HomeController);

HomeController.$inject = ['$http'];

function HomeController($http){
    var vm = this;

    initializeComponents();
    function initializeComponents(){
        // var baffled = baffle(".white-text").start();
        getDailyBingImage()
        .finally(function(){
            // baffled.reveal();
        });
    }
    
    function getDailyBingImage(){
        return $http.get('https://api.nasa.gov/planetary/apod?api_key=59ic3XmFOKWV8EbBOLHLOclSDYmCDgaO4uRawAbh')
        .then(function(response){
            vm.dailyImage = {
                url: response.data.url,
                explanation: response.data.explanation,
                title: response.data.title,
                media_type: response.data.media_type
            };
        }, function(err){
            console.log(err);
        });
    }
}
