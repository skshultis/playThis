(function(){
angular
.module('playThisMap')
.controller("MapIndexController", ["$scope", MapIndexControllerFunction])


function MapIndexControllerFunction($scope){
  console.log("In the Map controller");
}



})();
