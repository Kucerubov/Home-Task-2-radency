import React from 'react';
import NoteList from "./NoteList";
import {Button} from "@mui/material";
import useNoteAndCategoryData from "../hooks/useNoteAndCategoryData";
import {buttonShowNotes, buttonStylesBetweenTables} from "./styles/NoteAndCategoryTableStyle";

const NoteAndCategoryTable = () => {

    const {combinedData, filteredNotes, showArchived, toggleArchived, handleAddNote } = useNoteAndCategoryData();

    return (
        <>
            <div>
                <NoteList data={filteredNotes} isNotesTable={true}/>
                <div style={buttonStylesBetweenTables}>
                    <div>
                        <Button onClick={toggleArchived} variant="outlined" style={buttonShowNotes}>
                            {showArchived ? 'Show Active Notes' : 'Show Archived Notes'}
                        </Button>
                        <Button onClick={handleAddNote} variant="outlined">
                            Add Note
                        </Button>
                    </div>
                </div>
                <NoteList data={combinedData} isNotesTable={false} />
            </div>
        </>
    );
};

export default NoteAndCategoryTable;