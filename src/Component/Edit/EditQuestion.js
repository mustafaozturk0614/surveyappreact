import { FormGroup, TextField } from '@material-ui/core'
import * as Type from '../../utils/QuestionTypes'
import React, { useContext, useEffect, useState } from 'react'
import QuestionContext from '../../Context/QuestionContext';
import EditBooleanQuestion from './EditBooleanQuestion'
import EditRatingQuestion from './EditRatingQuestion'
import EditTextQuestion from './EditTextQuestion'
import SurveyContext from '../../Context/SurveyContext';
import BooleanButton from '../Button/BooleanButton';
import RatingButton from '../Button/RatingButton';
import TextButton from '../Button/TextButton';


function EditQuestion() {


    const { isClick, setIsClick, singleQuestion, setSingleQuestion, point, setPoint, tempQuestion, setTempQuestion } = useContext(QuestionContext)
    const { template, setTemplate } = useContext(SurveyContext)
    const [options, setOptions] = useState([{

        option1: "",
        option2: ""
    }])
    const [tempIndex, setIndex] = useState()


    const OnChangeRating = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        let q = { ...singleQuestion }


        for (let index = 0; index < template.questions.length; index++) {

            if (singleQuestion.isClick == false) {
                if (q.orderNo == template.questions[index].orderNo) {


                    // setSingleQuestion({ ...singleQuestion, [name]: value })
                    setTempQuestion({ ...tempQuestion, [name]: value })
                    let list = template.questions
                    setIndex(index);
                    // list[index].start = tempQuestion.start
                    // list[index].title = tempQuestion.title
                    // list[index].finish = tempQuestion.finish
                    setSingleQuestion(preques => ({ ...singleQuestion, ...tempQuestion }))
                    console.log(singleQuestion)


                    // setTemplate({ ...template, questions: [...list] })




                }
            }

            else {
                if (singleQuestion.orderNo == template.questions[index].orderNo) {
                    let list = template.questions
                    // setSingleQuestion({ ...singleQuestion, [name]: value })
                    setTempQuestion({ ...tempQuestion, singleQuestion })
                    setTempQuestion({ ...tempQuestion, [name]: value })
                    // list[index].start = singleQuestion.start
                    // list[index].title = singleQuestion.title
                    // list[index].finish = singleQuestion.finish

                    // setTemplate({ ...template, questions: [...list] })
                    console.log(singleQuestion)
                    setIndex(index);
                }
            }
        }

    }


    const OnChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target

        let q = { ...singleQuestion }

        for (let index = 0; index < template.questions.length; index++) {

            if (q.isClick == false) {
                if (q.orderNo == template.questions[index].orderNo) {
                    let tempQuestion = template.questions[index]

                    setSingleQuestion(pre => ({ ...singleQuestion, [name]: value }))


                    tempQuestion.title = e.target.value


                }
            }

            else {
                if (q.orderNo == template.questions[index].orderNo) {
                    let tempQuestion = template.questions[index]
                    setSingleQuestion(preQues => ({ ...tempQuestion }))
                    tempQuestion.title = e.target.value
                }
            }
        }
    }
    const OnChangeOption = (e) => {
        e.preventDefault()
        const { name, value } = e.target


        setOptions((previousForm) => ({ ...previousForm, [name]: value }))
        console.log(options)



    }
    const OnClickRating = () => {
        let list = template.questions
        console.log(tempIndex)
        list[tempIndex] = tempQuestion



        setTemplate({ ...template, questions: [...list] })



    }
    const onClick = (e) => {
        e.preventDefault()
        let q = { ...singleQuestion }
        console.log(singleQuestion)
        let array = template.questions

        for (let index = 0; index < array.length; index++) {
            if (isClick.check == false) {
                if (q.orderNo == array[index].orderNo) {

                    array[index].option[0] = (options.option1)
                    array[index].option[1] = (options.option2)
                    // array.op.splice(0, 2, options.option1, options.option2)
                    let ques = [...template.questions]
                    setTemplate((previousForm) => ({ ...previousForm, questions: ques }))

                }
            } else {

                if (isClick.orderNo == array[index].orderNo) {


                    // array[index].option.push(options)
                    array[index].option[0] = (options.option1)
                    array[index].option[1] = (options.option2)
                    let ques = [...template.questions]
                    setTemplate((previousForm) => ({ ...previousForm, questions: ques }))

                }


            }

        }

    }
    const onchangePoint = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        console.log(e.target)
        setPoint(e.target.value)
        console.log(point)
    }
    const c = () => {
        let array = template.questions
        for (let index = 0; index < array.length; index++) {
            if (singleQuestion.isCheck === true && singleQuestion.orderNo == array[index].orderNo) {
                console.log(singleQuestion.types)

                switch (parseInt(singleQuestion.types)) {

                    case Type.TWO_OPTIONS:
                        return (
                            <EditBooleanQuestion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeOption={OnChangeOption} onClick={onClick}  ></EditBooleanQuestion>

                        )
                    case Type.LINEAR:
                        return (
                            <EditRatingQuestion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeRating={OnChangeRating} onClick={OnClickRating} onchangePoint={onchangePoint} ></EditRatingQuestion>
                        )
                    case Type.COMMENT:
                        return (
                            <EditTextQuestion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeOption={OnChangeOption} onClick={onClick} ></EditTextQuestion>
                        )
                    default:
                        return (
                            <div>
                                <input className="form-control" type="text" placeholder="Enter your answer here." />
                            </div>
                        )
                }

            }

        }

    }
    let a = c()
    const b = <div > {(() => {
        switch (singleQuestion.types) {
            case Type.TWO_OPTIONS:
                return (
                    <EditBooleanQuestion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeOption={OnChangeOption} onClick={onClick}  ></EditBooleanQuestion>
                )
            case Type.LINEAR:
                return (
                    <EditRatingQuestion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeRating={OnChangeRating} onClick={OnClickRating}></EditRatingQuestion>
                )
            case Type.COMMENT:
                return (
                    <EditTextQuestion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeOption={OnChangeOption} onClick={onClick}></EditTextQuestion>
                )
            default:
                return (
                    <div>
                        <input className="form-control" type="text" placeholder="Enter your answer here." />
                    </div>
                )
        }
    })()
    }</div >

    return (
        <div>
            <FormGroup>
                {b}

            </FormGroup>

        </div >
    )
}
export default EditQuestion
