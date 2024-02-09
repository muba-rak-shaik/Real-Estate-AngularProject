angular.module('hotelDetails')
    .component('hotelDetails', {
        templateUrl: 'hotelDetails/hotelDetails.template.html',
        controller: ['hotelService', '$routeParams', 'weatherService', function (hotelService, $routeParams, weatherService) {
            console.log("Hotel details are working..", $routeParams);
            this.hotelId = $routeParams.hotelId;
            this.hotel = hotelService.getHotelById(this.hotelId);

            console.log("city from hotelDetails", this.hotel.city);
            weatherService.getWeather(this.hotel.city)
            .then((response) => {
                console.log("API Response:", response);
                this.weatherDetails = response;
                console.log("Weather Details:", this.weatherDetails);
            })
            .catch(error => {
                console.error('Error fetching weather details:', error);
            });
        
        
            

            
        }]
    });
