import * as types from './ActionTypes'

export const addNote = value => ({type: types.ADD_NOTE, value});
export const edtNote = (index,value) => ({type: types.EDIT_NOTE, index,value});
export const deleteNote = (index) => ({type: types.DELETE_NOTE, index});