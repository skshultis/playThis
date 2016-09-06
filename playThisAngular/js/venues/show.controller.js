angular
.module("venues")
.controller("VenueShowController", [
  "VenueFactory",
  "RequestFactory",
  "$stateParams",
  "$state",
  VenueShowControllerFunction
]);

function VenueShowControllerFunction(VenueFactory, RequestFactory, $stateParams, $state){
  var vm = this;
  vm.venue = VenueFactory.get({id: $stateParams.id});

  vm.newComment = new RequestFactory();
  vm.newVenue = new VenueFactory();

  vm.create = function(){

      vm.newComment.venue_id = vm.venue.id;
      if (vm.newComment.content != null) {
      vm.newComment.$save().then(function(response) {

        vm.venue.requests.push(response);
        vm.newComment = new RequestFactory();
        // $state.go

      });
    }
  };

}
