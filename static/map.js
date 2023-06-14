var country_url = "http://127.0.0.1:5000/country_data";
var location_url = "http://127.0.0.1:5000/country_locations";

Promise.all([d3.json(country_url), d3.json(location_url)]).then(function([countryData, locationData]) {
    console.log(countryData);
    console.log(locationData);

    var companyLocation = countryData.map(item => item.company_location);
    var avgSalary = countryData.map(item => item.salary_in_usd);
    var remoteRatio = countryData.map(item => `${item.remote_ratio}`);

    console.log(remoteRatio);
    console.log(avgSalary);
    console.log(companyLocation);

    function filterLocation(location) {
        return countryData.filter(item => item.company_location === location);
    }

    function createMap(salaries, remote) {
        var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        
        var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        });
        var baseLayers = {
            "Street": street,
           " Topography": topo
        };

        var overlays = {
            "Average Salaries": salaries,
            "Remote Ratio": remote
        };

        var mymap = L.map('map', {
            center: [38, 8],
            zoom: 3.0,
            layers: [street,topo, salaries, remote],
            scrollWheelZoom: false
        });

        L.control.layers(baseLayers, overlays).addTo(mymap);
    }

    function createMarkers(response1, response2) {
        var countryMarkersSal = response1.map((countryLOC, i) => {
            let avgSal = response2[i].salary_in_usd.toFixed(2);
            let avgRem = response2[i].remote_ratio.toFixed(2);

            return L.circle([countryLOC.Latitude, countryLOC.Longitude], {
                color: 'blue',
                fillColor: 'blue',
                fillOpacity: 0.5,
                radius: Math.sqrt(avgSal) * 500
            }).bindPopup(`<h1>${countryLOC.Country}</h1> <hr>
                          <h3>Avg Salary (USD): ${avgSal}</h3>
                          <h3>Remote Ratio: ${avgRem}</h3>`);
        });

        var countryMarkersREM = response1.map((countryLOC, i) => {
            let avgSal = response2[i].salary_in_usd.toFixed(2);
            let avgRem = response2[i].remote_ratio.toFixed(2);

            return L.circle([countryLOC.Latitude, countryLOC.Longitude], {
                color: 'red',
                fillColor: 'red',
                fillOpacity: 0.5,
                radius: avgRem * 1000
            }).bindPopup(`<h1>${countryLOC.Country}</h1> <hr>
                          <h3>Avg Salary (USD): ${avgSal}</h3>
                          <h3>Remote Ratio: ${avgRem}</h3>`);
        });

        createMap(L.layerGroup(countryMarkersSal), L.layerGroup(countryMarkersREM));
    }

    createMarkers(locationData, countryData);
});