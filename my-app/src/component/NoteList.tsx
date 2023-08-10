import React from 'react';
import Note from './Note';
import {Table, TableBody, TableHead, TableRow} from "@mui/material";
import {TableProps} from "../types/type";
import {Archive as ArchiveIcon, Delete as DeleteIcon} from "@mui/icons-material";
import {
    ArchiveIconsStyle,
    buttonContainerStyle,
    StyledTableCell,
    tableHeadCellStyle,
    tableStyle
} from "./styles/NoteListStyle";

const NoteList: React.FC<TableProps> = ({ data, isNotesTable }) => {

    const headers = isNotesTable
        ? ['Name', 'Created', 'Category', 'Content', 'Dates']
        : ['Category', 'Active', 'Archived'];

    return (
        <>
            <Table>
                <TableHead>
                        <TableRow style={tableStyle}>
                            {headers.map((header, index) => (
                                <StyledTableCell key={index} style={tableHeadCellStyle}>{header}</StyledTableCell>
                            ))}
                            {isNotesTable && (
                                <StyledTableCell>
                                    <div style={buttonContainerStyle}>
                                        <ArchiveIcon  style={ArchiveIconsStyle}/>
                                        <DeleteIcon />
                                    </div>
                                </StyledTableCell>
                            )}
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
