import { Fields } from '@/constants/fields-order';
import { Input } from '@/data-models/input';
import { InputMode } from '@/enums/modes';
import { store } from '@/store/state-logic';
import stylesSheet from '@/styles/Common.module.css'
import styles from '@/components/SelectFile/SelectFile.module.css'
import next from 'next';
import React, { CSSProperties, useState } from 'react';

import { useCSVReader } from 'react-papaparse';
import { Button } from '@mui/material';
import { useFilePicker } from 'use-file-picker';
import Papa from 'papaparse';


export default function CSVReader() {
    let initial = store.getState()['mode'] != InputMode.FromFile 
    const [val, updateState] = useState(initial)
    store.subscribe(() =>{
        let st = store.getState()['mode'] != InputMode.FromFile
        console.log(val, st)
        updateState(st)
        console.warn(val)
    })
    const { openFilePicker, filesContent, loading, errors, plainFiles, clear } = useFilePicker({
        accept: '.csv',
        multiple: false,
        onFilesSelected: ({ plainFiles, filesContent, errors }) => {
            console.log(filesContent)
            let a =Papa.parse(filesContent[0].content)
            console.log(a.data)
          }
      });

    return val ? <></> : <div className={stylesSheet.inputwindow}>
        <Button onClick={() => openFilePicker()}>Select files</Button>
      <br />
    </div>
}