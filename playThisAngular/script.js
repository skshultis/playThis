angular
.module("playThis", [
  "ui.router",
  "ngResource",
  "venues",
  "playThisMap"
])
  .config([
    "$stateProvider",
    RouterFunction
  ]);






function RouterFunction($stateProvider) {
  console.log("Router Invoked");
  $stateProvider
    .state("venueIndex", {
      url: '/venues',
      templateUrl: 'js/venues/index.html',
      controller: 'VenueIndexController',
      controllerAs: 'VenueIndexViewModel'
    })
    .state("venueShow", {
      url: '/venues/:id',
      templateUrl: "js/venues/show.html",
      controller: 'VenueShowController',
      controllerAs: 'VenueShowViewModel'
    })
    .state("mapIndex", {
      url: '/map',
      templateUrl: 'js/maps/index.html',
      controller: 'MapIndexController',
      controllerAs: 'MapIndexViewModel'
    });

}
