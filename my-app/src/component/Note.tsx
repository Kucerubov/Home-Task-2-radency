
import React, { useState } from 'react';
import { Button, TableCell, TableRow, TextField } from '@mui/material';
import { NoteState, TableProps } from '../types/type';
import {
    changeArhivedNoteAction,
    removeNoteAction,
    editNoteAction
} from '../store/actions/noteActions';
import { useDispatch } from 'react-redux';

const Note: React.FC<TableProps> = ({ data, isNotesTable }) => {
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

    return (
        <>
            {data.map((item: any) => (
                <TableRow key={item.id || item.category}>
                    <TableCell>
                        {editMode && editedData && editedData.id === item.id ? (
                            <TextField
                                name="name"
                                value={editedData.name}
                                onChange={handleInputChange}
                            />
                        ) : (
                            isNotesTable ? item.name : item.category
                        )}
                    </TableCell>
                    <TableCell>
                        {isNotesTable ? item.created : item.activeCount}
                    </TableCell>
                    <TableCell>
                        {editMode && editedData && editedData.id === item.id ? (
                            <TextField
                                name="category"
                                value={editedData.category}
                                onChange={handleInputChange}
                            />
                        ) : (
                            isNotesTable ? item.category : item.archivedCount
                        )}
                    </TableCell>
                    <TableCell>
                        {editMode && editedData && editedData.id === item.id ? (
                            <TextField
                                name="content"
                                value={editedData.content}
                                onChange={handleInputChange}
                            />
                        ) : (
                            isNotesTable ? item.content : ''
                        )}
                    </TableCell>
                    <TableCell>
                        {isNotesTable ? item.dates : ''}
                    </TableCell>
                    <TableCell>
                        {isNotesTable ? (
                            <Button onClick={() => toggleEditMode(item)}>
                                {editMode && editedData && editedData.id === item.id ? 'Save' : 'Edit'}
                            </Button>
                        ) : (
                            ''
                        )}
                    </TableCell>
                    <TableCell>
                        {isNotesTable ? (
                            <Button onClick={() => changeArchived(item)}>
                                {item.archived ? 'Restore' : 'Archive'}
                            </Button>
                        ) : (
                            ''
                        )}
                    </TableCell>
                    <TableCell>
                        {isNotesTable ? (
                            <Button onClick={() => removeNote(item)}>Delete</Button>
                        ) : (
                            ''
                        )}
                    </TableCell>
                </TableRow>

            ))}
        </>
    );
};

export default Note;
