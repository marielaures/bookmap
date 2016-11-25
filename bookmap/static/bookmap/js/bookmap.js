$( document ).ready(function() {
    var mymap = L.map('mapid').setView([48.8534100, 2.3488000], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoicGFyaXNpYW5wbGF0eXB1cyIsImEiOiJjaXZwczc1Z2UwMDMwMnlwbWwwMzVsODNrIn0.tcj80BoawVvVP6VfxFAQGQ'
    }).addTo(mymap);

    // Création d'une icone avec images
    var myIcon = L.icon({
        iconUrl: '/static/bookmap/images/pin.png',
        iconSize:     [38, 38], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76]
    });
    //rajouté ici
    var popup = L.popup();

    // load pins & callback to add pins to the map
    $.get("/api/pins", function(pins) {
        for ( var i=0; i < pins.length; ++i ) {
            L.marker( [pins[i].lat, pins[i].long], {icon: myIcon})
                .bindPopup(pins[i].name)
                .addTo( mymap );
        }
    });



    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }
    mymap.on('click', onMapClick);
});
