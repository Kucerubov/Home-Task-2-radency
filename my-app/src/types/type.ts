export interface NoteState {
    id: string,
    name: string,
    created: string,
    category: string,
    content: string,
    dates: null | string,
    archived: boolean
}

export interface NoteAction {
    type: string,
    payload?: any
}

export enum NoteActionsTypes {
    ADD_NOTE = "ADD_NOTE",
    REMOVE_NOTE = "REMOVE_NOTE",
    ARCHIVE_STATE_CHANGE = "ARCHIVE_STATE_CHANGE",
    EDIT_NOTE = "EDIT_NOTE"
}

interface TablePropsTypes {
 category: string,
 activeCount: number,
 archivedCount: number,
}

export interface TableProps {
    data: (NoteState | TablePropsTypes)[];
    isNotesTable: boolean;
}