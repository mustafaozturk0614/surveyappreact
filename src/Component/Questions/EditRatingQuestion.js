import { Button, FormControl, TextField } from '@mui/material'
import { maxHeight } from '@mui/system'
import React from 'react'

export default function EditRatingQuestion({ OnChange, OnClick }) {





    return (
        <div>

            <FormControl>
                <label>Başlangıç Değeri</label>
                <TextField
                    name='start'
                    onChange={OnChange}



                ></TextField>

                <label>Bitiş Değeri</label>
                <TextField
                    name='finish'
                    onChange={OnChange}


                ></TextField>
                <label>En düşük Puanı seçiniz</label>
                <TextField
                    name='min'
                    onChange={OnChange}
                />
                <label>En yüksek Puanı seçiniz</label>
                <TextField
                    name='max'
                    onChange={OnChange}


                />

                <Button>Kaydet</Button>

            </FormControl>



        </div>
    )
}
