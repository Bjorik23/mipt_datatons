import { FormHelperText, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

export function InputWeekDay(){
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    };
    return <div>
        <FormHelperText>Hour</FormHelperText>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}>
        {}
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
    </Select>
   </div> 
}