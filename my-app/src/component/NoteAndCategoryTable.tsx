import React from 'react';
import NoteList from "./NoteList";
import {Button} from "@mui/material";
import useNoteAndCategoryData from "../hooks/useNoteAndCategoryData";


const NoteAndCategoryTable = () => {

    const {combinedData, filteredNotes, showArchived, toggleArchived, handleAddNote } = useNoteAndCategoryData();

    return (
        <>
            <div>
                <h2>Notes Table</h2>
                <NoteList data={filteredNotes} isNotesTable={true}/>
                <Button onClick={toggleArchived}>
                    {showArchived ? 'Show Active Notes' : 'Show Archived Notes'}
                </Button>
                <Button onClick={handleAddNote}>
                    Add Note
                </Button>
                <h2>Category Table</h2>
                <NoteList data={combinedData} isNotesTable={false} />
            </div>
        </>
    );
};

export default NoteAndCategoryTable;