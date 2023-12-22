from flask import Flask
from flask_cors import CORS
from sklearn.ensemble import RandomForestRegressor
from models_loader import load_models, load_paths
from flask import request
import fields as fs
import pandas as pd

app = Flask(__name__)
CORS(app, origins='*')

paths = load_paths()
models = load_models(paths)

def get_series(data):
    df = pd.DataFrame(columns =[fs.colunms])
    for item in data:
        df.loc[len(df.index)] = [item[fs.ptO8Co],
                                 item[fs.nmhc],
                                 item[fs.c6h6],
                                 item[fs.pt08Nmhc],
                                 item[fs.nox],
                                 item[fs.pt08Nox],
                                 item[fs.no2],
                                 item[fs.pt08No2],
                                 item[fs.pt08O3],
                                 item[fs.t],
                                 item[fs.rh],
                                 item[fs.ah],
                                 item[fs.weekday],
                                 item[fs.hour]] 
    
    return df
        

@app.route('/predict', methods=['POST'])
def predict():
    js = request.json
    series = get_series(js['series'])
    res = models[js['model']].predict(series)
    return list(res)

@app.route('/predict-from-all', methods=['POST'])
def full_predict():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=5000)