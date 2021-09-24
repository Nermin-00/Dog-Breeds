

function initMap() {
  var options = {
    zoom: 6,
    center: { lat: 43.343033, lng: 17.807894 }
  }
  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  //Creating dog object and properties to be called upon markers

  //addMarker function

  addMarker({
    coords: { lat: 43.343033, lng: 17.807894 },
    iconImage: '/images/sarp.png'
  });


  addMarker({
    coords: { lat: 43.32472, lng: 21.90333 },
    iconImage: '/images/serbian hound.png'
  });

  addMarker({
    coords: { lat: 42.442574, lng: 19.268646 },
    iconImage: '/images/montenegri mount hound.png'
  })



  function addMarker(props) {


    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: props.iconImage
    });
  }


}
