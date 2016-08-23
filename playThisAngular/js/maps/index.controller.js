(function(){
angular
.module('playThisMap')
.controller("MapIndexController", ["$scope", MapIndexControllerFunction])


function MapIndexControllerFunction($scope){
  console.log("In the Map controller");
  map = $scope.map;
  $scope.gPlace;
  map = new google.maps.Map(document.getElementById('map'), {
      center: {
          lat: -34.397,
          lng: 150.644
      },
      zoom: 18
  });
  var infoWindow = new google.maps.InfoWindow({
      map: map
  });
  var marker = new google.maps.Marker({
      map: map
  });
  marker.addListener('click', function() {
      infowindow.open(map, marker);
  });
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
          };
          console.log("latitude : " + pos.lat, "latitude : " + pos.lng);
          console.log(pos);

          infoWindow.setPosition(pos);
          infoWindow.setContent("Current Locaton");
          map.setCenter(pos);
      }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
      });
  } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
          'Error: The Geolocation service failed.' :
          'Error: Your browser doesn\'t support geolocation.');
  };


}



})();
