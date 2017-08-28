var app = angular.module('myApp', ['firebase']);

app.controller('FirstController', ['$scope', '$firebaseArray',
	function($scope, $firebaseArray) {

		// Firebase Reference
		var dataRef = new Firebase('');

		// Get data as an array
		$scope.formdata = $firebaseArray(dataRef);

		$scope.saveForm = function () {

			if($scope.uniquekey != '') {
				var obj = $scope.formdata.$getRecord($scope.uniquekey);
				obj.firstname = $scope.firstname;
				obj.lastname = $scope.lastname;
				obj.email = $scope.email;
				obj.phonenumber = $scope.phonenumber;
				$scope.formdata.$save(obj);
			} else {
            // Unique ID
            var timestamp = new Date().valueOf();

            $scope.formdata.$add({
            	id: timestamp,
            	firstname: $scope.firstname,
            	lastname: $scope.lastname,
            	email: $scope.email,
            	phonenumber: $scope.phonenumber
            });
        }

        $scope.uniquekey = '';
        $scope.firstname = '';
        $scope.lastname = '';
        $scope.email = '';
        $scope.phonenumber = '';

        if($scope.regForm.$valid) {
        	alert('Form Submitted Successfully !');
        	$scope.regForm.$setPristine();
        }
    };

    $scope.editData = function(fd) {
    	$scope.regForm.$setPristine();
    	$scope.uniquekey = fd.$id;
    	$scope.firstname = fd.firstname;
    	$scope.lastname = fd.lastname;
    	$scope.email = fd.email;
    	$scope.phonenumber = fd.phonenumber;
    	// console.log('Key is: ' + fd.$id);
    }
}]);