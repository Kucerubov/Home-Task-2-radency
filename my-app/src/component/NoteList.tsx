import React from 'react';
import Note from './Note';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {TableProps} from "../types/type";

const NoteList: React.FC<TableProps> = ({ data, isNotesTable }) => {

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{isNotesTable ? 'Name' : 'Category'}</TableCell>
                        <TableCell>{isNotesTable ? 'Created' : 'Active'}</TableCell>
                        <TableCell>{isNotesTable ? 'Category' : 'Archived'}</TableCell>
                        <TableCell>{isNotesTable ? 'Content' : ''}</TableCell>
                        <TableCell>{isNotesTable ? 'Dates' : ''}</TableCell>
                        <TableCell>{isNotesTable ? 'Delete' : ''}</TableCell>
                        {/* Другие заголовки... */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <Note data={data} isNotesTable={isNotesTable}/>
                </TableBody>
            </Table>
        </>
    );
};

export default NoteList;
