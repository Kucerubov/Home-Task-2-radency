import React from 'react';
import NoteList from "./NoteList";
import {Button} from "@mui/material";
import useNoteAndCategoryData from "../hooks/useNoteAndCategoryData";

const NoteAndCategoryTable = () => {

    const {combinedData, filteredNotes, showArchived, toggleArchived, handleAddNote } = useNoteAndCategoryData();

    return (
        <>
            <div>
                <NoteList data={filteredNotes} isNotesTable={true}/>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '10px'}}>
                    <div>
                        <Button onClick={toggleArchived} variant="outlined" style={{marginRight: '10px'}}>
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