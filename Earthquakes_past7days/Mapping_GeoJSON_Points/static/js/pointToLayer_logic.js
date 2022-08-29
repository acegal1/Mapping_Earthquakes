// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// The mapid will reference the id tag in our <div> element on the index.html file.
// latitude (##.###) and the second is longitude (-###.####)

// Create the map object with center at the San Francisco airport [37.6213, -122.3790]  zoom level 10
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.   MAP A GeoJSON Point

// PLEASE NOTE coordinates are in REVERSE ORDER due to GeoJSON  X(longitude) and Y(latitude)

let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);

//The major difference between the 2 functions is 
//that the "pointToLayer" callback function adds markers to a map, 
//whereas the "onEachFeature" callback function allows you to add styling and bind data to a popup marker.
// add city marker         .bindPopup("<h2>" + feature.properties.city + "</h2>")

L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    //.bindPopup("<h2>" + feature.properties.name +  feature.properties.country + "</h2>");
    .bindPopup("<h2>" + feature.properties.name +  "</h2><hr><p>" + "<h3>"
    + feature.properties.city + "</h3><hr><p>" + feature.properties.country + "</p>");
  }

}).addTo(map);

// We create the tile layer that will be the background of our map. navigation-night-v1
// to change style .../mapbox/outdoors-v11 etc  streets-v11  satellite-streets-v11  light-v10

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
// the addTo() function will add the graymap object tile layer to our let map.
streets.addTo(map);

