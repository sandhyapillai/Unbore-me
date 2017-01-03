/**
 * Main entry point for the angular application for bootstrapping
 */

import angular from 'angular';
import MainCtrl from './controllers/main';
import '../styles/style.css!'; // Adding style file

const main = angular.module("UnboreMe",[])
			 .controller("mainController",MainCtrl);

export default main;
angular.element(document).ready(function(){
	return angular.bootstrap(document,[main.name]);
})