import * as React from 'react';
import {
    DataGrid, GridToolbar, gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import SurveyService from './surveyService';
import { Table } from 'antd';
import { useNavigate } from 'react-router';
import { Card, Divider } from '@mui/material';
import CustomPagination from './CustomPagination';
import CustomToolbar from './CustomToolbar';
import Side from '../Component/Side';
import { width } from '@mui/system';





const SurveyList = () => {
    const [list, setList] = React.useState([])
    const getAllSurvey = async () => {
        let surveyService = new SurveyService()
        let response = await surveyService.getSurveys()

        setList([...response.data])
        console.log(response.data)


    }

    const a = () => {

        console.log('a')
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70, headerAlign: 'center' },
        { field: 'title', headerName: 'Name', width: 200, headerAlign: 'center' },
        { field: 'startTime', headerName: 'Start Time', width: 200, type: 'date', headerAlign: 'center' },
        {
            field: 'finishTime',
            headerName: 'Finish Time',
            type: 'date',
            width: 200,
            headerAlign: 'center'


        },
    ];

    const rows = list
    React.useEffect(() => {
        getAllSurvey()

    }, [])

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100vw', height: '100vh', boxSizing: 'border-box' }}>
            <div ><Side ></Side></div>

            <div style={{ display: 'flex', height: '60%', width: '60%', paddingLeft: 280, paddingTop: 80 }}>

                <Divider></Divider>


                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    // checkboxSelection
                    onCellClick={() => { console.log('b') }}

                    style={{ padding: 20 }}
                    components={{
                        Toolbar: CustomToolbar,
                        Pagination: CustomPagination,
                    }}
                    sx={{
                        boxShadow: 10,
                        border: 2,
                        borderColor: 'primary.light',
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        },

                    }}

                />



            </div >
        </div >
    );
}
export default SurveyList