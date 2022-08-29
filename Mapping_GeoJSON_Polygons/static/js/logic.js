// Add console log to check to see if our code is working.
console.log("Working!");

// We create the tile layer() streets-v11 that will be the background of our map. 
// to change style .../mapbox/outdoors-v11 etc  light-v11  satellite-light-v11  light-v10 streets-v11
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the satellite-v9 view tile layer that will be an option for our map. 
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.  Add ""  to convert dark to "Night Naviation"
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

// Create the map object with CENTER, Zoom Level and default layer.  Set Default option to choose here dark.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Add GeoJSON data. 
// Accessing the TORONTO Neighborhoods GeoJSON URL at GITHUB 
let torontoHoods = "https://raw.githubusercontent.com/acegal1/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// PLEASE NOTE coordinates are in REVERSE ORDER due to GeoJSON  X(longitude) and Y(latitude)

// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
// // Creating a GEOJSON layer to add labels and color  
// L.geoJSON(data).addTo(map);
// });


// Create a style parameters for the lines.   https://htmlcolorcodes.com/
let myStyle = {
  fillColor: "yellow",
  color: "#335BFF",
  weight: 1
  
}

// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
// // Creating a GEOJSON layer to add labels and color  
// L.geoJSON(data, {
//   style: myStyle,
//   onEachFeature: function(features,layer) {
//      console.log(layer);
//      layer.bindPopup("<h2>Neighborhood: " + features.properties.AREA_Name +  "</h2><hr><p>");
// }}).addTo(map);
// });


d3.json(torontoHoods).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data,{
      style: myStyle,
      onEachFeature: function(feature, layer) {
          layer.bindPopup("<h2> Neighborhood: " + feature.properties.AREA_NAME + "</h2><hr><p></p>");
      }
  })
  .addTo(map);
  });