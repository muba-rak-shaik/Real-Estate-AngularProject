var weatherService= angular.module('weatherService', []);

   weatherService.service('weatherService', ['$http', function($http) { 
        var apiKey= 'af63eafb4e393ca293584a2a2c0fbb1a';
        this.getWeather= function(city){
           console.log(city);
            var apiUrl= 'https://api.openweathermap.org/data/2.5/weather';
            var temperatureUnit = 'metric';
            var params= {
                q:city,
                appid:apiKey,
                units: temperatureUnit
            };
            return $http.get(apiUrl, {params:params})
                .then(function (response){
                    console.log("Working inside the weather service",response.data);
                    return response.data;
                   
                })
                .catch(function(error){
                    console.error('Error while fetching data ', error);
                    throw error; 
                });

        };
    }]);