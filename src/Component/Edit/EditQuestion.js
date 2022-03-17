import { FormGroup, TextField } from '@material-ui/core'


import React, { useContext, useEffect, useState } from 'react'


import QuestionContext from '../Questions/QuestionContext';
import EditBooleanQuestion from './EditBooleanQuestion'
import EditRatingQuestion from './EditRatingQuestion'
import EditTextQuestion from './EditTextQuestion'


function EditQuestion() {


    const { isClick, setIsClick, singleQuestion, setSingleQuestion, template, setTemplate, point, setPoint } = useContext(QuestionContext)
    const [ratQ, setratQ] = useState({

        text: 'text',
        types: 1,
        option: [],
        orderNo: 0,
        start: "kötü",
        finish: "çok iyi",
        max: 0,
        min: 1

    })

    const [options, setOptions] = useState([{

        option1: "",
        option2: ""
    }])


    const OnChangeRating = (e) => {
        const { name, value } = e.target
        let q = { ...singleQuestion }


        for (let index = 0; index < template.questions.length; index++) {

            if (isClick.check == false) {
                if (q.orderNo == template.questions[index].orderNo) {


                    setSingleQuestion({ ...singleQuestion, [name]: value })
                    let list = template.questions

                    // list[index].start = singleQuestion.start
                    // list[index].title = singleQuestion.title
                    // list[index].finish = singleQuestion.finish

                    // setTemplate({ ...template, questions: [...list] })



                }
            }

            else {
                if (isClick.orderNo == template.questions[index].orderNo) {

                    setSingleQuestion({ ...singleQuestion, [name]: value })

                }
            }
        }

    }

    const OnChange = (e) => {

        const { name, value } = e.target

        let q = { ...singleQuestion }

        for (let index = 0; index < template.questions.length; index++) {

            if (isClick.check == false) {
                if (q.orderNo == template.questions[index].orderNo) {
                    let tempQuestion = template.questions[index]

                    setSingleQuestion({ ...singleQuestion, [name]: value })

                    tempQuestion.title = e.target.value


                }
            }

            else {
                if (isClick.orderNo == template.questions[index].orderNo) {
                    let tempQuestion = template.questions[index]
                    setSingleQuestion({ ...tempQuestion })
                    tempQuestion.title = e.target.value
                }
            }
        }
    }
    const OnChangeOption = (e) => {
        const { name, value } = e.target


        setOptions((previousForm) => ({ ...previousForm, [name]: value }))
        console.log(options)



    }
    const OnClickRating = () => {
        let list = template.questions

        list[singleQuestion.orderNo] = singleQuestion



        setTemplate({ ...template, questions: [...list] })
        setTemplate({ ...template, questions: list })
        console.log(template.questions)

    }
    const onClick = (e) => {

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
        const { name, value } = e.target
        console.log(e.target)
        setPoint(e.target.value)
        console.log(point)
    }

    useEffect(() => {

        console.log(template.questions)




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
                            <EditRatingQuestion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeRating={OnChangeRating} onClick={OnClickRating} onchangePoint={onchangePoint} ></EditRatingQuestion>
                        )
                    case "3":
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
            case 1:
                return (
                    <EditBooleanQuestion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeOption={OnChangeOption} onClick={onClick}  ></EditBooleanQuestion>
                )
            case 2:
                return (
                    <EditRatingQuestion OnChange={OnChange} singleQuestion={singleQuestion} OnChangeRating={OnChangeRating} onClick={OnClickRating}></EditRatingQuestion>
                )
            case 3:
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
                {isClick.check ? a : b}

            </FormGroup>

        </div >
    )
}
export default EditQuestion
