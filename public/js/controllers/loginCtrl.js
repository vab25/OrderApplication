angular.module('myApp').controller('loginCtrl', function($scope, $http){
 $scope.login = function(){
   $http({
     method: 'POST',
     url: '/login',
     data: {name: $scope.name, password: $scope.password},
     withCredentials: true,
   }).then(function (response){
      console.log('hello');
   },function (error){

   });
 }
});