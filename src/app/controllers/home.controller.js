export default class homeController{
	constructor($scope,homeService,$http){
		'ngInject';
		//Watch on the change in zipcode
		$scope.$watch('zip',function(newValue,oldValue){
			fetchData();
		});
		
		//Call to service to get geolocation of user
		homeService.getUserLocation()
			.then(function(response){
				$scope.zip = parseInt(response.zip);
			},function(error){
				//TODO log the error
				console.log(error)
			});
		
		//Call to service to fetch weather data
		var fetchData = function(){
			homeService.getWeatherData($scope.zip)
			.then(function(response){
				$scope.cityName = response.name
				$scope.cityTemp = response.main.temp;
				$scope.icon = response.weather[0].icon;
				
			},function(error){
				//TODO log the error
				console.log(error)
			});
			
		}
		//Handler to change the zipcode
		$scope.changeCity = function(newZip){
			$scope.zip = newZip
		}
		
	}
}