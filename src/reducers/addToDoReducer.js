import { ADDTODO } from "../actions/actionTypes";

const initState = [
    {id:"1",toDo : "homeWork",isDone:false}
]
export const addToDoReducer = (state = initState , action)=>{
    switch (action.type){
        case (ADDTODO):
            return ([...state,{id:action.id,toDo : action.toDo,isDone:action.isDone}])
        default: return state
    }
}