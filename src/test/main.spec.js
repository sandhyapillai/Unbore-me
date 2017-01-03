
import MainApp from '../app/app';
import MainCtrl from '../app/controllers/main';

describe("UnboreMe Application testing",function(){
	var mainCtrl,scope;
	
	beforeEach(module(MainApp.name))
	
	beforeEach(inject(function($controller,$rootScope){
		scope = $rootScope.$new()
		mainCtrl = $controller;
	}))
	it("MainCtrl exist",function(){
		var ctrl = mainCtrl("mainController",{$scope:scope});
		expect(scope.message).toEqual('Hello World123');
		
	})
})