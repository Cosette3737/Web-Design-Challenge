from flask import Flask, render_template, jsonify, request
import pickle
import requests
import numpy as np
import sklearn
import xgboost
from xgboost import XGBClassifier as xgb
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, desc
import sqlalchemy.dialects.sqlite
import datetime as dt
import pandas as pd
import os

app = Flask(__name__, 
            static_folder='static',
            template_folder='templates')

#load the ml model which we have saved earlier in .pkl format            
model = pickle.load(open('finalized_model.sav', 'rb'))

@app.route('/')
def home():
    return render_template('index1.html')

@app.route('/tool')
def tool():
    return render_template('tool.html')

#define the route for post request method 
@app.route("/predict", methods=['POST'])

#define the predict function which is going to predict the results from ml model based on the given values through html form
def predict():
    if request.method == 'POST':
        Texture = float(request.form['Texture'])
        Area = float(request.form['Area'])
        Concave = float(request.form['Concave'])
        Smoothness = float(request.form['Smoothness'])
        Symmetry = float(request.form['Symmetry'])
        Concavity = float(request.form['Concavity'])
        Compactness = float(request.form['Compactness'])
        Fractal_Dimension = float(request.form['Fractal_Dimension'])
        Radius = float(request.form['Radius'])
        Perimeter = float(request.form['Perimeter'])
        
      
    # open file pickle.load x and y
    new_data1 = [[Texture, Area, Concave, Smoothness, Symmetry, Concavity, Compactness, Fractal_Dimension, Radius, Perimeter]]
    model = pickle.load(open("finalized_model.sav", "rb"))
    prediction = (model.predict(np.array(new_data1)))
    print(prediction)
    output = []
    if prediction == 0: 
        output = "These clinical features suggest malignancy, follow up needed."
    else:
        output = "These clinical features suggest a benign lesion"

   
    print (output)


    if output:           #condition for invalid values
       return render_template('tool.html', prediction_text = (output))
        
    #html form to be displayed on screen when no values are inserted; without any output or prediction
    else:
        return render_template('tool.html')

@app.route('/explore')
def explore():
    return render_template('explore.html')

@app.route('/bio')
def bio():
    return render_template('bio2.html') 


@app.route('/data')
def data():
    return render_template('data.html')



if __name__ == '__main__':
    #app.run(debug = True)
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)