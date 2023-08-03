import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NoteState } from "../types/type";
import { addNoteAction } from "../store/actions/noteActions";
const uuid = require('uuid');

const useNoteAndCategoryData = () => {
    const dispatch = useDispatch();

    const notesState = useSelector((state: { notes: NoteState[] }) => state.notes);
    const categoryData: { [category: string]: { active: number; archived: number } } = {};
    const [showArchived, setShowArchived] = useState(false);

    const formattedDate = () => {
        const currentDate = new Date();
        const monthNames = [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
        return `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    }

    const handleAddNote = () => {
        const newNote: NoteState = {
            id: uuid.v4(),
            name: '',
            created: formattedDate(),
            category: 'Task',
            content: '',
            dates: '',
            archived: false
        };
        dispatch(addNoteAction(newNote));
    };

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

    const toggleArchived = () => {
        setShowArchived(!showArchived);
    };

    const filteredNotes = showArchived
        ? notesState.filter(note => note.archived)
        : notesState.filter(note => !note.archived);

    return {
        combinedData,
        filteredNotes,
        showArchived,
        toggleArchived,
        handleAddNote
    };
};

export default useNoteAndCategoryData;