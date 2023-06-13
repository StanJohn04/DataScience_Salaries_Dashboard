import sqlite3
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    # Print request received to the terminal
    print("Server received request for index route")
    return """
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                text-align: center;
                padding-top: 100px;
            }
            
            h1 {
                font-size: 45px;
                color: #333;
                margin-bottom: 20px;
            }
            
            p {
                font-size: 25px;
                color: #666;
                line-height: 1.5;
            }
            
            a {
                color: #0066cc;
                text-decoration: none;
            }
            
            a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to our Project!</h1>
        <p>Click this link: <a href="http://127.0.0.1:5000/data">http://127.0.0.1:5000/data</a> to access our data</p>
        <p>Click this link: <a href="http://127.0.0.1:5000/country_data">http://127.0.0.1:5000/country_data</a> to access country data</p>
        <p>Click this link: <a href="http://127.0.0.1:5000/country_locations">http://127.0.0.1:5000/country_locations</a> to access country locations</p>
        <p>Click this link: <a href="http://127.0.0.1:5000/job_title">http://127.0.0.1:5000/job_title</a> to access job title data</p>
    </body>
    </html>
    """


@app.route('/data', methods=['GET'])
def get_data():
    conn = sqlite3.connect("Database/my_data.db")
    c = conn.cursor()
    data = c.execute('''SELECT * FROM data_salaries''').fetchall()
    conn.close()

    # Convert the data to a list of dictionaries
    column_names = [description[0] for description in c.description]
    data_dict = [dict(zip(column_names, row)) for row in data]

    # Return the data as JSON
    return jsonify(data_dict)

@app.route('/country_data', methods=['GET'])
def get_country_data():
    conn = sqlite3.connect("Database/my_data.db")
    c = conn.cursor()
    data = c.execute('''Select company_location, AVG(salary_in_usd) AS 'salary_in_usd',AVG(remote_ratio) AS 'remote_ratio', COUNT(company_location) as 'count' FROM data_salaries GROUP BY company_location''').fetchall()
    conn.close()

    # Convert the data to a list of dictionaries
    column_names = [description[0] for description in c.description]
    data_dict = [dict(zip(column_names, row)) for row in data]

    # Return the data as JSON
    return jsonify(data_dict)


# route for country location data
@app.route('/country_locations', methods=['GET'])
def get_country_locations():
    conn = sqlite3.connect("Database/my_data.db")
    c = conn.cursor()
    data = c.execute('''SELECT * FROM country_locations''').fetchall()
    conn.close()

    # Convert the data to a list of dictionaries
    column_names = [description[0] for description in c.description]
    data_dict = [dict(zip(column_names, row)) for row in data]

    # Return the data as JSON
    return jsonify(data_dict)


# route for job title data
@app.route('/job_title', methods=['GET'])
def get_job_title():
    conn = sqlite3.connect("Database/my_data.db")
    c = conn.cursor()
    data = c.execute('''Select job_title, AVG(salary_in_usd) AS 'salary_in_usd',AVG(remote_ratio) AS 'remote_ratio', COUNT(job_title) as 'count' FROM data_salaries GROUP BY job_title''').fetchall()
    conn.close()

    # Convert the data to a list of dictionaries
    column_names = [description[0] for description in c.description]
    data_dict = [dict(zip(column_names, row)) for row in data]

    # Return the data as JSON
    return jsonify(data_dict)



if __name__ == '__main__':
    app.run()
