// i'd rename this file app to be slightly more descriptive
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
  ])
  .factory("railsPassFactory" [railsPassFactoryFunction]);
// instead of the above, you're going to want something like this:
// .controller('HomeController', ["NameService", HomeControllerCallback])
// .controller('OtherController', ["NameService", OtherControllerCallback])
// .service('NameService', NameServiceCallback)

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

function railsPassFactoryFunction(railsMapObj) {
  return railsMapObj
}
