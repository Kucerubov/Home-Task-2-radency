import {NoteActionsTypes, NoteState} from "../../types/type";
export const removeNoteAction = (payload: NoteState) => ({type: NoteActionsTypes.REMOVE_NOTE, payload})

export const changeArhivedNoteAction = (payload: NoteState) => ({type: NoteActionsTypes.ARCHIVE_STATE_CHANGE, payload})

export const editNoteAction = (payload: NoteState) => ({type: NoteActionsTypes.EDIT_NOTE, payload});