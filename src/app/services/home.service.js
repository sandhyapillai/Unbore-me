export default class weatherService{
	constructor($http,$q){
		'ngInject';
		
		this.getWeatherData = function(zipCode){
			var deferredCall = $q.defer();
			
			 $http.get("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&units=imperial&APPID=2b90172956ad9fcc924962a5f558bc99")
			     .then(function(response){
			    	  deferredCall.resolve(response.data);
			     },function(response){
			    	 deferredCall.reject(response)
			     });
			 return deferredCall.promise;
		}
		
		this.getUserLocation =function(){
			var deferredCall =$q.defer();
			$http.get('http://ip-api.com/json')
				.then(function(response){
					deferredCall.resolve(response.data);
				},function(response){
					deferredCall.reject(response);
				});
			return deferredCall.promise;
		}
	}
	
}

