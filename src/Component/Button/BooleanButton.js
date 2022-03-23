import React, { useContext, useEffect, useState } from 'react'
import QuestionContext from '../../Context/QuestionContext';
import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from 'react-redux';
import questionReducer from '../../redux/reducers/QuestionReducers';
import { Store } from '@mui/icons-material';
import { BOOLENTYPE } from '../../redux/actions/ActionsTypes';
import * as Type from '../../utils/QuestionTypes'
import SurveyContext from '../../Context/SurveyContext';
export default function BooleanButton() {

    const { isClick, setIsClick, singleQuestion, setSingleQuestion, count, setCount } = useContext(QuestionContext)
    const { template, setTemplate } = useContext(SurveyContext)
    const newQuestion = {
        title: 'Title',
        text: 'text',
        types: Type.TWO_OPTIONS,
        option: [],
        orderNo: 0,
        isClick: false

    }

    const addBoolens = (e) => {

        setCount(count + 1)
        newQuestion.types = Type.TWO_OPTIONS
        newQuestion.orderNo = count
        setSingleQuestion(preQuestion => ({ ...singleQuestion, ...newQuestion }))
        console.log(singleQuestion)
        let list = [...template.questions]
        list.push(newQuestion)
        setTemplate({ ...template, questions: list })
        setIsClick({ ...isClick, check: false })




    }

    return (
        <div>
            <Button variant="text" startIcon={<CheckIcon />} value={1} onClick={addBoolens}>TF</Button>
        </div>
    )
}
