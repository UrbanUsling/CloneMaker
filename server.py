import os
import sys
from logging import basicConfig, INFO, getLogger
from typing import Any
from flask import Flask, render_template

app = Flask(__name__)

# Define a route for the root path
#@app.route("/")
#def home():
#    return render_template("index.html")

# Define a route for "/presentkort"
@app.route("/presentkort")
def giftcards():
    return render_template("presentkort.html")

if __name__ == "__main__":
    app.run(debug=True)