import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch,useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {filterToDo} from '../actions/filterToDo'
import { addToDo } from '../actions/addToDo';
import  { useRef } from 'react'

export default function AddTask(){
    const dispatch = useDispatch()
    const descRef = useRef()
    return (
        <div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <h2>add ToDo</h2>
            <TextField inputRef={descRef} label="Outlined secondary" color="secondary" focused />
            <Button onClick={()=>dispatch(addToDo("122",descRef.current.value,false))} color="secondary" variant="contained">add ToDo</Button>
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <h2>filter</h2>
            <FormControl fullWidth>
  <InputLabel style={{width : "100px"}} id="demo-simple-select-label">filter</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    onChange={()=>dispatch(filterToDo())}
    label="Age"
    >
        {/*value={done}  */}
    <MenuItem value={true}>isDone</MenuItem>
    <MenuItem value={false}>notDone</MenuItem>
  </Select>
</FormControl>
            </div>
        </div>
    )
}