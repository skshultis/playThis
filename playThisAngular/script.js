angular
.module("playThis", [
  "ui.router",
  "ngResource"
])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("VenueFactory", ["$resource", VenueFactoryFunc])
  .controller("VenueController",
[
  "VenueFactory",
  VenueControllerFunc
]);

function VenueControllerFunc(VenueFactory){
  var vm = this;
  vm.venues = VenueFactory.query()
  console.log(vm.venues);
}
function VenueFactoryFunc($resource){
  return $resource("http://localhost:3000/venues", {}, {});
}

function RouterFunction($stateProvider) {
  console.log("Router Invoked");
  $stateProvider
    .state("venueIndex", {
      url: '/venues',
      templateUrl: 'js/venues/index.html'
    });

}
