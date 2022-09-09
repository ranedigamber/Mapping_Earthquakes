// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// City markers
var cities = [{
  location: [40.7128, -74.0059],
  name: "New York",
  population: "8,550,405"

},
{
  location: [41.8781, -87.6298],
  name: "Chicago",
  population: "2,720,546" 
},
{
  location: [29.7604, -95.3698],
  name: "Houston",
  population: "2,296,224"  
},
{
  location: [34.0522, -118.2437],
  name: "Los Angeles",
  population: "3,971,883"  
},
{
  location: [41.2524, -95.9980],
  name: "Omaha",
  population: "446,599"
}
];

// Add code to create a marker for each city below and add it to the map
// newyork;
let newYorkMarker = L.marker([40.7128, -74.0059], {
  draggable: true,
  title:"NewYork"
}).addTo(myMap);
newYorkMarker.bindPopup("Population:8,550,405");


// chicago;
let chiCago = L.marker([40.7128, -74.0059], {
  draggable: true,
  title:"Chicago"
}).addTo(myMap);
chiCago.bindPopup("Population:2,720,546");
// houston;
let housTon = L.marker([29.7604, -95.3698], {
  draggable: true,
  title:"Houston"
}).addTo(myMap);
housTon.bindPopup("Population:2,296,224");
// la;
let losAngles = L.marker([34.0522, -118.2437], {
  draggable: true,
  title:"Los Angles"
}).addTo(myMap);
losAngles.bindPopup("Population:3,971,883");
// omaha;
let omaHa = L.marker([41.2524, -95.9980], {
  draggable: true,
  title:"Omaha"
}).addTo(myMap);
omaHa.bindPopup("Population:446,599");
