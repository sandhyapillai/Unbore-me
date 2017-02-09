class PasswordCheck{
	constructor(){
		this.restrict='A';
		this.require = 'ngModel';
	}
	link(scope,element,attrs,ctrl){
		//Uses jQuery for checking
		//input to pwd-check is the id of the other input box
		// <input type="password" class="form-control" name="cpassword" id="cpassword" pwd-check="password">

		/*
		var password = "#" + attrs.pwdCheck;
		element.add(password).on('keyup',function(){
			scope.$apply(function(){
				var v = element.val()===$(password).val();
				ctrl.$setValidity('pwdCheck',v);

			})
		})
		*/

		//Another solution using watch. Will need to add the pwdCheck with the value as the ng-model for cpassword
		// <input type="password" class="form-control" name="cpassword" id="cpassword" pwd-check="user.password">

		 scope.$watch(attrs.pwdCheck,function(password){
			var isValid = ctrl.$viewValue===password;
			ctrl.$setValidity('pwdCheck',isValid);
		 });


	}
}

export default PasswordCheck;
