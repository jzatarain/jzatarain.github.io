angular
	.module('polyhack')
	.controller('AboutController', AboutController);

AboutController.$inject = [];

function AboutController(){
	var vm = this;
	vm.message = 'Look! I am an about page.';
}