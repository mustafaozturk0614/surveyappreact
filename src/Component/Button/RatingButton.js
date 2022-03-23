import React, { useContext, useState } from 'react'
import QuestionContext from '../../Context/QuestionContext';
import { Button } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import * as Type from '../../utils/QuestionTypes'
import SurveyContext from '../../Context/SurveyContext';
export default function RatingButton() {

    const { isClick, setIsClick, singleQuestion, setSingleQuestion, count, setCount, point, setPoint } = useContext(QuestionContext)
    const { template, setTemplate } = useContext(SurveyContext)
    const newRatingQuestion = {
        title: 'Title',
        text: 'text',
        types: Type.LINEAR,
        value: 0,
        orderNo: 0,
        start: "bad",
        finish: "good",
        point: 5,
        isClick: false

    }

    const addRating = (e) => {
        e.preventDefault();
        setCount(count + 1)

        newRatingQuestion.orderNo = count
        newRatingQuestion.point = point
        setSingleQuestion(newRatingQuestion)
        let list = [...template.questions]
        list.push(newRatingQuestion)
        setTemplate({ ...template, questions: list })
        setIsClick({ ...isClick, check: false })

    }
    return (
        <div>  <Button value={2} onClick={addRating} startIcon={<StarBorderOutlinedIcon />}>Rating </Button></div>
    )
}