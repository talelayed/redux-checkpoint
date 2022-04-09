import { ADDTODO } from "./actionTypes"

export const addToDo = (id,toDo,isDone) =>{
    return({
        type: ADDTODO,
        id:id,
        toDo:toDo,
        isDone:isDone
    })
}