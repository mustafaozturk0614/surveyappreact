import React from 'react'
import { FormGroup, TextField } from '@material-ui/core'
import { Button, FormControl } from '@mui/material'

export default function EditBooleanQuestion({ singleQuestion, OnChange, onClick, OnChangeOption }) {


    return (

        <div>
            <FormControl>

                <label>Başlık</label>
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
                <Button onClick={onClick}>Kaydet</Button>
            </FormControl>

        </div >

    )
}
