import { InputMode } from "@/enums/modes"
import { PredictModels } from "@/enums/predict-models"
import { createSlice, configureStore } from '@reduxjs/toolkit'

let initList: any[] =[]
const counterSlice = createSlice({
  name: 'prediction_monitor',
  initialState: {
    mode: InputMode.Manual,
    predictModel: PredictModels.Boosting,
    inputs: initList
  },
  reducers: {
    modeChanged: (state, params) => {
      state.mode = params.payload['mode']
      console.log('mode changed', state.mode)
    },
    predictModelChanged: (state, params) => {
      state.predictModel = params.payload['predictModel']
    },
    addedInput:(state, params)=>{
      state.inputs.push(params.payload['input'])
    },
    addedInputs:(state, params)=>{
        state.inputs.push(params.payload['inputs'])
      },
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})
const { modeChanged, predictModelChanged, addedInput, addedInputs } = counterSlice.actions
export {store, modeChanged, predictModelChanged, addedInput, addedInputs}


// Can still subscribe to the store
//store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
//store.dispatch(fileUploaded({name :'aaa'}))
// {value: 1}
//store.dispatch(incremented())
// {value: 2}
//store.dispatch(decremented())
// {value: 1}