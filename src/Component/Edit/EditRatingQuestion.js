import { Button, FormControl, TextField, Select, MenuItem, InputLabel } from '@mui/material'
import { maxHeight } from '@mui/system'
import React, { useContext } from 'react'
import QuestionContext from '../Questions/QuestionContext';

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
                <label>Başlık</label>
                <TextField
                    name='title'
                    onChange={OnChange}



                ></TextField>
                <label>Başlangıç Değeri</label>
                <TextField
                    name='start'
                    onChange={OnChangeRating}

                ></TextField>

                <label>Bitiş Değeri</label>
                <TextField
                    name='finish'
                    onChange={OnChangeRating}

                ></TextField>


                <label> Puanı sistemini seçiniz</label>

                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="point"
                    value={point}
                    label="Puan"
                    onChange={handleChange}
                    defaultValue={point}
                >
                    <MenuItem value={5}>Beşlik</MenuItem>
                    <MenuItem value={10}>Onluk</MenuItem>

                </Select>

                <Button onClick={onClick}>Kaydet</Button>

            </FormControl>



        </div>
    )
}
