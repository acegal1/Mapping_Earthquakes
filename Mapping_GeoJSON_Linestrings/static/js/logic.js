// We create the dark view tile layer that will be an option for our map. dark-v10
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the tile layer() that will be the background of our map. navigation-night-v1
// to change style .../mapbox/outdoors-v11 etc  light-v11  satellite-light-v11  light-v10
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.  Add ""  to convert dark to "Night Naviation"
let baseMaps = {
  "Night Navigation": dark,
  "Day Navigation": light
};

// Create the map object with CENTER, Zoom Level and default layer.  Set Default option to choose here dark.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [dark]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Add GeoJSON data. 
// Accessing the TORONTO Routes GeoJSON URL at GITHUB 
let torontoData = "https://raw.githubusercontent.com/acegal1/Mapping_Earthquakes/main/torontoRoutes.json";

// PLEASE NOTE coordinates are in REVERSE ORDER due to GeoJSON  X(longitude) and Y(latitude)

////Grabbing our GeoJSON data.
//// Title Markers

// Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data).addTo(map);
// });

// Create a style parameters for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GEOJSON layer to add labels and color  
L.geoJSON(data, {
  style: myStyle,
  onEachFeature: function(feature, layer) {
  console.log(layer);
  layer.bindPopup("<h2>Airline: " + feature.properties.airline +  "</h2><hr><p>" + "<h3> Destination:  "
  + feature.properties.dst + "</h3><hr><p>");
}}).addTo(map);
});

