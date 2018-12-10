angular.module("loginCtrl", []).controller('loginController', function($scope, $http){
 $scope.login = function(){
   $http({
     method: 'GET',
     url: '/login',
     withCredentials: true,
   }).then(function (response){

   },function (error){

   });
 }
});