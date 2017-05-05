var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$rootScope) {
    $scope.color = "red";
    $rootScope.color = 'blue';
    $scope.count = 0;

$scope.add=function(){
var a = parseInt( document.getElementById("num").value);
$scope.count=$scope.count+a;
}
});

app.controller('usersController',function($scope,$http) {
    $http.get('http://localhost:3000/users').success(function (response) {
        $scope.names=response;
   });
});
