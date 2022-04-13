import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './pages/deshboard/dashboard.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: '#252627'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: '#E9EBEE',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableRowForSearch = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: '#fff',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(PNR, Name, Destination, Deadline, Status) {
    return { PNR, Name, Destination, Deadline, Status };
}

const BookingOnHoldRow = [
    createData('FL1234', 'George Angel', 'LOS - ABV', '12 hours', 'Process'),
    createData('FL1234', 'George Angel', 'LOS - ABV', '12 hours', 'Process'),
    createData('FL1234', 'George Angel', 'LOS - ABV', '12 hours', 'Process'),
    createData('FL1234', 'George Angel', 'LOS - ABV-LOS', '12 hours', 'Process')
];

function createDataForSearch(Name, Date) {
    return { Name, Date };
}

const SearchHistoryRow = [
    createDataForSearch('Benin - Lagos', '19 Apr - 21 Apr'),
    createDataForSearch('Istanbul - Lagos', '19 Apr - 21 Apr'),
    createDataForSearch('Lagos - Toronto - Lagos', '19 Apr - 21 Apr'),
    createDataForSearch('Lagos - Abuja - Lagos', '19 Apr - 21 Apr'),
];

export function BookingOnHold({ setEnableModal }) {
    return (
        <div className='table_template'>
            <h2 className='content-heading'>Bookings on hold</h2>
            <TableContainer sx={{ width: '100%', borderRadius: 0 }} component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='left' sx={{ fontWeight: 'bold' }} >PNR</StyledTableCell>
                            <StyledTableCell align='left' sx={{ fontWeight: 'bold' }} >Name</StyledTableCell>
                            <StyledTableCell align='left' sx={{ fontWeight: 'bold' }} >Destination</StyledTableCell>
                            <StyledTableCell align='left' sx={{ fontWeight: 'bold' }} >Deadline</StyledTableCell>
                            <StyledTableCell align='left' sx={{ fontWeight: 'bold' }} >Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {BookingOnHoldRow.map((row) => (
                            <StyledTableRow key={row.PNR}>
                                <StyledTableCell component="th" scope="row">{row.PNR}</StyledTableCell>
                                <StyledTableCell align="left">{row.Name}</StyledTableCell>
                                <StyledTableCell align="left">{row.Destination}</StyledTableCell>
                                <StyledTableCell align="left">{row.Deadline}</StyledTableCell>
                                <StyledTableCell align="left"
                                    onClick={() => setEnableModal(true)}
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#40798C',
                                        textDecorationLine: 'underline',
                                        textDecorationThickness: 2,
                                        cursor: 'pointer'
                                    }}
                                >{row.Status}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}


export function SearchHistory() {
    return (
        <div className='search_history'>
            <h2 className='content-heading'>Search History</h2>
            <TableContainer sx={{ width: 371.17, borderRadius: 0 }} component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='left' sx={{ fontWeight: 'bold' }} >Name</StyledTableCell>
                            <StyledTableCell align='left' sx={{ fontWeight: 'bold' }} >Date</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {SearchHistoryRow.map((row) => (
                            <StyledTableRowForSearch key={row.PNR}>
                                <StyledTableCell >{row.Name}</StyledTableCell>
                                <StyledTableCell align="left">{row.Date}</StyledTableCell>
                            </StyledTableRowForSearch>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}