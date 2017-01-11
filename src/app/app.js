/**
 * Main entry point for the angular application for bootstrapping
 */

import angular from 'angular';
import HomeCtrl from './controllers/home.controller';
import HomeService from './services/home.service';

import  headerText from './templates/header/header.tpl.html!text';
import footerText from  './templates/footer/footer.tpl.html!text';

import bootstrap from 'twbs/bootstrap';
import 'twbs/bootstrap/css/bootstrap.css!';
import '../styles/style.css!'; // Adding style file


const main = angular.module("UnboreMe",[])
			 .controller("homeCtrl",HomeCtrl)
			 .service("homeService",HomeService)
			 .run(
	[
		'$templateCache',
		function ($templateCache)
		{
			// Put in cache the files that are ng-include'd in templates
			$templateCache.put('header.tpl.html',headerText);
			$templateCache.put('footer.tpl.html',footerText);
		}
	])
			
export default main;
angular.element(document).ready(function(){
	return angular.bootstrap(document,[main.name]);
})