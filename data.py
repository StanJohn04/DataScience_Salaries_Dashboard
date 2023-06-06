import sqlite3
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    #print request recieved to terminal
    print(f"Server recieved request for index route")
    return "It worked!"

@app.route('/data', methods=['GET'])
def get_data():
    conn = sqlite3.connect("my_data.db")
    c = conn.cursor()
    data = c.execute('''SELECT * FROM data_salaries''').fetchall()
    conn.close()

    # Convert the data to a list of dictionaries
    column_names = [description[0] for description in c.description]
    data_dict = [dict(zip(column_names, row)) for row in data]

    # Return the data as JSON
    return jsonify(data_dict)

if __name__ == '__main__':
    app.run()
