/*global angular, $, baffle*/
angular
    .module("red-ribbon")
    .controller('portafolioController', portafolioController);

portafolioController.$inject = ['$scope'];

function portafolioController($scope){
    var vm = this;
    vm.imgFolder = "../../assets/portafolio"
    vm.portafolio = [
        'portrait.jpg',
        'clock_tower.jpg',
        'rainybw.jpg',
        'portrait2.jpg',
        'macroplazapanormic.jpg',
        'seapanoramic.jpg',
        'towersbw.jpg',
        'santalucia1.jpg',
        'fountain.jpg',
        'IMG_20161112_145146225.jpg',
        'boatMZ.jpg'
    ];

    initializeComponents();
    function initializeComponents(){
       
    }
}
