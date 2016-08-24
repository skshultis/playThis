angular
.module("venues")
.factory("RequestFactory", ["$resource", RequestFactoryFunc])
.factory("VenueFactory", ["$resource", VenueFactoryFunc]);


function VenueFactoryFunc($resource){
  return $resource("http://localhost:3000/venues/:id", {}, {
    'get': {method: 'GET',
            interceptor : {responseError : venueResourceErrorHandler}}
  });
}

function RequestFactoryFunc($resource){
  return $resource("http://localhost:3000/requests/:id", {}, {});
}

function venueResourceErrorHandler(response) {
  console.log('In the resource error handler: ', response);
}
