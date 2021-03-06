import { FormGroup } from '@material-ui/core'
import { TextareaAutosize, TextField } from '@mui/material'
import React from 'react'

export default function EditTextQuestion({ OnChange }) {

    onchange = (e) => {

        const { name, value } = e.target



    }
    return (
        <div>
            <FormGroup>

                <label>Please enter context of questions</label>
                <TextareaAutosize
                    style={{ marginTop: "10px" }}
                    name='title'
                    onChange={OnChange}
                ></TextareaAutosize>


            </FormGroup>
        </div>
    )
}
