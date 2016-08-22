angular
.module("venues")
.factory("RequestFactory", ["$resource", RequestFactoryFunc])
.factory("VenueFactory", ["$resource", VenueFactoryFunc]);

function VenueFactoryFunc($resource){
  return $resource("http://localhost:3000/venues/:id", {}, {});
}

function RequestFactoryFunc($resource){
  return $resource("http://localhost:3000/requests/:id", {}, {});
}
