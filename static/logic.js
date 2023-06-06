// JaveScript code for plotting data goes here
// Time Series
let url = 'http://127.0.0.1:5000/data'
function timeCharts(location){
    d3.json(url).then(function(data){
        let filteredByLocation = data.filter(item=>item.company_location==location);

        function filter20(job){
            return job.work_year == 2020;
        }
        function filter21(job ){
            return job.work_year == 2021;
        }
        function filter22(job){
            return job.work_year == 2022;
        }
        function filter23(job){
            return job.work_year == 2023;
        }

        let filteredJobs20 = filteredByLocation.filter(filter20)
        let filteredJobs21 = filteredByLocation.filter(filter21)
        let filteredJobs22 = filteredByLocation.filter(filter22)
        let filteredJobs23 = filteredByLocation.filter(filter23)

        console.log(filteredJobs20);
        console.log(filteredJobs21);
        console.log(filteredJobs22);
        console.log(filteredJobs23);
    

        var salaries20 = [];
        var salaries21 = [];
        var salaries22 = [];
        var salaries23 = [];

        for (let i=0; i<filteredJobs20.length; i++){
            salaries20.push(filteredJobs20[i].salary_in_usd)
        }
        for (let i=0; i<filteredJobs21.length; i++){
            salaries21.push(filteredJobs21[i].salary_in_usd)
        }
        for (let i=0; i<filteredJobs22.length; i++){
            salaries22.push(filteredJobs22[i].salary_in_usd)
        }
        for (let i=0; i<filteredJobs23.length; i++){
            salaries23.push(filteredJobs23[i].salary_in_usd)
        }

        let avgSal20 = d3.mean(salaries20);
        let avgSal21 = d3.mean(salaries21);
        let avgSal22 = d3.mean(salaries22);
        let avgSal23 = d3.mean(salaries23);

        
        var remote20 = [];
        var remote21 = [];
        var remote22 = [];
        var remote23 = [];

        for (let i=0; i<filteredJobs20.length; i++){
            remote20.push(filteredJobs20[i].remote_ratio)
        };
        for (let i=0; i<filteredJobs21.length; i++){
            remote21.push(filteredJobs21[i].remote_ratio)
        };
        for (let i=0; i<filteredJobs22.length; i++){
            remote22.push(filteredJobs22[i].remote_ratio)
        };
        for (let i=0; i<filteredJobs23.length; i++){
            remote23.push(filteredJobs23[i].remote_ratio)
        };

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

function init(){
    //populate dropdown//
    d3.json(url).then(function(data){
        let countryList = [];
        for (let i=0; i<data.length; i++){
            let countryCode = data[i].company_location
            countryList.indexOf(countryCode) === -1 ? countryList.push(countryCode) : console.log();
        }
        for (let i=0;i<countryList.length;i++){
            d3.select("#selDataset")
                .append("option")
                .text(countryList[i])
                .property("value", countryList[i])
        }

        //plot global data//
        function filter20(job){
            return job.work_year == 2020;
        }
        function filter21(job ){
            return job.work_year == 2021;
        }
        function filter22(job){
            return job.work_year == 2022;
        }
        function filter23(job){
            return job.work_year == 2023;
        }

        let filteredJobs20 = data.filter(filter20)
        let filteredJobs21 = data.filter(filter21)
        let filteredJobs22 = data.filter(filter22)
        let filteredJobs23 = data.filter(filter23)

        var salaries20 = [];
        var salaries21 = [];
        var salaries22 = [];
        var salaries23 = [];

        for (let i=0; i<filteredJobs20.length; i++){
            salaries20.push(filteredJobs20[i].salary_in_usd)
        }
        for (let i=0; i<filteredJobs21.length; i++){
            salaries21.push(filteredJobs21[i].salary_in_usd)
        }
        for (let i=0; i<filteredJobs22.length; i++){
            salaries22.push(filteredJobs22[i].salary_in_usd)
        }
        for (let i=0; i<filteredJobs23.length; i++){
            salaries23.push(filteredJobs23[i].salary_in_usd)
        }

        let avgSal20 = d3.mean(salaries20);
        let avgSal21 = d3.mean(salaries21);
        let avgSal22 = d3.mean(salaries22);
        let avgSal23 = d3.mean(salaries23);

        
        var remote20 = [];
        var remote21 = [];
        var remote22 = [];
        var remote23 = [];

        for (let i=0; i<filteredJobs20.length; i++){
            remote20.push(filteredJobs20[i].remote_ratio)
        };
        for (let i=0; i<filteredJobs21.length; i++){
            remote21.push(filteredJobs21[i].remote_ratio)
        };
        for (let i=0; i<filteredJobs22.length; i++){
            remote22.push(filteredJobs22[i].remote_ratio)
        };
        for (let i=0; i<filteredJobs23.length; i++){
            remote23.push(filteredJobs23[i].remote_ratio)
        };

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

function optionChanged(location){
    if (location == 'All'){
        init()
    }
    else{
        timeCharts(location)
    }
}

init();





//Country Comparison




//Job Title Comparison



