
import React from 'react';
import { Button, TableCell, TableRow, TextField } from '@mui/material';
import { TableProps } from '../types/type';
import useNoteComponent from "../hooks/useNoteComponent";

const Note: React.FC<TableProps> = ({ data, isNotesTable }) => {

        const {
            editMode,
            editedData,
            removeNote,
            changeArchived,
            toggleEditMode,
            handleInputChange,
        } = useNoteComponent();

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
