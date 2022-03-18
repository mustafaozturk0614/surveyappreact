import { Button, FormControl, TextField, Select, MenuItem, InputLabel } from '@mui/material'
import { maxHeight } from '@mui/system'
import React, { useContext } from 'react'
import QuestionContext from '../Questions/QuestionContext';
import SaveIcon from '@mui/icons-material/Save';


export default function EditRatingQuestion({ OnChange, onClick, OnChangeRating, onchangePoint }) {
    const { point, setPoint } = useContext(QuestionContext)

    const handleChange = (event) => {
        setPoint(event.target.value);
    };

    const onClickRating = (e) => {
        onclick()
        e.target.value = "";


    }

    return (
        <div>

            <FormControl>
                <label >Title</label>
                <TextField
                    name='title'
                    onChange={OnChange}



                ></TextField>
                <label>Start Value</label>
                <TextField
                    name='start'
                    onChange={OnChangeRating}

                ></TextField>

                <label>End Value</label>
                <TextField
                    name='finish'
                    onChange={OnChangeRating}

                ></TextField>


                <label> Choose points system</label>

                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="point"
                    value={point}
                    label="Point"
                    onChange={handleChange}
                    defaultValue={point}
                >
                    <MenuItem value={5}>Five</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>

                </Select>

                <Button onClick={onClick} variant="contained" style={{marginTop:10,backgroundColor:"#6ea2e0"}} endIcon={<SaveIcon/>}>Save</Button>

            </FormControl>



        </div>
    )
}
