// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// The mapid will reference the id tag in our <div> element on the index.html file.
// latitude (##.###) and the second is longitude (-###.####)

// Center of the Map for California  [36.1733, -120.1794]  zoom level = 7
// Create the map object with center at the San Francisco airport [37.6213, -122.3790]  zoom level 5
let map = L.map('mapid').setView([37.6213, -122.3790], 4);

// To create a line in Leaflet, the starting and ending points and all coordinates along the route need to be in an array. 

// Coordinates for each point to be used in the line.
//San Francisco International Airport (SFO) coordinates [37.6213, -122.3790].
//Portland International Airport (PDX) coordinates [45.5898, -122.5951]
// Pasco Washington Airport (PSC) [46.2816, -118.9524]
// Austin-Bergstrom International Airport (AUS), coordinates [30.1975, -97.6664]
// Toronto Pearson International Airport (YYZ), coordinates [43.6777, -79.6248]
// John F. Kennedy International Airport (JFK), coordinates [40.6413, -73.7781]
let line = [
    [37.6213, -122.3790],
    [45.5898, -122.5951],
    [46.2816, -118.9524],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
          
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 5,
    opacity: 0.7,
    dashArray: "10, 20"
  }).addTo(map);


// We create the tile layer that will be the background of our map.
// to change style .../mapbox/outdoors-vll etc  streets-v11  satellite-streets-v11  light-v10

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
// the addTo() function will add the graymap object tile layer to our let map.
streets.addTo(map);