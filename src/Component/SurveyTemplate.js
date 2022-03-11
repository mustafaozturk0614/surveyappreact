import { Badge, Card, FormGroup } from '@material-ui/core';
import { margin, padding } from '@mui/system';
import React, { Component, useContext, useEffect, useState } from 'react';
import { connectAdvanced, useDispatch, useSelector } from 'react-redux';
import BooleanQuestion from './Questions/BooleanQuestion';
import EditQuestion from './Questions/EditQuestion';
import RatingQuestion from './Questions/RatingQuestion';
import TextQuestion from './Questions/TextQuestion';
import SurveyComponent from './SurveyComponent';
import './SurveyTemplate.css'
import QuestionContext from './Questions/QuestionContext';
import EditRatingQuestion from './Questions/EditRatingQuestion';
import EditTextQustion from './Questions/EditTextQustion';

import { Button } from '@mui/material';


const SurveyTemplate = () => {


  const [questions, setQuestion] = useState([])
  const [kind, setKind] = useState([])
  const [form, setForm] = useState()
  const { isClick, setIsClick, singleQuestion, setSingleQuestion, template, setTemplate, tempQuestion, setTempQuestion } = useContext(QuestionContext)


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
  const deleteQuestion = () => {


  }



  const onClick = () => {
    console.log(template)

  }
  useEffect(() => {


  }, [])


  return (
    <div>


      <div style={{ display: 'flex', marginLeft: "98px", marginTop: "18px", padding: '10px' }}>

        <div className="col-md-2">
          <SurveyComponent addQuestion={setQuestion} addKind={setKind} questions={questions} kind={kind}  ></SurveyComponent>
        </div>

        <div className="col-md-7">
          <FormGroup style={{ border: "1px solid" }}>
            <textarea className='surveyTemplateTextArea' placeholder='Başlık' >

            </textarea>
            <textarea className='surveyTemplateTextArea' placeholder='Açıklama' >

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
                        <Button style={{ marginTop: "10px" }} className='btn btn-danger' onClick={deleteQuestion}> Sil</Button></div>

                    </Card>
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