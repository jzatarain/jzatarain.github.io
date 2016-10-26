/**
* polyhack Module
*
* Description
*/
angular
	.module('polyhack')
	.controller('ContactController', ContactController);

ContactController.$inject = [];

function ContactController(){
	var vm = this;
	vm.message = 'Contact us! JK. This is just a demo.';
}