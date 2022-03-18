import { Badge, Card, FormGroup } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import BooleanQuestion from './Questions/BooleanQuestion';
import EditQuestion from './Edit/EditQuestion';
import RatingQuestion from './Questions/RatingQuestion';
import TextQuestion from './Questions/TextQuestion';
import './SurveyTemplate.css'
import QuestionContext from './Questions/QuestionContext';
import { Button, Container, Grid } from '@mui/material';
import BooleanButton from './Button/BooleanButton';
import RatingButton from './Button/RatingButton';
import TextButton from './Button/TextButton';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';

import { useNavigate } from 'react-router';
const SurveyTemplate = () => {

  let navigate = useNavigate();




  const { isClick, setIsClick, singleQuestion, setSingleQuestion, template, setTemplate, tempQuestion, setTempQuestion } = useContext(QuestionContext)

  const [tempData, setTempData] = useState({

    title: "",
    description: "",



  })
  const updateQuestion = (e) => {
    let a = { ...isClick }

    const { name, value } = e.target


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
    let newIndex = name === 0 ? -1 : name - 1;
    move(template.questions, name, newIndex);
    console.log(name)
  }

  const moveDown = (e) => {
    const { name } = e.target
    let newIndex = name === template.questions.length - 1 ? name : parseInt(name) + 1;
    move(template.questions, name, newIndex);
    console.log(newIndex)
  }

  const onClick = () => {


    const body = {
      title: template.title,
      description: template.description,
      text: template.text,
      questions: template.questions,
      isDraft: template.isDraft

    }

    axios.post('/save', body)
    console.log(template)

    navigate("/")

  }
  useEffect(() => {


  }, [])

  const onChange = (e) => {
    const { name, value } = e.target
    setTempData({ ...tempData, [name]: value })

    template.title = tempData.title
    template.description = tempData.description

    console.log(tempData)
    console.log(template)



  }



  return (
    <div  style={{ width: "100%", height: "2000px", backgroundColor: "#94bbe9", paddingTop: 10 }}>
      <Grid container spacing={3} >
        <Grid item xs={3}>
          <h4 style={{ textAlign: "center" }}>Survey Component</h4>
          <div style={{ backgroundColor: "white", justifyContent: "center", textAlign: "center", padding: 5, paddingTop: 5, borderRadius: 5, marginRight: 5 }}>
            <BooleanButton></BooleanButton>
            <p style={{ paddingTop: 15 }}>true or false</p>

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
          <FormGroup className='surveyTemplateForm' style={{ border: "1px solid white", backgroundColor: "white", borderRadius: 5, offset: 5, padding: 5 }}>
            <textarea className='surveyTemplateTextArea' name="title" placeholder='Title' onChange={onChange} >

            </textarea>
            <textarea className='surveyTemplateTextArea' name="description" onChange={onChange} placeholder='Description' style={{ fontSize: 24, marginTop: 15 }}>

            </textarea>
            <div>


              <ul style={{ display: 'flex', flexDirection: "column" }}>

                {
                  template.questions.map((data, index) => <li key={index} style={{ display: 'block', margin: "20px" }}
                  >  <Card style={{ display: 'flex', flexDirection: "row", padding: '10px', justifyContent: "space-between", alignItems: "center" }}> {(() => {
                    switch (data.types) {
                      case 1:
                        return (
                          <BooleanQuestion order={data.orderNo} />
                        )
                      case 2:
                        return (
                          <RatingQuestion order={data.orderNo} singleQuestion={singleQuestion} template={template} />
                        )
                      case 3:
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
                      <div style={{ display: 'flex', flexDirection: "column" }} >

                        <Button startIcon={<EditIcon />} color="info" variant="contained" style={{ textColor: "#6ea2e0" }} onClick={updateQuestion} name={data.orderNo} value={data.types} > Update </Button>
                        <Button style={{ marginTop: "10px" }} color="error" onClick={deleteQuestion} name={data.orderNo} value={data.types} className='btn btn-danger' startIcon={<DeleteIcon />}> Delete </Button></div>

                    </Card>

                    <Button name={index} onClick={moveUp} variant="contained" style={{ backgroundColor: "#6ea2e0" }} startIcon={<KeyboardArrowUpIcon />}> Move Up</Button>
                    <Button name={index} onClick={moveDown} style={{ marginLeft: '20px', backgroundColor: "#6ea2e0" }} variant="contained" startIcon={<KeyboardArrowDownIcon />}> Move Down</Button>
                  </li>
                  )

                }
              </ul>
            </div>
            <Button style={{ margin: '20px', backgroundColor: "#6ea2e0" }} variant="contained" startIcon={<SendIcon />} onClick={onClick}></Button>
          </FormGroup>
        </Grid>
        <Grid item xs={3}>
          <h4 style={{ textAlign: "center" }}>Edit Form</h4>
          <div style={{ backgroundColor: "white", justifyContent: "center", textAlign: "center", padding: 5, paddingTop: 5, borderRadius: 5, marginRight: 5, marginTop: 10 }}>
            <EditQuestion></EditQuestion>
          </div>
        </Grid>
      </Grid>
    </div>








  )


}
export default SurveyTemplate