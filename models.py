import pandas as pd
from sklearn.model_selection import train_test_split

df = pd.read_csv('AirQuality.csv', sep = ';')

df = df.loc[:, ['Date', 'Time', 'CO(GT)', 'PT08.S1(CO)', 'NMHC(GT)', 'C6H6(GT)',
       'PT08.S2(NMHC)', 'NOx(GT)', 'PT08.S3(NOx)', 'NO2(GT)', 'PT08.S4(NO2)',
       'PT08.S5(O3)', 'T', 'RH', 'AH']]
df = df.applymap(lambda x: None if x in ['-200.0', '-200'] else x)
df.dropna(axis=0, inplace = True)

df.head()

df['Date'] = pd.to_datetime(df['Date'])
df['weekday'] = df['Date'].dt.weekday

df['hour'] = pd.to_datetime(df['Time'], format='%H.%M.%S').dt.hour

df.drop(['Date', 'Time'], axis = 1,  inplace = True)


def comma_to_dot(string):
    if ',' in string:
        string = string.replace(',', '.')
    return string

df['CO(GT)'] = df['CO(GT)'].apply(comma_to_dot)
df['T'] = df['T'].apply(comma_to_dot)
df['RH'] = df['RH'].apply(comma_to_dot)
df['AH'] = df['AH'].apply(comma_to_dot)
df['C6H6(GT)'] = df['C6H6(GT)'].apply(comma_to_dot)



y = df['CO(GT)'].astype(float)
x = df.loc[:, 'PT08.S1(CO)' : 'hour'].astype(float)
x.info()

X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.1, random_state=42)

from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_absolute_error
lin_model = LinearRegression()
lin_model.fit(X_train, y_train)
y_pred = lin_model.predict(X_test)
r2_score(y_test, y_pred)
mean_absolute_error(y_test, y_pred)


from sklearn.ensemble import RandomForestRegressor
regr = RandomForestRegressor(max_depth=2, max_features = 'sqrt', random_state=0)
regr.fit(X_train, y_train)
y_pred = regr.predict(X_test)
r2_score(y_test, y_pred)
mean_absolute_error(y_test, y_pred)


import matplotlib.pyplot as plt 
import seaborn as sns



import pickle 
filename = 'random_forest.sav'
pickle.dump(regr, open(filename, 'wb')) 
