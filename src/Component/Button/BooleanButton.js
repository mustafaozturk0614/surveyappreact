import React, { useContext, useState } from 'react'
import QuestionContext from '../Questions/QuestionContext';

export default function BooleanButton() {

    const { isClick, setIsClick, singleQuestion, setSingleQuestion, template, setTemplate, count, setCount } = useContext(QuestionContext)



    const newQuestion = {
        title: 'başlık',
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
        <div> <button style={{ marginTop: '10px' }} value={1} type="button" className="btn btn-primary" onClick={addBoolen}>Boolean</button></div>
    )
}
