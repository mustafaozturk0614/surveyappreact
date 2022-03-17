import React, { useContext, useState } from 'react'
import QuestionContext from '../Questions/QuestionContext';

export default function TextButton() {

    const { isClick, setIsClick, singleQuestion, setSingleQuestion, template, setTemplate, count, setCount } = useContext(QuestionContext)



    const newQuestion = {
        title: 'başlık',
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
        <div><button style={{ marginTop: '10px' }} value={3} type="button" className="btn btn-primary" onClick={addText} >Text</button></div>
    )
}