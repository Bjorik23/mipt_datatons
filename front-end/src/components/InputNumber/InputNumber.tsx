import { FormControl, FormHelperText, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import { IInputNumberProps } from "./props";
import styles from '@/styles/InputNumber.module.css'
import { useState } from "react";

export function InputNumber(props: IInputNumberProps){
  const [number, setNumber] = useState(0);
  const [isModified, setModified] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    console.log(event.target)
    setNumber(Number.parseInt(event.target.value));
    setModified(true)
    props.numberUpdated(Number.parseInt(event.target.value))
  };
    return <TextField
    id="outlined-number"
    label={isModified ? isNaN(number) ? "Must be Filled" :  props.header: ""}
    type="number"
    placeholder={props.header}
    error={isModified && isNaN(number)}
    onChange={handleChange}
    className={styles.inputRow}
    InputLabelProps={{
      shrink: true,
    }}
  />
}