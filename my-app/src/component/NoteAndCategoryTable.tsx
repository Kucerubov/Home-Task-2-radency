import React from 'react';
import NoteList from "./NoteList";
import {useSelector} from "react-redux";
import {NoteState} from "../types/type";

const NoteAndCategoryTable = () => {

    const notesState = useSelector((state: { notes: NoteState[] }) => state.notes);
    const categoryData: { [category: string]: { active: number; archived: number } } = {};

    notesState.forEach(note => {
        const category = note.category;
        if (!categoryData[category]) {
            categoryData[category] = { active: 0, archived: 0 };
        }

        if (!note.archived) {
            categoryData[category].active++;
        } else {
            categoryData[category].archived++;
        }
    });

    const combinedData = Object.keys(categoryData).map(category => ({
        category,
        activeCount: categoryData[category].active,
        archivedCount: categoryData[category].archived
    }));

    return (
        <>
            <div>
                <h2>Notes Table</h2>
                <NoteList data={notesState} isNotesTable={true}/>
                <h2>Category Table</h2>
                <NoteList data={combinedData} isNotesTable={false} />
            </div>
        </>
    );
};

export default NoteAndCategoryTable;