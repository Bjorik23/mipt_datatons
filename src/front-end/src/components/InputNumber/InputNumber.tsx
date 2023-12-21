import { FormControl, FormHelperText, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import { IInputNumberProps } from "./props";
import styles from '@/styles/InputNumber.module.css'

export function InputNumber(props: IInputNumberProps){
    return <FormControl className={styles.inputRow} variant="outlined">
      <FormHelperText className={styles.font}>{props.header}</FormHelperText>
      <OutlinedInput
        className={styles.font}
        startAdornment={<InputAdornment className={styles.adornment} position="start">{props.measure}</InputAdornment>}/>
  </FormControl>
}