import PasswordCheck from './password-check'

angular.module('AppDirectives',[])
	   .directive('pwdCheck',() =>new PasswordCheck)