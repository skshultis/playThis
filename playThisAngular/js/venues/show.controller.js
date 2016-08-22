angular
.module("venues")
.controller("VenueShowController", [
  "VenueFactory",
  "$stateParams",
  VenueShowControllerFunction
]);

function VenueShowControllerFunction(VenueFactory, $stateParams){
  var vm = this;
  vm.venue = VenueFactory.get({id: $stateParams.id});
}
