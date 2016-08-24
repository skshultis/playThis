
angular
.module('playThisMap')
.factory("VenueFactory", ["$resource", VenueFactoryFunc])
.directive('googleplace', ["VenueFactory", "$resource", "$state", function(VenueFactory, $resource, $state) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());
                    var place = scope.gPlace.getPlace();
                    if (!place.geometry) {
                        return;
                    }
                    if (place.geometry.viewport) {
                        map.fitBounds(place.geometry.viewport);
                    } else {
                        map.setCenter(place.geometry.location);
                        map.setZoom(17);
                    }
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({
                        placeId: place.place_id
                    }, function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            latitude = results[0].geometry.location.lat();
                            longitude = results[0].geometry.location.lng();
                        }
                    });
                    var image = '../assets/img/playthismap1.png';
                    var marker = new google.maps.Marker({
                        map: map,
                        icon: image
                    });
                    image = marker;
                    image.addListener("click", function() {
                      var obj = {
                        "placeId" : place.place_id,
                        "name" : place.name,
                        "street" : place.formatted_address,
                        "latitude": place.geometry.location.lat(),
                        "longitude": place.geometry.location.lng()
                      };
                      // console.log(obj);

                      var newVenue = new VenueFactory();
                      newVenue.placeId = obj.placeId;
                      newVenue.name = obj.name;
                      newVenue.street = obj.street;
                      newVenue.latitude = obj.latitude;
                      newVenue.longitude = obj.longitude;
                      console.log(newVenue);


                      newVenue.$save().then(function(res) {

                        console.log(res);



                        $state.go('venueShow', {id: res.id});

                      }).catch(function(res) {

                        placeId = res.config.data.placeId;
                        ven = VenueFactory.query({}, function(response){
                          for (var property in response) {
                            if(response[property].placeId === res.config.data.placeId) {
                              $state.go('venueShow', {id: response[property].id})
                            }
                          }

                        });


                        for(i = 0; i < ven.length; i++){
                          if(ven.i.placeId === res.config.data.placeId){
                            console.log("i am the same poop");
                            console.log(ven[i]);
                          } else {
                            console.log("i am not the same")
                          }
                        }
                        console.log(ven)

                        $state.go('venueShow', {placeId: res.config.data.placeId})
                        //Doesn't work. Need to somehow get associated id from placeId,
                        // set newvenue.id in .catch and redirect to the id's show page.
                    });

                      //console.log(railsMapObj);
                        // console.log("clicked");
                        // console.log(place.place_id);
                        // console.log(place.name);
                        // console.log(place.formatted_address);
                        // console.log("Latitude : " + latitude);
                        // console.log("Longitude : " + longitude);
                    });
                    marker.setPlace({
                        placeId: place.place_id,
                        location: place.geometry.location
                    });
                    var placesService = new google.maps.places.PlacesService(map);
                    marker.setVisible(true);
                });
            })
        }
    };

}]);


function VenueFactoryFunc($resource){
  return $resource("http://localhost:3000/venues/:id", {}, {});
}
