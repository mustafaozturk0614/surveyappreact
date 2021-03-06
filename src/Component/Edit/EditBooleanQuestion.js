import React, { useContext, useState } from 'react'
import { FormGroup, TextField } from '@material-ui/core'
import { Button, FormControl } from '@mui/material'
import SurveyContext from '../../Context/QuestionContext';


export default function EditBooleanQuestion({ OnChange, onClick, OnChangeOption }) {


    const [edit, setEdit] = useState({

        title: null,
        option1: "seçenek1",
        option: "seçenek2"

    })

    const onc = (e) => {
        const { name, value } = e.target

        setEdit((previousForm) => ({ ...previousForm, [name]: value }))






    }
    return (

        <div>
            <FormControl>

                <label>Title</label>
                <TextField
                    name='title'

                    onChange={OnChange}


                ></TextField>
                <label>Option 1</label>
                <TextField
                    name='option1'
                    onChange={OnChangeOption}



                > </TextField>
                <label>Option 2</label>
                <TextField
                    name='option2'
                    onChange={OnChangeOption}


                > </TextField>
                <Button onClick={onClick}>Save</Button>
            </FormControl>

        </div >

    )
}
