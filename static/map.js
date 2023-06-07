// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
var myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 4
  });
  // data 
let url = 'http://127.0.0.1:5000/data'
d3.json(url).then(function(data) {
  console.log(data);

  let countryList = [];
  for (let i = 0; i < data.length; i++) {
    let countryCode = data[i].company_location;
    if (countryList.indexOf(countryCode) === -1) {
      countryList.push(countryCode);
    }
  }
  
});
  // Adding a tile layer (the background map image) to our map:
  // We use the addTo() method to add objects to our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  //All other map code goes here
// Define variables for our tile layers.
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
})

// Only one base layer can be shown at a time.
var baseMaps = {
  Street: street,
  Topography: topo
};

// Pass our map layers to our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps).addTo(myMap);


  //etc.


  
  
  


