var app = angular.module('myApp', ['firebase']);

app.controller('FirstController', ['$scope', '$firebaseArray', 
	function($scope, $firebaseArray) {

		// Firebase Reference
		var dataRef = new Firebase('https://angular-firebase-1365b.firebaseio.com/');

		// Get data as an array
		$scope.formdata = $firebaseArray(dataRef);

		$scope.saveForm = function () {

            // Unique ID
            var timestamp = new Date().valueOf();

            $scope.formdata.$add({
            	id: timestamp,
            	firstname: $scope.firstname,
            	lastname: $scope.lastname,
            	email: $scope.email,
            	phonenumber: $scope.phonenumber
            });

            $scope.firstname = '';
            $scope.lastname = '';
            $scope.email = '';
            $scope.phonenumber = '';

            if($scope.regForm.$valid) {
            	alert('Form Submitted Successfully !');
            	$scope.regForm.$setPristine();
            }
        };
    }]);