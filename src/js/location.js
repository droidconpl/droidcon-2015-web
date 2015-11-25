/*
  Created 11/17/2015 by Grażyna

  This file contains all location.html scripts for droidcon Kraków 2015 website.
*/

function getContentString(heading, address, link, linkName) {
  var contentString = '<div id="content">'+
                      '<h4 id="firstHeading" class="firstHeading">' + heading + '</h4>'+
                      '<div id="bodyContent">'+
                      '<p>' + address + '</p>'+
                      '<p><a href="' + link + '">'+ linkName
                      '</a> '+
                      '</p>'+
                      '</div>'+
                      '</div>';

  return contentString;
}

// Conference location
function venueMap() {
  var mapCanvas = document.getElementById('conference-location');
  var centerMap = {lat: 50.0540607, lng: 19.9349472};

  // Pin locations
  var conferenceLatLng = {lat: 50.0471523, lng: 19.9311927};
  var hackathonLatLng = {lat: 50.057064, lng: 19.915099};
  var afterpartyLatLng = {lat: 50.045325, lng: 19.936004};

  var mapOptions = {
    center: centerMap,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel:  false
  }

  var map = new google.maps.Map(mapCanvas, mapOptions);

  // Hackathon Marker
  var contentWindowHackathon = getContentString('Hackathon of droidcon Kraków 2015 Venue',
                                                 'ul. Wyczółkowskiego 7, Kraków<br /> 6th December 2015',
                                                 'http://gototech.space/',
                                                 'TECH.SPACE');
  var infoWindowHackathon = new google.maps.InfoWindow({
    content: contentWindowHackathon
  });
  var markerHackathon = new google.maps.Marker({
    position: hackathonLatLng,
    map: map,
    title: 'Hackathon venue'
  });
  markerHackathon.addListener('click', function() {
    infoWindowHackathon.open(map, markerHackathon);
  });
  $("#hackathon-pointer").click(function() {
    infoWindowHackathon.open(map, markerHackathon);
  });

  // Conference Marker
  var contentWindowConference = getContentString('droidcon Kraków 2015 Venue',
                                                 'ul. Wygrana 6, Kraków<br /> 4th-5th December 2015',
                                                 'http://www.qhotelkrakow.pl/',
                                                 'BEST WESTERN Q HOTEL');
  var infoWindowConference = new google.maps.InfoWindow({
    content: contentWindowConference
  });
  var markerConference = new google.maps.Marker({
    position: conferenceLatLng,
    map: map,
    title: 'droidcon Kraków 2015 venue'
  });
  markerConference.addListener('click', function() {
    infoWindowConference.open(map, markerConference);
  });
  $("#venue-pointer").click(function() {
    infoWindowConference.open(map, markerConference);
  });

  // Hackathon Marker
  var contentWindowAfterparty = getContentString('Afterparty for droidcon Kraków 2015',
                                                 'ul. Marii Konopnickiej 28, Kraków<br /> 4th December 2015',
                                                 'http://www.forumprzestrzenie.com/',
                                                 'FORUM PRESTRZENIE');
  var infoWindowAfterparty = new google.maps.InfoWindow({
    content: contentWindowAfterparty
  });
  var markerAfterparty = new google.maps.Marker({
    position: afterpartyLatLng,
    map: map,
    title: 'Afterparty'
  });
  markerAfterparty.addListener('click', function() {
    infoWindowAfterparty.open(map, markerAfterparty);
  });
  $("#afterparty-pointer").click(function() {
    infoWindowAfterparty.open(map, markerAfterparty);
  });

}

// Stops location
function stopsMap() {
  var mapCanvas = document.getElementById('stops-location');
  var centerMap = {lat: 50.0665743, lng: 19.9337714};

  var mapOptions = {
    center: centerMap,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel:  false
  }

  var map = new google.maps.Map(mapCanvas, mapOptions);

  // Stop 1 Marker
  var stop1LatLng = {lat: 50.064728, lng: 19.946265};
  var contentWindowStop1 = '<b>Stop Name: </b> Lubicz <br /><b>Tram no:</b> 52';
  var infoWindowStop1 = new google.maps.InfoWindow({
    content: contentWindowStop1
  });
  var markerStop1 = new google.maps.Marker({
    position: stop1LatLng,
    map: map,
    title: 'Lubicz'
  });
  markerStop1.addListener('click', function() {
    infoWindowStop1.open(map, markerStop1);
  });

  // Stop 2 Marker
  var stop2LatLng = {lat: 50.066612, lng: 19.938911};
  var contentWindowStop2 = '<b>Stop Name: </b>Basztowa LOT<br /><b>Tram no:</b> 18';
  var infoWindowStop2 = new google.maps.InfoWindow({
    content: contentWindowStop2
  });
  var markerStop2 = new google.maps.Marker({
    position: stop2LatLng,
    map: map,
    title: 'Basztowa LOT'
  });
  markerStop2.addListener('click', function() {
    infoWindowStop2.open(map, markerStop2);
  });

  // Stop 3 Marker
  var stop3LatLng = {lat: 50.069047, lng: 19.926020};
  var contentWindowStop3 = '<b>Stop Name: </b>Plac Inwalidów<br /><b>Buses no:</b> 164, 169, 503';
  var infoWindowStop3 = new google.maps.InfoWindow({
    content: contentWindowStop3
  });
  var markerStop3 = new google.maps.Marker({
    position: stop3LatLng,
    map: map,
    title: 'Plac Inwalidów'
  });
  markerStop3.addListener('click', function() {
    infoWindowStop3.open(map, markerStop3);
  });

}


google.maps.event.addDomListener(window, 'load', venueMap);
google.maps.event.addDomListener(window, 'load', stopsMap);
