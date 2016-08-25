(function(){
  angular
  .module('playThisMap')
  .controller("MapIndexController", ["$scope", MapIndexControllerFunction])


  function MapIndexControllerFunction($scope){
    map = $scope.map;
    $scope.gPlace;

    // $('.header-unit').css("width", "100%");
    // $('.header-unit').css("height", "100%");
    // $('#map').show();
    console.log("In the Map controller");

    //When the document has loaded completely, perform the following:
    var scroll_start = 0; //Initialize variable scroll_start and set value equal to 0
    var startchange = $(".header-unit"); //Initialize variable startchange and set value equal to the element with the class of "maintext"
    var offset = startchange.offset(); // Initialize variable offset and set value equal to current position of element

    //Conditional block to determine if/when the background color of navbar changes
    if (startchange.length) { // If startchange variable has a value,
      console.log(startchange);
      $(document).scroll(function () { //Bind scroll event to the document
        scroll_start = $(this).scrollTop(); // Set the value of scroll_start to vertical position of the current element
        console.log("Scroll_Start:" + scroll_start);
        if (scroll_start >  120) { // Check to see if the vertical position of the current element is greater than top of startchange div
          console.log("Offset_Top:" + offset.top);
          $(".header-unit").remove();
          $(".navcontainer").show();
          // $(".navcontainer").css("margin-top", "10");
          // $(".navcontainer").removeAttr('margin-top').css("margin-top","10px");

          // if vertical position is greater, change the nav background-color
        } else {
          $(".header-unit").show(); // if vertical position is not greater, make/keep the nav background-color transparent
          $(".navcontainer").show();
        }
      });
    };



    $('.searchBoxParent').keyup(function() {
      if($(this).val() == ''){
        $('.header-unit').show();


      }else{
        $('#map').show();
        $('.header-unit').remove();

      }
    });


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
        map.panBy(0, -200);
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
