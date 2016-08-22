(function() {
angular
.module('playThisMap')
.directive('googleplace', function() {
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
                    })
                    var image = '../assets/img/playthismap1.png';
                    var marker = new google.maps.Marker({
                        map: map,
                        icon: image
                    });
                    image = marker;
                    image.addListener("click", function() {
                        console.log("clicked");
                        console.log(place.place_id);
                        console.log(place.name);
                        console.log(place.formatted_address);
                        console.log("Latitude : " + latitude);
                        console.log("Longitude : " + longitude);
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

});
})();
