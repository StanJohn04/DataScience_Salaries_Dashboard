# Project Proposal
Design a interactive dashboard that explores a data scientist salaries dataset from a source such as kaggle.com. Some questions we will ask of the data are: How has average salary changed overtime? Which countries have highest paying data science jobs? Is remote work increasing/decreasing over time? Which countries have the most remote work available?
# How To Use
Instructions for Using the Interactive Dashboard:
* Download the project files, which include the Python script file (data.py) and the HTML file (index.html).
Open the file in VSCode.
* Run the Python script file called data.py. Open your terminal window within VSCode and you should see that the server has started, it should say “Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)”. Control click that link within your VSCode terminal to open it in a webpage. Feel free to browse the data we used by clicking the links on the webpage.
* With the Python script running you are ready to access the HTML file. Run the HTML file and it will open in a new webage window. On the main page, you will see buttons labeled "Map," "Time Series," "Country Comparison," and "Job Title Comparison." Click on any of these buttons to explore different aspects of the data.
* Each button will take you to a new page with interactive visualizations related to the selected category. You can interact with the charts, maps, and comparisons to gain insights into data science salaries.
* Feel free to navigate between different pages and explore various features of the dashboard.
* When you are finished using the dashboard, you can close the web browser and stop the Python script by going back to the command prompt or terminal window and pressing Ctrl+C.
* Just remember to run the Python script before accessing the HTML file to ensure the proper functioning of the interactive dashboard.
*Enjoy exploring our interactive data science salary dashboard!

# Mapping Data Science Salaries
![image](https://github.com/StanJohn04/project3/assets/11607777/729f739e-2588-4563-8d3b-add358d1b1bf)
This report provides an analysis of company locations and average salaries based on the data obtained from two API endpoints: country_url and location_url. The report utilizes the D3.js library for data retrieval and Leaflet.js library for data visualization.
Data Retrieval:

The country_url endpoint provides information about company locations, including the country name, latitude, longitude, average salary in USD, and remote work ratio.
The location_url endpoint provides geographical data, including latitude and longitude, for each country.
Data Visualization:

The Leaflet.js library is used to create an interactive map to visualize the data.
Two base map layers are added: "Street" and "Topography".
Two overlay layers are added: "Average Salaries" and "Remote Ratio".
The map is initialized with a center coordinate and zoom level.
The map layers and overlays are added to the map using the L.control.layers function.


# Data Science Salaries over time
 * A time series analysis allows us to visualize the data over time.
 * Our data ranges from 2020 up until the beginning of 2023
 ### Charts
![image](https://github.com/StanJohn04/project3/assets/121142680/5449879f-eb8b-49e0-8536-d4679c073ec5)
![image](https://github.com/StanJohn04/project3/assets/121142680/a593736d-fe35-4bad-af33-e9f0af6f16d1)
![image](https://github.com/StanJohn04/project3/assets/121142680/a5cd5064-3415-4bb6-bdf8-a1cc931b3494)
* Both line graphs are interactive and will update their data depending on the selected country
* As the charts show, the overall trend is supports an increase in average salary overtime and a decrease in remote work opportunities
* The bar chart shows a comparison of the change in salaries from 2020-2023
  * Only countries with data entries in 2020 and 2023 are included in the bar chart
  * Canada has the larget increase in salary ($82,944), while Germany had the largest decrease ($35,022)

# By Country
* Comparison of average data science salaries and all included job positions per country

* The top chart shows the straight average salary comparison per country and the bottom bubble chart shows the average salaries per country, but adds in how many salaries were compared.

* Israel has the top average job salary, but only has 2 salaries included in the data set

* The US tops the list with the number of jobs that we're in our data set.


<img width="1196" alt="Screen Shot 2023-06-12 at 7 12 02 PM" src="https://github.com/StanJohn04/project3/assets/124820451/36cc7b66-732a-4056-aacf-12c97e4b1796">


<img width="1137" alt="Screen Shot 2023-06-12 at 7 11 47 PM" src="https://github.com/StanJohn04/project3/assets/124820451/f72da918-3cac-41e2-a3ef-75d3605ec180">


# By Job Title

* Base on the chart shown below, Data Science Tech Lead have the highest salary among other job title with $375k and the lowest salary is Power BI Developer with $5409. This visualization show us the the salary for each job title.

![newplot](https://github.com/StanJohn04/project3/assets/120751287/1a1849a7-80a8-4100-a6ed-86f237ba795c)

* This visualization show us the job title with the remote work percentage.

![newplot (1)](https://github.com/StanJohn04/project3/assets/120751287/f495a39f-1627-4023-ba68-c32f812ae516)

# Toolkit
 * Dependencies used for this project:
 
   Python Libraries -
    * sqlite3
    * flask
      * Flask, jsonify
    * flask_cors
      * CORS
      
   JavaScript Libraries -
    * d3.js
    * plotly.js
    * chart.js
    * leaflet.js
    * bootstrap v3.3.7

# Flask API
* The Flask API is set up in the data.py file and is responsible for providing the data that the HTML file can request and display. Here's how it works:
* The Python file sets up a Flask application using the Flask framework. This application acts as a web server that can receive HTTP requests and provide responses.
* Within the Flask application, we defined a few routes to take us to different endpoints. The first route “/home” takes us to a home page with links that lead to different sets of the data we used. For example, one link takes us to the country data, one takes us to the job title data and so on. The “/home” route has some HTML code written in to format the links in a user friendly way on the home page. 
* Inside each route, it connects to an SQLite database, retrieves data using SQL queries and then returns it as JSON responses. The team members can then pull the data in JSON format to use in their visualizations.
* So basically the Python Flask application serves as the backend server that provides the requested data to the HTML file.

# Next Steps
  * A larger, more diverse dataset should be used to further explore data science salaries
  * More in depth analysis on how experience levels affect salary and remote work opportunities
  * Perhaps train a machine learning algorithm to predict salary based on job title, experience level, and location
# Team Members
  * [Stan Johnson](https://github.com/StanJohn04)
  * [Brian Haynes](https://github.com/brianphaynes)
  * [Jennasis Escobar](https://github.com/jenntruly)
  * [Kelsey Abbey](https://github.com/kelseyabbey)
  * [Toan Nguyen](https://github.com/Toan88Nguyen)


