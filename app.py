from flask import Flask, render_template, jsonify, request
import pickle
import requests
import numpy as numpy
import sklearn
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

@app.route('/index')
def home():
    return render_template('index.html')

@app.route('/tool')
def home():
    return render_template('tool.html')

#define the route for post request method 
@app.route("/predict", methods=['POST'])

#define the predict function which is going to predict the results from ml model based on the given values through html form
def predict():
    if request.method == 'POST':
        Texture = float(request.form['Texture'])
        Area = float(request.form['Area'])
        Concave = request.form['Concave']
        Smoothness = float(request.form['Smoothness'])
        Symmetry = float(request.form['Symmetry'])
        Texture = float(request.form['Texture'])
        Concavity = float(request.form['Concavity'])
        Compactness = float(request.form['Compactness'])
        Fractal_Dimension = float(request.form['Fractal_Dimension'])
        Radius = float(request.form['Radius'])
        Perimeter = float(request.form['Perimeter'])

      
    # open file pickle.load x and y
    new_data = [[Texture, Area, Concave, Smoothness, Symmetry, Texture, Concavity, Compactness, Fractal_Dimension, Radius, Perimeter]]
    
    # apply x scaler to xdata
    model = pickle.load(open("finalized_model.sav", "rb"))

    print(new_data)
    prediction = (model.predict(new_data))
    print(prediction)
    # apply y scaler.inverse transform
    output = round(prediction[0],2)

   
    print (output)


    if output:           #condition for invalid values
        return render_template('tool.html', prediction_text ="These diagnostic features indicate".format(output))
        
    #html form to be displayed on screen when no values are inserted; without any output or prediction
    else:
        return render_template('tool.html')

@app.route('/explore')
def explore():
    return render_template('explore.html')

@app.route('/bio')
def bio():
    return render_template('bio.html') 


@app.route('/data', methods='GET')
def breast_data():
    return render_template('data.html')



if __name__ == '__main__':
    # app.run(debug=True)
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)