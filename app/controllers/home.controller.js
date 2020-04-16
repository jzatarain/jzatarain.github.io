/*global angular, $, baffle, moment*/
angular
    .module("red-ribbon")
    .controller('homeController', HomeController);

HomeController.$inject = ['$http', '$scope', '$interval'];

function HomeController($http, $scope, $interval){
    var vm = this;

    initializeComponents();
    function initializeComponents(){
        getDailyBingImage();
        moment.locale('en');
        $interval(updateTime, 1000);
    }

    function updateTime(){
        vm.currentDate = moment().format('LLLL');
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
            $scope.$emit('toast', 'Unable to retrieve NASA\'s daily image');
            console.log(err);
        });
    }
}
