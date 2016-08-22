angular
.module("venues")
.factory("VenueFactory", ["$resource", VenueFactoryFunc]);

function VenueFactoryFunc($resource){
  return $resource("http://localhost:3000/venues/:id", {}, {});
}
