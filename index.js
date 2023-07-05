// Define the AngularJS module
var app = angular.module('leadsApp', []);

// Define the AngularJS controller
app.controller('leadsController', function($scope, $http) {
    // Make a GET request to fetch the leads data
    $http.get('/api/leads/?location_string=India')
        .then(function(response) {
            $scope.leads = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
});
