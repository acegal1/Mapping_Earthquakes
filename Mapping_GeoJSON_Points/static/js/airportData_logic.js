// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// The mapid will reference the id tag in our <div> element on the index.html file.
// latitude (##.###) and the second is longitude (-###.####)

// Create the map object with Earth center  [30, 30]  zoom level 2
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map. navigation-night-v1
// to change style .../mapbox/outdoors-v11 etc  streets-v11  satellite-streets-v11  light-v10

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'streets' tile layer to the map.
streets.addTo(map);

// Add GeoJSON data. 
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/acegal1/Mapping_Earthquakes/main/majorAirports.json";

// PLEASE NOTE coordinates are in REVERSE ORDER due to GeoJSON  X(longitude) and Y(latitude)

// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// L.geoJSON(data).addTo(map);
// });

d3.json(airportData).then(function(data) {
  console.log(data);
L.geoJSON(data, {onEachFeature: function(feature, layer) {
  console.log(layer);
  layer.bindPopup("<h2>Airport Code: " + feature.properties.faa +  "</h2><hr><p>" + "<h3> Airport Name:  "
  + feature.properties.name + "</h3><hr><p>");
}}).addTo(map);
});

