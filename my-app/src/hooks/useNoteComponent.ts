import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {changeArhivedNoteAction, editNoteAction, removeNoteAction} from '../store/actions/noteActions';
import {NoteState} from '../types/type';

const extractDatesFromText = (text: string): string => {
    const dateRegex = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
    const dates = text.match(dateRegex);
    if (dates) {
        return dates.join(', ');
    }
    return '';
};

const useNoteComponent = () => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState<NoteState | null>(null);

    const removeNote = (note: NoteState) => {
        dispatch(removeNoteAction(note));
    };

    const changeArchived = (note: NoteState) => {
        dispatch(changeArhivedNoteAction(note));
    };

    const toggleEditMode = (note: NoteState) => {
        if (editMode && editedData && editedData.id === note.id) {
            saveChanges();
        } else {
            setEditMode(true);
            setEditedData(note);
        }
    };

    const saveChanges = () => {
        if (editedData) {
            if (editedData.content) {
                editedData.dates = extractDatesFromText(editedData.content);
            }
            dispatch(editNoteAction(editedData));
            setEditMode(false);
            setEditedData(null);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (editedData) {
            const { name, value } = event.target;
            setEditedData(prevData => ({
                ...prevData,
                [name]: value
            }) as NoteState);
        }
    };

    return {
        editMode,
        editedData,
        removeNote,
        changeArchived,
        toggleEditMode,
        handleInputChange,
    };
};

export default useNoteComponent;
