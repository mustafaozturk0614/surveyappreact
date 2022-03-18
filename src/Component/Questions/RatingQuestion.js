import { FormControl, FormLabel, RadioGroup } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import QuestionContext from './QuestionContext'
import Rat from './rat'

function RatingQuestion(props) {

  const { count, OnChange, order } = props

  const { template, setTemplate, singleQuestion, setSingleQuestion, point, setPoint } = useContext(QuestionContext)




  let list = []
  let rat = (count, index) =>
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="radio" name={order} id="inlineRadio1"
        value={index} />
      <label className="form-check-label" htmlFor="inlineRadio1">{index}</label>
    </div>


  const print = () => {

    for (let index = 1; index <= point; index++) {

      list.push(rat(count, index))
      console.log(index)
    }
  }


  const a = print()

  useEffect(() => {
    print()
    console.log(list)
    console.log(singleQuestion)

    console.log(template.questions)


  }, [singleQuestion, template, list])
  return (


    <div>
      <FormControl>


        <FormLabel id="demo-row-radio-buttons-group-label" style={{ marginBottom: 8 }}>


          {template.questions.map((data, index) => <div key={index}><strong>{
            data.types == 2 && parseInt(data.orderNo) == parseInt(order) ? data.title : ""

          } </strong></div>


          )}   </FormLabel>





        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >

          <FormLabel id="demo-controlled-radio-buttons-group">


            {template.questions.map((data, index) => <div key={index}>{
              data.types == 2 && parseInt(data.orderNo) == parseInt(order) ? data.start : ""

            } </div>


            )}   </FormLabel>

          <div style={{ display: 'flex', flexDirection: "row" }}>
            {list.map((d, index) => <div style={{ display: "flex" }}>
              {d}

            </div >)

            } </div >












          <div div className="d-inline me-4" >
            <FormLabel id="demo-controlled-radio-buttons-group">


              {template.questions.map((data, index) => <div key={index}>{
                data.types == 2 && parseInt(data.orderNo) == parseInt(order) ? data.finish : ""

              } </div>


              )}   </FormLabel>
          </div>

        </RadioGroup >


      </FormControl>
    </div >
  )

}
export default RatingQuestion