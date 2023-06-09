var countryURL = 'http://127.0.0.1:5000/country_data'
d3.json(countryURL).then(function(data){
    console.log(data)
        var labels = [];
        var salaries = [];
        var remote = [];
        for (let i = 0; i<data.length; i++){
            labels.push(data[i].company_location);
            salaries.push(data[i].salary_in_usd);
            remote.push(data[i].remote_ratio)
        }
​
        console.log(labels)
        console.log(salaries)
        console.log(remote)
})
​
function titleCharts(location){
    d3.json(countryURL).then(function(data){
​
        var filtered = data.filter(item=>item.company_location==location);
        console.log(data)
        var labels = [];
        var salaries = [];
        var remote = [];
        for (let i = 0; i<data.length; i++){
            labels.push(data[i].company_location);
            salaries.push(data[i].salary_in_usd);
            remote.push(data[i].remote_ratio)
        }
​
         let bar1Data = {
            y:salaries,
            x:labels,
            text:labels,
            type:'bar',
            marker:{
                color:'purple'
            }
        };
​
        let bar1Layout = {
            autosize: true,
            margin: {
            l: 75,
            r: 50,
            b: 200,
            t: 50,
            pad: 4
            },
            // title: "Bar Test",
            barmode: 'group',
            // margin: //margin code goes here
        };
​
        Plotly.newPlot("bar1", [bar1Data], bar1Layout)
​
        let bar2Data = {
            y:remote,
            x:labels,
            text:labels,
            type:'bar',
            marker:{
                color:'purple'
            }
        };
​
        let bar2Layout = {
            autosize: true,
            margin: {
            l: 75,
            r: 50,
            b: 200,
            t: 50,
            pad: 4
            },
            // title: "Bar Test",
            barmode: 'group',
            // margin: //margin code goes here
        };
​
        Plotly.newPlot("bar2", [bar2Data], bar2Layout)
​
    })
    } //titleCharts end
​
titleCharts();