 
import MainApp from '../app/app';
import HomeCtrl from '../app/controllers/home.controller';
import HomeService from '../app/services/home.service';	
describe("UnboreMe Application testing",function(){
	var homeCtrl,scope;
	
	beforeEach(module(MainApp.name))
	
	beforeEach(inject(function($controller,$rootScope){
		scope = $rootScope.$new()
		homeCtrl = $controller;
	}))
	it("homeCtrl exist",function(){
		var ctrl = homeCtrl("homeCtrl",{$scope:scope});
		expect(ctrl).toBeDefined();
	})
	
	describe("Testing the home service",function(){
		var homeService,httpBackend;
		beforeEach(inject(function(_homeService_,_$httpBackend_){
			homeService = _homeService_;
			httpBackend = _$httpBackend_;
		}));
		it('should have homeService defined',function(){
			expect(homeService).toBeDefined();
		})
		it("Request data from open weather API",function(){
			var weatherData = {data:{"coord":{"lon":-121.87,"lat":37.66},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"base":"stations","main":{"temp":54.88,"pressure":1018,"humidity":76,"temp_min":42.8,"temp_max":69.8},"visibility":9656,"wind":{"speed":9.17,"deg":180},"clouds":{"all":90},"dt":1484012280,"sys":{"type":1,"id":478,"message":0.1877,"country":"US","sunrise":1484061751,"sunset":1484096894},"id":5383777,"name":"Pleasanton","cod":200}}
			
			httpBackend.expectGET("http://api.openweathermap.org/data/2.5/weather?zip=94588&units=imperial&APPID=2b90172956ad9fcc924962a5f558bc99")
						.respond(weatherData)
			
			var promise = homeService.getWeatherData(94588);
			promise.then(function(response){
				expect(response).toBeDefined();
				expect(response).toEqual(weatherData);
			})
			httpBackend.flush();
		})
		
		it("Request data to get geolocation of user",function(){
			var userLocation = {data:{"as":"AS7922 Comcast Cable Communications, LLC","city":"Pleasanton","country":"United States","countryCode":"US","isp":"Comcast Cable","lat":37.6704,"lon":-121.9374,"org":"Comcast Cable","query":"73.202.98.114","region":"CA","regionName":"California","status":"success","timezone":"America/Los_Angeles","zip":"94588"}}
			
			httpBackend.expectGET("http://ip-api.com/json")
						.respond(userLocation)
			
			var promise = homeService.getUserLocation();
			promise.then(function(response){
				expect(response).toBeDefined();
				expect(response).toEqual(userLocation);
			})
			httpBackend.flush();
		})
	})
	
})