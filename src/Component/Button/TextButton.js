import React, { useContext, useState } from 'react'
import QuestionContext from '../../Context/QuestionContext';
import { Button } from '@mui/material';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import * as Type from '../../utils/QuestionTypes'
import SurveyContext from '../../Context/SurveyContext';
export default function TextButton() {

    const { isClick, setIsClick, singleQuestion, setSingleQuestion, count, setCount } = useContext(QuestionContext)
    const { template, setTemplate } = useContext(SurveyContext)

    const newQuestion = {
        title: 'Title',
        text: 'text',
        types: Type.COMMENT,
        option: [],
        orderNo: 0,
        isClick: false

    }

    const addText = (e) => {
        e.preventDefault();
        setCount(count + 1)
        newQuestion.orderNo = count
        setSingleQuestion(newQuestion)
        let list = [...template.questions]
        list.push(newQuestion)
        setTemplate({ ...template, questions: list })
        setIsClick({ ...isClick, check: false })

    }

    return (
        <div><Button value={3} onClick={addText} startIcon={<ModeCommentOutlinedIcon />}>Text</Button></div>
    )
}