import {styled} from "@mui/material/styles";
import {TableCell, tableCellClasses} from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const buttonContainerStyle = {
    display: 'flex',
    gap: '8px',
    marginRight: '8px',
    justifyContent: 'flex-end'
};

export const tableStyle = {
    borderRadius: '10px',
    background: 'grey',
};

export const tableHeadCellStyle = {
    fontWeight: 'bold',
    color: 'white',
};
