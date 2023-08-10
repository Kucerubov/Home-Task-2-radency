import React from 'react';
import {TableRow, TableCell, TextField, Select, MenuItem, IconButton} from '@mui/material';
import { TableProps } from '../types/type';
import useNoteComponent from "../hooks/useNoteComponent";
import { Edit as EditIcon, Save as SaveIcon, Delete as DeleteIcon, Archive as ArchiveIcon, Unarchive as UnarchivedIcon} from '@mui/icons-material';
import {buttonContainerStyle, cellOverflowStyle, grayRowStyle} from "./styles/NoteStyle";

const Note: React.FC<TableProps> = ({ data, isNotesTable }) => {

        const {
            handleCategoryChange,
            saveChanges,
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
                <TableRow key={item.id || item.category} style={grayRowStyle}>
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
                            <Select
                                name="category"
                                value={editedData.category}
                                onChange={handleCategoryChange}
                            >
                                <MenuItem value="Idea">Idea</MenuItem>
                                <MenuItem value="Task">Task</MenuItem>
                                <MenuItem value="Random Thought">Random Thought</MenuItem>
                            </Select>
                        ) : (
                            isNotesTable ? item.category : item.archivedCount
                        )}
                    </TableCell>
                    {isNotesTable && (
                        <TableCell style={cellOverflowStyle}>
                            {editMode && editedData && editedData.id === item.id ? (
                                <TextField
                                    name="content"
                                    value={editedData.content}
                                    onChange={handleInputChange}
                                    multiline
                                    rows={4}
                                    fullWidth
                                />
                            ) : (
                                item.content
                            )}
                        </TableCell>
                    )}
                    {isNotesTable &&
                        <TableCell>
                            {item.dates}
                        </TableCell>
                    }
                    {isNotesTable &&
                        <TableCell>
                                <div style={buttonContainerStyle}>
                                    {editMode && editedData && editedData.id === item.id ? (
                                        <IconButton onClick={saveChanges}>
                                            <SaveIcon />
                                        </IconButton>
                                    ) : (
                                        <IconButton onClick={() => toggleEditMode(item)}>
                                            <EditIcon />
                                        </IconButton>
                                    )}

                                    <IconButton onClick={() => changeArchived(item)}>
                                        {item.archived ? <UnarchivedIcon /> : <ArchiveIcon />}
                                    </IconButton>

                                    <IconButton onClick={() => removeNote(item)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                        </TableCell>
                    }
                </TableRow>
            ))}
        </>
    );
};

export default Note;
