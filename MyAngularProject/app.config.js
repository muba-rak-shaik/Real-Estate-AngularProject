angular.
    module('myApp').
    config(['$routeProvider',
        function config($routeProvider){
            $routeProvider.
                when('/',{
                    template: '<main-comp></main-comp>'
                }).
                when('/home',{
                    template: '<main-comp></main-comp>'
                }).
                when('/aboutUs',{
                    template: '<about-us></about-us>'
                }).
                when('/contact',{
                    template: '<contact></contact>'
                })
                .when('/hotel/:hotelId', {
                    template: '<hotel-details></hotel-details>'
                }).when('/errors', {
                    template: '<errors></errors>'
                })
                .otherwise({
                    redirectTo: '/errors'
                });
        }
])