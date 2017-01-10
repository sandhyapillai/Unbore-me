/**
 * Main entry point for the angular application for bootstrapping
 */

import angular from 'angular';
import HomeCtrl from './controllers/home.controller';
import HomeService from './services/home.service';

import  './templates/header/header.module';
import  './templates/footer/footer.module';
import bootstrap from 'twbs/bootstrap';
import 'twbs/bootstrap/css/bootstrap.css!';
import '../styles/style.css!'; // Adding style file


const main = angular.module("UnboreMe",[])
			 .controller("homeCtrl",HomeCtrl)
			 .service("homeService",HomeService)
			
export default main;
angular.element(document).ready(function(){
	return angular.bootstrap(document,[main.name]);
})