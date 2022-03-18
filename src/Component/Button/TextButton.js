import React, { useContext, useState } from 'react'
import QuestionContext from '../Questions/QuestionContext';
import { Button } from '@mui/material';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
export default function TextButton() {

    const { isClick, setIsClick, singleQuestion, setSingleQuestion, template, setTemplate, count, setCount } = useContext(QuestionContext)



    const newQuestion = {
        title: 'Title',
        text: 'text',
        types: 1,
        option: [],
        orderNo: 0,

    }

    const addText = (e) => {
        e.preventDefault();
        setCount(count + 1)
        newQuestion.types = 3
        newQuestion.orderNo = count
        setSingleQuestion(newQuestion)
        let list = [...template.questions]
        list.push(newQuestion)
        setTemplate({ ...template, questions: list })
        setIsClick({ ...isClick, check: false })

    }

    return (
        <div><Button value={3}  onClick={addText}startIcon={<ModeCommentOutlinedIcon/>}>Text</Button></div>
    )
}