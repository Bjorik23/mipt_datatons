import { Button } from "@mui/material";
import { InputNumber } from "../InputNumber/InputNumber";
import styles from '@/styles/Common.module.css';
import { store } from "@/store/state-logic";
import { useEffect, useState } from "react";
import { InputMode } from "@/enums/modes";
import { RequestSender } from "@/services/request-sender";
import { InputWeekDay } from "../InputWeekDay/InputWeekDay";

export function InputDataModel(){
    let initial = store.getState()['mode'] != InputMode.Manual 
    const [val, updateState] = useState(initial)
    store.subscribe(() =>{
        let st = store.getState()['mode'] != InputMode.Manual
        console.log(val, st)
        updateState(st)
        console.warn(val)
    })

    return val ? <></> : <div className={styles.inputwindow} >
        <InputNumber header={"CO(GT)"} measure={"GT"}/>
        <InputNumber header={"PT08.S1(CO)"} measure={"CO"}/>
        <InputNumber header={"NMHC(GT)"} measure={"GT"}/>
        <InputNumber header={"C6H6(GT)"} measure={"GT"}/>
        <InputNumber header={"PT08.S2(NMHC)	"} measure={"NMHC"}/>
        <InputNumber header={"NOx(GT)"} measure={"GT"}/>
        <InputNumber header={"PT08.S3(NOx)"} measure={"NOx"}/>
        <InputNumber header={"NO2(GT)"} measure={"GT"}/>
        <InputNumber header={"PT08.S4(NO2)"} measure={"NO2"}/>
        <InputNumber header={"PT08.S5(O3)"} measure={"O3"}/>
        <InputNumber header={"T"} measure={""}/>
        <InputNumber header={"RH"} measure={""}/>
        <InputNumber header={"AH"} measure={""}/>
        <Button variant="contained" size="large" onClick={() => (new RequestSender()).sendRequest('knn', [
            {
                pt08Co: 10, 
                nmhc: 5,  
                c6h6: 0.6,  
                pt08Nmhc: 1.2,   
                nox: 0,  
                pt08Nox: 2.6,   
                no2: 10,   
                pt08No2: 1.8,  
                pt08O3: 6.6,     
                t: 2,   
                rh: 3,
                ah: 6.6,  
                weekday: 3,  
                hour :12
            }
        ]).then(x => console.log(x))} className={styles.sendButton}>Send</Button>
    </div>
}