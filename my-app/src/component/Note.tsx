import React from 'react';
import {Button, TableCell, TableRow} from '@mui/material';
import {NoteState, TableProps} from '../types/type';
import {removeNoteAction} from "../store/actions/noteActions";
import {useDispatch} from "react-redux";

const Note: React.FC<TableProps> = ({ data, isNotesTable }) => {
    const dispatch = useDispatch()
    const removeNote = (note: NoteState) => {
        dispatch(removeNoteAction(note))
    }

    return (
        <>
            {data.map((item: any) => (
                <TableRow key={item.id || item.category}>
                    <TableCell>{isNotesTable ? item.name : item.category}</TableCell>
                    <TableCell>{isNotesTable ? item.created : item.activeCount}</TableCell>
                    <TableCell>{isNotesTable ? item.category : item.archivedCount}</TableCell>
                    <TableCell>{isNotesTable ? item.content : ''}</TableCell>
                    <TableCell>{isNotesTable ? item.dates : ''}</TableCell>
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
