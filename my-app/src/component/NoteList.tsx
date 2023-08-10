import React from 'react';
import {TableProps} from "../types/type";
import {Archive as ArchiveIcon, Delete as DeleteIcon} from "@mui/icons-material";
import Note from './Note';

const NoteList: React.FC<TableProps> = ({ data, isNotesTable }) => {

    const headers = isNotesTable
        ? ['Name', 'Created', 'Category', 'Content', 'Dates']
        : ['Category', 'Active', 'Archived'];

    return (
        <>
            <table className="w-full border-collapse table">
                <thead>
                <tr className="bg-gray-500 text-white">
                    {headers.map((header, index) => (
                        <th key={index}
                            className="py-3 px-4 text-left text-sm font-semibold"
                        >
                            {header}
                        </th>
                    ))}
                    {isNotesTable && (
                        <th>
                            <div className="py-3 px-4 flex items-center font-bold justify-end">
                                <ArchiveIcon className="mr-4" />
                                <DeleteIcon />
                            </div>
                        </th>
                    )}
                </tr>
                </thead>
                <tbody>
                <Note data={data} isNotesTable={isNotesTable} />
                </tbody>
            </table>
        </>
    );
};

export default NoteList;
