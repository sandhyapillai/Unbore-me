export default class UserController{
	constructor($scope){
		'ngInject';
		//TODO add service to post the user data
		$scope.signUp =function(userObj){
			console.log(userObj);
		}
		//Reset the children dropdown to default value
		$scope.$watch('user.married',function(value){
			if(value=="false"){
				$scope.user.children="0"
			}
		})
	}
}