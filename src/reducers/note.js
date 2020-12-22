import {
    ADD_NOTE,
    EDIT_NOTE,
    DELETE_NOTE
} from '../actions/ActionTypes'

const initialState =  {
    notes: ["Test"]
}

export default function notes(state=initialState,action){
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    action.value
                ]
            }
            break;
        case EDIT_NOTE:
            const notes = [ ...state.notes ];
            notes[action.index] = action.value;
            return {
                ...state,
                notes,
            }
            break;
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note, index)=>action.index != index)
            }
            break;
    
        default:
            return state
            break;
    }
}