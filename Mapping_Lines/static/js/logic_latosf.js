// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// The mapid will reference the id tag in our <div> element on the index.html file.
// latitude (##.###) and the second is longitude (-###.####)

// Center of the Map for California  [36.1733, -120.1794]  zoom level = 7
// Create the map object with center at the San Francisco airport [37.6213, -122.3790]  zoom level 5
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// To create a line in Leaflet, the starting and ending points and all coordinates along the route need to be in an array. 

// Coordinates for each point to be used in the line.
//Los Angeles International Airport (LAX), with the coordinates [33.9416, -118.4085]
//San Francisco International Airport (SFO), with the coordinates [37.6213, -122.3790].
// Salt Lake City International Airport (SLC), with the coordinates []
// Seattle-Tacoma International Airport (SEA), with the coordinates []
// https://leafletjs.com/reference-1.6.0.html#polyline

let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
  }).addTo(map);


// We create the tile layer that will be the background of our map.
// to change style .../mapbox/outdoors-vll etc  streets-v11  satellite-streets-v11

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
// the addTo() function will add the graymap object tile layer to our let map.
streets.addTo(map);