import { Direction, FormControlLabel, Radio, RadioGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { PredictModels } from "@/enums/predict-models";
import React from "react";
import { predictModelChanged, store } from "@/store/state-logic";
import * as predictors from '@/constants/prediction-model'
import styles from '@/styles/Common.module.css'

export function PredictModelSelector(){

    const [value, setValue] = React.useState(PredictModels.Boosting);
  
    const handleRadioChange = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      let val = Number.parseInt((event.target as HTMLInputElement).value)
      setValue(val);
      store.dispatch(predictModelChanged({predictModel: val}))
      console.warn(store.getState())
    };
    return <ToggleButtonGroup
        className={styles.predictMode}
        defaultValue={PredictModels.Boosting}
        onChange={handleRadioChange}>
            <ToggleButton 
                className={styles.button}
                value={PredictModels.Boosting} 
                selected={value == PredictModels.Boosting}>
                    {predictors.Boosting}
            </ToggleButton>
            <ToggleButton 
                className={styles.button}
                value={PredictModels.Forest} 
                selected={value == PredictModels.Forest}>
                    {predictors.Forest}
            </ToggleButton>
            <ToggleButton 
                className={styles.button}
                value={PredictModels.Knn}
                selected={value == PredictModels.Knn}>
                    {predictors.Knn}
            </ToggleButton>
            <ToggleButton 
                className={styles.button}
                value={PredictModels.Lasso } 
                selected={value == PredictModels.Lasso}> 
                    {predictors.Lasso}
            </ToggleButton>
            <ToggleButton 
                className={styles.button}
                value={PredictModels.Linear } 
                selected ={value == PredictModels.Linear}>
                    {predictors.Linear}
            </ToggleButton>
  </ToggleButtonGroup>
}