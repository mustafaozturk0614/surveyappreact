import { TextField, FormLabel, Input } from '@mui/material';
import React, { useContext } from 'react'

import * as Type from '../../utils/QuestionTypes'
import SurveyContext from '../../Context/SurveyContext';
function TextQuestion(props) {

  const { template, setTemplate } = useContext(SurveyContext)
  const { count, order, dbTemplate } = props
  const changeList = () => {

    if (template.questions.length > 0) {
      return template.questions
    } else {
      return dbTemplate.questions
    }

  }
  let list = changeList()
  return (
    <div>

      <div className="md-form">
        <FormLabel>  {list.map((data, index) => <div key={index}>{
          data.types == Type.COMMENT && data.orderNo == order ? data.title : ""

        }</div>


        )}</FormLabel>
        <TextField style={{ marginTop: '20px' }} id="form7" className="md-textarea form-control" rows="3" name={count}>






        </TextField>

      </div>



    </div>
  )
}
export default TextQuestion