angular
.module("venues")
.factory("RequestFactory", ["$resource", RequestFactoryFunc])
.factory("VenueFactory", ["$resource", VenueFactoryFunc]);


function VenueFactoryFunc($resource){
  return $resource("https://playthis.herokuapp.com/venues/:id", {}, {
    'get': {method: 'GET',
            interceptor : {responseError : venueResourceErrorHandler}}
  });
}

function RequestFactoryFunc($resource){
  return $resource("https://playthis.herokuapp.com/requests/:id", {}, {});
}

function venueResourceErrorHandler(response) {
  console.log('In the resource error handler: ', response);
}
