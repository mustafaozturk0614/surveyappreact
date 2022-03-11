import { TextField, FormLabel, Input } from '@mui/material';
import React, { useContext } from 'react'
import QuestionContext from '../Questions/QuestionContext';
function TextQuestion(props) {
  const { singleQuestion, setSingleQuestion, template, setTemplate, tempQuestion, setTempQuestion } = useContext(QuestionContext)
  const { count, order } = props

  return (
    <div>

      <div className="md-form">
        <FormLabel>  {template.questions.map((data, index) => <div key={index}>{
          data.types == 3 && data.orderNo == order ? data.title : ""

        }</div>


        )}</FormLabel>
        <TextField style={{ marginTop: '20px' }} id="form7" className="md-textarea form-control" rows="3" name={count}>






        </TextField>

      </div>



    </div>
  )
}
export default TextQuestion