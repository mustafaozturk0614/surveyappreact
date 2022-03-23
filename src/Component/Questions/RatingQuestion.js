import { FormControl, FormLabel, hexToRgb, RadioGroup } from '@material-ui/core'
import { Badge } from '@mui/material'
import { height, padding, positions, width } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import QuestionContext from '../../Context/QuestionContext'
import * as Type from '../../utils/QuestionTypes'
import SurveyContext from '../../Context/SurveyContext';

function RatingQuestion(props) {

  const { count, OnChange, order, dbTemplate } = props

  const { point, setPoint } = useContext(QuestionContext)

  const { template, setTemplate } = useContext(SurveyContext)


  let list = []
  let rat = (count, index) =>
    <div style={{ display: "flex", flexDirection: 'column', paddingLeft: 5 }}>
      <input className="form-check-input" type="radio" name={order} id="inlineRadio1"
        value={index} />
      <label className="form-check-label" htmlFor="inlineRadio1" style={{ width: 10 }}>{index}</label>
    </div >
  const changeList = () => {

    if (template.questions.length > 0) {
      return template.questions
    } else {
      return dbTemplate.questions
    }

  }
  let dbList = changeList()

  const print = () => {

    for (let index = 1; index <= point; index++) {

      list.push(rat(count, index))

    }
  }
  const clearList = () => {

    list.splice(0, list.length - 1)

    console.log(list)
  }


  const a = print()

  useEffect(() => {
    print()
    // return (
    //   clearList()

    // )

  }, [point])
  return (


    <div>
      <FormControl style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'space-between' }}  >


        <FormLabel id="demo-row-radio-buttons-group-label" style={{ marginBottom: 8 }}>


          {dbList.map((data, index) => <div key={index}><strong>{
            data.types == Type.LINEAR && parseInt(data.orderNo) == parseInt(order) ? data.title : ""

          } </strong></div>


          )}   </FormLabel>

        <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around' }} >
          <FormLabel id="demo-controlled-radio-buttons-group" style={{ padding: 5 }}>
            {dbList.map((data, index) => <div key={index}>{
              data.types == Type.LINEAR == 2 && parseInt(data.orderNo) == parseInt(order) ? data.start : ""

            } </div>

            )}   </FormLabel>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {list.map((d, index) => <div key={index}>
              {d}

            </div >)

            } </div >

          <FormLabel id="demo-controlled-radio-buttons-group" style={{ padding: 5 }}>


            {dbList.map((data, index) => <div key={index}>{
              parseInt(data.types) == 2 && parseInt(data.orderNo) == parseInt(order) ? data.finish : ""

            } </div>


            )}   </FormLabel>
        </div>
      </FormControl>


    </div >
  )

}
export default RatingQuestion