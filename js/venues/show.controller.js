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
  console.log("I'm in the show controller");
  var vm = this;
  vm.venue = VenueFactory.get({id: $stateParams.id});
  //vm.comments = vm.venue.requests
  //console.log(vm.venue);
  vm.newComment = new RequestFactory();
  //console.log(vm.newComment);
  //vm.newComment.venue_id =  vm.venue.id;
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
