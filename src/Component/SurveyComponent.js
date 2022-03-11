import React, { useContext, useEffect, useState } from 'react'

import QuestionContext from './Questions/QuestionContext';


function SurveyComponent(props) {

  const { isClick, setIsClick, singleQuestion, setSingleQuestion, template, setTemplate, tempQuestion, setTempQuestion } = useContext(QuestionContext)
  const { addQuestion, addKind, questions, kind } = props
  const [count, setCount] = useState(0)


  let a = null
  const newQuestion = {
    title: 'başlık',
    text: 'text',
    types: 1,
    option: [],
    orderNo: 0,

  }
  const newRatingQuestion = {
    title: 'başlık',
    text: 'text',
    types: 1,
    option: [],
    orderNo: 0,
    start: "kötü",
    finish: "çok iyi",
    max: 0,
    min: 0

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







  useEffect(() => {
    console.log(template.questions)



  }, [template])

  const addRating = (e) => {
    e.preventDefault();
    setCount(count + 1)
    newRatingQuestion.types = 2
    newRatingQuestion.orderNo = count
    setSingleQuestion(newRatingQuestion)
    let list = [...template.questions]
    list.push(newRatingQuestion)
    setTemplate({ ...template, questions: list })
    setIsClick({ ...isClick, check: false })

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



    <div style={{ display: "flex", flexDirection: "column", margin: '10px' }}>

      <button style={{ marginTop: '10px' }} value={1} type="button" className="btn btn-primary" onClick={addBoolen}>Boolean</button>
      <button style={{ marginTop: '10px' }} value={2} type="button" className="btn btn-primary" onClick={addRating} >Rating</button>
      <button style={{ marginTop: '10px' }} value={3} type="button" className="btn btn-primary" onClick={addText} >Text</button>

    </div >

  )



}
export default SurveyComponent