import React, { useContext, useState } from 'react'
import QuestionContext from '../Questions/QuestionContext';
import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
export default function BooleanButton() {

    const { isClick, setIsClick, singleQuestion, setSingleQuestion, template, setTemplate, count, setCount } = useContext(QuestionContext)



    const newQuestion = {
        title: 'Title',
        text: 'text',
        types: 1,
        option: [],
        orderNo: 0,

    }

    const addBoolen = (e) => {
        e.preventDefault();
        setCount(count + 1)
        newQuestion.types = 1
        newQuestion.orderNo = count
        setSingleQuestion(newQuestion)
        let list = [...template.questions]
        list.push(newQuestion)
        setTemplate({ ...template, questions: list })
        setIsClick({ ...isClick, check: false })
    }
    return (
        <div> 
            <Button variant="text" startIcon={<CheckIcon/>} value={1}  onClick={addBoolen}>TF</Button>
        </div>
    )
}
