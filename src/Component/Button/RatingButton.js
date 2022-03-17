import React, { useContext, useState } from 'react'
import QuestionContext from '../Questions/QuestionContext';

export default function RatingButton() {

    const { isClick, setIsClick, singleQuestion, setSingleQuestion, template, setTemplate, count, setCount, point } = useContext(QuestionContext)


    const newRatingQuestion = {
        title: 'başlık',
        text: 'text',
        types: 1,
        value: 0,
        orderNo: 0,
        start: "kötü",
        finish: "çok iyi",
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
        <div>  <button style={{ marginTop: '10px' }} value={2} type="button" className="btn btn-primary" onClick={addRating} >Rating</button></div>
    )
}