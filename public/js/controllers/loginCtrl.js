angular.module('myApp').controller('loginCtrl', function($scope, $http){
 $scope.login = function(){
   $http({
     method: 'GET',
     url: '/login',
     withCredentials: true,
   }).then(function (response){
      console.log('hello');
   },function (error){

   });
 }
});