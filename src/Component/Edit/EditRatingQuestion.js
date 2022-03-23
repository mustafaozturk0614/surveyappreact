import { Button, FormControl, TextField, Select, MenuItem, InputLabel } from '@mui/material'
import { maxHeight } from '@mui/system'
import React, { useContext, useEffect } from 'react'
import QuestionContext from '../../Context/QuestionContext';
import SaveIcon from '@mui/icons-material/Save';
import { useFormik } from 'formik';
import SurveyContext from '../../Context/SurveyContext';
export default function EditRatingQuestion({ OnChange, onClick, OnChangeRating, onchangePoint }) {
    const { point, setPoint, singleQuestion, setSingleQuestion } = useContext(QuestionContext)
    const { template, setTemplate } = useContext(SurveyContext)
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            title: "",
            start: 'bad',
            finish: 'good',
            point: point,
        },
        onSubmit: values => {
            setSingleQuestion(preQue => ({ ...singleQuestion, ...values }))
            setPoint(values.point)
            console.log(values)





        },
    });



    const changeList = () => {
        let list = [...template.questions]
        let index = list.findIndex(q => q.orderNo == singleQuestion.orderNo)
        list[index] = singleQuestion
        setTemplate({ ...template, questions: list })
        console.log(singleQuestion)


    }


    useEffect(() => {


        changeList()
        console.log(template.questions)


    }, [singleQuestion])

    return (
        <div>

            <FormControl>
                <label >Title</label>
                <TextField
                    name='title'
                    onChange={handleChange}



                ></TextField>
                <label>Start Value</label>
                <TextField
                    name='start'
                    onChange={handleChange}

                ></TextField>

                <label>End Value</label>
                <TextField
                    name='finish'
                    onChange={handleChange}

                ></TextField>


                <label> Choose points system</label>

                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="point"
                    value={values.point}
                    label="Point"
                    onChange={handleChange}
                    defaultValue={singleQuestion.point}

                >
                    <MenuItem value={5}>Five</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>

                </Select>

                <Button type='submit' onClick={handleSubmit} variant="contained" style={{ marginTop: 10, backgroundColor: "#6ea2e0" }} endIcon={<SaveIcon />}>Save</Button>

            </FormControl>



        </div>
    )
}
