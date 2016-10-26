angular
	.module('polyhack')
	.controller('HomeController', HomeController);

HomeController.$inject = [];

function HomeController(){
	var vm = this;
	vm.message = 'Everyone come and see how good I look!';
}