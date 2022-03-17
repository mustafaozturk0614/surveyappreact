import { Card, FormGroup } from '@material-ui/core'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import BooleanQuestion from '../Questions/BooleanQuestion'
import QuestionContext from '../Questions/QuestionContext'
import RatingQuestion from '../Questions/RatingQuestion'
import TextQuestion from '../Questions/TextQuestion'
import SurveyService from './surveyService'

export default function SurveyTemplateDetail() {
    let { id } = useParams()

    const [temp, setTemp] = useState({})
    let a = ""
    const { template, setTemplate, singleQuestion } = useContext(QuestionContext)

    useEffect(() => {
        fetch("/getById?id=" + id, {
            method: "GET",

            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setTemp(result);
                    setTemplate({ ...template, result })


                })
        console.log(temp)


    }, [])

    const onClick = () => {
        let surveyService = new SurveyService()
        surveyService.getByProductId(id).then(result => setTemplate(result.data))


    }

    return (
        <div>
            <div>


                <div style={{ display: 'flex', marginLeft: "98px", marginTop: "18px", padding: '10px' }}>


                    <div className="col-md-7">
                        <FormGroup style={{ border: "1px solid" }}>
                            <textarea className='surveyTemplateTextArea' name="title" placeholder='Başlık' value={temp.title}  >

                            </textarea>
                            <textarea className='surveyTemplateTextArea' name="description" value={temp.description} placeholder='Açıklama' >

                            </textarea>
                            <div>


                                <ul style={{ display: 'flex', flexDirection: "column" }}>

                                    {temp.questions != undefined ?
                                        temp.questions.map((data, index) => <li key={index} style={{ display: 'block', margin: "20px" }}
                                        >  <Card style={{ display: 'flex', flexDirection: "row", padding: '10px', justifyContent: "space-between", alignItems: "center" }}> {(() => {
                                            switch (data.types) {
                                                case "1":
                                                    return (
                                                        <BooleanQuestion order={data.orderNo} />
                                                    )
                                                case "2":
                                                    return (
                                                        <RatingQuestion order={data.orderNo} singleQuestion={singleQuestion} template={template} />
                                                    )
                                                case "3":
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



                                        </li>


                                        ) : ""

                                    }



                                </ul>



                            </div>
                            <button style={{ margin: '20px' }} type="button" className="btn btn-primary" onClick={onClick}>Submit</button>



                        </FormGroup>

                    </div>

                </div >
            </div >
        </div >
    )


}
