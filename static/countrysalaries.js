var countryURL = 'http://127.0.0.1:5000/country_data'
d3.json(countryURL).then(function(data){
    console.log(data)
        var labels = [];
        var salaries = [];
        var remote = [];
        var jobcount = [];
        for (let i = 0; i<data.length; i++){
            labels.push(data[i].company_location);
            salaries.push(data[i].salary_in_usd);
            remote.push(data[i].remote_ratio);
            jobcount.push(data[i].count)
        }
        console.log(labels)
        console.log(salaries)
        console.log(remote)
        console.log(jobcount)
})
function titleCharts(location){
    d3.json(countryURL).then(function(data){

        var filtered = data.filter(item=>item.company_location==location);
        console.log(data)
        var labels = [];
        var salaries = [];
        var remote = [];
        var jobcount = [];
        for (let i = 0; i<data.length; i++){
            labels.push(data[i].company_location);
            salaries.push(data[i].salary_in_usd);
            remote.push(data[i].remote_ratio);
            jobcount.push(data[i].count)
        }

         let bar1Data = {
            y:salaries,
            x:labels,
            text:labels,
            type:'bar',
            marker:{
                color:'blue'
            }
        };

        let bar1Layout = {
            autosize: true,
            margin: {
            l: 75,
            r: 50,
            b: 200,
            t: 50,
            pad: 4
            },
            title: "Average Salary per Country (in USD)",
            barmode: 'group',
            // margin: //margin code goes here
        };

        Plotly.newPlot("bar1", [bar1Data], bar1Layout)

        // bubble chart
        // function to adjust marker size based on jobcount
        function markerSize(jobs){
            let list = [];
            console.log(jobs)
            for (let i = 0; i < jobs.length; i++){
                var size = Math.sqrt(jobs[i])/2 * 10;
                list.push(size)
                console.log(list)
            }
            return list
        }

        let bubbleData = {
            x: labels,
            y: salaries,
            text: labels,
            mode: 'markers',
            marker: {
                color: salaries,
                size: markerSize(jobcount),
                line:{
                    color:'black',
                    width:1
                }
            }
        }
        let bubbleLayout = {
            autosize: false,
            width: 1200,
            height: 500,
            margin: {
              l: 50,
              r: 50,
              b: 100,
              t: 30,
              pad: 4
            },
            showlegend: false,
        };

        Plotly.newPlot("bubble", [bubbleData], bubbleLayout);

    })
    } //titleCharts end

titleCharts();