import  headerText from './header.tpl.html!text';
import footerText from  './footer.tpl.html!text';

angular.module('HTMLTemplates',[])
.run(function ($templateCache)
	{
	'ngInject';
	// Put in cache the files that are ng-include'd in templates
	$templateCache.put('header.tpl.html',headerText);
	$templateCache.put('footer.tpl.html',footerText);
})