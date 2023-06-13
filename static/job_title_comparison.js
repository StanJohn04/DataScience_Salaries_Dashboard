// JaveScript code for plotting data goes here
//Job Title Comparison
// save url to access Flask API
var jobTitlesURL = 'http://127.0.0.1:5000/job_title_data'
​
//function that plots two bar charts
function titleCharts(){
    // read in data from API
    d3.json(jobTitlesURL).then(function(data){
        console.log(data)
​
        //set plotting variables
        var labels = [];
        var salaries = [];
        var remote = [];
​
        //loop through data and store values in lists
        for (let i = 0; i<data.length; i++){
            labels.push(data[i].job_title);
            salaries.push(data[i].salary_in_usd);
            remote.push(data[i].remote_ratio)
        }
​
        //plot salaries
         let bar1Data = {
          // ...
          marker: {
            color: 'rgb(55, 128, 191)',
            opacity: 0.7,
            line: {
              color: 'rgb(8, 48, 107)',
              width: 1.5
            }
          },
          hovertemplate: '%{text}<br>Salary: $%{y}',
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
            // title: "Salaries Comparison",
            barmode: 'group',
            legend: {
              x: 0.5,
              y: 1.0,
              bgcolor: 'rgba(255, 255, 255, 0.5)',
              bordercolor: 'rgba(0, 0, 0, 0.5)',
              borderwidth: 1
            }
          };
​
        Plotly.newPlot("bar1", [bar1Data], bar1Layout)
​
        //plot remote work
        let bar2Data = {
          // ...
          marker: {
            color: 'rgb(219, 64, 82)',
            opacity: 0.7, 
            line: {
              color: 'rgb(126, 22, 37)',
              width: 1.5
            }
          },
          hovertemplate: '%{text}<br>Remote Work Ratio: %{y}%'
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
            // title: "Remote Work Comparison",
            barmode: 'group',
            legend: {
              x: 1.0,
              y: 0.5,
              bgcolor: 'rgba(255, 255, 255, 0.5)',
              bordercolor: 'rgba(0, 0, 0, 0.5)',
              borderwidth: 1
            }
          };
​
        Plotly.newPlot("bar2", [bar2Data], bar2Layout)
​
    })
    } //titleCharts end
​
titleCharts();