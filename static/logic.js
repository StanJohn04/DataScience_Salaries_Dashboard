// JaveScript code for plotting data goes here
// Time Series
let url = 'http://127.0.0.1:5000/data'
function timeCharts(){
    d3.json(url).then(function(data){
        console.log(data)

        function filterTest(job){
            return job.work_year == 2022;
        }

        let filteredJobs = data.filter(filterTest)

        console.log(filteredJobs)
    })
}



//Country Comparison




//Job Title Comparison



