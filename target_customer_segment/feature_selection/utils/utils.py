import torch.nn as nn
import pandas as pd
import pickle


# Определение модели
class Encoder(nn.Module):
    def __init__(self, num_input_features, num_output_features):
        super(Encoder, self).__init__()
        self.fc1 = nn.Linear(num_input_features, num_input_features//2)
        self.relu = nn.ReLU()
        self.batch_norm = nn.BatchNorm1d(num_input_features//2)
        self.fc2 = nn.Linear(num_input_features//2, num_output_features)
    
    def forward(self, x):
        x = self.batch_norm(self.relu(self.fc1(x)))
        x = self.fc2(x)
        return x

class Decoder(nn.Module):
    def __init__(self, num_input_features, num_output_features):
        super(Decoder, self).__init__()
        self.fc1 = nn.Linear(num_input_features, num_input_features*2)
        self.relu = nn.ReLU()
        self.batch_norm = nn.BatchNorm1d(num_input_features*2)
        self.fc2 = nn.Linear(num_input_features*2, num_output_features)
    
    def forward(self, x):
        x = self.batch_norm(self.relu(self.fc1(x)))
        x = self.fc2(x)
        return x
 

def categorize_table(behaviour):
    '''
    Функция добавляет новые признаки в таблицу behaviour_2023_preprocessed.csv
    (номер месяца, призднак праздничного дня, призднак выходного дня)
    Категориальные признаки становятся типо "categories".
        behaviour - pd.DataFrame

        return pd.DataFrame - таблица с новыми признаками и столбцами, преобразованными в категории
    '''

    holidays = {'01-01', '01-02', '01-03', '01-04', '01-05', '01-06',
                '01-07', '01-08', '02-23', '03-08', '05-01',
                '05-08', '05-09', '06-12', '11-06', '12-31'}

    behaviour.loc[:, 'OKVED'] = behaviour['OKVED'].map(lambda x: 0 if pd.isna(x) else x) #.astype("category")
    behaviour.loc[:, 'ActivityArea'] = behaviour['ActivityArea'].map(lambda x: 0 if pd.isna(x) else x+1) #.astype("category")
    behaviour = behaviour.fillna(0)
    behaviour.loc[:, 'OKVED']  = behaviour.loc[:, 'OKVED'].astype("category")
    behaviour.loc[:, 'ActivityArea'] = behaviour.loc[:, 'ActivityArea'].astype("category")


    behaviour.loc[:, 'UnitTypeCategory'] =  behaviour.loc[:,'UnitTypeCategory'].astype("category")
    behaviour.loc[:, 'Service'] =  behaviour.loc[:,'Service'].map(lambda x: x + 1 if x!=0 else x).astype("category") #Nan это категория 0, остальные категории смещаются на + 1
    behaviour.loc[:, 'Support'] =  behaviour.loc[:,'Support'].map(lambda x: x + 1 if x!=0 else x).astype("category") #Nan это категория 0, остальные категории смещаются на + 1
    behaviour.loc[:, 'TransportationType'] =  behaviour.loc[:,'TransportationType'].map(lambda x: x + 1 if x!=0 else x).astype("category") #Nan это категория 0, остальные категории смещаются на + 1
    behaviour.loc[:, 'ResponseDays'] =  behaviour.loc[:,'ResponseDays'].map(lambda x:x + 1 if x!=0 else x)  #заменяем Nan на 0

    behaviour.loc[:, 'BeginMonth'] = pd.to_datetime( behaviour.loc[:,'BeginDate']).dt.month.astype("category")
    behaviour.loc[:, 'EndMonth']  = pd.to_datetime( behaviour.loc[:,'EndDate']).dt.month.astype("category")

    behaviour.loc[:, 'IsHoliday'] = behaviour.BeginDate.str.slice(5).map(lambda x: 1 if x in holidays else 0).astype("category")
    behaviour.loc[:, 'IsWeekend'] = pd.to_datetime(behaviour.BeginDate).dt.day_of_week.map(lambda x: 1 if x == 6 else 0).astype("category")

    behaviour = behaviour.drop(['BeginDate', 'EndDate', 'BeginQuarter', 'EndQuarter', 'Unnamed: 0'], axis = 1)

    return behaviour



    
    
    
    
    