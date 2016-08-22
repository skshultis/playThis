angular
.module("venues")
.controller("VenueIndexController",
[
"VenueFactory",
VenueIndexControllerFunction
]);

function VenueIndexControllerFunction(VenueFactory){
  var vm = this;
  vm.venues = VenueFactory.query();
  console.log(vm.venues);
}
