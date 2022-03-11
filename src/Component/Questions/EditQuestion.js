import { FormGroup, TextField } from '@material-ui/core'

import React, { useContext, useEffect, useState } from 'react'


import QuestionContext from '../Questions/QuestionContext';
import EditBooleanQuestion from './EditBooleanQuestion'
import EditRatingQuestion from './EditRatingQuestion'
import EditTextQustion from './EditTextQustion'


function EditQuestion() {


    const { isClick, setIsClick, singleQuestion, setSingleQuestion, template, setTemplate, tempQuestion, setTempQuestion } = useContext(QuestionContext)


    const [options, setOptions] = useState([])


    const OnChange = (e) => {

        const { name, value } = e.target

        let q = { ...singleQuestion }

        for (let index = 0; index < template.questions.length; index++) {

            if (isClick.check == false) {
                if (q.orderNo == template.questions[index].orderNo) {
                    let tempQuestion = template.questions[index]
                    setSingleQuestion({ ...tempQuestion })
                    tempQuestion.title = e.target.value
                }
            }

            else {
                if (isClick.orderNo == template.questions[index].orderNo) {
                    let a = template.questions[index]
                    setSingleQuestion({ ...tempQuestion })
                    a.title = e.target.value
                }

            }

        }


    }
    const OnChangeOption = (e) => {
        const { name, value } = e.target

        setOptions((previousForm) => ({ ...previousForm, [name]: value }))


    }
    const onClick = (e) => {

        let q = { ...singleQuestion }
        console.log(singleQuestion)
        let array = template.questions



        for (let index = 0; index < array.length; index++) {
            if (isClick.check == false) {
                if (q.orderNo == array[index].orderNo) {

                    array[index].option.push(options)

                    let ques = [...template.questions]
                    setTemplate((previousForm) => ({ ...previousForm, questions: ques }))

                }
            } else {

                if (isClick.orderNo == array[index].orderNo) {

                    array[isClick.orderNo].option.push(options)

                    let ques = [...template.questions]
                    setTemplate((previousForm) => ({ ...previousForm, questions: ques }))

                }


            }

        }

    }
    useEffect(() => {

        console.log(isClick)

        console.log(singleQuestion)


    }, [singleQuestion, template, isClick])

    const c = () => {
        let array = template.questions
        for (let index = 0; index < array.length; index++) {
            if (isClick.check === true && isClick.orderNo == array[index].orderNo) {
                console.log(isClick.types)

                switch (isClick.types) {

                    case "1":
                        return (
                            <EditBooleanQuestion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeOption={OnChangeOption} onClick={onClick}  ></EditBooleanQuestion>

                        )
                    case "2":
                        return (
                            <EditRatingQuestion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeOption={OnChangeOption} onClick={onClick} ></EditRatingQuestion>
                        )
                    case "3":
                        return (
                            <EditTextQustion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeOption={OnChangeOption} onClick={onClick} ></EditTextQustion>
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
            case 1:
                return (
                    <EditBooleanQuestion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeOption={OnChangeOption} onClick={onClick}  ></EditBooleanQuestion>
                )
            case 2:
                return (
                    <EditRatingQuestion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeOption={OnChangeOption} onClick={onClick}></EditRatingQuestion>
                )
            case 3:
                return (
                    <EditTextQustion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeOption={OnChangeOption} onClick={onClick}></EditTextQustion>
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
                {isClick.check ? a : b}

            </FormGroup>

        </div >
    )
}
export default EditQuestion
