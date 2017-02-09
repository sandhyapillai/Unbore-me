/**
 * Main entry point for the angular application for bootstrapping
 */

import angular from 'angular';
import 'angular-ui-router';
import HomeCtrl from './controllers/home.controller';
import UserCtrl from './controllers/user.controller';
import HomeService from './services/home.service';
import AppDirectives from './directives/directives';

import './partials/index';
import bootstrap from 'twbs/bootstrap';
import 'twbs/bootstrap/css/bootstrap.css!';
import '../styles/style.css!'; // Adding style file


const main = angular.module("UnboreMe",['HTMLTemplates','ui.router','AppDirectives'])
			 .controller("homeCtrl",HomeCtrl)
			 .controller("userCtrl",UserCtrl)
			 .service("homeService",HomeService)
			 .config(function($locationProvider,$urlRouterProvider,$stateProvider){
				// use the HTML5 History API
		        $locationProvider.html5Mode({
		            enabled: true,
		            requireBase: true
		        });
				 $urlRouterProvider.otherwise('/')
				 $stateProvider
				 	.state('signup',{
				 		url:'/signup',
				 		templateUrl:'signup.tpl.html',
				 		controller:'userCtrl'
				 	})
				 	.state('index',{
				 		url:'/',
				 		templateUrl:'dashboard.tpl.html'
				 	})
			 })

			
export default main;
angular.element(document).ready(function(){
	return angular.bootstrap(document,[main.name]);
})