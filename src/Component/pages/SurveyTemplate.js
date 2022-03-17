import { Badge, Card, FormGroup } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import BooleanQuestion from './Questions/BooleanQuestion';
import EditQuestion from './Edit/EditQuestion';
import RatingQuestion from './Questions/RatingQuestion';
import TextQuestion from './Questions/TextQuestion';
import './SurveyTemplate.css'
import QuestionContext from './Questions/QuestionContext';
import { Button } from '@mui/material';
import BooleanButton from './Button/BooleanButton';
import RatingButton from './Button/RatingButton';
import TextButton from './Button/TextButton';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';


const SurveyTemplate = () => {




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
    <div>


      <div style={{ display: 'flex', marginLeft: "98px", marginTop: "18px", padding: '10px' }}>

        <div className="col-md-2">
          <BooleanButton></BooleanButton>
          <RatingButton></RatingButton>
          <TextButton></TextButton>
        </div>

        <div className="col-md-7">
          <FormGroup style={{ border: "1px solid" }}>
            <textarea className='surveyTemplateTextArea' name="title" placeholder='Başlık' onChange={onChange} >

            </textarea>
            <textarea className='surveyTemplateTextArea' name="description" onChange={onChange} placeholder='Açıklama' >

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
                      <div style={{ display: 'flex', flexDirection: "column", }} >

                        <Button className='btn btn-primary' onClick={updateQuestion} name={data.orderNo} value={data.types} > Güncelle</Button>
                        <Button style={{ marginTop: "10px" }} onClick={deleteQuestion} name={data.orderNo} value={data.types} className='btn btn-danger' startIcon={<DeleteIcon />}    > Sil  </Button></div>

                    </Card>

                    <Button name={index} onClick={moveUp} variant="contained" color="success" startIcon={<KeyboardArrowUpIcon />}   >yukarı taşı</Button>
                    <Button name={index} onClick={moveDown} style={{ marginLeft: '20px' }} variant="contained" color="success" startIcon={<KeyboardArrowDownIcon />}   >aşağı taşı</Button>

                  </li>


                  )

                }



              </ul>



            </div>
            <button style={{ margin: '20px' }} type="button" className="btn btn-primary" onClick={onClick}>Submit</button>



          </FormGroup>

        </div>


        <div className="col-md-2" style={{ paddingLeft: "15px" }}>

          <EditQuestion></EditQuestion>




        </div>

      </div >
    </div >
  )


}
export default SurveyTemplate