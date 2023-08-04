import React from 'react';
import Note from './Note';
import {Table, TableBody, TableHead, TableRow} from "@mui/material";
import {TableProps} from "../types/type";
import {Archive as ArchiveIcon, Delete as DeleteIcon} from "@mui/icons-material";
import {buttonContainerStyle, StyledTableCell, tableHeadCellStyle, tableStyle} from "./styles/NoteListStyle";

const NoteList: React.FC<TableProps> = ({ data, isNotesTable }) => {

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow style={tableStyle}>
                        <StyledTableCell style={tableHeadCellStyle}>{isNotesTable ? 'Name' : 'Category'}</StyledTableCell>
                        <StyledTableCell style={tableHeadCellStyle}>{isNotesTable ? 'Created' : 'Active'}</StyledTableCell>
                        <StyledTableCell style={tableHeadCellStyle}>{isNotesTable ? 'Category' : 'Archived'}</StyledTableCell>
                        {isNotesTable && <StyledTableCell style={tableHeadCellStyle}>Content</StyledTableCell>}
                        {isNotesTable && <StyledTableCell style={tableHeadCellStyle}>Dates</StyledTableCell>}
                        {isNotesTable && <StyledTableCell><div style={buttonContainerStyle}> <ArchiveIcon style={{ marginRight: '15px' }}/><DeleteIcon /></div></StyledTableCell>}
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
