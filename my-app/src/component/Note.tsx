import React from 'react';
import { TableProps } from '../types/type';
import useNoteComponent from "../hooks/useNoteComponent";
import { Edit as EditIcon, Save as SaveIcon, Delete as DeleteIcon, Archive as ArchiveIcon, Unarchive as UnarchivedIcon} from '@mui/icons-material';

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
               <tr key={item.id || item.category} className="bg-gray-200 space-y-4">
                   <td className="py-3 px-4 text-left text-sm font-semibold">
                       {editMode && editedData && editedData.id === item.id ? (
                           <input
                               type="text"
                               name="name"
                               value={editedData.name}
                               onChange={handleInputChange}
                               className="border rounded px-2 py-1 focus:outline-none"
                           />
                       ) : (
                           isNotesTable ? item.name : item.category
                       )}
                   </td>
                   <td className="py-3 px-4 text-left text-sm font-semibold">
                       {isNotesTable ? item.created : item.activeCount}
                   </td>
                   <td className="py-3 px-4 text-left text-sm font-semibold">
                       {editMode && editedData && editedData.id === item.id ? (
                           <select
                               name="category"
                               value={editedData.category}
                               onChange={handleCategoryChange}
                               className="border rounded px-2 py-1 focus:outline-none"
                           >
                               <option value="Idea">Idea</option>
                               <option value="Task">Task</option>
                               <option value="Random Thought">Random Thought</option>
                           </select>

                       ) : (
                           isNotesTable ? item.category : item.archivedCount
                       )}
                   </td >
                   {isNotesTable && (
                       <td className="py-3 px-4 font-semibold overflow-hidden text-ellipsis max-w-[210px]">
                           {editMode && editedData && editedData.id === item.id ? (
                               <textarea
                                   name="content"
                                   value={editedData.content}
                                   onChange={handleInputChange}
                                   rows={4}
                                   className="border rounded px-2 py-1 focus:outline-none w-full"
                               />
                           ) : (
                               item.content
                           )}
                       </td>
                   )}
                   {isNotesTable && (
                       <td className="py-3 px-4 text-left text-sm font-semibold">
                           {item.dates}
                       </td>
                   )}
                   {isNotesTable && (
                       <td className="py-3 px-4 text-left text-sm font-semibold">
                           <div className="flex space-x-2 gap-2 justify-end">
                               {editMode && editedData && editedData.id === item.id ? (
                                   <button onClick={saveChanges} className="focus:outline-none">
                                       <SaveIcon />
                                   </button>
                               ) : (
                                   <button onClick={() => toggleEditMode(item)} className="focus:outline-none">
                                       <EditIcon />
                                   </button>
                               )}

                               <button onClick={() => changeArchived(item)} className="focus:outline-none">
                                   {item.archived ? <UnarchivedIcon /> : <ArchiveIcon />}
                               </button>

                               <button onClick={() => removeNote(item)} className="focus:outline-none">
                                   <DeleteIcon />
                               </button>
                           </div>
                       </td>
                   )}
               </tr>
           ))}

       </>
    );
};

export default Note;
