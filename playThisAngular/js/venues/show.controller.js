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
  //vm.comments = vm.venue.requests
  //console.log(vm.venue);
  vm.newComment = new RequestFactory();
  //console.log(vm.newComment);
  //vm.newComment.venue_id =  vm.venue.id;
  vm.create = function(){
      vm.newComment.venue_id = vm.venue.id;
      vm.newComment.$save().then(function(response) {
        console.log(response);
        //console.log(vm.newComment)
        vm.venue.requests.push(response);
        vm.newComment = {};
        // $state.go
      });
  };

}
