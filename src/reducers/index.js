import * as actions from '../action/ActionTypes'

const initalState = {
    note: ["note1"]
}


export default function notes(state=initalState,action){
    switch(action.type){
        case actions.ADD_NOTE :
            console.log("ADD NOTE");
            return {
                ...state,
                note:[
                    ...state.note,
                    action.value
                ]
            }
        case actions.EDIT_NOTE:
            // const existingNote = state.find((element, index) => index === action.index)
            state.note[action.index] = action.value
            return {
                ...state,
                ...state.note,
            } 
        case actions.DELETE_NOTE:  
            return {
                ...state,
                note: state.note.filter((element, index)=>action.index != index)
            } 

        default:
            return state 
    }
          
}