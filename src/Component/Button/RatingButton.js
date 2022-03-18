import React, { useContext, useState } from 'react'
import QuestionContext from '../Questions/QuestionContext';
import { Button } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
export default function RatingButton() {

    const { isClick, setIsClick, singleQuestion, setSingleQuestion, template, setTemplate, count, setCount, point } = useContext(QuestionContext)


    const newRatingQuestion = {
        title: 'Title',
        text: 'text',
        types: 1,
        value: 0,
        orderNo: 0,
        start: "bad",
        finish: "good",
        point: 5,

    }

    const addRating = (e) => {
        e.preventDefault();
        setCount(count + 1)
        newRatingQuestion.types = 2
        newRatingQuestion.orderNo = count
        newRatingQuestion.point = point
        setSingleQuestion(newRatingQuestion)
        let list = [...template.questions]
        list.push(newRatingQuestion)
        setTemplate({ ...template, questions: list })
        setIsClick({ ...isClick, check: false })

    }
    return (
        <div>  <Button value={2} onClick={addRating} startIcon={<StarBorderOutlinedIcon/>}>Rating </Button></div>
    )
}