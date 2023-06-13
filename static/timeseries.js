// Time Series
// set url for FlaskAPI
let url = 'http://127.0.0.1:5000/data'

//create function that updates charts based on location
function timeCharts(location){
    //read in data with d3.json 
    d3.json(url).then(function(data){
        //filter data by location
        let filteredByLocation = data.filter(item=>item.company_location==location);
        //further filter data by year
        let filteredJobs20 = filteredByLocation.filter(item=>item.work_year==2020);
        let filteredJobs21 = filteredByLocation.filter(item=>item.work_year==2021);
        let filteredJobs22 = filteredByLocation.filter(item=>item.work_year==2022);
        let filteredJobs23 = filteredByLocation.filter(item=>item.work_year==2023);
        //map salaries to an array for plotting
        var salaries20 = filteredJobs20.map(item=>item.salary_in_usd);
        var salaries21 = filteredJobs21.map(item=>item.salary_in_usd);
        var salaries22 = filteredJobs22.map(item=>item.salary_in_usd);
        var salaries23 = filteredJobs23.map(item=>item.salary_in_usd);
        //calculate averages for each year
        let avgSal20 = d3.mean(salaries20);
        let avgSal21 = d3.mean(salaries21);
        let avgSal22 = d3.mean(salaries22);
        let avgSal23 = d3.mean(salaries23);
        // repeat above process for remote work data
        var remote20 = filteredJobs20.map(item=>item.remote_ratio);
        var remote21 = filteredJobs21.map(item=>item.remote_ratio);
        var remote22 = filteredJobs22.map(item=>item.remote_ratio);
        var remote23 = filteredJobs23.map(item=>item.remote_ratio);
        let avgRem20 = d3.mean(remote20);
        let avgRem21 = d3.mean(remote21);
        let avgRem22 = d3.mean(remote22);
        let avgRem23 = d3.mean(remote23);

        //set x and y values for salary line plot
        let line1_xvalues = ['2020', '2021', '2022', '2023'];
        let line1_yvalues = [avgSal20,avgSal21,avgSal22,avgSal23]
        //setup plotly graph
        let line1Data = [{
            y:line1_yvalues,
            x:line1_xvalues,
        }]
        let line1Layout = {
            width:1200,
            height:500,
            title:{
                text: 'Average Salary per Year'
            },
            xaxis:{
                tick0:2020,
                dtick:1,
                nticks:4,
                title:{
                    text:'Year'
                }
            },
            yaxis:{
                title:{
                    text:'Salary in USD'
                }
            }
}
        Plotly.newPlot("timesalary", line1Data, line1Layout);

        //setup plotly graph for remote work data
        let line2_xvalues = ['2020', '2021', '2022', '2023'];
        let line2_yvalues = [avgRem20,avgRem21,avgRem22,avgRem23]

        let line2Data = [{
            y:line2_yvalues,
            x:line2_xvalues,
        }]

        let line2Layout = {
            width:1200,
            height:500,
            title:{
                text: 'Average Remote-Work Ratio Per Year'
            },
            xaxis:{
                tick0:2020,
                dtick:1,
                nticks:4,
                title:{
                    text:'Year'
                }
            },
            yaxis:{
                title:{
                    text:'Remote Work Ratio'
                }
            }
        }
        Plotly.newPlot("timeremote", line2Data, line2Layout);
    })
}
//function to initialize the charts when the page first loads
//very similar to timeCharts() but doesnt filter by location
function init(){
    //populate dropdown//
    d3.json(url).then(function(data){

        //creat empty list to store country codes
        let countryList = [];

        //loop through data storing each country code only once
        for (let i=0; i<data.length; i++){
            let countryCode = data[i].company_location
            countryList.indexOf(countryCode) === -1 ? countryList.push(countryCode) : console.log();
        }
        countryList.sort();
        // add country codes to dropdown menu
        for (let i=0;i<countryList.length;i++){
            d3.select("#selDataset")
                .append("option")
                .text(countryList[i])
                .property("value", countryList[i])
        }

        //plot global data//
        //further filter data by year
        let filteredJobs20 = data.filter(item=>item.work_year==2020)
        let filteredJobs21 = data.filter(item=>item.work_year==2021)
        let filteredJobs22 = data.filter(item=>item.work_year==2022)
        let filteredJobs23 = data.filter(item=>item.work_year==2023)

        //map salaries to an array for plotting
        var salaries20 = filteredJobs20.map(item=>item.salary_in_usd)
        var salaries21 = filteredJobs21.map(item=>item.salary_in_usd)
        var salaries22 = filteredJobs22.map(item=>item.salary_in_usd)
        var salaries23 = filteredJobs23.map(item=>item.salary_in_usd)

        //calculate averages for each year
        let avgSal20 = d3.mean(salaries20);
        let avgSal21 = d3.mean(salaries21);
        let avgSal22 = d3.mean(salaries22);
        let avgSal23 = d3.mean(salaries23);

        // repeat above process for remote work data
        var remote20 = filteredJobs20.map(item=>item.remote_ratio)
        var remote21 = filteredJobs21.map(item=>item.remote_ratio)
        var remote22 = filteredJobs22.map(item=>item.remote_ratio)
        var remote23 = filteredJobs23.map(item=>item.remote_ratio)

        let avgRem20 = d3.mean(remote20);
        let avgRem21 = d3.mean(remote21);
        let avgRem22 = d3.mean(remote22);
        let avgRem23 = d3.mean(remote23);

        let line1_xvalues = ['2020', '2021', '2022', '2023'];
        let line1_yvalues = [avgSal20,avgSal21,avgSal22,avgSal23]

        let line1Data = [{
            y:line1_yvalues,
            x:line1_xvalues,
        }]

        let line1Layout = {
            width:1200,
            height:500,
            title:{
                text: 'Average Salary per Year (Global)'
            },
            xaxis:{
                tick0:2020,
                dtick:1,
                nticks:4,
                title:{
                    text:'Year'
                }
            },
            yaxis:{
                title:{
                    text:'Salary in USD'
                }
            }
        }
        Plotly.newPlot("timesalary", line1Data, line1Layout);

        let line2_xvalues = ['2020', '2021', '2022', '2023'];
        let line2_yvalues = [avgRem20,avgRem21,avgRem22,avgRem23]

        let line2Data = [{
            y:line2_yvalues,
            x:line2_xvalues,
        }]

        let line2Layout = {
            width:1200,
            height:500,
            title:{
                text: 'Average Remote-Work Ratio Per Year (Global)'
            },
            xaxis:{
                tick0:2020,
                dtick:1,
                nticks:4,
                title:{
                    text:'Year'
                }
            },
            yaxis:{
                title:{
                    text:'Remote Work Ratio'
                }
            }
        }
        Plotly.newPlot("timeremote", line2Data, line2Layout);

        var barData = [];
        var barLabels = [];
        for (let i=0; i<countryList.length;i++){
            let filteredByLocation = data.filter(item=>item.company_location==countryList[i]);

            let filteredJobs20 = filteredByLocation.filter(item=>item.work_year==2020)
            let filteredJobs23 = filteredByLocation.filter(item=>item.work_year==2023)

            let sal20 = filteredJobs20.map(item=>item.salary_in_usd);
            let sal23 = filteredJobs23.map(item=>item.salary_in_usd);
    
            let avg20 = d3.mean(sal20);
            let avg23 = d3.mean(sal23);

            let difference = avg23 - avg20
            // dont push null values to array
            if (difference){
            barLabels.push(countryList[i]);
            barData.push(difference)
            }
        };
        //function to select the colors of the bars in the bar chart
        // green for positive, red for negative
        function barColor(){
            return(ctx) => {
                const standard = 0;
                const salchange = ctx.raw;
                const color = salchange > standard ? 'rgb(75,192,192,0.5)'
                : salchange <= standard ? 'rgb(255,26,104,0.5)' : 'black';
                return color
            }
        }

        //chart.js bar chart setup
        const ctx = document.getElementById('timebar');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: barLabels,
                datasets: [{
                label:"Change in Salary (2020-2023)",
                data: barData,
                borderWidth: 1,
                backgroundColor:barColor(this),
                }]
            },
            options: {
                scales: {
                x:{
                    ticks:{
                        mirror:true
                    },
                },
                y: {
                    min : -40000,
                    max : 100000,
                    beginAtZero: true,
                    grid:{
                        color:(context)=>{
                            const zeroline = context.tick.value;
                            const lineColor = zeroline === 0 ? '#666' : '#ccc';
                            return lineColor;
                        }
                    },
                    text:'USD',
                    display:true
                }
                }
            }
            });
    })
}
// function that is called everything the dropdown menu is changed
// if 'ALL' is selected run init()
// otherwise run timeCharts to filter data by location
function optionChanged(location){
    if (location == 'All'){
        Chart.getChart('timebar').destroy();
        init()
    }
    else{
        timeCharts(location)
    }}
// initialize the page
init();