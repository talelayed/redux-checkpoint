import { List } from "@mui/material";
import { useSelector } from 'react-redux';
import Task from "./task";

export default function TaskList(){
    const list = useSelector(state=>state.addToDoReducer)
    return (
        <div style={{display:"grid",gridTemplateColumns:"1fr",gridRowGap:"10px",margin:"auto",paddingTop:"30px",width:"80%"}}>
            {
                list.map((elt,key) => <Task  key={key} toDo = {elt.toDo} id={elt.id} isDone={elt.isDone}/>)
            }
        </div>
    )
}