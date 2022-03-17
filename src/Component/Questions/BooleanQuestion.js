import React, { useContext, useEffect, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSelector } from 'react-redux';
import QuestionContext from '../Questions/QuestionContext';
function BooleanQuestion(props) {
  const { count, order } = props


  const { singleQuestion, setSingleQuestion, template, setTemplate, tempQuestion, setTempQuestion } = useContext(QuestionContext)

  const [value, setValue] = useState('female');



  const handleChange = (event) => {
    setValue(event.target.value);

  };
  const onsubmit = (e) => {
    e.preventDefault()
    console.log(value)

  }
  useEffect(() => {

    setTemplate(template)


  }, [singleQuestion, template])




  return (
    <FormControl>

      <FormLabel id="demo-controlled-radio-buttons-group">


        {template.questions.map((data, index) => <div key={index}>{
          data.types == 1 && data.orderNo == order ? data.title : ""

        }</div>


        )}   </FormLabel>

      <FormControlLabel value="female" control={<Radio />} label={template.questions.map((data, index) => <div key={index}>{
        data.types == 1 && data.orderNo == order && data.option.length > 0 ? data.option[data.option.length - 2] : ""

      }</div>


      )} />
      <FormControlLabel value="male" control={<Radio />} label={template.questions.map((data, index) => <div key={index}>{
        data.types == 1 && data.orderNo == order && data.option.length > 0 ? data.option[data.option.length - 1] : ""

      }</div>


      )} />


    </FormControl >
  );

}
export default BooleanQuestion