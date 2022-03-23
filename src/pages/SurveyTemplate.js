import { Card, FormGroup } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import BooleanQuestion from '../Component/Questions/BooleanQuestion';
import './SurveyTemplate.css'
import QuestionContext from '../Context/QuestionContext';
import { Button, Container, Grid } from '@mui/material';



import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import { convertDateToTimestamp } from '../utils/DateConvert';
import { useNavigate } from 'react-router';
import SurveyContext from '../Context/SurveyContext';
import * as Type from '../utils/QuestionTypes';
import RatingQuestion from '../Component/Questions/RatingQuestion';
import BooleanButton from '../Component/Button/BooleanButton';
import EditQuestion from '../Component/Edit/EditQuestion';
import TextButton from '../Component/Button/TextButton';
import TextQuestion from '../Component/Questions/TextQuestion';
import RatingButton from '../Component/Button/RatingButton';

const SurveyTemplate = () => {

  let navigate = useNavigate();
  const { isClick, setIsClick, singleQuestion, setSingleQuestion, tempQuestion, setTempQuestion } = useContext(QuestionContext)
  const { template, setTemplate } = useContext(SurveyContext)
  const [tempData, setTempData] = useState({

    title: "",
    description: "",



  })
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
    <EditQuestion></EditQuestion>

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

  const onClick = () => {


    const body = {
      title: template.title,
      description: template.description,
      text: template.text,
      questions: template.questions,
      isDraft: template.isDraft,
      createdDate: convertDateToTimestamp(new Date()),

    }

    axios.post('/save', body)
    console.log(body)

    navigate("/")

  }



  const onChange = (e) => {
    const { name, value } = e.target
    const data = {
      title: "",
      description: ""
    }

    setTempData({ ...tempData, [name]: value })
    template.title = tempData.title
    template.description = tempData.description

  }

  useEffect(() => {
    console.log(tempData)

    return (
      setTemplate(preTemplate => ({ ...template, ...tempData }))
    )
  }, [template.title, template.description])


  return (
    <div className='container' style={{ marginLeft: 80, display: 'flex ', width: 2100 }} >
      <Grid container spacing={2} >
        <Grid item xs={3}>
          <h4 style={{ textAlign: "center" }}>Survey Component</h4>
          <div style={{ backgroundColor: "white", justifyContent: "center", textAlign: "center", padding: 5, paddingTop: 5, borderRadius: 5, marginRight: 5 }}>

            <p style={{ paddingTop: 15 }}>true or false</p>
            <BooleanButton></BooleanButton>
          </div>
          <div style={{ backgroundColor: "white", justifyContent: "center", textAlign: "center", padding: 5, paddingTop: 5, borderRadius: 5, marginRight: 5, marginTop: 15 }}>
            <RatingButton></RatingButton>
            <p style={{ paddingTop: 15 }}> agree or disagree in a scale</p>

          </div>
          <div style={{ backgroundColor: "white", justifyContent: "center", textAlign: "center", padding: 5, paddingTop: 5, borderRadius: 5, marginRight: 5, marginTop: 15 }}>
            <TextButton></TextButton>
            <p style={{ paddingTop: 15 }}>An empty field for open-ended expressions</p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <h4 style={{ textAlign: "center" }}>Form Preview</h4>
          <FormGroup className='surveyTemplateForm' style={{ padding: 15 }}>

            <textarea className='surveyTemplateTextArea' name="title" placeholder='Title' onChange={onChange} >
            </textarea>
            <textarea className='surveyTemplateTextArea' name="description" onChange={onChange} placeholder='Description' style={{ fontSize: 24, marginTop: 15 }}>
            </textarea>

            <div>
              <ul style={{ display: 'flex', flexDirection: "column", flexWrap: 'wrap' }}>
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
                          <RatingQuestion order={data.orderNo} singleQuestion={singleQuestion} template={template} />
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
            <Button style={{ margin: '20px', backgroundColor: "#6ea2e0" }} variant="contained" startIcon={<SendIcon />} onClick={onClick}></Button>
          </FormGroup>
        </Grid>
        <Grid item xs={3}>
          <h4 style={{ textAlign: "center", marginLeft: 165, color: '#262626' }}>Edit Form</h4>
          <div style={{ backgroundColor: "white", justifyContent: "center", textAlign: "center", padding: 5, paddingTop: 5, borderRadius: 5, marginLeft: 105, width: 350, marginTop: 10 }}>
            <EditQuestion></EditQuestion>

          </div>
        </Grid>
      </Grid>
    </div >








  )


}
export default SurveyTemplate