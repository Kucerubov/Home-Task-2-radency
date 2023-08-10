import React from 'react';
import NoteList from "./NoteList";
import useNoteAndCategoryData from "../hooks/useNoteAndCategoryData";

const NoteAndCategoryTable = () => {
    const {combinedData, filteredNotes, showArchived, toggleArchived, handleAddNote } = useNoteAndCategoryData();

    return (
        <>
            <div className="flex flex-col m-10">
                <NoteList data={filteredNotes} isNotesTable={true} />
                <div className="flex justify-end items-center mt-4 mb-4 space-x-2 px-4">
                    <button
                        onClick={toggleArchived}
                        className="border rounded py-1 px-3 text-sm focus:outline-none"
                    >
                        {showArchived ? 'Show Active Notes' : 'Show Archived Notes'}
                    </button>
                    <button
                        onClick={handleAddNote}
                        className="border rounded py-1 px-3 text-sm focus:outline-none"
                    >
                        Add Note
                    </button>
                </div>
                <NoteList data={combinedData} isNotesTable={false} />
            </div>
        </>
    );
};

export default NoteAndCategoryTable;