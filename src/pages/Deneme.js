import React, { Component, useContext, useEffect } from 'react'
import BooleanQuestion from '../Component/Questions/BooleanQuestion'
import RatingQuestion from '../Component/Questions/RatingQuestion'
import TextQuestion from '../Component/Questions/TextQuestion'
import { Card, Button } from '@material-ui/core';
import * as Type from '../utils/QuestionTypes';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import SurveyContext from '../Context/SurveyContext';
import QuestionContext from '../Context/QuestionContext';
const Deneme = () => {
    const { template, setTemplate } = useContext(SurveyContext)
    const { isClick, setIsClick, singleQuestion, setSingleQuestion, tempQuestion, setTempQuestion } = useContext(QuestionContext)
    const set = (array, index, element) => {
        return [...array.slice(0, index), element, ...array.slice(index + 1)];
    }

    const remove = (array, index) => {

        let newindex = template.questions.length - index - 1
        console.log(newindex)
        let list = []

        if (newindex != 0) {

            let list2 = [...array.slice(-newindex)]
            console.log(list2)

            list = [...array.slice(0, index), ...list2]
            console.log(list)
        }
        else {
            list = [...array.slice(0, index)]
            console.log(list)
        }

        return list







    }

    const insert = (array, index, element) => {
        // <EditQuestion></EditQuestion>

        if (index != -1) {

            let list = [...array.slice(0, index), element, ...array.slice(index)];
            setTemplate({ questions: list })
            console.log(list)
            console.log(template.questions)
        }


    }

    const move = async (array, fromIndex, toIndex) => {


        insert(remove(array, fromIndex), toIndex, array[fromIndex])



    }
    const moveUp = (e) => {
        const { name } = e.target
        let newIndex = name == 0 ? -1 : parseInt(name) - 1;
        move(template.questions, name, newIndex);
        console.log(name)
    }

    const moveDown = (e) => {
        const { name } = e.target
        let newIndex = name == template.questions.length - 1 ? name : parseInt(name) + 1;
        move(template.questions, name, newIndex);
        console.log(newIndex)
    }
    const updateQuestion = (e) => {
        let a = { ...isClick }

        const { name, value } = e.target
        let tempQ = { ...template.questions.filter(q => (q.orderNo == name)) }
        tempQ[0].isClick = true
        console.log(tempQ[0].isClick)
        setSingleQuestion(preQuestion => ({ ...tempQ[0] }))

        console.log(singleQuestion)
        a = {
            check: true,
            orderNo: name,
            types: value
        }
        setIsClick(a)


    }

    const deleteQuestion = (e) => {
        const { name, value } = e.target
        let q = { ...singleQuestion }

        for (let index = 0; index < template.questions.length; index++) {


            if (name == template.questions[index].orderNo) {
                let templist = template.questions
                templist.splice(index, 1)
                setTemplate({ questions: templist })



            }
        }


    }



    useEffect(() => {


        console.log(template)
    })

    return (
        <div> <ul style={{ display: 'flex', flexDirection: "column", flexWrap: 'wrap' }}>
            {
                template.questions.map((data, index) => <li key={index} style={{ display: 'block', margin: "20px" }}
                >  <Card style={{ display: 'flex', flexDirection: "row", padding: '22px', justifyContent: "space-evenly", alignContent: 'center' }}> {(() => {
                    switch (data.types) {
                        case Type.TWO_OPTIONS:
                            return (
                                <BooleanQuestion order={data.orderNo} />
                            )
                        case Type.LINEAR:
                            return (
                                <RatingQuestion order={data.orderNo} />
                            )
                        case Type.COMMENT:
                            return (
                                <TextQuestion order={data.orderNo} />
                            )
                        default:
                            return (
                                <div>
                                    <input className="form-control" type="text" placeholder="Enter your answer here." />
                                </div>
                            )
                    }
                })()}


                    </Card>


                    <div style={{ marginLeft: 15, marginRight: 15, display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <Button name={index} onClick={moveUp} variant="contained" style={{ backgroundColor: "#6ea2e0" }} startIcon={<KeyboardArrowUpIcon />}> Move Up</Button>
                            <Button name={index} onClick={moveDown} style={{ marginLeft: 10, backgroundColor: "#6ea2e0" }} variant="contained" startIcon={<KeyboardArrowDownIcon />}> Move Down</Button>
                        </div>
                        <div >
                            <Button startIcon={<EditIcon />} color="info" variant="contained" style={{ textColor: "#6ea2e0" }} onClick={updateQuestion} name={data.orderNo} value={data.types} x={"x"} > Update </Button>
                            <Button style={{ marginLeft: 10 }} color="error" onClick={deleteQuestion} name={data.orderNo} value={data.types} className='btn btn-danger' startIcon={<DeleteIcon />}> Delete </Button>
                        </div>
                    </div>
                </li>
                )

            }
        </ul>
        </div>
    )
}
export default Deneme