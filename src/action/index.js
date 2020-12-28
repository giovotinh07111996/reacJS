import * as actions from './ActionTypes'

export const ADD_NOTE = (value) => ({
    type:actions.ADD_NOTE,value
})

export const EDIT_NOTE = (index, value) => ({
    type:actions.EDIT_NOTE,index,value
})
export const DELETE_NOTE = (index) => ({
    type:actions.DELETE_NOTE,index
})